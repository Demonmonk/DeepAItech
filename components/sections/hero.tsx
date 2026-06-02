"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;
const sectors = ["Finance", "Healthcare", "Retail", "Government", "PropTech"];

export function Hero() {
  const reduce = useReducedMotion();

  const wrap = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const line = {
    hidden: reduce ? {} : { y: "115%" },
    show: { y: 0, transition: { duration: 0.95, ease } },
  };
  const fade = {
    hidden: reduce ? {} : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  };

  return (
    <section className="relative flex min-h-[96vh] items-center overflow-hidden pt-32">
      <HeroVisual reduce={!!reduce} />

      <div className="container-max relative">
        <motion.div variants={wrap} initial="hidden" animate="show">
          {/* masthead */}
          <motion.div
            variants={fade}
            className="flex items-center justify-between border-b border-white/10 pb-5"
          >
            <span className="index">
              {site.name} — AI &amp; Software Consultancy
            </span>
            <span className="index hidden sm:block">
              Est. {site.founded} · {site.location}
            </span>
          </motion.div>

          {/* headline — line-masked reveal */}
          <h1 className="headline mt-10 max-w-[60rem] text-[2.9rem] leading-[1.0] text-white sm:text-6xl lg:text-[5.4rem]">
            {[
              <>We build</>,
              <span key="2" className="headline-italic text-gradient">
                intelligent systems
              </span>,
              <>that move your business forward.</>,
            ].map((content, i) => (
              <span key={i} className="block overflow-hidden pb-[0.12em]">
                <motion.span variants={line} className="block">
                  {content}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* lead + actions */}
          <motion.div
            variants={fade}
            className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <p className="max-w-xl text-lg leading-relaxed text-white/60">
              {site.legalName} is a Dubai-based AI and software consultancy. From
              generative AI and custom platforms to full digital transformation,
              we turn ambitious ideas into production-grade reality.
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/contact" className="btn-primary">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/work" className="link-line">
                See our work
              </Link>
            </div>
          </motion.div>

          {/* sectors masthead */}
          <motion.div
            variants={fade}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6"
          >
            <span className="index">Trusted across</span>
            {sectors.map((s) => (
              <span key={s} className="text-sm text-white/55">
                {s}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1"
        >
          <span className="h-2 w-1 rounded-full bg-white/50" />
        </motion.div>
      </div>
    </section>
  );
}

/** Refined orbital system — concentric rings, a dashed ring, and orbiting nodes. */
function OrbitNode({
  radius,
  dur,
  dir = 1,
  reduce,
  className,
}: {
  radius: number;
  dur: number;
  dir?: number;
  reduce: boolean;
  className: string;
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-0 w-0"
      animate={reduce ? undefined : { rotate: 360 * dir }}
      transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
    >
      <span
        className={className}
        style={{ transform: `translate(${radius}px, -50%)` }}
      />
    </motion.div>
  );
}

function HeroVisual({ reduce }: { reduce: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* core glow */}
      <div className="absolute right-[6%] top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-accent-cyan/15 blur-[130px]" />
      <div className="absolute right-[2%] top-[38%] h-[320px] w-[320px] rounded-full bg-accent-violet/15 blur-[130px]" />

      {/* ring system */}
      <div className="absolute right-[2%] top-1/2 -translate-y-1/2 lg:right-[8%]">
        <div className="relative h-[300px] w-[300px] sm:h-[440px] sm:w-[440px] lg:h-[560px] lg:w-[560px]">
          {[0.55, 0.78, 1].map((s, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
              style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
            />
          ))}

          {/* dashed rotating ring */}
          <svg
            viewBox="0 0 100 100"
            className={`absolute inset-0 h-full w-full ${reduce ? "" : "spin-slow"}`}
          >
            <circle
              cx="50"
              cy="50"
              r="39"
              fill="none"
              strokeDasharray="0.5 3"
              strokeWidth="0.3"
              className="stroke-white/30"
            />
          </svg>

          {/* center node */}
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-glow shadow-[0_0_24px_6px_rgba(103,232,249,0.7)]" />

          {/* orbiting nodes */}
          <OrbitNode
            radius={reduce ? 0 : 152}
            dur={20}
            reduce={reduce}
            className="block h-2.5 w-2.5 rounded-full bg-accent-cyan shadow-[0_0_18px_4px_rgba(34,211,238,0.7)]"
          />
          <OrbitNode
            radius={reduce ? 0 : 108}
            dur={14}
            dir={-1}
            reduce={reduce}
            className="block h-1.5 w-1.5 rounded-full bg-accent-violet shadow-[0_0_14px_3px_rgba(139,92,246,0.7)]"
          />
        </div>
      </div>
    </div>
  );
}
