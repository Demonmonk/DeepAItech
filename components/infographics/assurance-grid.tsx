import { assurance } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/reveal";

export function AssuranceGrid() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {assurance.map((item) => {
        const Icon = item.icon;
        return (
          <RevealItem key={item.title}>
            <div className="glass glass-hover group relative h-full overflow-hidden p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-cyan/0 blur-2xl transition-colors duration-500 group-hover:bg-accent-cyan/15"
              />
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan transition-colors duration-500 group-hover:border-accent-cyan/40">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-white/55">
                {item.detail}
              </p>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
