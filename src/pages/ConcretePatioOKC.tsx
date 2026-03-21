import ServicePage from "@/components/ServicePageTemplate";

export default function ConcretePatioOKC() {
  return (
    <ServicePage
      metaTitle="Concrete Patio Contractors OKC | Patios Built Right | Free Estimate"
      metaDescription="Concrete patio contractors in Oklahoma City. Broom, smooth & stamped finishes. Properly graded for drainage. $6–$22/sq ft. Call (405) 247-0027."
      eyebrow="OKC Metro · Patio Contractors · Licensed & Insured"
      title="Concrete Patio"
      titleAccent="Contractors OKC."
      description='Smooth, broom, and stamped finishes — properly graded and reinforced for Oklahoma weather. Free estimate. <a href="tel:4052470027">(405) 247-0027</a>.'
      sections={[
        {
          eyebrow: "Patio Contractors OKC",
          title: "Built for Oklahoma",
          titleAccent: "Backyards.",
          content: [
            "<strong>Concrete patio contractors in OKC</strong> at Redwood Construction build patios that handle Oklahoma's temperature swings — from freezing winters to 105°F summers. Proper grading, reinforcement, and control joints keep your patio looking new for decades.",
            "We offer broom finish, smooth finish, and stamped decorative options. Every patio is graded for drainage away from your home.",
          ],
          stats: [
            { value: "$6–10", label: "Per sq ft (standard)" },
            { value: "$15–22", label: "Per sq ft (stamped)" },
            { value: "30+yr", label: "Expected life" },
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete patio cost in OKC?", answer: "A standard broom-finish patio costs $6–$10 per sq ft. A 20×20 patio runs $2,400–$4,000. Stamped patios cost $15–$22/sq ft." },
        { question: "What finish is best for a patio in Oklahoma?", answer: "Broom finish is the most popular — good traction, low maintenance, and affordable. Stamped concrete offers a premium look at a higher price point." },
        { question: "How thick should a patio slab be?", answer: "4 inches is standard for patios. On known problem clay, we may recommend thickened edges or deeper base prep." },
      ]}
    />
  );
}
