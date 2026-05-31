"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const budgets = [
  "< $25k",
  "$25k – $75k",
  "$75k – $200k",
  "$200k+",
  "Not sure yet",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setServerMessage("");
    setFieldErrors({});

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setServerMessage(json.error || "Something went wrong. Please try again.");
        if (json.fields) setFieldErrors(json.fields);
        return;
      }

      setStatus("success");
      setServerMessage(json.message || "Thanks — we'll be in touch shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setServerMessage(
        "We couldn't reach the server. Please try again, or email us directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="glass flex flex-col items-center justify-center px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-cyan/40 bg-accent-cyan/10 text-accent-glow">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-white">
          Message sent
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
          {serverMessage}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-8"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-6 md:p-8" noValidate>
      {/* honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={fieldErrors.name}>
          <input
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="form-input"
          />
        </Field>
        <Field label="Email" error={fieldErrors.email}>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="form-input"
          />
        </Field>
        <Field label="Company" optional>
          <input
            name="company"
            type="text"
            placeholder="Company name"
            className="form-input"
          />
        </Field>
        <Field label="Budget" optional>
          <select name="budget" className="form-input" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What do you need?" optional>
          <select name="service" className="form-input" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Project details" error={fieldErrors.message}>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your goals, timeline, and what success looks like…"
            className="form-input resize-none"
          />
        </Field>
      </div>

      {status === "error" && serverMessage && (
        <p className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {serverMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-xs text-white/40">
        By submitting, you agree to be contacted about your inquiry. We never
        share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-medium text-white/75">
        {label}
        {optional && <span className="text-xs text-white/35">optional</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
