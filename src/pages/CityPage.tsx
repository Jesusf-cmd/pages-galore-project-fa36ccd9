import CityPageTemplate from "@/components/CityPageTemplate";

const BASE = "https://fdzconstruction.com";

// slug -> live route path (used for canonical + og:url)
const ROUTE_BY_SLUG: Record<string, string> = {
  "oklahoma-city": "/oklahoma-city-concrete",
  edmond: "/edmond-concrete",
  norman: "/norman-ok-concrete",
  yukon: "/yukon-oklahoma-concrete",
  mustang: "/mustang-oklahoma-concrete",
  moore: "/moore-oklahoma-concrete",
  "midwest-city": "/midwest-city-oklahoma-concrete",
  "del-city": "/del-city-oklahoma-concrete",
};

interface CityData {
  city: string;
  county: string;
  tier: "priority" | "standard";
  metaDescription: string;
  heroBlurb: string;
  intro: string[];
  localTerrainNote: string;
  driveTimeNote: string;
  neighborhoods?: string[];
  linkedServices: { label: string; to: string; blurb: string }[];
  faq: { question: string; answer: string }[];
}

const SVC = {
  driveways: { label: "Concrete driveways", to: "/driveways-oklahoma-city", blurb: "Tear-out and replacement or new pours — reinforced, properly based, and graded to drain." },
  patios: { label: "Patios, slabs & stamped", to: "/patios-oklahoma-city", blurb: "Patios, garage and shop slabs, and stamped decorative finishes built for OKC clay." },
  foundations: { label: "Concrete foundations", to: "/foundations-oklahoma-city", blurb: "Slab-on-grade, stem walls, footings, and pads engineered for expansive soil." },
  retaining: { label: "Retaining walls", to: "/retaining-walls-oklahoma-city", blurb: "Poured concrete, block, and segmental walls with proper footings and drainage." },
  sidewalks: { label: "Sidewalks, curb & gutter", to: "/sidewalks-oklahoma-city", blurb: "New walks, city right-of-way replacement, ADA ramps, and city-spec curb work." },
  commercial: { label: "Commercial concrete", to: "/commercial-concrete-oklahoma-city", blurb: "Warehouse floors, retail pads, equipment slabs, and site flatwork for the metro." },
};

