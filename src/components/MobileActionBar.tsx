import { site, whatsappLink } from "@/lib/site";
import { Chat, Phone } from "./Icons";

/** Fixed call / WhatsApp bar on small screens, where most local enquiries come from. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-paper pb-[env(safe-area-inset-bottom)] md:hidden">
      <a href={site.phoneHref} className="flex h-14 items-center justify-center gap-2 font-medium">
        <Phone /> Call
      </a>
      <a
        href={whatsappLink("Hello BALKAPSO, I would like to discuss my project.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 items-center justify-center gap-2 bg-accent font-medium text-white"
      >
        <Chat /> WhatsApp
      </a>
    </div>
  );
}
