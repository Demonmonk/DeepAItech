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
          <RevealGroup className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <RevealItem key={sol.title}>
                  <div className="group border-t border-white/10 pt-6 transition-colors duration-500 hover:border-accent-cyan/50">
                    <div className="flex items-center justify-between">
                      <Icon
                        className="h-5 w-5 text-accent-cyan"
                        strokeWidth={1.6}
                      />
                      <span className="index">S/0{i + 1}</span>
                    </div>
                    <h3 className="headline mt-5 text-xl text-white">
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
          <RevealGroup className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <RevealItem key={ind.name}>
                <div className="group border-t border-white/10 pt-5 transition-colors duration-500 hover:border-accent-cyan/50">
                  <h3 className="headline text-lg text-white">{ind.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/50">
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
