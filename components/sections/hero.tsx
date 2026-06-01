"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;
const sectors = ["Finance", "Healthcare", "Retail", "Government", "PropTech"];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  };

  return (
    <section className="relative flex min-h-[94vh] items-center overflow-hidden pt-32">
      {/* orbital decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-18%] top-1/2 h-[680px] w-[680px] -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div className="absolute right-[-10%] top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-white/[0.05]" />
        <motion.div
          className="absolute right-[16%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent-cyan shadow-[0_0_24px_4px_rgba(34,211,238,0.7)]"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "-330px 0" }}
        />
      </div>

      <div className="container-max">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* masthead */}
          <motion.div
            variants={item}
            className="flex items-center justify-between border-b border-white/10 pb-5"
          >
            <span className="index">
              {site.name} — AI &amp; Software Consultancy
            </span>
            <span className="index hidden sm:block">
              Est. {site.founded} · {site.location}
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={item}
            className="headline mt-10 max-w-5xl text-[2.7rem] leading-[1.02] text-white text-balance sm:text-6xl lg:text-[5.2rem]"
          >
            We build{" "}
            <span className="headline-italic text-gradient">
              intelligent systems
            </span>{" "}
            that move your business forward.
          </motion.h1>

          {/* lead + actions */}
          <motion.div
            variants={item}
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
              <Link href="/services" className="link-line">
                Explore services
              </Link>
            </div>
          </motion.div>

          {/* sectors masthead */}
          <motion.div
            variants={item}
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
