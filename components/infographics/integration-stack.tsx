import { ArrowDownUp } from "lucide-react";
import { integrationLayers } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/reveal";

export function IntegrationStack() {
  return (
    <RevealGroup className="mx-auto max-w-2xl">
      {integrationLayers.map((layer, i) => {
        const Icon = layer.icon;
        const last = i === integrationLayers.length - 1;
        return (
          <RevealItem key={layer.title}>
            <div className="glass glass-hover group flex items-start gap-4 p-5 md:p-6">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-cyan transition-colors duration-500 group-hover:border-accent-cyan/40">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold tracking-tight text-white md:text-lg">
                  {layer.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {layer.detail}
                </p>
              </div>
            </div>

            {!last && (
              <div
                aria-hidden
                className="flex items-center justify-center py-2 text-white/30"
              >
                <ArrowDownUp className="h-4 w-4" strokeWidth={1.6} />
              </div>
            )}
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
