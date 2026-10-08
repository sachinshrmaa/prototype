import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BALKAPSO Construction handles the information you share with us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" crumbs={[{ name: "Privacy policy", href: "/privacy" }]} />
      <div className="container-page py-14 md:py-20">
        <div className="prose-body max-w-2xl">
          <p>Last updated: October 2026</p>
          <p>
            {site.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what information we collect through this
            website and how we use it.
          </p>
          <h2>Information you give us</h2>
          <p>
            When you contact us by phone, WhatsApp, email or the enquiry form, you may share your name, phone number, email address,
            site location, photographs and details of your building. The enquiry form on this website does not store your information;
            it passes it to WhatsApp or your email app so you can send it to us directly.
          </p>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiry and arrange site visits</li>
            <li>To prepare assessments, estimates and project documents</li>
            <li>To keep records of work carried out, as required for professional and legal purposes</li>
          </ul>
          <p>We do not sell or rent your personal information. We do not use it for unrelated marketing.</p>
          <h2>Project information and photographs</h2>
          <p>
            We will not publish your name, address or photographs of your property without your permission.
          </p>
          <h2>Analytics</h2>
          <p>
            We may use privacy-respecting analytics to understand how visitors use this website. This data is aggregated and does not
            identify you personally.
          </p>
          <h2>Third-party services</h2>
          <p>
            Messages sent through WhatsApp or email are also subject to the privacy policies of those services.
          </p>
          <h2>Your choices</h2>
          <p>
            You may ask us to see, correct or delete the personal information we hold about you by contacting{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
