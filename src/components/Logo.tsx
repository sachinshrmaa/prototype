import Image from "next/image";
import Link from "next/link";
import mark from "../../public/logo-mark.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="BALKAPSO Construction, home">
      <Image src={mark} alt="" priority className="h-9 w-auto shrink-0" />
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
