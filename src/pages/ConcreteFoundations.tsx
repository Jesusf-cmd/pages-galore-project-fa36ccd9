import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteFoundations() {
  return (
    <ServicePage
      metaTitle="Concrete Foundations Oklahoma City | Slab-on-Grade | Free Estimate"
      metaDescription="Foundation contractors in Oklahoma City. Slab-on-grade, stem walls, grade beams built for OKC expansive clay soil. $9–$14/sq ft. Call (405) 247-0027."
      eyebrow="OKC Metro · Foundation Contractors · Licensed & Insured"
      title="Concrete Foundations"
      titleAccent="Oklahoma City."
      description='Slab-on-grade, stem walls, grade beams — built for Oklahoma&apos;s expansive clay soil. Licensed & insured. Free estimate.'
      sections={[
        {
          eyebrow: "Foundation Contractors OKC",
          title: "Built for Oklahoma",
          titleAccent: "Soil & Code.",
          content: [
            "<strong>Concrete foundation contractors in Oklahoma City</strong> need to understand expansive clay soil. Redwood Construction pours residential and commercial foundations with proper site prep, engineered rebar schedules, and concrete specifications that meet or exceed local code.",
            "We handle slab-on-grade, stem wall, and grade beam construction. Every foundation starts with a site assessment and soil evaluation.",
          ],
          stats: [
            { value: "$9–14", label: "Per sq ft installed" },
            { value: "4,000+", label: "PSI concrete" },
            { value: "24hr", label: "Estimate response" },
          ],
        },
        {
          eyebrow: "Foundation Pricing",
          title: "What Foundations",
          titleAccent: "Cost in OKC.",
          alt: true,
          content: [
            "<strong>Foundation work in Oklahoma City</strong> runs $9–$14 per square foot for slab-on-grade construction. Stem wall and grade beam foundations cost more due to additional forming and reinforcement.",
          ],
          table: {
            headers: ["Service", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Slab-on-grade", "1,200 sq ft", "<strong>$10,800–$16,800</strong>", "Monolithic pour"],
              ["Stem wall foundation", "1,200 sq ft", "<strong>$14,400–$21,600</strong>", "More forming work"],
              ["Garage foundation", "576 sq ft", "<strong>$5,184–$8,064</strong>", "Thickened edge"],
            ],
          },
        },
      ]}
      faq={[
        { question: "How much does a concrete foundation cost in OKC?", answer: "Foundation work runs $9–$14 per square foot in Oklahoma City. A 1,200 sq ft slab-on-grade costs $10,800–$16,800." },
        { question: "What type of foundation is best for Oklahoma clay?", answer: "Slab-on-grade with properly compacted base and rebar reinforcement is standard for most residential construction. On severe clay, post-tension or deeper bases may be recommended." },
        { question: "Do you coordinate with builders and engineers?", answer: "Yes — we work with general contractors, structural engineers, and architects on residential and commercial foundation projects." },
      ]}
    />
  );
}
