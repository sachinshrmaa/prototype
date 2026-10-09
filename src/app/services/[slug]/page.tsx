import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { FaqList, faqJsonLd } from "@/components/FaqList";
import { ArrowRight, Check } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/content/articles";
import { getService, services } from "@/content/services";
import { absoluteUrl, site, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title: service.seoTitle, description: service.metaDescription, url: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);
  const related = articles.filter((a) => a.relatedService === slug);

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={service.tagline}
        lede={service.summary}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${slug}` },
        ]}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-primary">
            Let&apos;s discuss your project <ArrowRight />
          </Link>
          <a
            href={whatsappLink(`Hello BALKAPSO, I would like to discuss ${service.name.toLowerCase()}.`)}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on WhatsApp
          </a>
        </div>
      </PageHero>

      <div className="container-page grid gap-12 py-12 md:grid-cols-12 md:gap-8 md:py-24">
        <div className="md:col-span-8 md:pr-10">
          <div className="prose-body">
            {service.intro.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-semibold md:mt-16 md:text-3xl">{service.signs.heading}</h2>
          <ul className="mt-6">
            {service.signs.items.map((item) => (
              <li key={item} className="flex gap-3 border-b border-line py-4 leading-relaxed">
                <Check className="mt-1 size-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-semibold md:mt-16 md:text-3xl">What the work can include</h2>
          <div className="mt-6 grid gap-px bg-line sm:grid-cols-2">
            {service.scope.map((s) => (
              <div key={s.title} className="bg-paper p-5 md:p-6">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>

          {service.note && (
            <p className="mt-10 border-l-2 border-accent bg-accent-soft p-5 leading-relaxed">{service.note}</p>
          )}

          <h2 className="mt-12 text-2xl font-semibold md:mt-16 md:text-3xl">Frequently asked questions</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} />
          </div>
        </div>

        <aside className="md:col-span-4">
          <div className="sticky top-24 space-y-8">
            <div className="border border-line-strong bg-white p-6">
              <h2 className="eyebrow">What you receive</h2>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary mt-7 w-full">
                Let&apos;s discuss your project
              </Link>
              <a href={site.phoneHref} className="mt-3 block text-center font-mono text-sm text-muted hover:text-accent">
                or call {site.phone}
              </a>
            </div>

            {related.length > 0 && (
              <div>
                <h2 className="eyebrow">Further reading</h2>
                <ul className="mt-4 space-y-3">
                  {related.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/insights/${a.slug}`} className="leading-snug hover:text-accent">{a.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="eyebrow">Other services</h2>
              <ul className="mt-4 space-y-3">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-accent">{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <CtaBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          url: absoluteUrl(`/services/${slug}`),
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed: { "@type": "State", name: "Sikkim" },
        }}
      />
      <JsonLd data={faqJsonLd(service.faqs)} />
    </>
  );
}
