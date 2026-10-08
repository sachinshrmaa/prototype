import type { Faq } from "./services";

export const faqGroups: { title: string; items: Faq[] }[] = [
  {
    title: "About BALKAPSO",
    items: [
      {
        q: "What makes BALKAPSO different from other construction companies?",
        a: "We are engineers first. We specialise in structural strengthening, retrofitting, waterproofing and earthquake-resistant construction, and we base our decisions on non-destructive testing, structural evaluation and Indian Standard (IS) codes rather than guesswork.",
      },
      {
        q: "Do you only do retrofitting, or do you also design new buildings?",
        a: "Both. We retrofit and repair existing structures, and we design and build new ones. Whether you need an earthquake-resistant new home or want to strengthen an existing building, we can help.",
      },
      {
        q: "Where do you work?",
        a: "We are based in Tadong, Gangtok, and work across all districts of Sikkim. We can also take on projects in the Darjeeling and Kalimpong hills depending on scale.",
      },
    ],
  },
  {
    title: "Building safety",
    items: [
      {
        q: "How do I know if my building is at risk?",
        a: "Warning signs include visible cracks in walls, beams or slabs; uneven settlement or sinking floors; water seepage with rust stains or exposed reinforcement; and vibration or unusual noises when moving around. If you notice any of these, a structural assessment is the right next step.",
      },
      {
        q: "Is Sikkim really at high earthquake risk?",
        a: "Yes. Sikkim is in Seismic Zone IV under IS 1893:2016, which means a high risk of damaging earthquakes. The 2011 Sikkim earthquake is a reminder that this is a real, present risk, not a distant one.",
      },
      {
        q: "Are all cracks dangerous?",
        a: "No. Many fine cracks in plaster are cosmetic and caused by shrinkage or temperature. Cracks that are wide, diagonal, growing, or appear in beams and columns need professional attention. Our article on reading cracks explains the difference.",
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        q: "What should I send for a first discussion?",
        a: "Your location, the type and approximate age of the building, photos or short videos of the concern, any drawings or previous reports you have, and a short description of what you want to achieve. WhatsApp is usually the quickest way.",
      },
      {
        q: "How much does a retrofitting project cost?",
        a: "It depends on the building, its condition and the extent of strengthening needed. We provide a clear estimate after the assessment, so you know what you are paying for before work begins.",
      },
      {
        q: "How long does retrofitting take?",
        a: "A small residential strengthening project may take a few weeks. Complex retrofitting of commercial or heritage structures can take several months.",
      },
      {
        q: "Can you guarantee a building will never crack?",
        a: "No responsible engineer can promise that. Good design and strengthening greatly reduce risk and improve performance, but every structure remains subject to ground movement, weather, ageing and maintenance.",
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);
