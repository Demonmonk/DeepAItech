import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { StatsBand } from "@/components/stats-band";
import { CtaSection } from "@/components/cta-section";
import { AmbientBackground } from "@/components/background";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { values } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Deep AI Tech LLC is a UAE-based AI and software consultancy building intelligent products and digital transformation programs.",
};

export default function AboutPage() {
  return (
    <>
      <AmbientBackground variant="minimal" />
      <PageHeader
        eyebrow="About"
        title={
          <>
            A consultancy built for the
            <span className="text-gradient"> age of intelligence</span>.
          </>
        }
        description={`Founded in ${site.founded} and headquartered in ${site.location}, ${site.legalName} exists to help organizations turn AI from a buzzword into durable, real-world advantage.`}
      />

      {/* Mission */}
      <section className="relative py-12 md:py-16">
        <div className="container-max grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Our mission
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                We believe the next decade belongs to organizations that can
                blend human judgment with machine intelligence. Our job is to
                make that blend practical — designing and engineering systems
                that are not just clever, but reliable, secure, and genuinely
                useful.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/60">
                We sit at the intersection of strategy and deep technical
                craft. That means we can advise the boardroom and ship the code
                — closing the gap between ambition and execution that derails
                so many transformation efforts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-glow relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/50 p-8 md:p-10">
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-violet/15 blur-3xl"
              />
              <blockquote className="relative">
                <p className="font-display text-xl font-medium leading-relaxed text-white md:text-2xl">
                  &ldquo;We don&rsquo;t hand over slide decks and walk away. We
                  embed, we build, and we leave your team able to run what we
                  created together.&rdquo;
                </p>
                <footer className="mt-6 text-sm text-white/50">
                  — The {site.name} team
                </footer>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="my-8">
        <StatsBand />
      </div>

      {/* Values */}
      <section className="relative py-24 md:py-32">
        <div className="container-max">
          <SectionHeading
            eyebrow="What we value"
            title="Principles we don't compromise on"
            description="These aren't poster slogans. They shape who we hire, how we work, and what we ship."
          />
          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <RevealItem key={value.title}>
                <div className="glass glass-hover h-full p-8">
                  <span className="font-mono text-sm text-accent-cyan">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {value.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* UAE / location callout */}
      <section className="relative border-y border-white/10 bg-ink-900/40 py-20">
        <div className="container-max flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Proudly building from the UAE
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/55">
              The Emirates&rsquo; ambition around AI and digital infrastructure
              is unmatched. We&rsquo;re here to help local and regional
              organizations lead — and to bring world-class engineering to the
              heart of the Gulf.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Work with us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
