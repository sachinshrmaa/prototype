import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects: Retrofitting, Structural Design & Waterproofing in Sikkim",
  description:
    "Selected BALKAPSO projects, including the retrofitting of the 100+ year old Nyulakahang Gumpa in Gangtok, structural design consultancy and seepage repair.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Selected work, explained."
        lede="We describe our projects in words: what the problem was, what we did, and why. Because how a structure was strengthened matters more than how it looks in a photograph."
        crumbs={[{ name: "Projects", href: "/projects" }]}
      />

      <div className="container-page py-8 md:py-12">
        {projects.map((p, i) => (
          <article id={p.slug} key={p.slug} className="grid scroll-mt-24 gap-8 border-b border-line py-14 last:border-0 md:grid-cols-12 md:py-20">
            <header className="md:col-span-4">
              <span className="font-mono text-sm text-accent">Project {String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">{p.title}</h2>
              <dl className="mt-6 space-y-2 font-mono text-sm">
                {[
                  ["Type", p.category],
                  ["Location", p.location],
                  ["Year", p.year],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[5.5rem_1fr]">
                    <dt className="text-muted">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </header>

            <div className="md:col-span-8 md:pl-8">
              <p className="text-xl leading-relaxed">{p.summary}</p>
              <h3 className="eyebrow mt-10">The challenge</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.challenge}</p>
              <h3 className="eyebrow mt-8">What we did</h3>
              <ul className="mt-3">
                {p.work.map((w) => (
                  <li key={w} className="flex gap-3 border-b border-line py-3 leading-relaxed">
                    <span className="mt-2.5 size-1.5 shrink-0 bg-accent" aria-hidden />
                    {w}
                  </li>
                ))}
              </ul>
              <h3 className="eyebrow mt-8">The outcome</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.outcome}</p>
            </div>
          </article>
        ))}
      </div>

      <CtaBand title="Have a building that needs attention?" body="Whether it is a family home, a hotel or a heritage structure, tell us about it and we will explain what can be done." />
    </>
  );
}
