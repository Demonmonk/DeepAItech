import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { StatsBand } from "@/components/stats-band";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CaseStudyCard } from "@/components/case-study-card";
import { InsightCard } from "@/components/insight-card";
import { ProcessSteps } from "@/components/process-steps";
import { TechMarquee } from "@/components/marquee";
import { CtaSection } from "@/components/cta-section";
import { AmbientBackground } from "@/components/background";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { services, caseStudies, insights, solutions } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <AmbientBackground />
      <Hero />

      {/* Tech marquee strip */}
      <section className="border-y border-white/10 bg-ink-900/40 py-6">
        <div className="container-max">
          <TechMarquee />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-24 md:py-32">
        <div className="container-max">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Full-stack capability,
                  <br className="hidden md:block" /> from idea to impact.
                </>
              }
              description="Six core practices that combine to ship intelligent products end to end — strategy, design, data, AI, and engineering under one roof."
            />
            <Reveal delay={0.15}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                All services
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <ServiceCard
                  service={service}
                  href={`/services#${service.slug}`}
                  className="h-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <StatsBand />

      {/* Solutions */}
      <section className="relative py-24 md:py-32">
        <div className="container-max">
          <SectionHeading
            align="center"
            eyebrow="Solutions"
            title="Intelligence applied to real problems"
            description="We don't sell technology for its own sake. We build solutions that solve concrete business challenges — and we make them production-ready."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <RevealItem key={sol.title}>
                  <div className="glass glass-hover group h-full p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-violet transition-colors duration-500 group-hover:border-accent-violet/40">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                      {sol.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                      {sol.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Process */}
      <section className="relative border-y border-white/10 bg-ink-900/40 py-24 md:py-32">
        <div className="container-max">
          <SectionHeading
            eyebrow="How we work"
            title="A process built for momentum"
            description="Tight feedback loops, senior teams, and full transparency — so you see value early and often."
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="relative py-24 md:py-32">
        <div className="container-max">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Outcomes we're proud of"
              description="A few of the products and platforms we've delivered for partners across the region and beyond."
            />
            <Reveal delay={0.15}>
              <Link
                href="/work"
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                All case studies
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-2">
            {caseStudies.slice(0, 2).map((study) => (
              <RevealItem key={study.slug}>
                <CaseStudyCard study={study} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Insights */}
      <section className="relative border-t border-white/10 bg-ink-900/40 py-24 md:py-32">
        <div className="container-max">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Insights"
              title="Thinking from our team"
              description="Field notes on AI, engineering, and digital transformation."
            />
            <Reveal delay={0.15}>
              <Link
                href="/insights"
                className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                All insights
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {insights.slice(0, 3).map((insight) => (
              <RevealItem key={insight.slug}>
                <InsightCard insight={insight} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
