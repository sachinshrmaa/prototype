import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Chat, Clock, Mail, Phone, Pin } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us: Book a Structural Assessment in Sikkim",
  description:
    "Contact BALKAPSO Construction in Tadong, Gangtok. Call, WhatsApp or send an enquiry about retrofitting, structural assessment, design, waterproofing or construction.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const channels = [
    { icon: <Phone className="size-5" />, label: "Call", value: site.phone, href: site.phoneHref },
    { icon: <Chat className="size-5" />, label: "WhatsApp", value: "Send photos and a message", href: whatsappLink("Hello BALKAPSO, I would like to discuss my project."), external: true },
    { icon: <Mail className="size-5" />, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: <Pin className="size-5" />, label: "Office", value: `${site.address.street}, ${site.address.locality}, ${site.address.district}, ${site.address.region} ${site.address.postalCode}`, href: site.mapsUrl, external: true },
    { icon: <Clock className="size-5" />, label: "Hours", value: site.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Your next chapter starts with a conversation."
        lede="Tell us where you're starting and what you hope to achieve. Drawings, a photo of a concern, or just an idea: any of it is a good place to begin."
        crumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <div className="container-page grid gap-14 py-12 md:grid-cols-12 md:gap-8 md:py-24">
        <section className="md:col-span-7 md:pr-10" aria-labelledby="enquiry">
          <h2 id="enquiry" className="text-2xl font-semibold md:text-3xl">Send an enquiry</h2>
          <p className="mt-3 mb-8 leading-relaxed text-muted md:mb-10">Fields marked with * are required.</p>
          <ContactForm />
        </section>

        <aside className="md:col-span-5">
          <h2 className="eyebrow">Reach us directly</h2>
          <ul className="mt-5 border-t border-line">
            {channels.map((c) => {
              const body = (
                <>
                  <span className="mt-0.5 text-accent">{c.icon}</span>
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-muted">{c.label}</span>
                    <span className="mt-1 block leading-relaxed">{c.value}</span>
                  </span>
                </>
              );
              return (
                <li key={c.label} className="border-b border-line">
                  {c.href ? (
                    <a
                      href={c.href}
                      className="flex gap-4 py-5 hover:text-accent"
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="flex gap-4 py-5">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-10 bg-white p-6 ring-1 ring-line">
            <h2 className="font-semibold">What to send for a faster answer</h2>
            <ul className="mt-4 list-[square] space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
              <li>Location of the building</li>
              <li>Type of building, number of floors and approximate age</li>
              <li>Photos or a short video of the problem area</li>
              <li>Any drawings or earlier reports</li>
              <li>What you would like to achieve, and by when</li>
            </ul>
          </div>

          <p className="mt-8 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
            <strong className="text-ink">Structural emergency?</strong> If a building shows signs of imminent collapse, move everyone
            out and away, and contact local emergency services (112) first.
          </p>
        </aside>
      </div>
    </>
  );
}
