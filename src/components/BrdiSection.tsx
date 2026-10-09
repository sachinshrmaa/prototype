import { site } from "@/lib/site";
import { ArrowRight, Facebook, Instagram, YouTube } from "./Icons";
import { Section } from "./Section";

const areas = [
  "Structural strengthening",
  "Construction materials",
  "Turning construction and demolition waste into useful resources",
];

const socials = [
  { href: site.social.facebook, label: "Facebook", Icon: Facebook },
  { href: site.social.youtube, label: "YouTube", Icon: YouTube },
  { href: site.social.instagram, label: "Instagram", Icon: Instagram },
];

/** BRDI, BALKAPSO's research & development initiative. `short` drops the detail for secondary pages. */
export function BrdiSection({ label, short = false, className }: { label: string; short?: boolean; className?: string }) {
  return (
    <Section
      label={label}
      title="Building today. Exploring what comes next."
      intro="Introducing BRDI, BALKAPSO's research and development initiative."
      className={className}
    >
      <div className="prose-body max-w-2xl">
        <p>
          Our projects bring us face to face with practical questions about structures, materials and construction. BRDI creates a
          space to explore those questions through research, trials and shared learning.
        </p>
      </div>

      {!short && (
        <>
          <h3 className="eyebrow mt-10">Our areas of exploration include</h3>
          <ul className="mt-3 max-w-2xl">
            {areas.map((a) => (
              <li key={a} className="flex gap-3 border-b border-line py-3.5 leading-relaxed">
                <span className="mt-2.5 size-1.5 shrink-0 bg-accent" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
          <div className="prose-body mt-8 max-w-2xl">
            <p>
              We share the journey as it develops: the ideas, the experiments, the findings and the lessons that help us understand
              more.
            </p>
            <p>For engineers, students and curious minds, it&apos;s an invitation to learn alongside us.</p>
          </div>
        </>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-6">
        {site.brdiUrl && (
          <a href={site.brdiUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Visit BRDI <ArrowRight />
          </a>
        )}
        {!short && (
          <ul className="flex gap-2" aria-label="Follow BALKAPSO">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex size-11 items-center justify-center border border-line-strong text-ink-soft transition-colors hover:border-ink hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
