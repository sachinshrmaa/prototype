"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/content/services";
import { site, whatsappLink } from "@/lib/site";
import { Chat, Mail } from "./Icons";

// No backend: the form composes the enquiry and hands it to WhatsApp or the
// visitor's email app. Swap handleSubmit for a server action to store leads.

const fieldClass =
  "mt-2 block w-full rounded-[2px] border border-line-strong bg-white px-3.5 py-3 text-base text-ink placeholder:text-muted/60 focus:border-ink focus:outline-none";

export function ContactForm() {
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      d.get("email") ? `Email: ${d.get("email")}` : null,
      `Location: ${d.get("location")}`,
      `Service: ${d.get("service")}`,
      "",
      String(d.get("message") ?? ""),
    ].filter((l) => l !== null);
    const text = `Hello BALKAPSO,\n\n${lines.join("\n")}`;

    if (channel === "whatsapp") {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    } else {
      const subject = `Enquiry: ${d.get("service")} (${d.get("location")})`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-medium">
        Your name <span className="text-accent">*</span>
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>
      <label className="block text-sm font-medium">
        Phone / WhatsApp <span className="text-accent">*</span>
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={fieldClass} />
      </label>
      <label className="block text-sm font-medium">
        Email <span className="font-normal text-muted">(optional)</span>
        <input name="email" type="email" autoComplete="email" className={fieldClass} />
      </label>
      <label className="block text-sm font-medium">
        Site location <span className="text-accent">*</span>
        <input name="location" required placeholder="e.g. Tadong, Gangtok" className={fieldClass} />
      </label>
      <label className="block text-sm font-medium sm:col-span-2">
        What do you need help with? <span className="text-accent">*</span>
        <select name="service" required defaultValue="" className={fieldClass}>
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="block text-sm font-medium sm:col-span-2">
        Tell us about the building and the concern <span className="text-accent">*</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Type of building, approximate age, number of floors, and what you have noticed (cracks, leaks, planned extension...)"
          className={fieldClass}
        />
      </label>

      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-medium">Send this enquiry by</legend>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {(["whatsapp", "email"] as const).map((c) => (
            <label
              key={c}
              className={`flex cursor-pointer items-center justify-center gap-2 border px-4 py-3 text-sm transition-colors ${channel === c ? "border-ink bg-white font-medium" : "border-line-strong text-muted"}`}
            >
              <input type="radio" name="channel" value={c} checked={channel === c} onChange={() => setChannel(c)} className="sr-only" />
              {c === "whatsapp" ? <Chat /> : <Mail />}
              {c === "whatsapp" ? "WhatsApp" : "Email"}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Send enquiry
        </button>
        <p className="mt-4 text-sm text-muted">
          {channel === "whatsapp"
            ? "This opens WhatsApp with your message filled in. You can attach photos there before sending."
            : "This opens your email app with your message filled in. You can attach photos before sending."}
        </p>
      </div>
    </form>
  );
}
