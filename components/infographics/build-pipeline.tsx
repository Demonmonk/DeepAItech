"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { buildPipeline } from "@/lib/content";
import { cn } from "@/lib/utils";

export function BuildPipeline() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const stage = buildPipeline[active];
  const Icon = stage.icon;
  const progress =
    buildPipeline.length > 1
      ? (active / (buildPipeline.length - 1)) * 100
      : 0;

  return (
    <div>
      {/* Stepper */}
      <div className="relative">
        {/* connector track (md+) */}
        <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-white/10 md:block">
          <motion.div
            className="h-px bg-accent-gradient"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="grid grid-flow-col gap-3 overflow-x-auto pb-2 md:grid-flow-row md:grid-cols-5 md:gap-2 md:overflow-visible md:pb-0">
          {buildPipeline.map((s, i) => {
            const StepIcon = s.icon;
            const isActive = i === active;
            const isDone = i < active;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="group flex min-w-[8.5rem] flex-col items-center gap-3 text-center md:min-w-0"
              >
                <span
                  className={cn(
                    "relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border bg-ink-800 transition-all duration-300",
                    isActive
                      ? "border-accent-cyan/60 text-white shadow-[0_0_30px_-6px_rgba(204,255,0,0.7)]"
                      : isDone
                        ? "border-accent-violet/40 text-white/80"
                        : "border-white/10 text-white/40 group-hover:border-white/25 group-hover:text-white/70"
                  )}
                >
                  <StepIcon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] text-accent-cyan">
                    0{i + 1}
                  </span>
                  <span
                    className={cn(
                      "font-display text-sm font-semibold tracking-tight transition-colors",
                      isActive ? "text-white" : "text-white/55 group-hover:text-white/80"
                    )}
                  >
                    {s.title}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div className="mt-8 min-h-[12rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-6 border-t border-white/15 pt-8 md:grid-cols-[auto,1fr] md:gap-8"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan">
              <Icon className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                {stage.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60">
                {stage.detail}
              </p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                {stage.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
