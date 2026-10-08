import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="BALKAPSO Construction, home">
      <svg viewBox="0 0 28 28" className="size-7 shrink-0" aria-hidden>
        <rect width="28" height="28" fill="var(--color-accent)" />
        <path d="M7 21V7h3v14zM12.5 21V11h3v10zM18 21v-6h3v6z" fill="white" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[1.05rem] font-bold tracking-[0.08em] ${light ? "text-white" : "text-ink"}`}>
          BALKAPSO
        </span>
        <span className={`mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-muted"}`}>
          Construction
        </span>
      </span>
    </Link>
  );
}
