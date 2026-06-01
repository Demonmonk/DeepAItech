import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "index inline-flex items-center gap-3",
              align === "center" && "justify-center"
            )}
          >
            <span className="h-px w-8 bg-accent-cyan/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="headline mt-5 text-[2rem] leading-[1.08] text-white text-balance md:text-[2.85rem] lg:text-[3.1rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-white/55 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
