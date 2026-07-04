import ServicePage from "@/components/ServicePageTemplate";

export default function TruckCourts() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="truck-court-concrete-oklahoma-city"
      metaTitle="Truck Court Concrete Oklahoma City | Heavy-Duty Concrete Paving | FDZ Construction"
      metaDescription="Concrete truck court construction in Oklahoma City. Industrial-grade flatwork engineered for semi-truck loads and daily heavy traffic. Free estimates — (405) 458-4805."
      eyebrow="OKC Metro · Truck Court Construction · Licensed & Insured"
      title="Truck Court Construction in"
      titleAccent="Oklahoma City."
      description='Industrial-grade concrete truck courts built to handle daily Class 8 semi-truck traffic. Free estimates — <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="A truck court is the maneuvering and staging area behind a warehouse or distribution center where semi-trucks back into loading docks. It's one of the highest-stress concrete applications — daily heavy axle loads, constant turning movements, and repeated trailer impact. FDZ builds truck courts to industrial specs for OKC's growing warehouse and distribution sector along the I-40/I-35 corridor. Call (405) 458-4805 for a free on-site estimate."
      localExpertiseNote="Oklahoma's expansive clay presents a serious challenge for large-area industrial flatwork. A truck court on unmodified clay will settle, crack, and heave as seasonal moisture cycles cause the sub-base to move. FDZ over-excavates, installs proper aggregate sub-base, and proof-rolls before any concrete goes in — the prep work is what determines whether the court lasts 5 years or 40."
      serviceLabel="Commercial"
      serviceCards={[
        { icon: "🏭", title: "New Truck Court Construction", description: "8–10-inch reinforced concrete at 4,000–5,000 PSI. Minimum 120-foot depth for 53-foot semi-truck maneuvering. Engineered joint spacing." },
        { icon: "➕", title: "Truck Court Expansion", description: "Adding truck court area to existing facilities. Phased construction to keep existing court operational. Match existing elevation and joint patterns." },
        { icon: "🔧", title: "Truck Court Repair & Joint Sealing", description: "Joint sealant deterioration is the primary maintenance issue. FDZ provides joint sealing and full-depth repair panels for damaged sections." },
        { icon: "🌊", title: "Site Grading & Drainage Coordination", description: "Truck courts require adequate cross-slope for drainage. Coordinate with site grading, storm drain, and pavement striping trades." },
      ]}
      subServices={{
        sectionEyebrow: "Truck Court Services",
        sectionTitle: "What We Build",
        items: [
          {
            title: "New Truck Court Construction",
            bullets: [
              "8–10-inch reinforced concrete with rebar on 12–18-inch centers both directions",
              "4,000–5,000 PSI concrete mix minimum",
              "Thickened edges at dock faces",
              "Engineered joint spacing for large-area pours — typically 20–25 feet on center",
              "Minimum 120-foot court depth for 53-foot trailer maneuvering",
            ],
          },
          {
            title: "Truck Court Expansion",
            bullets: [
              "Adding truck court area to existing warehouse or distribution facilities",
              "Phased construction to keep existing court operational during expansion",
              "Match existing elevation and joint patterns for consistent surface",
            ],
          },
          {
            title: "Repair & Joint Sealing",
            bullets: [
              "Joint sealant deterioration allows water to reach sub-base and begin the deterioration cycle",
              "FDZ provides joint sealing, crack repair, and full-depth repair panel replacement",
              "Early joint sealing maintenance prevents far more expensive sub-base repair later",
            ],
          },
          {
            title: "Site Grading & Drainage Coordination",
            bullets: [
              "Proper cross-slope for drainage — typically 1.5–2% away from the building",
              "Coordinate with site grading, storm drain, and striping trades",
              "Poor drainage is a primary cause of truck court deterioration",
            ],
          },
        ],
      }}
      processSteps={[
        { title: "Site Evaluation & Soil Investigation", description: "Assess truck court layout, soil conditions, drainage requirements, and dock interface. Determine sub-base correction scope." },
        { title: "Sub-Grade Over-Excavation & Proof-Rolling", description: "Over-excavate to remove compromised clay and unstable material. Proof-roll to identify any remaining soft spots before aggregate placement." },
        { title: "Aggregate Sub-Base Installation & Compaction", description: "Install and compact proper aggregate base to engineered depth. This is the step that determines long-term performance on OKC clay." },
        { title: "Forming & Rebar Placement", description: "Form the court perimeter and dock faces. Place rebar on 12–18-inch centers both directions. Thicken edges at dock interfaces." },
        { title: "Large-Area Pour with Laser Screed", description: "Industrial concrete poured in sections with laser screed to achieve consistent thickness and cross-slope across the full court area." },
        { title: "Saw-Cut Joint Pattern Within 24 Hours", description: "Control joints saw-cut on engineered spacing within 24 hours of pour. Proper joint timing is critical to prevent random cracking on large-area flatwork." },
        { title: "Curing & Sealing", description: "Full curing period completed before truck traffic. Joint sealant installed. 2-year workmanship warranty provided." },
      ]}
      processEyebrow="How We Build It"
      processTitle="Truck Court"
      processTitleAccent="Construction Process."
      sections={[
        {
          eyebrow: "Technical Specs",
          title: "What Makes Truck Court Concrete",
          titleAccent: "Different.",
          content: [
            "Standard concrete flatwork specs don't apply to truck courts. Every design decision — slab thickness, PSI, reinforcement spacing, joint layout — is driven by the loads the court will see: Class 8 semi-trucks at 80,000 lbs GVW, daily turning movements that create shear stress at joints, and repeated impact at the dock face.",
            "Minimum 120-foot court depth for 53-foot trailer maneuvering. Cross-slope for drainage — typically 1.5–2% away from the building. Dock apron dimensions and turning radii depend on the number of dock doors and trailer staging requirements.",
          ],
          table: {
            headers: ["Design Parameter", "Truck Court Standard"],
            rows: [
              ["Slab thickness", "8\"–10\""],
              ["Concrete PSI", "4,000–5,000 PSI minimum"],
              ["Rebar spacing", "12\"–18\" on center, both directions"],
              ["Minimum court depth", "120 feet (53-ft trailers)"],
              ["Joint spacing", "Engineered — typically 20–25 ft on center"],
              ["Surface finish", "Broom finish for wet-weather traction"],
            ],
          },
        },
        {
          eyebrow: "Pricing",
          title: "Truck Court",
          titleAccent: "Cost Ranges.",
          content: [
            "Truck court pricing is driven by square footage, slab thickness, and site conditions. OKC clay typically requires more sub-base preparation than stable-soil markets.",
            "Call (405) 458-4805 for a free on-site estimate.",
          ],
          table: {
            headers: ["Service", "Typical Range"],
            rows: [
              ["Truck court concrete (per sq. ft.)", "$7 – $12"],
              ["Full truck court (30,000–80,000 sq. ft.)", "$210,000 – $960,000+"],
              ["Joint sealing (per linear ft.)", "$3 – $6"],
              ["Repair panels (per sq. ft.)", "$15 – $35"],
            ],
          },
        },
      ]}
      faq={[
        {
          question: "How thick should a truck court be?",
          answer: "8–10 inches for standard semi-truck traffic. Courts serving very heavy industrial equipment or port equipment may spec thicker. Slab thickness should be specified by an engineer based on your anticipated axle loads and traffic frequency.",
        },
        {
          question: "What PSI concrete is required for a truck court?",
          answer: "4,000 PSI minimum; 5,000 PSI is common for high-frequency truck courts. Higher PSI improves surface durability and resistance to abrasion from turning tires on the tight radii common in truck courts.",
        },
        {
          question: "How much does truck court construction cost in Oklahoma City?",
          answer: "Per-square-foot pricing typically runs $7–$12 for the concrete work. Full truck court projects range from $210,000 to $960,000+ depending on square footage, site conditions, and drainage requirements. Free estimate provided — call (405) 458-4805.",
        },
        {
          question: "How long does a concrete truck court last?",
          answer: "A properly designed and maintained concrete truck court lasts 30–50 years. Joint sealing every 3–5 years and prompt crack repair when cracks appear are the primary maintenance requirements. Courts that skip joint maintenance deteriorate far faster.",
        },
        {
          question: "What is the minimum depth for a truck court to handle semi-trucks?",
          answer: "120 feet minimum for a 53-foot trailer to back into a dock and have the cab clear the property line or adjacent truck. Courts serving larger fleets or requiring staging space often need 130–150 feet.",
        },
        {
          question: "Can you pour a truck court in phases?",
          answer: "Yes. Phased construction allows a facility to keep part of the truck court operational during construction. FDZ coordinates pour sequences with your operations manager to minimize disruption to active loading and shipping operations.",
        },
      ]}
    />
  );
}
