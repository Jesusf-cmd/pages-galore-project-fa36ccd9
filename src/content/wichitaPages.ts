import { KANSAS_PHONE, OKLAHOMA_PHONE } from "../lib/phones";

const ksCall = `<a href="tel:${KANSAS_PHONE.tel}">${KANSAS_PHONE.display}</a>`;
const okCall = `<a href="tel:${OKLAHOMA_PHONE.tel}">${OKLAHOMA_PHONE.display}</a>`;

export type WichitaCard = { icon: string; title: string; description: string };
export type WichitaSection = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  content: string[];
  alt?: boolean;
  infoBlock?: string;
};

export type WichitaPageContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  modelNote: string;
  introText: string;
  ctaLabel: string;
  serviceSchema: { serviceType: string; name: string; telephone: string };
  serviceCardsTitle: string;
  serviceCardsTitleAccent: string;
  serviceCards: WichitaCard[];
  subServices: {
    sectionEyebrow: string;
    sectionTitle: string;
    items: { title: string; bullets: string[] }[];
  };
  sections: WichitaSection[];
  specs: { label: string; value: string }[];
  processEyebrow: string;
  processTitle: string;
  processTitleAccent: string;
  processIntro: string;
  processSteps: { title: string; description: string }[];
  projectTypesEyebrow: string;
  projectTypesTitle: string;
  projectTypesTitleAccent: string;
  projectTypesIntro: string;
  projectTypes: { title: string; description: string }[];
  faqTitle: string;
  faq: { question: string; answer: string }[];
  serviceArea: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    introHtml: string;
    footnoteHtml: string;
  };
  finalCta: {
    heading: string;
    headingAccent: string;
    description: string;
    buttonLabel: string;
  };
};

const estimateNote =
  "Use the estimate form and include the Wichita-area address, approximate size, and a short description of the work. Plans and site photos can be uploaded on the same page. The quote is written after a site visit or a plan review.";

