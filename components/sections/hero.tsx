"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  };

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28">
      {/* orbital decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-15%] top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div className="absolute right-[-8%] top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full border border-white/[0.05]" />
        <motion.div
          className="absolute right-[18%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent-cyan shadow-[0_0_24px_4px_rgba(34,211,238,0.7)]"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "-320px 0" }}
        />
      </div>

      <div className="container-max">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
              AI · Software · Digital Transformation
              <span className="h-1 w-1 rounded-full bg-white/30" />
              {site.location}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.03] tracking-tightest text-white text-balance sm:text-6xl lg:text-7xl"
          >
            We build the{" "}
            <span className="text-gradient">intelligent systems</span> that
            move your business forward.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
          >
            {site.legalName} is a Dubai-based AI and software consultancy. From
            generative AI and custom platforms to full digital transformation —
            we turn ambitious ideas into production-grade reality.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/contact" className="btn-primary">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-ghost">
              Explore services
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/45"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-white/35">
              Trusted across
            </span>
            {["Finance", "Healthcare", "Retail", "Government", "PropTech"].map(
              (s) => (
                <span key={s} className="text-white/55">
                  {s}
                </span>
              )
            )}
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
