import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Service Areas: Gangtok, Namchi, Gyalshing, Mangan & All Sikkim",
  description:
    "BALKAPSO provides retrofitting, structural assessment, design, waterproofing and construction across East, South, West and North Sikkim, plus Darjeeling and Kalimpong.",
  alternates: { canonical: "/service-areas" },
};

const areas = [
  {
    region: "Gangtok & East Sikkim",
    places: ["Gangtok", "Tadong", "Ranipool", "Rangpo", "Singtam", "Pakyong", "Rongli"],
    note: "Our home base. Site visits in and around Gangtok can usually be arranged quickly.",
  },
  {
    region: "South Sikkim (Namchi)",
    places: ["Namchi", "Jorethang", "Ravangla", "Melli", "Temi"],
    note: "Homes, hotels and institutional buildings on some of Sikkim's steepest sites.",
  },
  {
    region: "West Sikkim (Gyalshing)",
    places: ["Gyalshing", "Pelling", "Soreng", "Dentam", "Yuksom"],
    note: "Including heritage, religious and hospitality structures.",
  },
  {
    region: "North Sikkim (Mangan)",
    places: ["Mangan", "Chungthang", "Lachung", "Lachen", "Dzongu"],
    note: "Remote, high-seismicity sites where getting the design right matters most.",
  },
  {
    region: "Darjeeling & Kalimpong hills",
    places: ["Kalimpong", "Darjeeling", "Kurseong", "Mirik"],
    note: "Selected projects, depending on scale and scope.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Across Sikkim, from our base in Gangtok."
        lede="We work in all districts of Sikkim and in the neighbouring Darjeeling and Kalimpong hills. All of them share the same challenges: steep slopes, heavy monsoons and Seismic Zone IV."
        crumbs={[{ name: "Service areas", href: "/service-areas" }]}
      />
      <div className="container-page py-8 md:py-12">
        {areas.map((a) => (
          <section key={a.region} className="grid gap-4 border-b border-line py-10 last:border-0 md:grid-cols-12 md:gap-8">
            <h2 className="text-2xl font-semibold md:col-span-4">{a.region}</h2>
            <div className="md:col-span-8">
              <p className="leading-relaxed text-muted">{a.note}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {a.places.map((p) => (
                  <li key={p} className="border border-line-strong px-3 py-1 font-mono text-sm">{p}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
        <section className="mt-10 bg-white p-6 ring-1 ring-line md:p-10">
          <h2 className="text-xl font-semibold">Services available in every area</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="link-arrow">{s.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
