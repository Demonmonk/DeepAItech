import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";
import { Sparkline } from "@/components/infographics/sparkline";
import { cn } from "@/lib/utils";

export function CaseStudyCard({
  study,
  className,
}: {
  study: CaseStudy;
  className?: string;
}) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className={cn(
        "group flex h-full flex-col border-t border-white/15 pt-7 transition-colors duration-500 hover:border-accent-cyan/50",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-medium text-white">{study.client}</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span className="text-xs text-white/45">{study.industry}</span>
        </div>
        <ArrowUpRight className="h-5 w-5 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>

      <h3 className="headline mt-5 text-[1.7rem] leading-snug text-white transition-colors duration-500 group-hover:text-accent-glow md:text-[1.9rem]">
        {study.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">
        {study.summary}
      </p>

      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
        {study.metrics.map((m) => (
          <div key={m.label}>
            <div className="headline text-2xl text-gradient-accent md:text-[1.7rem]">
              {m.value}
            </div>
            <Sparkline
              seed={study.slug + m.label}
              className="mt-2 h-5 w-full opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="mt-2 text-xs leading-tight text-white/45">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/35">
        {study.tags.join("  /  ")}
      </div>
    </Link>
  );
}
