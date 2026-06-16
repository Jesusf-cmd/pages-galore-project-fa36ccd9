import ServicePage from "@/components/ServicePageTemplate";

export default function CommercialConcreteOklahomaCity() {
  return (
    <ServicePage
      currentServiceSlug="commercial-concrete-oklahoma-city"
      metaTitle="Commercial Concrete Contractors Oklahoma City | FDZ Construction LLC"
      metaDescription="Commercial concrete contractors in Oklahoma City. Warehouse floors, parking lots, retail pads, industrial slabs, curb & gutter. 4,000+ PSI. Free estimate: (405) 458-4805."
      eyebrow="OKC Metro · Commercial Concrete · Licensed & Insured"
      title="Commercial Concrete"
      titleAccent="Oklahoma City."
      description='Commercial concrete contractors in Oklahoma City — warehouse floors, parking lots, retail pads, industrial slabs, and site work across the OKC metro. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="FDZ Construction LLC delivers commercial-grade concrete for businesses across the Oklahoma City metro. From warehouse floors to parking lots, every commercial pour uses 4,000+ PSI concrete, engineered reinforcement, and base preparation designed for heavy traffic and sustained loads."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🏭",
          title: "Warehouse & Industrial Floors",
          description: "Heavy-duty 6-8 inch slabs with engineered rebar schedules for forklift traffic, equipment loads, and industrial operations. Smooth or burnished finish options.",
        },
        {
          icon: "🅿️",
          title: "Parking Lots",
          description: "Commercial parking lot construction with proper drainage, ADA-compliant accessible spaces, joint sealing, and 5-6 inch slabs for heavy vehicle traffic.",
        },
        {
          icon: "🏪",
          title: "Retail Pads & Storefronts",
          description: "Foundation pads and flatwork for retail buildings, restaurants, and commercial storefronts. Coordinated with general contractors and city inspectors.",
        },
        {
          icon: "📦",
          title: "Loading Docks & Aprons",
          description: "Heavy-duty loading dock slabs and truck aprons reinforced for repeated heavy vehicle loads. Sloped for drainage.",
        },
        {
          icon: "🛣️",
          title: "Commercial Curb & Gutter",
          description: "City-spec curb and gutter for parking lots and commercial developments. Standard barrier, mountable, and valley gutter profiles.",
        },
        {
          icon: "🏗️",
          title: "Equipment Pads & Foundations",
          description: "Reinforced concrete pads for HVAC units, generators, dumpster pads, and heavy commercial equipment. Sized and reinforced per specifications.",
        },
      ]}
      specs={[
        { label: "Concrete Strength", value: "4,000 PSI minimum (5,000+ PSI for industrial)" },
        { label: "Slab Thickness", value: "5-8 inches depending on use and load requirements" },
        { label: "Reinforcement", value: "Rebar per engineered specifications, tied at intersections" },
        { label: "Base", value: "6+ inch compacted aggregate for commercial applications" },
        { label: "Joint Layout", value: "Engineered joint spacing for large-format slabs" },
        { label: "ADA Compliance", value: "Accessible parking, ramps, and walkways per code" },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed & Insured", description: "Fully licensed Oklahoma contractor. BBB A+ accredited. Liability and workers comp on every project." },
        { icon: "📍", title: "Commercial Experience", description: "Warehouse floors, parking lots, and commercial site work across the OKC metro." },
        { icon: "💪", title: "Engineered Quality", description: "4,000+ PSI concrete, engineered reinforcement, and compacted aggregate base — built to spec." },
        { icon: "📋", title: "GC Coordination", description: "We work with general contractors, engineers, and inspectors. On-time pours. No schedule surprises." },
      ]}
      sections={[
        {
          eyebrow: "Commercial Slabs OKC",
          title: "Built for Heavy",
          titleAccent: "Commercial Use.",
          content: [
            "<strong>Commercial concrete contractors in Oklahoma City</strong> — FDZ Construction pours warehouse floors, retail pads, equipment slabs, and industrial concrete across the OKC metro. Commercial slabs require thicker pours, higher PSI concrete, and engineered reinforcement to handle forklift traffic, heavy equipment, and sustained loads.",
            "Every commercial slab starts with a proper site assessment, soil testing when needed, and a pour plan that accounts for joint spacing, drainage, and load requirements specific to your operation.",
          ],
          stats: [
            { value: "5–8\"", label: "Slab thickness" },
            { value: "4,000+", label: "PSI concrete" },
            { value: "ADA", label: "Compliant" },
          ],
        },
        {
          eyebrow: "Commercial Parking Lots",
          title: "Concrete Parking Lots Built for",
          titleAccent: "Heavy Commercial Traffic.",
          content: [
            "Commercial parking lots require 5–6 inch slabs, proper drainage grading, joint sealing, and reinforcement designed for heavy vehicle loads. We handle projects from small retail lots to large commercial properties.",
            "Parking lot construction requires careful planning for drainage, traffic flow, ADA compliance, and long-term durability. We coordinate with engineers and property owners to develop a pour plan that accounts for all of these factors.",
          ],
        },
        {
          eyebrow: "Commercial Pricing",
          title: "What Commercial Concrete Costs",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "<strong>Commercial concrete in Oklahoma City</strong> runs $7–$14 per square foot depending on thickness, reinforcement, and finish requirements. Larger pours typically come in at lower per-square-foot rates.",
          ],
          table: {
            headers: ["Service", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Warehouse floor", "5,000 sq ft", "<strong>$35,000–$70,000</strong>", "6\", 4,000 PSI, rebar"],
              ["Retail pad", "2,500 sq ft", "<strong>$17,500–$35,000</strong>", "5\", smooth finish"],
              ["Equipment slab", "400 sq ft", "<strong>$3,200–$5,600</strong>", "6–8\", heavy rebar"],
              ["Loading dock", "1,000 sq ft", "<strong>$8,000–$14,000</strong>", "6\", reinforced"],
              ["Commercial parking lot", "5,000 sq ft", "<strong>$35,000–$60,000</strong>", "5–6\", ADA compliant"],
              ["Retail parking lot", "2,500 sq ft", "<strong>$17,500–$30,000</strong>", "5\", with curb & gutter"],
            ],
          },
        },
        {
          eyebrow: "Oklahoma Concrete Challenges",
          title: "Commercial Concrete Challenges",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Oklahoma City's expansive clay soil creates unique challenges for commercial concrete. The swell-shrink cycle from seasonal moisture changes puts tremendous pressure on large-format slabs and parking lots.",
            "The most common commercial concrete failures are caused by inadequate base preparation, missing reinforcement, and poor joint layout. On commercial projects, these failures are expensive to fix and disruptive to your business.",
            "Proper commercial base prep means 6+ inches of compacted aggregate, engineered rebar schedules, and joint spacing designed for the slab dimensions. Every commercial project FDZ Construction handles follows these standards.",
          ],
        },
      ]}
      faq={[
        { question: "How thick should a commercial concrete slab be?", answer: "Most commercial slabs require 5–6 inches minimum. Warehouse floors with forklift traffic or heavy equipment may require 6–8 inches with engineered rebar schedules." },
        { question: "How much does a concrete parking lot cost in OKC?", answer: "Commercial parking lots run $7–$12 per sq ft installed, depending on size, base conditions, and drainage requirements." },
        { question: "What PSI concrete do you use for commercial work?", answer: "We specify 4,000 PSI minimum for commercial slabs and parking lots. Higher PSI mixes are used for heavy industrial applications." },
        { question: "Do you handle large commercial pours?", answer: "Yes — we handle commercial pours from small retail pads to large warehouse floors and parking lots. We coordinate with general contractors, site engineers, and building inspectors." },
        { question: "Do you handle ADA compliance for parking lots?", answer: "Yes — all our commercial parking lot projects include ADA-compliant accessible spaces, ramps, and signage per current code requirements." },
        { question: "Can you pour commercial concrete year-round in Oklahoma?", answer: "Yes — with proper cold-weather or hot-weather protocols. We adjust mix designs, curing methods, and scheduling to ensure quality in all seasons." },
        { question: "Do you work with general contractors?", answer: "Yes — we regularly coordinate with GCs on commercial projects. We follow your schedule, meet spec requirements, and coordinate with other trades on site." },
        { question: "What areas do you serve for commercial work?", answer: "We serve the entire OKC metro including Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City." },
      ]}
    />
  );
}
