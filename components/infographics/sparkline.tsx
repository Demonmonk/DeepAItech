/**
 * Tiny deterministic "result trend" sparkline. The series is derived from a
 * seed string so each metric gets a stable, distinct upward curve. Pure SVG.
 */

function seeded(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), 1 | t);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Sparkline({
  seed,
  className = "h-7 w-full",
}: {
  seed: string;
  className?: string;
}) {
  const rnd = seeded(seed);
  const n = 9;
  const W = 100;
  const H = 32;
  const vals: number[] = [];
  for (let i = 0; i < n; i++) {
    const base = i / (n - 1); // rising 0→1
    const jitter = (rnd() - 0.5) * 0.32;
    vals.push(Math.min(0.95, Math.max(0.06, base * 0.78 + 0.12 + jitter)));
  }
  vals[n - 1] = Math.max(vals[n - 1], 0.84); // finish on a high note

  const pts = vals.map((v, i) => {
    const x = (i / (n - 1)) * W;
    const y = H - 1 - v * (H - 3);
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `M0,${H} L${line.replace(/ /g, " L")} L${W},${H} Z`;
  const [ex, ey] = pts[n - 1];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="sparkStroke" x1="0" y1="0" x2={W} y2="0">
          <stop offset="0%" stopColor="#1ff0c0" />
          <stop offset="100%" stopColor="#15c9a0" />
        </linearGradient>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2={H}>
          <stop offset="0%" stopColor="#1ff0c0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#1ff0c0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <polyline
        points={line}
        stroke="url(#sparkStroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx={ex} cy={ey} r="2" className="fill-accent-glow" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
