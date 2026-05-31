/**
 * Ambient Quantum-Black backdrop: a fine grid, soft gradient orbs,
 * and a subtle vignette. Purely decorative — sits behind content.
 */
export function AmbientBackground({
  variant = "default",
}: {
  variant?: "default" | "minimal";
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base */}
      <div className="absolute inset-0 bg-ink" />

      {/* grid */}
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />

      {/* gradient orbs */}
      <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-accent-cyan/20 blur-[140px] animate-pulse-slow" />
      <div className="absolute right-[-10%] top-[20%] h-[460px] w-[460px] rounded-full bg-accent-violet/20 blur-[150px] animate-pulse-slow" />

      {variant === "default" && (
        <div className="absolute bottom-[-20%] left-1/3 h-[480px] w-[480px] rounded-full bg-indigo-500/10 blur-[160px]" />
      )}

      {/* top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(5,5,6,0.9)_100%)]" />
    </div>
  );
}

/** A localized section glow, useful inside individual sections. */
export function SectionGlow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full blur-[120px] ${className}`}
    />
  );
}
