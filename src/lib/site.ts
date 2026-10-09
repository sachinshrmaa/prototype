// Single source of truth for business details.
// Anything marked TODO must be filled in before going live.

export const site = {
  name: "BALKAPSO Construction",
  shortName: "BALKAPSO",
  tagline: "Trust is what we build well.",
  description:
    "BALKAPSO Construction is a Gangtok-based structural engineering and construction firm specialising in seismic retrofitting, structural strengthening, structural design, waterproofing and civil construction across Sikkim.",
  url: "https://balkapso.com",
  locale: "en_IN",

  founder: {
    name: "Solmon Sharma",
    role: "Founder & CEO, Design Head",
  },

  phone: "+91 70762 19337",
  phoneHref: "tel:+917076219337",
  whatsapp: "917076219337", // digits only, with country code
  email: "contact@balkapso.com",

  address: {
    street: "Near Greendale School, Daragaon, Tadong",
    locality: "Gangtok",
    region: "Sikkim",
    district: "East Sikkim",
    postalCode: "737102",
    country: "IN",
  },
  geo: { lat: 27.3132, lng: 88.5997 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Greendale+School+Tadong+Gangtok+Sikkim",

  hours: "Monday to Saturday, 9:00 AM to 6:00 PM",
  hoursSpec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "18:00" },

  social: {
    facebook: "https://www.facebook.com/balkapso/",
    instagram: "https://www.instagram.com/balkapso/",
    youtube: "https://www.youtube.com/@balkapso",
  },

  // TODO: BRDI (BALKAPSO research & development initiative) website URL.
  // "Visit BRDI" links are hidden until this is set.
  brdiUrl: null as string | null,
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
