import ServicePage from "@/components/ServicePageTemplate";

export default function ADACompliance() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="ada-ramps-oklahoma-city"
      metaTitle="ADA Ramps & Concrete Compliance Oklahoma City | FDZ Construction LLC"
      metaDescription="ADA-compliant concrete ramps, curb cuts & accessible surfaces in Oklahoma City. Licensed contractor. Fix violations fast. Free estimates — (405) 458-4805."
      eyebrow="OKC Metro · ADA Compliance · Licensed & Insured"
      title="ADA Ramps & Concrete Compliance in"
      titleAccent="Oklahoma City."
      description='ADA-compliant concrete ramps, curb cuts, and accessible surfaces in Oklahoma City — fast response to violations and proactive upgrades. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="The Americans with Disabilities Act requires accessible concrete surfaces at every commercial property — parking lots, entrances, sidewalks, and curb transitions. Non-compliant properties face fines, lawsuits, and liability exposure. FDZ builds and repairs ADA-compliant concrete ramps, curb cuts, and accessible surfaces throughout the OKC metro. Whether you received a violation notice, failed an inspection, or are proactively upgrading your property, we provide fast, code-compliant installation with documentation you can present to inspectors and tenants."
      localExpertiseNote="Commercial properties along Penn Ave, May Ave, NW Expressway, and in downtown OKC are actively inspected for ADA compliance. Newly permitted projects require ADA-compliant accessible routes as a condition of certificate of occupancy. OKC's expansive clay also creates a secondary challenge: accessible surfaces that were compliant when poured can become non-compliant as clay movement creates cross-slopes exceeding the 2% ADA limit."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "♿",
          title: "Curb Ramp & Curb Cut Construction",
          description:
            "New curb ramps at parking lot transitions — saw-cut existing curb, proper 1:12 slope, detectable warning surface, and compliant landing at top and bottom.",
        },
        {
          icon: "🔧",
          title: "ADA Ramp Construction",
          description:
            "Freestanding ramps at building entrances and loading areas — width, slope, landing, and handrail coordination per ADA standards.",
        },
        {
          icon: "🅿️",
          title: "Parking Lot ADA Upgrades",
          description:
            "Accessible parking spaces, access aisles, and connecting routes — layout, slope, marking, and signage coordination.",
        },
        {
          icon: "⚠️",
          title: "Detectable Warning Surfaces",
          description:
            "Truncated dome panels or cast-in-place dome concrete at curb ramp transitions — required at all curb ramps per ADA and OKC code.",
        },
        {
          icon: "📋",
          title: "Violation Remediation",
          description:
            "Fast response to cited violations with documentation package — photos, measurements, and completion certificate for the city or ADA inspector.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "ADA Concrete Services in Oklahoma City",
        items: [
          {
            title: "New Curb Ramp / Curb Cut Construction",
            bullets: [
              "Saw-cut and remove existing curb section to required width (60\" minimum for two-way pedestrian traffic)",
              "Form and pour ramp at maximum 1:12 slope (8.33%) with 2% maximum cross-slope",
              "Detectable warning surface — cast-in-place truncated domes or ADA-compliant panel set in fresh concrete",
              "Flat landing at both top and bottom of ramp — 2% maximum slope in any direction",
              "Broom finish for slip resistance",
            ],
          },
          {
            title: "ADA Ramp Construction",
            bullets: [
              "Minimum 36\" clear width for routes, 60\" where passing space is required",
              "Maximum 1:12 slope with level landings every 30\" of rise",
              "Edge protection on open sides — concrete lip or curb",
              "Handrail coordination where required by rise height",
            ],
          },
          {
            title: "Accessible Parking & Routes",
            bullets: [
              "Van-accessible space minimum 11' wide with 8' access aisle (or 8' space with 5' aisle)",
              "Access aisle maximum 2% slope in all directions",
              "Connecting route from accessible space to building entrance — maximum 5% running slope, 2% cross-slope",
              "Signage and marking coordination",
            ],
          },
          {
            title: "Violation Remediation & Documentation",
            bullets: [
              "Respond to city violation notices and ADA inspection findings",
              "Scope and quote targeted to the specific cited violations",
              "Documentation package after completion — photos, measurements, ADA spec confirmation",
              "Fast turnaround — most single-ramp violations resolved within 1–2 weeks of engagement",
            ],
          },
        ],
      }}
      processSteps={[
        {
          title: "Free On-Site Assessment",
          description:
            "Walk the property and identify all non-compliant surfaces — slopes, widths, detectable warnings, and landing conditions.",
        },
        {
          title: "Written Scope & Quote",
          description:
            "Written scope specific to your violations with itemized pricing — no surprise add-ons.",
        },
        {
          title: "Permit Pull",
          description:
            "Where required by OKC Building Services, FDZ pulls all necessary permits before work begins.",
        },
        {
          title: "Concrete Work",
          description:
            "Saw-cutting, forming, pouring, texturing, and detectable warning surface installation to ADA specification.",
        },
        {
          title: "Documentation Package",
          description:
            "Photos, measurements, and completion certificate — ready to present to inspectors, tenants, or your legal team.",
        },
      ]}
      processEyebrow="How It Works"
      processTitle="The ADA"
      processTitleAccent="Compliance Process."
      sections={[
        {
          eyebrow: "ADA Standards",
          title: "What Makes Concrete",
          titleAccent: "ADA Compliant.",
          content: [
            "ADA concrete compliance comes down to four things: slope, surface texture, width, and detectable warnings. Get any of these wrong and the surface fails compliance regardless of how well the concrete was poured.",
            "Maximum ramp slope: 1:12 ratio — no steeper than 8.33% (one inch of rise per twelve inches of run). Maximum cross-slope on accessible routes and landings: 2% (1:50). Minimum ramp width: 60 inches where handrails are required. Surface must be stable, firm, and slip-resistant — broom finish meets this requirement. Detectable warning surfaces (truncated domes) required at all curb ramp transitions.",
          ],
          table: {
            headers: ["ADA Concrete Spec", "Requirement"],
            rows: [
              ["Maximum ramp slope", "1:12 (8.33%)"],
              ["Maximum cross-slope", "2% (1:50)"],
              ["Minimum ramp width (with handrails)", "60\""],
              ["Minimum accessible route width", "36\""],
              ["Landing slope (all directions)", "2% max"],
              ["Detectable warnings", "Required at all curb ramps"],
              ["Surface texture", "Stable, firm, slip-resistant"],
            ],
          },
        },
        {
          eyebrow: "Pricing",
          title: "ADA Compliance",
          titleAccent: "Cost Ranges.",
          content: [
            "Every ADA project is site-specific — pricing depends on the number of ramps, existing concrete conditions, and whether permits are required.",
            "Call (405) 458-4805 for a free on-site assessment and written scope.",
          ],
          table: {
            headers: ["Service", "Typical Range"],
            rows: [
              ["Single curb ramp / curb cut", "$800 – $2,500"],
              ["Detectable warning surface panel", "$300 – $800"],
              ["ADA parking space + access aisle", "$1,500 – $4,000"],
              ["Accessible route repair (per sq. ft.)", "$8 – $18"],
              ["Full property ADA concrete assessment", "Free"],
            ],
          },
        },
        {
          eyebrow: "Related Services",
          title: "Other Commercial Concrete",
          titleAccent: "Services.",
          content: [
            "<a href='/commercial-curb-gutter-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Curb & Gutter</a> — New curb and gutter construction, section replacement, parking island curbs, and drive approach cuts throughout OKC.",
            "<a href='/parking-lots-oklahoma-city' class='text-orange no-underline font-medium'>Parking Lot Concrete</a> — New commercial parking lot installation, repair, and full replacement with ADA-compliant layouts.",
            "<a href='/sidewalks-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Sidewalks</a> — Sidewalk installation, replacement, and trip hazard repair for commercial properties.",
            "<a href='/commercial-concrete-repair-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete Repair</a> — Crack repair, spalling, trip hazard removal, and joint sealing for commercial properties.",
          ],
        },
      ]}
      faq={[
        {
          question: "What is an ADA curb ramp and do I need one?",
          answer:
            "A curb ramp (or curb cut) is the sloped concrete transition between a sidewalk and a parking surface or roadway. Any commercial property with a parking lot that connects to a public sidewalk or building entrance needs ADA-compliant curb ramps. If your property predates the ADA or was built without compliant ramps, you are likely required to retrofit.",
        },
        {
          question: "How steep can an ADA ramp be?",
          answer:
            "The maximum slope for an ADA ramp is 1:12 — one inch of rise for every twelve inches of run, or 8.33%. Cross-slope (the side-to-side slope) on any accessible surface is limited to 2%. These limits apply to the finished concrete surface, not the forms.",
        },
        {
          question:
            "How much does ADA ramp construction cost in Oklahoma City?",
          answer:
            "A single curb ramp typically runs $800–$2,500 depending on size, site conditions, and whether an existing curb must be saw-cut and removed. Detectable warning panels add $300–$800 per ramp. Free on-site assessment to confirm your specific scope.",
        },
        {
          question: "Can I be fined for non-ADA-compliant concrete?",
          answer:
            "Yes. Under Title III of the ADA, private businesses open to the public are required to maintain accessible facilities. Violations can result in DOJ complaints, private lawsuits, and mandatory remediation. The cost of remediation after a complaint is almost always higher than proactive upgrading.",
        },
        {
          question: "How long does ADA ramp installation take?",
          answer:
            "A single curb ramp installation typically takes 1–2 days of concrete work plus cure time (pedestrian use in 24–48 hours). A full parking lot ADA upgrade depends on scope. FDZ provides a timeline with the written quote.",
        },
        {
          question: "Do you pull permits for ADA concrete work in OKC?",
          answer:
            "Yes, where required. Some ADA ramp work in OKC requires a permit through OKC Building Services. FDZ handles permit procurement as part of the project scope.",
        },
        {
          question: "What are truncated dome detectable warning surfaces?",
          answer:
            "Truncated domes are the raised bumps you see on curb ramps — those round, raised dots in a grid pattern. They're required by ADA at all curb ramp transitions to warn visually impaired pedestrians that they're entering a vehicle traffic area. They can be cast in place in fresh concrete or installed as retrofit panel systems.",
        },
      ]}
    />
  );
}
