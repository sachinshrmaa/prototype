import type { Metadata } from "next";
import Link from "next/link";
import { BrdiSection } from "@/components/BrdiSection";
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
    title: "We take time to understand.",
    body: "Your priorities, the site and the structure shape our recommendations.",
  },
  {
    title: "We make the decisions understandable.",
    body: "You should know what we are proposing, why it matters and what the next step involves.",
  },
  {
    title: "We connect design with site practice.",
    body: "Drawings, detailing and workmanship all contribute to how a structure performs.",
  },
  {
    title: "We understand the challenges of the hills.",
    body: "Sloping sites, monsoon exposure and seismic demands require careful consideration throughout the project.",
  },
  {
    title: "We keep learning.",
    body: "Research and practical experience encourage us to question, evaluate and improve our methods.",
  },
];

export default function Home() {
  const featured = projects[0];
  const homeFaqs = allFaqs.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="container-page grid gap-12 pt-10 pb-12 md:grid-cols-12 md:pt-24 md:pb-24">
          <div className="md:col-span-7 lg:col-span-8">
            <p className="eyebrow">Structural engineering & construction · Gangtok, Sikkim</p>
            <h1 className="mt-4 text-[2.4rem] font-semibold leading-[1.04] md:mt-5 md:text-7xl">
              Built around your dreams. Strengthened by engineering.
            </h1>
            <p className="mt-5 font-display text-lg font-medium md:mt-6 md:text-2xl">Your home. Your business. Your next big plan.</p>
            <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-muted md:mt-5 md:text-xl">
              Whatever you are building, or hoping to preserve, BALKAPSO brings structural engineering, practical experience and care
              to the decisions that matter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9">
              <Link href="/contact" className="btn btn-primary">
                Let&apos;s discuss your project <ArrowRight />
              </Link>
              <a
                href={whatsappLink("Hello BALKAPSO, I would like to discuss my project.")}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Chat /> Connect on WhatsApp
              </a>
            </div>
          </div>

          {/* Text-only "spec sheet" in place of a hero photograph */}
          <aside className="hidden self-end md:col-span-5 md:block lg:col-span-4" aria-label="At a glance">
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
            <div key={f.value} className="bg-paper py-6 pr-3 pl-4 first:pl-0 md:py-12 md:px-8 md:first:pl-0 [&:nth-child(3)]:pl-0 md:[&:nth-child(3)]:pl-8">
              <dt className="font-display text-2xl font-semibold tracking-tight md:text-4xl">{f.value}</dt>
              <dd className="mt-2 text-[0.8125rem] leading-relaxed text-muted md:mt-3 md:text-sm">{f.label}</dd>
            </div>
          ))}
        </dl>
        </div>
      </section>

      {/* Services */}
      <Section
        label="01 · Services"
        title="Expertise for every stage of your building's journey."
        intro={
          <>
            We design new structures, assess existing buildings, strengthen what needs support, and deliver construction and
            waterproofing solutions suited to your project.
            <span className="mt-4 block">From the first question to the work on site, we help you move forward with clarity.</span>
          </>
        }
      >
        <ol className="border-t border-line">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-line">
              <Link href={`/services/${s.slug}`} className="group grid grid-cols-[2rem_1fr_auto] gap-x-3 gap-y-2 py-5 md:grid-cols-[3rem_1fr_auto] md:gap-6 md:py-7">
                <span className="pt-1 font-mono text-sm text-muted md:pt-0">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-lg font-semibold leading-snug group-hover:text-accent md:text-2xl">{s.name}</span>
                  <span className="mt-1 block text-muted md:mt-2 md:font-semibold md:text-ink">{s.tagline}</span>
                  <span className="mt-2 hidden max-w-xl leading-relaxed text-muted md:block">{s.summary}</span>
                </span>
                <ArrowRight className="size-5 self-center text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ol>
        <Link href="/services" className="link-arrow mt-8">
          Explore our services <ArrowRight />
        </Link>
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
            <li key={s} className="flex gap-3 border-b border-line py-3 leading-relaxed md:py-4">
              <Check className="mt-1 size-4 shrink-0 text-accent" />
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-4 bg-accent-soft p-5 sm:flex-row sm:items-center sm:justify-between md:mt-10 md:p-8">
          <p className="max-w-md leading-relaxed">
            <strong className="font-semibold">Noticed one of these?</strong> Send us a photo on WhatsApp. We&apos;ll tell you
            whether it needs a closer look.
          </p>
          <a
            href={whatsappLink("Hello BALKAPSO, I have noticed a sign in my building and would like you to take a look.")}
            className="link-arrow shrink-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on WhatsApp <ArrowRight />
          </a>
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
            <li key={s.title} className="bg-paper py-5 md:p-8">
              <span className="font-mono text-sm text-accent">Step {i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold md:mt-3">{s.title}</h3>
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
        <p className="text-lg leading-relaxed md:text-2xl">{featured.summary}</p>
        <p className="mt-6 hidden leading-relaxed text-muted md:block">{featured.challenge}</p>
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
        <figure className="container-page py-14 md:py-28">
          <blockquote className="max-w-4xl font-display text-[1.75rem] font-medium leading-[1.2] tracking-tight md:text-5xl">
            <span className="text-accent">“</span>Behind every project is someone who is trusting us with their
            future.<span className="text-accent">”</span>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-accent" aria-hidden />
            <span>
              <span className="block font-semibold">{site.founder.name}</span>
              <span className="block text-sm text-muted">Founder & CEO, BALKAPSO Construction</span>
            </span>
          </figcaption>
          <Link href="/about#founder" className="link-arrow mt-8">
            Read the founder&apos;s message <ArrowRight />
          </Link>
        </figure>
      </section>

      {/* Why us */}
      <Section label="05 · Why BALKAPSO" title="Your investment deserves thoughtful engineering.">
        <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 md:gap-y-10">
          {principles.map((p) => (
            <div key={p.title} className="border-t-2 border-ink pt-4 sm:last:col-span-2 md:pt-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Research & learning */}
      <BrdiSection label="06 · Research & Learning" className="bg-white" />

      {/* Insights */}
      <Section label="07 · Insights" title="Practical guides for building owners" intro="Plain-language advice from our engineers.">
        <ul className="border-t border-line">
          {articles.map((a) => (
            <li key={a.slug} className="border-b border-line">
              <Link href={`/insights/${a.slug}`} className="group block py-5 md:py-6">
                <span className="block text-lg font-semibold leading-snug group-hover:text-accent">{a.title}</span>
                <span className="mt-2 block font-mono text-xs text-muted">{a.readingMinutes} min read</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section label="08 · FAQ" title="Common questions" intro={<Link href="/faq" className="link-arrow">All questions <ArrowRight /></Link>}>
        <FaqList items={homeFaqs} mobileLimit={3} />
      </Section>
      <JsonLd data={faqJsonLd(homeFaqs)} />

      <CtaBand />
    </>
  );
}
