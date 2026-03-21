import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteSidewalks() {
  return (
    <ServicePage
      metaTitle="Concrete Sidewalks Oklahoma City | New & Replacement | Free Estimate"
      metaDescription="Concrete sidewalk contractors in Oklahoma City. New construction, replacements, ADA-compliant. $6–$10/sq ft. Call (405) 247-0027."
      eyebrow="OKC Metro · Sidewalk Contractors · Licensed & Insured"
      title="Concrete Sidewalks"
      titleAccent="Oklahoma City."
      description='New construction, replacements, city right-of-way work. Serving OKC metro. Free estimate. <a href="tel:4052470027">(405) 247-0027</a>.'
      sections={[
        {
          eyebrow: "Sidewalk Contractors OKC",
          title: "Safe, Clean &",
          titleAccent: "Built to Code.",
          content: [
            "<strong>Concrete sidewalk contractors in Oklahoma City</strong> — Redwood Construction handles new construction, replacement, and city right-of-way sidewalks with proper base prep and ADA-compliant options.",
            "We handle city-required sidewalk repairs, new construction in subdivisions, and private walkway projects. Every sidewalk is broom-finished for traction and properly jointed.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete sidewalk cost in OKC?", answer: "Sidewalks typically cost $6–$10 per sq ft. A 50-foot, 4-foot-wide sidewalk runs approximately $1,200–$2,000." },
        { question: "Do you handle city-required sidewalk repairs?", answer: "Yes — we handle permitted city right-of-way sidewalk replacements including ADA curb ramps." },
      ]}
    />
  );
}
