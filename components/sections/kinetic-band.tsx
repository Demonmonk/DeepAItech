/**
 * Kinetic type band — two rows of huge display type scrolling in opposite
 * directions. Pure CSS marquee (freezes under reduced-motion via the global
 * media query).
 */
const ROW_A = ["Intelligence", "Engineered", "Production-grade", "Dubai-built"];
const ROW_B = ["Grounded", "Evaluated", "Secured", "Shipped"];

function Row({
  words,
  outline,
  reverse,
}: {
  words: string[];
  outline: string;
  reverse?: boolean;
}) {
  const chunk = (
    <>
      {words.map((w) => (
        <span key={w} className="mx-6 inline-flex items-center gap-12">
          <span className={`headline text-[12vw] uppercase leading-none md:text-[7vw] ${outline}`}>
            {w}
          </span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-accent/70" />
        </span>
      ))}
    </>
  );
  return (
    <div className="flex w-max animate-marquee" style={reverse ? { animationDirection: "reverse" } : undefined}>
      <div className="flex shrink-0 items-center">{chunk}</div>
      <div aria-hidden className="flex shrink-0 items-center">{chunk}</div>
    </div>
  );
}

export function KineticBand() {
  return (
    <section aria-hidden className="overflow-hidden border-y border-white/10 py-10 md:py-14">
      <Row words={ROW_A} outline="text-outline" />
      <div className="h-4 md:h-6" />
      <Row words={ROW_B} outline="text-outline-accent" reverse />
    </section>
  );
}
