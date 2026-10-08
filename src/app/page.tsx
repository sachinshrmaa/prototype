import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FaqList, faqJsonLd } from "@/components/FaqList";
import { ArrowRight, Chat, Check } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { articles } from "@/content/articles";
import { allFaqs } from "@/content/faqs";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const facts = [
  { value: "Zone IV", label: "Sikkim's seismic zone under IS 1893:2016. We design for it." },
  { value: "100+ yrs", label: "Age of the oldest structure we have retrofitted, a Gangtok monastery." },
  { value: "NDT", label: "Non-destructive testing behind every assessment, not guesswork." },
  { value: "IS codes", label: "Designs and repairs to Indian Standards: IS 456, 1893, 13920, 15988." },
];

const warningSigns = [
  "Diagonal cracks from the corners of doors and windows",
  "Cracks in columns, beams or slabs, or cracks that keep growing",
  "Damp walls, rust stains or exposed, corroded steel",
  "Sloping floors, sticking doors or signs of settlement",
  "An extra floor added without a structural check",
  "Damage after an earthquake, landslide or heavy monsoon",
];

const steps = [
  { title: "Assess", body: "We visit the site, inspect the structure and run non-destructive tests where needed." },
  { title: "Diagnose", body: "We find the cause, not just the symptom, and explain it to you in plain language." },
  { title: "Design", body: "We engineer the right level of intervention to IS codes, no more and no less." },
  { title: "Build & verify", body: "Our team executes the work with engineer supervision and quality records." },
];

const principles = [
  {
    title: "Engineers, not just builders",
    body: "Our work is led by structural engineering and research in retrofitting. Every recommendation is backed by analysis and testing.",
  },
  {
    title: "Repair before replace",
    body: "We look for ways to save and strengthen what you already have before anyone talks about demolition.",
  },
  {
    title: "Built for the hills",
    body: "Slopes, monsoon water, landslides and earthquakes shape how we design and build. We work here, and we know these conditions.",
  },
  {
    title: "Straight answers",
    body: "We tell you what the problem is, what it will take to fix it, and what it will cost, before work begins.",
  },
];

