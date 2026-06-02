import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { InsightCard } from "@/components/insight-card";
import { CtaSection } from "@/components/cta-section";
import { AmbientBackground } from "@/components/background";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes on AI, software engineering, and digital transformation from the Deep AI Tech team.",
};

export default function InsightsPage() {
  return (
    <>
      <AmbientBackground variant="minimal" />
      <PageHeader
        eyebrow="Insights"
        title={
          <>
            Notes from the
            <span className="text-gradient"> frontier of applied AI</span>.
          </>
        }
        description="Practical thinking on building, shipping, and scaling intelligent software — written by the people who do it."
      />

      <section className="relative pb-8">
        <div className="container-max">
          <RevealGroup className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <RevealItem key={insight.slug}>
                <InsightCard insight={insight} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection
        title="Want this in your inbox?"
        description="We share new writing occasionally — no noise. Reach out and we'll add you."
      />
    </>
  );
}
