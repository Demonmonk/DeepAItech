"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { assurance } from "@/lib/content";
import { cn } from "@/lib/utils";

const R = 41; // orbit radius as % of the square container
const positions = assurance.map((_, i) => {
  const theta = (-90 + i * (360 / assurance.length)) * (Math.PI / 180);
  return { x: 50 + R * Math.cos(theta), y: 50 + R * Math.sin(theta) };
});

export function AssuranceOrbit() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const item = assurance[active];
  const Icon = item.icon;

  return (
    <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
      {/* Orbit */}
      <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
        {/* rings + connectors */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <circle cx="50" cy="50" r={R} fill="none" className="stroke-white/[0.08]" strokeWidth="0.3" />
          <circle
            cx="50"
            cy="50"
            r={R + 6}
            fill="none"
            strokeDasharray="0.6 2.5"
            strokeWidth="0.3"
            className={cn("stroke-white/15", !reduce && "spin-slow")}
          />
          {positions.map((p, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={p.x}
              y2={p.y}
              strokeWidth="0.35"
              stroke={i === active ? "url(#orbitGrad)" : "rgba(255,255,255,0.08)"}
              className={i === active && !reduce ? "flow-line" : undefined}
            />
          ))}
          <defs>
            <linearGradient id="orbitGrad" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#1ff0c0" />
              <stop offset="100%" stopColor="#15c9a0" />
            </linearGradient>
          </defs>
        </svg>

        {/* core */}
        <div className="absolute left-1/2 top-1/2 flex h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-800/80 backdrop-blur-sm">
          <div className="px-4 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <Icon
                  className="mx-auto h-5 w-5 text-accent-cyan"
                  strokeWidth={1.6}
                />
                <div className="headline mt-2 text-sm leading-tight text-white">
                  {item.title}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* nodes */}
        {positions.map((p, i) => {
          const NodeIcon = assurance[i].icon;
          const isActive = i === active;
          return (
            <button
              key={assurance[i].title}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={assurance[i].title}
              aria-pressed={isActive}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border bg-ink-800 transition-all duration-300",
                  isActive
                    ? "border-accent-cyan/70 text-white shadow-[0_0_26px_-4px_rgba(31,240,192,0.8)]"
                    : "border-white/12 text-white/45 hover:border-white/30 hover:text-white/80"
                )}
              >
                <NodeIcon className="h-5 w-5" strokeWidth={1.6} />
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
        <span className="index">
          0{active + 1} / 0{assurance.length}
        </span>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="headline mt-4 text-2xl text-white md:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
              {item.detail}
            </p>
          </motion.div>
        </AnimatePresence>
        <p className="mt-8 text-xs text-white/35">
          Hover or tap a node to explore each principle.
        </p>
      </div>
    </div>
  );
}
