import ServicePage from "@/components/ServicePageTemplate";

export default function CommercialConcreteSlabs() {
  return (
    <ServicePage
      metaTitle="Commercial Concrete Slabs in Oklahoma City | Redwood Construction LLC"
      metaDescription="Commercial concrete slab contractors in Oklahoma City. Warehouse floors, retail pads, and industrial slabs with 4,000+ PSI concrete. Free commercial estimate."
      eyebrow="OKC Metro · Commercial Concrete · Licensed & Insured"
      title="Commercial"
      titleAccent="Concrete Slabs."
      description='Heavy-duty commercial slabs for warehouses, retail buildings, and industrial facilities across the OKC metro. Engineered for heavy loads and high traffic. <a href="tel:4052470027">(405) 247-0027</a>.'
      sections={[
        {
          eyebrow: "Commercial Slabs OKC",
          title: "Built for Heavy",
          titleAccent: "Commercial Use.",
          content: [
            "<strong>Commercial concrete slab contractors in Oklahoma City</strong> — Redwood Construction pours warehouse floors, retail pads, equipment slabs, and industrial concrete across the OKC metro. Commercial slabs require thicker pours, higher PSI concrete, and engineered reinforcement to handle forklift traffic, heavy equipment, and sustained loads.",
            "Every commercial slab starts with a proper site assessment, soil testing when needed, and a pour plan that accounts for joint spacing, drainage, and load requirements specific to your operation. We also handle <a href='/commercial-concrete-oklahoma-city'>commercial parking lots</a>, <a href='/sidewalks-oklahoma-city'>curb and gutter</a> installation, and <a href='/foundations-oklahoma-city'>commercial foundation work</a>.",
          ],
          stats: [
            { value: "5–8\"", label: "Slab thickness" },
            { value: "4,000+", label: "PSI concrete" },
            { value: "ADA", label: "Compliant" },
          ],
        },
        {
          eyebrow: "Our Commercial Process",
          title: "Engineered for",
          titleAccent: "Your Operation.",
          content: [
            "Commercial concrete requires a different approach than residential work. We coordinate with general contractors, site engineers, and building inspectors to ensure every pour meets specifications and passes inspection.",
            "Our commercial process includes detailed site prep with engineered subgrade compaction, reinforcement per structural plans, proper joint layout for large-format slabs, and coordination of concrete delivery for continuous pours. We use 4,000 PSI minimum on all commercial work — higher mixes are specified for heavy industrial applications.",
            "We serve commercial clients across the <a href='/oklahoma-city-concrete'>Oklahoma City metro</a> including retail, industrial, and institutional projects.",
          ],
        },
        {
          eyebrow: "Why Choose Redwood",
          title: "Commercial Concrete",
          titleAccent: "You Can Count On.",
          content: [
            "Redwood Construction has completed commercial concrete projects across Oklahoma City — from small retail pads to large warehouse floors. Our experience with commercial specifications, ADA compliance, and coordination with general contractors sets us apart.",
            "We're licensed, bonded, and insured with BBB A+ accreditation. Our crew handles the complexity of commercial work — tight schedules, coordination with other trades, and specifications that demand precision. We also serve residential clients with <a href='/driveways-oklahoma-city'>driveway installation</a> and <a href='/patios-oklahoma-city'>patio slab construction</a>. See our <a href='/our-projects'>project gallery</a> for examples of our commercial work.",
          ],
        },
        {
          eyebrow: "Commercial Slab Pricing",
          title: "What Commercial Slabs",
          titleAccent: "Cost in OKC.",
          alt: true,
          content: [
            "<strong>Commercial concrete slabs in Oklahoma City</strong> run $7–$14 per square foot depending on thickness, reinforcement, and finish requirements. Larger pours typically come in at lower per-square-foot rates.",
          ],
          table: {
            headers: ["Service", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Warehouse floor", "5,000 sq ft", "<strong>$35,000–$70,000</strong>", "6\", 4,000 PSI, rebar"],
              ["Retail pad", "2,500 sq ft", "<strong>$17,500–$35,000</strong>", "5\", smooth finish"],
              ["Equipment slab", "400 sq ft", "<strong>$3,200–$5,600</strong>", "6–8\", heavy rebar"],
              ["Loading dock", "1,000 sq ft", "<strong>$8,000–$14,000</strong>", "6\", reinforced"],
            ],
          },
        },
      ]}
      faq={[
        { question: "How thick should a commercial concrete slab be?", answer: "Most commercial slabs require 5–6 inches minimum. Warehouse floors with forklift traffic or heavy equipment may require 6–8 inches with engineered rebar schedules." },
        { question: "What PSI concrete do you use for commercial work?", answer: "We specify 4,000 PSI minimum for commercial slabs. Higher PSI mixes are used for heavy industrial applications." },
        { question: "Do you handle large commercial pours?", answer: "Yes — we handle commercial pours from small retail pads to large warehouse floors. We coordinate with general contractors, site engineers, and building inspectors." },
        { question: "Can you pour commercial concrete year-round in Oklahoma?", answer: "Yes — with proper cold-weather or hot-weather protocols. We adjust mix designs, curing methods, and scheduling to ensure quality in all seasons." },
      ]}
    />
  );
}
