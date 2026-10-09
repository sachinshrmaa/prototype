import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services: Retrofitting, Structural Design, NDT & Waterproofing",
  description:
    "Seismic retrofitting, structural assessment and NDT, structural design, waterproofing and civil construction across Sikkim, from BALKAPSO Construction in Gangtok.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Expertise for every stage of your building's journey."
        lede="From a single cracked column to a complete earthquake-resistant building, every service starts with understanding the structure."
        crumbs={[{ name: "Services", href: "/services" }]}
      />

      <div className="container-page py-2 md:py-12">
        {services.map((s, i) => (
          <article key={s.slug} className="grid gap-6 border-b border-line py-10 last:border-0 md:grid-cols-12 md:gap-8 md:py-16">
            <div className="md:col-span-5">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                <Link href={`/services/${s.slug}`} className="hover:text-accent">{s.name}</Link>
              </h2>
              <p className="mt-4 font-semibold">{s.tagline}</p>
              <p className="mt-2 leading-relaxed text-muted">{s.summary}</p>
              <Link href={`/services/${s.slug}`} className="link-arrow mt-6">
                Learn more <ArrowRight />
              </Link>
            </div>
            <ul className="hidden md:col-span-7 md:block md:pl-8">
              {s.scope.map((item) => (
                <li key={item.title} className="border-t border-line py-4 first:border-t-0 md:first:border-t">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
