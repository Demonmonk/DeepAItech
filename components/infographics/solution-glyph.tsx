/**
 * Small animated glyphs, one per solution. Pure SVG + CSS (reduced-motion
 * safe). Rendered at ~48px in each solution entry.
 */

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden>
      <defs>
        <linearGradient id="sol" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

function Assistants() {
  return (
    <Frame>
      <path
        d="M8,12 h32 a3,3 0 0 1 3,3 v14 a3,3 0 0 1 -3,3 H20 l-7,6 v-6 H8 a3,3 0 0 1 -3,-3 V15 a3,3 0 0 1 3,-3 z"
        className="fill-white/[0.03] stroke-accent-cyan/50"
        strokeWidth="1.4"
      />
      {[17, 24, 31].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy="22"
          r="2"
          className="fill-accent-glow blink"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </Frame>
  );
}

function Predictive() {
  return (
    <Frame>
      <line x1="8" y1="40" x2="42" y2="40" className="stroke-white/15" strokeWidth="1.4" />
      <line x1="8" y1="8" x2="8" y2="40" className="stroke-white/15" strokeWidth="1.4" />
      <polyline
        points="10,34 18,28 24,31 32,18 40,12"
        stroke="url(#sol)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flow-line"
      />
      <circle cx="40" cy="12" r="3" className="fill-accent-glow" />
      <circle cx="40" cy="12" r="3" className="stroke-accent-glow/50 pulse-ring" strokeWidth="1.4" />
    </Frame>
  );
}

function Automation() {
  return (
    <Frame>
      <circle cx="19" cy="22" r="9" strokeDasharray="2 4" className="stroke-accent-cyan/70 spin-slow" strokeWidth="2" />
      <circle cx="32" cy="29" r="7" strokeDasharray="2 4" className="stroke-accent-violet/70 spin-rev" strokeWidth="2" />
      <circle cx="19" cy="22" r="2" className="fill-accent-cyan" />
      <circle cx="32" cy="29" r="2" className="fill-accent-violet" />
    </Frame>
  );
}

function CloudSync() {
  return (
    <Frame>
      <g className="fill-white/[0.04] stroke-white/30" strokeWidth="1.3">
        <circle cx="18" cy="26" r="6" />
        <circle cx="27" cy="22" r="8" />
        <circle cx="34" cy="27" r="6" />
        <rect x="17" y="27" width="18" height="6" rx="3" stroke="none" className="fill-white/[0.04]" />
      </g>
      <path d="M23,30 l0,-7 M23,23 l-2.5,2.5 M23,23 l2.5,2.5" className="stroke-accent-cyan blink" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30,24 l0,7 M30,31 l-2.5,-2.5 M30,31 l2.5,-2.5" className="stroke-accent-glow blink" style={{ animationDelay: "0.4s" }} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

function Secure() {
  return (
    <Frame>
      <path
        d="M24,6 L38,11 V25 C38,33 32,38 24,42 C16,38 10,33 10,25 V11 Z"
        className="fill-white/[0.03] stroke-accent-cyan/50"
        strokeWidth="1.4"
      />
      <path
        d="M24,6 L38,11 V25 C38,33 32,38 24,42 C16,38 10,33 10,25 V11 Z"
        className="stroke-accent-cyan/30 pulse-ring"
        strokeWidth="1.4"
      />
      <path d="M18,24 l4,4 l8,-9" stroke="url(#sol)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

function sparkle(cx: number, cy: number, r: number) {
  return `M${cx},${cy - r} Q${cx},${cy} ${cx + r},${cy} Q${cx},${cy} ${cx},${cy + r} Q${cx},${cy} ${cx - r},${cy} Q${cx},${cy} ${cx},${cy - r} Z`;
}

function Generative() {
  const sparks = [
    [24, 22, 9, 0],
    [37, 13, 5, 0.3],
    [13, 32, 4, 0.6],
  ] as const;
  return (
    <Frame>
      {sparks.map(([cx, cy, r, delay], i) => (
        <path
          key={i}
          d={sparkle(cx, cy, r)}
          fill="url(#sol)"
          className="blink"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </Frame>
  );
}

const glyphs: Record<string, () => JSX.Element> = {
  assistants: Assistants,
  predictive: Predictive,
  automation: Automation,
  cloud: CloudSync,
  secure: Secure,
  generative: Generative,
};

export function SolutionGlyph({ id }: { id: string }) {
  const Glyph = glyphs[id] ?? Assistants;
  return <Glyph />;
}
