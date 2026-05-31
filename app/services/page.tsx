import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { AmbientBackground } from "@/components/background";
import { RevealGroup, RevealItem } from "@/components/reveal";
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
          <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <div id={service.slug} className="h-full scroll-mt-28">
                  <ServiceCard service={service} detailed className="h-full" />
                </div>
              </RevealItem>
            ))}
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

      <CtaSection
        title="Not sure which service you need?"
        description="Tell us the problem you're solving. We'll recommend the right approach — no obligation."
      />
    </>
  );
}
