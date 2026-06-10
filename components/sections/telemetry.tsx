"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Live telemetry strip — an ops readout that ticks in real time.
 * Values jitter/grow on an interval so the site feels like a running system.
 */
type Metric = {
  label: string;
  value: number;
  unit: string;
  decimals: number;
  jitter: number;
  grow?: boolean;
};

const BASE: Metric[] = [
  { label: "Platform uptime", value: 99.95, unit: "%", decimals: 2, jitter: 0.02 },
  { label: "p95 latency", value: 412, unit: "ms", decimals: 0, jitter: 16 },
  { label: "Evals run (7d)", value: 1284, unit: "", decimals: 0, jitter: 3, grow: true },
  { label: "Tokens served (24h)", value: 4.2, unit: "M", decimals: 1, jitter: 0.05, grow: true },
  { label: "Guardrail blocks (24h)", value: 38, unit: "", decimals: 0, jitter: 1, grow: true },
  { label: "Deploys this week", value: 17, unit: "", decimals: 0, jitter: 0.4, grow: true },
];

export function Telemetry() {
  const reduce = useReducedMotion();
  const [vals, setVals] = useState(BASE.map((m) => m.value));

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setVals((prev) =>
        prev.map((v, i) => {
          const m = BASE[i];
          const next = m.grow
            ? v + Math.random() * m.jitter
            : m.value + (Math.random() * 2 - 1) * m.jitter;
          return +next.toFixed(m.decimals);
        })
      );
    }, 2200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="border-y border-white/10 bg-ink-900/60">
      <div className="container-max flex flex-wrap items-center gap-x-10 gap-y-3 py-4">
        <span className="index inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Live telemetry
        </span>
        {BASE.map((m, i) => (
          <span key={m.label} className="flex items-baseline gap-2">
            <span className="font-mono text-sm tabular-nums text-accent">
              {vals[i].toFixed(m.decimals)}
              {m.unit}
            </span>
            <span className="text-xs text-white/40">{m.label}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
