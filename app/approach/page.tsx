import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { AmbientBackground } from "@/components/background";
import { BuildPipeline } from "@/components/infographics/build-pipeline";
import { EvalBoard } from "@/components/infographics/eval-board";
import { IntegrationFlow } from "@/components/infographics/integration-flow";
import { AssuranceOrbit } from "@/components/infographics/assurance-orbit";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Deep AI Tech builds AI: a grounded, evaluated pipeline, secure integration into your systems, and security and quality built in by default.",
};

export default function ApproachPage() {
  return (
    <>
      <AmbientBackground variant="minimal" />
      <PageHeader
        eyebrow="Our approach"
        title={
          <>
            From idea to AI you can
            <span className="text-gradient"> actually trust</span>.
          </>
        }
        description="No black boxes and no hand-waving. Here's exactly how we build, integrate, and stand behind the systems we ship — explore each step below."
      />

      {/* How we build AI */}
      <section className="relative py-12 md:py-16">
        <div className="container-max">
          <SectionHeading
            eyebrow="How we build AI"
            title="A pipeline, not a magic trick"
            description="Tap through each stage to see how an idea becomes a dependable, production-grade AI system."
          />
          <div className="mt-12">
            <BuildPipeline />
          </div>
        </div>
      </section>

      {/* Proof, not promises */}
      <section className="relative py-12 md:py-20">
        <div className="container-max">
          <SectionHeading
            align="center"
            eyebrow="Proof, not promises"
            title="Measured like production software"
            description="Every AI feature is scored against a golden dataset before — and after — it ships. This is what a passing run looks like."
          />
          <div className="mt-12">
            <EvalBoard />
          </div>
        </div>
      </section>

      {/* How we integrate */}
      <section className="relative border-y border-white/10 bg-ink-900/40 py-24 md:py-32">
        <div className="container-max">
          <SectionHeading
            align="center"
            eyebrow="How we integrate"
            title="It plugs into your stack — securely"
            description="AI is only useful when it lives where your work happens. We connect it to your systems through a secure layer you control."
          />
          <div className="mt-16">
            <IntegrationFlow />
          </div>
        </div>
      </section>

      {/* Security & quality */}
      <section className="relative py-24 md:py-32">
        <div className="container-max">
          <SectionHeading
            eyebrow="Security & quality"
            title="Trust, engineered in by default"
            description="The standards behind every engagement — so you know exactly the quality you're getting before you commit."
          />
          <div className="mt-16">
            <AssuranceOrbit />
          </div>
        </div>
      </section>

      <CtaSection
        title="Want this rigor on your project?"
        description="Tell us what you're trying to build. We'll show you how this approach applies to your world."
      />
    </>
  );
}
