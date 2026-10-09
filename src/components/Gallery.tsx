"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryCategory, GalleryPhoto } from "@/content/gallery";
import { whatsappLink } from "@/lib/site";
import { ArrowRight, Chat, Close } from "./Icons";

/** Tabbed photo gallery with a click-to-enlarge lightbox. */
export function Gallery({ categories }: { categories: GalleryCategory[] }) {
  const [active, setActive] = useState(categories[0].id);
  const [open, setOpen] = useState<GalleryPhoto | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const current = categories.find((c) => c.id === active) ?? categories[0];

  function show(photo: GalleryPhoto) {
    setOpen(photo);
    dialog.current?.showModal();
  }

  return (
    <div>
      <div role="tablist" aria-label="Gallery" className="flex flex-col border border-line-strong sm:flex-row">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            id={`tab-${c.id}`}
            aria-selected={c.id === active}
            aria-controls={`panel-${c.id}`}
            onClick={() => setActive(c.id)}
            className={`flex-1 px-4 py-3.5 text-left text-sm transition-colors sm:text-center ${c.id === active ? "bg-ink font-medium text-white" : "text-ink-soft hover:text-accent"}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} className="mt-8">
        <p className="max-w-2xl leading-relaxed text-muted">{current.intro}</p>

        {current.photos.length > 0 ? (
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {current.photos.map((p) => (
              <li key={p.src}>
                <button type="button" onClick={() => show(p)} className="group block w-full text-left">
                  <Image
                    src={p.src}
                    width={p.width}
                    height={p.height}
                    alt={p.caption}
                    loading="lazy"
                    sizes="(min-width: 768px) 22vw, 45vw"
                    className="aspect-[4/3] w-full object-cover transition-opacity group-hover:opacity-85"
                  />
                  <span className="mt-2 block text-sm leading-snug text-muted">{p.caption}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 border border-dashed border-line-strong p-8 text-center text-sm text-muted">Photos coming soon.</p>
        )}

        {current.id === categories[0].id && (
          <a
            href={whatsappLink("Hello BALKAPSO, I have noticed something in my building and would like you to take a look.")}
            className="link-arrow mt-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Chat /> Send us a photo on WhatsApp <ArrowRight />
          </a>
        )}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-auto max-h-[92vh] max-w-[min(64rem,94vw)] bg-transparent p-0 backdrop:bg-ink/85"
      >
        {open && (
          <figure className="relative">
            <Image src={open.src} width={open.width} height={open.height} alt={open.caption} className="max-h-[84vh] w-auto object-contain" />
            <figcaption className="mt-3 text-sm text-white">{open.caption}</figcaption>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="absolute top-2 right-2 bg-ink/70 p-2 text-white hover:bg-ink"
              aria-label="Close"
            >
              <Close />
            </button>
          </figure>
        )}
      </dialog>
    </div>
  );
}
