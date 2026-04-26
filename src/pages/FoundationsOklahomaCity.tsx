import ServicePage from "@/components/ServicePageTemplate";

export default function FoundationsOklahomaCity() {
  return (
    <ServicePage
      currentServiceSlug="foundations-oklahoma-city"
      metaTitle="Concrete Foundations & Retaining Walls Oklahoma City | Redwood Construction LLC"
      metaDescription="Concrete foundation and retaining wall contractor in Oklahoma City. Residential, commercial foundations, poured concrete walls, CMU block walls. Free estimate: (405) 247-0027."
      eyebrow="OKC Metro · Foundation & Wall Contractors · Licensed & Insured"
      title="Concrete Foundations & Retaining Walls in"
      titleAccent="Oklahoma City."
      description='Redwood Construction LLC provides concrete foundation and retaining wall services in Oklahoma City for residential and commercial projects. Structural concrete built for Oklahoma clay soil. <a href="tel:4052470027">(405) 247-0027</a>.'
      introText="Foundations and retaining walls are the most critical concrete on your property — they support everything above them. Redwood Construction builds every foundation with proper footing depth, engineered reinforcement, and 4,000 PSI minimum concrete designed to handle Oklahoma's expansive clay."
      serviceLabel="Foundation & Wall"
      serviceCards={[
        {
          icon: "🏠",
          title: "Residential Foundations",
          description: "Slab-on-grade and stem wall foundations for new homes, additions, and room conversions. Engineered for Oklahoma's expansive clay soil conditions.",
        },
        {
          icon: "🏢",
          title: "Commercial Foundations",
          description: "Structural foundation work for commercial buildings, retail spaces, and warehouses. Coordinated with engineers and general contractors.",
        },
        {
          icon: "🧱",
          title: "Retaining Walls – Poured",
          description: "Poured concrete retaining walls for maximum strength. French drain included. Ideal for walls over 4 feet or heavy lateral loads.",
        },
        {
          icon: "🪨",
          title: "Retaining Walls – CMU Block",
          description: "Cost-effective CMU block retaining walls for walls under 4 feet. Reinforced cores with rebar and grout for stability.",
        },
        {
          icon: "🏗️",
          title: "Stem Walls & Footings",
          description: "Continuous and spread footings poured below frost line. Stem walls for crawl spaces and elevated structures.",
        },
        {
          icon: "🔧",
          title: "Foundation Repair Coordination",
          description: "We assess existing foundation damage and coordinate repairs. Honest evaluation — we'll tell you if it needs patching or full replacement.",
        },
      ]}
      specs={[
        { label: "Concrete Strength", value: "4,000 PSI minimum (5,000 PSI for commercial)" },
        { label: "Footing Depth", value: "Below frost line per Oklahoma code (18-24 inches)" },
        { label: "Reinforcement", value: "Rebar per engineered plans, tied at every intersection" },
        { label: "Base", value: "Compacted subgrade with aggregate base where required" },
        { label: "Drainage", value: "French drain behind all retaining walls" },
        { label: "Waterproofing", value: "Applied to below-grade surfaces per project specs" },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed & Insured", description: "Fully licensed Oklahoma contractor. Workers comp and liability coverage on every project." },
        { icon: "📍", title: "Oklahoma Clay Experts", description: "We know Permian red clay and engineer every foundation to handle its swell-shrink cycles." },
        { icon: "💪", title: "Structural Quality", description: "4,000+ PSI concrete, rebar on chairs, and footings below frost line — no shortcuts on structural work." },
        { icon: "📋", title: "Free Estimates", description: "Detailed written estimates. We assess your soil, drainage, and site conditions before quoting." },
      ]}
      sections={[
        {
          eyebrow: "Foundation Services",
          title: "Foundation Services in",
          titleAccent: "Oklahoma City.",
          content: [
            "We provide concrete foundation work for homes, additions, shops, commercial buildings, and other structures in Oklahoma City and surrounding areas. Our team handles layout, excavation coordination, forming, reinforcement, and concrete placement with attention to quality and site conditions.",
            "In addition to foundation work, we also offer <a href='/driveways-oklahoma-city'>concrete driveway installation in Oklahoma City</a> and <a href='/patios-oklahoma-city'>concrete patio and slab installation in Oklahoma City</a> for residential and commercial properties.",
          ],
        },
        {
          eyebrow: "Retaining Walls OKC",
          title: "Retaining Walls Engineered for",
          titleAccent: "Oklahoma Soil.",
          content: [
            "<strong>Retaining wall contractors in Oklahoma City</strong> — Redwood Construction builds poured concrete, CMU block, and interlocking block retaining walls for slopes, erosion control, and outdoor living areas across the OKC metro.",
            "Oklahoma's clay soil and heavy rain events put significant lateral pressure on retaining structures. Every wall we build includes proper drainage, adequate footing depth, and reinforcement sized for the retained earth height.",
          ],
          stats: [
            { value: "$25–45", label: "Per linear ft (walls)" },
            { value: "French", label: "Drain included" },
            { value: "30+yr", label: "Expected life" },
          ],
        },
        {
          eyebrow: "Foundation & Wall Pricing",
          title: "Cost of Foundations & Retaining Walls in",
          titleAccent: "Oklahoma City.",
          alt: true,
          content: [
            "Foundation pricing depends on project size, depth, reinforcement, site access, excavation conditions, and concrete volume. Retaining walls run $25–$45 per linear foot depending on height, material, and drainage requirements.",
          ],
          table: {
            headers: ["Service", "Typical Range", "Notes"],
            rows: [
              ["Residential foundation", "$9–$14 per sq ft", "Depends on size, depth, reinforcement"],
              ["Commercial foundation", "Custom quoted", "Engineered plans required"],
              ["Retaining wall (poured)", "$30–$45 per linear ft", "Maximum strength option"],
              ["Retaining wall (CMU block)", "$25–$35 per linear ft", "Cost-effective under 4 ft"],
              ["Retaining wall (interlocking)", "$25–$40 per linear ft", "Landscape applications"],
            ],
          },
        },
        {
          eyebrow: "Oklahoma Concrete Challenges",
          title: "Common Foundation Problems",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Oklahoma City sits on some of the most expansive clay soil in the United States. This Permian red clay absorbs moisture and swells during wet seasons, then contracts sharply during summer droughts — sometimes shifting several inches in a single year.",
            "Foundation failures in OKC are almost always caused by inadequate footing depth, missing or improperly placed reinforcement, and poor drainage around the structure. A contractor who doesn't understand Oklahoma clay will pour a foundation that cracks and settles within a few years.",
            "Proper foundation construction means footings below frost line, compacted subgrade, rebar per engineered plans, and drainage grading that moves water away from the structure. Every foundation Redwood Construction pours follows this standard.",
          ],
        },
      ]}
      faq={[
        { question: "What types of foundations do you install?", answer: "We handle slab-on-grade, stem wall, and continuous footing foundations for residential and commercial projects. Every foundation is engineered for Oklahoma's clay soil conditions." },
        { question: "How much does a retaining wall cost in OKC?", answer: "Retaining walls run $25–$45 per linear foot depending on height, material, and drainage requirements. Poured concrete is the strongest option. CMU block is cost-effective for walls under 4 feet." },
        { question: "What type of retaining wall is best for Oklahoma?", answer: "Poured concrete is the strongest option for Oklahoma's expansive clay. CMU block is cost-effective for walls under 4 feet. Interlocking block works well for landscape walls." },
        { question: "Do retaining walls need drainage?", answer: "Yes — every retaining wall in Oklahoma should include a French drain or weep holes. Without drainage, hydrostatic pressure from saturated clay soil can push walls over." },
        { question: "How tall can a retaining wall be without engineering?", answer: "Walls over 4 feet typically require engineered plans. We coordinate with structural engineers for taller walls and ensure all work meets local code requirements." },
        { question: "How deep should footings be in Oklahoma?", answer: "Oklahoma code requires footings below the frost line — typically 18-24 inches deep. On expansive clay, we may go deeper based on soil conditions." },
        { question: "Do you handle permits for foundation work?", answer: "Yes — we coordinate all necessary permits and inspections for foundation and retaining wall projects across the OKC metro." },
        { question: "Do you serve areas outside Oklahoma City?", answer: "Yes. We serve Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City." },
      ]}
    />
  );
}
