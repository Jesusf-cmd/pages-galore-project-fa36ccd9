/** Shared repair-page copy used by React and prerender HTML. */

export interface RepairData {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1Lead: string;
  h1Accent: string;
  heroBlurbHtml: string;

  // problem-first intro
  problemTitle: string;
  problemAccent: string;
  problemHtml: string[];

  // repair vs replace diagnostic
  diagnosticTitle: string;
  diagnosticAccent: string;
  repairCases: string[];
  replaceCases: string[];

  // what we fix
  scopeBullets: { title: string; body: string }[];

  // process
  processTitle: string;
  processAccent: string;
  processSteps: { title: string; body: string }[];

  // pricing reality
  pricingHtml: string[];

  // FAQ
  faq: { question: string; answer: string }[];

  // related
  parentService: { label: string; to: string };
  related: { label: string; to: string }[];
}

export const repairPages: Record<string, RepairData> = {
  "driveway-repair-oklahoma-city": {
    path: "/driveway-repair-oklahoma-city",
    metaTitle: "Concrete Driveway Repair in Oklahoma City | FDZ Construction LLC",
    metaDescription:
      "Concrete driveway repair, leveling, joint sealing, and replacement in Oklahoma City. Honest repair-vs-replace evaluation. Free on-site estimate: (405) 458-4805.",
    eyebrow: "OKC Metro · Driveway Repair · Licensed & Insured",
    h1Lead: "Concrete Driveway Repair in",
    h1Accent: "Oklahoma City.",
    heroBlurbHtml:
      "Honest repair-vs-replace evaluation, joint sealing, leveling, and section replacement for <strong>Oklahoma City homeowners</strong> — across the full OKC metro. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Most Driveway Repairs Don't",
    problemAccent: "Solve the Real Problem.",
    problemHtml: [
      "<strong>Most quick driveway repairs we see — caulk over a crack, mudjacking under a sunken slab, surface patches — don't address the reason the driveway failed in the first place.</strong> The base moved. The drainage was wrong. The original joints weren't cut on time. The crack is the symptom; the cause is upstream.",
      "We do real repairs that solve real problems. That sometimes means joint sealing and section replacement. Sometimes it means slab leveling. And honestly — sometimes it means recommending replacement instead of repair, because the base is gone and a repair is throwing money at a slab that's going to fail again in two years.",
      "Every driveway repair we quote starts with a free on-site evaluation: what's the actual failure mode, is the base still sound, and what's the cheapest fix that will actually last. We give you the answer, even if it's not a job we end up doing. For the upstream causes, see <a href='/blog/why-concrete-driveways-crack-oklahoma' class='text-orange no-underline'>why concrete driveways crack in Oklahoma</a>.",
    ],
    diagnosticTitle: "Repair or Replace?",
    diagnosticAccent: "Here's How We Decide.",
    repairCases: [
      "Single isolated crack with no displacement — joint can be cleaned, filled, and sealed",
      "Settled or sunken section with a sound base around it — slab leveling is a candidate",
      "Spalling or scaling on the surface from de-icing salt or finish issues — resurfacing may work",
      "One panel of a multi-panel driveway has moved — replace just that panel, leave the rest",
      "Apron pulled away from the garage but the main slab is flat — apron-only replacement",
    ],
    replaceCases: [
      "Multiple cracks running in different directions across the slab — base is moving, repair won't stick",
      "Settled sections with no sound base around them — nothing to level against",
      "Slab tilting toward the house instead of away from it — drainage is wrong and repair won't fix that",
      "Visible heave from clay swelling — base has failed, slab needs to come out",
      "Driveway is more than ~20 years old and showing multiple failure modes — replacement is cheaper long-term",
    ],
    scopeBullets: [
      { title: "On-site evaluation", body: "Free, honest read on whether repair makes sense or replacement is the cheaper long-term answer. We tell you straight." },
      { title: "Joint sealing", body: "Clean, prep, and seal control joints and isolation joints with proper sealant. Stops water entry before it widens the crack." },
      { title: "Crack repair", body: "Routed, cleaned, and filled with structural epoxy or flexible sealant — depending on whether the crack is structural or movement." },
      { title: "Section replacement", body: "Saw-cut, remove, re-base, and re-pour individual panels where the rest of the slab is sound. Cheaper than full replacement when it works." },
      { title: "Apron replacement", body: "Pulled-away or cracked aprons replaced and tied properly to the existing slab and the garage or street." },
      { title: "Full replacement", body: "When repair isn't the right answer, we tear out, re-base properly, and pour a driveway built to last. See our <a href='/driveways-oklahoma-city' class='text-orange no-underline'>main driveway page</a>." },
    ],
    processTitle: "How a Driveway Repair",
    processAccent: "Actually Runs.",
    processSteps: [
      { title: "Evaluation", body: "We come out, walk the driveway, identify the failure mode, and give you an honest repair-vs-replace recommendation. Free." },
      { title: "Scope + quote", body: "Written scope with what we'll do, what we won't, and a fixed price. No surprises mid-job." },
      { title: "Prep + repair", body: "Sawcut, removal, base prep, or sealant work depending on the scope. Done to the same standards as a new pour." },
      { title: "Cure + handoff", body: "Joints sealed once cured. We walk the finished work with you before we leave." },
    ],
    pricingHtml: [
      "Driveway repair pricing varies more than new construction. Joint sealing on a typical residential driveway runs $300–$800. Single-panel replacement runs $400–$1,200 per panel depending on size and access. Apron replacement runs $1,500–$4,000. Full driveway tear-out and replacement follows our standard $6–$10 per square foot rate.",
      "When repair will cost more than 40–50% of replacement, replacement is almost always the better long-term answer — and we'll tell you so. Exact pricing after an on-site read.",
    ],
    faq: [
      {
        question: "Can a cracked concrete driveway actually be repaired, or does it always need replacement?",
        answer:
          "Depends on the crack and what caused it. A single isolated crack with no displacement can be cleaned and sealed. Multiple cracks running different directions usually mean the base is moving and repair won't last. We give an honest evaluation on site — repair when it makes sense, replacement when it doesn't.",
      },
      {
        question: "Is mudjacking or slab leveling a real fix?",
        answer:
          "It can be — when the slab settled but the surrounding base is sound. When the whole base has failed, leveling just gives you a flat slab on a bad base, and it sinks again. We evaluate the base before recommending leveling.",
      },
      {
        question: "How much does driveway repair cost in OKC?",
        answer:
          "Joint sealing on a typical residential driveway: $300–$800. Single-panel replacement: $400–$1,200. Apron replacement: $1,500–$4,000. Full replacement at standard $6–$10/sq ft. Exact pricing after we see the driveway.",
      },
      {
        question: "When is repair cheaper than replacement?",
        answer:
          "When the failure is isolated — one crack, one panel, an apron — and the rest of the slab and base is sound. When multiple failure modes are showing or the slab is 20+ years old, replacement is usually cheaper long-term.",
      },
      {
        question: "Will repair match the existing concrete color?",
        answer:
          "Section replacements and apron repairs will be visibly newer concrete that lightens over the first 12–18 months. Joint sealing and crack repair are largely invisible once cured. We're honest about the cosmetic outcome before the job starts.",
      },
      {
        question: "How long does a driveway repair last?",
        answer:
          "Depends on the failure cause being addressed. A joint sealing on a sound slab can last 5–10 years. A section replacement on a sound base can last decades. Repairs that don't address the underlying base or drainage issue typically fail again in 2–5 years.",
      },
    ],
    parentService: { label: "All Concrete Driveways", to: "/driveways-oklahoma-city" },
    related: [
      { label: "Commercial Concrete Repair", to: "/commercial-concrete-repair-oklahoma-city" },
      { label: "Foundation Repair", to: "/foundation-repair-oklahoma-city" },
      { label: "Why Oklahoma driveways crack", to: "/blog/why-concrete-driveways-crack-oklahoma" },
      { label: "Driveways in Edmond", to: "/driveways-edmond" },
      { label: "Driveways in Norman", to: "/driveways-norman" },
      { label: "Driveways in Yukon", to: "/driveways-yukon" },
      { label: "Driveways in Moore", to: "/driveways-moore" },
      { label: "Driveways in Mustang", to: "/driveways-mustang" },
    ],
  },

  "foundation-repair-oklahoma-city": {
    path: "/foundation-repair-oklahoma-city",
    metaTitle: "Foundation Repair Oklahoma City | Crack Repair | FDZ",
    metaDescription:
      "Foundation repair and foundation crack repair in Oklahoma City. On-site contractor evaluation of cracks, drainage, and concrete scope. (405) 458-4805.",
    eyebrow: "OKC Metro · Foundation Repair · Licensed & Insured",
    h1Lead: "Foundation Repair in",
    h1Accent: "Oklahoma City.",
    heroBlurbHtml:
      "Foundation repair and foundation crack repair for Oklahoma City homeowners and property owners — contractor evaluation of visible cracks, moisture involvement, and concrete scope. Share photos and crack location when you request a site visit. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Foundation Cracks Need",
    problemAccent: "Context, Not Guesswork.",
    problemHtml: [
      "<strong>Foundation crack repair in Oklahoma City starts with understanding what kind of crack you have — not every crack means the foundation is failing.</strong> Cracks can differ by location (slab, stem wall, garage, perimeter), pattern, whether they appear to be changing, moisture involvement, and surrounding site conditions. Visible conditions help determine the next contractor step; they do not replace a licensed structural or geotechnical evaluation when one is needed.",
      "Oklahoma City-area sites can include expansive or moisture-sensitive soils, and water at the perimeter may be associated with foundation movement — but soil type alone does not diagnose a specific problem. Localized concrete repair, partial replacement, or basement waterproofing discussion may be appropriate depending on conditions. Pier or underpinning systems are not an FDZ product offering; when that kind of structural work may be needed, evaluation by a foundation specialist or licensed design professional is the appropriate next step. FDZ provides contractor observation of the concrete scope; we are not a structural or geotechnical engineering firm.",
      "This page owns foundation-related cracks and foundation repair. Non-foundation commercial floor and slab cracks belong on <a href='/commercial-concrete-repair-oklahoma-city' class='text-orange no-underline'>commercial concrete repair</a>. Residential driveway cracks stay on <a href='/driveway-repair-oklahoma-city' class='text-orange no-underline'>driveway repair</a>. New foundation construction is on our <a href='/foundations-oklahoma-city' class='text-orange no-underline'>concrete foundations</a> page.",
      "FDZ also offers basement waterproofing as a related service when moisture intrusion is part of the request. Waterproofing does not automatically fix structural movement, and foundation repair does not automatically waterproof a basement. Specific waterproofing systems are not listed here because the exact method is scoped after an on-site look.",
    ],
    diagnosticTitle: "When Concrete Repair Scope",
    diagnosticAccent: "May Fit — And When It May Not.",
    repairCases: [
      "Hairline or isolated foundation cracks with no clear displacement — often candidates for evaluation and localized concrete repair rather than full replacement",
      "Foundation wall or slab cracks where moisture is visible at the crack — evaluation includes both concrete condition and observed water path",
      "Seasonal sticking doors or drywall cracks with no obvious slab tilt — may be associated with humidity, lumber movement, or site moisture conditions, not necessarily structural failure",
      "Localized foundation concrete deterioration where surrounding concrete appears sound — candidate for localized repair or partial section replacement after evaluation",
      "Perimeter water or grade concerns observed at the foundation — discussed as site context for the concrete scope, not as a structural diagnosis",
    ],
    replaceCases: [
      "Widespread cracking with visible displacement at multiple foundation locations — further evaluation by a design professional may be appropriate before concrete work",
      "Foundation cracks through brick or block with ongoing movement indicators — contractor concrete scope alone may not be enough; licensed structural evaluation may be needed",
      "Floor or slab conditions that appear significantly out of level with progressive change — may require design-professional involvement beyond patching",
      "Base or subgrade failure under a foundation section where localized repair would not restore support — partial or full replacement may be the honest concrete path",
      "Cases where pier, underpinning, or other structural stabilization systems may be involved — those are foundation-specialist / design-professional scopes, not FDZ product offerings",
    ],
    scopeBullets: [
      { title: "On-site foundation evaluation", body: "We walk the property, review crack location and pattern, note perimeter moisture/grade conditions, and explain what the concrete contractor scope can address — without diagnosing structural safety from a checklist." },
      { title: "Foundation crack repair", body: "Localized, condition-dependent repair of foundation-related cracks. Methods and materials are selected after evaluation — we do not advertise a fixed injection, stitching, or reinforcement product on this page. Sealing a crack is not the same as structural repair." },
      { title: "Drainage-related concrete/site scope", body: "Where water or grade at the foundation is part of what we observe, we discuss drainage-related concrete/site scope only when it applies to contracted work. We do not advertise specific drain systems, gutter products, or regrading packages here." },
      { title: "Partial slab / foundation section replacement", body: "Saw-cut, remove, re-base, and re-pour contained sections when failure is localized and replacement is the responsible concrete answer." },
      { title: "Basement waterproofing (related)", body: "Available when water intrusion is part of the request. Exact waterproofing systems are scoped on site and are not listed as a menu of membranes, sump pumps, coatings, or injection products on this page. Waterproofing does not fix structural movement by itself." },
      { title: "Design professional / specialist referral", body: "When visible conditions suggest pier systems, underpinning, structural stabilization, or geotechnical investigation may be needed, we refer to the appropriate licensed professional or foundation specialist. FDZ does not sell helical piers, push piers, or underpinning packages." },
      { title: "Full foundation replacement", body: "When the foundation is past responsible repair — tear-out and new foundation concrete per plans. See our <a href='/foundations-oklahoma-city' class='text-orange no-underline'>foundations construction page</a>." },
    ],
    processTitle: "How a Foundation Repair",
    processAccent: "Evaluation Runs.",
    processSteps: [
      { title: "Site visit (photos welcome)", body: "Photos and crack location notes help us prepare, but we do not promise a diagnosis from photographs alone. On site we review cracks, moisture involvement, and concrete conditions before quoting." },
      { title: "Honest next-step recommendation", body: "Foundation crack repair, partial replacement, waterproofing discussion where relevant, or referral for licensed structural/geotechnical or foundation-specialist evaluation — whichever fits the conditions." },
      { title: "Written scope + quote", body: "Fixed scope and price for the concrete and related work we will perform. We tell you what is covered and what is outside contractor scope." },
      { title: "Repair + walkthrough", body: "Work to the agreed scope. Afterward we walk the property with you and note what to watch for — without guaranteeing permanent structural stabilization." },
    ],
    pricingHtml: [
      "Foundation repair pricing depends on crack extent, access, moisture involvement, and whether localized concrete repair, partial replacement, or waterproofing discussion is in scope. Partial slab replacement costs more when excavation and re-base are required.",
      "We provide a written number after we walk the property. We will not quote pier or underpinning packages over the phone.",
    ],
    faq: [
      {
        question: "Do you repair foundation cracks in Oklahoma City?",
        answer:
          "Yes. Foundation crack repair is part of our foundation repair evaluation. We look at crack location, pattern, movement indicators, and moisture involvement, then recommend localized concrete repair, partial replacement, waterproofing discussion when relevant, or further licensed evaluation when appropriate. Photos help, but we do not diagnose from photos alone. We do not advertise a fixed crack-repair product method on this page.",
      },
      {
        question: "Does every foundation crack mean my foundation is failing?",
        answer:
          "No. Cracks can be associated with shrinkage, seasonal humidity and lumber movement, site moisture conditions, or more serious structural conditions. Pattern, changes over time, displacement, and surrounding conditions matter. FDZ provides contractor observation of the concrete scope — we do not determine structural safety from a webpage checklist or fixed crack-size rules.",
      },
      {
        question: "Is foundation crack repair the same as commercial slab crack repair?",
        answer:
          "No. This page covers foundation-related cracks. Generic commercial floor and site slab cracks belong on our commercial concrete repair page. Warehouse floor issues and parking-lot panel cracks have their own service pages.",
      },
      {
        question: "Do you offer basement waterproofing?",
        answer:
          "Yes. FDZ offers basement waterproofing as a related service when water intrusion is part of the request. Exact systems are scoped on site and are not advertised as a fixed product list here. Waterproofing does not replace structural repair when movement requires a design professional, and foundation repair does not automatically waterproof a basement.",
      },
      {
        question: "Do I need foundation piers?",
        answer:
          "Not automatically — and FDZ does not sell pier or underpinning packages. Many movement complaints involve localized concrete conditions first. When pier, helical, push-pier, or underpinning systems may be appropriate, that typically requires a foundation specialist or licensed structural/geotechnical evaluation. We refer rather than productize those systems.",
      },
      {
        question: "How much does foundation repair cost in Oklahoma City?",
        answer:
          "It depends on scope: crack repair, partial replacement, and any waterproofing discussion are priced after an on-site evaluation. Phone quotes for foundation work are not responsible — conditions vary too much by lot.",
      },
      {
        question: "How urgent is foundation repair?",
        answer:
          "It depends on what is changing and how fast. Active water at the foundation, progressive displacement, or worsening cracks deserve prompt evaluation. Stable hairline cracks with no displacement are often less urgent. We tell you what appears time-sensitive after the site visit — without fixed urgency thresholds.",
      },
    ],
    parentService: { label: "All Concrete Foundations", to: "/foundations-oklahoma-city" },
    related: [
      { label: "Concrete Foundations (New Construction)", to: "/foundations-oklahoma-city" },
      { label: "Commercial Concrete Repair", to: "/commercial-concrete-repair-oklahoma-city" },
      { label: "Driveway Repair", to: "/driveway-repair-oklahoma-city" },
      { label: "Soil Stabilization", to: "/soil-stabilization-oklahoma-city" },
      { label: "Retaining Walls", to: "/retaining-walls-oklahoma-city" },
      { label: "Foundations in Edmond", to: "/foundations-edmond" },
    ],
  },
};

export const REPAIR_SLUGS = Object.keys(repairPages);
