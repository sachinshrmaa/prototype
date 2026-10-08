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
      <div className="container-page pt-10 pb-14 md:pt-14 md:pb-20">
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mt-10 md:mt-14">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] md:text-6xl">{title}</h1>
        {lede && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{lede}</p>}
        {children}
      </div>
    </header>
  );
}
