import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import InternalLinksHub from "@/components/InternalLinksHub";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const BASE = "https://fdzconstruction.com";

interface ServiceInCityData {
  // routing + SEO
  path: string;
  metaTitle: string;
  metaDescription: string;

  // headline
  eyebrow: string;
  h1Lead: string;
  h1Accent: string;
  heroBlurbHtml: string;

  // problem-first framing (AAF-pattern)
  problemTitle: string;
  problemAccent: string;
  problemHtml: string[];

  // city-specific soil / drainage / conditions
  localConditionsTitle: string;
  localConditionsAccent: string;
  localConditionsHtml: string[];

  // how FDZ builds it for this combo
  scopeBullets: { title: string; body: string }[];

  // mid-page CTA strip
  midCtaTitle: string;
  midCtaAccent: string;

  // FAQ
  faq: { question: string; answer: string }[];

  // related links shown at the bottom
  parentService: { label: string; to: string };
  parentCity: { label: string; to: string };
  siblings: { label: string; to: string }[];
}

const data: Record<string, ServiceInCityData> = {
  "driveways-edmond": {
    path: "/driveways-edmond",
    metaTitle: "Concrete Driveway Contractors in Edmond, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete driveway installation and replacement in Edmond, OK. Built for Edmond's mixed sandy and clay soil with proper base prep, 4,000 PSI mix, and rebar reinforcement. Free estimate: (405) 458-4805.",
    eyebrow: "Edmond, OK · Concrete Driveways · Licensed & Insured",
    h1Lead: "Concrete Driveway Contractors in",
    h1Accent: "Edmond, OK.",
    heroBlurbHtml:
      "New pours and full tear-out replacements for <strong>Edmond homeowners</strong> — built for Edmond's mixed sandy and clay soil and rolling grade. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Edmond Driveways Fail for Two",
    problemAccent: "Specific Reasons.",
    problemHtml: [
      "<strong>Edmond driveways crack and lift earlier than they should</strong> for two reasons we see again and again: contractors pour on the same flat-site assumptions used in central OKC, and they skip the deeper base work that Edmond's rolling, mixed soil needs.",
      "Edmond sits on the northern Garber-Wellington formation, where the underlying material carries more sandstone than the rest of the metro — so soil can shift between sandy and clay-heavy across a single lot. A driveway poured without checking that transition is set up to crack along the boundary within a few seasons.",
      "Add Edmond's more pronounced grade, and drainage becomes a second failure point. Water that pools at the garage apron — or runs across the slab without a graded slope — accelerates the swell-shrink cycle underneath. Most of the cracked Edmond driveways we tear out have one or both problems baked in from day one.",
    ],
    localConditionsTitle: "Edmond Soil, Grade,",
    localConditionsAccent: "& Drainage.",
    localConditionsHtml: [
      "Edmond's terrain has more rolling grade than much of the flat OKC metro, so two driveways on the same street can need very different base prep. Sandier sections need careful compaction so the base doesn't migrate; clay-heavy sections need depth and adequate aggregate so swell-shrink doesn't crack the slab.",
      "On rolling lots, we grade the apron and slab so water sheds away from the garage and the house — not toward them. On flatter Edmond lots near the older parts of town, we still pitch a minimum 1/8\" per foot away from structures. Drainage is the variable that decides whether the slab is still flat in 15 years.",
      "Every Edmond driveway we pour gets an on-site soil read before we quote depth or rebar layout — we don't assume a one-size answer from a satellite photo.",
    ],
    scopeBullets: [
      { title: "Tear-out & disposal", body: "Full removal of failed slab, haul-off included. We don't pour over a slab that's already moving." },
      { title: "Engineered base", body: "Excavated to grade, compacted native, then 4–6\" of compacted aggregate proof-rolled before any forms go in." },
      { title: "4,000 PSI mix with rebar", body: "Residential driveway standard for Edmond clay. Rebar on chairs at mid-depth, tied at intersections — not laid on the dirt." },
      { title: "Sloped for drainage", body: "Minimum 1/8\" per foot pitch away from the structure, plus apron transitions formed to shed water cleanly." },
      { title: "Sawcut joints within 24 hours", body: "Cut to 1/4 slab depth, spaced 8–12 feet. Cut on time, every time — the most common skipped step in cracked driveways we replace." },
      { title: "Edmond permit coordination", body: "We handle the City of Edmond permitting and right-of-way coordination for any tie-in to public street or sidewalk." },
    ],
    midCtaTitle: "Get a Free Edmond",
    midCtaAccent: "Driveway Estimate.",
    faq: [
      {
        question: "How long does a concrete driveway last in Edmond?",
        answer:
          "A properly built driveway in Edmond — engineered base, rebar, 4,000 PSI mix, drainage detailed — should last 30+ years. The variable that decides longevity is base prep and drainage, not the slab itself. Most of the failed Edmond driveways we replace are 10–15 years old, and the failure starts in the base.",
      },
      {
        question: "How thick should an Edmond driveway be?",
        answer:
          "4 inches for standard passenger vehicles on properly prepared base. We bump to 5 inches when the soil read shows more aggressive clay or when the homeowner has a truck, RV, or boat trailer. Thickness only helps if the base is right — a 6-inch slab on bad base fails before a 4-inch slab on good base.",
      },
      {
        question: "Do I need a permit for a driveway in Edmond?",
        answer:
          "Any tie-in to a public street or city right-of-way requires a City of Edmond permit. Private driveway work entirely on your own property typically does not, but we confirm per project — and we handle the permit paperwork when one is needed.",
      },
      {
        question: "How much does a concrete driveway cost in Edmond?",
        answer:
          "Edmond driveways follow our OKC metro rates: roughly $6–$10 per square foot installed, with tear-out of an existing slab adding to the total. A typical 24×40 Edmond driveway runs $5,760–$9,600. We give an exact price after an on-site read of soil and grade — never over the phone.",
      },
      {
        question: "Can you pour a driveway year-round in Edmond?",
        answer:
          "Yes, with proper hot-weather and cold-weather protocols — early-morning pours and evaporation retarders in summer, heated water and insulated blankets in winter. Fall is the easiest window, but the right protocols make year-round work feasible.",
      },
    ],
    parentService: { label: "All Concrete Driveways", to: "/driveways-oklahoma-city" },
    parentCity: { label: "All Edmond Concrete Services", to: "/edmond-concrete" },
    siblings: [
      { label: "Foundations in Edmond", to: "/foundations-edmond" },
      { label: "Retaining Walls in Edmond", to: "/retaining-walls-edmond" },
      { label: "Driveways in Norman", to: "/driveways-norman" },
      { label: "Driveways in Yukon", to: "/driveways-yukon" },
    ],
  },

  "driveways-norman": {
    path: "/driveways-norman",
    metaTitle: "Concrete Driveway Contractors in Norman, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete driveway installation and replacement in Norman, OK. Built for Norman's mixed river-influenced soil with proper base prep and rebar reinforcement. Free estimate: (405) 458-4805.",
    eyebrow: "Norman, OK · Concrete Driveways · Licensed & Insured",
    h1Lead: "Concrete Driveway Contractors in",
    h1Accent: "Norman, OK.",
    heroBlurbHtml:
      "New pours and full replacements for <strong>Norman homeowners</strong> — built for Cleveland County's river-influenced soil and the Canadian River corridor's variable drainage. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Norman Driveways Need a Soil Read",
    problemAccent: "Not a Template.",
    problemHtml: [
      "<strong>Norman is the lot-by-lot soil city of the OKC metro.</strong> The Canadian River corridor means some Norman lots sit on sandier, river-influenced soil — and the same lot can transition to denser clay within a short distance. A driveway poured to a one-size spec is set up to crack along the soil boundary.",
      "We see this constantly on east-Norman properties near the river and in older Norman neighborhoods where original grading mixed native and imported soils. The driveway looks fine at year three. By year eight, a hairline crack opens along the transition. By year fifteen, that hairline is a 1/2\" displacement.",
      "The fix is upstream: read the soil before you pour, depth and reinforce the base appropriately for the section you're on, and detail the drainage for the actual lot grade. We do that on every Norman pour — no exceptions.",
    ],
    localConditionsTitle: "Norman Soil &",
    localConditionsAccent: "Canadian River Drainage.",
    localConditionsHtml: [
      "Norman's spot along the Canadian River makes its soil profile less uniform than most of the metro. Sandier river-influenced sections compact differently than the denser clay you find a quarter-mile away, so the base prep call changes by lot, not by neighborhood.",
      "Drainage gets a similar dual-personality treatment. Some Norman lots have natural slope toward the river that helps shed water; others sit in low ground where standing water at the slab edge is the long-term killer. We grade every Norman driveway so water moves away from the house and the garage apron — and we cut control joints early enough that the inevitable shrinkage cracks land where we want them, not across the middle of the slab.",
      "On older Norman lots, we also check for prior repair work, fill, or buried debris before we excavate. It's not always visible from the surface.",
    ],
    scopeBullets: [
      { title: "Site soil read", body: "On-site evaluation of sandy vs. clay sections so the base depth and reinforcement match the actual lot." },
      { title: "Tear-out & disposal", body: "Full removal of the existing slab and any failed base — pouring over moving substrate is a guaranteed do-over." },
      { title: "Engineered base", body: "Excavated to grade, compacted native, then 4–6\" of aggregate compacted in lifts and proof-rolled." },
      { title: "4,000 PSI mix with rebar", body: "Residential standard for Norman driveways. Rebar on chairs at mid-depth, tied at intersections." },
      { title: "Drainage detailing", body: "Slope-to-drain pitch from house and garage; apron transitions formed to shed water cleanly." },
      { title: "Permit & inspection coordination", body: "We coordinate with the City of Norman for any tie-in to public street or right-of-way." },
    ],
    midCtaTitle: "Get a Free Norman",
    midCtaAccent: "Driveway Estimate.",
    faq: [
      {
        question: "Why does Norman need a different driveway spec than OKC?",
        answer:
          "Norman's mix of river-influenced sandy soil and denser clay — sometimes on the same lot — means a flat metro spec leaves crack-prone transitions in the base. We adjust base depth, compaction, and reinforcement to the actual soil read, not a generic spec.",
      },
      {
        question: "How thick should a Norman driveway be?",
        answer:
          "4 inches for standard passenger vehicles on properly prepared base, 5+ inches if the soil read shows aggressive clay or you'll park trucks, RVs, or trailers. Thickness only matters if the base is right — most failed Norman driveways we replace failed at the base, not the slab.",
      },
      {
        question: "How long does a concrete driveway last in Norman?",
        answer:
          "30+ years with engineered base, rebar, and drainage detailed. The driveways that fail by year 10–15 almost always have a base problem or a drainage problem (or both) that was set on day one.",
      },
      {
        question: "How much does a concrete driveway cost in Norman?",
        answer:
          "Norman pricing follows our OKC metro rates: roughly $6–$10 per square foot installed, with tear-out adding to the total. A 24×40 Norman driveway typically runs $5,760–$9,600 — exact pricing after an on-site read.",
      },
      {
        question: "Do you handle driveway tie-ins to Norman public streets?",
        answer:
          "Yes — including the City of Norman permit, right-of-way coordination, and any required inspection. We handle the paperwork; you don't manage it.",
      },
    ],
    parentService: { label: "All Concrete Driveways", to: "/driveways-oklahoma-city" },
    parentCity: { label: "All Norman Concrete Services", to: "/norman-ok-concrete" },
    siblings: [
      { label: "Patios in Norman", to: "/patios-norman" },
      { label: "Driveways in Edmond", to: "/driveways-edmond" },
      { label: "Driveways in Yukon", to: "/driveways-yukon" },
    ],
  },

  "driveways-yukon": {
    path: "/driveways-yukon",
    metaTitle: "Concrete Driveway Contractors in Yukon, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete driveway installation and replacement in Yukon, OK. Built for Canadian County's clay base and new-subdivision graded fill. Free estimate: (405) 458-4805.",
    eyebrow: "Yukon, OK · Concrete Driveways · Licensed & Insured",
    h1Lead: "Concrete Driveway Contractors in",
    h1Accent: "Yukon, OK.",
    heroBlurbHtml:
      "Driveway pours and replacements for <strong>Yukon homeowners</strong> — built for Canadian County's expansive clay and the compaction quality of newer-subdivision graded fill. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Yukon's Real Driveway Risk:",
    problemAccent: "What's Under the Slab.",
    problemHtml: [
      "<strong>Most Yukon driveway failures we see are fill-and-compaction failures, not concrete failures.</strong> A lot of the Yukon work we do is in newer subdivisions built on graded former agricultural land — and the quality of the fill and compaction done during the original grading matters as much as the native clay underneath.",
      "When original grading was rushed or poorly compacted, the slab sits on a base that settles unevenly for the first several years. The driveway can look perfect on move-in day and develop a 1/4\" step or a diagonal crack by year three. That's the fill settling — not the concrete.",
      "We check compaction on every Yukon pour before we form. If the existing base isn't ready, we re-prep it. It adds a day to the schedule and saves a decade of headaches.",
    ],
    localConditionsTitle: "Yukon Subdivisions, Fill,",
    localConditionsAccent: "& the Clay Underneath.",
    localConditionsHtml: [
      "Yukon's terrain is flatter than Edmond's — so grade and drainage are simpler — but the base prep call gets more complicated because of how much of the city sits on relatively recent graded fill from subdivision development.",
      "On these lots, we proof-roll the existing base before adding aggregate, and we look for soft spots that indicate poor original compaction. Where we find them, we excavate and re-base. The native clay under the fill is the same Permian-age expansive clay found across the region, so once we're past the fill question, the standard OKC base-prep protocol applies.",
      "On older Yukon properties — pre-subdivision builds — the soil profile is more predictable and the driveway spec is closer to what we'd pour in central OKC.",
    ],
    scopeBullets: [
      { title: "Compaction check", body: "Proof-roll the existing base and look for soft spots from poor original subdivision grading before any new aggregate goes in." },
      { title: "Re-base where needed", body: "Excavate and re-prep where original fill compaction failed — the only way to avoid year-three settlement cracks." },
      { title: "Tear-out & disposal", body: "Full removal of failed slabs, hauled off-site. We don't pour over a moving substrate." },
      { title: "Engineered base", body: "4–6\" of compacted aggregate on a proven subgrade, proof-rolled before forms." },
      { title: "4,000 PSI mix with rebar", body: "Residential standard for Yukon clay. Rebar on chairs at mid-depth, tied at intersections." },
      { title: "Joint timing & sealing", body: "Sawcut within 24 hours, sealed once cured. Skipped or late joints crack where they want, not where we want." },
    ],
    midCtaTitle: "Get a Free Yukon",
    midCtaAccent: "Driveway Estimate.",
    faq: [
      {
        question: "Why do new-subdivision Yukon driveways crack so early?",
        answer:
          "Almost always because the fill from the original subdivision grading wasn't compacted properly. The slab sits on a base that settles unevenly for years — by year three or four, you see a step or a diagonal crack. We proof-roll the base on every Yukon pour and re-prep when needed.",
      },
      {
        question: "How thick should a Yukon driveway be?",
        answer:
          "4 inches on properly prepared base for standard vehicles. We go to 5 inches when the base is questionable or when the homeowner has trucks, RVs, or trailers. Thickness can't compensate for a bad base — base quality decides longevity.",
      },
      {
        question: "Do you tear out an existing slab and start over?",
        answer:
          "Yes — and on most failed Yukon driveways, that's the right call. Pouring over an already-moving base just gives you a thicker version of the same problem. We tear out, re-base, and pour properly.",
      },
      {
        question: "How much does a concrete driveway cost in Yukon?",
        answer:
          "Yukon driveways follow our OKC metro rates: roughly $6–$10 per square foot installed. A 24×40 driveway typically runs $5,760–$9,600, with tear-out and any required re-base adding to the total. Exact pricing after an on-site read.",
      },
      {
        question: "Can you pour a driveway year-round in Yukon?",
        answer:
          "Yes — with hot-weather protocols (early pours, evaporation retarders) in summer and cold-weather protocols (heated water, insulated blankets) in winter. Fall is the easiest window but year-round work is feasible.",
      },
    ],
    parentService: { label: "All Concrete Driveways", to: "/driveways-oklahoma-city" },
    parentCity: { label: "All Yukon Concrete Services", to: "/yukon-oklahoma-concrete" },
    siblings: [
      { label: "Driveways in Edmond", to: "/driveways-edmond" },
      { label: "Driveways in Norman", to: "/driveways-norman" },
    ],
  },

  "foundations-edmond": {
    path: "/foundations-edmond",
    metaTitle: "Concrete Foundation Contractors in Edmond, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete foundation contractors in Edmond, OK — slab-on-grade, stem walls, pier-and-thickened-slab on fill lots. Engineered for Edmond's mixed soil. Free estimate: (405) 458-4805.",
    eyebrow: "Edmond, OK · Concrete Foundations · Licensed & Insured",
    h1Lead: "Concrete Foundation Contractors in",
    h1Accent: "Edmond, OK.",
    heroBlurbHtml:
      "Slab-on-grade, stem wall, and pier-and-thickened-slab foundations for <strong>Edmond homeowners and builders</strong> — engineered for Edmond's mixed soil and rolling grade. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Edmond Fill Lots Need Pier Foundations —",
    problemAccent: "Not Slab-on-Fill.",
    problemHtml: [
      "<strong>Edmond's rolling terrain means many new lots required fill to level the grade.</strong> Pouring a standard slab-on-grade on top of that fill is a setup for differential settlement — the slab cracks within a few years as the fill compresses unevenly underneath.",
      "We just completed a pier-and-thickened-slab foundation on exactly this kind of lot in Edmond. Rather than pour on the fill, we drilled piers 5 feet deep to undisturbed soil and tied a thickened slab to the pier system. That foundation will outlast the house.",
      "Slab-on-grade still works in plenty of Edmond — on lots with undisturbed native soil and stable grade. The job is knowing the difference before the truck shows up. We read the lot, the fill depth, and the soil transition first, then spec the foundation type.",
    ],
    localConditionsTitle: "Edmond Soil, Fill,",
    localConditionsAccent: "& Foundation Type.",
    localConditionsHtml: [
      "Edmond sits on the northern Garber-Wellington formation with sandstone-influenced soil that can shift between sandy and clay-heavy across a single lot. Add the city's rolling grade and the prevalence of cut-and-fill lot prep, and the foundation-type decision becomes site-specific.",
      "For undisturbed native lots, slab-on-grade with engineered base, rebar, and proper drainage performs well long-term. For fill lots, deeper foundations are the right call — piers to undisturbed soil, thickened slabs tied to the piers, or stem walls with proper backfill compaction.",
      "On any Edmond foundation, drainage gets the same attention as the slab. Water that pools next to a slab edge accelerates the expansion-contraction cycle underneath, and that's a major cause of foundation movement we see in older Edmond homes.",
    ],
    scopeBullets: [
      { title: "Lot evaluation first", body: "Soil read, fill assessment, drainage check — before we spec the foundation type. Every Edmond lot is different." },
      { title: "Slab-on-grade where appropriate", body: "Engineered base, 4,000 PSI mix, rebar per spec, drainage detailing — for lots with undisturbed soil and stable grade." },
      { title: "Pier-and-thickened-slab", body: "Piers drilled to undisturbed soil — typically 4–6 ft on Edmond fill lots — with the slab tied to the pier system." },
      { title: "Stem wall foundations", body: "Footings to bearing soil, stem walls poured to grade, compacted backfill in lifts where appropriate to the build." },
      { title: "Drainage detailing", body: "Slope-to-drain around the foundation perimeter; French drains where the lot grade requires them." },
      { title: "Builder coordination", body: "Schedule with framers, plumbing, and inspectors on new-construction Edmond builds — we coordinate with the GC's timeline." },
    ],
    midCtaTitle: "Get a Free Edmond",
    midCtaAccent: "Foundation Estimate.",
    faq: [
      {
        question: "How do I know if my Edmond lot needs a pier foundation?",
        answer:
          "If the lot required fill to level the grade — common on Edmond's rolling terrain — pouring slab-on-grade on top of that fill risks differential settlement. We read the lot first: how deep is the fill, what's the native soil underneath, and how was the original grading done. Pier-and-thickened-slab is the right call on most Edmond fill lots.",
      },
      {
        question: "How deep are the piers on an Edmond foundation?",
        answer:
          "Typically 4–6 feet to reach undisturbed soil below the fill, depending on fill depth. We don't pick a number first — we drill to undisturbed soil and stop there.",
      },
      {
        question: "How much does a foundation cost in Edmond?",
        answer:
          "Edmond foundations follow our OKC metro rates: roughly $9–$14 per square foot for standard slab-on-grade, with pier-and-thickened-slab and stem walls priced per the engineered spec and lot conditions. We give a real number after we read the lot — never over the phone.",
      },
      {
        question: "Do you work with new-construction builders in Edmond?",
        answer:
          "Yes. We coordinate with the GC on schedule, with the framer on tie-in details, and with inspectors on each required stage. Most of our Edmond foundation work is on new-construction lots.",
      },
      {
        question: "How long does an Edmond foundation last?",
        answer:
          "A foundation engineered for the actual lot conditions — right type, right base, right drainage — should outlast the structure on top of it. The foundations that fail in Edmond almost always had the wrong type chosen for the soil and fill conditions, or had inadequate drainage.",
      },
    ],
    parentService: { label: "All Concrete Foundations", to: "/foundations-oklahoma-city" },
    parentCity: { label: "All Edmond Concrete Services", to: "/edmond-concrete" },
    siblings: [
      { label: "Driveways in Edmond", to: "/driveways-edmond" },
      { label: "Retaining Walls in Edmond", to: "/retaining-walls-edmond" },
    ],
  },

  "retaining-walls-edmond": {
    path: "/retaining-walls-edmond",
    metaTitle: "Retaining Wall Contractors in Edmond, OK | FDZ Construction LLC",
    metaDescription:
      "Poured concrete and CMU retaining walls in Edmond, OK — drainage-first design for Edmond's rolling terrain and mixed soil. Repairs included. Free estimate: (405) 458-4805.",
    eyebrow: "Edmond, OK · Retaining Walls · Licensed & Insured",
    h1Lead: "Retaining Wall Contractors in",
    h1Accent: "Edmond, OK.",
    heroBlurbHtml:
      "Poured concrete and CMU retaining walls for <strong>Edmond homeowners</strong> — drainage-first design for Edmond's rolling terrain and mixed soil profile. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Edmond Retaining Walls Fail at the",
    problemAccent: "Drainage — Not the Wall.",
    problemHtml: [
      "<strong>Almost every leaning Edmond retaining wall we evaluate is a drainage failure, not a material failure.</strong> The wall itself is usually still structurally sound. What broke is the gravel backfill, the weep holes, or the French drain — and the hydrostatic pressure from trapped water finally pushed the wall over.",
      "Edmond's rolling grade makes drainage harder, not easier. More slope means more runoff hitting the wall from above. More elevation change means a higher chance of trapped saturated soil behind it. A wall built without an engineered drainage plan in Edmond is on a clock.",
      "When we build or rebuild a wall in Edmond, the drainage plan comes first — gravel backfill zone, weep hole placement, French drain routing. Then the wall is sized to those conditions. Reverse the order and you get a leaning wall in five years.",
    ],
    localConditionsTitle: "Edmond Slope, Soil,",
    localConditionsAccent: "& Hydrostatic Pressure.",
    localConditionsHtml: [
      "Edmond's mix of sandy and clay-heavy soil makes lateral pressure on retaining walls less predictable than on uniform-clay lots elsewhere in the metro. Sandy sections drain more freely; clay sections trap water and load up the wall during wet seasons.",
      "On a rolling Edmond lot, that translates to a wall that sees variable pressure across its length — and that's exactly where the leaning starts. The clay-soil section pushes harder and faster than the sandy section, and the wall twists rather than uniformly leans.",
      "The solution is uniform, engineered drainage across the entire wall, not just where it looks needed. Gravel backfill the full length, weep holes spaced per the wall height, and a French drain routed to daylight. That's the wall that lasts.",
    ],
    scopeBullets: [
      { title: "Site evaluation", body: "Slope, soil read, drainage patterns, and what the wall actually needs to hold back — before we spec wall type or height." },
      { title: "Drainage plan first", body: "Gravel backfill depth, weep hole placement, French drain routing. Planned before construction starts, not added as an afterthought." },
      { title: "Footing sized to wall + soil", body: "Below frost line, sized to wall height and soil bearing capacity. The footing is where wall longevity is decided." },
      { title: "Poured concrete or CMU", body: "Monolithic poured concrete for taller walls and severe soil movement; CMU for mid-height walls where load and height allow." },
      { title: "Backfill in lifts", body: "Compacted in lifts to avoid point-loading against the new wall. Skipping this step bows fresh walls before the concrete cures." },
      { title: "Repair & stabilization", body: "Leaning wall? We evaluate cause first. Drainage correction is almost always part of the fix, not just rebuilding the wall." },
    ],
    midCtaTitle: "Get a Free Edmond",
    midCtaAccent: "Retaining Wall Estimate.",
    faq: [
      {
        question: "Why are Edmond retaining walls more failure-prone than central OKC?",
        answer:
          "Two reasons: more grade means more runoff hitting the wall, and the mixed sandy-and-clay soil profile creates variable lateral pressure across the wall's length. The result is walls that don't lean uniformly — they twist. The fix is uniform engineered drainage across the entire wall.",
      },
      {
        question: "How tall can a retaining wall be in Edmond before it needs an engineer?",
        answer:
          "City of Edmond requirements vary, but walls over 4 feet typically require an engineer's stamp. We confirm the specific requirement for your project location before work begins.",
      },
      {
        question: "Can you repair a leaning Edmond wall, or does it need to be replaced?",
        answer:
          "Depends on how far it's leaned and what caused it. Minor lean with a fixable drainage issue can often be stabilized and re-drained. Significant displacement usually requires a rebuild — and if we rebuild, we fix the drainage that caused the original failure.",
      },
      {
        question: "How much does a retaining wall cost in Edmond?",
        answer:
          "Cost depends on wall height and length, material (poured concrete vs. CMU), drainage requirements, soil conditions, and whether engineering is required. We provide free on-site estimates with a clear scope after we read the lot — no phone quotes.",
      },
      {
        question: "How long does a properly built Edmond retaining wall last?",
        answer:
          "50+ years with adequate drainage. Drainage is the variable. A well-drained Edmond wall outlasts a poorly drained one by decades, regardless of material.",
      },
    ],
    parentService: { label: "All Retaining Walls", to: "/retaining-walls-oklahoma-city" },
    parentCity: { label: "All Edmond Concrete Services", to: "/edmond-concrete" },
    siblings: [
      { label: "Foundations in Edmond", to: "/foundations-edmond" },
      { label: "Driveways in Edmond", to: "/driveways-edmond" },
    ],
  },

  "patios-norman": {
    path: "/patios-norman",
    metaTitle: "Concrete Patio Contractors in Norman, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete patios, slabs, and stamped concrete in Norman, OK. Built for Norman's river-influenced soil with proper drainage and reinforcement. Free estimate: (405) 458-4805.",
    eyebrow: "Norman, OK · Concrete Patios · Licensed & Insured",
    h1Lead: "Concrete Patio Contractors in",
    h1Accent: "Norman, OK.",
    heroBlurbHtml:
      "Patios, garage slabs, and stamped concrete for <strong>Norman homeowners</strong> — built for Cleveland County's variable soil and the Canadian River corridor's drainage needs. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Norman Patios Fail at the",
    problemAccent: "Slab-House Joint.",
    problemHtml: [
      "<strong>The most common Norman patio failure we see is the slab pulling away from the house</strong> — sometimes a hairline, sometimes a 1/2\" gap that water runs into. It's almost always two things: missing or wrong reinforcement, and missing drainage detailing where the slab meets the foundation.",
      "Norman's mixed sandy-and-clay soil amplifies the problem. The clay-heavy section swells and shrinks aggressively; the sandier section moves less. The patio twists differentially across its footprint and lifts away from the house wall at the worst point.",
      "The fix is engineered reinforcement sized for actual conditions, a properly graded slope, and a sealed isolation joint at the house wall. We pour Norman patios that stay tight to the house for the life of the slab.",
    ],
    localConditionsTitle: "Norman Soil, Drainage,",
    localConditionsAccent: "& Patio Spec.",
    localConditionsHtml: [
      "Norman patios share the same lot-by-lot soil variability that drives our driveway approach in the city. Sandier river-influenced lots and denser-clay sections — sometimes on the same property — make a generic patio spec a long-term risk.",
      "Drainage gets specific attention on Norman patios because most are built right against the house. Standing water at the slab-house joint accelerates everything bad: foundation moisture, soil swelling, slab lift, and ultimately a gap that lets more water in. We grade every Norman patio to slope cleanly away from the house at a minimum 1/8\" per foot.",
      "On stamped patios, the same rules apply — base, reinforcement, drainage. The decorative finish is the last 10% of the job; the first 90% is what makes the patio last.",
    ],
    scopeBullets: [
      { title: "Site soil read", body: "On-site evaluation of sandy vs. clay sections so the base and reinforcement match the actual lot." },
      { title: "Engineered base", body: "Excavated to grade, compacted, then 4\" of aggregate base compacted in lifts before forms." },
      { title: "4,000 PSI mix with rebar", body: "Residential standard for Norman patios. Rebar on chairs at mid-depth, tied at intersections — not wire mesh." },
      { title: "Slope away from house", body: "Minimum 1/8\" per foot pitch away from the foundation, plus a sealed isolation joint where the slab meets the house." },
      { title: "Joint timing", body: "Sawcut control joints within 24 hours, spaced 8–12 feet. Cut on time, sealed once cured." },
      { title: "Stamped finishes", body: "Pattern, integral color, and antique release applied on site. Sealed once cured. Stamped, not just textured." },
    ],
    midCtaTitle: "Get a Free Norman",
    midCtaAccent: "Patio Estimate.",
    faq: [
      {
        question: "Why do Norman patios pull away from the house?",
        answer:
          "Almost always a combination of inadequate reinforcement and missing drainage detailing at the slab-house joint. Norman's mixed soil makes differential movement worse — the slab twists and lifts away from the foundation. We fix this with proper rebar sizing, slope to drain, and a sealed isolation joint at the house wall.",
      },
      {
        question: "Should I use rebar or wire mesh for a Norman patio?",
        answer:
          "Rebar. Wire mesh controls shrinkage cracking and holds pieces together if the slab cracks — it doesn't add structural strength. On Norman's clay-influenced soil, rebar's tensile strength is what resists the soil movement pushing up against the slab.",
      },
      {
        question: "How thick should a Norman patio be?",
        answer:
          "4 inches on properly prepared base is standard for residential patios. We bump to 5 inches if the lot has more aggressive clay or the patio will see heavier loads (outdoor kitchen, hot tub, vehicle parking).",
      },
      {
        question: "How much does a stamped concrete patio cost in Norman?",
        answer:
          "Stamped concrete runs about $15–$22 per square foot installed in the Norman market. A 400 sq ft stamped patio typically runs $6,000–$8,800. Standard broom-finish patios run lower at $6–$10 per sq ft. Exact pricing after an on-site read.",
      },
      {
        question: "Can you tie a new patio into existing concrete?",
        answer:
          "Yes — with proper isolation joints between the old and new pours so they can move independently. Bonding new concrete directly to old without an isolation joint guarantees a crack at the seam within a few seasons.",
      },
    ],
    parentService: { label: "All Patios & Stamped Concrete", to: "/patios-oklahoma-city" },
    parentCity: { label: "All Norman Concrete Services", to: "/norman-ok-concrete" },
    siblings: [
      { label: "Driveways in Norman", to: "/driveways-norman" },
      { label: "Foundations in Norman", to: "/foundations-norman" },
      { label: "Retaining Walls in Norman", to: "/retaining-walls-norman" },
      { label: "Patios in Edmond", to: "/patios-edmond" },
    ],
  },

  "patios-edmond": {
    path: "/patios-edmond",
    metaTitle: "Concrete Patio Contractors in Edmond, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete patios, slabs, and stamped concrete in Edmond, OK. Built for Edmond's mixed soil and rolling grade with proper drainage. Free estimate: (405) 458-4805.",
    eyebrow: "Edmond, OK · Concrete Patios · Licensed & Insured",
    h1Lead: "Concrete Patio Contractors in",
    h1Accent: "Edmond, OK.",
    heroBlurbHtml:
      "Patios, garage slabs, and stamped concrete for <strong>Edmond homeowners</strong> — built for Edmond's rolling grade and the mixed soil that decides how long a slab actually lasts. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Edmond Patios Fail at the",
    problemAccent: "Grade Transition.",
    problemHtml: [
      "<strong>The Edmond patios we tear out almost always failed at the grade transition</strong> — the point where the slab meets the slope of the lot. A flat-spec patio on a rolling Edmond lot leaves an edge sitting on a base that washes out within a few seasons, and the slab follows.",
      "The other common failure is the slab-house joint. Edmond's mixed sandy-and-clay soil makes the differential movement worse — the slab twists across its footprint and lifts away from the house at the worst point, opening a gap that lets water in and accelerates the next round of damage.",
      "Both failures are upstream. A patio detailed for Edmond's actual grade and soil — with rebar sized for soil movement, a graded slope away from the house, and a sealed isolation joint at the foundation — stays tight to the house for the life of the slab.",
    ],
    localConditionsTitle: "Edmond Grade, Soil,",
    localConditionsAccent: "& Patio Spec.",
    localConditionsHtml: [
      "Edmond's rolling grade means a patio on the north side of a lot can need a different base prep than one on the south side. Sandier sections need careful compaction so the base doesn't migrate; clay sections need depth and adequate aggregate so swell-shrink doesn't crack the slab.",
      "For patios near the house wall — which is most patios — drainage is the variable that decides longevity. Standing water at the slab-house joint accelerates foundation moisture, soil swelling, slab lift, and eventually a separated joint. We grade every Edmond patio to slope cleanly away from the house at a minimum 1/8\" per foot.",
      "On stamped patios, the same rules apply. The decorative finish is the last 10% of the job; base, reinforcement, and drainage are the 90% that make the patio still look good a decade later.",
    ],
    scopeBullets: [
      { title: "Site soil + grade read", body: "On-site evaluation of sandy vs. clay sections and lot slope so the base and rebar match the actual conditions." },
      { title: "Engineered base", body: "Excavated to grade, compacted, then 4\" of aggregate base compacted in lifts before forms go in." },
      { title: "4,000 PSI mix with rebar", body: "Residential standard for Edmond patios. Rebar on chairs at mid-depth, tied at intersections — not wire mesh." },
      { title: "Slope away from house", body: "Minimum 1/8\" per foot pitch away from the foundation, plus a sealed isolation joint where the slab meets the house wall." },
      { title: "Joint timing", body: "Sawcut control joints within 24 hours, spaced 8–12 feet. Cut on time, sealed once cured — the most-skipped step on failed patios." },
      { title: "Stamped finishes", body: "Pattern, integral color, antique release applied on site. Sealed after cure. Stamped, not just textured." },
    ],
    midCtaTitle: "Get a Free Edmond",
    midCtaAccent: "Patio Estimate.",
    faq: [
      {
        question: "Why do Edmond patios pull away from the house?",
        answer:
          "Combination of inadequate reinforcement and missing drainage detailing at the slab-house joint. Edmond's mixed soil makes differential movement worse — the slab twists and lifts away from the foundation. We fix this with rebar sized for the soil, slope to drain, and a sealed isolation joint at the house wall.",
      },
      {
        question: "How thick should an Edmond patio be?",
        answer:
          "4 inches on properly prepared base is standard for residential patios. We bump to 5 inches if the lot has more aggressive clay sections or the patio will see heavy loads — outdoor kitchen, hot tub, vehicle parking.",
      },
      {
        question: "Should I use rebar or wire mesh on an Edmond patio?",
        answer:
          "Rebar. Wire mesh controls shrinkage cracking but doesn't add structural strength. Edmond's mixed soil — particularly the clay-heavy sections — actively pushes against the slab as it swells and shrinks, and rebar's tensile strength is what resists that movement.",
      },
      {
        question: "How much does a stamped patio cost in Edmond?",
        answer:
          "Stamped concrete runs $15–$22 per square foot installed in the Edmond market. A 400 sq ft stamped patio typically runs $6,000–$8,800. Standard broom-finish patios run $6–$10 per sq ft. Exact pricing after an on-site read.",
      },
      {
        question: "Can a new patio tie into an existing slab or deck?",
        answer:
          "Yes — with a proper isolation joint between the new pour and the existing structure so they can move independently. Bonding new concrete directly to old without an isolation joint guarantees a crack at the seam within a few seasons.",
      },
    ],
    parentService: { label: "All Patios & Stamped Concrete", to: "/patios-oklahoma-city" },
    parentCity: { label: "All Edmond Concrete Services", to: "/edmond-concrete" },
    siblings: [
      { label: "Driveways in Edmond", to: "/driveways-edmond" },
      { label: "Foundations in Edmond", to: "/foundations-edmond" },
      { label: "Retaining Walls in Edmond", to: "/retaining-walls-edmond" },
      { label: "Patios in Norman", to: "/patios-norman" },
    ],
  },

  "foundations-norman": {
    path: "/foundations-norman",
    metaTitle: "Concrete Foundation Contractors in Norman, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete foundation contractors in Norman, OK — slab-on-grade, stem walls, pier foundations for Norman's river-influenced soil variability. Free estimate: (405) 458-4805.",
    eyebrow: "Norman, OK · Concrete Foundations · Licensed & Insured",
    h1Lead: "Concrete Foundation Contractors in",
    h1Accent: "Norman, OK.",
    heroBlurbHtml:
      "Slab-on-grade, stem wall, and pier foundations for <strong>Norman homeowners and builders</strong> — engineered for Cleveland County's variable river-corridor soil. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Norman Foundations Crack Along",
    problemAccent: "Soil Transitions.",
    problemHtml: [
      "<strong>The cracked Norman foundations we evaluate almost all show the same pattern</strong>: a crack that runs along a soil transition line — sandy river-influenced section on one side, denser clay on the other. A foundation poured to a flat metro spec doesn't account for that transition, and the differential movement opens a crack within years.",
      "Norman's spot along the Canadian River corridor makes this a per-lot problem, not a neighborhood one. The same property can have sandier section near a low corner and denser clay at the high corner. Picking foundation type from a satellite photo is a recipe for a crack along the seam.",
      "The fix is upstream: read the soil before specifying the foundation type. Slab-on-grade works on uniform-soil lots; pier-and-thickened-slab is the right call on lots with significant soil variability or fill. We make the call lot-by-lot.",
    ],
    localConditionsTitle: "Norman Soil, River Corridor,",
    localConditionsAccent: "& Foundation Type.",
    localConditionsHtml: [
      "Norman's position along the Canadian River means some lots sit on sandier river-influenced soil that transitions to denser clay within a short distance on the same property. That's a different base-prep call than the uniform-clay sites elsewhere in the metro.",
      "On uniform-soil lots — sometimes found on Norman's higher ground or further from the river corridor — slab-on-grade with engineered base, rebar, and drainage detailed works well long-term. On variable-soil lots, deeper foundations are the right call: piers drilled past the soil transition to undisturbed bearing material, with the slab tied to the pier system.",
      "On older Norman properties we also check for prior repair work, buried debris, or imported fill before we excavate — not always visible from the surface and a major source of differential movement we see in failed older foundations.",
    ],
    scopeBullets: [
      { title: "Lot evaluation first", body: "Soil read across the entire footprint, fill assessment, drainage check — before specifying foundation type." },
      { title: "Slab-on-grade where appropriate", body: "Engineered base, 4,000 PSI mix, rebar per spec, drainage detailing — for uniform-soil lots." },
      { title: "Pier-and-thickened-slab", body: "Piers drilled past the soil transition to undisturbed bearing material, with the slab tied to the pier system." },
      { title: "Stem wall foundations", body: "Footings to bearing soil, stem walls poured to grade, backfill compacted in lifts where appropriate to the build." },
      { title: "Drainage detailing", body: "Slope-to-drain around the foundation perimeter; French drains where the river-corridor grade requires them." },
      { title: "Builder coordination", body: "Schedule with GCs, framers, plumbing, and City of Norman inspectors on new-construction builds." },
    ],
    midCtaTitle: "Get a Free Norman",
    midCtaAccent: "Foundation Estimate.",
    faq: [
      {
        question: "How do I know if my Norman lot needs a pier foundation?",
        answer:
          "If the lot has significant soil variability — sandy river-influenced section transitioning to denser clay — pouring slab-on-grade is set up for a crack along the transition. We evaluate the soil across the entire footprint before specifying foundation type. Lots near the Canadian River corridor especially benefit from a per-lot soil read.",
      },
      {
        question: "How deep do piers go on a Norman foundation?",
        answer:
          "Typically 4–6 feet to reach past the soil transition into undisturbed bearing material, depending on the depth of the variable layer. We drill to the bearing soil and stop there — we don't pick a number first.",
      },
      {
        question: "How much does a foundation cost in Norman?",
        answer:
          "Norman foundations follow our OKC metro rates: roughly $9–$14 per square foot for standard slab-on-grade, with pier-and-thickened-slab and stem walls priced per the engineered spec and lot conditions. Exact pricing after an on-site soil read.",
      },
      {
        question: "Do you work with builders on new-construction Norman builds?",
        answer:
          "Yes. We coordinate with the GC on schedule, with framers on tie-in details, and with City of Norman inspectors on each required stage. Most of our Norman foundation work is on new-construction lots.",
      },
      {
        question: "How long does a Norman foundation last?",
        answer:
          "A foundation engineered for the actual soil and drainage conditions outlasts the structure on top of it. Foundations that fail in Norman almost always had the wrong type for the lot's soil variability, or inadequate drainage around the perimeter.",
      },
    ],
    parentService: { label: "All Concrete Foundations", to: "/foundations-oklahoma-city" },
    parentCity: { label: "All Norman Concrete Services", to: "/norman-ok-concrete" },
    siblings: [
      { label: "Driveways in Norman", to: "/driveways-norman" },
      { label: "Patios in Norman", to: "/patios-norman" },
      { label: "Retaining Walls in Norman", to: "/retaining-walls-norman" },
      { label: "Foundations in Edmond", to: "/foundations-edmond" },
    ],
  },

  "foundations-yukon": {
    path: "/foundations-yukon",
    metaTitle: "Concrete Foundation Contractors in Yukon, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete foundation contractors in Yukon, OK — slab-on-grade and pier foundations for Canadian County's clay base and new-subdivision fill conditions. Free estimate: (405) 458-4805.",
    eyebrow: "Yukon, OK · Concrete Foundations · Licensed & Insured",
    h1Lead: "Concrete Foundation Contractors in",
    h1Accent: "Yukon, OK.",
    heroBlurbHtml:
      "Foundations for <strong>Yukon homeowners and builders</strong> — engineered for Canadian County's expansive clay and the compaction quality of new-subdivision graded fill. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Yukon's Foundation Risk:",
    problemAccent: "What's Underneath.",
    problemHtml: [
      "<strong>Yukon's growth has put a lot of new homes on graded former agricultural land</strong> — and the quality of the original fill compaction matters as much as the native clay for any foundation pour. The foundations that fail by year five almost always had a fill problem at the start.",
      "Slab-on-grade on poorly compacted fill is the most common failure mode. The slab can look fine on move-in but show a hairline crack at year three and a 1/4\" step by year seven. That's not the concrete — it's the fill settling unevenly underneath.",
      "On Yukon fill lots, the right answer is often pier-and-thickened-slab, where piers are drilled through the fill to the undisturbed native clay below. The slab is tied to the piers; the fill carries no structural load. That foundation outlasts the structure on top of it.",
    ],
    localConditionsTitle: "Yukon Fill, Native Clay,",
    localConditionsAccent: "& Foundation Type.",
    localConditionsHtml: [
      "Yukon's terrain is flatter than Edmond's, so grade is rarely the issue — fill quality is. On newer subdivisions we proof-roll the existing base before any pour and look for soft spots that indicate poor original compaction.",
      "Where the fill is sound, slab-on-grade with engineered base and proper drainage performs well on Yukon's underlying expansive clay. Where fill compaction failed — common in subdivisions where original grading was rushed — pier-and-thickened-slab is the right call.",
      "On older Yukon properties built before recent subdivision growth, the soil is more predictable and the foundation spec is closer to what we'd pour in central OKC. We make the call after we read the lot — not before.",
    ],
    scopeBullets: [
      { title: "Fill + compaction read", body: "Proof-roll the existing base on every Yukon pour; look for soft spots from poor subdivision grading." },
      { title: "Slab-on-grade where appropriate", body: "Engineered base, 4,000 PSI mix, rebar per spec, drainage detailing — for sound-fill or undisturbed-native lots." },
      { title: "Pier-and-thickened-slab", body: "Piers drilled through fill to undisturbed native clay below, slab tied to piers. The fill carries no structural load." },
      { title: "Stem wall foundations", body: "Footings to bearing soil, stem walls poured to grade, backfill compacted in lifts." },
      { title: "Drainage detailing", body: "Perimeter slope-to-drain; French drains where the lot grade or fill conditions require them." },
      { title: "Builder coordination", body: "Schedule with GCs and City of Yukon inspectors on new-construction subdivisions." },
    ],
    midCtaTitle: "Get a Free Yukon",
    midCtaAccent: "Foundation Estimate.",
    faq: [
      {
        question: "How do I know if my Yukon lot needs a pier foundation?",
        answer:
          "If the lot was graded for a newer subdivision and the fill compaction is questionable, pier-and-thickened-slab is usually the right call. We proof-roll the base on every Yukon pour to evaluate the fill — if it's sound, slab-on-grade works; if not, piers are the answer.",
      },
      {
        question: "Why do new-subdivision Yukon foundations crack so early?",
        answer:
          "Almost always because original subdivision-grading fill wasn't compacted properly. The foundation sits on a base that settles unevenly for years — hairline at year three, a step by year seven. We proof-roll every base and re-prep where compaction failed.",
      },
      {
        question: "How much does a Yukon foundation cost?",
        answer:
          "Yukon foundations follow our OKC metro rates: roughly $9–$14 per square foot for slab-on-grade, with pier-and-thickened-slab and stem walls priced per engineered spec and lot conditions. Exact pricing after an on-site fill and soil read.",
      },
      {
        question: "Do you work with new-construction builders in Yukon?",
        answer:
          "Yes — much of our Yukon foundation work is in new subdivisions. We coordinate with GCs, framers, plumbing trades, and City of Yukon inspectors on each required stage.",
      },
      {
        question: "Can a poorly-compacted base be fixed without replacing the slab?",
        answer:
          "Usually not. Once a slab is poured on bad fill and the foundation has moved, the corrective options are limited and expensive. Catching the fill problem before the pour — by proof-rolling — is the only sure fix.",
      },
    ],
    parentService: { label: "All Concrete Foundations", to: "/foundations-oklahoma-city" },
    parentCity: { label: "All Yukon Concrete Services", to: "/yukon-oklahoma-concrete" },
    siblings: [
      { label: "Driveways in Yukon", to: "/driveways-yukon" },
      { label: "Patios in Yukon", to: "/patios-yukon" },
      { label: "Foundations in Edmond", to: "/foundations-edmond" },
      { label: "Driveways in Mustang", to: "/driveways-mustang" },
    ],
  },

  "driveways-moore": {
    path: "/driveways-moore",
    metaTitle: "Concrete Driveway Contractors in Moore, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete driveway installation and replacement in Moore, OK. Built for Moore's flat terrain, expansive clay, and drainage-critical low-lying areas. Free estimate: (405) 458-4805.",
    eyebrow: "Moore, OK · Concrete Driveways · Licensed & Insured",
    h1Lead: "Concrete Driveway Contractors in",
    h1Accent: "Moore, OK.",
    heroBlurbHtml:
      "Driveway pours and replacements for <strong>Moore homeowners</strong> — built for Moore's flat clay terrain where drainage is the variable that decides longevity. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Moore Driveways Fail Because",
    problemAccent: "Water Has Nowhere to Go.",
    problemHtml: [
      "<strong>The Moore driveways we tear out failed because of water</strong> — not weather and not weight. Moore's flat terrain and clay soil mean water doesn't drain away on its own. A driveway poured without an engineered slope traps moisture under and around the slab, and the expansive clay underneath swells and shrinks more aggressively.",
      "Within a few years, the slab cracks. Within ten, the section near the house has lifted. The slab itself looked fine the day it was poured — the failure was baked in by the lack of a slope-to-drain that moved water off the surface and away from the structure.",
      "The fix is non-negotiable on every Moore pour we do: minimum 1/8\" per foot pitch away from the house, apron formed to shed water cleanly, and joint timing that lets the slab move without cracking where we don't want it to.",
    ],
    localConditionsTitle: "Moore Drainage, Clay,",
    localConditionsAccent: "& Driveway Spec.",
    localConditionsHtml: [
      "Moore sits on flat terrain over the same expansive clay base found across the metro, with limited natural runoff in low-lying neighborhoods. The terrain that makes Moore an easy build also makes drainage the hardest job on every concrete pour.",
      "Driveways here need engineered slope, properly detailed apron transitions, and saw-cut control joints timed within 24 hours of the pour. We grade every Moore driveway so water moves away from the house and the garage apron at a minimum 1/8\" per foot.",
      "For driveways in older Moore neighborhoods near drainage corridors, we also check for prior fill, settling, and any tie-in to public street that needs City of Moore right-of-way coordination.",
    ],
    scopeBullets: [
      { title: "Drainage planning first", body: "Slope-to-drain pitch designed before we form. On a flat Moore lot, where water goes decides whether the slab lasts." },
      { title: "Tear-out & disposal", body: "Full removal of failed slab and any compromised base. No pouring over standing problems." },
      { title: "Engineered base", body: "Excavated to grade, compacted native, 4–6\" of aggregate compacted in lifts and proof-rolled." },
      { title: "4,000 PSI mix with rebar", body: "Residential standard for Moore clay. Rebar on chairs at mid-depth, tied at intersections." },
      { title: "Apron transition detailing", body: "Garage and street aprons formed to shed water cleanly. Water-catching apron joints are a major Moore failure point." },
      { title: "Joint timing & sealing", body: "Sawcut within 24 hours, sealed once cured. On time, every time." },
    ],
    midCtaTitle: "Get a Free Moore",
    midCtaAccent: "Driveway Estimate.",
    faq: [
      {
        question: "Why does drainage matter so much for Moore driveways?",
        answer:
          "Moore's flat terrain and clay soil mean water doesn't drain away on its own in low-lying areas. A driveway without an engineered slope traps water under and around the slab, accelerating the expansive clay's swell-shrink cycle — and that's the leading cause of cracked Moore driveways.",
      },
      {
        question: "How thick should a Moore driveway be?",
        answer:
          "4 inches on a properly prepared base for standard vehicles, 5+ inches for trucks, RVs, or trailers. Thickness can't compensate for inadequate drainage — slope-to-drain is the bigger variable for longevity here.",
      },
      {
        question: "How long does a properly built Moore driveway last?",
        answer:
          "30+ years with engineered base, rebar, proper joint timing, and slope-to-drain detailed. The driveways that fail by year 10–15 in Moore almost always had a drainage problem set on day one.",
      },
      {
        question: "How much does a Moore driveway cost?",
        answer:
          "Moore driveways follow our OKC metro rates: roughly $6–$10 per square foot installed. A typical 24×40 Moore driveway runs $5,760–$9,600, with tear-out of an existing slab adding to the total. Exact pricing after an on-site read.",
      },
      {
        question: "Can you pour a driveway year-round in Moore?",
        answer:
          "Yes — with proper hot-weather and cold-weather protocols. Spring storm season needs scheduling flexibility because heavy rain on a fresh pour or saturated subgrade is a real risk in the Moore area.",
      },
    ],
    parentService: { label: "All Concrete Driveways", to: "/driveways-oklahoma-city" },
    parentCity: { label: "All Moore Concrete Services", to: "/moore-oklahoma-concrete" },
    siblings: [
      { label: "Patios in Moore", to: "/patios-moore" },
      { label: "Driveways in Norman", to: "/driveways-norman" },
      { label: "Driveways in Edmond", to: "/driveways-edmond" },
    ],
  },

  "patios-moore": {
    path: "/patios-moore",
    metaTitle: "Concrete Patio Contractors in Moore, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete patios, slabs, and stamped concrete in Moore, OK. Drainage-first design for flat clay terrain. Free estimate: (405) 458-4805.",
    eyebrow: "Moore, OK · Concrete Patios · Licensed & Insured",
    h1Lead: "Concrete Patio Contractors in",
    h1Accent: "Moore, OK.",
    heroBlurbHtml:
      "Patios, garage slabs, and stamped concrete for <strong>Moore homeowners</strong> — drainage-first design for Moore's flat clay terrain. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Moore Patios Fail When Water",
    problemAccent: "Pools at the House.",
    problemHtml: [
      "<strong>The Moore patios we replace almost always show the same pattern</strong>: water pooling at the slab-house joint that wasn't designed out from the start. Moore's flat terrain means a patio without an engineered slope traps water against the foundation and the slab edge — and the failure follows.",
      "Once water is sitting at the joint, everything downstream goes wrong. The clay underneath the slab swells more aggressively. The slab lifts away from the house. The joint opens. More water gets in. By year ten there's a 1/2\" gap separating the patio from the house wall.",
      "Every Moore patio we pour gets a slope-to-drain detail and a sealed isolation joint at the house wall. The patio sheds water; the joint stays tight; the slab stays where we put it.",
    ],
    localConditionsTitle: "Moore Drainage, Clay,",
    localConditionsAccent: "& Patio Spec.",
    localConditionsHtml: [
      "Moore sits on flat terrain over the same expansive clay base found across the metro. The flat terrain that makes Moore an easy build also makes drainage the most important detail on any patio against a house wall.",
      "On Moore patios we grade a minimum 1/8\" per foot slope away from the foundation, install a sealed isolation joint where the slab meets the house, and time sawcut control joints within 24 hours so shrinkage cracks land where we want them.",
      "Where a Moore patio will see heavy loads — outdoor kitchens, hot tubs, vehicle parking — we increase slab thickness and rebar schedule rather than relying on the standard residential spec.",
    ],
    scopeBullets: [
      { title: "Drainage planning first", body: "Slope-to-drain detailing designed before any forms — the single biggest variable for Moore patio longevity." },
      { title: "Engineered base", body: "Excavated, compacted, 4\" of aggregate base compacted in lifts before any forming." },
      { title: "4,000 PSI mix with rebar", body: "Residential standard for Moore clay. Rebar on chairs at mid-depth, tied — not wire mesh." },
      { title: "Slope + isolation joint at house", body: "Minimum 1/8\" per foot pitch away from foundation, sealed isolation joint where the slab meets the house wall." },
      { title: "Joint timing", body: "Sawcut within 24 hours, spaced 8–12 feet, sealed once cured." },
      { title: "Stamped finishes", body: "Pattern, integral color, antique release applied on site. Sealed after cure. Stamped, not just textured." },
    ],
    midCtaTitle: "Get a Free Moore",
    midCtaAccent: "Patio Estimate.",
    faq: [
      {
        question: "Why do Moore patios pull away from the house?",
        answer:
          "Water pooling at the slab-house joint that wasn't drained from the start. Moore's flat terrain traps water against the foundation; the clay swells; the slab lifts. We design slope-to-drain and a sealed isolation joint at the house wall on every Moore patio to prevent this from the start.",
      },
      {
        question: "Should I use rebar or wire mesh on a Moore patio?",
        answer:
          "Rebar. On Moore's expansive clay, soil movement is active and rebar's tensile strength is what resists it. Wire mesh controls shrinkage cracking but doesn't add structural strength.",
      },
      {
        question: "How thick should a Moore patio be?",
        answer:
          "4 inches on properly prepared base for standard residential patios. 5 inches for heavier loads — outdoor kitchen, hot tub, vehicle parking. Thickness matters less than base prep and drainage detailing.",
      },
      {
        question: "How much does a Moore patio cost?",
        answer:
          "Broom-finish patios in Moore run $6–$10 per square foot installed. Stamped concrete runs $15–$22 per square foot. A 400 sq ft stamped patio typically runs $6,000–$8,800. Exact pricing after an on-site read.",
      },
      {
        question: "Can you tie a new patio into an existing slab or deck?",
        answer:
          "Yes — with a proper isolation joint between the new pour and the existing structure so they can move independently. Bonding without an isolation joint guarantees a crack at the seam within a few seasons.",
      },
    ],
    parentService: { label: "All Patios & Stamped Concrete", to: "/patios-oklahoma-city" },
    parentCity: { label: "All Moore Concrete Services", to: "/moore-oklahoma-concrete" },
    siblings: [
      { label: "Driveways in Moore", to: "/driveways-moore" },
      { label: "Patios in Norman", to: "/patios-norman" },
      { label: "Patios in Edmond", to: "/patios-edmond" },
    ],
  },

  "driveways-mustang": {
    path: "/driveways-mustang",
    metaTitle: "Concrete Driveway Contractors in Mustang, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete driveway installation and replacement in Mustang, OK. Built for Canadian County's clay base and new-subdivision fill. Free estimate: (405) 458-4805.",
    eyebrow: "Mustang, OK · Concrete Driveways · Licensed & Insured",
    h1Lead: "Concrete Driveway Contractors in",
    h1Accent: "Mustang, OK.",
    heroBlurbHtml:
      "Driveway pours and replacements for <strong>Mustang homeowners</strong> — built for Canadian County's expansive clay and the compaction quality of new-subdivision graded fill. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Mustang Driveways Settle on",
    problemAccent: "Bad Subdivision Fill.",
    problemHtml: [
      "<strong>Mustang's rapid subdivision growth has put a lot of new driveways on graded former farmland</strong> — and the quality of the original fill compaction decides whether the driveway is still flat at year five. The driveways that fail early in Mustang almost always had a fill problem the original contractor didn't catch.",
      "The slab can look perfect on move-in day. By year three, a hairline crack runs diagonally across the apron. By year seven, there's a step where the fill settled unevenly underneath. The concrete itself is fine — it just had no chance on the base it was poured on.",
      "Every Mustang driveway we pour gets the base proof-rolled before any forming. Soft spots get re-prepped or excavated and replaced. It adds a day to the schedule and saves a decade of cracking.",
    ],
    localConditionsTitle: "Mustang Fill, Native Clay,",
    localConditionsAccent: "& Driveway Spec.",
    localConditionsHtml: [
      "Mustang shares Yukon's flatter west-metro terrain and the region's expansive clay base — but the dominant issue here is fill quality from recent subdivision grading. The native clay underneath is the same swell-shrink material found across the metro, so once we get past the fill question, the standard OKC base-prep protocol applies.",
      "On older Mustang properties built before the subdivision boom, the soil profile is more predictable. The driveway spec is closer to what we'd pour in central OKC, and the base prep is straightforward.",
      "On any Mustang driveway, drainage is still part of the spec. Flat terrain plus expansive clay plus heavy seasonal rain means slope-to-drain pitch is non-negotiable for long-term performance.",
    ],
    scopeBullets: [
      { title: "Compaction check", body: "Proof-roll the existing base on every Mustang pour. Soft spots get re-prepped before any new aggregate goes in." },
      { title: "Re-base where needed", body: "Excavate and re-prep where original fill compaction failed. The only sure way to avoid year-three settlement cracks." },
      { title: "Tear-out & disposal", body: "Full removal of failed slabs and compromised base. Pouring over moving substrate is a guaranteed do-over." },
      { title: "4,000 PSI mix with rebar", body: "Residential standard for Mustang clay. Rebar on chairs at mid-depth, tied at intersections." },
      { title: "Drainage detailing", body: "Slope-to-drain pitch away from the house; apron transitions formed to shed water cleanly." },
      { title: "Joint timing & sealing", body: "Sawcut within 24 hours, spaced 8–12 feet, sealed once cured." },
    ],
    midCtaTitle: "Get a Free Mustang",
    midCtaAccent: "Driveway Estimate.",
    faq: [
      {
        question: "Why do new-subdivision Mustang driveways crack so early?",
        answer:
          "Almost always because the fill from original subdivision grading wasn't compacted properly. The slab sits on a base that settles unevenly for years — hairline at year three, a step or diagonal crack by year seven. We proof-roll the base on every Mustang pour and re-prep where compaction failed.",
      },
      {
        question: "How thick should a Mustang driveway be?",
        answer:
          "4 inches on properly prepared base for standard passenger vehicles, 5 inches when the base is questionable or the homeowner has trucks, RVs, or trailers. Thickness can't compensate for a bad base.",
      },
      {
        question: "Can you re-prep a base that's already failing?",
        answer:
          "Yes — when the slab is gone we excavate, expose the failing fill, and re-base properly. Once a slab is in place and moving, the corrective options are limited and expensive. Catching the fill problem before the pour is always cheaper than catching it after.",
      },
      {
        question: "How much does a Mustang driveway cost?",
        answer:
          "Mustang driveways follow our OKC metro rates: roughly $6–$10 per square foot installed. A typical 24×40 driveway runs $5,760–$9,600, with tear-out and any re-base adding to the total. Exact pricing after an on-site read.",
      },
      {
        question: "Do you work on new-construction Mustang builds?",
        answer:
          "Yes — we coordinate with builders, framers, and inspectors on Mustang subdivisions and handle the driveway pour timing to fit the broader project schedule.",
      },
    ],
    parentService: { label: "All Concrete Driveways", to: "/driveways-oklahoma-city" },
    parentCity: { label: "All Mustang Concrete Services", to: "/mustang-oklahoma-concrete" },
    siblings: [
      { label: "Driveways in Yukon", to: "/driveways-yukon" },
      { label: "Driveways in Moore", to: "/driveways-moore" },
      { label: "Foundations in Yukon", to: "/foundations-yukon" },
    ],
  },

  "retaining-walls-norman": {
    path: "/retaining-walls-norman",
    metaTitle: "Retaining Wall Contractors in Norman, OK | FDZ Construction LLC",
    metaDescription:
      "Poured concrete and CMU retaining walls in Norman, OK — drainage-first design for Norman's river-corridor soil. Repairs included. Free estimate: (405) 458-4805.",
    eyebrow: "Norman, OK · Retaining Walls · Licensed & Insured",
    h1Lead: "Retaining Wall Contractors in",
    h1Accent: "Norman, OK.",
    heroBlurbHtml:
      "Poured concrete and CMU retaining walls for <strong>Norman homeowners</strong> — drainage-first design for Norman's river-corridor soil and variable lateral pressure. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Norman Walls Fail Where",
    problemAccent: "Soil Changes.",
    problemHtml: [
      "<strong>Leaning Norman walls usually fail along a soil transition</strong> — the spot where sandier river-influenced soil meets denser clay. The clay section loads up with water and pushes harder than the sandy section, and the wall twists rather than uniformly leans.",
      "Drainage is the bigger underlying issue. Whatever the wall material, water trapped behind it builds hydrostatic pressure that the wall isn't designed to resist long-term. On Norman's variable soil, the trapped-water sections aren't always where you'd expect.",
      "Every Norman wall we build or rebuild gets uniform engineered drainage across the entire wall length — gravel backfill, weep holes spaced for the wall height, French drain routed to daylight. Then the wall is sized to the actual lot conditions, not a generic spec.",
    ],
    localConditionsTitle: "Norman Soil, River Corridor,",
    localConditionsAccent: "& Wall Drainage.",
    localConditionsHtml: [
      "Norman's position along the Canadian River means walls here face less uniform lateral pressure than walls on uniform-clay sites elsewhere in the metro. Variable soil drains and holds water differently across the wall's length, which is exactly the condition that causes walls to twist.",
      "Uniform engineered drainage across the full wall — not just where it looks needed — is the only way to prevent that twisting failure. Gravel backfill the entire length, weep holes spaced per the wall height, and a French drain routed to daylight.",
      "Footing depth and reinforcement also get adjusted for Norman conditions. Below frost line per code, sized to wall height and the soil bearing capacity at the actual lot. Generic specs are where leaning walls start.",
    ],
    scopeBullets: [
      { title: "Site evaluation", body: "Slope, soil read across the wall length, drainage patterns, and what the wall needs to hold back." },
      { title: "Uniform drainage plan", body: "Gravel backfill the full length, weep holes spaced for wall height, French drain routed to daylight." },
      { title: "Footing sized to soil + height", body: "Below frost line per code, sized to actual soil bearing capacity and wall height — not a generic spec." },
      { title: "Poured concrete or CMU", body: "Monolithic poured concrete for taller walls and variable soil; CMU for mid-height walls where load and conditions allow." },
      { title: "Backfill in lifts", body: "Compacted in lifts to avoid point-loading. Skipping this step bows fresh walls before the concrete cures." },
      { title: "Repair & stabilization", body: "Leaning wall? We evaluate cause first. Drainage correction is part of every repair." },
    ],
    midCtaTitle: "Get a Free Norman",
    midCtaAccent: "Retaining Wall Estimate.",
    faq: [
      {
        question: "Why do Norman walls twist instead of uniformly lean?",
        answer:
          "Norman's variable river-influenced soil drains and holds water differently across the wall's length. The clay-section trap water and push harder than the sandy section, and the wall twists. The fix is uniform engineered drainage across the entire wall, not just where it looks needed.",
      },
      {
        question: "How tall can a Norman wall be before it needs an engineer?",
        answer:
          "Walls over 4 feet typically require an engineer's stamp, but specific requirements vary by jurisdiction. We confirm the requirement for your project location before work begins.",
      },
      {
        question: "Can you repair a leaning Norman wall, or does it need to be replaced?",
        answer:
          "Depends on how far it's leaned and what caused it. Minor lean with a fixable drainage issue can often be stabilized and re-drained. Significant displacement usually requires rebuild — and the rebuild includes fixing the original drainage problem.",
      },
      {
        question: "How much does a retaining wall cost in Norman?",
        answer:
          "Cost depends on wall height and length, material (poured concrete vs. CMU), drainage requirements, soil conditions, and engineering. Free on-site estimates with a clear scope after we read the lot.",
      },
      {
        question: "How long does a properly built Norman wall last?",
        answer:
          "50+ years with uniform engineered drainage. The walls that fail in 10–20 years almost always had a drainage problem set at construction.",
      },
    ],
    parentService: { label: "All Retaining Walls", to: "/retaining-walls-oklahoma-city" },
    parentCity: { label: "All Norman Concrete Services", to: "/norman-ok-concrete" },
    siblings: [
      { label: "Foundations in Norman", to: "/foundations-norman" },
      { label: "Driveways in Norman", to: "/driveways-norman" },
      { label: "Retaining Walls in Edmond", to: "/retaining-walls-edmond" },
    ],
  },

  "patios-yukon": {
    path: "/patios-yukon",
    metaTitle: "Concrete Patio Contractors in Yukon, OK | FDZ Construction LLC",
    metaDescription:
      "Concrete patios, slabs, and stamped concrete in Yukon, OK. Built for Canadian County's clay base and new-subdivision fill. Free estimate: (405) 458-4805.",
    eyebrow: "Yukon, OK · Concrete Patios · Licensed & Insured",
    h1Lead: "Concrete Patio Contractors in",
    h1Accent: "Yukon, OK.",
    heroBlurbHtml:
      "Patios, garage slabs, and stamped concrete for <strong>Yukon homeowners</strong> — built for Canadian County's clay base and the fill conditions of newer subdivisions. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Yukon Patios Settle When",
    problemAccent: "the Base Wasn't Right.",
    problemHtml: [
      "<strong>Most failed Yukon patios we replace settled on bad subdivision fill</strong> — the same root cause we see on Yukon driveways. The slab can look perfect when fresh and develop an uneven section by year three as the fill compresses underneath.",
      "The other common failure is the slab-house joint. Water trapped against the foundation accelerates the clay's swell-shrink cycle under the slab edge, and the patio lifts away from the house. Two failure modes, one upstream solution: read the base, detail the drainage, reinforce properly.",
      "Every Yukon patio we pour gets the existing base proof-rolled before any forming. Soft spots get re-prepped. The slab gets graded away from the house at minimum 1/8\" per foot, with a sealed isolation joint where it meets the foundation.",
    ],
    localConditionsTitle: "Yukon Fill, Drainage,",
    localConditionsAccent: "& Patio Spec.",
    localConditionsHtml: [
      "Yukon's flat terrain makes grading simpler than Edmond's, but the subdivision fill question makes base prep more involved. On newer-subdivision lots we proof-roll before any aggregate goes in and look for soft spots from poor original compaction.",
      "For patios against the house wall — which is most patios — drainage is critical regardless of the fill conditions. Standing water at the slab-house joint accelerates everything bad, and the failure is hard to fix once the slab is in place. Slope-to-drain detailing comes first.",
      "On stamped patios the same rules apply. Base, reinforcement, drainage — the decorative finish is the last 10% of the job. The 90% that makes the patio still look good in 15 years happens below the surface.",
    ],
    scopeBullets: [
      { title: "Base + compaction check", body: "Proof-roll the existing base on every Yukon pour. Re-prep soft spots before any aggregate goes in." },
      { title: "Engineered base", body: "Excavated, compacted, 4\" of aggregate base compacted in lifts before forms." },
      { title: "4,000 PSI mix with rebar", body: "Residential standard for Yukon clay. Rebar on chairs at mid-depth, tied — not wire mesh." },
      { title: "Slope + isolation joint at house", body: "Minimum 1/8\" per foot pitch away from foundation, sealed isolation joint at the house wall." },
      { title: "Joint timing", body: "Sawcut control joints within 24 hours, spaced 8–12 feet, sealed once cured." },
      { title: "Stamped finishes", body: "Pattern, integral color, antique release applied on site. Sealed after cure." },
    ],
    midCtaTitle: "Get a Free Yukon",
    midCtaAccent: "Patio Estimate.",
    faq: [
      {
        question: "Why do new-subdivision Yukon patios settle?",
        answer:
          "Almost always poor compaction in the original subdivision fill. The slab sits on a base that settles unevenly for years. We proof-roll every Yukon base before pouring and re-prep soft spots — the only sure way to avoid early settlement.",
      },
      {
        question: "Should I use rebar or wire mesh on a Yukon patio?",
        answer:
          "Rebar. Wire mesh controls shrinkage cracking but doesn't add structural strength. On Yukon clay — and on fill that may settle — rebar's tensile strength is what holds the slab together when soil moves under it.",
      },
      {
        question: "How thick should a Yukon patio be?",
        answer:
          "4 inches on properly prepared base for standard residential patios, 5 inches for heavier loads (outdoor kitchen, hot tub, vehicle parking) or where the base is questionable.",
      },
      {
        question: "How much does a Yukon patio cost?",
        answer:
          "Broom-finish patios run $6–$10 per square foot installed. Stamped concrete runs $15–$22 per square foot. A 400 sq ft stamped patio typically runs $6,000–$8,800. Exact pricing after an on-site read.",
      },
      {
        question: "Can you tie a Yukon patio into an existing slab?",
        answer:
          "Yes — with a proper isolation joint between the new and existing pours so they can move independently. Bonding directly to old concrete without an isolation joint guarantees a crack at the seam.",
      },
    ],
    parentService: { label: "All Patios & Stamped Concrete", to: "/patios-oklahoma-city" },
    parentCity: { label: "All Yukon Concrete Services", to: "/yukon-oklahoma-concrete" },
    siblings: [
      { label: "Driveways in Yukon", to: "/driveways-yukon" },
      { label: "Foundations in Yukon", to: "/foundations-yukon" },
      { label: "Patios in Edmond", to: "/patios-edmond" },
    ],
  },
};

