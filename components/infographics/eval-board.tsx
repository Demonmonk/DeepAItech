"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CountUp } from "@/components/count-up";

/**
 * Eval scoreboard — how we measure AI before it ships. Bars fill and
 * percentages count up when scrolled into view.
 */
const ROWS = [
  { label: "Faithfulness to sources", value: 96 },
  { label: "Answer relevance", value: 94 },
  { label: "Refusal correctness", value: 98 },
  { label: "Regression suite", value: 100 },
];

export function EvalBoard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <div
      ref={ref}
      className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60"
    >
      {/* terminal-style header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="font-mono text-xs text-white/50">
          eval-run <span className="text-white/80">#128</span> · golden-set v6
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-xs text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          PASSING
        </span>
      </div>

      <div className="space-y-5 px-5 py-6 md:px-7">
        {ROWS.map((row, i) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/55">
                {row.label}
              </span>
              <span className="headline text-xl text-white">
                <CountUp value={`${row.value}%`} />
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={reduce ? { width: `${row.value}%` } : { width: 0 }}
                animate={inView ? { width: `${row.value}%` } : undefined}
                transition={{ duration: 1.1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-5 py-3">
        <p className="font-mono text-[11px] text-white/35">
          Nothing ships below threshold. Evals re-run on every change.
        </p>
      </div>
    </div>
  );
}
