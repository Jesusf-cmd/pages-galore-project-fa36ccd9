import ServicePage from "@/components/ServicePageTemplate";

export default function StampedConcrete() {
  return (
    <ServicePage
      metaTitle="Stamped Concrete in Oklahoma City | FDZ Construction LLC"
      metaDescription="Stamped concrete contractors in Oklahoma City. Custom patterns, integral color, and professional sealers for patios, pool decks, and driveways. Free estimate."
      eyebrow="OKC Metro · Decorative Concrete · Licensed & Insured"
      title="Stamped Concrete"
      titleAccent="Oklahoma City."
      description='Custom patterns, colors, and sealers for patios, pool decks, and driveways across OKC metro. <a href="tel:4054584805">(405) 458-4805</a>.'
      sections={[
        {
          eyebrow: "Stamped Concrete OKC",
          title: "Custom Patterns",
          titleAccent: "& Colors.",
          content: [
            "<strong>Stamped concrete in Oklahoma City</strong> gives you the look of natural stone, brick, or slate at a fraction of the cost. We offer ashlar slate, random flagstone, herringbone brick, running bond, cobblestone, and wood plank patterns.",
            "Every stamped project includes integral color, color hardener, release agent, and a high-solids acrylic sealer. Colors are selected on-site with physical samples — not guessed from a screen. Stamped concrete pairs perfectly with a standard <a href='/patios-oklahoma-city'>broom-finish patio</a> or <a href='/driveways-oklahoma-city'>driveway</a> for a mixed-finish look.",
          ],
          stats: [
            { value: "$15–22", label: "Per sq ft installed" },
            { value: "25–40yr", label: "Expected life" },
            { value: "2–4yr", label: "Reseal interval" },
          ],
        },
        {
          eyebrow: "Our Stamped Process",
          title: "How We Create",
          titleAccent: "Decorative Concrete.",
          content: [
            "Stamped concrete requires more skill and timing than standard flatwork. Our crew has the experience to handle the tight window between pour and stamp — getting the pattern crisp without compromising the concrete's structural integrity.",
            "We start with the same rigorous base prep as any slab — compacted aggregate, proper reinforcement, and 4,000 PSI concrete. Integral color is added at the batch plant. Color hardener is broadcast on the surface, followed by release agent. Stamps are placed and pressed while the concrete is at the right consistency.",
            "After curing, we wash the surface, apply a high-solids acrylic sealer, and do a final walkthrough. The result is a surface that looks like natural stone but performs like concrete. We serve the entire <a href='/oklahoma-city-concrete'>OKC metro area</a>.",
          ],
        },
        {
          eyebrow: "Why Choose FDZ",
          title: "Decorative Concrete",
          titleAccent: "Done Right.",
          content: [
            "Stamped concrete is only as good as the crew placing it. Timing, pattern alignment, color consistency, and proper sealing all require experienced hands. FDZ Construction has completed hundreds of stamped projects across Oklahoma City, <a href='/edmond-concrete'>Edmond</a>, and <a href='/norman-ok-concrete'>Norman</a>.",
            "We provide physical color samples on-site so you see exactly what you're getting. Our 4.9-star Google rating and BBB A+ accreditation reflect the quality of our decorative work. Every stamped project includes a written maintenance guide for resealing.",
          ],
        },
        {
          eyebrow: "Stamped Concrete Pricing",
          title: "What Stamped",
          titleAccent: "Concrete Costs.",
          alt: true,
          content: [
            "<strong>Stamped concrete in Oklahoma City</strong> runs $15–$22 per sq ft installed. A 400 sq ft stamped patio costs roughly $6,000–$8,800. For comparison, standard <a href='/patios-oklahoma-city'>broom-finish slabs</a> run $6–$10/sq ft.",
          ],
          table: {
            headers: ["Service", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Stamped patio", "400 sq ft", "<strong>$6,000–$8,800</strong>", "Pattern + color + sealer"],
              ["Stamped driveway", "960 sq ft", "<strong>$14,400–$21,120</strong>", "Full pattern + sealer"],
              ["Stamped pool deck", "600 sq ft", "<strong>$9,000–$13,200</strong>", "Non-slip texture"],
            ],
          },
        },
      ]}
      faq={[
        { question: "How much does stamped concrete cost in Oklahoma City?", answer: "Stamped concrete runs $15–$22 per sq ft installed — including base, pattern, color, and sealer. A 400 sq ft stamped patio costs roughly $6,000–$8,800." },
        { question: "How long does stamped concrete last in OKC?", answer: "Stamped concrete lasts 25–40 years in Oklahoma City with proper maintenance. Resealing every 2–4 years is critical." },
        { question: "Can stamped concrete be slippery?", answer: "Standard stamped concrete can be slippery when wet. For pool decks, we specify a non-slip texture broadcast." },
        { question: "How often does stamped concrete need to be sealed in Oklahoma?", answer: "Every 2–4 years. UV exposure, heat, and freeze-thaw cycles break down sealers faster in Oklahoma." },
      ]}
    />
  );
}
