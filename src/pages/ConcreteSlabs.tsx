import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteSlabs() {
  return (
    <ServicePage
      eyebrow="OKC Metro · Slab Contractors · Licensed & Insured"
      title="Concrete Slabs"
      titleAccent="Oklahoma City."
      description='Patio slabs, garage floors, and shop slabs for <strong>Oklahoma City homeowners</strong> — properly graded, reinforced for OKC clay soil. Free estimate. <a href="tel:4052470027">(405) 247-0027</a>.'
      sections={[
        {
          eyebrow: "Concrete Slabs OKC",
          title: "Built for Oklahoma",
          titleAccent: "Clay & Weather.",
          content: [
            "<strong>Concrete slab contractors near Oklahoma City</strong> should know that Oklahoma's expansive clay soil requires more than a standard pour. Redwood Construction builds every slab with proper subgrade compaction, aggregate base, and reinforcement sized for your specific conditions.",
            "We pour patio slabs, garage floors, shop floors, equipment pads, and custom slabs across the OKC metro. Same process, same standards on every job.",
          ],
          stats: [
            { value: "4,000", label: "PSI min mix" },
            { value: "4–6\"", label: "Slab thickness" },
            { value: "500+", label: "Projects completed" },
          ],
        },
        {
          eyebrow: "Slab Pricing OKC",
          title: "What Slabs Cost",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "The <strong>cost of a concrete slab in Oklahoma City</strong> runs $6–$10 per square foot for standard broom finish. Stamped finishes add $8–$12/sq ft.",
          ],
          table: {
            headers: ["Service", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Patio slab (broom)", "20×20 ft (400 sq ft)", "<strong>$2,400–$4,000</strong>", "4\", rebar"],
              ["Garage floor", "24×24 ft (576 sq ft)", "<strong>$3,456–$5,760</strong>", "4\", smooth finish"],
              ["Stamped patio", "400 sq ft", "<strong>$6,000–$8,800</strong>", "Pattern + sealer"],
              ["Shop/barn slab", "30×40 ft (1,200 sq ft)", "<strong>$7,200–$12,000</strong>", "5\", 4,000 PSI"],
            ],
          },
        },
      ]}
      faq={[
        { question: "How much does a concrete slab cost in Oklahoma City?", answer: "A standard concrete slab runs $6–$10 per sq ft installed. A 20×20 patio slab costs $2,400–$4,000." },
        { question: "How thick should a concrete slab be?", answer: "4 inches for patios and light use, 5–6 inches for garage floors and heavy equipment. Base depth matters as much as slab thickness." },
        { question: "Can I pour a slab on clay soil in Oklahoma?", answer: "Yes — with proper base prep. Oklahoma's clay requires deeper aggregate base and adequate reinforcement to prevent soil movement from cracking the slab." },
      ]}
    />
  );
}