export const commercialConcreteWichita: WichitaPageContent = {
  path: "/commercial-concrete-wichita",
  metaTitle: "Commercial Concrete Contractor Wichita KS | FDZ Construction",
  metaDescription:
    "Commercial concrete contractor for Wichita, KS. Parking lots, paving, curb and gutter, sidewalks, and site slabs. Wichita-area crew. Call 316-531-9583.",
  h1: "Commercial Concrete Contractor in Wichita, Kansas",
  eyebrow: "Wichita, Kansas · Commercial Concrete",
  title: "Commercial Concrete Contractor in",
  titleAccent: "Wichita, Kansas.",
  description: `Commercial concrete for Wichita and Sedgwick County — parking lots, paving, curb and gutter, sidewalks, and site slabs, handled by FDZ's Wichita-area crew. Call ${ksCall}.`,
  modelNote:
    "FDZ's Wichita-area concrete crew handles local commercial projects. Scope and schedule are confirmed during estimating.",
  introText: `FDZ Construction LLC handles commercial concrete projects in Wichita with its Wichita-area crew. The work on this page is site concrete for general contractors, property owners, developers, and facility managers: parking lots and drive lanes, concrete paving, curb and gutter, sidewalks, building slabs, and loading or access areas that are part of a commercial site. Heavier warehouse slabs, equipment foundations, and dock structures are grouped on the <a href="/industrial-concrete-wichita">Wichita industrial concrete</a> page so this one stays focused on commercial site work. Call ${ksCall} to start a written estimate.`,
  ctaLabel: "Request a Commercial Estimate →",
  serviceSchema: {
    serviceType: "Commercial concrete construction",
    name: "Commercial Concrete Contractor in Wichita, Kansas",
    telephone: "+13165319583",
  },
  serviceCardsTitle: "Commercial Scopes for",
  serviceCardsTitleAccent: "Wichita Sites.",
  serviceCards: [
    {
      icon: "🅿️",
      title: "Parking Lots",
      description:
        "New and replacement concrete parking areas, drive lanes, and stalls, with joint layout and drainage slope set to the site plan.",
    },
    {
      icon: "🛣️",
      title: "Concrete Paving",
      description:
        "Paved approaches, service drives, and site paving where passenger vehicles and delivery trucks share the same concrete.",
    },
    {
      icon: "🧱",
      title: "Curb and Gutter",
      description:
        "Parking-lot curb, island curb, and drive-approach cuts poured with the flatwork instead of as a separate afterthought.",
    },
    {
      icon: "🚶",
      title: "Sidewalks and Routes",
      description:
        "Site sidewalks and curb ramps when accessible routes are part of the drawings for the project.",
    },
    {
      icon: "🏗️",
      title: "Building Slabs",
      description:
        "Slab-on-grade and thickened-edge commercial slabs poured to the thickness and reinforcement on the structural drawings.",
    },
    {
      icon: "🚚",
      title: "Access Areas",
      description:
        "Aprons, dumpster approaches, and site entries that take turning trucks. Heavier dock and warehouse work is on the industrial page.",
    },
  ],
  subServices: {
    sectionEyebrow: "Scope",
    sectionTitle: "What commercial concrete in Wichita includes",
    items: [
      {
        title: "Parking lots and drive lanes",
        bullets: [
          "Stall fields, drive lanes, and fire lanes poured as reinforced concrete",
          "Slope and joint spacing taken from the civil drawings",
          "Panel replacement when a full lot rebuild is not the right scope",
          "Company reference for how FDZ builds lots: <a href='/parking-lots-oklahoma-city'>parking lot concrete</a>",
        ],
      },
      {
        title: "Paving, curb, and gutter",
        bullets: [
          "Concrete paving for commercial approaches and on-site circulation",
          "Straight and radius curb, gutter, and drive cuts tied into the paving",
          "Curb scope follows the same crew that places the lot, so elevations match",
          "Company reference: <a href='/commercial-curb-and-gutter-oklahoma-city'>commercial curb and gutter</a>",
        ],
      },
      {
        title: "Sidewalks and accessible routes",
        bullets: [
          "Public-edge and on-site walks poured with the rest of the flatwork",
          "Curb ramps and detectable warnings when they are shown on the drawings",
          "FDZ does not replace the design professional who stamps the accessible route",
          "Company reference: <a href='/sidewalks-oklahoma-city'>sidewalks</a> and <a href='/ada-concrete-ramps-oklahoma-city'>concrete ramps</a>",
        ],
      },
      {
        title: "Slabs, foundations, and site concrete",
        bullets: [
          "Commercial slab-on-grade, footings, and pads shown on the structural set",
          "Thickness, mix, and reinforcement follow the drawings for that building",
          "Warehouse interiors, machine pads, and dock pits are scoped on the industrial page",
          "Company reference: <a href='/foundations-oklahoma-city'>concrete foundations</a>",
        ],
      },
    ],
  },
  sections: [
    {
      eyebrow: "Who this is for",
      title: "Commercial projects that can",
      titleAccent: "need coordinated concrete work.",
      content: [
        "Wichita commercial work is aimed at jobs a crew can plan around: a parking field, a building pad with site paving, a curb-and-sidewalk package, or a combination of those on one site. For a small repair, share the approximate area so the crew can confirm fit and availability. If the concrete is mostly interior warehouse slab, equipment bases, or a loading dock, start with the industrial page and link the site paving back here.",
        "Typical callers are general contractors bidding a Wichita site, owners replacing failed lot panels, and facility managers adding access concrete around an existing building. FDZ reviews the drawings or walks the site before writing a number. The estimate form on this website is the same form used for the rest of FDZ's commercial work.",
      ],
    },
    {
      eyebrow: "Site concrete",
      title: "Parking, paving, and the",
      titleAccent: "edges around them.",
      alt: true,
      content: [
        "A commercial lot fails at the joints, the base, and the edges as often as it fails in the middle of a panel. FDZ places compacted aggregate, sets forms to the drainage arrows on the plan, and saw-cuts joints on a layout that matches the slab thickness and the traffic. Curb, gutter, and sidewalk are poured so the elevations meet the paving instead of being patched in later.",
        "Where a site also needs a grade separation — a lot that steps down to a street, or a pad held above adjacent grade — that wall is its own scope. See <a href='/retaining-walls-wichita'>retaining walls in Wichita</a>. Decorative entries, courtyards, and stamped walks are on the <a href='/stamped-concrete-wichita'>stamped concrete</a> page, not mixed into the structural lot.",
      ],
    },
    {
      eyebrow: "Estimate",
      title: "What to include for a",
      titleAccent: "Wichita commercial bid.",
      content: [
        estimateNote,
        "Useful attachments are a site plan, a structural slab schedule if there is a building, photos of existing concrete if this is a replacement, and any limits on when the lot or drive can be closed. FDZ coordinates pour days with the general contractor when the concrete is a subcontract. Certificate of insurance paperwork can be requested with the bid; it is part of the existing commercial process, not a Wichita-specific offer.",
      ],
      infoBlock: `Wichita and Kansas project line: ${ksCall}. Oklahoma City projects stay on ${okCall}.`,
    },
    {
      eyebrow: "Wichita cluster",
      title: "Related concrete work",
      titleAccent: "in Wichita.",
      alt: true,
      content: [
        "<a href='/industrial-concrete-wichita'>Industrial concrete in Wichita</a> — warehouse slabs, equipment and machine pads, loading docks, and heavy-use paving.",
        "<a href='/retaining-walls-wichita'>Retaining walls in Wichita</a> — poured concrete and block walls for grade changes and commercial sites.",
        "<a href='/stamped-concrete-wichita'>Stamped and decorative concrete in Wichita</a> — patios, drives, walks, entries, and courtyards.",
        "Company pages that describe how FDZ builds these scopes: <a href='/commercial-concrete-oklahoma-city'>commercial concrete</a>, <a href='/parking-lots-oklahoma-city'>parking lots</a>, <a href='/commercial-curb-and-gutter-oklahoma-city'>curb and gutter</a>, and <a href='/foundations-oklahoma-city'>foundations</a>. Those pages document Oklahoma City work. They are not Wichita project histories.",
      ],
    },
  ],
  specs: [
    { label: "Mix", value: "4,000 PSI minimum on commercial flatwork; higher when the drawings call for it" },
    { label: "Thickness", value: "Set by the structural or civil drawings, commonly in the 5–8 inch range for site slabs" },
    { label: "Base", value: "Compacted aggregate under commercial paving, proof-rolled before concrete" },
    { label: "Reinforcement", value: "Rebar placed to the schedule on the drawings" },
    { label: "Joints", value: "Saw-cut on the joint plan, typically within 24 hours of the pour" },
    { label: "Finish", value: "Broom, trowel, or as specified for the traffic on that slab" },
  ],
  processEyebrow: "Sequence",
  processTitle: "From drawings to a",
  processTitleAccent: "sealed commercial slab.",
  processIntro:
    "Wichita commercial pours follow the same crew sequence FDZ uses on commercial sites. Dates are scheduled around access and the other trades on the job.",
  processSteps: [
    {
      title: "Plan or site review",
      description:
        "Drawings, photos, and access limits come in with the estimate request. The number is written after that review or a site visit.",
    },
    {
      title: "Subgrade and base",
      description:
        "The crew excavates to the plan, places aggregate, and compacts it before forms and steel go in.",
    },
    {
      title: "Forms and reinforcement",
      description:
        "Forms are set to drainage grade. Rebar is tied to the drawing before the truck is ordered.",
    },
    {
      title: "Place and finish",
      description:
        "Concrete is placed to the specified strength and finished for the use — broom on walks and lots, trowel where the spec requires it.",
    },
    {
      title: "Joints and cure",
      description:
        "Control joints are cut on schedule and the slab is cured before traffic is turned back on.",
    },
  ],
  projectTypesEyebrow: "Use cases",
  projectTypesTitle: "Commercial sites this",
  projectTypesTitleAccent: "page is built for.",
  projectTypesIntro:
    "These are the Wichita commercial scopes FDZ's local crew can discuss and estimate.",
  projectTypes: [
    {
      title: "Retail and office parking",
      description: "Stall fields, drive lanes, and the curb and sidewalk package around a building pad.",
    },
    {
      title: "Replacement lot panels",
      description: "Failed bays and approaches replaced without treating the whole property as a new design.",
    },
    {
      title: "Building pad flatwork",
      description: "Slab-on-grade and the site paving that ties the building to the street or the lot.",
    },
    {
      title: "Service drives",
      description: "Concrete circulation for deliveries, trash collection, and fire access on a commercial site.",
    },
  ],
  faqTitle: 'Questions About<br/><em class="h2-accent">Wichita Commercial Concrete.</em>',
  faq: [
    {
      question: "Does FDZ have a crew in Wichita?",
      answer:
        "Yes. FDZ has a concrete crew in the Wichita area. Call 316-531-9583 to discuss a Kansas project.",
    },
    {
      question: "What commercial concrete work do you take in Wichita?",
      answer:
        "Parking lots, concrete paving, curb and gutter, sidewalks, commercial slabs, and site access concrete. Warehouse slabs, equipment pads, and loading docks are on the industrial concrete page.",
    },
    {
      question: "Can I request a small sidewalk repair in Wichita?",
      answer:
        "Send the approximate area and photos with your request. The Wichita-area crew can confirm whether the repair fits its schedule.",
    },
    {
      question: "Do you provide the engineering for a Wichita commercial site?",
      answer:
        "No. FDZ places concrete to the civil and structural drawings. Stamped design stays with the project's engineer.",
    },
    {
      question: "How do I request a commercial estimate for Wichita?",
      answer:
        "Use the estimate form on this site or call 316-531-9583. Include the address, approximate size, schedule limits, and any plans or photos. The quote is written after a site visit or a plan review.",
    },
    {
      question: "Which number should Oklahoma City projects use?",
      answer:
        "Oklahoma City work stays on (405) 458-4805. Use 316-531-9583 for Wichita and other Kansas project calls.",
    },
  ],
  serviceArea: {
    eyebrow: "Service area",
    title: "Wichita commercial work,",
    titleAccent: "served by a Wichita-area crew.",
    introHtml:
      "This page is for commercial concrete in Wichita and nearby Sedgwick County — sites along the retail and industrial corridors where parking, paving, and building pads are the concrete package. FDZ's Wichita-area concrete crew handles local projects. Request an estimate with the site location and scope.",
    footnoteHtml: `Kansas project line ${ksCall}. Oklahoma City line ${okCall}.`,
  },
  finalCta: {
    heading: "Planning commercial concrete",
    headingAccent: "in Wichita?",
    description:
      "Send the address, approximate area, and scope through the estimate form. Plans and photos upload on the same page.",
    buttonLabel: "Request a Commercial Estimate →",
  },
};

