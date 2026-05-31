const techStack = [
  "Python",
  "TypeScript",
  "PyTorch",
  "TensorFlow",
  "React",
  "Next.js",
  "Node.js",
  "AWS",
  "Azure",
  "Google Cloud",
  "Kubernetes",
  "PostgreSQL",
  "LangChain",
  "Hugging Face",
  "Snowflake",
  "Databricks",
];

export function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className="mask-fade-x relative overflow-hidden py-2">
      <div className="flex w-max animate-marquee items-center gap-12">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap font-mono text-sm uppercase tracking-wider text-white/35"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
