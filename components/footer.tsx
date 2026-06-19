import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/content";
import { Logo } from "@/components/logo";

const footerNav = [
  {
    title: "Services",
    links: services.slice(0, 5).map((s) => ({
      label: s.title.replace(" & Machine Learning Engineering", "").replace(" Engineering", ""),
      href: `/services#${s.slug}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Solutions", href: "/solutions" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="container-max py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-white/55">
              {site.description}
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/60">
              <p className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent-cyan" />
                {site.location}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent-cyan" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-accent-cyan" />
                {site.phone}
              </a>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Build with us
            </h3>
            <p className="mt-5 text-sm text-white/55">
              Have a project or an idea worth exploring?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-accent-glow"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="transition-colors hover:text-white/70">
              Privacy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white/70">
              Terms
            </Link>
            <span className="hidden sm:inline">Made in the UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
