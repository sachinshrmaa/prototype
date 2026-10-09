import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { ArrowRight, Chat, Phone } from "./Icons";

export function CtaBand({
  title = "Your next chapter starts with a conversation.",
  body = [
    "You may have a complete set of drawings, a photograph of a concern, or an idea you are still exploring.",
    "Tell us where you're starting and what you hope to achieve. We'll help you identify the information and engineering support your project needs.",
  ],
}: {
  title?: string;
  body?: string[];
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="eyebrow !text-[#93b4f8]">Start with a conversation</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
          {body.map((p) => (
            <p key={p.slice(0, 32)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{p}</p>
          ))}
        </div>
        <div className="flex flex-col justify-end gap-3 md:col-span-5 md:items-end">
          <Link href="/contact" className="btn btn-primary w-full md:w-72">
            Let&apos;s discuss your project <ArrowRight />
          </Link>
          <a href={whatsappLink("Hello BALKAPSO, I would like to discuss my project.")} className="btn btn-ghost-light w-full md:w-72" target="_blank" rel="noopener noreferrer">
            <Chat /> Connect on WhatsApp
          </a>
          <a href={site.phoneHref} className="btn btn-ghost-light w-full md:w-72">
            <Phone /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
