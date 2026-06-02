/**
 * Custom animated spot-illustrations, one per service. Pure SVG + CSS
 * (reduced-motion safe). Rendered at ~64px inside each service entry.
 */

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none" aria-hidden>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

const nodes = [
  [16, 18],
  [50, 16],
  [18, 48],
  [48, 50],
] as const;

function GlyphAI() {
  return (
    <Frame>
      {nodes.map(([x, y], i) => (
        <line
          key={i}
          x1="32"
          y1="32"
          x2={x}
          y2={y}
          stroke="url(#sg)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={i % 2 ? "flow-line" : "flow-line-rev"}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.2" className="fill-accent-cyan/80" />
      ))}
      <circle cx="32" cy="32" r="9" className="fill-ink-700 stroke-accent-glow" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="9" className="stroke-accent-glow/40 pulse-ring" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="2.6" className="fill-accent-glow" />
    </Frame>
  );
}

function GlyphSoftware() {
  return (
    <Frame>
      {[14, 28, 42].map((y, i) => (
        <g key={y} className="floaty" style={{ animationDelay: `${i * 0.25}s` }}>
          <rect
            x="14"
            y={y}
            width="36"
            height="10"
            rx="3"
            className={i === 0 ? "fill-accent-cyan/10 stroke-accent-cyan/60" : "fill-white/[0.03] stroke-white/20"}
            strokeWidth="1.4"
          />
          <circle cx="20" cy={y + 5} r="1.5" className={i === 0 ? "fill-accent-glow" : "fill-white/40"} />
        </g>
      ))}
    </Frame>
  );
}

function GlyphWeb() {
  return (
    <Frame>
      <rect x="12" y="14" width="40" height="32" rx="4" className="fill-white/[0.03] stroke-white/20" strokeWidth="1.4" />
      <line x1="12" y1="23" x2="52" y2="23" className="stroke-white/20" strokeWidth="1.4" />
      <circle cx="17" cy="18.5" r="1.3" className="fill-accent-cyan" />
      <circle cx="22" cy="18.5" r="1.3" className="fill-white/30" />
      <circle cx="27" cy="18.5" r="1.3" className="fill-white/30" />
      <line x1="18" y1="31" x2="34" y2="31" stroke="url(#sg)" strokeWidth="2" strokeLinecap="round" className="blink" />
      <line x1="18" y1="37" x2="44" y2="37" className="stroke-white/25" strokeWidth="2" strokeLinecap="round" />
      <path d="M40,40 l8,4 l-3,1 l2,4" className="fill-white stroke-white" strokeWidth="1" strokeLinejoin="round" />
    </Frame>
  );
}

function GlyphTransform() {
  return (
    <Frame>
      <g className="spin-slow">
        <path d="M32,14 a18,18 0 0 1 16,10" stroke="url(#sg)" strokeWidth="2" strokeLinecap="round" />
        <path d="M48,24 l0,-7 M48,24 l-7,0" className="stroke-accent-violet" strokeWidth="2" strokeLinecap="round" />
        <path d="M32,50 a18,18 0 0 1 -16,-10" stroke="url(#sg)" strokeWidth="2" strokeLinecap="round" />
        <path d="M16,40 l0,7 M16,40 l7,0" className="stroke-accent-cyan" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="32" cy="32" r="3" className="fill-accent-glow pulse-ring" />
    </Frame>
  );
}

function GlyphData() {
  const bars = [
    [18, 30, "fill-white/25"],
    [27, 18, "fill-accent-cyan/70"],
    [36, 24, "fill-white/25"],
    [45, 12, "fill-accent-violet/70"],
  ] as const;
  return (
    <Frame>
      <line x1="14" y1="48" x2="52" y2="48" className="stroke-white/20" strokeWidth="1.4" />
      {bars.map(([x, top, cls], i) => (
        <rect
          key={i}
          x={x}
          y={top}
          width="6"
          height={48 - top}
          rx="2"
          className={`${cls} bar-pulse`}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </Frame>
  );
}

function GlyphAdvisory() {
  return (
    <Frame>
      <circle cx="32" cy="32" r="18" className="stroke-white/15" strokeWidth="1.4" />
      <circle cx="32" cy="32" r="18" className="stroke-accent-cyan/30 pulse-ring" strokeWidth="1.4" />
      <circle cx="32" cy="32" r="10" className="stroke-white/20" strokeWidth="1.4" />
      <g className="spin-slow">
        <line x1="32" y1="32" x2="44" y2="22" stroke="url(#sg)" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="32" cy="32" r="2.6" className="fill-accent-glow" />
    </Frame>
  );
}

const glyphs: Record<string, () => JSX.Element> = {
  "ai-engineering": GlyphAI,
  "software-engineering": GlyphSoftware,
  "web-experience": GlyphWeb,
  "digital-transformation": GlyphTransform,
  "data-platforms": GlyphData,
  advisory: GlyphAdvisory,
};

export function ServiceGlyph({ slug }: { slug: string }) {
  const Glyph = glyphs[slug] ?? GlyphAI;
  return <Glyph />;
}
