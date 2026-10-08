import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { ArrowRight, Chat, Phone } from "./Icons";

export function CtaBand({
  title = "Worried about a crack, a leak, or an earthquake?",
  body = "Tell us what you are seeing. Send a few photos on WhatsApp or book a site assessment, and an engineer will tell you plainly what it means and what to do next.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="eyebrow !text-[#93b4f8]">Start with a conversation</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{body}</p>
        </div>
        <div className="flex flex-col justify-end gap-3 md:col-span-5 md:items-end">
          <Link href="/contact" className="btn btn-primary w-full md:w-72">
            Book a site assessment <ArrowRight />
          </Link>
          <a href={whatsappLink("Hello BALKAPSO, I would like to discuss a building concern.")} className="btn btn-ghost-light w-full md:w-72" target="_blank" rel="noopener noreferrer">
            <Chat /> WhatsApp us photos
          </a>
          <a href={site.phoneHref} className="btn btn-ghost-light w-full md:w-72">
            <Phone /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
