import { stats } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/reveal";

export function StatsBand() {
  return (
    <section className="relative border-y border-white/10 bg-ink-900/50 py-14">
      <div className="container-max">
        <RevealGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="text-center md:text-left">
              <div className="font-display text-4xl font-semibold tracking-tightest text-white md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-white/50">{stat.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
