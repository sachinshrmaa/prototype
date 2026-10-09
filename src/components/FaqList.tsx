import type { Faq } from "@/content/services";
import { Plus } from "./Icons";

/** `mobileLimit` shows only the first N questions on phones. */
export function FaqList({ items, mobileLimit }: { items: Faq[]; mobileLimit?: number }) {
  return (
    <div className="border-t border-line">
      {items.map((f, i) => (
        <details key={f.q} className={`group border-b border-line ${mobileLimit !== undefined && i >= mobileLimit ? "max-md:hidden" : ""}`}>
          <summary className="flex items-start justify-between gap-6 py-4 text-left font-medium leading-snug hover:text-accent md:py-5 md:text-lg">
            <span>{f.q}</span>
            <Plus className="mt-1 size-5 shrink-0 text-accent transition-transform group-open:rotate-45" />
          </summary>
          <p className="max-w-2xl pb-6 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
