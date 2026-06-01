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
        "group flex h-full flex-col border-t border-white/15 pt-6 transition-colors duration-500 hover:border-accent-cyan/50",
        className
      )}
    >
      <div className="flex items-center gap-3 text-xs">
        <span className="index text-accent-glow">{insight.category}</span>
        <span className="text-white/30">·</span>
        <span className="text-white/40">{insight.readTime} read</span>
      </div>

      <h3 className="headline mt-4 text-xl leading-snug text-white transition-colors duration-500 group-hover:text-accent-glow">
        {insight.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
        {insight.excerpt}
      </p>

      <div className="mt-5 flex items-center justify-between text-xs text-white/40">
        <span>{formatDate(insight.date)}</span>
        <span className="inline-flex items-center gap-1 text-white/60 transition-colors group-hover:text-white">
          Read
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