export const SERVICE_CITY_SLUGS = Object.keys(data);

export function getServiceCityCanonical(slug: string): string | null {
  const d = data[slug];
  return d ? `${BASE}${d.path}` : null;
}

export default function ServiceInCity({ slug }: { slug: string }) {
  const d = data[slug];
  if (!d) {
    return (
      <main className="page-hero">
        <h1>Page Not Found</h1>
        <Link to="/" className="btn-primary mt-8">← Back home</Link>
      </main>
    );
  }
  const canonical = `${BASE}${d.path}`;
  useSEO({
    title: d.metaTitle,
    description: d.metaDescription,
    canonical,
    og: { title: d.metaTitle, description: d.metaDescription, type: "website", url: canonical },
  });

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">{d.eyebrow}</span>
        <h1 className="max-w-[820px] mb-5">{d.h1Lead}<br/><span className="text-orange">{d.h1Accent}</span></h1>
        <p className="prose-muted max-w-[680px] mb-8" dangerouslySetInnerHTML={{ __html: d.heroBlurbHtml }} />
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">Get Free Estimate →</Link>
          <a href="tel:4054584805" className="btn-outline">📞 (405) 458-4805</a>
        </div>
      </section>
      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">The Real Failure Mode</div>
          <h2 className="mb-4">{d.problemTitle}<br/><em className="h2-accent">{d.problemAccent}</em></h2>
          {d.problemHtml.map((p, i) => (
            <p key={i} className="prose-muted mb-4 max-w-[820px]" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Local Conditions</div>
          <h2 className="mb-4">{d.localConditionsTitle}<br/><em className="h2-accent">{d.localConditionsAccent}</em></h2>
          {d.localConditionsHtml.map((p, i) => (
            <p key={i} className="prose-muted mb-4 max-w-[820px]" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">What We Do</div>
          <h2 className="mb-8">How We Build It<br/><em className="h2-accent">Right.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {d.scopeBullets.map((b, i) => (
              <div key={i} className="bg-stone p-6">
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-2 text-orange">{b.title}</div>
                <p className="text-[0.86rem] text-muted-text leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt text-center">
          <h2 className="mb-4">{d.midCtaTitle}<br/><em className="h2-accent">{d.midCtaAccent}</em></h2>
          <p className="prose-muted max-w-[560px] mx-auto mb-6">
            Free on-site estimate, clear scope, written quote.
            Call <a href="tel:4054584805" className="text-orange no-underline">(405) 458-4805</a> or
            email <a href="mailto:jesus@fdzconstruction.com" className="text-orange no-underline">jesus@fdzconstruction.com</a>.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/#estimate" className="btn-primary">Request Estimate →</Link>
            <a href="tel:4054584805" className="btn-outline">📞 (405) 458-4805</a>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <FAQ items={d.faq} />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Related</div>
          <h2 className="mb-6">More From<br/><em className="h2-accent">FDZ Construction.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <Link to={d.parentService.to} className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-2">Parent Service</div>
              <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{d.parentService.label} →</div>
            </Link>
            <Link to={d.parentCity.to} className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-2">Parent City</div>
              <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{d.parentCity.label} →</div>
            </Link>
            {d.siblings.map((s, i) => (
              <Link key={i} to={s.to} className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors">
                <div className="text-[0.6rem] tracking-[0.12em] uppercase text-muted-text font-bold mb-2">Related</div>
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{s.label} →</div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <InternalLinksHub />
      <FinalCTA />
    </main>
  );
}
