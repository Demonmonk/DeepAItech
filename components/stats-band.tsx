import { stats } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/reveal";

export function StatsBand() {
  return (
    <section className="relative border-y border-white/10 py-16 md:py-20">
      <div className="container-max">
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="md:px-9 md:first:pl-0 md:last:pr-0"
            >
              <div className="headline text-5xl leading-none text-white md:text-[3.5rem]">
                {stat.value}
              </div>
              <div className="mt-4 text-sm leading-snug text-white/50">
                {stat.label}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
