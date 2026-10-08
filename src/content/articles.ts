export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  published: string; // ISO date
  readingMinutes: number;
  relatedService: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "earthquake-safety-sikkim-seismic-zone-iv",
    title: "Is your building ready for an earthquake? What Seismic Zone IV means for Sikkim",
    description:
      "Sikkim is in Seismic Zone IV. Here is what that means for homeowners, why older buildings are vulnerable, and what you can do about it.",
    published: "2026-09-15",
    readingMinutes: 5,
    relatedService: "retrofitting-structural-strengthening",
    body: [
      {
        type: "p",
        text: "India's seismic code, IS 1893:2016, divides the country into zones based on expected earthquake intensity. Sikkim falls in Zone IV, the second-highest category. In practical terms, buildings here must be designed and detailed to withstand strong shaking, and the 2011 Sikkim earthquake showed what happens when they are not.",
      },
      { type: "h2", text: "Why many buildings are vulnerable" },
      {
        type: "p",
        text: "A large share of buildings in Sikkim were built without a structural engineer, or before earthquake-resistant detailing under IS 13920 became common practice. Others were sound when built, but have since had extra floors added without checking whether the columns and foundations could carry them.",
      },
      {
        type: "ul",
        items: [
          "Columns that are too small or have too little reinforcement",
          "Widely spaced stirrups (ties), which let columns fail suddenly in shear",
          "Open ground floors used for parking or shops, creating a weak storey",
          "Extra floors added on foundations designed for fewer",
          "Construction on slopes without proper stepped foundations or retaining walls",
        ],
      },
      { type: "h2", text: "What retrofitting does" },
      {
        type: "p",
        text: "Retrofitting strengthens an existing building so it behaves better in an earthquake. Common methods include jacketing columns and beams with new reinforced concrete or steel, adding shear walls, strengthening foundations and improving connections. The goal is a building that, even if damaged in a strong earthquake, does not collapse.",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "p",
        text: "The first step is always an assessment. An engineer inspects the building, reviews any drawings, and uses non-destructive testing to estimate concrete quality and locate reinforcement. From that, you get a clear picture of whether your building needs strengthening, how much, and what it will involve.",
      },
    ],
  },
  {
    slug: "cracks-in-walls-when-to-worry",
    title: "Cracks in walls: which ones are harmless and which ones need an engineer",
    description:
      "Not every crack is a structural problem. A practical guide to reading cracks in Sikkim homes, and knowing when to call a structural engineer.",
    published: "2026-08-20",
    readingMinutes: 4,
    relatedService: "structural-assessment-ndt",
    body: [
      {
        type: "p",
        text: "Almost every building develops cracks. Most are harmless, caused by plaster shrinking as it dries or by daily temperature changes. Some, however, are the first visible sign of a structural problem. Knowing the difference can save you both money and worry.",
      },
      { type: "h2", text: "Usually not serious" },
      {
        type: "ul",
        items: [
          "Fine, hairline cracks in plaster, often in a random or map-like pattern",
          "Cracks along the joint between a wall and a column or beam, where different materials meet",
          "Cracks that appeared once and have not changed in width or length",
        ],
      },
      { type: "h2", text: "Get them checked" },
      {
        type: "ul",
        items: [
          "Diagonal cracks running from the corners of doors and windows",
          "Cracks wider than about 3 mm, or ones you can fit a coin into",
          "Cracks that are growing over weeks or months",
          "Any crack in a column, or across the underside of a beam or slab",
          "Cracks with rust stains, which suggest corroding reinforcement",
          "Cracks together with sticking doors, sloping floors or gaps at skirting",
        ],
      },
      { type: "h2", text: "A simple way to monitor a crack" },
      {
        type: "p",
        text: "Mark both ends of the crack with a pencil and write the date beside it. Photograph it next to a ruler. Check again after a few weeks. If it has grown longer or wider, it is active and should be inspected by a structural engineer.",
      },
      { type: "h2", text: "What an assessment involves" },
      {
        type: "p",
        text: "An engineer maps the cracks, looks at their pattern and location, and relates them to how the building carries its loads. Non-destructive tests may be used to check the concrete and reinforcement. The cause matters, because the right repair for a settlement crack is very different from the right repair for a shrinkage crack.",
      },
    ],
  },
  {
    slug: "why-seepage-keeps-coming-back",
    title: "Why seepage keeps coming back, and how to fix it properly",
    description:
      "Damp walls and roof leaks are common in Sikkim's monsoon. Here is why surface repairs fail, and what a lasting waterproofing fix involves.",
    published: "2026-07-10",
    readingMinutes: 4,
    relatedService: "waterproofing-seepage",
    body: [
      {
        type: "p",
        text: "With heavy monsoon rain and buildings set into hillsides, seepage is one of the most common complaints we hear in Sikkim. Many owners have repainted or applied a coating more than once, only to see the damp patch return the next season.",
      },
      { type: "h2", text: "The patch is not the problem" },
      {
        type: "p",
        text: "Water rarely appears where it enters. It can travel along reinforcement, through cracks and along construction joints before showing up as a damp patch somewhere else. Treating the visible patch hides the symptom for a while, but the water keeps coming in.",
      },
      { type: "h2", text: "Common sources in hill buildings" },
      {
        type: "ul",
        items: [
          "Flat roofs and terraces with poor slope, blocked outlets or cracked screeds",
          "Retaining walls and basement walls with no drainage behind them",
          "Bathroom and sunken slab leaks from failed joints or pipe penetrations",
          "Cracks in external walls that open up under wind-driven rain",
          "Overhead tanks and their connections",
        ],
      },
      { type: "h2", text: "Why it matters structurally" },
      {
        type: "p",
        text: "Persistent moisture reaches the steel reinforcement inside concrete. As steel rusts it expands, cracking and pushing off the concrete cover. Over time this reduces the strength of beams, slabs and columns. A seepage problem left long enough becomes a structural repair.",
      },
      { type: "h2", text: "A lasting fix" },
      {
        type: "p",
        text: "A proper fix starts by tracing the source and path of the water. The treatment is then chosen for that location: a membrane for a roof, injection for active cracks, drainage and a suitable system for a retaining wall. Any corroded reinforcement is treated and the concrete restored. Done in the dry season, before the monsoon, the result should last.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
