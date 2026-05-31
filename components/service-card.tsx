import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  href,
  detailed = false,
  className,
}: {
  service: Service;
  href?: string;
  detailed?: boolean;
  className?: string;
}) {
  const Icon = service.icon;

  const classes = cn(
    "glass glass-hover group relative flex h-full flex-col overflow-hidden p-7",
    href && "cursor-pointer",
    className
  );

  const inner = (
    <>
      <div
        aria-hidden
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-cyan/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan transition-colors duration-500 group-hover:border-accent-cyan/40">
          <Icon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        {href && (
          <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        )}
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/55">
        {detailed ? service.description : service.summary}
      </p>

      {detailed && (
        <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
          {service.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2.5 text-sm text-white/65"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
              {d}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return <div className={classes}>{inner}</div>;
}
