import { Reveal } from "@/components/reveal";

/**
 * Animated system-flow diagram: a client's systems feed through a secure
 * gateway and orchestration layer into the AI core, with energy "flowing"
 * along the connectors. Pure SVG + CSS animation (reduced-motion safe).
 */
const sources = [
  { y: 81, label: "Apps & CRMs" },
  { y: 181, label: "Data & documents" },
  { y: 281, label: "Tools & APIs" },
];

export function IntegrationFlow() {
  return (
    <Reveal>
      <figure className="mx-auto max-w-4xl">
        <svg
          viewBox="0 0 820 380"
          className="w-full"
          role="img"
          aria-label="Diagram: your apps, data and tools flow through a secure layer and orchestration into the AI core."
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <defs>
            <linearGradient id="flowGrad" x1="0" y1="0" x2="820" y2="0">
              <stop offset="0%" stopColor="#ccff00" />
              <stop offset="100%" stopColor="#aef03a" />
            </linearGradient>
            <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d8ff5c" />
              <stop offset="55%" stopColor="#ccff00" />
              <stop offset="100%" stopColor="#aef03a" />
            </radialGradient>
            <filter id="soft" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          {/* ---- connectors ---- */}
          {[
            "M186,81 C 250,81 270,181 330,170",
            "M186,181 L330,181",
            "M186,281 C 250,281 270,181 330,192",
            "M416,181 L504,181",
            "M592,181 L666,181",
          ].map((d, i) => (
            <g key={i}>
              <path d={d} fill="none" className="stroke-white/10" strokeWidth="1.5" />
              <path
                d={d}
                fill="none"
                stroke="url(#flowGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className={i % 2 === 0 ? "flow-line" : "flow-line-rev"}
              />
            </g>
          ))}

          {/* ---- source chips ---- */}
          {sources.map((s) => (
            <g key={s.label}>
              <rect
                x="36"
                y={s.y - 23}
                width="150"
                height="46"
                rx="10"
                className="fill-white/[0.03] stroke-white/15"
                strokeWidth="1"
              />
              <circle cx="60" cy={s.y} r="3" className="fill-accent-cyan" />
              <text
                x="78"
                y={s.y + 4}
                fontSize="13"
                className="fill-white/70"
              >
                {s.label}
              </text>
            </g>
          ))}

          {/* ---- secure gateway ---- */}
          <g>
            <circle cx="372" cy="181" r="44" className="fill-ink-800 stroke-accent-cyan/40" strokeWidth="1.5" />
            <circle cx="372" cy="181" r="44" fill="none" className="stroke-accent-cyan/30 pulse-ring" strokeWidth="1" />
            {/* lock glyph */}
            <rect x="360" y="178" width="24" height="18" rx="3" className="fill-none stroke-accent-glow" strokeWidth="1.6" />
            <path d="M364,178 v-5 a8,8 0 0 1 16,0 v5" fill="none" className="stroke-accent-glow" strokeWidth="1.6" />
            <text x="372" y="252" textAnchor="middle" fontSize="13" className="fill-white/80">Secure layer</text>
          </g>

          {/* ---- orchestration ---- */}
          <g>
            <circle cx="548" cy="181" r="44" className="fill-ink-800 stroke-accent-violet/40" strokeWidth="1.5" />
            {/* node-graph glyph */}
            <g className="stroke-accent-violet" strokeWidth="1.5" fill="none">
              <circle cx="548" cy="170" r="4" className="fill-accent-violet" stroke="none" />
              <circle cx="536" cy="190" r="4" className="fill-accent-violet" stroke="none" />
              <circle cx="560" cy="190" r="4" className="fill-accent-violet" stroke="none" />
              <path d="M548,170 L536,190 M548,170 L560,190 M536,190 L560,190" />
            </g>
            <text x="548" y="252" textAnchor="middle" fontSize="13" className="fill-white/80">Orchestration</text>
          </g>

          {/* ---- AI core ---- */}
          <g>
            <circle cx="720" cy="181" r="60" fill="url(#coreGrad)" opacity="0.18" filter="url(#soft)" />
            <circle cx="720" cy="181" r="70" fill="none" strokeDasharray="3 9" className="stroke-white/25 spin-slow" strokeWidth="1" />
            <circle cx="720" cy="181" r="40" fill="url(#coreGrad)" />
            <circle cx="720" cy="181" r="40" fill="none" className="stroke-white/40 pulse-ring" strokeWidth="1" />
            <text x="720" y="186" textAnchor="middle" fontSize="13" fontWeight="600" className="fill-ink">AI core</text>
            <text x="720" y="271" textAnchor="middle" fontSize="13" className="fill-white/80">Your intelligence</text>
          </g>
        </svg>

        <figcaption className="mt-6 text-center text-sm italic text-white/45">
          Data flows both ways — authenticated, grounded, and observable at
          every hop.
        </figcaption>
      </figure>
    </Reveal>
  );
}
