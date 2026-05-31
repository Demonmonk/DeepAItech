import { process } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/reveal";

export function ProcessSteps() {
  return (
    <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {process.map((step, i) => (
        <RevealItem key={step.number}>
          <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors duration-500 hover:border-white/20">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-accent-cyan">
                {step.number}
              </span>
              {i < process.length - 1 && (
                <span className="hidden h-px w-12 bg-gradient-to-r from-accent-cyan/50 to-transparent lg:block" />
              )}
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              {step.description}
            </p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
