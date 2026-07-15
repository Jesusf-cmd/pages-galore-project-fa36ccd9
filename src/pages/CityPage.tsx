import { useEffect } from "react";
import CityPageTemplate from "@/components/CityPageTemplate";
import {
  buildSewerSection,
  metroProjectsNote,
  metroSewerFaqs,
  metroWhyFdz,
} from "@/lib/citySewerShared";

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
  stillwater: "/stillwater-oklahoma-concrete",
};

interface CityData {
  city: string;
  county: string;
  tier: "priority" | "standard";
  metaTitle?: string;
  metaDescription: string;
  heroBlurb: string;
  heroTitle?: string;
  heroTitleAccent?: string;
  intro: string[];
  localTerrainNote: string;
  driveTimeNote: string;
  neighborhoods?: string[];
  linkedServices: { label: string; to: string; blurb: string }[];
  faq: { question: string; answer: string }[];
  /** Combined services beyond concrete, e.g. sewer line work — affects the per-page Service schema. */
  serviceTypes?: string[];
  serviceName?: string;
  /** Short local sewer line note (2–4 sentences) linking to the main sewer page. */
  sewerLocalNote?: string;
  sewerSection?: {
    intro: string;
    methods: { title: string; blurb: string }[];
    signs: string[];
    localNote: string;
    linkTo: string;
  };
  whyFdzSection?: { points: { title: string; desc: string }[] };
  projectsPlaceholder?: { note: string };
  serviceAreaNote?: string;
  faqHeadingAccent?: string;
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
      "Concrete & sewer line contractor in Oklahoma City, OK — FDZ Construction LLC, based in south OKC. Driveways, patios, slabs, foundations & sewer repair. Licensed, bonded & insured. Free estimate: (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, foundations, and sewer line repair &amp; installation in <strong>Oklahoma City, Oklahoma</strong> — from our south OKC shop. Licensed, bonded &amp; insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "FDZ Construction LLC is based in south Oklahoma City, at 7004 S Indiana Ave — so OKC itself is the area we work most. We pour driveways, patios, slabs, foundations, and commercial concrete across the city, with the fastest response of anywhere we serve.",
    ],
    localTerrainNote:
      "Oklahoma City is too large for one soil story — conditions shift from one part of the city to another — but it broadly shares the metro's Permian-age clay and shale base. The terrain is mostly flat, and the North Canadian River corridor runs through the city, so drainage planning matters most on low-lying lots near the river and its tributaries. Because conditions vary block to block, we evaluate soil and grading on a per-site basis rather than assuming one answer fits the whole city.",
    driveTimeNote: "we're based right here in south OKC, so Oklahoma City gets the fastest response of any area we serve.",
    neighborhoods: ["Nichols Hills"],
    linkedServices: [SVC.driveways, SVC.patios, SVC.foundations, SVC.commercial],
    sewerLocalNote:
      "Many established OKC neighborhoods still run on original clay or cast-iron sewer lines that shift and crack as Permian clay swells and shrinks each season. When a line fails under a driveway or slab, we repair the pipe and restore the concrete ourselves — one crew, no second contractor.",
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
      "Concrete & sewer line contractor in Edmond, OK — driveways, patios, slabs, foundations & retaining walls. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, foundations, retaining walls, and sewer line repair in <strong>Edmond, Oklahoma</strong>. Licensed, bonded &amp; insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "Edmond is one of the areas we work most often outside our south OKC home base. We pour driveways, patios, slabs, foundations, and retaining walls for Edmond homeowners and builders across Oklahoma County.",
    ],
    localTerrainNote:
      "Edmond sits on the northern part of the Garber-Wellington aquifer, where the underlying formations carry more sandstone than the rest of the metro. In practice, soil here can shift between sandy and clay-heavy across a single lot, and the terrain has more rolling grade than much of the flat OKC metro. That combination makes grading and drainage planning a bigger factor here than on flatter sites — so we evaluate each lot rather than applying a one-size approach.",
    driveTimeNote: "Edmond is about 30–40 minutes north of the shop, across the metro — still one of the areas we serve most regularly.",
    linkedServices: [SVC.driveways, SVC.patios, SVC.foundations, SVC.retaining],
    sewerLocalNote:
      "Edmond&apos;s mix of 1970s–90s housing and newer subdivisions means sewer lines range from aging clay pipe to modern PVC — and the area&apos;s sandy-to-clay soil shifts enough to stress buried lines over time. We handle sewer repair across Edmond with the same crew that restores driveways and slabs afterward.",
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
      "Concrete & sewer line contractor in Yukon, OK — driveways, patios, slabs, foundations & commercial concrete in Canadian County. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, foundations, commercial work, and sewer line repair in <strong>Yukon, Oklahoma</strong>. Licensed, bonded &amp; insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "Yukon, on the west side of the metro in Canadian County, is one of the areas we work frequently. We handle driveways, patios, slabs, foundations, and commercial concrete for Yukon homeowners and businesses.",
    ],
    localTerrainNote:
      "Yukon has flatter terrain than Edmond, on the same expansive clay base shared across the region. A lot of the work here is in newer subdivisions built on graded former agricultural land — and on those sites, the quality of the fill and the compaction done during the original grading matters as much as the native soil itself. We check compaction and drainage on these lots specifically.",
    driveTimeNote: "Yukon is about 20–25 minutes west of the shop.",
    linkedServices: [SVC.driveways, SVC.patios, SVC.foundations, SVC.commercial],
    sewerLocalNote:
      "Yukon&apos;s fast-growing subdivisions sit on the same expansive clay as the rest of the metro — and sewer lines under driveways are often the first thing to move when that clay swells after heavy rain. We repair and replace lines across Yukon and restore the disturbed concrete in the same job.",
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
      "Concrete & sewer line contractor in Norman, OK serving Cleveland County. Driveways, patios, slabs, foundations & sewer repair. FDZ Construction LLC. (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, foundations, retaining walls, and sewer line repair in <strong>Norman, Oklahoma</strong>. Licensed, bonded &amp; insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "FDZ Construction serves Norman and Cleveland County with driveways, patios, slabs, foundations, and retaining walls — the same crew and standards we bring across the OKC metro.",
    ],
    localTerrainNote:
      "Norman's position along the Canadian River means some lots sit on sandier, river-influenced soil that can transition to denser clay within a short distance on the same property. That's a different base-prep call than the more uniform clay sites elsewhere in the metro, so we assess the soil on each lot before we pour.",
    driveTimeNote: "Norman is about 20–25 minutes south of the shop.",
    linkedServices: [SVC.driveways, SVC.patios, SVC.foundations, SVC.retaining],
    sewerLocalNote:
      "Norman&apos;s older homes near campus and along the Canadian River corridor often sit on sandier soil that transitions to dense clay within the same lot — conditions that stress sewer joints and encourage root intrusion. We serve Norman homeowners with sewer line repair and concrete restoration handled by one crew.",
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
      "Concrete & sewer line contractor in Moore, OK — driveways, patios, slabs, foundations & sidewalks in Cleveland County. FDZ Construction LLC. Free estimate: (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, foundations, sidewalks, and sewer line repair in <strong>Moore, Oklahoma</strong>. Licensed, bonded &amp; insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "Moore, just south of Oklahoma City in Cleveland County, is one of the closest areas to our shop. We pour driveways, patios, slabs, foundations, and sidewalks for Moore homeowners.",
    ],
    localTerrainNote:
      "Moore sits on flat terrain over the same expansive clay base found across the metro, with limited natural runoff in low-lying areas. That makes proper slope-to-drain detailing matter more here than on higher ground — we grade every slab and driveway to move water away from the structure.",
    driveTimeNote: "Moore is among the closest areas we serve, just south of the shop.",
    linkedServices: [SVC.driveways, SVC.patios, SVC.foundations, SVC.sidewalks],
    sewerLocalNote:
      "Much of Moore&apos;s housing stock dates to the 1980s–90s, when clay and cast-iron sewer lines were standard — and repeated storm saturation on flat clay lots can accelerate line sagging and joint failure. We repair sewer lines across Moore and restore driveways and slabs in the same job.",
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
      "Concrete & sewer line contractor in Mustang, OK — driveways, patios, slabs & foundations for homeowners and new-construction subdivisions. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, foundations, and sewer line repair in <strong>Mustang, Oklahoma</strong>. Licensed, bonded &amp; insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "Mustang, on the west side of the metro in Canadian County, is an area we serve with driveways, patios, slabs, and foundations for homeowners and new-construction subdivisions.",
    ],
    localTerrainNote:
      "Mustang shares Yukon's flatter west-metro terrain and the region's expansive clay base. Like Yukon, a lot of the work here is on newer subdivisions built on graded former agricultural land, where fill quality and compaction matter as much as the native soil — so we check both before we pour.",
    driveTimeNote: "Mustang is about 20–25 minutes west of the shop.",
    linkedServices: [SVC.driveways, SVC.patios, SVC.foundations],
    sewerLocalNote:
      "Mustang&apos;s mid-century neighborhoods and newer subdivisions alike sit on expansive clay — and original sewer lines under driveways are a common failure point as that soil moves. We handle repair and replacement across Mustang with our own excavation and concrete restoration crew.",
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
      "Concrete & sewer line contractor in Midwest City, OK — driveways, patio slabs, sidewalks & foundation work in eastern Oklahoma County. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Driveway replacement, patio slabs, sidewalks, foundation work, and sewer line repair in <strong>Midwest City, Oklahoma</strong>. Licensed, bonded &amp; insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "FDZ Construction serves Midwest City in eastern Oklahoma County with driveway replacement, patio slabs, sidewalk work, and foundation work.",
    ],
    localTerrainNote:
      "Midwest City sits along Crutcho Creek and Cherry Creek, and the area sees increased flood risk along those creeks during sustained rain, when backwater from the North Canadian River slows drainage — per the city's own floodplain information. Otherwise it shares the metro's flat, expansive clay base. For any work near those drainage corridors, grading and drainage are the priority.",
    driveTimeNote: "Midwest City is about 15–20 minutes east of the shop.",
    linkedServices: [SVC.driveways, SVC.patios, SVC.sidewalks, SVC.foundations],
    sewerLocalNote:
      "Midwest City&apos;s post-war housing stock often still runs on original sewer lines that have had decades to settle and shift on the metro&apos;s expansive clay. Properties near Crutcho Creek and Cherry Creek see extra soil movement after heavy rain — a common trigger for sewer backups we repair across eastern Oklahoma County.",
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
      "Concrete & sewer line contractor in Del City, OK — driveways, patio slabs, sidewalks & retaining walls. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Driveway replacement, patio slabs, sidewalks, retaining walls, and sewer line repair in <strong>Del City, Oklahoma</strong>. Licensed, bonded &amp; insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    intro: [
      "Del City, bordered by Midwest City and south Oklahoma City, is an area we serve with driveway replacement, patio slabs, sidewalk work, and retaining walls.",
    ],
    localTerrainNote:
      "Del City shares the same Crutcho Creek and Cherry Creek flood dynamic as neighboring Midwest City — the city's own floodplain information confirms flood risk rises along those creeks during sustained rain from North Canadian River backwater. That's relevant for any work near those drainage corridors. The terrain is otherwise flat, over the same expansive clay base as the rest of the metro.",
    driveTimeNote: "Del City is about 15–20 minutes east of the shop, in the same general area as Midwest City.",
    linkedServices: [SVC.driveways, SVC.patios, SVC.sidewalks, SVC.retaining],
    sewerLocalNote:
      "Del City&apos;s older neighborhoods — many built during the Tinker-area growth years — often have original clay or cast-iron sewer lines nearing the end of their service life. The same clay soil movement that affects driveways also shifts buried pipe; we repair lines and restore concrete across Del City with one crew.",
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
  stillwater: {
    city: "Stillwater",
    county: "Payne County",
    tier: "standard",
    metaTitle: "Concrete & Sewer Line Contractor Stillwater, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete & sewer line contractor serving Stillwater, OK — driveways, patios, foundations, and sewer line repair & installation. FDZ Construction LLC. Call (405) 458-4805.",
    heroBlurb:
      "Concrete driveways, patios, slabs, foundations, and sewer line repair &amp; installation for <strong>Stillwater, Oklahoma</strong> homeowners and rental property owners. Licensed, bonded &amp; insured. <a href='tel:4054584805'>(405) 458-4805</a>.",
    heroTitle: "Stillwater, OK Concrete",
    heroTitleAccent: "& Sewer Line Contractor.",
    intro: [
      "FDZ Construction LLC is based in south Oklahoma City, but we've completed concrete and sewer line projects for Stillwater homeowners — both are part of the work we actually do here, not just a metro-only sideline.",
      "Stillwater's housing stock is a mix of older, near-campus homes and student rental properties around Oklahoma State University alongside newer construction on the edges of town — we work on both, from a rental property's driveway repair to a new-build sewer line install.",
    ],
    localTerrainNote:
      "Stillwater sits in Payne County's Sandstone Hills country along the Cimarron River — a different geologic base than the Permian clay and shale under the OKC metro. But the surface soils around Stillwater are still expansive clay loams (Masham silty clay loam is common in the area) that swell and shrink with moisture much the same way OKC's clay does, which is why base prep and drainage still matter here just as much as anywhere else we work.",
    driveTimeNote: "Stillwater is about 65–75 miles from our south OKC shop — roughly an hour to 90 minutes depending on route and traffic. We serve Stillwater by scheduled appointment rather than same-day OKC-metro response.",
    linkedServices: [SVC.driveways, SVC.patios, SVC.foundations, SVC.retaining, SVC.sidewalks],
    serviceTypes: ["Concrete Contracting", "Sewer Line Repair and Installation"],
    serviceName: "Concrete & Sewer Line Contractor in Stillwater, OK",
    sewerSection: {
      intro:
        "FDZ Construction handles sewer line repair, replacement, and new installation for Stillwater homeowners and rental property owners — using the same one-crew approach we use across the OKC metro: we handle the excavation and the concrete restoration ourselves, so you're not coordinating a plumber and a separate concrete contractor.",
      methods: [
        { title: "Trenchless Pipe Bursting", blurb: "Pulls new pipe through the old pipe's path — minimal digging, ideal when the line's path is sound but the pipe itself is worn out." },
        { title: "Traditional Excavation Repair", blurb: "Digs down to expose and replace a damaged section — often the right call when trenchless access isn't practical." },
        { title: "Spot Repair", blurb: "Fixes one isolated damaged section without replacing the whole line — the most affordable option when it's genuinely all that's needed." },
        { title: "Full Replacement & New Installation", blurb: "For lines too old or damaged to repair, and for new construction that needs a line run for the first time — modern installs use PVC, rated for 50+ years." },
      ],
      signs: [
        "Slow or backed-up drains in more than one fixture",
        "Sewage odor near the yard or inside the house",
        "Gurgling sounds from toilets or drains",
        "Soggy or unusually green patches of lawn, even without rain",
        "Multiple fixtures backing up at the same time",
        "Standing water near the sewer cleanout",
      ],
      localNote:
        "That same clay-loam soil movement affects buried sewer pipe, not just driveways and foundations — it can shift pipe out of alignment, create low spots where a line sags, and stress joints until they leak. Proper bedding and backfill during a repair matter here just as much as they do on our OKC jobs.",
      linkTo: "/sewer-line-repair-oklahoma-city",
    },
    whyFdzSection: {
      points: [
        { title: "One Crew for Excavation & Concrete", desc: "Sewer line work means digging — and usually means restoring a driveway, sidewalk, or slab afterward. We do both ourselves, on OKC jobs and Stillwater jobs alike." },
        { title: "OKC-Based, Actively Serving Stillwater", desc: "We're not a Stillwater company — owner David Fernandez runs FDZ from south Oklahoma City and travels to Stillwater for scheduled projects. We're upfront about that rather than pretending otherwise." },
        { title: "Licensed, Bonded & Insured in Oklahoma", desc: "Fully licensed Oklahoma contractor with liability and workers comp insurance on every project, wherever it is." },
        { title: "2-Year Workmanship Warranty", desc: "Every project — concrete or sewer, OKC or Stillwater — is backed by the same 2-year workmanship warranty." },
      ],
    },
    projectsPlaceholder: {
      note: "We've completed both concrete and sewer line projects for Stillwater homeowners. We don't have photos or customer reviews from those jobs published yet — this section will be updated with real Stillwater project photos and reviews as they become available.",
    },
    serviceAreaNote:
      "Stillwater is about 65–75 miles from our south OKC shop — roughly an hour to 90 minutes depending on route and traffic. We serve Stillwater by scheduled appointment rather than same-day OKC-metro response, so projects here are typically planned a bit further ahead. Call <a href='tel:4054584805'>(405) 458-4805</a> to check current scheduling for a Stillwater project.",
    faqHeadingAccent: "Concrete &amp; Sewer Work in Stillwater",
    faq: [
      {
        question: "Do you actually work in Stillwater, or just Oklahoma City?",
        answer: "We actually work in Stillwater — we've completed both concrete and sewer line projects there. We're based in south Oklahoma City, and Stillwater is one of the areas we travel to for scheduled projects, not just a city we mention on paper.",
      },
      {
        question: "Do you charge extra for travel to Stillwater?",
        answer: "Because Stillwater is outside our core OKC metro service area, travel is a factor we account for in scheduling and pricing. We'll go over exactly what that means for your project when we give you a written estimate — no surprises after the fact.",
      },
      {
        question: "Do you do both concrete and sewer work, or just one?",
        answer: "Both. We're a concrete contractor that also handles sewer line repair, replacement, and installation — including the concrete restoration that sewer work usually requires. We've done both types of projects in Stillwater.",
      },
      {
        question: "How do I schedule a project if you're based in OKC?",
        answer: "Call (405) 458-4805 or request a free estimate — we'll go over your project, confirm we can get a crew out to Stillwater on a timeline that works, and schedule your on-site estimate from there.",
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

const CITY_NAME: Record<string, string> = {
  "oklahoma-city": "Oklahoma City",
  edmond: "Edmond",
  norman: "Norman",
  yukon: "Yukon",
  mustang: "Mustang",
  moore: "Moore",
  "midwest-city": "Midwest City",
  "del-city": "Del City",
  stillwater: "Stillwater",
};

const METRO_SLUGS = new Set([
  "oklahoma-city",
  "edmond",
  "norman",
  "yukon",
  "mustang",
  "moore",
  "midwest-city",
  "del-city",
]);

function enrichMetroCity(slug: string, entry: CityData): CityData {
  if (!METRO_SLUGS.has(slug) || !entry.sewerLocalNote) return entry;
  const city = entry.city;
  const sewerLocalPlain = entry.sewerLocalNote.replace(/&apos;/g, "'");
  return {
    ...entry,
    metaTitle: entry.metaTitle ?? `Concrete & Sewer Line Contractor ${city}, OK | FDZ Construction LLC`,
    metaDescription: entry.metaDescription.includes("sewer")
      ? entry.metaDescription
      : entry.metaDescription.replace(/^Concrete contractor/, "Concrete & sewer line contractor").replace(/Concrete contractor/, "Concrete & sewer line contractor"),
    heroTitle: entry.heroTitle ?? `${city} Concrete`,
    heroTitleAccent: entry.heroTitleAccent ?? "& Sewer Line Contractor.",
    serviceTypes: ["Concrete Contracting", "Sewer Line Repair and Installation"],
    serviceName: `Concrete & Sewer Line Contractor in ${city}, OK`,
    sewerSection: buildSewerSection(city, sewerLocalPlain),
    whyFdzSection: entry.whyFdzSection ?? metroWhyFdz(city),
    projectsPlaceholder: entry.projectsPlaceholder ?? { note: metroProjectsNote(city) },
    faqHeadingAccent: entry.faqHeadingAccent ?? `Concrete &amp; Sewer Work in ${city}`,
    faq: [...metroSewerFaqs(city), ...entry.faq],
    sewerLocalNote: undefined,
  };
}

const resolvedCityData: Record<string, CityData> = Object.fromEntries(
  Object.entries(cityData).map(([slug, entry]) => [slug, enrichMetroCity(slug, entry)]),
);

export default function CityPage({ slug }: { slug: string }) {
  const data = resolvedCityData[slug] || resolvedCityData["oklahoma-city"];
  const routePath = ROUTE_BY_SLUG[slug] || ROUTE_BY_SLUG["oklahoma-city"];
  const cityName = CITY_NAME[slug] || "Oklahoma City";
  const pageUrl = `${BASE}${routePath}`;

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "city-service-schema";
    const serviceTypes = data.serviceTypes || ["Concrete Contracting"];
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceTypes.length > 1 ? serviceTypes : serviceTypes[0],
      "name": data.serviceName || `Concrete Contractor in ${cityName}, OK`,
      "url": pageUrl,
      "provider": { "@id": "https://fdzconstruction.com/#organization" },
      "areaServed": { "@type": "City", "name": cityName, "addressRegion": "OK" },
    });
    document.getElementById("city-service-schema")?.remove();
    document.head.appendChild(script);
    return () => { document.getElementById("city-service-schema")?.remove(); };
  }, [cityName, pageUrl, data.serviceTypes, data.serviceName]);

  return (
    <CityPageTemplate
      city={data.city}
      county={data.county}
      canonicalUrl={`${BASE}${routePath}`}
      heroBlurb={data.heroBlurb}
      heroTitle={data.heroTitle}
      heroTitleAccent={data.heroTitleAccent}
      intro={data.intro}
      localTerrainNote={data.localTerrainNote}
      driveTimeNote={data.driveTimeNote}
      neighborhoods={data.neighborhoods}
      linkedServices={data.linkedServices}
      faq={data.faq}
      nearbyLinks={NEARBY[slug]}
      metaTitle={data.metaTitle}
      metaDescription={data.metaDescription}
      sewerSection={data.sewerSection}
      sewerLocalNote={data.sewerLocalNote}
      whyFdzSection={data.whyFdzSection}
      projectsPlaceholder={data.projectsPlaceholder}
      serviceAreaNote={data.serviceAreaNote}
      faqHeadingAccent={data.faqHeadingAccent}
    />
  );
}
