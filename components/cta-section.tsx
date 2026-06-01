import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function CtaSection({
  title = "Let's build something intelligent.",
  description = "Tell us about your goals. We'll bring the strategy, design, and engineering to make them real.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <div className="border-glow relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 px-6 py-16 text-center md:px-16 md:py-24">
            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-cyan/20 blur-[100px]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-dots opacity-30"
            />
            <div className="relative">
              <span className="index inline-flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-accent-cyan/60" />
                Start a project
              </span>
              <h2 className="headline mx-auto mt-6 max-w-2xl text-[2rem] leading-[1.08] text-white text-balance md:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/55 md:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/work" className="btn-ghost">
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
