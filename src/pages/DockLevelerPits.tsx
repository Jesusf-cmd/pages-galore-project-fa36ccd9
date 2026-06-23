import ServicePage from "@/components/ServicePageTemplate";

export default function DockLevelerPits() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="dock-leveler-pits-oklahoma-city"
      metaTitle="Dock Leveler Pit Construction Oklahoma City | FDZ Construction LLC"
      metaDescription="Dock leveler pit construction and repair in Oklahoma City. Exact dimensions, curb angles, anchor embedments coordinated with equipment suppliers. Call (405) 458-4805."
      eyebrow="OKC Metro · Dock Leveler Pits · Licensed & Insured"
      title="Dock Leveler Pit Construction in"
      titleAccent="Oklahoma City."
      description='Precise dock leveler pit construction coordinated with your equipment supplier. Call <a href="tel:4054584805">(405) 458-4805</a> to start with a scope review.'
      introText="A dock leveler pit is the concrete cavity in a loading dock that houses the dock leveler mechanism. Getting the pit dimensions, curb angle placement, anchor bolt embedments, and utility conduit locations exactly right is critical — mistakes require expensive demolition and rework. FDZ gets equipment specs from the leveler supplier before any concrete is poured, every time. Call (405) 458-4805 to discuss your project."
      localExpertiseNote="Dock leveler pits in Oklahoma City require extra attention to moisture management. OKC's clay soil and seasonal moisture cycles can push pit walls or cause pit floor settlement if the sub-base isn't properly engineered. FDZ designs drainage into the pit and surrounding dock slab as part of every new build."
      serviceLabel="Commercial"
      serviceCards={[
        { icon: "🏗️", title: "New Dock Leveler Pit Construction", description: "Full excavation and forming per equipment specs. Steel curb angle or embedded frame, anchor bolt layout, and utility conduit included." },
        { icon: "🔨", title: "Pit Retrofit Into Existing Dock", description: "Saw-cutting existing dock slab to correct dimensions, careful excavation, and forming under existing structure. More complex than new construction." },
        { icon: "🔧", title: "Pit Repair & Curb Angle Replacement", description: "Spalled pit walls, damaged steel curb angles, crumbling pit floor — all repairable without full dock replacement if the surrounding slab is sound." },
        { icon: "📐", title: "Pit Enlargement for Equipment Upgrade", description: "Older levelers are often smaller than modern equipment requires. Enlargement requires careful saw-cutting and forming around existing dock structure." },
      ]}
      subServices={{
        sectionEyebrow: "Pit Services",
        sectionTitle: "What We Build & Repair",
        items: [
          {
            title: "New Dock Leveler Pit Construction",
            bullets: [
              "Full excavation and forming per equipment manufacturer's specifications",
              "Steel curb angle or embedded frame placement at pit lip",
              "Utility conduit for hydraulic or electric actuated leveler systems",
              "Anchor bolt layout set from supplier shop drawings before pour",
              "Coordinate pour timing with equipment installation schedule",
            ],
          },
          {
            title: "Pit Retrofit Into Existing Dock",
            bullets: [
              "Saw-cutting existing dock slab to correct dimensions",
              "Careful excavation under existing dock structure",
              "Forming and pouring new pit with proper reinforcement",
              "More complex and more expensive than new pit construction",
            ],
          },
          {
            title: "Pit Repair & Curb Angle Replacement",
            bullets: [
              "Spalled pit walls repaired with polymer-modified concrete materials",
              "Damaged or corroded steel curb angles removed and replaced",
              "Crumbling pit floor restored — without full dock replacement if surrounding slab is sound",
            ],
          },
          {
            title: "Pit Enlargement for Equipment Upgrade",
            bullets: [
              "Older pits are often too small for modern dock leveler equipment",
              "Careful saw-cutting and forming around existing dock structure",
              "Verify new pit dimensions with the replacement equipment supplier before any cutting",
            ],
          },
        ],
      }}
      processSteps={[
        { title: "Get Equipment Specs from Leveler Supplier", description: "FDZ contacts your leveler supplier or reviews their shop drawings to get the required pit dimensions, anchor bolt layout, and conduit requirements." },
        { title: "Verify Pit Dimensions & Conduit Requirements", description: "Confirm width, depth, length, curb angle type, utility conduit routing, and anchor bolt layout. Everything is verified before any concrete work begins." },
        { title: "Excavation & Forming", description: "Excavate to required depth. Form the pit to exact dimensions with proper reinforcement on all four walls and the floor." },
        { title: "Anchor Bolt Templates & Conduit Placement", description: "Anchor bolt templates set from shop drawings. Conduit placed and secured before the pour. Position verified before concrete goes in." },
        { title: "Pour & Cure", description: "Concrete poured to required PSI. Pit must cure to adequate strength before curb angle installation and equipment work begins." },
        { title: "Coordinate Equipment Installation with Supplier", description: "After curing, coordinate timing with the equipment supplier for leveler installation. FDZ available to address any concrete-related issues during installation." },
      ]}
      processEyebrow="How We Build It"
      processTitle="The Dock Leveler Pit"
      processTitleAccent="Construction Process."
      sections={[
        {
          eyebrow: "Technical Detail",
          title: "Inside a",
          titleAccent: "Dock Leveler Pit.",
          content: [
            "A dock leveler pit is not just a hole in the dock — it's a precisely dimensioned concrete structure with embedded steel components. The width, depth, and length are set by the leveler manufacturer, not by the concrete contractor. Every dimension matters: too small and the equipment won't fit; too large and the leveler can't engage properly.",
            "Key components: pit dimensions per manufacturer specs (typically 6–8 feet wide, 8–16 feet long, 14–20 inches deep); steel curb angles or embedded frame at the pit lip; rebar reinforcement around all four walls and floor; utility conduit for hydraulic or electric actuated levelers; anchor bolt layout per equipment shop drawings; pit floor drainage.",
          ],
        },
        {
          eyebrow: "Pricing",
          title: "Dock Leveler Pit",
          titleAccent: "Cost Ranges.",
          content: [
            "Pit scope ranges from a simple manual leveler pit to a fully-equipped hydraulic pit with conduit and drainage.",
            "Call (405) 458-4805 for an estimate — we'll need your equipment supplier's pit dimensions before quoting.",
          ],
          table: {
            headers: ["Service", "Typical Range"],
            rows: [
              ["New leveler pit (manual leveler)", "$3,000 – $6,000"],
              ["New leveler pit (hydraulic, with conduit)", "$5,000 – $10,000"],
              ["Pit retrofit into existing dock", "$6,000 – $14,000+"],
              ["Pit repair / curb angle replacement", "$1,500 – $5,000"],
              ["Pit enlargement", "$4,000 – $9,000"],
            ],
          },
        },
      ]}
      faq={[
        {
          question: "What is a dock leveler pit?",
          answer: "A dock leveler pit is the recessed concrete cavity in a loading dock floor that houses the dock leveler mechanism. It allows the leveler to drop below dock height to bridge the gap between the dock and low-floor trailers, and to rise to meet high-floor trailers.",
        },
        {
          question: "Who builds the dock leveler pit — the concrete contractor or the dock equipment company?",
          answer: "The concrete contractor builds the pit to specifications provided by the equipment supplier. FDZ coordinates directly with your leveler supplier before pouring. The equipment company installs the leveler mechanism after the concrete has cured to required strength.",
        },
        {
          question: "How long does dock leveler pit construction take?",
          answer: "A new pit construction typically takes 3–7 days from excavation through pour. The pit must cure before equipment installation — typically 7–10 days minimum, longer for high-load equipment with strict strength requirements.",
        },
        {
          question: "Can you retrofit a dock leveler pit into an existing dock?",
          answer: "Yes, but it's more involved than new construction. The process requires saw-cutting the existing dock slab to correct dimensions, excavating the pit area, forming, and pouring. Expect higher cost than a new pit due to the complexity of working around existing structure.",
        },
        {
          question: "How much does dock leveler pit construction cost in Oklahoma City?",
          answer: "New pit construction typically runs $3,000–$10,000 depending on pit dimensions and whether conduit for a hydraulic system is required. Retrofits into existing docks run higher. Call (405) 458-4805 for a free estimate.",
        },
        {
          question: "What happens if the dock leveler pit dimensions are wrong?",
          answer: "Wrong pit dimensions require expensive saw-cutting and rework, or full demolition of the pit area. This is why FDZ always gets equipment specs from the leveler supplier before the pour — not after. Correcting a mis-poured pit costs far more than getting it right the first time.",
        },
      ]}
    />
  );
}
