import ServicePage from "@/components/ServicePageTemplate";

export default function CommercialConcreteSlabs() {
  return (
    <ServicePage
      metaTitle="Commercial Concrete Slabs OKC | Warehouse & Retail Floors | Free Estimate"
      metaDescription="Commercial concrete slab contractors in Oklahoma City. Warehouse floors, retail pads, equipment slabs. 4,000 PSI. Call (405) 247-0027."
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
            "Every commercial slab starts with a proper site assessment, soil testing when needed, and a pour plan that accounts for joint spacing, drainage, and load requirements specific to your operation.",
          ],
          stats: [
            { value: "5–8\"", label: "Slab thickness" },
            { value: "4,000+", label: "PSI concrete" },
            { value: "ADA", label: "Compliant" },
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
      ]}
    />
  );
}
