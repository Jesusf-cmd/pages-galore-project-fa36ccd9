import ServicePage from "@/components/ServicePageTemplate";

export default function CommercialConcreteRepair() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="commercial-concrete-repair-oklahoma-city"
      metaTitle="Commercial Concrete Repair Oklahoma City | FDZ Construction LLC"
      metaDescription="Commercial concrete repair in Oklahoma City — cracks, spalling, trip hazards, joint failure. Fast response. Licensed contractor. Call (405) 458-4805."
      eyebrow="OKC Metro · Commercial Concrete Repair · Licensed & Insured"
      title="Commercial Concrete Repair in"
      titleAccent="Oklahoma City."
      description='Commercial concrete repair in Oklahoma City — parking lots, sidewalks, entrances, warehouse floors, and loading docks. Honest repair-vs-replace evaluation. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Damaged concrete on a commercial property is a liability, not just an eyesore. A cracked parking lot creates trip hazards that expose you to slip-and-fall claims. Spalling concrete near an entrance sends the wrong message to customers and tenants. Joint failure in a warehouse floor creates forklift damage and OSHA concerns. FDZ handles the full range of commercial concrete repair in Oklahoma City — from parking lots and sidewalks to warehouse floors, loading docks, and building entrances — with honest repair-vs-replace recommendations and fast turnaround. Call (405) 458-4805."
      localExpertiseNote="OKC's expansive clay is the root cause of a disproportionate share of commercial concrete damage. When soil moisture levels change — heavy rain followed by drought — clay expands and contracts under slabs, causing movement that standard surface patch repairs won't fix. FDZ always investigates sub-base conditions before recommending repair. A patch on a failed base will fail again on the same timeline."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🔍",
          title: "Crack Repair",
          description:
            "Surface crack routing and sealing, epoxy injection for structural cracks, and polyurethane foam injection for settled slabs.",
        },
        {
          icon: "🏗️",
          title: "Spalling & Surface Repair",
          description:
            "Polymer-modified concrete patching for delaminated surfaces from freeze-thaw, chemical exposure, or rebar corrosion.",
        },
        {
          icon: "⚠️",
          title: "Trip Hazard Removal",
          description:
            "Grinding, patching, or panel replacement for uneven joints and lifted slab edges — documents liability remediation.",
        },
        {
          icon: "🔧",
          title: "Joint Sealant Replacement",
          description:
            "Route failed joints, install backer rod, apply fresh polyurethane sealant — the most impactful maintenance action for parking lots.",
        },
        {
          icon: "📦",
          title: "Full-Depth Repair Panels",
          description:
            "Saw-cut panel boundaries, full-depth removal, sub-base correction, and fresh concrete pour for severely damaged sections.",
        },
        {
          icon: "🏭",
          title: "Loading Dock & Warehouse Repair",
          description:
            "Dock face spalling, approach slab cracking, forklift damage, and floor panel repair — see also our Industrial Concrete Repair page.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Commercial Concrete Repair Services in Oklahoma City",
        items: [
          {
            title: "Surface Crack Repair",
            bullets: [
              "Route cracks to consistent profile and fill with flexible polyurethane sealant — prevents water infiltration and debris accumulation",
              "Epoxy injection for structural cracks that need to be bonded back together",
              "Wide cracks (>1/4\") require routing and proper sealant, not caulk",
              "OKC clay causes continuing movement — working cracks need flexible sealant, not rigid filler",
            ],
          },
          {
            title: "Spalling & Surface Damage Repair",
            bullets: [
              "Polymer-modified concrete patching for localized delamination",
              "Surface grinding where needed for flush, trip-hazard-free finish",
              "High-strength materials rated for vehicle and foot traffic loads",
              "Root cause evaluation — if rebar corrosion is causing the spalling, surface patch alone won't hold",
            ],
          },
          {
            title: "Trip Hazard Remediation",
            bullets: [
              "Grinding down raised slab edges and joint lips (fastest, lowest cost where height differential is under 1\")",
              "Concrete patching to fill settled sections",
              "Full-depth panel replacement where grinding can't resolve the height difference",
              "Documentation package after completion for property liability files",
            ],
          },
          {
            title: "Joint Sealant Replacement",
            bullets: [
              "Route and clean existing joints to remove deteriorated sealant and debris",
              "Install backer rod to correct depth",
              "Apply polyurethane sealant — flexible, UV-resistant, fuel-resistant for parking applications",
              "All joint types: control joints, expansion joints, construction joints",
            ],
          },
          {
            title: "Slab Lifting & Leveling",
            bullets: [
              "Polyurethane foam injection under settled slabs — drilled holes, foam injection, controlled lift",
              "Faster and less disruptive than full slab replacement for settlement situations",
              "Works best when sub-base is still sound — foam lifts and stabilizes where there's a void",
              "Not appropriate when base failure is widespread",
            ],
          },
        ],
      }}
      processSteps={[
        {
          title: "On-Site Assessment",
          description:
            "Root cause identification — surface damage, sub-base conditions, and rebar status all evaluated before any repair recommendation.",
        },
        {
          title: "Repair Method Recommendation",
          description:
            "Honest repair vs. replace framing — FDZ will recommend repair even when replacement would generate more revenue.",
        },
        {
          title: "Written Scope & Quote",
          description:
            "Itemized written quote with repair method, materials, and timeline — no verbal estimates for commercial work.",
        },
        {
          title: "Surface Preparation",
          description:
            "Grinding, saw-cutting, cleaning, and priming as required by repair method — proper prep is what determines repair longevity.",
        },
        {
          title: "Repair Execution & Documentation",
          description:
            "Repair completed per scope with before/after photos and completion documentation provided for your property liability files.",
        },
      ]}
      processEyebrow="How It Works"
      processTitle="The Commercial Repair"
      processTitleAccent="Process."
      sections={[
        {
          eyebrow: "Honest Assessment",
          title: "Repair or",
          titleAccent: "Replace?",
          content: [
            "Repair is the right call when damage is surface-level or isolated, the slab sub-base is stable, there are no signs of base failure, and repairs can restore safe, functional use. Localized cracks, spalling in isolated areas, joint failure, and surface erosion are all repair candidates.",
            "Full replacement is warranted when there's widespread structural cracking through the slab, sub-base failure (slab that bounces or flexes under load), widespread rebar corrosion, or when the cost of repair approaches the cost of replacement. FDZ will always tell you honestly which applies — we'll recommend repair even when replacement would be more revenue for us.",
          ],
          table: {
            headers: ["Scenario", "Recommendation"],
            rows: [
              ["Localized surface cracks or spalling", "Repair"],
              ["Failed joint sealant", "Seal / repair"],
              ["Single settled section on stable base", "Foam lift or panel repair"],
              ["Widespread cracking across large area", "Full replacement evaluation"],
              ["Sub-base failure / slab flex under load", "Full replacement"],
              ["Rebar corrosion (widespread spalling)", "Full replacement evaluation"],
            ],
          },
        },
        {
          eyebrow: "Pricing",
          title: "Commercial Repair",
          titleAccent: "Cost Ranges.",
          content: [
            "Commercial concrete repair pricing varies by damage type, area, and repair method. Most repairs are significantly less expensive than section replacement.",
            "Call (405) 458-4805 for an on-site assessment and written quote.",
          ],
          table: {
            headers: ["Repair Type", "Typical Range"],
            rows: [
              ["Crack routing & sealant (per linear ft.)", "$5 – $15"],
              ["Concrete patch / spall repair (per sq. ft.)", "$12 – $35"],
              ["Trip hazard grinding (per location)", "$75 – $250"],
              ["Joint sealant replacement (per linear ft.)", "$4 – $10"],
              ["Slab lifting / foam injection (per sq. ft.)", "$5 – $12"],
              ["Full-depth repair panel", "$400 – $3,000+"],
              ["Section replacement (per sq. ft.)", "$8 – $16"],
            ],
          },
        },
        {
          eyebrow: "Related Services",
          title: "Other Commercial Concrete",
          titleAccent: "Services.",
          content: [
            "<a href='/industrial-concrete-repair-oklahoma-city' class='text-orange no-underline font-medium'>Industrial Concrete Repair</a> — Loading dock face spalling, approach slabs, forklift floor damage, and heavy-industrial concrete repair.",
            "<a href='/parking-lots-oklahoma-city' class='text-orange no-underline font-medium'>Parking Lot Concrete</a> — Full parking lot replacement and new construction with ADA-compliant layouts.",
            "<a href='/ada-ramps-oklahoma-city' class='text-orange no-underline font-medium'>ADA Ramps & Compliance</a> — ADA curb ramps, curb cuts, and accessible surface remediation for OKC commercial properties.",
            "<a href='/concrete-maintenance-oklahoma-city' class='text-orange no-underline font-medium'>Concrete Maintenance</a> — Preventive sealing, joint maintenance, and annual inspection programs for commercial concrete.",
          ],
        },
      ]}
      faq={[
        {
          question:
            "How do I know if my concrete needs repair or full replacement?",
          answer:
            "Repair works when damage is isolated and the sub-base is stable. Replacement is warranted when there's sub-base failure (slab flex, widespread settlement), structural cracking across large areas, or rebar corrosion that's widespread. FDZ evaluates the root cause and recommends honestly.",
        },
        {
          question:
            "What causes concrete to crack on commercial properties in Oklahoma City?",
          answer:
            "OKC's expansive clay is the primary cause. Seasonal moisture changes cause clay to swell and shrink under slabs, creating movement that leads to cracking and settlement. Inadequate base prep, insufficient slab thickness, and failed joint sealing all accelerate damage.",
        },
        {
          question: "How long do concrete repairs last?",
          answer:
            "Quality repairs using polymer-modified concrete in properly prepared surfaces last 10–20+ years. Repairs that fail quickly were typically done without adequate surface preparation, wrong materials, or placed over a failed sub-base that continues to move.",
        },
        {
          question:
            "Can concrete repairs be matched to existing color and finish?",
          answer:
            "Color matching is approximate — new concrete will never be a perfect color match to weathered existing concrete. Surface texture (broom finish) can be matched closely. Over time, weathering brings repairs closer to the surrounding surface.",
        },
        {
          question:
            "How quickly can you respond to commercial concrete repair requests in OKC?",
          answer:
            "We typically respond to commercial repair requests within 24–48 hours for assessment. Many repairs can be completed within 1–2 weeks of quote acceptance. Emergency liability situations (trip hazards) get priority scheduling.",
        },
        {
          question:
            "Will concrete repairs fix my trip hazard liability exposure?",
          answer:
            "Yes, when properly documented. FDZ provides before/after photos and completion documentation for every trip hazard repair — records you can present as evidence of prompt remediation if a claim is ever filed.",
        },
        {
          question: "Can you repair concrete while my business is open?",
          answer:
            "Yes. Most commercial concrete repairs can be sequenced to avoid business disruption — early morning work, phased repair of sections, or after-hours scheduling. FDZ discusses operational constraints before scheduling any repair work.",
        },
      ]}
    />
  );
}