export const industrialConcreteWichita: WichitaPageContent = {
  path: "/industrial-concrete-wichita",
  metaTitle: "Industrial Concrete Contractor Wichita KS | FDZ Construction",
  metaDescription:
    "Industrial concrete contractor for Wichita, KS. Warehouse slabs, equipment pads, machine pads, loading docks, and heavy-use paving. Call 316-531-9583.",
  h1: "Industrial Concrete Contractor in Wichita, Kansas",
  eyebrow: "Wichita, Kansas · Industrial Concrete",
  title: "Industrial Concrete Contractor in",
  titleAccent: "Wichita, Kansas.",
  description: `Industrial slabs, equipment pads, loading docks, and heavy-use paving for Wichita facilities. FDZ's Wichita-area concrete crew handles this work. Call ${ksCall}.`,
  modelNote:
    "FDZ's Wichita-area concrete crew handles local industrial projects to the project drawings.",
  introText: `Wichita's manufacturing and distribution buildings need concrete that carries forklifts, racking, trucks, and fixed equipment — not a standard parking-lot section. FDZ Construction LLC handles that industrial scope in Wichita with its Wichita-area concrete crew. One page covers the related work: warehouse and industrial slabs, equipment foundations and machine pads, loading areas and docks, and heavy-use paving. Separate thin pages for each pad type are not part of this expansion. Commercial parking, curb, and sidewalk packages live on the <a href="/commercial-concrete-wichita">Wichita commercial concrete</a> page. Call ${ksCall}.`,
  ctaLabel: "Request an Industrial Estimate →",
  serviceSchema: {
    serviceType: "Industrial concrete construction",
    name: "Industrial Concrete Contractor in Wichita, Kansas",
    telephone: "+13165319583",
  },
  serviceCardsTitle: "Industrial Scopes for",
  serviceCardsTitleAccent: "Wichita Facilities.",
  serviceCards: [
    {
      icon: "🏭",
      title: "Warehouse Slabs",
      description:
        "Interior slabs and replacements poured for forklift traffic, with thickness and joints taken from the facility drawings.",
    },
    {
      icon: "⚙️",
      title: "Equipment Foundations",
      description:
        "Pads and foundations for fixed equipment, placed to the supplier's shop drawings and the project engineer's plan.",
    },
    {
      icon: "🔩",
      title: "Machine Pads",
      description:
        "Machine and equipment bases where anchor layout, thickness, and reinforcement come from the equipment documents.",
    },
    {
      icon: "🚛",
      title: "Loading Docks",
      description:
        "Dock pits, aprons, and approach slabs coordinated with the leveler shop drawings when a dock is in the scope.",
    },
    {
      icon: "🛣️",
      title: "Industrial Paving",
      description:
        "Truck courts, dock approaches, and yard paving built for repeated heavy axle loads rather than car parking.",
    },
    {
      icon: "🏗️",
      title: "Industrial Foundations",
      description:
        "Foundations and thickened slabs that support industrial buildings when those elements are on the structural set.",
    },
  ],
  subServices: {
    sectionEyebrow: "Applications",
    sectionTitle: "High-value industrial concrete, kept on one page",
    items: [
      {
        title: "Warehouse and industrial slabs",
        bullets: [
          "New interior slabs and section replacements in warehouse and production buildings",
          "Flatness and joint layout follow the facility spec and the equipment that will run on the floor",
          "Phased placements when part of the building has to stay in use",
          "Company reference: <a href='/warehouse-slab-repair-oklahoma-city'>warehouse slab work</a>",
        ],
      },
      {
        title: "Equipment foundations and machine pads",
        bullets: [
          "Generator, compressor, process, and machine bases",
          "Anchor bolts set from the equipment supplier's shop drawings",
          "Thickness and steel follow the load on that piece of equipment, not a generic pad detail",
          "Company reference: <a href='/equipment-pad-concrete-oklahoma-city'>equipment pad concrete</a>",
        ],
      },
      {
        title: "Loading areas and docks",
        bullets: [
          "Dock aprons, approach slabs, and pit concrete",
          "Pit dimensions taken from the leveler manufacturer's drawings",
          "FDZ places the concrete; the leveler equipment supplier remains the equipment vendor",
          "Company reference: <a href='/loading-dock-construction-oklahoma-city'>loading dock construction</a>",
        ],
      },
      {
        title: "Heavy-use paving",
        bullets: [
          "Yard paving and truck courts where trailer traffic is the design case",
          "Joint spacing and slab depth matched to that traffic",
          "Ordinary car parking is scoped on the commercial page",
          "Company reference: <a href='/truck-court-concrete-oklahoma-city'>truck court concrete</a>",
        ],
      },
    ],
  },
  sections: [
    {
      eyebrow: "Why one page",
      title: "Pads, slabs, and docks are",
      titleAccent: "one industrial scope.",
      content: [
        "A Wichita plant or warehouse rarely needs only one of these items. The floor, the dock, and the equipment pads are bid together, scheduled together, and they fail together if the base is wrong. Sending the complete scope helps the crew plan the work and give a useful estimate. Send the full industrial package — slab, pads, dock, and paving — in one estimate request.",
        "If the project is mostly a parking lot, curb, and public sidewalk, use the <a href='/commercial-concrete-wichita'>commercial concrete page</a>. If a grade wall holds the yard or the dock approach, add <a href='/retaining-walls-wichita'>retaining walls</a>.",
      ],
    },
    {
      eyebrow: "Drawings",
      title: "Loads and anchor layout",
      titleAccent: "come from the project documents.",
      alt: true,
      content: [
        "Industrial concrete is only as good as the information behind it. FDZ needs the structural slab notes, the equipment shop drawings, and the dock or pit details before the crew is locked in. Anchor bolts, block-outs, and embed locations are set from those sheets. FDZ does not originate the structural design and does not certify equipment anchorage.",
        "On occupied buildings, say which aisles, docks, or rooms have to stay open. Phased placements are planned around that constraint. They are scheduled per project, not offered as a standing after-hours promise.",
      ],
    },
    {
      eyebrow: "Estimate",
      title: "What an industrial estimate",
      titleAccent: "needs from you.",
      content: [
        "Include the facility address in or near Wichita, the approximate slab or paving area, the equipment or dock that the concrete has to support, and the drawings you already have. Photos of cracked slabs, settled docks, or existing pads help when the work is a replacement.",
        estimateNote,
      ],
      infoBlock: `Wichita and Kansas project line: ${ksCall}. Oklahoma City projects stay on ${okCall}.`,
    },
    {
      eyebrow: "Related work",
      title: "Connect the industrial scope",
      titleAccent: "to the rest of the site.",
      content: [
        "<a href='/commercial-concrete-wichita'>Wichita commercial concrete</a> — parking, curb, sidewalks, and lighter site slabs around the same property.",
        "<a href='/retaining-walls-wichita'>Wichita retaining walls</a> — grade walls at yards, docks, and building pads.",
        "Company pages for the same kinds of work in Oklahoma City: <a href='/industrial-concrete-repair-oklahoma-city'>industrial concrete repair</a>, <a href='/warehouse-slab-repair-oklahoma-city'>warehouse slabs</a>, <a href='/equipment-pad-concrete-oklahoma-city'>equipment pads</a>, <a href='/loading-dock-construction-oklahoma-city'>loading docks</a>, and <a href='/truck-court-concrete-oklahoma-city'>truck courts</a>.",
      ],
    },
  ],
  specs: [
    { label: "Mix", value: "4,000 PSI minimum; 5,000 PSI or higher when the industrial spec requires it" },
    { label: "Slab depth", value: "Driven by forklift, racking, or equipment loads on the drawings" },
    { label: "Equipment pads", value: "Anchor layout from supplier shop drawings, not a field guess" },
    { label: "Docks", value: "Pit and apron dimensions from the leveler drawings" },
    { label: "Base", value: "Compacted aggregate confirmed before steel and concrete" },
    { label: "Joints", value: "Cut to the joint plan for the slab thickness and the traffic" },
  ],
  processEyebrow: "Sequence",
  processTitle: "How industrial concrete",
  processTitleAccent: "gets placed.",
  processIntro:
    "The sequence is document-first. The Wichita crew plans the work after the loads, access, and pour breaks are clear.",
  processSteps: [
    {
      title: "Document review",
      description:
        "Slab notes, equipment drawings, and dock details are checked against the estimate request.",
    },
    {
      title: "Base preparation",
      description:
        "Subgrade is cut and aggregate is compacted for the load the slab or pad has to carry.",
    },
    {
      title: "Steel and embeds",
      description:
        "Reinforcement, anchor bolts, and pit block-outs are set before concrete arrives.",
    },
    {
      title: "Placement",
      description:
        "Concrete is placed to the specified strength. Large floor areas can be laser-screeded when the spec calls for that flatness.",
    },
    {
      title: "Joints, cure, and turnover",
      description:
        "Joints are cut on time and the area stays closed until the cure the spec requires is met.",
    },
  ],
  projectTypesEyebrow: "Use cases",
  projectTypesTitle: "Facilities this page",
  projectTypesTitleAccent: "is meant to reach.",
  projectTypesIntro:
    "Industrial concrete in Wichita is for buildings and yards where the concrete is part of the operation, not just the parking.",
  projectTypes: [
    {
      title: "Warehouse floors",
      description: "New slabs and replacements under racking and forklift aisles.",
    },
    {
      title: "Production equipment",
      description: "Machine pads and foundations tied to a specific piece of equipment.",
    },
    {
      title: "Shipping docks",
      description: "Pits, aprons, and the paving trucks use to reach the building.",
    },
    {
      title: "Yard paving",
      description: "Heavy-use concrete between the dock and the property line.",
    },
  ],
  faqTitle: 'Questions About<br/><em class="h2-accent">Wichita Industrial Concrete.</em>',
  faq: [
    {
      question: "What counts as industrial concrete in Wichita?",
      answer:
        "Warehouse and industrial slabs, equipment foundations, machine pads, loading docks and aprons, industrial foundations, and paving built for truck traffic. Standard commercial parking is on the commercial concrete page.",
    },
    {
      question: "Do you build separate pages for machine pads and warehouse slabs?",
      answer:
        "Not for Wichita. Those scopes belong on this industrial page so the estimate covers the whole facility package.",
    },
    {
      question: "Can you match flatness numbers for forklift floors?",
      answer:
        "Flatness targets come from the facility specification. FDZ can laser-screed large slabs when that spec calls for it. FDZ does not invent a flatness number that is not on the drawings.",
    },
    {
      question: "Who engineers the equipment foundation?",
      answer:
        "The project engineer and the equipment supplier. FDZ sets anchors and places concrete from their drawings.",
    },
    {
      question: "How do I start a Wichita industrial estimate?",
      answer:
        "Call 316-531-9583 or use the estimate form. Send the address, area, equipment or dock type, and the drawings you have.",
    },
    {
      question: "Does FDZ have a Wichita concrete crew?",
      answer:
        "Yes. FDZ has a Wichita-area concrete crew for local industrial projects. Call the Kansas project line to discuss the scope.",
    },
  ],
  serviceArea: {
    eyebrow: "Service area",
    title: "Wichita industrial sites,",
    titleAccent: "served by a Wichita-area crew.",
    introHtml:
      "Industrial calls for this page are facilities in Wichita and the surrounding Sedgwick County area — manufacturing, distribution, and yard concrete where slab, dock, and equipment pads are the job. FDZ's Wichita-area crew handles these projects. Call the Kansas project line for local work.",
    footnoteHtml: `Kansas project line ${ksCall}. Oklahoma City line ${okCall}.`,
  },
  finalCta: {
    heading: "Have an industrial slab,",
    headingAccent: "dock, or equipment pad?",
    description:
      "Send the Wichita facility address, the drawings you have, and which areas have to stay open.",
    buttonLabel: "Request an Industrial Estimate →",
  },
};

