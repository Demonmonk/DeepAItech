import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { AmbientBackground } from "@/components/background";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { solutions, industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Intelligent assistants, predictive intelligence, process automation, and secure AI — applied across industries.",
};

export default function SolutionsPage() {
  return (
    <>
      <AmbientBackground variant="minimal" />
      <PageHeader
        eyebrow="Solutions"
        title={
          <>
            Where intelligence meets
            <span className="text-gradient"> measurable outcomes</span>.
          </>
        }
        description="Reusable solution patterns we deploy and tailor to your context — proven building blocks that accelerate time to value."
      />

      <section className="relative pb-8">
        <div className="container-max">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <RevealItem key={sol.title}>
                  <div className="glass glass-hover group h-full p-8">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan transition-colors duration-500 group-hover:border-accent-cyan/40">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
                      {sol.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      {sol.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Industries */}
      <section className="relative py-24 md:py-32">
        <div className="container-max">
          <SectionHeading
            eyebrow="Industries"
            title="Domain depth where it counts"
            description="We pair engineering rigor with sector knowledge — so solutions land in the real-world context of your business."
          />
          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <RevealItem key={ind.name}>
                <div className="group h-full bg-ink-900 p-7 transition-colors duration-500 hover:bg-ink-800">
                  <h3 className="font-display text-base font-semibold text-white">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {ind.blurb}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection
        title="See your industry here?"
        description="Let's talk about the highest-impact opportunity in your business right now."
      />
    </>
  );
}
