/**
 * DOT-MATRIX — the signature Vertex motif (design.md §5).
 * A field of small squares: gray (--dot-off) by default, coral (--dot-on) when "lit".
 * Density of coral grows downward (top sparse → bottom dense) so the field looks
 * like data materializing.
 *
 * The lit pattern is computed with a deterministic seeded PRNG (not Math.random)
 * so the server and client render byte-identical markup — no hydration mismatch,
 * no flash. The "organic scatter" is preserved, just reproducible.
 */

type DotMatrixProps = {
  rows: number;
  cols: number;
  /** changing the seed reshuffles the scatter while staying deterministic */
  seed?: number;
  /** baseline lit probability at the very top row */
  base?: number;
  /** how much the probability grows by the bottom row */
  growth?: number;
  className?: string;
};

// Mulberry32 — tiny deterministic PRNG.
function makeRng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function DotMatrix({
  rows,
  cols,
  seed = 1,
  base = 0.1,
  growth = 0.62,
  className,
}: DotMatrixProps) {
  const rng = makeRng(seed * 2654435761);
  const cells: boolean[] = [];
  for (let r = 0; r < rows; r++) {
    const p = base + growth * (r / Math.max(1, rows - 1));
    for (let c = 0; c < cols; c++) {
      cells.push(rng() < p);
    }
  }

  return (
    <div
      className={`dotmatrix${className ? ` ${className}` : ""}`}
      aria-hidden="true"
      style={{ gridTemplateColumns: `repeat(${cols}, var(--cell))` }}
    >
      {cells.map((on, i) => {
        // a sparse, deterministic subset of lit dots shimmers, out of phase
        const sh = on && i % 9 === 0;
        return (
          <span
            key={i}
            className={`dot${on ? " is-on" : ""}${sh ? " sh" : ""}`}
            style={sh ? { animationDelay: `${(i % 13) * 0.27}s` } : undefined}
          />
        );
      })}
    </div>
  );
}