export const retainingWallsWichita: WichitaPageContent = {
  path: "/retaining-walls-wichita",
  metaTitle: "Retaining Wall Contractor Wichita KS | FDZ Construction",
  metaDescription:
    "Retaining wall contractor for Wichita, KS. Poured concrete and block walls for commercial grade changes, site walls, installation, and repair. Call 316-531-9583.",
  h1: "Retaining Wall Contractor in Wichita, Kansas",
  eyebrow: "Wichita, Kansas · Retaining Walls",
  title: "Retaining Wall Contractor in",
  titleAccent: "Wichita, Kansas.",
  description: `Poured concrete and concrete-block retaining walls for Wichita grade changes, commercial sites, and wall repairs. Call ${ksCall}.`,
  modelNote:
    "FDZ's Wichita-area concrete crew handles retaining wall work. Stamped structural design, when a project needs it, stays with the project engineer.",
  introText: `FDZ Construction LLC builds and repairs concrete retaining walls for Wichita projects that are more than a garden edge. The work is poured concrete or concrete masonry walls that hold grade at a building pad, a parking area, a dock approach, or a sloped site, plus repairs where an existing wall has moved. Lower landscape walls can be part of a larger concrete project, but this page is for substantial wall construction, installation, and repair. FDZ's Wichita-area crew handles local wall projects. Call ${ksCall}.`,
  ctaLabel: "Request a Wall Estimate →",
  serviceSchema: {
    serviceType: "Concrete retaining wall construction",
    name: "Retaining Wall Contractor in Wichita, Kansas",
    telephone: "+13165319583",
  },
  serviceCardsTitle: "Wall Work for",
  serviceCardsTitleAccent: "Wichita Sites.",
  serviceCards: [
    {
      icon: "🧱",
      title: "Poured Concrete Walls",
      description:
        "Formed walls for taller grade changes and sites where a continuous concrete section is the right build.",
    },
    {
      icon: "🪨",
      title: "Concrete Block Walls",
      description:
        "CMU walls on a reinforced footing, with grouted and reinforced cores where the plan calls for them.",
    },
    {
      icon: "🏢",
      title: "Commercial Site Walls",
      description:
        "Walls that hold a lot, a building pad, or a service yard — scoped with the rest of the site concrete.",
    },
    {
      icon: "🔧",
      title: "Wall Repair",
      description:
        "Evaluation of leaning or cracked walls, then repair or rebuild depending on how far the wall has moved.",
    },
    {
      icon: "💧",
      title: "Drainage Behind the Wall",
      description:
        "Gravel backfill, weep holes, and a drain line when the wall section requires it. Drainage is part of the wall, not an extra.",
    },
    {
      icon: "📐",
      title: "Built to the Plan",
      description:
        "When height or surcharge needs an engineer's stamp, FDZ builds the wall shown on that plan.",
    },
  ],
  subServices: {
    sectionEyebrow: "Construction",
    sectionTitle: "Retaining wall installation and repair",
    items: [
      {
        title: "New wall construction",
        bullets: [
          "Layout from the site grades and the wall elevations on the drawings",
          "Footing sized to the wall that is being built",
          "Wall stem in poured concrete or CMU",
          "Backfill placed so it does not load a wall that has not cured",
        ],
      },
      {
        title: "Concrete retaining walls",
        bullets: [
          "Cast-in-place walls for commercial grade changes and taller residential slopes that are part of a larger project",
          "Reinforcement placed to the plan",
          "A monolithic section where the drawings use cast-in-place concrete",
        ],
      },
      {
        title: "Commercial retaining walls",
        bullets: [
          "Lot edges, pad separations, and walls at service yards",
          "Coordinated with <a href='/commercial-concrete-wichita'>Wichita commercial concrete</a> when the wall and the paving are one site",
          "Coordinated with <a href='/industrial-concrete-wichita'>industrial concrete</a> when the wall is at a dock or a yard",
        ],
      },
      {
        title: "Repair",
        bullets: [
          "A site look at movement, drainage, and what the wall is holding",
          "Repair when the wall and the footing can still do the job",
          "Rebuild when the wall has displaced enough that a patch will not hold the grade",
        ],
      },
    ],
  },
  sections: [
    {
      eyebrow: "Applications",
      title: "Where a Wichita retaining wall",
      titleAccent: "actually gets used.",
      content: [
        "The wall projects described here do structural work: holding a building pad above the street, keeping a parking bay from sloughing, separating a dock from a lower yard, or replacing a wall that is already leaning. A short decorative bed wall by itself is a weak match for this service. If that low wall is part of a patio or entry, it can be discussed with the <a href='/stamped-concrete-wichita'>stamped concrete</a> scope.",
        "Water behind a wall is what pushes it over. Every wall FDZ builds includes a drainage path — free-draining backfill and weep holes or a drain line — because a wall face without a way for water to leave is a wall that will move.",
      ],
    },
    {
      eyebrow: "Engineering",
      title: "Installation is not a",
      titleAccent: "substitute for engineering.",
      alt: true,
      content: [
        "Some walls need a stamped design because of height, surcharge from a drive or a building, or the soil the geotechnical report describes. That design is the project engineer's work. FDZ does not stamp drawings and does not offer itself as the designer of record. If you already have a plan, the crew builds to it. If you do not, the estimate can identify that an engineer has to be engaged before construction.",
        "Footing depth and reinforcement follow that plan and the requirements of the jurisdiction for the site. This page does not publish a Wichita frost depth or a height limit, because those are set by the project and the authority having jurisdiction, not by a statewide guess.",
      ],
    },
    {
      eyebrow: "Repair",
      title: "Leaning walls start with",
      titleAccent: "a cause, not a price.",
      content: [
        "A wall that has tilted is usually telling you the drainage or the footing is wrong, not that the face needs a cosmetic coat. FDZ looks at how far it has moved and whether water is trapped behind it before recommending a repair or a replacement. A written estimate follows that look, or a review of photos and any existing plans when a trip has to be justified first.",
      ],
      infoBlock: `Wichita and Kansas project line: ${ksCall}. Oklahoma City projects stay on ${okCall}.`,
    },
    {
      eyebrow: "Related work",
      title: "Walls next to other",
      titleAccent: "Wichita concrete.",
      content: [
        "<a href='/commercial-concrete-wichita'>Wichita commercial concrete</a> — the hub for parking, paving, curb, and site slabs that often sit above a wall.",
        "<a href='/industrial-concrete-wichita'>Wichita industrial concrete</a> — docks and yards where a wall holds the grade.",
        "<a href='/stamped-concrete-wichita'>Stamped concrete in Wichita</a> — decorative flatwork that sometimes lands on a retained grade.",
        "For the wall types FDZ already builds, see <a href='/retaining-walls-oklahoma-city'>retaining walls</a>. That page is Oklahoma City work, not a Wichita portfolio.",
      ],
    },
  ],
  specs: [
    { label: "Wall types", value: "Cast-in-place concrete or CMU on a reinforced footing" },
    { label: "Drainage", value: "Free-draining backfill with weep holes or a drain line behind the wall" },
    { label: "Reinforcement", value: "Placed to the wall plan, including grouted CMU cores when specified" },
    { label: "Concrete", value: "4,000 PSI for cast-in-place retaining walls" },
    { label: "Design", value: "Stamped engineering, when required, is provided by the project's engineer" },
    { label: "Backfill", value: "Placed in lifts after the wall has cured enough to take the load" },
  ],
  processEyebrow: "Sequence",
  processTitle: "From grade check to",
  processTitleAccent: "a drained wall.",
  processIntro:
    "A retaining wall project starts with the grades and the drainage, then the footing, then the wall. The face is the last thing that matters.",
  processSteps: [
    {
      title: "Grades and drawings",
      description:
        "Existing and proposed grades, and any engineered wall section, are reviewed before a construction date is set.",
    },
    {
      title: "Excavation and footing",
      description:
        "The footing is formed and poured to the section being built.",
    },
    {
      title: "Wall placement",
      description:
        "Poured concrete or block goes up with the reinforcement the plan shows.",
    },
    {
      title: "Drainage",
      description:
        "Gravel and the weep or drain system are installed before the soil comes back against the wall.",
    },
    {
      title: "Backfill",
      description:
        "Soil is returned in lifts once the wall can take it, and the top is graded to send water away.",
    },
  ],
  projectTypesEyebrow: "Use cases",
  projectTypesTitle: "Wall projects that fit",
  projectTypesTitleAccent: "this page.",
  projectTypesIntro:
    "Substantial retaining work in Wichita, not a landscaping catalog.",
  projectTypes: [
    {
      title: "Commercial grade walls",
      description: "Walls at the edge of a lot, a pad, or a service drive.",
    },
    {
      title: "Dock and yard separations",
      description: "Walls that hold a loading area above or below the yard.",
    },
    {
      title: "New installation",
      description: "A wall built with a footing and drainage as part of site concrete.",
    },
    {
      title: "Repair and rebuild",
      description: "Walls that have leaned, cracked, or lost their drainage.",
    },
  ],
  faqTitle: 'Questions About<br/><em class="h2-accent">Wichita Retaining Walls.</em>',
  faq: [
    {
      question: "What kind of retaining walls does FDZ build in Wichita?",
      answer:
        "Poured concrete walls and concrete masonry walls, including commercial site walls, plus repair of existing concrete walls. The emphasis is grade support and site walls, not small garden edging.",
    },
    {
      question: "Does FDZ engineer the wall?",
      answer:
        "No. When a wall needs stamped plans, those come from the project engineer. FDZ builds the wall and the drainage behind it to that plan.",
    },
    {
      question: "Do you repair retaining walls or only build new ones?",
      answer:
        "Both. The first step is to see why the wall moved. Some walls can be repaired. Walls with significant displacement are rebuilt.",
    },
    {
      question: "Why does drainage get mentioned with every wall?",
      answer:
        "Water trapped behind a wall is a common reason walls lean. FDZ includes a drainage path in the wall scope.",
    },
    {
      question: "Can a retaining wall be part of a parking lot or dock project?",
      answer:
        "Yes. Link the commercial or industrial page in your estimate notes so the wall and the flatwork are scoped together.",
    },
    {
      question: "How do I request a Wichita retaining wall estimate?",
      answer:
        "Call 316-531-9583 or use the estimate form. Send the address, approximate wall length and height, photos, and any drawings.",
    },
  ],
  serviceArea: {
    eyebrow: "Service area",
    title: "Wichita wall projects,",
    titleAccent: "served by a local crew.",
    introHtml:
      "Retaining wall requests on this page are for Wichita and nearby Sedgwick County sites. FDZ's Wichita-area concrete crew handles local wall projects, including walls tied to other site concrete.",
    footnoteHtml: `Kansas project line ${ksCall}. Oklahoma City line ${okCall}.`,
  },
  finalCta: {
    heading: "Need a retaining wall",
    headingAccent: "built or repaired?",
    description:
      "Send the Wichita address, wall length and height if you know them, and photos or drawings.",
    buttonLabel: "Request a Wall Estimate →",
  },
};

