import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { AmbientBackground } from "@/components/background";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Deep AI Tech. Tell us about your goals and we'll be in touch within one business day.",
};

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: site.location },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export default function ContactPage() {
  return (
    <>
      <AmbientBackground variant="minimal" />
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s build something
            <span className="text-gradient"> intelligent</span>.
          </>
        }
        description="Tell us where you're headed. Whether you have a fully-scoped brief or just the seed of an idea, we'd love to hear from you."
      />

      <section className="relative pb-24 md:pb-32">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* details */}
          <Reveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-display text-xl font-semibold tracking-tight text-white">
                Talk to a human
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                No call centers, no runaround. Your message reaches our team
                directly — and a real engineer or strategist will reply.
              </p>

              <dl className="mt-8 space-y-5">
                {details.map((d) => {
                  const Icon = d.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-white/40">
                          {d.label}
                        </dt>
                        <dd className="mt-1 text-sm text-white/80">{d.value}</dd>
                      </div>
                    </div>
                  );
                  return d.href ? (
                    <a
                      key={d.label}
                      href={d.href}
                      className="block transition-opacity hover:opacity-80"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={d.label}>{content}</div>
                  );
                })}
              </dl>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-sm leading-relaxed text-white/60">
                  Prefer a quick intro call? Send us a note with your
                  availability and we&rsquo;ll find a slot that works across
                  time zones.
                </p>
              </div>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
