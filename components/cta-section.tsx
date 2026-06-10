"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const LINES = [
  { text: '$ deepaitech init --partner "your-company"', cls: "text-white/85" },
  { text: "→ scoping the problem worth solving …", cls: "text-white/45" },
  { text: "→ assembling a senior pod …", cls: "text-white/45" },
  { text: "→ grounding AI in your data …", cls: "text-white/45" },
  { text: "✓ prototype shipped — week 2", cls: "text-accent" },
];

export function CtaSection({
  title = "Let's build something intelligent.",
  description = "Tell us about your goals. We'll bring the strategy, design, and engineering to make them real.",
}: {
  title?: string;
  description?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setShown(LINES.length);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= LINES.length) clearInterval(id);
    }, 650);
    return () => clearInterval(id);
  }, [inView, reduce]);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-max">
        <div
          ref={ref}
          className="border-glow relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 px-6 py-14 md:px-14 md:py-20"
        >
          <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-[110px]"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            {/* copy */}
            <div>
              <span className="index inline-flex items-center gap-3">
                <span className="h-px w-8 bg-accent/60" />
                Start a project
              </span>
              <h2 className="headline mt-6 max-w-xl text-3xl leading-[1.05] text-white text-balance md:text-5xl">
                {title}
              </h2>
              <p className="mt-5 max-w-lg text-base text-white/55 md:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link href="/contact" className="btn-primary">
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/work" className="link-line">
                  See our work
                </Link>
              </div>
            </div>

            {/* terminal */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-ink shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[11px] text-white/35">
                  deepaitech — engagement
                </span>
              </div>
              <div className="min-h-[11.5rem] px-5 py-5 font-mono text-[13px] leading-7">
                {LINES.slice(0, shown).map((l) => (
                  <div key={l.text} className={l.cls}>
                    {l.text}
                  </div>
                ))}
                <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