export const stampedConcreteWichita: WichitaPageContent = {
  path: "/stamped-concrete-wichita",
  metaTitle: "Stamped Concrete Contractor Wichita KS | FDZ Construction",
  metaDescription:
    "Stamped concrete contractor for Wichita, KS. Decorative patios, driveways, walkways, entries, and courtyards for homes and commercial sites. Call 316-531-9583.",
  h1: "Stamped Concrete Contractor in Wichita, Kansas",
  eyebrow: "Wichita, Kansas · Stamped & Decorative Concrete",
  title: "Stamped Concrete Contractor in",
  titleAccent: "Wichita, Kansas.",
  description: `Stamped and decorative concrete for Wichita patios, driveways, walkways, entries, and courtyards. Residential and commercial. Call ${ksCall}.`,
  modelNote:
    "FDZ's Wichita-area concrete crew handles stamped concrete work. Pattern and color are chosen for the specific project.",
  introText: `FDZ Construction LLC places stamped and decorative concrete for homes and commercial properties in Wichita. The work is flatwork with a patterned surface: patios, driveways, walkways, building entries, and courtyards. It is a separate service from structural site paving. A commercial lot belongs on the <a href="/commercial-concrete-wichita">Wichita commercial concrete</a> page; a decorative entry or courtyard that sits next to that lot belongs here. FDZ's Wichita-area concrete crew handles local projects; share the size and finish when requesting an estimate. Call ${ksCall}.`,
  ctaLabel: "Request a Stamped Estimate →",
  serviceSchema: {
    serviceType: "Stamped and decorative concrete",
    name: "Stamped Concrete Contractor in Wichita, Kansas",
    telephone: "+13165319583",
  },
  serviceCardsTitle: "Decorative Concrete for",
  serviceCardsTitleAccent: "Wichita Properties.",
  serviceCards: [
    {
      icon: "🏡",
      title: "Patios",
      description:
        "Backyard and courtyard slabs with a stamped surface, graded to drain away from the building.",
    },
    {
      icon: "🚗",
      title: "Driveways",
      description:
        "Decorative drives where the slab is still reinforced for vehicles and the pattern is applied at the surface.",
    },
    {
      icon: "🚶",
      title: "Walkways",
      description:
        "Walks from the drive to the door, or connecting patio areas, stamped as part of the same placement when the timing allows.",
    },
    {
      icon: "🚪",
      title: "Entries",
      description:
        "Commercial and residential entries where the first surface a visitor sees is decorative concrete.",
    },
    {
      icon: "🏛️",
      title: "Courtyards",
      description:
        "Enclosed or semi-enclosed decorative slabs at offices, restaurants, and homes.",
    },
    {
      icon: "🏢",
      title: "Commercial Decorative",
      description:
        "Stamped borders, plazas, and entry courts. Structural parking stays on the commercial page.",
    },
  ],
  subServices: {
    sectionEyebrow: "Applications",
    sectionTitle: "Where stamped concrete is the right surface",
    items: [
      {
        title: "Patios and outdoor rooms",
        bullets: [
          "Slabs for furniture, grills, and covered outdoor areas",
          "Slope set so water leaves the building",
          "A patterned finish applied while the concrete is still plastic",
        ],
      },
      {
        title: "Driveways and walks",
        bullets: [
          "Drives built as structural slabs first, with the stamp as the finish",
          "Walkways that can be placed with the drive or patio when the layout allows one pour",
          "Control joints planned so they work with the pattern instead of cutting through it at random",
        ],
      },
      {
        title: "Entries and courtyards",
        bullets: [
          "Front entries, side courts, and commercial arrival areas",
          "Can sit beside a plain broom-finish service area",
          "Commercial structural paving is quoted on the <a href='/commercial-concrete-wichita'>commercial page</a>",
        ],
      },
      {
        title: "Pattern and sealer",
        bullets: [
          "Pattern families FDZ already uses include ashlar slate, random flagstone, herringbone brick, and wood plank",
          "Color is selected per project. This page does not publish a color chart or a warranty term",
          "The surface is sealed after cure. Kansas freeze-thaw is a reason to keep that sealer in the plan",
        ],
      },
    ],
  },
  sections: [
    {
      eyebrow: "Residential and commercial",
      title: "Decorative concrete on",
      titleAccent: "both kinds of property.",
      content: [
        "Homeowners use stamped concrete for a patio or a drive they want to look like stone or brick without a unit-paver installation. Commercial owners use it at an entry, a courtyard, or a pedestrian plaza where appearance matters and the structural lot behind it can stay a broom finish. Both are in scope here. Project size, access, and finish choice guide the estimate and schedule.",
        "If the same property also needs a wall to create the flat area, include <a href='/retaining-walls-wichita'>retaining walls</a> in the request. If the property needs a parking field, that scope stays on the commercial page so the decorative work is not priced like a truck lot.",
      ],
    },
    {
      eyebrow: "Installation",
      title: "Stamping has a short",
      titleAccent: "window on pour day.",
      alt: true,
      content: [
        "The slab is prepared like any other exterior flatwork: compacted base, forms to grade, and reinforcement for the loads — cars on a drive, foot traffic on a patio. After placement, color hardener and a release agent go on while the surface is still plastic, and texture mats are pressed in before the concrete sets. That sequence cannot be paused for long. It is scheduled as one placement, not as a finish added days later.",
        "After cure, the release is washed off and a sealer is applied. Sealer is what keeps water and winter cycles from dulling the surface. FDZ does not publish a reseal interval on this page; that is discussed for the product used on the job.",
      ],
    },
    {
      eyebrow: "What we will not invent",
      title: "Patterns are chosen",
      titleAccent: "for the project.",
      content: [
        "FDZ's existing decorative work uses pattern families such as ashlar slate, random flagstone, herringbone brick, and wood plank. Those are examples of stamps the crew already runs, not a Wichita showroom list and not a promise that every pattern is in stock for every date. Color is part of the estimate conversation. There is no proprietary finish name and no project list of Wichita patios on this site.",
        "Company background for the same finish is on <a href='/patios-oklahoma-city'>patios and stamped concrete</a>. That page describes Oklahoma City work.",
      ],
      infoBlock: `Wichita and Kansas project line: ${ksCall}. Oklahoma City projects stay on ${okCall}.`,
    },
    {
      eyebrow: "Related work",
      title: "Decorative concrete next to",
      titleAccent: "the rest of the site.",
      content: [
        "<a href='/commercial-concrete-wichita'>Wichita commercial concrete</a> — the hub for parking, paving, curb, and structural site slabs.",
        "<a href='/retaining-walls-wichita'>Wichita retaining walls</a> — when a patio or entry needs a grade wall.",
        "<a href='/industrial-concrete-wichita'>Wichita industrial concrete</a> — not a decorative scope; linked so facility projects do not land on the wrong page.",
      ],
    },
  ],
  specs: [
    { label: "Base", value: "Compacted aggregate under exterior decorative slabs" },
    { label: "Concrete", value: "4,000 PSI flatwork, reinforced for the use (foot traffic or vehicles)" },
    { label: "Stamp timing", value: "Color, release, and mats applied while the surface is plastic" },
    { label: "Patterns", value: "Ashlar slate, random flagstone, herringbone brick, and wood plank are existing FDZ pattern families" },
    { label: "Joints", value: "Planned with the pattern layout" },
    { label: "Sealer", value: "Applied after cure; product chosen for that placement" },
  ],
  processEyebrow: "Sequence",
  processTitle: "From base prep to",
  processTitleAccent: "a sealed stamp.",
  processIntro:
    "Decorative concrete is ordinary flatwork until the surface is still workable. The stamp has to happen in that window.",
  processSteps: [
    {
      title: "Layout and base",
      description:
        "Forms are set to drain, and the aggregate base is compacted before concrete is ordered.",
    },
    {
      title: "Placement",
      description:
        "Concrete is placed and struck off level with the forms.",
    },
    {
      title: "Color and release",
      description:
        "Color hardener and release go down while the slab can still take them.",
    },
    {
      title: "Stamp",
      description:
        "Texture mats are pressed to the pattern selected for the project.",
    },
    {
      title: "Cure, wash, and seal",
      description:
        "The slab cures, the release is washed off, and sealer is applied.",
    },
  ],
  projectTypesEyebrow: "Use cases",
  projectTypesTitle: "Decorative projects",
  projectTypesTitleAccent: "in Wichita.",
  projectTypesIntro:
    "Residential and commercial decorative concrete. Structural industrial floors are a different page.",
  projectTypes: [
    {
      title: "Patios",
      description: "Stamped outdoor slabs at houses and small commercial courtyards.",
    },
    {
      title: "Driveways",
      description: "Vehicle slabs with a decorative surface and reinforcement under it.",
    },
    {
      title: "Walkways",
      description: "Pedestrian connections finished to match a patio or entry.",
    },
    {
      title: "Entries and courtyards",
      description: "Arrival areas where appearance is the point of the concrete.",
    },
  ],
  faqTitle: 'Questions About<br/><em class="h2-accent">Wichita Stamped Concrete.</em>',
  faq: [
    {
      question: "Do you stamp patios and driveways in Wichita?",
      answer:
        "Yes. Patios, driveways, walkways, entries, and courtyards are the applications this page covers, for houses and for commercial properties.",
    },
    {
      question: "Which stamp patterns are available?",
      answer:
        "Pattern families FDZ already uses include ashlar slate, random flagstone, herringbone brick, and wood plank. The pattern for a Wichita project is confirmed when the work is estimated. This page is not a color catalog.",
    },
    {
      question: "Is stamped concrete only residential?",
      answer:
        "No. Commercial entries, courtyards, and pedestrian areas are in scope. Parking lots and industrial slabs are quoted on the commercial and industrial pages.",
    },
    {
      question: "Why does sealing matter?",
      answer:
        "The patterned surface is sealed after cure so water and freeze-thaw cycles are less likely to dull it. A reseal schedule depends on the sealer used and is discussed for that job.",
    },
    {
      question: "Can a stamped patio include a retaining wall?",
      answer:
        "Yes, when the grade requires one. Note that on the estimate so the wall and the decorative slab are planned together.",
    },
    {
      question: "How do I request a stamped concrete estimate in Wichita?",
      answer:
        "Call 316-531-9583 or use the estimate form. Include the address, the areas to stamp, and any pattern direction you already have.",
    },
  ],
  serviceArea: {
    eyebrow: "Service area",
    title: "Wichita decorative concrete,",
    titleAccent: "served by a Wichita-area crew.",
    introHtml:
      "Stamped concrete on this page is for properties in Wichita and nearby Sedgwick County. FDZ's Wichita-area concrete crew handles these local projects. Pattern and timing are confirmed during estimating.",
    footnoteHtml: `Kansas project line ${ksCall}. Oklahoma City line ${okCall}.`,
  },
  finalCta: {
    heading: "Planning stamped concrete",
    headingAccent: "in Wichita?",
    description:
      "Send the address, which areas you want stamped, and any pattern direction with the estimate form.",
    buttonLabel: "Request a Stamped Estimate →",
  },
};

export const WICHITA_PAGES: WichitaPageContent[] = [
  commercialConcreteWichita,
  industrialConcreteWichita,
  retainingWallsWichita,
  stampedConcreteWichita,
];

export function getWichitaPage(path: string): WichitaPageContent | undefined {
  return WICHITA_PAGES.find((page) => page.path === path);
}
