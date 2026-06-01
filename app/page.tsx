import Link from "next/link";
import { ArrowUpRight, FlaskConical, Plug, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { StatsBand } from "@/components/stats-band";
import { SectionHeading } from "@/components/section-heading";
import { ServiceLedger } from "@/components/service-ledger";
import { CaseStudyCard } from "@/components/case-study-card";
import { InsightCard } from "@/components/insight-card";
import { ProcessSteps } from "@/components/process-steps";
import { TechMarquee } from "@/components/marquee";
import { CtaSection } from "@/components/cta-section";
import { AmbientBackground } from "@/components/background";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { caseStudies, insights, solutions } from "@/lib/content";

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
              <Link href="/services" className="link-line whitespace-nowrap">
                All services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14">
            <ServiceLedger />
          </div>
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
          <RevealGroup className="mt-16 grid gap-x-10 gap-y-12 text-left sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <RevealItem key={sol.title}>
                  <div className="group border-t border-white/10 pt-6 transition-colors duration-500 hover:border-accent-violet/50">
                    <div className="flex items-center justify-between">
                      <Icon
                        className="h-5 w-5 text-accent-violet"
                        strokeWidth={1.6}
                      />
                      <span className="index">S/0{i + 1}</span>
                    </div>
                    <h3 className="headline mt-5 text-xl text-white">
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

      {/* Approach teaser */}
      <section className="relative py-24 md:py-32">
        <div className="container-max">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our approach"
              title="See exactly how we build"
              description="No black boxes. Explore how we take AI from idea to a grounded, secure, production-grade system you can trust."
            />
            <Reveal delay={0.15}>
              <Link href="/approach" className="link-line whitespace-nowrap">
                Explore our approach
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {[
              {
                icon: FlaskConical,
                title: "Built & evaluated",
                description:
                  "Grounded in your data and measured against golden datasets — quality proven with evidence, not vibes.",
              },
              {
                icon: Plug,
                title: "Integrated securely",
                description:
                  "Wired into your existing stack behind authenticated APIs, with humans in the loop where it counts.",
              },
              {
                icon: ShieldCheck,
                title: "Trustworthy by default",
                description:
                  "Data isolation, least-privilege access, and production monitoring built in from day one.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title}>
                  <Link
                    href="/approach"
                    className="group flex h-full flex-col border-t border-white/15 pt-6 transition-colors duration-500 hover:border-accent-cyan/50"
                  >
                    <Icon
                      className="h-5 w-5 text-accent-cyan"
                      strokeWidth={1.6}
                    />
                    <h3 className="headline mt-5 text-xl text-white transition-colors duration-500 group-hover:text-accent-glow">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>
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
              <Link href="/work" className="link-line whitespace-nowrap">
                All case studies
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-x-12 gap-y-14 lg:grid-cols-2">
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
              <Link href="/insights" className="link-line whitespace-nowrap">
                All insights
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
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
