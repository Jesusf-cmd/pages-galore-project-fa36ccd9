import ServicePage from "@/components/ServicePageTemplate";

export default function LoadingDockReplacement() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="loading-dock-replacement-oklahoma-city"
      metaTitle="Loading Dock Replacement Oklahoma City | FDZ Construction LLC"
      metaDescription="Full loading dock replacement in Oklahoma City. Failing docks, cracked aprons, settling concrete — we demolish and rebuild to correct specs. Free estimates — (405) 458-4805."
      eyebrow="OKC Metro · Loading Dock Replacement · Licensed & Insured"
      title="Loading Dock Replacement in"
      titleAccent="Oklahoma City."
      description='When a loading dock is beyond repair, FDZ handles complete demolition and rebuilding to correct specs. Call <a href="tel:4054584805">(405) 458-4805</a> for a free on-site evaluation.'
      introText="When a loading dock is beyond repair — severe structural cracking, settled sections, rebar corrosion, failing approach slab — full replacement is the right call. FDZ handles complete demolition and rebuilding to correct specs. We'll tell you honestly if repair is the better answer: we don't push replacement when targeted repair will solve the problem. If replacement is warranted, we manage the full scope from demolition through sub-base correction, reinforced concrete, and dock leveler pit integration. Call (405) 458-4805 to schedule a free on-site evaluation."
      localExpertiseNote="Oklahoma's expansive Permian-age clay is often the real cause of loading dock failure. When clay moisture content changes seasonally, it pushes slabs up, pulls them down, and undermines sub-base compaction from the original pour. A replacement that doesn't address the sub-base will fail again on the same timeline. FDZ corrects the sub-base as part of every replacement — this is not optional."
      serviceLabel="Commercial"
      serviceCards={[
        { icon: "💥", title: "Full Dock Demolition & Replacement", description: "Complete demolition of existing dock and approach slab. Sub-base correction, heavy reinforcement, and new pour to correct dock height." },
        { icon: "🔲", title: "Partial Dock Replacement", description: "When one bay or section has failed but others remain sound. Phased work keeps unaffected bays operational." },
        { icon: "🛣️", title: "Approach Slab Replacement", description: "Approach slabs take the most punishment. Replacement includes sub-base correction, thickened edges, and proper drainage." },
        { icon: "📐", title: "Dock Height Correction", description: "Docks that have settled out of height can't seal properly. Replacement corrects height to 48–52 inches from finished grade." },
        { icon: "🪨", title: "Sub-Base Remediation", description: "Proof-rolling, over-excavation, and proper aggregate base installation. The step most often skipped on failing docks — and the most important." },
      ]}
      subServices={{
        sectionEyebrow: "Replacement Services",
        sectionTitle: "What We Replace",
        items: [
          {
            title: "Full Loading Dock Replacement",
            bullets: [
              "Complete demolition of existing dock and approach slab",
              "Sub-base investigation and correction before any concrete goes in",
              "8-inch minimum reinforced concrete to correct dock height",
              "Dock leveler pit integration coordinated with equipment supplier",
            ],
          },
          {
            title: "Partial Replacement",
            bullets: [
              "When only one bay or one section has failed",
              "Phased work to keep other bays operational during construction",
              "Honest evaluation of adjacent slab condition — no unnecessary work recommended",
            ],
          },
          {
            title: "Approach Slab Replacement",
            bullets: [
              "Approach slabs take the most punishment — trailer bumper impact, semi-truck maneuvering loads, constant axle traffic",
              "Replacement includes sub-base correction and thickened edges at dock face",
              "Proper drainage slope away from the building",
            ],
          },
          {
            title: "Dock Height Correction",
            bullets: [
              "Settled docks create trailer gaps that cause HVAC loss and security risk",
              "Replacement corrects height to 48–52 inches from finished grade",
              "Coordinate with dock door and equipment to match correct height",
            ],
          },
          {
            title: "Sub-Base Remediation",
            bullets: [
              "The most important part of any dock replacement",
              "Proof-rolling identifies soft spots; over-excavation removes compromised material",
              "Proper aggregate base installed and compacted before pour",
            ],
          },
        ],
      }}
      processSteps={[
        { title: "Free Site Evaluation & Failure Diagnosis", description: "On-site assessment of the dock's condition: cracking patterns, height measurement, drainage, rebar corrosion, and sub-base investigation." },
        { title: "Repair vs. Replacement Decision", description: "Honest recommendation based on the findings. We document what we found and explain why repair or full replacement is the right call." },
        { title: "Phased Work Planning", description: "For occupied facilities, plan the replacement sequence to minimize operational downtime. Coordinate with your operations manager before any work starts." },
        { title: "Demolition of Existing Dock", description: "Demolition of the failing dock and approach slab. Debris hauled off-site. Sub-base exposed for inspection." },
        { title: "Sub-Base Investigation & Full Correction", description: "Proof-roll the exposed sub-base. Over-excavate compromised material. Install and compact proper aggregate base to correct depth." },
        { title: "Heavy Reinforcement Forming", description: "8-inch minimum thickness forming with continuous rebar, thickened edges at dock face, and engineered reinforcement schedule." },
        { title: "4,000–5,000 PSI Pour to Corrected Dock Height", description: "Pour to laser-verified dock height of 48–52 inches. Industrial-grade mix. Approach slab poured with proper drainage slope." },
        { title: "Integration with Existing Dock Equipment", description: "Dock leveler pit dimensions and anchor bolt placement verified before pour. Equipment reinstalled after concrete reaches required strength." },
        { title: "Approach Slab, Curing & Return to Service", description: "Approach slab poured and finished. Full cure period completed. Sealing applied. 2-year workmanship warranty provided." },
      ]}
      processEyebrow="How We Do It"
      processTitle="The Replacement"
      processTitleAccent="Process."
      sections={[
        {
          eyebrow: "Diagnosis",
          title: "When to Replace,",
          titleAccent: "Not Repair.",
          content: [
            "These are not cosmetic issues — they're structural failures that repair cannot fix:",
            "Deep cracks that go through the full slab thickness (not surface crazing). Settlement or heaving of the dock or approach slab. Rebar corrosion visible through spalling concrete — rust staining and surface pop-off around rebar. Dock height out of alignment — trailers can no longer seal properly against the dock door. Repeated repairs that keep failing within months — a sign of base failure, not surface failure. Drainage failure causing chronic water intrusion under the slab.",
          ],
        },
        {
          eyebrow: "Pricing",
          title: "Replacement",
          titleAccent: "Cost Ranges.",
          content: [
            "Dock replacement pricing depends on site conditions, number of bays, equipment coordination, and whether phased work is required for an occupied facility.",
            "Call (405) 458-4805 for a free on-site evaluation.",
          ],
          table: {
            headers: ["Service", "Typical Range"],
            rows: [
              ["Full single-bay replacement", "$18,000 – $50,000+"],
              ["Partial bay replacement", "$8,000 – $25,000+"],
              ["Approach slab replacement", "$6,000 – $20,000+"],
              ["Dock height correction (full replace)", "$18,000 – $45,000+"],
              ["Sub-base remediation (included)", "Included in replacement scope"],
            ],
          },
        },
      ]}
      faq={[
        {
          question: "How do I know if my loading dock needs repair or full replacement?",
          answer: "Repair works when the slab is structurally sound and damage is localized — spalling surfaces, isolated cracks, failing joint sealant. Full replacement is warranted when there's sub-base failure, widespread structural cracking, rebar corrosion, or dock height settlement that can't be corrected without a full pour. FDZ evaluates the root cause and recommends honestly.",
        },
        {
          question: "How long does loading dock replacement take?",
          answer: "Full single-bay replacement typically runs 3–5 weeks from demolition through curing and return to service. Multi-bay or phased replacement at occupied facilities takes longer depending on the number of bays and operational constraints.",
        },
        {
          question: "Can I keep my facility running during loading dock replacement?",
          answer: "Yes, with phased work. FDZ coordinates construction to keep unaffected bays operational. We also schedule pours after hours when needed. Call (405) 458-4805 to discuss your facility's operational constraints before work starts.",
        },
        {
          question: "Why does my loading dock keep cracking after repairs?",
          answer: "Repeated repair failure almost always points to sub-base failure or drainage problems, not the repair material. If clay beneath the slab has lost compaction or if water is pooling under the dock, no surface repair will hold. FDZ evaluates the root cause before recommending repair or replacement.",
        },
        {
          question: "How much does loading dock replacement cost in Oklahoma City?",
          answer: "Full single-bay replacement typically runs $18,000–$50,000+. Scope depends on site conditions, number of bays, equipment integration, and phasing requirements. Free estimate provided — call (405) 458-4805.",
        },
        {
          question: "Do you handle dock leveler pit integration during replacement?",
          answer: "Yes. FDZ coordinates with your dock equipment supplier during replacement to verify pit dimensions, anchor bolt placement, and conduit locations. We don't pour until we have the equipment specs in hand.",
        },
      ]}
    />
  );
}
