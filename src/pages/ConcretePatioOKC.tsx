import ServicePage from "@/components/ServicePageTemplate";

export default function ConcretePatioOKC() {
  return (
    <ServicePage
      metaTitle="Concrete Patio Contractors in Oklahoma City | Redwood Construction LLC"
      metaDescription="Custom concrete patios in Oklahoma City. Broom, smooth, and stamped finishes graded for proper drainage. Residential patio specialists. Free estimate."
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
            "We offer broom finish, smooth finish, and <a href='/stamped-concrete'>stamped decorative</a> options. Every patio is graded for drainage away from your home. Looking for a full outdoor living space? Combine your patio with a <a href='/retaining-walls'>retaining wall</a> or <a href='/concrete-sidewalks'>walkway</a> for a complete backyard transformation.",
          ],
          stats: [
            { value: "$6–10", label: "Per sq ft (standard)" },
            { value: "$15–22", label: "Per sq ft (stamped)" },
            { value: "30+yr", label: "Expected life" },
          ],
        },
        {
          eyebrow: "Our Patio Process",
          title: "From Design to",
          titleAccent: "Finished Patio.",
          content: [
            "Building a concrete patio in Oklahoma City starts with understanding your space. We assess your yard's grade, soil conditions, and drainage patterns before quoting. This ensures your patio drains properly and doesn't create water problems near your foundation.",
            "Our crew excavates to the correct depth, installs compacted aggregate base, sets forms to grade with proper slope, and places reinforcement. We pour 4,000 PSI concrete and apply your chosen finish — broom, smooth, or stamped with custom patterns and colors.",
            "Every patio gets proper control joints, curing compound, and a final walkthrough. We serve the entire <a href='/oklahoma-city-concrete'>Oklahoma City metro</a> with the same standards on every job.",
          ],
        },
        {
          eyebrow: "Why Choose Redwood",
          title: "OKC's Trusted",
          titleAccent: "Patio Builders.",
          content: [
            "Redwood Construction LLC has built hundreds of concrete patios across Oklahoma City, <a href='/edmond-concrete'>Edmond</a>, <a href='/norman-ok-concrete'>Norman</a>, and the surrounding metro. Our 4.9-star Google rating reflects our commitment to quality work and honest pricing.",
            "We're locally owned — not a franchise. Our crew shows up when we say, delivers the finish you chose, and stands behind the work. Every patio project includes a written quote that doesn't change, proper drainage grading, and reinforcement designed for Oklahoma's expansive clay soil.",
          ],
        },
        {
          eyebrow: "Patio Pricing OKC",
          title: "What Patios Cost",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Concrete patios in Oklahoma City range from $6–$10/sq ft for standard broom finish to $15–$22/sq ft for <a href='/stamped-concrete'>stamped decorative work</a>. Your total depends on size, finish, site conditions, and any additional features like steps or seat walls.",
          ],
          table: {
            headers: ["Service", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Broom finish patio", "20×20 ft (400 sq ft)", "<strong>$2,400–$4,000</strong>", "4\", rebar, standard"],
              ["Smooth finish patio", "400 sq ft", "<strong>$2,800–$4,400</strong>", "Troweled finish"],
              ["Stamped patio", "400 sq ft", "<strong>$6,000–$8,800</strong>", "Pattern + color + sealer"],
              ["Patio + steps combo", "450 sq ft", "<strong>$3,600–$6,000</strong>", "Includes 2–3 formed steps"],
            ],
          },
        },
      ]}
      faq={[
        { question: "How much does a concrete patio cost in OKC?", answer: "A standard broom-finish patio costs $6–$10 per sq ft. A 20×20 patio runs $2,400–$4,000. Stamped patios cost $15–$22/sq ft." },
        { question: "What finish is best for a patio in Oklahoma?", answer: "Broom finish is the most popular — good traction, low maintenance, and affordable. Stamped concrete offers a premium look at a higher price point." },
        { question: "How thick should a patio slab be?", answer: "4 inches is standard for patios. On known problem clay, we may recommend thickened edges or deeper base prep." },
        { question: "Can you add a patio to an existing home?", answer: "Yes — most of our patio projects are additions to existing homes. We grade the new patio to drain away from your foundation and match existing surfaces where possible." },
      ]}
    />
  );
}
