import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/content";
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
        "glass glass-hover group relative flex h-full flex-col overflow-hidden p-8",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.04] to-accent-violet/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-sm font-medium text-white">{study.client}</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span className="text-xs text-white/45">{study.industry}</span>
        </div>
        <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>

      <h3 className="relative mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-white md:text-2xl">
        {study.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/55">
        {study.summary}
      </p>

      <div className="relative mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
        {study.metrics.map((m) => (
          <div key={m.label}>
            <div className="font-display text-xl font-semibold text-gradient-accent md:text-2xl">
              {m.value}
            </div>
            <div className="mt-1 text-xs leading-tight text-white/45">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {study.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/55"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
