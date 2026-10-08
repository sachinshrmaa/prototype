import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers & Internships for Civil Engineers",
  description:
    "Join BALKAPSO Construction in Gangtok. We welcome civil engineers, site supervisors and interns who want to learn structural assessment, retrofitting and quality construction.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Learn engineering the way it should be practised."
        lede="BALKAPSO began as a place to train young civil engineers, and that is still part of who we are. If you care about safe buildings and doing things properly, we would like to hear from you."
        crumbs={[{ name: "Careers", href: "/careers" }]}
      />
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="prose-body md:col-span-7">
          <h2 className="!mt-0">Who we look for</h2>
          <ul>
            <li>Civil and structural engineers, including recent graduates</li>
            <li>Site engineers and supervisors with experience in RCC construction</li>
            <li>Engineering students looking for internships in structural assessment and retrofitting</li>
            <li>Skilled tradespeople with experience in repair, waterproofing or concrete work</li>
          </ul>
          <h2>What you will learn</h2>
          <ul>
            <li>Structural assessment and non-destructive testing</li>
            <li>Retrofitting design and execution, including column jacketing</li>
            <li>Earthquake-resistant design to IS codes for hill sites</li>
            <li>Quality control on real construction sites</li>
          </ul>
        </div>
        <aside className="md:col-span-5">
          <div className="border border-line-strong bg-white p-6 md:p-8">
            <h2 className="text-xl font-semibold">How to apply</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Email your CV with a short note about what kind of work interests you. We keep every application on file and get in touch
              when a suitable role opens.
            </p>
            <a href={`mailto:${site.email}?subject=${encodeURIComponent("Application: ")}`} className="btn btn-primary mt-6 w-full">
              Email your CV
            </a>
            <p className="mt-3 text-center font-mono text-sm text-muted">{site.email}</p>
          </div>
        </aside>
      </div>
    </>
  );
}
