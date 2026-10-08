import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { articles, getArticle } from "@/content/articles";
import { getService } from "@/content/services";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: { type: "article", title: a.title, description: a.description, publishedTime: a.published, url: `/insights/${slug}` },
  };
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const service = getService(a.relatedService);
  const date = new Date(a.published).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <PageHero
        eyebrow={`Insights · ${a.readingMinutes} min read`}
        title={a.title}
        lede={a.description}
        crumbs={[
          { name: "Insights", href: "/insights" },
          { name: a.title, href: `/insights/${slug}` },
        ]}
      >
        <p className="mt-8 font-mono text-sm text-muted">
          By the BALKAPSO engineering team · <time dateTime={a.published}>{date}</time>
        </p>
      </PageHero>

      <article className="container-page py-14 md:py-20">
        <div className="prose-body mx-auto max-w-2xl">
          {a.body.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "ul")
              return (
                <ul key={i}>
                  {b.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>

        {service && (
          <aside className="mx-auto mt-16 max-w-2xl border border-line-strong bg-white p-6 md:p-8">
            <p className="eyebrow">Related service</p>
            <h2 className="mt-3 text-xl font-semibold">{service.name}</h2>
            <p className="mt-2 leading-relaxed text-muted">{service.summary}</p>
            <Link href={`/services/${service.slug}`} className="link-arrow mt-5">
              Learn more <ArrowRight />
            </Link>
          </aside>
        )}
      </article>

      <CtaBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          datePublished: a.published,
          dateModified: a.published,
          mainEntityOfPage: absoluteUrl(`/insights/${slug}`),
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@id": absoluteUrl("/#organization") },
        }}
      />
    </>
  );
}
