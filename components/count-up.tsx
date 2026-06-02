"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const PARSE = /^(\D*)(\d+(?:\.\d+)?)(.*)$/;

const easeOutExpo = (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

/**
 * Animates the numeric part of a string (e.g. "38%", "2.1×", "~2 wks",
 * "2026") from zero to its value when scrolled into view. Non-numeric values
 * render unchanged. SSR-safe (renders the final value until it animates).
 */
export function CountUp({
  value,
  duration = 1300,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const m = value.match(PARSE);
    if (!m || reduce || !inView) {
      setDisplay(value);
      return;
    }
    const prefix = m[1];
    const target = parseFloat(m[2]);
    const suffix = m[3];
    const decimals = m[2].includes(".") ? m[2].split(".")[1].length : 0;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const v = target * easeOutExpo(p);
      setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}
