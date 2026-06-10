"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Capability radar — depth across the six disciplines, drawn as an animated
 * spider chart. Pure SVG + framer-motion.
 */
const AXES = [
  { label: "Strategy", v: 0.88 },
  { label: "Data", v: 0.94 },
  { label: "AI / ML", v: 0.96 },
  { label: "Engineering", v: 0.95 },
  { label: "Design", v: 0.84 },
  { label: "Security", v: 0.9 },
];

const CX = 160;
const CY = 150;
const R = 104;

function point(i: number, scale: number) {
  const a = (-90 + i * (360 / AXES.length)) * (Math.PI / 180);
  return [CX + R * scale * Math.cos(a), CY + R * scale * Math.sin(a)] as const;
}

const ringPoints = (scale: number) =>
  AXES.map((_, i) => point(i, scale).join(",")).join(" ");

const valuePoints = AXES.map((ax, i) => point(i, ax.v).join(",")).join(" ");

export function CapabilityRadar() {
  const reduce = useReducedMotion();

  return (
    <figure className="mx-auto w-full max-w-md">
      <svg viewBox="0 0 320 300" className="w-full" role="img" aria-label="Radar chart of capability depth across strategy, data, AI, engineering, design, and security.">
        {/* grid rings */}
        {[0.25, 0.5, 0.75, 1].map((s) => (
          <polygon
            key={s}
            points={ringPoints(s)}
            fill="none"
            className="stroke-white/[0.08]"
            strokeWidth="1"
          />
        ))}
        {/* axes + labels */}
        {AXES.map((ax, i) => {
          const [x, y] = point(i, 1);
          const [lx, ly] = point(i, 1.22);
          return (
            <g key={ax.label}>
              <line x1={CX} y1={CY} x2={x} y2={y} className="stroke-white/[0.08]" strokeWidth="1" />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-white/55"
                fontSize="11"
                fontFamily="var(--font-mono)"
              >
                {ax.label}
              </text>
            </g>
          );
        })}
        {/* value polygon */}
        <motion.g
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        >
          <polygon points={valuePoints} className="fill-accent/15 stroke-accent" strokeWidth="1.5" />
          {AXES.map((ax, i) => {
            const [x, y] = point(i, ax.v);
            return <circle key={ax.label} cx={x} cy={y} r="3" className="fill-accent" />;
          })}
        </motion.g>
      </svg>
      <figcaption className="mt-4 text-center text-sm text-white/45">
        Senior depth across every discipline an AI product needs.
      </figcaption>
    </figure>
  );
}
