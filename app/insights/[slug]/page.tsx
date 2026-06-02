import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AmbientBackground } from "@/components/background";
import { InsightCard } from "@/components/insight-card";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { insights } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

export default function InsightPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = insights.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <AmbientBackground variant="minimal" />

      <article className="relative pt-36 md:pt-44">
        <div className="container-max max-w-3xl">
          <Reveal>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All insights
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 flex items-center gap-3 text-xs">
              <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 font-medium text-accent-glow">
                {post.category}
              </span>
              <span className="text-white/40">{formatDate(post.date)}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="text-white/40">{post.readTime} read</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="headline mt-6 text-[2.2rem] leading-[1.08] text-white text-balance md:text-5xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              {post.excerpt}
            </p>
          </Reveal>

          {/* Key takeaways — scannable summary up top */}
          <Reveal delay={0.18}>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8">
              <span className="index">Key takeaways</span>
              <ul className="mt-6 space-y-5">
                {post.keyPoints.map((pt, i) => (
                  <li key={pt} className="flex items-start gap-4">
                    <span className="headline text-xl leading-none text-accent-cyan/80">
                      0{i + 1}
                    </span>
                    <span className="text-base leading-relaxed text-white/75">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6 border-t border-white/10 pt-10 text-base leading-relaxed text-white/65">
              {post.body.map((block, i) => {
                if (block.type === "h") {
                  return (
                    <h2
                      key={i}
                      className="headline pt-2 text-2xl text-white md:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="headline-italic border-l-2 border-accent-cyan/60 pl-6 text-xl leading-snug text-white/85 md:text-2xl"
                    >
                      {block.text}
                    </blockquote>
                  );
                }
                return <p key={i}>{block.text}</p>;
              })}
            </div>
          </Reveal>
        </div>

        <div className="container-max mt-24 max-w-5xl">
          <h2 className="headline text-2xl text-white">Keep reading</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <InsightCard key={r.slug} insight={r} className="h-full" />
            ))}
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
