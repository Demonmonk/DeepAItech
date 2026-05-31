import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaSection } from "@/components/cta-section";
import { AmbientBackground } from "@/components/background";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and outcomes from Deep AI Tech engagements across finance, healthcare, retail, and real estate.",
};

export default function WorkPage() {
  return (
    <>
      <AmbientBackground variant="minimal" />
      <PageHeader
        eyebrow="Selected work"
        title={
          <>
            Real systems.
            <span className="text-gradient"> Measurable results.</span>
          </>
        }
        description="A selection of engagements where intelligent software changed the trajectory of a business. (Client names illustrative for confidentiality.)"
      />

      <section className="relative pb-8">
        <div className="container-max">
          <RevealGroup className="grid gap-5 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug}>
                <CaseStudyCard study={study} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection
        title="Your story could be next."
        description="Bring us a hard problem. We love those."
      />
    </>
  );
}
