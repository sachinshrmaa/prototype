export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Used for <title>. Keep under ~60 characters. */
  seoTitle: string;
  /** Used for meta description. Keep under ~155 characters. */
  metaDescription: string;
  /** Short client tagline, used as the service page H1. */
  tagline: string;
  summary: string;
  intro: string[];
  signs: { heading: string; items: string[] };
  scope: { title: string; body: string }[];
  deliverables: string[];
  note?: string;
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "structural-design",
    name: "Structural Design & Consultation",
    seoTitle: "Structural Design & Engineering Consultant in Sikkim",
    metaDescription:
      "Earthquake-resistant structural design for homes, hotels and commercial buildings in Sikkim's hill terrain. IS code compliant drawings, BBS and site support.",
    tagline: "A thoughtful beginning for what you want to build.",
    summary:
      "We translate your plans into structural designs, drawings and details that guide construction, considering the site, its intended use and applicable design requirements.",
    intro: [
      "Building on a hill slope in a high seismic zone is not the same as building on flat ground. Foundations step down the hillside, retaining walls hold back soil and water, and every frame has to be detailed for earthquake forces.",
      "We design structures that are safe, buildable and economical. Our drawings follow Indian Standards, including IS 456, IS 1893 and IS 13920, and are detailed so that site teams can build them correctly. We stay involved during construction to answer questions and review changes.",
    ],
    signs: {
      heading: "Who we design for",
      items: [
        "Families building a new home on a sloping plot",
        "Hotels, homestays and resorts across Sikkim",
        "Commercial complexes, shops and mixed-use buildings",
        "Institutions, schools and public buildings",
        "Owners adding floors or extensions to an existing structure",
      ],
    },
    scope: [
      {
        title: "Structural analysis and design",
        body: "3D analysis of RCC and steel structures for gravity, wind and seismic loads, with member sizing to the relevant IS codes.",
      },
      {
        title: "Foundations on slopes",
        body: "Stepped foundations, retaining walls and drainage designed for hill terrain and local soil conditions.",
      },
      {
        title: "Working drawings and BBS",
        body: "Clear structural drawings, reinforcement details and bar bending schedules that contractors can build from.",
      },
      {
        title: "Coordination with architects",
        body: "Working alongside your architect to keep the design practical without compromising the structure.",
      },
      {
        title: "Construction-stage consultancy",
        body: "Site visits at key stages, such as before concreting, to check reinforcement and answer queries.",
      },
    ],
    deliverables: [
      "Structural design calculations",
      "Foundation, framing and reinforcement drawings",
      "Bar bending schedules and material specifications",
      "Site support and design clarifications during construction",
    ],
    faqs: [
      {
        q: "Do I need a structural engineer for a house?",
        a: "Yes. In a seismic zone like Sikkim, a structural design is the single most important protection for your family and your investment. It also usually saves money by avoiding over-designed members.",
      },
      {
        q: "Can you work with my architect's drawings?",
        a: "Yes. Most of our design work is done alongside an architect. We take the architectural layout and develop the structural system to suit it.",
      },
      {
        q: "Do you visit the site during construction?",
        a: "Yes. We recommend inspections at key stages, particularly before each concrete pour, so reinforcement is checked while it can still be corrected.",
      },
    ],
  },
  {
    slug: "structural-assessment-ndt",
    name: "Structural Assessment & NDT",
    seoTitle: "Structural Audit & NDT Testing in Gangtok, Sikkim",
    metaDescription:
      "Structural audits and non-destructive testing (NDT) for buildings in Sikkim. Rebound hammer, UPV, cover meter and crack mapping with a clear written report.",
    tagline: "Clearer answers about the building you depend on.",
    summary:
      "Through inspection, appropriate testing and analysis, we investigate the building's condition and explain the findings, so you can make informed decisions about repairs, renovation or further evaluation.",
    intro: [
      "Before you repair, extend, buy or strengthen a building, you need to know what condition it is actually in. A structural assessment replaces guesswork with evidence.",
      "We combine a detailed visual inspection with non-destructive testing (NDT) to estimate concrete quality, locate reinforcement and understand the cause of cracks or distress. The result is a written report in plain language that tells you what matters, what does not, and what to do next.",
    ],
    signs: {
      heading: "Signs your building needs an assessment",
      items: [
        "Visible cracks in walls, beams, columns or slabs, especially if they are growing",
        "Uneven floors, sticking doors and windows, or signs of settlement",
        "Water seepage with rust stains or exposed, corroded reinforcement",
        "Vibration or unusual noises when moving around the building",
        "You are buying an older property or planning to add another floor",
      ],
    },
    scope: [
      {
        title: "Visual inspection and crack mapping",
        body: "A documented walk-through of the structure, recording cracks, deflections, dampness and alterations, with each defect located on a plan.",
      },
      {
        title: "Rebound hammer and UPV testing",
        body: "Non-destructive tests that estimate concrete strength and uniformity without damaging the structure.",
      },
      {
        title: "Cover meter and rebar scanning",
        body: "Locating reinforcement and measuring concrete cover to check for corrosion risk and compare against drawings.",
      },
      {
        title: "Core sampling where needed",
        body: "Where NDT results need confirmation, we coordinate core extraction and laboratory testing.",
      },
      {
        title: "Load and usage review",
        body: "Checking whether the structure is suitable for its current or proposed use, including additional floors.",
      },
    ],
    deliverables: [
      "Structural assessment report with photographs and crack maps",
      "NDT results with interpretation in plain language",
      "Prioritised recommendations: urgent, necessary and advisable",
      "Indicative scope for repair or retrofitting, if required",
    ],
    note: "If you believe a structure is in immediate danger of collapse, move everyone away from it and contact local emergency authorities first. Then call us.",
    faqs: [
      {
        q: "What is NDT testing?",
        a: "Non-destructive testing uses instruments such as the rebound hammer and ultrasonic pulse velocity (UPV) tester to evaluate concrete and reinforcement without breaking the structure. It gives evidence about quality and condition that visual inspection alone cannot.",
      },
      {
        q: "How long does an assessment take?",
        a: "Site inspection for a typical house takes a few hours. The report usually follows within a week. Larger buildings or projects needing laboratory tests take longer.",
      },
      {
        q: "Can you tell if my building is safe from photos?",
        a: "Photos help us understand the issue and plan the visit, but a safety judgement needs an on-site inspection. Send us photos on WhatsApp and we will advise on next steps.",
      },
    ],
  },
  {
    slug: "retrofitting-structural-strengthening",
    name: "Retrofitting & Structural Strengthening",
    seoTitle: "Seismic Retrofitting & Structural Strengthening in Sikkim",
    metaDescription:
      "Seismic retrofitting and strengthening of homes, monasteries, commercial buildings and bridges in Sikkim. Column jacketing, NDT-led assessment, IS code compliant.",
    tagline: "Helping existing structures serve their next chapter.",
    summary:
      "We assess the need for strengthening and design interventions suited to the building's condition, structural demands and future use.",
    intro: [
      "Sikkim lies in Seismic Zone IV under IS 1893:2016. Many buildings in the state were built before modern earthquake-resistant detailing was common, and many more have been extended upward or altered over the years. Retrofitting is how we bring those structures up to a safer standard.",
      "Our approach starts with understanding the building: how it was built, what has changed, and where it is weak. Only then do we design an intervention, whether that is jacketing a few columns or strengthening an entire frame. We have retrofitted structures ranging from family homes to a monastery more than a hundred years old.",
    ],
    signs: {
      heading: "When to consider retrofitting",
      items: [
        "The building was constructed without a structural engineer or before current seismic codes",
        "You plan to add a floor, change how the building is used, or add heavy equipment or water tanks",
        "Columns, beams or slabs show cracking, spalling or exposed, rusting steel",
        "The building was damaged in an earthquake, landslide or by long-term water seepage",
        "It is a heritage, religious or community structure that must be preserved rather than rebuilt",
      ],
    },
    scope: [
      {
        title: "Seismic evaluation",
        body: "A vulnerability assessment of the existing structure against IS 1893 and IS 15988, identifying the weak storeys, members and connections that would govern behaviour in an earthquake.",
      },
      {
        title: "Column and beam jacketing",
        body: "Reinforced concrete or steel jacketing to increase the strength, stiffness and ductility of under-designed or damaged members.",
      },
      {
        title: "Foundation strengthening",
        body: "Enlarging or underpinning footings where settlement, added loads or slope conditions demand more capacity.",
      },
      {
        title: "Frame and connection upgrades",
        body: "Adding shear walls, bracing, ties and improved beam-column connections to improve the overall load path.",
      },
      {
        title: "Heritage and masonry retrofitting",
        body: "Sensitive strengthening for older load-bearing and heritage structures, keeping the original character while improving safety.",
      },
      {
        title: "Bridge strengthening",
        body: "Assessment and strengthening of small and medium bridges and culverts showing distress or carrying increased traffic.",
      },
    ],
    deliverables: [
      "Condition and vulnerability assessment report",
      "Retrofit design with calculations and drawings",
      "Method statement and work sequence, including temporary shoring",
      "Execution by our own site team, with supervision and quality records",
    ],
    note: "Retrofitting is never an off-the-shelf package. The method, extent and sequence always follow a proper assessment of your specific building.",
    faqs: [
      {
        q: "Can my existing building be made earthquake resistant?",
        a: "In most cases, yes. Most reinforced concrete and many masonry buildings can be significantly improved through retrofitting. The right approach depends on the building's current condition, which is why every project begins with an assessment.",
      },
      {
        q: "Is retrofitting cheaper than rebuilding?",
        a: "Usually it is a fraction of the cost of demolition and reconstruction, and you avoid the time, permits and disruption of a full rebuild. Where retrofitting is not economical, our assessment will tell you so honestly.",
      },
      {
        q: "How long does a retrofitting project take?",
        a: "A small residential strengthening job can take a few weeks. Larger commercial or heritage structures can take several months, depending on the extent of work and site access.",
      },
      {
        q: "Can we keep living in the building during the work?",
        a: "Often, yes, with the work phased so that affected areas are vacated in turn. We plan the sequence and temporary supports so the structure stays safe throughout.",
      },
    ],
  },
  {
    slug: "waterproofing-seepage",
    name: "Waterproofing & Seepage Solutions",
    seoTitle: "Waterproofing & Seepage Repair in Gangtok, Sikkim",
    metaDescription:
      "Fix roof leaks, wall dampness and basement seepage in Sikkim. We find the source of water ingress and fix it to protect the structure, not just the paint.",
    tagline: "A drier space starts with understanding the water.",
    summary:
      "We investigate leaks and dampness, identify likely entry paths and plan treatments suited to the source and the affected surfaces.",
    intro: [
      "Sikkim's heavy monsoon and hillside groundwater make seepage one of the most common problems in local buildings. Left untreated, water does far more than spoil paint: it reaches the steel inside the concrete, which rusts, expands and cracks the structure from within.",
      "We treat waterproofing as an engineering problem. First we find where the water is coming from and how it travels. Then we select a treatment suited to that location, whether a roof, a retaining wall, a bathroom or a basement, and repair any damage it has already caused.",
    ],
    signs: {
      heading: "Common problems we fix",
      items: [
        "Roof and terrace leaks during the monsoon",
        "Damp patches, peeling paint and efflorescence on walls",
        "Seepage through retaining walls and basement walls on hill slopes",
        "Leaking bathrooms, water tanks and sunken slabs",
        "Rust stains or spalling concrete caused by long-term water ingress",
      ],
    },
    scope: [
      {
        title: "Leak investigation",
        body: "Tracing the source and path of water, including moisture readings and checks on drainage, joints and cracks.",
      },
      {
        title: "Roof and terrace waterproofing",
        body: "Membrane, coating or cementitious systems chosen for exposure, slope and foot traffic.",
      },
      {
        title: "Crack injection and sealing",
        body: "Epoxy or polyurethane injection to seal active leaks and structural cracks.",
      },
      {
        title: "Basement and retaining wall treatment",
        body: "Negative and positive side waterproofing, along with drainage behind walls to relieve water pressure.",
      },
      {
        title: "Corrosion repair",
        body: "Removing damaged concrete, treating corroded reinforcement and restoring the section with repair mortars.",
      },
    ],
    deliverables: [
      "Diagnosis of the seepage source",
      "Recommended treatment with a clear scope",
      "Execution by a trained team using specified materials",
      "Post-treatment checks through the following monsoon",
    ],
    faqs: [
      {
        q: "Why does seepage keep coming back after repair?",
        a: "Usually because the visible damp patch was treated, not the source. Water can travel a long way inside walls and slabs before it appears. We investigate the path before choosing a treatment.",
      },
      {
        q: "Is seepage a structural problem?",
        a: "It can become one. Long-term moisture corrodes reinforcement, which weakens beams, slabs and columns. Treating seepage early is far cheaper than repairing structural damage later.",
      },
      {
        q: "When is the best time to waterproof?",
        a: "Ideally in the dry season, before the monsoon. Surfaces need to be dry for most systems to bond properly. Investigation, however, is often easiest while leaks are active.",
      },
    ],
  },
  {
    slug: "civil-construction",
    name: "Civil Construction",
    seoTitle: "Engineering-Led Civil Construction in Sikkim",
    metaDescription:
      "Residential and commercial construction in Sikkim, built by engineers. Foundations, RCC frames, retaining walls and renovations with quality control at every stage.",
    tagline: "Care in the details. Commitment on site.",
    summary:
      "We bring planning, engineering supervision and workmanship together to turn drawings into completed spaces.",
    intro: [
      "Many structural problems we are asked to fix come down to poor construction: weak concrete, wrong reinforcement, inadequate curing. As engineers who spend much of our time repairing such mistakes, we build to avoid them.",
      "We take on new construction, extensions and renovations where we can control quality from foundation to finish. Our site engineers check reinforcement before every pour, monitor concrete quality, and keep you informed at each stage.",
    ],
    signs: {
      heading: "What we build",
      items: [
        "Individual homes and multi-storey residential buildings",
        "Hotels, homestays and commercial buildings",
        "Retaining walls, drainage and slope protection works",
        "Extensions, additional floors and renovations",
        "Institutional and public works",
      ],
    },
    scope: [
      {
        title: "Foundations and substructure",
        body: "Excavation, stepped foundations and retaining structures suited to hill sites.",
      },
      {
        title: "RCC frame construction",
        body: "Columns, beams and slabs built to drawings, with reinforcement inspection before every pour.",
      },
      {
        title: "Masonry and finishes",
        body: "Walls, plastering and protective finishes, including waterproofing built in from the start.",
      },
      {
        title: "Site drainage and slope works",
        body: "Surface drains, retaining walls and slope protection to keep water away from the structure.",
      },
      {
        title: "Renovation and extension",
        body: "Alterations and additions to existing buildings, checked structurally before work begins.",
      },
    ],
    deliverables: [
      "Clear scope, schedule and stage-wise estimate",
      "Engineer-supervised execution",
      "Material testing and quality records",
      "Regular progress updates for the owner",
    ],
    faqs: [
      {
        q: "Do you handle both design and construction?",
        a: "Yes. We can design and build, which keeps responsibility in one place. We also build to designs prepared by other engineers and architects.",
      },
      {
        q: "How do you control quality on site?",
        a: "Through engineer inspections at each stage, especially reinforcement checks before concreting, concrete cube testing, proper curing and documented records.",
      },
      {
        q: "Do you work outside Gangtok?",
        a: "Yes. We work across East, West, North and South Sikkim, and can take on projects in the Darjeeling and Kalimpong hills depending on scale.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
