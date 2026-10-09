import type { ReactNode } from "react";

/** Two-column section: label + heading on the left, content on the right. */
export function Section({
  label,
  title,
  intro,
  aside,
  children,
  id,
  className = "",
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Extra content above the label in the left column, e.g. a portrait. */
  aside?: ReactNode;
  children?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-line ${className}`}>
      <div className="container-page grid gap-7 py-12 md:grid-cols-12 md:gap-8 md:py-24">
        <div className="md:col-span-4">
          {aside}
          <p className="eyebrow">{label}</p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight md:mt-4 md:text-[2.5rem]">{title}</h2>
          {intro && <p className="mt-4 leading-relaxed text-muted md:mt-5">{intro}</p>}
        </div>
        <div className="md:col-span-8 md:pl-8">{children}</div>
      </div>
    </section>
  );
}
