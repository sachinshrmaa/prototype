import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Insights: Building Safety Guides for Sikkim",
  description:
    "Practical guides from BALKAPSO's engineers on earthquake safety, structural cracks, seepage and waterproofing for building owners in Sikkim.",
  alternates: { canonical: "/insights" },
};

const fmt = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function InsightsPage() {
  const sorted = [...articles].sort((a, b) => b.published.localeCompare(a.published));
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Plain-language guides for building owners."
        lede="What our engineers wish every homeowner in Sikkim knew about earthquakes, cracks and water."
        crumbs={[{ name: "Insights", href: "/insights" }]}
      />
      <div className="container-page py-8 md:py-12">
        {sorted.map((a) => (
          <article key={a.slug} className="grid gap-3 border-b border-line py-10 last:border-0 md:grid-cols-12 md:gap-8">
            <p className="font-mono text-sm text-muted md:col-span-3">
              <time dateTime={a.published}>{fmt(a.published)}</time>
              <span className="mt-1 block">{a.readingMinutes} min read</span>
            </p>
            <div className="md:col-span-9">
              <h2 className="text-2xl font-semibold leading-snug">
                <Link href={`/insights/${a.slug}`} className="hover:text-accent">{a.title}</Link>
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{a.description}</p>
            </div>
          </article>
        ))}
      </div>
      <CtaBand />
    </>
  );
}
