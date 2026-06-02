import { integrationLayers } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/reveal";

export function IntegrationStack() {
  return (
    <RevealGroup className="mx-auto max-w-2xl border-b border-white/10">
      {integrationLayers.map((layer, i) => {
        const Icon = layer.icon;
        return (
          <RevealItem key={layer.title}>
            <div className="group flex items-start gap-5 border-t border-white/10 py-6 transition-colors duration-500 hover:border-accent-cyan/50">
              <span className="index w-7 shrink-0 pt-1.5">0{i + 1}</span>
              <Icon
                className="mt-1 h-5 w-5 shrink-0 text-accent-cyan"
                strokeWidth={1.6}
              />
              <div>
                <h3 className="headline text-lg text-white md:text-xl">
                  {layer.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {layer.detail}
                </p>
              </div>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
