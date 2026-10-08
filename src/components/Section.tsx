import type { ReactNode } from "react";

/** Two-column section: label + heading on the left, content on the right. */
export function Section({
  label,
  title,
  intro,
  children,
  id,
  className = "",
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-line ${className}`}>
      <div className="container-page grid gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-24">
        <div className="md:col-span-4">
          <p className="eyebrow">{label}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-[2.5rem]">{title}</h2>
          {intro && <p className="mt-5 leading-relaxed text-muted">{intro}</p>}
        </div>
        <div className="md:col-span-8 md:pl-8">{children}</div>
      </div>
    </section>
  );
}