export default function Home() {
  const featured = projects[0];
  const homeFaqs = allFaqs.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="container-page grid gap-12 pt-14 pb-16 md:grid-cols-12 md:pt-24 md:pb-24">
          <div className="md:col-span-7 lg:col-span-8">
            <p className="eyebrow">Structural engineering & construction · Gangtok, Sikkim</p>
            <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.04] md:text-7xl">
              Stronger, safer buildings for a seismic state.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              BALKAPSO assesses, strengthens, waterproofs and builds structures across Sikkim. We retrofit ageing buildings,
              design earthquake-resistant new ones, and fix the seepage that quietly damages them.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Book a site assessment <ArrowRight />
              </Link>
              <a
                href={whatsappLink("Hello BALKAPSO, I would like to discuss a building concern.")}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Chat /> Send photos on WhatsApp
              </a>
            </div>
          </div>

          {/* Text-only "spec sheet" in place of a hero photograph */}
          <aside className="self-end md:col-span-5 lg:col-span-4" aria-label="At a glance">
            <dl className="border border-line-strong bg-white font-mono text-sm">
              {[
                ["Specialism", "Retrofitting & strengthening"],
                ["Also", "Design · NDT · Waterproofing · Construction"],
                ["Seismic zone", "IV (IS 1893:2016)"],
                ["Based in", "Tadong, Gangtok"],
                ["Serving", "All districts of Sikkim"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-3 border-b border-line px-4 py-3.5 last:border-0">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-line">
        <div className="container-page">
        <dl className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.value} className="bg-paper py-9 pr-4 pl-4 first:pl-0 md:py-12 md:px-8 md:first:pl-0 [&:nth-child(3)]:pl-0 md:[&:nth-child(3)]:pl-8">
              <dt className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{f.value}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">{f.label}</dd>
            </div>
          ))}
        </dl>
        </div>
      </section>

      {/* Services */}
      <Section
        label="01 · Services"
        title="What we do"
        intro="Five services, one approach: understand the structure first, then do the right work, properly."
      >
        <ol className="border-t border-line">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-line">
              <Link href={`/services/${s.slug}`} className="group grid gap-2 py-7 md:grid-cols-[3rem_1fr_auto] md:gap-6">
                <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-xl font-semibold group-hover:text-accent md:text-2xl">{s.name}</span>
                  <span className="mt-2 block max-w-xl leading-relaxed text-muted">{s.summary}</span>
                </span>
                <ArrowRight className="hidden size-5 self-center text-accent transition-transform group-hover:translate-x-1 md:block" />
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      {/* Warning signs */}
      <Section
        label="02 · Warning signs"
        title="Is your building telling you something?"
        intro="Buildings rarely fail without warning. These signs are worth an engineer's attention, especially in Seismic Zone IV."
        className="bg-white"
      >
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {warningSigns.map((s) => (
            <li key={s} className="flex gap-3 border-b border-line py-4 leading-relaxed">
              <Check className="mt-1 size-4 shrink-0 text-accent" />
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-4 bg-accent-soft p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <p className="max-w-md leading-relaxed">
            <strong className="font-semibold">Noticed one of these?</strong> Send us a photo. We will tell you whether it
            needs a closer look.
          </p>
          <Link href="/services/structural-assessment-ndt" className="link-arrow shrink-0">
            About structural assessment <ArrowRight />
          </Link>
        </div>
      </Section>

      {/* Process */}
      <Section
        label="03 · Approach"
        title="Every problem has a cause. We find it first."
        intro="The same four steps, whether it is a hairline crack or a hundred-year-old monastery."
      >
        <ol className="grid gap-px bg-line sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="bg-paper p-6 md:p-8">
              <span className="font-mono text-sm text-accent">Step {i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
        <Link href="/process" className="link-arrow mt-8">
          See how a project runs <ArrowRight />
        </Link>
      </Section>

      {/* Featured project */}
      <Section label="04 · Featured project" title={featured.title} intro={`${featured.category} · ${featured.location} · ${featured.year}`}>
        <p className="text-xl leading-relaxed md:text-2xl">{featured.summary}</p>
        <p className="mt-6 leading-relaxed text-muted">{featured.challenge}</p>
        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
          {featured.work.map((w) => (
            <li key={w} className="flex gap-3 border-t border-line py-3.5 text-sm leading-relaxed">
              <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden />
              {w}
            </li>
          ))}
        </ul>
        <Link href="/projects" className="link-arrow mt-8">
          All projects <ArrowRight />
        </Link>
      </Section>

      {/* Founder quote */}
      <section className="border-b border-line bg-white">
        <figure className="container-page py-20 md:py-28">
          <blockquote className="max-w-4xl font-display text-3xl font-medium leading-[1.2] tracking-tight md:text-5xl">
            <span className="text-accent">“</span>Every structure we design holds someone&apos;s dreams, their hard-earned
            savings, and their future. We don&apos;t just build structures. We build trust.<span className="text-accent">”</span>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <span>
              <span className="block font-semibold">{site.founder.name}</span>
              <span className="block text-sm text-muted">Founder & CEO, BALKAPSO Construction</span>
            </span>
          </figcaption>
          <Link href="/about" className="link-arrow mt-8">
            Read the founder&apos;s story <ArrowRight />
          </Link>
        </figure>
      </section>

      {/* Why us */}
      <Section label="05 · Why BALKAPSO" title="Why owners and institutions choose us">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="border-t-2 border-ink pt-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Insights */}
      <Section label="06 · Insights" title="Practical guides for building owners" intro="Plain-language advice from our engineers.">
        <ul className="border-t border-line">
          {articles.map((a) => (
            <li key={a.slug} className="border-b border-line">
              <Link href={`/insights/${a.slug}`} className="group block py-6">
                <span className="block text-lg font-semibold leading-snug group-hover:text-accent">{a.title}</span>
                <span className="mt-2 block font-mono text-xs text-muted">{a.readingMinutes} min read</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section label="07 · FAQ" title="Common questions" intro={<Link href="/faq" className="link-arrow">All questions <ArrowRight /></Link>}>
        <FaqList items={homeFaqs} />
      </Section>
      <JsonLd data={faqJsonLd(homeFaqs)} />

      <CtaBand />
    </>
  );
}
