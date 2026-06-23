import ServicePage from "@/components/ServicePageTemplate";

export default function EquipmentFoundations() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="equipment-foundations-oklahoma-city"
      metaTitle="Equipment Foundations Oklahoma City | FDZ Construction LLC"
      metaDescription="Concrete equipment foundations in Oklahoma City — machine pads, generator pads, HVAC slabs, industrial equipment bases. Engineered to spec. Call (405) 458-4805."
      eyebrow="OKC Metro · Equipment Foundations · Licensed & Insured"
      title="Concrete Equipment Foundations in"
      titleAccent="Oklahoma City."
      description='Equipment foundations poured to the tolerances and anchor bolt layouts your equipment manufacturer requires. Call <a href="tel:4054584805">(405) 458-4805</a> to start with a scope review.'
      introText="Every piece of industrial, mechanical, or manufacturing equipment needs a properly engineered concrete foundation. A machine pad that's too thin, improperly reinforced, or on an inadequately prepared sub-base will crack, settle, and damage the equipment on it. FDZ pours equipment foundations to the load specs and tolerances required by the equipment manufacturer and your facility engineer. Call (405) 458-4805 to start with a scope review — we'll need the manufacturer's specs before quoting."
      localExpertiseNote="Oklahoma City's expansive clay is particularly problematic for equipment foundations. Clay sub-base that moves seasonally will transmit that movement to the foundation, affecting equipment alignment and accelerating wear on precision machinery. FDZ designs equipment foundation sub-bases with wider footprints and greater depth than stable-soil markets require — this is not over-engineering, it's what Oklahoma clay demands."
      serviceLabel="Commercial"
      serviceCards={[
        { icon: "⚙️", title: "Machine Pads", description: "CNC equipment, stamping presses, industrial lathes, packaging lines. Load calculations drive thickness and reinforcement. Anchor bolt placement from shop drawings." },
        { icon: "🔋", title: "Generator Pads", description: "Standby generator bases sized per manufacturer specs. Vibration isolation provisions. Fuel containment curbs where required." },
        { icon: "❄️", title: "HVAC Equipment Pads", description: "Rooftop unit pads, chiller pads, and cooling tower bases. Coordinate with mechanical contractor on weight and anchor bolt layout." },
        { icon: "⚡", title: "Transformer Pads", description: "Utility transformer bases with containment curbs where required. Coordinate with utility company on dimensions, setbacks, and conduit placement." },
        { icon: "🔄", title: "Compressor & Pump Bases", description: "Air compressor and industrial compressor pads. Pump and motor foundation pads. Vibration isolation common requirement for rotating equipment." },
        { icon: "🏗️", title: "Silo & Tank Bases", description: "Large-diameter circular pads for bulk storage equipment. Ring beam or full-depth options depending on equipment load and soil conditions." },
      ]}
      subServices={{
        sectionEyebrow: "Foundation Types",
        sectionTitle: "What We Pour",
        items: [
          {
            title: "Machine Pads",
            bullets: [
              "CNC equipment, stamping presses, industrial lathes, packaging lines",
              "Load calculations drive thickness and reinforcement — no standard spec applies",
              "Anchor bolt placement set from equipment supplier shop drawings",
              "Leveling tolerance tighter than standard flatwork — per equipment spec",
              "Vibration isolation provisions where specified by equipment manufacturer",
            ],
          },
          {
            title: "Generator Pads",
            bullets: [
              "Standby generator bases sized per manufacturer's specifications",
              "Vibration isolation provisions built into the pad design",
              "Fuel containment curbs where required by code or environmental spec",
              "Coordinate with electrical contractor on conduit placement during pour",
              "Generator pads often need wider footprint than the unit itself",
            ],
          },
          {
            title: "HVAC Equipment Pads",
            bullets: [
              "On-grade or elevated pads for rooftop units, chillers, and cooling towers",
              "Coordinate with mechanical contractor on equipment weight and anchor bolt layout",
              "Drainage away from pad perimeter",
            ],
          },
          {
            title: "Transformer Pads",
            bullets: [
              "Utility transformer bases with containment curbs where required by utility or environmental specs",
              "Coordinate with the utility company on pad dimensions and required setbacks",
              "Conduit placement during pour",
            ],
          },
          {
            title: "Compressor & Pump Bases",
            bullets: [
              "Air compressor and industrial compressor foundation pads",
              "Pump and motor foundation pads",
              "Vibration isolation is a common requirement for rotating equipment",
            ],
          },
          {
            title: "Silo & Tank Bases",
            bullets: [
              "Large-diameter circular pads for bulk storage silos and tanks",
              "Ring beam or full-depth options depending on equipment load and soil conditions",
              "Coordinate with equipment supplier on base pressure and anchor bolt requirements",
            ],
          },
        ],
      }}
      processSteps={[
        { title: "Review Equipment Manufacturer Specs & Shop Drawings", description: "FDZ reviews the equipment manufacturer's foundation requirements: dimensions, load data, anchor bolt layout, vibration isolation provisions, and conduit requirements." },
        { title: "Coordinate with Facility Engineer", description: "Confirm load and reinforcement requirements with your facility engineer or the equipment manufacturer's engineering team. Document the agreed spec before work starts." },
        { title: "Locate & Verify Anchor Bolt Layout", description: "Anchor bolt layout verified against shop drawings. Template fabricated for use during the pour to maintain exact bolt position while concrete cures." },
        { title: "Excavate, Form & Compact Sub-Base", description: "Excavate to required depth. Form the pad perimeter. Install and compact aggregate sub-base. On OKC clay, sub-base preparation is engineered deeper than stable-soil markets." },
        { title: "Rebar Placement per Engineering", description: "Reinforcement placed per the engineered schedule. Load requirements and slab thickness drive the rebar spec." },
        { title: "Set Anchor Bolt Templates During Pour", description: "Anchor bolt templates set and held in exact position during the pour. Bolt position verified before and after concrete consolidates." },
        { title: "Pour to Specified Thickness & PSI", description: "Concrete poured to the thickness and PSI specified by the equipment manufacturer or facility engineer. Finish to required levelness tolerance." },
        { title: "Cure to Required Strength Before Equipment Set", description: "28-day compressive strength is the typical minimum for heavy equipment. FDZ can pull and test cylinders to confirm strength if the schedule is tight. 2-year workmanship warranty provided." },
      ]}
      processEyebrow="How We Pour It"
      processTitle="The Equipment Foundation"
      processTitleAccent="Process."
      sections={[
        {
          eyebrow: "Technical Requirements",
          title: "Equipment Foundation",
          titleAccent: "Specs.",
          content: [
            "Standard flatwork specs don't apply to equipment foundations. Load calculations drive every decision — slab thickness, reinforcement schedule, and sub-base depth are all determined by the equipment's weight, footprint, dynamic loads for rotating equipment, and anchor bolt requirements.",
            "Equipment cannot be set until concrete reaches required strength — typically 28-day compressive strength minimum for heavy equipment, though this varies by manufacturer spec. Leveling tolerance is tighter than standard flatwork. Anchor bolts must be exactly positioned from shop drawings — misplaced anchors require expensive correction.",
          ],
          table: {
            headers: ["Parameter", "Equipment Foundation Standard"],
            rows: [
              ["Anchor bolt placement tolerance", "±1/8\" from centerline"],
              ["Levelness tolerance", "Tighter than standard FF/FL — per equipment spec"],
              ["Cure before equipment set", "28-day strength minimum (varies by equipment)"],
              ["Sub-base depth on OKC clay", "Over-engineered vs. stable-soil markets"],
              ["Vibration isolation", "Required for rotating equipment"],
            ],
          },
        },
        {
          eyebrow: "Pricing",
          title: "Equipment Foundation",
          titleAccent: "Cost Ranges.",
          content: [
            "Equipment foundation pricing depends on size, load requirements, anchor bolt complexity, and whether vibration isolation is specified.",
            "Call (405) 458-4805 for a scope review — we'll need the equipment manufacturer's specs before quoting.",
          ],
          table: {
            headers: ["Foundation Type", "Typical Range"],
            rows: [
              ["Generator pad (under 100kW)", "$800 – $2,500"],
              ["Generator pad (100–500kW)", "$2,500 – $8,000"],
              ["Machine pad (light industrial)", "$1,500 – $6,000"],
              ["Machine pad (heavy press / CNC)", "$5,000 – $25,000+"],
              ["HVAC equipment pad", "$600 – $3,000"],
              ["Transformer pad with containment", "$2,000 – $6,000"],
              ["Custom industrial foundation", "Quote required"],
            ],
          },
        },
      ]}
      faq={[
        {
          question: "What thickness should a concrete equipment foundation be?",
          answer: "Thickness is determined by the equipment load, not a standard spec. Light equipment pads may be 6–8 inches. Heavy press foundations and large generator pads often run 12–24 inches or more. The equipment manufacturer's specification or a structural engineer should determine thickness for heavy equipment.",
        },
        {
          question: "How long must concrete cure before setting equipment?",
          answer: "28-day compressive strength is the typical minimum for heavy equipment. Some equipment manufacturers specify a minimum PSI rather than a time period — FDZ can pull cylinders and test-break to confirm strength if the project timeline is critical.",
        },
        {
          question: "Do you coordinate with the equipment supplier on anchor bolt placement?",
          answer: "Yes, always. Anchor bolt placement is set from the equipment supplier's shop drawings. FDZ uses bolt templates during the pour to maintain exact position while concrete consolidates and cures. Misplaced anchors are an expensive mistake.",
        },
        {
          question: "Can you pour an equipment foundation inside an existing building?",
          answer: "Yes. FDZ regularly pours equipment pads inside operating facilities. We coordinate access, saw-cutting of existing floor sections if required, and scheduling around your operations to minimize disruption.",
        },
        {
          question: "How much does a generator pad cost in Oklahoma City?",
          answer: "Small standby generator pads under 100kW typically run $800–$2,500. Large generator pads for 100kW–500kW units run $2,500–$8,000 depending on containment requirements and conduit placement. Call (405) 458-4805 for a scope review.",
        },
        {
          question: "What PSI concrete is required for machine foundations?",
          answer: "4,000 PSI is the typical minimum for machine pads. Heavy equipment foundations often specify 5,000 PSI or higher. The equipment manufacturer's spec governs — FDZ matches the mix design to the requirement.",
        },
      ]}
    />
  );
}
