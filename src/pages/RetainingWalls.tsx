import ServicePage from "@/components/ServicePageTemplate";

export default function RetainingWalls() {
  return (
    <ServicePage
      eyebrow="OKC Metro · Retaining Wall Contractors · Licensed & Insured"
      title="Retaining Walls"
      titleAccent="Oklahoma City."
      description='Poured concrete, block, and interlocking retaining walls for slopes, drainage, and erosion control. OKC metro. <a href="tel:4052470027">(405) 247-0027</a>.'
      sections={[
        {
          eyebrow: "Retaining Walls OKC",
          title: "Engineered for",
          titleAccent: "Oklahoma Soil.",
          content: [
            "<strong>Retaining wall contractors in Oklahoma City</strong> — Redwood Construction builds poured concrete, CMU block, and interlocking block retaining walls for slopes, erosion control, and outdoor living areas.",
            "Oklahoma's clay soil and heavy rain events put significant lateral pressure on retaining structures. Every wall we build includes proper drainage, adequate footing depth, and reinforcement sized for the retained earth height.",
          ],
          stats: [
            { value: "$25–45", label: "Per linear ft" },
            { value: "French", label: "Drain included" },
            { value: "30+yr", label: "Expected life" },
          ],
        },
      ]}
      faq={[
        { question: "How much does a retaining wall cost in OKC?", answer: "Retaining walls run $25–$45 per linear foot depending on height, material, and drainage requirements." },
        { question: "What type of retaining wall is best for Oklahoma?", answer: "Poured concrete is the strongest option. CMU block is cost-effective for walls under 4 feet. Interlocking block works well for landscape walls." },
        { question: "Do retaining walls need drainage?", answer: "Yes — every retaining wall in Oklahoma should include a French drain or weep holes. Without drainage, hydrostatic pressure from saturated clay soil can push walls over." },
      ]}
    />
  );
}
