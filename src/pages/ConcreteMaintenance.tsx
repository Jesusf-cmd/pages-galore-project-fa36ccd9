import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteMaintenance() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="concrete-maintenance-oklahoma-city"
      metaTitle="Concrete Maintenance Oklahoma City | FDZ Construction LLC"
      metaDescription="Concrete maintenance programs for OKC commercial properties — crack sealing, joint sealing, surface sealing, trip hazard grinding. Call (405) 458-4805."
      eyebrow="OKC Metro · Concrete Maintenance · Licensed & Insured"
      title="Concrete Maintenance in"
      titleAccent="Oklahoma City."
      description='Annual concrete maintenance programs for Oklahoma City commercial properties — crack sealing, joint sealing, surface sealing, and trip hazard repair. $150 now prevents $3,000 later. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Concrete maintenance is the cheapest concrete work you'll ever do — and the most neglected. A crack sealed today for $150 doesn't become a joint failure at $3,000. A surface sealed annually doesn't spall from freeze-thaw cycles and require panel replacement. A trip hazard ground down in an afternoon doesn't become an ADA violation or a slip-and-fall liability. FDZ provides concrete maintenance programs for commercial and industrial properties throughout the OKC metro — single-property annual visits or multi-property portfolio contracts. Call (405) 458-4805."
      localExpertiseNote="Oklahoma City's climate is hard on concrete. Hot, dry summers cause concrete to shrink and open existing cracks. Wet springs saturate subgrade. Freeze-thaw cycles in winter push water into micro-cracks and spall surfaces. Seal joints and cracks before winter, and concrete survives the cycle. Skip maintenance for a few years in OKC, and panels that were in good shape are now scheduled for replacement."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🔍",
          title: "Annual Concrete Inspection",
          description: "Systematic inspection of all flatwork, joints, cracks, and drainage — written condition report with prioritized repair recommendations.",
        },
        {
          icon: "🔧",
          title: "Crack and Joint Sealing",
          description: "Clean and seal working cracks and deteriorated control joints with appropriate sealant — prevents water infiltration and subgrade erosion.",
        },
        {
          icon: "⚠️",
          title: "Trip Hazard Grinding",
          description: "Diamond grinding of vertical slab offsets at joints and cracks — eliminates trip hazards, ADA violations, and slip-and-fall liability.",
        },
        {
          icon: "💧",
          title: "Surface Sealing",
          description: "Penetrating silane/siloxane or film-forming sealer applied to flatwork — reduces freeze-thaw spalling and chemical penetration.",
        },
        {
          icon: "🏢",
          title: "Multi-Property Programs",
          description: "Portfolio maintenance programs for property managers and REITs — scheduled annual visits across multiple OKC properties.",
        },
        {
          icon: "📋",
          title: "Capital Planning Reports",
          description: "Condition assessment and 5-year capital repair forecast — useful for budgeting, property transactions, and deferred maintenance planning.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Maintenance Services",
        sectionTitle: "Concrete Maintenance We Provide",
        items: [
          {
            title: "Crack and Joint Sealing",
            bullets: [
              "Working cracks (cracks that move with temperature) require flexible polyurethane or silicone sealant — rigid grout fails",
              "Deteriorated control joints re-routed and filled with appropriate sealant — restores joint function",
              "Sealed joints prevent water infiltration that erodes subgrade and causes differential settlement",
              "Best done in fall before OKC freeze-thaw season — sealing in summer heat produces inferior results",
            ],
          },
          {
            title: "Trip Hazard Elimination",
            bullets: [
              "Vertical offsets of 1/4\" or more at joints and cracks are ADA violations in accessible routes",
              "Diamond grinding removes vertical lip without removing the slab — preserves existing concrete",
              "Grinding is typically 10–20x cheaper than slab panel replacement for isolated offsets",
              "Ground surface finished to match adjacent panel texture where possible",
            ],
          },
          {
            title: "Surface Sealing",
            bullets: [
              "Penetrating silane/siloxane sealer: penetrates concrete and repels water — does not change surface appearance, lasts 3–7 years",
              "Film-forming acrylic sealer: surface coating, changes appearance, requires reapplication every 2–3 years",
              "Surface sealing is critical before OKC winters — unsealed concrete absorbs water that freezes and spalls the surface",
              "Deicers (especially magnesium chloride) accelerate surface scaling — sealing provides chemical barrier",
            ],
          },
          {
            title: "The Cost Argument for Maintenance",
            bullets: [
              "Crack seal: $50–$200 per linear foot. Joint failure repair: $800–$2,000 per joint. Replace panel: $8–$20/sq. ft.",
              "A 20,000 sq. ft. parking lot with annual maintenance: $2,000–$5,000/year",
              "The same lot deferred for 5 years: $40,000–$80,000 in panel replacement, joint repair, and drainage correction",
              "Insurance and liability costs from trip hazards typically dwarf the cost of annual grinding",
            ],
          },
        ],
      }}
      sections={[
        {
          eyebrow: "Maintenance Schedule",
          title: "Recommended Annual",
          titleAccent: "Maintenance Calendar.",
          content: [
            "OKC's climate creates a specific maintenance calendar. Seal in fall before freeze-thaw season. Inspect in spring after winter damage is visible. Repair before summer heat opens cracks further.",
          ],
          table: {
            headers: ["Season", "Recommended Maintenance"],
            rows: [
              ["Spring (March–April)", "Post-winter inspection — identify freeze-thaw spalling and new cracks"],
              ["Spring–Summer", "Trip hazard grinding, panel repair — concrete cures well in warm weather"],
              ["Fall (September–October)", "Crack and joint sealing before freeze season — optimal sealant cure conditions"],
              ["Fall", "Surface sealing before first freeze"],
              ["Ongoing", "Drainage management — standing water accelerates all concrete deterioration"],
              ["Every 5 years", "Capital planning assessment — 5-year repair forecast for budget planning"],
            ],
          },
        },
        {
          eyebrow: "Related Services",
          title: "Concrete Repair",
          titleAccent: "Services.",
          content: [
            "<a href='/industrial-concrete-repair-oklahoma-city' class='text-orange no-underline font-medium'>Industrial Concrete Repair</a> — Forklift damage, spalling, joint failure — rapid return to service for industrial facilities.",
            "<a href='/driveway-repair-oklahoma-city' class='text-orange no-underline font-medium'>Driveway Repair</a> — Residential and commercial driveway crack repair, panel replacement, and resurfacing.",
            "<a href='/commercial-concrete-repair-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete Repair</a> — Parking lot panel replacement, trip hazard repair, and flatwork restoration.",
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>All Commercial Concrete</a> — Full range of commercial and industrial concrete services in OKC.",
          ],
        },
      ]}
      processEyebrow="Maintenance Program"
      processTitle="How Our Maintenance"
      processTitleAccent="Program Works."
      processSteps={[
        { title: "Initial condition assessment", description: "Walk all concrete with written condition report — cracks, joint condition, surface scaling, trip hazards, drainage issues. Prioritized repair list with estimated costs." },
        { title: "Immediate life-safety items", description: "Trip hazards and ADA violations are addressed first — liability exposure from these is not a budget conversation." },
        { title: "Fall sealing visit", description: "Annual fall visit for crack sealing, joint sealing, and surface sealing before freeze-thaw season. Scheduled, not reactive." },
        { title: "Spring inspection", description: "Post-winter inspection to identify new damage from freeze-thaw cycles. Update repair list and schedule." },
        { title: "Repair execution", description: "Complete prioritized repairs — panel replacement, joint repair, spall patching — during spring/summer construction season." },
        { title: "5-year capital planning update", description: "Every 5 years, full condition assessment with 5-year repair forecast — useful for capital budgeting and property transactions." },
      ]}
      faq={[
        {
          question: "How often should commercial concrete be sealed in Oklahoma City?",
          answer: "Penetrating silane/siloxane sealer lasts 3–7 years depending on traffic and exposure. Film-forming acrylic sealers last 2–3 years. For OKC's climate — hot summers, freeze-thaw winters, spring rains — sealing every 2–3 years is appropriate for high-exposure flatwork like parking lots and truck courts. Covered or interior concrete may need less frequent sealing.",
        },
        {
          question: "What's the ADA requirement for trip hazards?",
          answer: "ADA Standards for Accessible Design require accessible routes to be stable, firm, and slip resistant, and prohibit vertical changes in level greater than 1/4\" without a bevel, and greater than 1/2\" without a ramp. Any vertical offset of 1/4\" or more in a pedestrian path is a potential ADA violation. Diamond grinding to eliminate the offset is typically the most cost-effective solution.",
        },
        {
          question: "Can you manage concrete maintenance for multiple properties?",
          answer: "Yes. FDZ provides multi-property maintenance programs for property managers, REITs, and commercial property owners with multiple OKC locations. Annual contracts with scheduled visits, standardized condition reporting, and consolidated billing. Call (405) 458-4805 to discuss your portfolio.",
        },
        {
          question: "What's the difference between crack sealing and crack repair?",
          answer: "Crack sealing fills a working crack with flexible sealant to prevent water infiltration — the crack remains but water can't enter. Crack repair (routing, filling with rigid material) is for stable cracks that aren't expected to move. Working cracks — cracks that open and close with temperature — must be sealed with flexible material, not rigid grout. FDZ specifies the correct approach based on crack type.",
        },
        {
          question: "At what point does maintenance stop making sense and replacement become necessary?",
          answer: "When more than 30–35% of a parking lot or flatwork area requires panel replacement, total reconstruction often costs less than phased repairs. When subgrade failure is causing differential settlement, surface maintenance is wasted money — you need to fix the subgrade. FDZ's condition assessment reports include a frank recommendation on the maintenance vs. replacement question.",
        },
      ]}
    />
  );
}
