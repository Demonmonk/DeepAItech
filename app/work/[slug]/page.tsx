import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AmbientBackground } from "@/components/background";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: study.title,
    description: study.summary,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const related = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 2);

  return (
    <>
      <AmbientBackground variant="minimal" />

      <article className="relative pt-36 md:pt-44">
        <div className="container-max max-w-4xl">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All work
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <span className="font-medium text-white">{study.client}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="text-white/45">{study.industry}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tightest text-white text-balance md:text-5xl">
              {study.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              {study.summary}
            </p>
          </Reveal>

          {/* metrics */}
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] sm:grid-cols-3">
              {study.metrics.map((m) => (
                <div key={m.label} className="bg-ink-900 p-7 text-center">
                  <div className="font-display text-3xl font-semibold text-gradient-accent md:text-4xl">
                    {m.value}
                  </div>
                  <div className="mt-2 text-sm text-white/50">{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* body */}
        <div className="container-max mt-16 max-w-3xl">
          <Reveal>
            <div className="space-y-10">
              <Section
                title="The challenge"
                body={`${study.client} faced mounting pressure in ${study.industry.toLowerCase()} — legacy tooling, fragmented data, and processes that couldn't keep pace with demand. Leadership needed an outcome, not a science project: something that would move the metrics that matter, and do it reliably in production.`}
              />
              <Section
                title="Our approach"
                body="We started with a focused discovery to map the highest-leverage opportunity, then assembled a senior, cross-functional pod — strategy, design, data, and engineering working as one. We prototyped quickly, validated value with real users, and built toward production from day one with testing, observability, and clear guardrails."
              />
              <Section
                title="What we built"
                body={`The solution combined ${study.tags.join(
                  ", "
                )} into a cohesive system, integrated into the client's existing landscape. We prioritized reliability and explainability so the team could trust — and own — what we shipped together.`}
              />
              <Section
                title="The outcome"
                body={`Within months, the impact was clear and measurable. Beyond the headline numbers, ${study.client} gained a durable capability and an internal team confident enough to extend the platform on their own.`}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-2">
              {study.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/55"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* related */}
        <div className="container-max mt-24 max-w-4xl">
          <h2 className="font-display text-xl font-semibold tracking-tight text-white">
            More work
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/work/${r.slug}`}
                className="glass glass-hover group flex flex-col p-6"
              >
                <span className="text-xs text-white/45">{r.industry}</span>
                <span className="mt-2 font-display text-base font-semibold leading-snug text-white transition-colors group-hover:text-accent-glow">
                  {r.title}
                </span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-white/60">
                  Read case study
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-white/60">{body}</p>
    </div>
  );
}
