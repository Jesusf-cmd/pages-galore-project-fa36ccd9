import ServicePage from "@/components/ServicePageTemplate";

export default function WarehouseFloorReplacement() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="warehouse-floor-replacement-oklahoma-city"
      metaTitle="Warehouse Floor Replacement Oklahoma City | FDZ Construction LLC"
      metaDescription="Warehouse floor replacement in Oklahoma City. Phased pours, flatness tolerances for forklifts, 8&quot;+ reinforced concrete. Licensed commercial contractor. Call (405) 458-4805."
      eyebrow="OKC Metro · Warehouse Floor Replacement · Licensed & Insured"
      title="Warehouse Floor Replacement in"
      titleAccent="Oklahoma City."
      description='Full warehouse floor replacement with phased scheduling to keep your facility operational. Call <a href="tel:4054584805">(405) 458-4805</a> to discuss your project.'
      introText="Full warehouse floor replacement is one of the most complex concrete projects in commercial construction — you're working inside an occupied or semi-occupied facility, often in phases, with tight flatness tolerances required for forklift operations. FDZ manages the full scope from demolition through final cure with phased scheduling that keeps your facility operational. Call (405) 458-4805 to discuss your project and get a free site walk estimate."
      localExpertiseNote="Oklahoma City's expansive clay creates unique sub-base challenges for warehouse floors. Old floors often failed because they were poured on inadequate base over clay that has since moved. A replacement that matches the original base spec will fail on the same timeline. FDZ investigates the sub-base condition with test excavations and corrects it before the new slab goes in — this is the step that determines whether the replacement lasts."
      serviceLabel="Commercial"
      serviceCards={[
        { icon: "🏭", title: "Full Warehouse Floor Replacement", description: "Complete demolition and replacement to flatness specs required by your material handling equipment. Laser screed finish and engineered joint system." },
        { icon: "📐", title: "Phased Section Replacement", description: "Section-by-section replacement keeps active areas operational while each phase is demolished, poured, and cured." },
        { icon: "🪨", title: "Sub-Base Remediation", description: "Old OKC warehouse floors often sit on under-engineered sub-base over clay. FDZ investigates and corrects before pouring." },
        { icon: "⚖️", title: "Laser Screed Flatwork", description: "Pour to the FF/FL numbers required by your facility and material handling equipment." },
        { icon: "🔲", title: "Saw-Cut Joint System", description: "Engineered control joint layout for your floor's slab thickness, mix design, and operational loads. Not guessed — engineered." },
      ]}
      subServices={{
        sectionEyebrow: "Replacement Services",
        sectionTitle: "What We Do",
        items: [
          {
            title: "Full Warehouse Floor Replacement",
            bullets: [
              "Complete demolition and replacement of existing warehouse slab",
              "Sub-base investigation and correction before any concrete goes in",
              "8-inch minimum reinforced concrete poured to flatness specs required by your equipment",
              "Laser screed finish and engineered joint system",
            ],
          },
          {
            title: "Phased Section Replacement",
            bullets: [
              "Most occupied warehouses cannot shut down for 4–6 weeks",
              "FDZ creates a phased pour schedule — section by section with each phase demolished, poured, and cured",
              "Coordinate phasing sequence with your operations manager before work starts",
            ],
          },
          {
            title: "Sub-Base Remediation",
            bullets: [
              "Old warehouse floors in OKC often sit on under-engineered sub-base over moving clay",
              "Sub-base condition investigated with test excavations",
              "Proper aggregate base installed and compacted before pour",
            ],
          },
          {
            title: "Laser Screed Flatwork",
            bullets: [
              "Warehouse floor FF and FL numbers are critical for narrow-aisle forklifts and high-lift equipment",
              "FDZ pours to the F-numbers specified by your facility or material handling consultant",
              "Laser screed used across large-area pours for consistent flatness",
            ],
          },
          {
            title: "Joint System Design",
            bullets: [
              "Control joint layout is engineered, not guessed",
              "Joint spacing, joint type, and sealant selection driven by slab thickness, mix design, and operational loads",
              "Improper joint layout is a common cause of warehouse floor cracking",
            ],
          },
        ],
      }}
      processSteps={[
        { title: "Free Site Walk & Scope Evaluation", description: "Walk the facility, assess existing floor condition, document damage patterns, and evaluate sub-base condition. Identify flatness requirements and phasing constraints." },
        { title: "Flatness Spec Review", description: "Confirm the FF/FL numbers required by your material handling equipment. Narrow-aisle operations need significantly higher F-numbers than standard counterbalance forklifts." },
        { title: "Phased Replacement Planning", description: "Work with your operations manager to create a phased pour sequence that keeps active warehouse areas open while each section is replaced." },
        { title: "Section Demolition & Debris Removal", description: "Demolish each section per the phasing plan. Debris hauled off-site. Sub-base exposed for inspection." },
        { title: "Sub-Base Investigation & Correction", description: "Inspect the exposed sub-base. Correct compromised material with proper aggregate base installation and compaction before any concrete goes in." },
        { title: "Rebar Placement per Engineering", description: "Reinforcement placed to engineered schedule. Slab thickness and rebar spec driven by your heaviest loads and equipment requirements." },
        { title: "Pour & Laser Screed Finish", description: "Concrete poured and finished with laser screed to achieve the F-numbers specified for your operation. Large-area sections poured with proper sequence and joint timing." },
        { title: "Saw-Cut Joint Pattern", description: "Control joints saw-cut on engineered spacing within 24 hours of pour. Joint timing is critical to prevent random cracking." },
        { title: "Curing & Move to Next Phase", description: "Full cure before returning to service. After cure, move to the next phase of the replacement sequence." },
      ]}
      processEyebrow="How We Do It"
      processTitle="Warehouse Floor"
      processTitleAccent="Replacement Process."
      sections={[
        {
          eyebrow: "Assessment",
          title: "When a Warehouse Floor Needs",
          titleAccent: "Full Replacement.",
          content: [
            "Extensive cracking across large areas, not isolated to joints. Sub-base failure — floor that bounces or flexes under load. Severely uneven floors affecting forklift safety and pallet stability. Old floors poured to inadequate specs that can't support modern equipment loads. Rebar corrosion causing widespread spalling. These are not repair scenarios — they require full replacement to achieve the flatness and load capacity modern warehouse operations demand.",
            "If your issue is localized — joint spalling, isolated cracks, dock damage — repair may be the right call. See our <a href='/industrial-concrete-repair-oklahoma-city'>industrial concrete repair page</a> for those cases.",
          ],
        },
        {
          eyebrow: "Technical Specs",
          title: "Floor Flatness &",
          titleAccent: "Levelness (FF/FL).",
          content: [
            "FF (floor flatness) and FL (floor levelness) are the industry-standard measurements for warehouse floor quality. FF measures short-term surface waviness; FL measures long-term slope and tilt. Both numbers matter for forklift operations — a floor that is flat but not level causes instability on high-lift equipment; a floor that is level but wavy causes instability on standard equipment.",
            "Conventional forklift operations typically require FF 25/FL 20 minimum. Narrow-aisle and very narrow-aisle operations typically specify FF 50/FL 35 or higher. FDZ pours to the F-numbers your operation requires.",
          ],
          table: {
            headers: ["Forklift Type", "Typical FF/FL Spec"],
            rows: [
              ["Counterbalance forklift (standard)", "FF 25 / FL 20"],
              ["Reach truck", "FF 35 / FL 25"],
              ["Narrow-aisle (turret truck)", "FF 50 / FL 35"],
              ["Very narrow-aisle (wire-guided)", "FF 100+ / FL 50+"],
            ],
          },
        },
        {
          eyebrow: "Pricing",
          title: "Warehouse Floor",
          titleAccent: "Cost Ranges.",
          content: [
            "Warehouse floor replacement pricing is driven by square footage, slab thickness, F-number requirements, phasing complexity, and sub-base condition.",
            "Call (405) 458-4805 for a free site walk and scope estimate.",
          ],
          table: {
            headers: ["Scope", "Typical Range"],
            rows: [
              ["Floor replacement (per sq. ft.)", "$8 – $16"],
              ["10,000 sq. ft. floor", "$80,000 – $160,000"],
              ["50,000 sq. ft. floor", "$400,000 – $800,000"],
              ["Demolition only (per sq. ft.)", "$2 – $4"],
              ["Sub-base correction (per sq. ft.)", "$1 – $3"],
            ],
          },
        },
      ]}
      faq={[
        {
          question: "How long does warehouse floor replacement take?",
          answer: "Section-by-section phased replacement for a 50,000 sq. ft. warehouse typically runs 8–16 weeks including cure time between phases. Full facility shutdown replacement is faster but rarely practical for operating facilities.",
        },
        {
          question: "Can you replace a warehouse floor while we keep operating?",
          answer: "Yes. Phased replacement keeps sections of your floor operational while each phase is demolished, poured, and cured. Coordination with your operations manager before work starts is essential. Call (405) 458-4805 to discuss your facility's constraints.",
        },
        {
          question: "What flatness spec should my warehouse floor be?",
          answer: "Minimum FF 25/FL 20 for standard counterbalance forklifts. Reach trucks typically need FF 35/FL 25. Narrow-aisle equipment needs FF 50/FL 35 or higher. Your material handling equipment supplier or consultant can confirm the spec for your specific operation.",
        },
        {
          question: "How thick should a warehouse concrete floor be?",
          answer: "Minimum 6 inches for standard counterbalance forklifts. Heavy-duty industrial operations typically spec 7–8 inches. Very heavy point loads from pallet racking or industrial equipment may require 8–10 inches or more with additional reinforcement. Thickness is driven by your heaviest load.",
        },
        {
          question: "How much does warehouse floor replacement cost in Oklahoma City?",
          answer: "Replacement typically runs $8–$16 per square foot for the concrete work, plus demolition ($2–$4/sq. ft.) and sub-base correction where needed. A 20,000 sq. ft. floor typically runs $160,000–$320,000 for the concrete scope. Call (405) 458-4805 for a free site walk.",
        },
        {
          question: "Why is my warehouse floor cracking?",
          answer: "Most OKC warehouse floor cracking traces to three causes: inadequate sub-base on clay that has since moved seasonally, insufficient slab thickness for the actual loads being applied, or joint spacing and sealant maintenance failure allowing water infiltration. FDZ evaluates the root cause before recommending repair or replacement.",
        },
        {
          question: "Do you pour to specific FF/FL numbers?",
          answer: "Yes. FDZ pours to the F-numbers required by your facility, using a laser screed to achieve consistent flatness across large-area pours. We confirm the target F-numbers before work starts.",
        },
      ]}
    />
  );
}
