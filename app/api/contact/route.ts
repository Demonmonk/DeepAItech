import { NextResponse } from "next/server";

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

  // In production, fan this out to email (Resend/SES), a CRM, or Slack.
  // For now we log server-side so the integration point is obvious.
  console.info("[contact] new submission:", submission);

  // TODO: integrate delivery, e.g.
  //   await resend.emails.send({ ... })
  //   await fetch(process.env.SLACK_WEBHOOK_URL, { ... })

  return NextResponse.json(
    {
      ok: true,
      message:
        "Thanks — your message reached us. We'll be in touch within one business day.",
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json(
    { ok: true, service: "contact", status: "healthy" },
    { status: 200 }
  );
}
