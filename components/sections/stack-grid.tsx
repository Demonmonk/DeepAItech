/**
 * The stack wall — the tools and platforms we build with / integrate into,
 * as a hairline-ruled grid of mono wordmarks.
 */
const STACK: [string, string][] = [
  ["Anthropic", "Frontier AI"],
  ["AWS", "Cloud"],
  ["Azure", "Cloud"],
  ["Google Cloud", "Cloud"],
  ["PostgreSQL", "Data"],
  ["Snowflake", "Warehouse"],
  ["Pinecone", "Vector search"],
  ["Kubernetes", "Infra"],
  ["Next.js", "Web"],
  ["React", "Web"],
  ["Python", "ML"],
  ["PyTorch", "ML"],
  ["Slack", "Workflow"],
  ["Salesforce", "CRM"],
  ["Stripe", "Payments"],
  ["Docker", "Infra"],
];

export function StackGrid() {
  return (
    <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
      {STACK.map(([name, category]) => (
        <div
          key={name}
          className="group flex flex-col gap-1 border-b border-r border-white/10 px-5 py-6 transition-colors duration-300 hover:bg-white/[0.02]"
        >
          <span className="font-mono text-sm text-white/75 transition-colors duration-300 group-hover:text-accent">
            {name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            {category}
          </span>
        </div>
      ))}
    </div>
  );
}
