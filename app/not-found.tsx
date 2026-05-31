import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AmbientBackground } from "@/components/background";

export default function NotFound() {
  return (
    <>
      <AmbientBackground />
      <section className="relative flex min-h-[80vh] items-center justify-center px-6">
        <div className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-cyan">
            Error 404
          </p>
          <h1 className="mt-6 font-display text-7xl font-semibold tracking-tightest text-white md:text-9xl">
            <span className="text-gradient">Lost</span> in the void
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base text-white/55">
            This page slipped through a quantum tunnel. Let&rsquo;s get you back
            to something real.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
