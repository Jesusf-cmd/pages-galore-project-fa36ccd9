import ServicePage from "@/components/ServicePageTemplate";

export default function IndustrialConcreteRepair() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="industrial-concrete-repair-oklahoma-city"
      metaTitle="Industrial Concrete Repair Oklahoma City | FDZ Construction LLC"
      metaDescription="Industrial concrete repair in Oklahoma City — forklift damage, spalling, joint failure, dock repairs. Fast return to service. Licensed &amp; insured. Call (405) 458-4805."
      eyebrow="OKC Metro · Industrial Concrete Repair · Licensed & Insured"
      title="Industrial Concrete Repair in"
      titleAccent="Oklahoma City."
      description='Fast, durable industrial concrete repair for warehouses, loading docks, and manufacturing facilities. Call <a href="tel:4054584805">(405) 458-4805</a> to schedule.'
      introText="Industrial floors and loading docks take punishment that residential concrete never sees — forklifts, pallet jacks, chemical spills, heavy point loads, and constant traffic. When damage appears, slow response makes it worse and more expensive. FDZ provides rapid industrial concrete repair using materials rated for heavy industrial environments and methods matched to the type and extent of damage. Call (405) 458-4805 to discuss rapid response scheduling."
      localExpertiseNote="Industrial facilities in Oklahoma City also deal with OKC's soil-related damage mechanisms — clay-induced sub-base settlement, moisture infiltration through failed joints during wet Oklahoma winters, and freeze-thaw cycling that enlarges existing cracks. FDZ evaluates whether damage is surface-only or driven by sub-base movement before recommending repair methods."
      serviceLabel="Commercial"
      serviceCards={[
        { icon: "🔧", title: "Forklift Damage Repair", description: "Joint spalling from forklift impact is the most common industrial floor failure. FDZ fills and reinforces joints and installs armored joint systems where needed." },
        { icon: "🪨", title: "Spalling & Surface Repair", description: "Delamination from freeze-thaw, chemical exposure, or rebar corrosion. Polymer-modified patching materials rated for industrial loads." },
        { icon: "🔲", title: "Joint Replacement", description: "Failed joint sealant allows water to reach sub-base. Catching joint failure early prevents far more expensive repair later." },
        { icon: "〰️", title: "Crack Repair", description: "Epoxy injection for structural cracks. Routing and sealing for working cracks. Repair method matched to crack classification." },
        { icon: "🏭", title: "Loading Dock Face Repair", description: "Dock face spalling from trailer impact and bumper wear. High-strength patching with dock height verification after repair." },
        { icon: "📐", title: "Full-Depth Panel Repair", description: "For areas beyond surface repair. Saw-cut panel boundaries, full-depth removal, sub-base inspection, and flush new pour." },
      ]}
      subServices={{
        sectionEyebrow: "Repair Services",
        sectionTitle: "What We Repair",
        items: [
          {
            title: "Forklift Damage Repair",
            bullets: [
              "Joint spalling from forklift impact is the most common industrial floor failure mode",
              "FDZ fills and reinforces damaged joints using polymer-modified materials",
              "Armored joint systems installed where repeated impact is expected",
            ],
          },
          {
            title: "Spalling & Surface Repair",
            bullets: [
              "Delamination from freeze-thaw cycling, chemical exposure, or rebar corrosion",
              "Polymer-modified concrete patching materials rated for industrial loads",
              "Surface grinding where needed for flush, level finish",
            ],
          },
          {
            title: "Joint Sealant Replacement",
            bullets: [
              "Failed joint sealant allows water to reach sub-base — the beginning of more expensive failure",
              "All joint types: control joints, expansion joints, and construction joints",
              "Early joint sealing maintenance is far cheaper than sub-base or slab repair",
            ],
          },
          {
            title: "Crack Repair",
            bullets: [
              "Epoxy injection for structural cracks that must be bonded back together",
              "Routing and sealing for working cracks that allow movement",
              "Crack classification determines the correct repair method — FDZ evaluates before recommending",
            ],
          },
          {
            title: "Loading Dock Face Repair",
            bullets: [
              "Dock face spalling from repeated trailer impact and bumper wear",
              "High-strength patching materials matched to dock face environment",
              "Dock height verified after repair to confirm trailer seal is maintained",
            ],
          },
          {
            title: "Full-Depth Repair Panels",
            bullets: [
              "For localized areas beyond surface repair",
              "Saw-cut panel boundaries, full-depth removal, sub-base inspection and correction",
              "New panel poured flush with surrounding floor",
            ],
          },
        ],
      }}
      processSteps={[
        { title: "Damage Assessment & Root Cause Identification", description: "Evaluate the damage type, extent, and underlying cause. Determine whether damage is surface-only or driven by sub-base movement or moisture infiltration." },
        { title: "Repair Method Selection", description: "Select the repair method matched to the damage type: epoxy injection, polymer patch, armored joint, or full-depth panel. Document the approach before work starts." },
        { title: "Surface Preparation", description: "Grinding, saw-cutting, and cleaning to remove deteriorated material and prepare a sound bonding surface. Surface prep determines repair longevity." },
        { title: "Material Placement", description: "Epoxy injection, polymer-modified concrete patching, armored joint installation, or full-depth panel pour — matched to the repair method selected." },
        { title: "Curing & Return to Service", description: "Rapid-set materials return to service in 2–4 hours. Full-depth panels require standard curing. FDZ coordinates return-to-service timing with your operations." },
      ]}
      processEyebrow="How We Repair It"
      processTitle="The Industrial Repair"
      processTitleAccent="Process."
      sections={[
        {
          eyebrow: "Honest Assessment",
          title: "Repair or",
          titleAccent: "Replace?",
          content: [
            "Surface repair is the right call when the slab is structurally sound — the sub-base is stable, there's no widespread cracking, and damage is localized to joints, surfaces, or small areas. Industrial repair using polymer-modified materials returns damaged areas to service faster and at far lower cost than slab replacement.",
            "Full replacement is warranted when there's sub-base failure across large areas, widespread structural cracking that goes through the slab thickness, or rebar corrosion causing widespread spalling. FDZ will tell you which applies — we don't push replacement when repair is the honest answer.",
          ],
        },
        {
          eyebrow: "Pricing",
          title: "Industrial Repair",
          titleAccent: "Cost Ranges.",
          content: [
            "Industrial concrete repair pricing varies widely based on damage type, area, and repair method required.",
            "For rapid response or after-hours scheduling, call (405) 458-4805.",
          ],
          table: {
            headers: ["Repair Type", "Typical Range"],
            rows: [
              ["Crack injection (per linear ft.)", "$10 – $25"],
              ["Spall repair (per sq. ft.)", "$15 – $40"],
              ["Joint sealant replacement (per linear ft.)", "$8 – $20"],
              ["Full-depth repair panel", "$500 – $3,000+"],
              ["Loading dock face repair", "$800 – $5,000+"],
              ["Forklift joint repair (armored system)", "$150 – $400 per joint"],
            ],
          },
        },
      ]}
      faq={[
        {
          question: "How quickly can industrial concrete be repaired?",
          answer: "Surface repairs using rapid-set polymer-modified concrete can return to service in 2–4 hours. Full-depth panel repairs require standard curing time — 24–48 hours minimum before light traffic, longer for full forklift loads. FDZ can discuss scheduling around your operations.",
        },
        {
          question: "Can forklift-damaged concrete be repaired without full replacement?",
          answer: "Yes, in most cases. Joint spalling from forklift impact is a surface and joint failure, not a structural slab failure. Polymer-modified patching and armored joint systems repair the damage and prevent recurrence. Full replacement is only warranted when the sub-base has failed beneath the damaged area.",
        },
        {
          question: "What causes loading dock concrete to spall?",
          answer: "Most dock face spalling is caused by repeated trailer impact combined with freeze-thaw cycling. The impact cracks the surface; moisture infiltrates; freezing water expands the crack; the cycle continues and worsens. Quality repair includes addressing the moisture pathway, not just filling the spall.",
        },
        {
          question: "How long do industrial concrete repairs last?",
          answer: "Quality repairs using polymer-modified concrete in properly prepared surfaces last 10–20+ years. Repairs that fail quickly were typically placed without adequate surface preparation or used materials not rated for industrial loads. Prep work determines longevity.",
        },
        {
          question: "Can repairs be done while the facility is operating?",
          answer: "Yes. FDZ schedules repair work around your operations — nights, weekends, or section-by-section repair that keeps traffic areas open. Call (405) 458-4805 to discuss scheduling.",
        },
        {
          question: "How do I know if my industrial floor needs repair or full replacement?",
          answer: "Localized damage, joint failure, and surface spalling are repair candidates. Widespread structural cracking across large areas, sub-base settlement causing floor bounce or flex under load, or widespread rebar corrosion typically indicate replacement is needed. FDZ evaluates the root cause and recommends accordingly.",
        },
      ]}
    />
  );
}
