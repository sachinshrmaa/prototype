import Link from "next/link";
import { services } from "@/content/services";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink pb-20 text-white/70 md:pb-0">
      <div className="container-page grid gap-12 border-t border-white/10 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-xs leading-relaxed">
            Structural engineering, retrofitting, waterproofing and construction for Sikkim. {site.tagline}
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-mono text-xs uppercase tracking-widest text-white/40">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-mono text-xs uppercase tracking-widest text-white/40">Company</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/about", "About us"],
              ["/projects", "Projects"],
              ["/process", "How we work"],
              ["/service-areas", "Service areas"],
              ["/insights", "Insights"],
              ["/faq", "FAQ"],
              ["/careers", "Careers"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">{label}</Link>
              </li>
            ))}
            {site.brdiUrl && (
              <li>
                <a href={site.brdiUrl} className="hover:text-white" target="_blank" rel="noopener noreferrer">BRDI</a>
              </li>
            )}
          </ul>
        </div>

        <address className="not-italic md:col-span-3">
          <h2 className="font-mono text-xs uppercase tracking-widest text-white/40">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed">
            <li>
              {site.address.street},<br />
              {site.address.locality}, {site.address.district},<br />
              {site.address.region} {site.address.postalCode}
            </li>
            <li><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li>{site.hours}</li>
          </ul>
          <ul className="mt-6 flex gap-5 text-sm">
            <li><a href={site.social.facebook} className="hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href={site.social.instagram} className="hover:text-white" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={site.social.youtube} className="hover:text-white" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </address>
      </div>

      <div className="container-page flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row md:justify-between">
        <p>© {year} {site.name}. All rights reserved.</p>
        <ul className="flex gap-5">
          <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
          <li><Link href="/terms" className="hover:text-white">Terms of use</Link></li>
        </ul>
      </div>
    </footer>
  );
}
