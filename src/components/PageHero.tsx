import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line">
      <div className="container-page pt-6 pb-12 md:pt-14 md:pb-20">
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mt-8 md:mt-14">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-[2.1rem] font-semibold leading-[1.08] md:mt-4 md:text-6xl">{title}</h1>
        {lede && <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted md:mt-6 md:text-xl">{lede}</p>}
        {children}
      </div>
    </header>
  );
}
