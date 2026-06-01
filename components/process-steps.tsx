import { process } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/reveal";

export function ProcessSteps() {
  return (
    <RevealGroup className="grid gap-x-8 gap-y-12 md:grid-cols-4">
      {process.map((step) => (
        <RevealItem key={step.number} className="group">
          <div className="flex items-center justify-between border-t border-white/15 pt-5 transition-colors duration-500 group-hover:border-accent-cyan/50">
            <span className="headline text-4xl text-white/70 transition-colors duration-500 group-hover:text-white">
              {step.number}
            </span>
          </div>
          <h3 className="headline mt-6 text-xl text-white">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            {step.description}
          </p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