const cityData: Record<string, CityData> = {
  "oklahoma-city": {
    city: "Oklahoma City",
    county: "Oklahoma County",
    tier: "priority",
    metaDescription:
      "Concrete contractor in Oklahoma City, OK — FDZ Construction LLC, based in south OKC. Driveways, patios, slabs & foundations. Licensed, bonded & insured. Free estimate: (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, and foundations in <strong>Oklahoma City, Oklahoma</strong> — from our south OKC shop. Licensed, bonded & insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "FDZ Construction LLC is based in south Oklahoma City, at 7004 S Indiana Ave — so OKC itself is the area we work most. We pour driveways, patios, slabs, foundations, and commercial concrete across the city, with the fastest response of anywhere we serve.",
    ],
    localTerrainNote:
      "Oklahoma City is too large for one soil story — conditions shift from one part of the city to another — but it broadly shares the metro's Permian-age clay and shale base. The terrain is mostly flat, and the North Canadian River corridor runs through the city, so drainage planning matters most on low-lying lots near the river and its tributaries. Because conditions vary block to block, we evaluate soil and grading on a per-site basis rather than assuming one answer fits the whole city.",
    driveTimeNote: "we're based right here in south OKC, so Oklahoma City gets the fastest response of any area we serve.",
    neighborhoods: ["Nichols Hills"],
    linkedServices: [SVC.driveways, SVC.foundations],
    faq: [
      {
        question: "Do you work throughout all of Oklahoma City?",
        answer:
          "Yes, with a particular concentration in south OKC near our shop. Because the city is large and conditions vary block to block, we evaluate soil and grading on a per-site basis rather than assuming one answer fits the whole city.",
      },
      {
        question: "How much does concrete cost in Oklahoma City?",
        answer:
          "Standard driveways and slabs generally run $6–$10 per square foot and foundation work $9–$14, depending on thickness, reinforcement, and site conditions. We give an exact price after an on-site look — no phone quotes.",
      },
      {
        question: "Why does base prep matter so much in Oklahoma City?",
        answer:
          "OKC sits on expansive Permian clay that swells when wet and shrinks in drought. Without a properly excavated, compacted aggregate base and adequate reinforcement, concrete is far more likely to crack and move over time.",
      },
    ],
  },
  edmond: {
    city: "Edmond",
    county: "Oklahoma County",
    tier: "priority",
    metaDescription:
      "Concrete contractor in Edmond, OK — driveways, patios, slabs, foundations & retaining walls across Edmond and Oklahoma County. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, foundations, and retaining walls in <strong>Edmond, Oklahoma</strong>. Licensed, bonded & insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "Edmond is one of the areas we work most often outside our south OKC home base. We pour driveways, patios, slabs, foundations, and retaining walls for Edmond homeowners and builders across Oklahoma County.",
    ],
    localTerrainNote:
      "Edmond sits on the northern part of the Garber-Wellington aquifer, where the underlying formations carry more sandstone than the rest of the metro. In practice, soil here can shift between sandy and clay-heavy across a single lot, and the terrain has more rolling grade than much of the flat OKC metro. That combination makes grading and drainage planning a bigger factor here than on flatter sites — so we evaluate each lot rather than applying a one-size approach.",
    driveTimeNote: "Edmond is about 30–40 minutes north of the shop, across the metro — still one of the areas we serve most regularly.",
    linkedServices: [SVC.foundations, SVC.retaining],
    faq: [
      {
        question: "Does Edmond's terrain affect foundation or retaining wall work?",
        answer:
          "Yes — more than on flatter parts of the metro. The mix of sandy and clay soil and the rolling grade mean we evaluate each site and plan grading and drainage accordingly, rather than applying a one-size approach.",
      },
      {
        question: "How much does concrete cost in Edmond?",
        answer:
          "Edmond pricing follows our OKC metro rates: roughly $6–$10 per square foot for standard driveways and slabs and $9–$14 for foundation work, with an exact price after an on-site estimate.",
      },
      {
        question: "Do you coordinate with builders on new construction in Edmond?",
        answer:
          "Yes — we handle foundation pours, driveways, and flatwork for new builds and coordinate scheduling with builders and inspectors.",
      },
    ],
  },
  yukon: {
    city: "Yukon",
    county: "Canadian County",
    tier: "priority",
    metaDescription:
      "Concrete contractor in Yukon, OK — driveways, slabs, foundations & commercial concrete in Canadian County. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, slabs, foundations, and commercial work in <strong>Yukon, Oklahoma</strong>. Licensed, bonded & insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "Yukon, on the west side of the metro in Canadian County, is one of the areas we work frequently. We handle driveways, patios, slabs, foundations, and commercial concrete for Yukon homeowners and businesses.",
    ],
    localTerrainNote:
      "Yukon has flatter terrain than Edmond, on the same expansive clay base shared across the region. A lot of the work here is in newer subdivisions built on graded former agricultural land — and on those sites, the quality of the fill and the compaction done during the original grading matters as much as the native soil itself. We check compaction and drainage on these lots specifically.",
    driveTimeNote: "Yukon is about 20–25 minutes west of the shop.",
    linkedServices: [SVC.driveways, SVC.commercial],
    faq: [
      {
        question: "Is new-construction concrete different in growing areas like Yukon?",
        answer:
          "The base-prep considerations differ slightly, since lots are often on graded fill rather than undisturbed native soil. We check compaction and drainage on these sites specifically before we pour.",
      },
      {
        question: "How much does concrete cost in Yukon?",
        answer:
          "Yukon pricing matches our OKC metro rates — roughly $6–$10 per square foot for standard driveways and slabs — with an exact price after a free on-site estimate.",
      },
    ],
  },
  norman: {
    city: "Norman",
    county: "Cleveland County",
    tier: "standard",
    metaDescription:
      "Concrete contractor in Norman, OK serving Cleveland County. Driveways, patios, slabs & foundations built for Norman's soil and drainage. FDZ Construction LLC. (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, and foundations in <strong>Norman, Oklahoma</strong>. Licensed, bonded & insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "FDZ Construction serves Norman and Cleveland County with driveways, patios, slabs, foundations, and retaining walls — the same crew and standards we bring across the OKC metro.",
    ],
    localTerrainNote:
      "Norman's position along the Canadian River means some lots sit on sandier, river-influenced soil that can transition to denser clay within a short distance on the same property. That's a different base-prep call than the more uniform clay sites elsewhere in the metro, so we assess the soil on each lot before we pour.",
    driveTimeNote: "Norman is about 20–25 minutes south of the shop.",
    linkedServices: [SVC.driveways, SVC.foundations],
    faq: [
      {
        question: "What's different about pouring concrete in Norman?",
        answer:
          "Norman's spot along the Canadian River means some lots have sandier, river-influenced soil that can change to denser clay across a short distance. We evaluate the soil and adjust base prep for each site rather than assuming one approach.",
      },
      {
        question: "How much does concrete cost in Norman?",
        answer:
          "Norman pricing follows our OKC metro rates — roughly $6–$10 per square foot for standard work and $9–$14 for foundations — with an exact price after a free on-site estimate.",
      },
    ],
  },
  moore: {
    city: "Moore",
    county: "Cleveland County",
    tier: "standard",
    metaDescription:
      "Concrete contractor in Moore, OK — driveways, patios, slabs & foundations in Cleveland County. Drainage-conscious flatwork. FDZ Construction LLC. Free estimate: (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, and foundations in <strong>Moore, Oklahoma</strong>. Licensed, bonded & insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "Moore, just south of Oklahoma City in Cleveland County, is one of the closest areas to our shop. We pour driveways, patios, slabs, foundations, and sidewalks for Moore homeowners.",
    ],
    localTerrainNote:
      "Moore sits on flat terrain over the same expansive clay base found across the metro, with limited natural runoff in low-lying areas. That makes proper slope-to-drain detailing matter more here than on higher ground — we grade every slab and driveway to move water away from the structure.",
    driveTimeNote: "Moore is among the closest areas we serve, just south of the shop.",
    linkedServices: [SVC.driveways, SVC.foundations],
    faq: [
      {
        question: "Why does drainage matter so much in Moore?",
        answer:
          "Moore's flat terrain and clay soil mean water doesn't drain away on its own in low-lying areas. We grade slabs and driveways with a slope that moves water away from the structure, which is critical to preventing pooling and long-term concrete and foundation problems.",
      },
      {
        question: "How much does concrete cost in Moore?",
        answer:
          "Moore pricing follows our OKC metro rates — roughly $6–$10 per square foot for driveways and slabs and $9–$14 for foundations — with an exact price after a free on-site estimate.",
      },
    ],
  },
  mustang: {
    city: "Mustang",
    county: "Canadian County",
    tier: "standard",
    metaDescription:
      "Concrete contractor in Mustang, OK — driveways, patios, slabs & foundations for homeowners and new-construction subdivisions. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, and foundations in <strong>Mustang, Oklahoma</strong>. Licensed, bonded & insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "Mustang, on the west side of the metro in Canadian County, is an area we serve with driveways, patios, slabs, and foundations for homeowners and new-construction subdivisions.",
    ],
    localTerrainNote:
      "Mustang shares Yukon's flatter west-metro terrain and the region's expansive clay base. Like Yukon, a lot of the work here is on newer subdivisions built on graded former agricultural land, where fill quality and compaction matter as much as the native soil — so we check both before we pour.",
    driveTimeNote: "Mustang is about 20–25 minutes west of the shop.",
    linkedServices: [SVC.driveways, SVC.foundations],
    faq: [
      {
        question: "Do you work on new-construction lots in Mustang?",
        answer:
          "Yes. Many Mustang lots sit on graded fill rather than undisturbed native soil, so we check compaction and drainage on these sites specifically and coordinate with builders on scheduling.",
      },
      {
        question: "How much does concrete cost in Mustang?",
        answer:
          "Mustang pricing follows our OKC metro rates — roughly $6–$10 per square foot for standard work — with an exact price after a free on-site estimate.",
      },
    ],
  },
  "midwest-city": {
    city: "Midwest City",
    county: "Oklahoma County",
    tier: "standard",
    metaDescription:
      "Concrete contractor in Midwest City, OK — driveway replacement, patio slabs & sidewalk work in eastern Oklahoma County. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Driveway replacement, patio slabs, sidewalks, and foundation work in <strong>Midwest City, Oklahoma</strong>. Licensed, bonded & insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "FDZ Construction serves Midwest City in eastern Oklahoma County with driveway replacement, patio slabs, sidewalk work, and foundation work.",
    ],
    localTerrainNote:
      "Midwest City sits along Crutcho Creek and Cherry Creek, and the area sees increased flood risk along those creeks during sustained rain, when backwater from the North Canadian River slows drainage — per the city's own floodplain information. Otherwise it shares the metro's flat, expansive clay base. For any work near those drainage corridors, grading and drainage are the priority.",
    driveTimeNote: "Midwest City is about 15–20 minutes east of the shop.",
    linkedServices: [SVC.driveways, SVC.sidewalks],
    faq: [
      {
        question: "Does flooding near Crutcho Creek or Cherry Creek affect concrete work?",
        answer:
          "It can. The city's floodplain information notes that flood risk along Crutcho Creek and Cherry Creek rises during sustained rain due to backwater from the North Canadian River. For work near those corridors we pay extra attention to grading and drainage so water moves away from the slab.",
      },
      {
        question: "How much does concrete cost in Midwest City?",
        answer:
          "Midwest City pricing follows our OKC metro rates — roughly $6–$10 per square foot for driveways and slabs, with tear-out of existing concrete adding to the cost — and an exact price after a free on-site estimate.",
      },
    ],
  },
  "del-city": {
    city: "Del City",
    county: "Oklahoma County",
    tier: "standard",
    metaDescription:
      "Concrete contractor in Del City, OK — driveway replacement, patio slabs, sidewalks & retaining walls. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Driveway replacement, patio slabs, sidewalks, and retaining walls in <strong>Del City, Oklahoma</strong>. Licensed, bonded & insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "Del City, bordered by Midwest City and south Oklahoma City, is an area we serve with driveway replacement, patio slabs, sidewalk work, and retaining walls.",
    ],
    localTerrainNote:
      "Del City shares the same Crutcho Creek and Cherry Creek flood dynamic as neighboring Midwest City — the city's own floodplain information confirms flood risk rises along those creeks during sustained rain from North Canadian River backwater. That's relevant for any work near those drainage corridors. The terrain is otherwise flat, over the same expansive clay base as the rest of the metro.",
    driveTimeNote: "Del City is about 15–20 minutes east of the shop, in the same general area as Midwest City.",
    linkedServices: [SVC.driveways, SVC.sidewalks],
    faq: [
      {
        question: "Does flood risk near Crutcho Creek or Cherry Creek matter for my project?",
        answer:
          "If your property is near those drainage corridors, yes. Del City's floodplain information confirms flood risk along Crutcho Creek and Cherry Creek rises during sustained rain from North Canadian River backwater, so we prioritize grading and drainage on work in those areas.",
      },
      {
        question: "How much does concrete cost in Del City?",
        answer:
          "Del City pricing follows our OKC metro rates — roughly $6–$10 per square foot for driveways and slabs — with an exact price after a free on-site estimate.",
      },
    ],
  },
};

