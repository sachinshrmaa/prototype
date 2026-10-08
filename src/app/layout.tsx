import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileActionBar } from "@/components/MobileActionBar";
import { services } from "@/content/services";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BALKAPSO Construction | Structural Engineering & Retrofitting in Sikkim",
    template: "%s | BALKAPSO Construction",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "structural engineer Gangtok",
    "retrofitting Sikkim",
    "seismic retrofitting",
    "structural strengthening",
    "column jacketing",
    "structural audit Sikkim",
    "NDT testing Gangtok",
    "waterproofing Gangtok",
    "seepage repair Sikkim",
    "construction company Sikkim",
    "earthquake resistant design",
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "BALKAPSO Construction | Structural Engineering & Retrofitting in Sikkim",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "ProfessionalService"],
  "@id": absoluteUrl("/#organization"),
  name: site.name,
  alternateName: site.shortName,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: absoluteUrl("/icon.svg"),
  image: absoluteUrl("/opengraph-image"),
  telephone: site.phone,
  email: site.email,
  founder: { "@type": "Person", name: site.founder.name, jobTitle: site.founder.role },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.mapsUrl,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: site.hoursSpec.days,
    opens: site.hoursSpec.opens,
    closes: site.hoursSpec.closes,
  },
  areaServed: [
    { "@type": "State", name: "Sikkim" },
    { "@type": "City", name: "Gangtok" },
    { "@type": "City", name: "Namchi" },
    { "@type": "City", name: "Gyalshing" },
    { "@type": "City", name: "Mangan" },
    { "@type": "City", name: "Darjeeling" },
    { "@type": "City", name: "Kalimpong" },
  ],
  knowsAbout: [
    "Seismic retrofitting",
    "Structural strengthening",
    "Column jacketing",
    "Non-destructive testing",
    "Structural design",
    "Waterproofing",
    "Earthquake-resistant construction",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(`/services/${s.slug}`) },
    })),
  },
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${interTight.variable} ${mono.variable}`}>
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <JsonLd data={organizationLd} />
      </body>
    </html>
  );
}
