import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pb-12 pt-36 md:pb-16 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-accent-cyan/10 blur-[120px]"
      />
      <div className="container-max relative">
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-white text-balance md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </header>
  );
}
