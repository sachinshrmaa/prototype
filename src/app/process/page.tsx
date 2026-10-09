import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How We Work: From Assessment to Completion",
  description:
    "How a BALKAPSO project runs: first conversation, site assessment and NDT, diagnosis, engineered design, supervised execution and handover. Clear steps, no surprises.",
  alternates: { canonical: "/process" },
};

const steps = [
  {
    title: "First conversation",
    time: "Same or next working day",
    body: "You call, message on WhatsApp or fill in the form. Tell us about the building and what you are seeing, and send photos if you can. We will tell you whether a site visit is needed and what it involves.",
    you: "Photos, location, building age, any drawings you have",
  },
  {
    title: "Site assessment",
    time: "A few hours on site",
    body: "An engineer visits, inspects the structure, maps cracks and defects, and runs non-destructive tests where needed. We also ask about the building's history: when it was built, what has been added, and when the problem started.",
    you: "Access to all areas, including roof and any basement",
  },
  {
    title: "Diagnosis & report",
    time: "Usually within a week",
    body: "We work out the cause, not just the symptoms, and give you a written report in plain language. It sets out what is urgent, what is necessary, and what is advisable, with a recommended scope.",
    you: "Time to read it and ask questions",
  },
  {
    title: "Design & estimate",
    time: "Depends on scope",
    body: "For repair, retrofitting or new construction, we prepare the engineering design, drawings and method statement, along with a clear estimate. You know what you are paying for before work begins.",
    you: "Approval of the scope and estimate",
  },
  {
    title: "Execution",
    time: "Weeks to months",
    body: "Our site team carries out the work with engineer supervision. Critical stages, such as reinforcement before concreting, are inspected and recorded. Where the building stays occupied, we phase the work and keep it safe.",
    you: "Regular updates from a single point of contact",
  },
  {
    title: "Handover",
    time: "At completion",
    body: "We hand over the completed work with records of what was done, along with maintenance advice so the structure stays healthy. We remain available for follow-up checks.",
    you: "Completion records and maintenance guidance",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="A clear process, from first call to handover."
        lede="Structural work can feel uncertain. Our process is designed so you always know what is happening, why, and what comes next."
        crumbs={[{ name: "How we work", href: "/process" }]}
      />

      <ol className="container-page py-8 md:py-12">
        {steps.map((s, i) => (
          <li key={s.title} className="grid gap-6 border-b border-line py-12 last:border-0 md:grid-cols-12 md:gap-8 md:py-14">
            <div className="md:col-span-1">
              <span className="font-display text-4xl font-semibold text-accent md:text-5xl">{i + 1}</span>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-2xl font-semibold md:text-3xl">{s.title}</h2>
              <p className="mt-1 font-mono text-sm text-muted">{s.time}</p>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{s.body}</p>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-line-strong pl-5">
                <p className="eyebrow !text-muted">From you</p>
                <p className="mt-2 leading-relaxed">{s.you}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <CtaBand />
    </>
  );
}
