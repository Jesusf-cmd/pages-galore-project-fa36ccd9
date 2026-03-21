import ServicePage from "@/components/ServicePageTemplate";

export default function StampedConcrete() {
  return (
    <ServicePage
      metaTitle="Stamped Concrete Oklahoma City | Custom Patterns | Free Estimate"
      metaDescription="Stamped concrete contractors in Oklahoma City. Custom patterns, colors & sealers for patios, pool decks, driveways. $15–$22/sq ft. Call (405) 247-0027."
      eyebrow="OKC Metro · Decorative Concrete · Licensed & Insured"
      title="Stamped Concrete"
      titleAccent="Oklahoma City."
      description='Custom patterns, colors, and sealers for patios, pool decks, and driveways across OKC metro. <a href="tel:4052470027">(405) 247-0027</a>.'
      sections={[
        {
          eyebrow: "Stamped Concrete OKC",
          title: "Custom Patterns",
          titleAccent: "& Colors.",
          content: [
            "<strong>Stamped concrete in Oklahoma City</strong> gives you the look of natural stone, brick, or slate at a fraction of the cost. We offer ashlar slate, random flagstone, herringbone brick, running bond, cobblestone, and wood plank patterns.",
            "Every stamped project includes integral color, color hardener, release agent, and a high-solids acrylic sealer. Colors are selected on-site with physical samples — not guessed from a screen.",
          ],
          stats: [
            { value: "$15–22", label: "Per sq ft installed" },
            { value: "25–40yr", label: "Expected life" },
            { value: "2–4yr", label: "Reseal interval" },
          ],
        },
        {
          eyebrow: "Stamped Concrete Pricing",
          title: "What Stamped",
          titleAccent: "Concrete Costs.",
          alt: true,
          content: [
            "<strong>Stamped concrete in Oklahoma City</strong> runs $15–$22 per sq ft installed. A 400 sq ft stamped patio costs roughly $6,000–$8,800.",
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
