import ServicePage from "@/components/ServicePageTemplate";

export default function DumpsterPads() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="dumpster-pad-concrete-oklahoma-city"
      metaTitle="Dumpster Pad Concrete Oklahoma City | Trash Enclosure Slabs & Bollards | FDZ Construction"
      metaDescription="Concrete dumpster pads & trash enclosures in Oklahoma City. Commercial-grade, properly sloped, built for heavy containers. Free estimates — (405) 458-4805."
      eyebrow="OKC Metro · Commercial Concrete · Licensed & Insured"
      title="Concrete Dumpster Pads & Trash Enclosures in"
      titleAccent="Oklahoma City."
      description='Commercial concrete dumpster pads built for container weight and collection truck axle loads — properly sloped, reinforced, and priced fairly. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Every commercial property with a dumpster — retail centers, restaurants, apartments, office buildings, warehouses — needs a properly built concrete pad under it. A dumpster on asphalt or bare dirt damages the surface fast from the container weight and the truck that empties it. A properly poured, correctly sloped concrete dumpster pad protects your property, satisfies your waste hauler's requirements, and keeps the area cleaner. FDZ pours dumpster pads for commercial properties across OKC — commercial-grade, correctly detailed, and priced fairly."
      localExpertiseNote="OKC's expansive clay is particularly brutal under heavy dumpster pads — the repeated axle loads from collection trucks on inadequately prepared soil causes rapid settling and cracking. We see this constantly on commercial properties with improperly poured pads. The fix is always the same: proper excavation, gravel sub-base correction, and a correctly reinforced slab."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🗑️",
          title: "New Dumpster Pad Installation",
          description:
            "6\" minimum concrete on compacted gravel sub-base — sized for your container footprint plus collection truck access. Properly sloped for drainage.",
        },
        {
          icon: "🔄",
          title: "Dumpster Pad Replacement",
          description:
            "Demolish and replace failed pads — sub-base correction included. Most pad failures trace to inadequate base on OKC clay.",
        },
        {
          icon: "🧱",
          title: "Trash Enclosure Coordination",
          description:
            "Pad with anchor bolt embeds so your masonry contractor can tie in CMU enclosure walls — or full concrete pad and wall coordination.",
        },
        {
          icon: "📐",
          title: "Commercial Waste Area Upgrades",
          description:
            "Multiple containers, recycling pads, and waste room concrete — full waste area builds for retail centers, apartment complexes, and office parks.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Dumpster Pad Services in Oklahoma City",
        items: [
          {
            title: "New Dumpster Pad",
            bullets: [
              "Excavation and gravel sub-base compaction — critical on OKC clay where collection truck loads cause rapid failure on unmodified soil",
              "6\" minimum concrete thickness — 3,500–4,000 PSI mix (dumpster trucks exert axle loads that standard 4\" residential concrete can't handle)",
              "Rebar reinforcement — wire mesh minimum, rebar preferred on clay sites",
              "2% slope to drain away from building and prevent waste water ponding under container",
              "Broom finish for traction",
              "Control joints to manage shrinkage cracking",
              "Optional concrete curb stops to prevent container from shifting during collection",
            ],
          },
          {
            title: "Dumpster Pad Replacement",
            bullets: [
              "Saw-cut and demolish existing failed pad",
              "Sub-base investigation — if OKC clay has undermined the original base, we correct it before pouring",
              "Pour to same specs as new pad — skipping sub-base correction just repeats the original failure",
              "Most replacements complete in 1–2 days",
            ],
          },
          {
            title: "Trash Enclosure Walls & Coordination",
            bullets: [
              "Many OKC commercial zones require enclosure walls around dumpster areas — city code and property management standards both drive this",
              "FDZ pours the concrete pad with anchor bolt embeds so your masonry contractor can tie in CMU walls",
              "Or we coordinate the masonry scope directly — contact us to discuss your project",
              "Drain integration inside enclosure walls where required",
            ],
          },
        ],
      }}
      processSteps={[
        {
          title: "Free On-Site Estimate",
          description:
            "Container size, collection truck access path, and existing surface conditions reviewed before any pricing is given.",
        },
        {
          title: "Sub-Base Excavation & Correction",
          description:
            "Excavate to proper depth, assess clay conditions, add and compact gravel sub-base to spec before any concrete is poured.",
        },
        {
          title: "Pour at 6\"+ Thickness",
          description:
            "3,500–4,000 PSI concrete with rebar reinforcement poured at correct slope — 2% away from the building.",
        },
        {
          title: "Finish & Detail",
          description:
            "Broom finish for traction, control joints for shrinkage, and optional concrete curb stops to prevent container movement during collection.",
        },
      ]}
      processEyebrow="How It Works"
      processTitle="The Dumpster Pad"
      processTitleAccent="Process."
      sections={[
        {
          eyebrow: "Why Dumpster Pads Fail",
          title: "What We Do",
          titleAccent: "Differently.",
          content: [
            "Most dumpster pad failures come from three things: inadequate thickness (4\" won't handle a loaded collection truck — we pour 6\" minimum), poor drainage slope (standing waste water under a dumpster is a health and odor problem), and no reinforcement (wire mesh minimum, rebar preferred on OKC's expansive clay).",
            "Collection trucks that service commercial dumpsters weigh 33,000–66,000 lbs fully loaded. That's not a residential load — it requires commercial-grade concrete specs. FDZ specs dumpster pads for the actual loads they'll see, not the cheapest pour that fits in the budget.",
          ],
        },
        {
          eyebrow: "Pricing",
          title: "Dumpster Pad",
          titleAccent: "Cost Ranges.",
          content: [
            "Dumpster pad pricing depends on pad size, existing concrete condition (replacement vs. new), and whether enclosure anchor bolts are needed.",
            "Call (405) 458-4805 for a free on-site estimate.",
          ],
          table: {
            headers: ["Service", "Typical Range"],
            rows: [
              ["Standard dumpster pad (10×10 ft)", "$800 – $1,800"],
              ["Large dumpster pad (12×20 ft)", "$1,800 – $3,500"],
              ["Pad with concrete curb stops", "Add $200 – $400"],
              ["Pad replacement (demo + pour)", "$1,200 – $4,000"],
              ["Anchor bolt embeds for enclosure walls", "Add $150 – $300"],
            ],
          },
        },
        {
          eyebrow: "Related Services",
          title: "Other Commercial Concrete",
          titleAccent: "Services.",
          content: [
            "<a href='/parking-lots-oklahoma-city' class='text-orange no-underline font-medium'>Parking Lot Concrete</a> — New commercial parking lot installation, repair, and full replacement with ADA-compliant layouts.",
            "<a href='/commercial-concrete-repair-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete Repair</a> — Crack repair, spalling, trip hazard removal, and joint sealing for commercial properties.",
            "<a href='/commercial-curb-gutter-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Curb & Gutter</a> — Parking lot curbing, island curbs, and drive approach cuts throughout OKC.",
            "<a href='/retail-restaurant-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Retail & Restaurant Concrete</a> — Concrete services tailored for retail centers, restaurants, and multi-tenant commercial properties.",
          ],
        },
      ]}
      faq={[
        {
          question: "How thick should a concrete dumpster pad be?",
          answer:
            "6\" minimum for commercial dumpsters. Collection trucks weigh 33,000–66,000 lbs fully loaded — standard 4\" residential concrete specs are not adequate. We pour 6\" on a compacted gravel sub-base minimum, with rebar reinforcement on OKC clay sites.",
        },
        {
          question: "How much does a dumpster pad cost in Oklahoma City?",
          answer:
            "A standard 10×10 dumpster pad typically runs $800–$1,800. Larger pads (12×20) run $1,800–$3,500. Replacement of a failed pad with demo typically runs $1,200–$4,000 depending on sub-base conditions. Free on-site estimate provided.",
        },
        {
          question: "What slope should a dumpster pad have?",
          answer:
            "2% minimum slope (1/4\" per foot) away from the building. This prevents waste water and runoff from ponding under the container — a health, odor, and pest management issue on any commercial property.",
        },
        {
          question: "Do I need a permit for a dumpster pad in OKC?",
          answer:
            "For a straightforward concrete dumpster pad, a permit is typically not required in OKC. Enclosure walls may require a permit depending on height and scope. FDZ confirms permit requirements as part of the estimate process.",
        },
        {
          question: "How long does a concrete dumpster pad last?",
          answer:
            "A properly poured dumpster pad on correct sub-base should last 20–30+ years. Most failures we see occur within the first 5 years on pads that were under-spec'd — too thin, no rebar, no sub-base correction on clay. A correctly poured pad is a one-time investment.",
        },
        {
          question: "Can you replace an existing damaged dumpster pad?",
          answer:
            "Yes. FDZ handles saw-cut demolition of the existing pad, sub-base evaluation and correction, and pours a new pad to commercial specs. Most single-pad replacements complete in 1–2 days.",
        },
      ]}
    />
  );
}
