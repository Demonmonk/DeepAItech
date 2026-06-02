import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { ServiceGlyph } from "@/components/infographics/service-glyph";
import { RevealGroup, RevealItem } from "@/components/reveal";

/**
 * Services as an editorial ledger — numbered, hairline-ruled rows instead of a
 * grid of boxes. Each row is a full-width line item that reveals on hover.
 */
export function ServiceLedger() {
  return (
    <RevealGroup className="border-b border-white/10">
      {services.map((service, i) => (
        <RevealItem key={service.slug}>
          <Link
            href={`/services#${service.slug}`}
            className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-5 gap-y-2.5 border-t border-white/10 py-7 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[3.5rem_1.05fr_1.5fr_auto] md:items-center md:gap-x-10 md:py-8"
          >
            <span className="relative md:h-11 md:w-11">
              <span className="index block pt-1 transition-opacity duration-300 group-hover:text-accent-cyan md:absolute md:inset-0 md:flex md:items-center md:pt-0 md:group-hover:opacity-0">
                0{i + 1}
              </span>
              <span className="pointer-events-none absolute inset-0 hidden items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:flex">
                <ServiceGlyph slug={service.slug} className="h-11 w-11" />
              </span>
            </span>
            <h3 className="headline text-[1.6rem] leading-tight text-white transition-colors duration-500 group-hover:text-accent-glow md:text-[1.7rem]">
              {service.title}
            </h3>
            <p className="col-start-2 max-w-md text-sm leading-relaxed text-white/50 md:col-start-3 md:text-[0.95rem]">
              {service.summary}
            </p>
            <ArrowUpRight className="hidden h-5 w-5 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white md:block" />
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
