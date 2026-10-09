import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FaqList, faqJsonLd } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { allFaqs, faqGroups } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ: Retrofitting, Structural Safety & Waterproofing",
  description:
    "Answers to common questions about building safety in Sikkim, retrofitting costs and timelines, structural cracks, seepage, and working with BALKAPSO.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lede="Straight answers to the questions building owners ask us most. If yours is not here, just ask."
        crumbs={[{ name: "FAQ", href: "/faq" }]}
      />
      <div className="container-page py-12 md:py-20">
        {faqGroups.map((g) => (
          <section key={g.title} className="grid gap-6 py-8 md:grid-cols-12 md:gap-8">
            <h2 className="eyebrow md:col-span-4 md:pt-6">{g.title}</h2>
            <div className="md:col-span-8">
              <FaqList items={g.items} />
            </div>
          </section>
        ))}
      </div>
      <JsonLd data={faqJsonLd(allFaqs)} />
      <CtaBand />
    </>
  );
}
