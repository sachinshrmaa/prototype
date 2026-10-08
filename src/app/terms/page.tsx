import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the BALKAPSO Construction website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use" crumbs={[{ name: "Terms of use", href: "/terms" }]} />
      <div className="container-page py-14 md:py-20">
        <div className="prose-body max-w-2xl">
          <p>Last updated: October 2026</p>
          <p>By using this website you agree to these terms.</p>
          <h2>General information only</h2>
          <p>
            The content on this website, including articles and answers to frequently asked questions, is general information. It is
            not a structural assessment or professional advice for any specific building. Decisions about the safety of a structure
            should only be made after an on-site inspection by a qualified engineer.
          </p>
          <h2>No emergency service</h2>
          <p>
            This website and its enquiry form are not monitored around the clock. If a structure appears to be in immediate danger,
            evacuate the area and contact local emergency services first.
          </p>
          <h2>Estimates and engagements</h2>
          <p>
            Any estimate, scope or timeline becomes binding only when agreed in writing for a specific project. Information on this
            website does not form an offer or contract.
          </p>
          <h2>Intellectual property</h2>
          <p>
            The text, design and branding on this website belong to {site.name}. Please do not reproduce them without permission.
          </p>
          <h2>Links</h2>
          <p>We are not responsible for the content of external websites linked from this site.</p>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
