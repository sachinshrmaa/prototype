// Project records. Keep claims factual; add client names only with permission.
export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  summary: string;
  challenge: string;
  work: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "nyulakahang-gumpa-retrofitting",
    title: "Retrofitting of Nyulakahang Gumpa",
    category: "Heritage retrofitting",
    location: "Gangtok, East Sikkim",
    year: "2025",
    summary:
      "Structural retrofitting of a monastery more than 100 years old, strengthening its columns while preserving its character.",
    challenge:
      "Like many heritage structures in Sikkim, the gumpa was built long before modern seismic codes, and its columns had to carry loads well beyond what they were originally detailed for. Demolition was out of the question: the building had to be preserved and kept in use as a place of worship.",
    work: [
      "Assessment of the existing structure and its load path",
      "Retrofit design for the critical columns",
      "Reinforced concrete jacketing of columns to increase strength and ductility",
      "Phased execution so the structure remained supported throughout",
    ],
    outcome:
      "The strengthened columns give the gumpa greater capacity under both everyday and earthquake loads, extending the life of an important cultural landmark.",
  },
  {
    slug: "structural-design-construction-consultancy",
    title: "Structural Design & Construction Consultancy",
    category: "Structural design",
    location: "Sikkim",
    year: "2025",
    summary:
      "Earthquake-resistant structural design with construction-stage consultancy for a new building on a hill site.",
    challenge:
      "The client needed a structure that was safe for Seismic Zone IV, suited to a sloping plot, and economical to build, with engineering support continuing on site rather than ending at the drawings.",
    work: [
      "Structural analysis and design to IS 456, IS 1893 and IS 13920",
      "Foundation design suited to the site's slope",
      "Detailed working drawings and reinforcement schedules",
      "Site inspections at key construction stages",
    ],
    outcome:
      "A buildable, code-compliant design, with reinforcement checked on site before concreting so the building was built as designed.",
  },
  {
    slug: "seepage-waterproofing",
    title: "Seepage Diagnosis & Waterproofing",
    category: "Waterproofing",
    location: "Sikkim",
    year: "2025",
    summary:
      "Investigation and treatment of persistent water seepage, addressing the source rather than the symptoms.",
    challenge:
      "Recurring dampness had survived previous surface repairs. Continued moisture risked corroding the reinforcement and damaging the structure itself.",
    work: [
      "Investigation to trace the source and path of the water",
      "Selection of a waterproofing system suited to the location",
      "Crack sealing and surface preparation",
      "Application of the waterproofing treatment",
    ],
    outcome:
      "The source of seepage was treated, protecting both the finishes and the structure beneath them.",
  },
];