const NEARBY: Record<string, { name: string; to: string }[]> = {
  "oklahoma-city": [{ name: "Edmond", to: "/edmond-concrete" }, { name: "Moore", to: "/moore-oklahoma-concrete" }, { name: "Midwest City", to: "/midwest-city-oklahoma-concrete" }],
  edmond: [{ name: "Oklahoma City", to: "/oklahoma-city-concrete" }, { name: "Yukon", to: "/yukon-oklahoma-concrete" }, { name: "Moore", to: "/moore-oklahoma-concrete" }],
  norman: [{ name: "Moore", to: "/moore-oklahoma-concrete" }, { name: "Oklahoma City", to: "/oklahoma-city-concrete" }, { name: "Del City", to: "/del-city-oklahoma-concrete" }],
  yukon: [{ name: "Mustang", to: "/mustang-oklahoma-concrete" }, { name: "Oklahoma City", to: "/oklahoma-city-concrete" }, { name: "Edmond", to: "/edmond-concrete" }],
  mustang: [{ name: "Yukon", to: "/yukon-oklahoma-concrete" }, { name: "Oklahoma City", to: "/oklahoma-city-concrete" }, { name: "Moore", to: "/moore-oklahoma-concrete" }],
  moore: [{ name: "Norman", to: "/norman-ok-concrete" }, { name: "Oklahoma City", to: "/oklahoma-city-concrete" }, { name: "Del City", to: "/del-city-oklahoma-concrete" }],
  "midwest-city": [{ name: "Del City", to: "/del-city-oklahoma-concrete" }, { name: "Oklahoma City", to: "/oklahoma-city-concrete" }, { name: "Moore", to: "/moore-oklahoma-concrete" }],
  "del-city": [{ name: "Midwest City", to: "/midwest-city-oklahoma-concrete" }, { name: "Oklahoma City", to: "/oklahoma-city-concrete" }, { name: "Moore", to: "/moore-oklahoma-concrete" }],
};

export default function CityPage({ slug }: { slug: string }) {
  const data = cityData[slug] || cityData["oklahoma-city"];
  const routePath = ROUTE_BY_SLUG[slug] || ROUTE_BY_SLUG["oklahoma-city"];
  return (
    <CityPageTemplate
      city={data.city}
      county={data.county}
      canonicalUrl={`${BASE}${routePath}`}
      heroBlurb={data.heroBlurb}
      intro={data.intro}
      localTerrainNote={data.localTerrainNote}
      driveTimeNote={data.driveTimeNote}
      neighborhoods={data.neighborhoods}
      linkedServices={data.linkedServices}
      faq={data.faq}
      nearbyLinks={NEARBY[slug]}
      metaDescription={data.metaDescription}
    />
  );
}
