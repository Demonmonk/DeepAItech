"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { FlowField } from "@/components/sections/flow-field";

const easing = [0.16, 1, 0.3, 1] as const;
const sectors = ["Finance", "Healthcare", "Retail", "Government", "PropTech"];

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const artOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.12]);

  const wrap = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };
  const lineV = {
    hidden: reduce ? {} : { y: "115%" },
    show: { y: 0, transition: { duration: 1, ease: easing } },
  };
  const fade = {
    hidden: reduce ? {} : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easing } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* generative data-art */}
      <motion.div style={{ y: artY, opacity: artOpacity }} className="absolute inset-0">
        <FlowField />
        {/* legibility masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
      </motion.div>

      <div className="container-max relative z-10">
        <motion.div variants={wrap} initial="hidden" animate="show">
          {/* masthead */}
          <motion.div
            variants={fade}
            className="flex items-center gap-3 border-b border-white/10 pb-5"
          >
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_2px_rgba(31,240,192,0.8)]" />
            <span className="index">
              {site.name} — AI &amp; Software Consultancy
            </span>
            <span className="index ml-auto hidden sm:block">
              Est. {site.founded} · {site.location}
            </span>
          </motion.div>

          {/* headline */}
          <h1 className="headline mt-10 max-w-[64rem] text-[2.9rem] font-extrabold uppercase leading-[0.94] text-white sm:text-7xl lg:text-[5.7rem]">
            {["We build intelligent", "systems that move", "your business forward."].map(
              (l, i) => (
                <span key={i} className="block overflow-hidden pb-[0.08em]">
                  <motion.span variants={lineV} className="block">
                    {l}
                  </motion.span>
                </span>
              )
            )}
          </h1>

          {/* lead + actions */}
          <motion.div
            variants={fade}
            className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <p className="max-w-xl text-lg leading-relaxed text-white/65">
              {site.legalName} is a Dubai-based AI and software consultancy. We
              turn ambitious ideas into production-grade reality — from
              generative AI and custom platforms to full digital transformation.
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

          {/* sectors */}
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
