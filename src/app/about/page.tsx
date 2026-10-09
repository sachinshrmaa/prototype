import type { Metadata } from "next";
import Link from "next/link";
import { BrdiSection } from "@/components/BrdiSection";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us: Structural Engineers in Gangtok, Sikkim",
  description:
    "BALKAPSO Construction was founded by structural engineer Solmon Sharma to design safer homes, strengthen weak structures and preserve Sikkim's heritage through retrofitting.",
  alternates: { canonical: "/about" },
};

const team = [
  { name: "Solmon Sharma", role: "Founder & CEO", focus: "Design Head" },
  { name: "Upash Tamang", role: "Chief Operating Officer", focus: "Business strategy, growth and stakeholder relations" },
  { name: "Salmone Rezia Targain", role: "Manager", focus: "Project management, team supervision and coordination" },
  { name: "Palden Gurung", role: "Project Engineer", focus: "Site supervision and quality assurance" },
];

const values = [
  { title: "Science before solutions", body: "Every problem has a cause. We find it through structural evaluation and non-destructive testing, then design the fix to Indian and international standards." },
  { title: "Safety as a responsibility", body: "In Seismic Zone IV, earthquake safety is not optional. We treat every structure as something people's lives depend on, because they do." },
  { title: "Preserve what matters", body: "We would rather strengthen a building than demolish it, especially heritage and cultural structures that cannot be replaced." },
  { title: "Train the next generation", body: "BALKAPSO began by training young civil engineers. Raising the standard of engineering in Sikkim is still part of what we do." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BALKAPSO"
        title="We see the people behind the structure."
        lede="For an owner, a building can represent years of saving, a new beginning, or a place that has belonged to the family for generations."
        crumbs={[{ name: "About", href: "/about" }]}
      >
        <div className="prose-body mt-6 max-w-2xl">
          <p>That meaning stays with us when we design, assess, strengthen and build.</p>
          <p>
            BALKAPSO Construction is a Gangtok-based structural engineering and construction firm working across structural design,
            assessment, retrofitting, waterproofing and construction.
          </p>
          <p>
            Our purpose is to bring sound engineering into decisions that affect people&apos;s homes, livelihoods and future plans,
            with explanations they can understand and work they can see.
          </p>
        </div>
      </PageHero>

      <Section
        id="founder"
        label="Message from the founder"
        title="“Behind every project is someone who is trusting us with their future.”"
        className="scroll-mt-20"
      >
        <div className="prose-body max-w-2xl">
          <p>
            BALKAPSO began with consultancy and a desire to help young civil engineers connect their education with practical work.
          </p>
          <p>
            As our work grew, so did my understanding of the responsibility we carry. People come to us with plans they have worked
            towards for years, and sometimes with concerns about a building they depend on every day.
          </p>
          <p>They deserve careful investigation, honest explanations and thoughtful engineering.</p>
          <p>
            My doctoral research in retrofitting continues to deepen that commitment. Through BALKAPSO and our research and learning
            initiatives, I want us to keep asking better questions, developing our understanding and sharing what we learn.
          </p>
          <p className="font-display text-2xl font-medium leading-snug text-ink">
            The trust people place in us is something we must earn through our work.
          </p>
        </div>
        <p className="mt-8">
          <span className="block font-semibold">{site.founder.name}</span>
          <span className="block text-sm text-muted">Founder & CEO, BALKAPSO Construction</span>
        </p>

        <details className="group mt-10 max-w-2xl border-t border-line pt-6">
          <summary className="link-arrow cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Read the full story</span>
            <span className="hidden group-open:inline">Hide the full story</span>
          </summary>
          <div className="prose-body mt-6">
            <p>
              BALKAPSO Construction started with a simple goal: to train young civil engineers and provide consultancy to people
              planning to build their homes or commercial spaces. In the beginning it was a way to sustain myself, but more
              importantly, it made me realise the deep responsibility that comes with being an engineer. Every structure we design
              holds someone&apos;s dreams, their hard-earned savings, and their future.
            </p>
            <p>
              I still remember one project that changed my perspective. A homeowner had invested everything into building their
              family&apos;s house. Within months, cracks began spreading through the walls, a painful result of poor construction
              practice. We assessed the structure, identified the faults and strengthened it. What stayed with me was not the repair,
              but the relief on their face when they realised their home could be saved.
            </p>
            <p>
              That day I understood that engineering is not just about concrete and steel. It is about people. BALKAPSO had to be more
              than a business. It had to be a mission: to design safer homes, strengthen weak structures, preserve cultural and heritage
              buildings through retrofitting, and make sure engineering truly serves people.
            </p>
            <p>
              As we grew, we noticed a critical gap. Sikkim is in Seismic Zone IV under IS 1893:2016, so earthquakes are a constant
              reality, yet no specialised teams were focused on retrofitting and waterproofing here. BALKAPSO stepped up to fill that
              gap, not only as a business but as a responsibility.
            </p>
            <p>
              This drive for safer construction led me to doctoral research in retrofitting, and took BALKAPSO beyond consultancy into
              research and development. We believe every problem has a solution if we take the time to understand its cause. Our work is
              rooted in scientific analysis, non-destructive testing and structural evaluation based on Indian and international standards.
            </p>
            <p className="font-display text-2xl font-medium leading-snug text-ink">
              At BALKAPSO, we don&apos;t just build structures. We build trust.
            </p>
          </div>
        </details>
      </Section>

      <Section label="What we believe" title="Our values" className="bg-white">
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="border-t-2 border-ink pt-5">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <BrdiSection label="Research & Learning" short />

      <Section label="Our team" title="The people behind the work" intro="A focused team of engineers and project managers, based in Gangtok.">
        <ul className="border-t border-line">
          {team.map((m) => (
            <li key={m.name} className="grid gap-1 border-b border-line py-6 sm:grid-cols-[1fr_1.3fr] sm:gap-6">
              <div>
                <p className="text-lg font-semibold">{m.name}</p>
                <p className="font-mono text-sm text-accent">{m.role}</p>
              </div>
              <p className="leading-relaxed text-muted">{m.focus}</p>
            </li>
          ))}
        </ul>
        <Link href="/careers" className="link-arrow mt-8">
          Join the team <ArrowRight />
        </Link>
      </Section>

      <CtaBand />
    </>
  );
}
