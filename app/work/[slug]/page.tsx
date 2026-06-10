import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Target, Compass, Boxes, TrendingUp } from "lucide-react";
import { AmbientBackground } from "@/components/background";
import { CtaSection } from "@/components/cta-section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Sparkline } from "@/components/infographics/sparkline";
import { CountUp } from "@/components/count-up";
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
                  <div className="headline text-4xl text-gradient-accent md:text-5xl">
                    <CountUp value={m.value} />
                  </div>
                  <Sparkline
                    seed={study.slug + m.label}
                    className="mx-auto mt-3 h-7 w-24"
                  />
                  <div className="mt-3 text-sm text-white/50">{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* body — visual engagement framework */}
        <div className="container-max mt-20 max-w-4xl">
          <span className="index">The engagement</span>
          <RevealGroup className="mt-8 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {[
              {
                icon: Target,
                label: "The challenge",
                body: `Legacy tooling and fragmented data were holding ${study.industry.toLowerCase()} back. ${study.client} needed to move a metric that mattered — not run a science project.`,
              },
              {
                icon: Compass,
                label: "Our approach",
                body: "A focused discovery to find the highest-leverage opportunity, then a senior pod — strategy, design, data, engineering — building toward production from day one.",
              },
              {
                icon: Boxes,
                label: "What we built",
                body: `A cohesive system combining ${study.tags.join(
                  ", "
                )}, wired into their existing stack with reliability and explainability built in.`,
              },
              {
                icon: TrendingUp,
                label: "The outcome",
                body: "Clear, measurable impact within months — plus a durable capability their own team can run and extend without us.",
              },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <RevealItem key={s.label}>
                  <div className="group grid grid-cols-[auto_1fr] gap-x-5 border-t border-white/15 pt-6 transition-colors duration-500 hover:border-accent-cyan/50">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="index">0{i + 1}</span>
                        <h2 className="headline text-xl text-white">
                          {s.label}
                        </h2>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
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
