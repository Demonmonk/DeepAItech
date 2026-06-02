import { assurance } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/reveal";

export function AssuranceGrid() {
  return (
    <RevealGroup className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {assurance.map((item, i) => {
        const Icon = item.icon;
        return (
          <RevealItem key={item.title}>
            <div className="group border-t border-white/10 pt-6 transition-colors duration-500 hover:border-accent-cyan/50">
              <div className="flex items-center justify-between">
                <Icon
                  className="h-5 w-5 text-accent-cyan"
                  strokeWidth={1.6}
                />
                <span className="index">0{i + 1}</span>
              </div>
              <h3 className="headline mt-5 text-xl text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                {item.detail}
              </p>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
