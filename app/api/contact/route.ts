import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  service?: string;
  message?: string;
  // honeypot — bots fill this, humans never see it
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// naive in-memory rate limiter (per warm instance) — replace with a durable
// store (Redis/Upstash) for multi-instance production deployments.
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now > entry.reset) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "anonymous";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: silently accept to avoid tipping off bots.
  if (data.website && data.website.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const errors: Record<string, string> = {};
  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10)
    errors.message = "Please tell us a little more (10+ characters).";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fields: errors },
      { status: 422 }
    );
  }

  const submission = {
    name,
    email,
    company: data.company?.trim() || "—",
    budget: data.budget?.trim() || "—",
    service: data.service?.trim() || "General inquiry",
    message,
    receivedAt: new Date().toISOString(),
    ip,
  };

  // Always log server-side; then fan out to whatever delivery is configured.
  console.info("[contact] new submission:", submission);
  await deliver(submission);

  return NextResponse.json(
    {
      ok: true,
      message:
        "Thanks — your message reached us. We'll be in touch within one business day.",
    },
    { status: 200 }
  );
}

type Submission = {
  name: string;
  email: string;
  company: string;
  budget: string;
  service: string;
  message: string;
  receivedAt: string;
  ip: string;
};

/**
 * Deliver a submission to whatever channels are configured via env:
 *  - RESEND_API_KEY  → email via Resend (to CONTACT_TO or site.email)
 *  - CONTACT_WEBHOOK_URL → Slack/Discord/generic incoming webhook
 * If neither is set, the submission is still logged above (no-op here).
 * Delivery never throws into the request — failures are logged, the user
 * still gets a success response (their message is captured in logs).
 */
async function deliver(s: Submission) {
  await Promise.allSettled([sendEmail(s), sendWebhook(s)]);
}

async function sendEmail(s: Submission) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  const to = process.env.CONTACT_TO || site.email;
  const from = process.env.CONTACT_FROM || "Deep AI Tech <onboarding@resend.dev>";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: s.email,
        subject: `New enquiry — ${s.name}${s.company !== "—" ? ` (${s.company})` : ""}`,
        text: [
          `Name: ${s.name}`,
          `Email: ${s.email}`,
          `Company: ${s.company}`,
          `Budget: ${s.budget}`,
          `Service: ${s.service}`,
          "",
          s.message,
          "",
          `Received: ${s.receivedAt}`,
          `IP: ${s.ip}`,
        ].join("\n"),
      }),
    });
    if (!res.ok) {
      console.error("[contact] resend failed:", res.status, await res.text());
    }
  } catch (err) {
    console.error("[contact] resend error:", err);
  }
}

async function sendWebhook(s: Submission) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // `text` works for Slack & Discord incoming webhooks alike.
      body: JSON.stringify({
        text: `*New enquiry — ${s.name}* (${s.company})\n${s.email} · ${s.service} · ${s.budget}\n\n${s.message}`,
      }),
    });
    if (!res.ok) {
      console.error("[contact] webhook failed:", res.status);
    }
  } catch (err) {
    console.error("[contact] webhook error:", err);
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: true, service: "contact", status: "healthy" },
    { status: 200 }
  );
}
