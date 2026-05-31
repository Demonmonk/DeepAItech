import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "@/lib/content";
import { cn, formatDate } from "@/lib/utils";

export function InsightCard({
  insight,
  className,
}: {
  insight: Insight;
  className?: string;
}) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]",
        className
      )}
    >
      <div className="flex items-center gap-3 text-xs">
        <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 font-medium text-accent-glow">
          {insight.category}
        </span>
        <span className="text-white/40">{insight.readTime} read</span>
      </div>

      <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-accent-glow">
        {insight.title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-white/55">
        {insight.excerpt}
      </p>

      <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/40">
        <span>{formatDate(insight.date)}</span>
        <span className="inline-flex items-center gap-1 text-white/60 transition-colors group-hover:text-white">
          Read
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
