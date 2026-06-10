import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { AmbientBackground } from "@/components/background";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { ServiceGlyph } from "@/components/infographics/service-glyph";
import { CapabilityRadar } from "@/components/infographics/capability-radar";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI engineering, custom software, web experiences, data platforms, digital transformation, and strategic advisory from Deep AI Tech.",
};

export default function ServicesPage() {
  return (
    <>
      <AmbientBackground variant="minimal" />
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Capabilities that span the
            <span className="text-gradient"> entire product lifecycle</span>.
          </>
        }
        description="Strategy, design, data, AI, and engineering — delivered by senior, cross-functional teams that take ownership of outcomes."
      />

      <section className="relative pb-8">
        <div className="container-max">
          <RevealGroup className="border-b border-white/10">
            {services.map((service, i) => {
              return (
                <RevealItem key={service.slug}>
                  <div
                    id={service.slug}
                    className="grid scroll-mt-28 gap-6 border-t border-white/10 py-12 md:grid-cols-12 md:gap-10 md:py-16"
                  >
                    <span className="index md:col-span-1">0{i + 1}</span>

                    <div className="md:col-span-6">
                      <div className="-ml-2">
                        <ServiceGlyph slug={service.slug} />
                      </div>
                      <h2 className="headline mt-4 text-[1.9rem] leading-tight text-white md:text-[2.2rem]">
                        {service.title}
                      </h2>
                      <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
                        {service.description}
                      </p>
                    </div>

                    <div className="md:col-span-5">
                      <span className="index">Deliverables</span>
                      <ul className="mt-4">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-3 border-t border-white/10 py-3 text-sm text-white/70 first:border-t-0"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container-max">
          <SectionHeading
            eyebrow="Engagement model"
            title="How an engagement comes together"
            description="Whether it's a focused sprint or a multi-quarter transformation, the rhythm is the same: discover, design, build, scale."
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Capability depth */}
      <section className="relative border-t border-white/10 bg-ink-900/40 py-24 md:py-32">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Capability depth"
            title="One team, the whole spectrum"
            description="Most agencies are deep in one discipline and thin everywhere else. We keep senior depth across all six — because production AI fails at the weakest link, not the strongest."
          />
          <CapabilityRadar />
        </div>
      </section>

      <CtaSection
        title="Not sure which service you need?"
        description="Tell us the problem you're solving. We'll recommend the right approach — no obligation."
      />
    </>
  );
}
