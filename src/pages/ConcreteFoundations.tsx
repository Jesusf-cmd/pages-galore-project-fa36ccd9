import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteFoundations() {
  return (
    <ServicePage
      metaTitle="Concrete Foundations in Oklahoma City | Redwood Construction LLC"
      metaDescription="Expert concrete foundation contractors in Oklahoma City. Slab-on-grade, stem walls, and grade beams engineered for OKC clay soil. Call for a free estimate."
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
            "We handle slab-on-grade, stem wall, and grade beam construction. Every foundation starts with a site assessment and soil evaluation. Our foundation work pairs with our <a href='/concrete-driveways'>driveway</a> and <a href='/concrete-slabs'>slab</a> services for complete residential concrete packages.",
          ],
          stats: [
            { value: "$9–14", label: "Per sq ft installed" },
            { value: "4,000+", label: "PSI concrete" },
            { value: "24hr", label: "Estimate response" },
          ],
        },
        {
          eyebrow: "Our Foundation Process",
          title: "How We Pour",
          titleAccent: "Foundations in OKC.",
          content: [
            "Foundation work in Oklahoma demands precision. Our process starts with a detailed site assessment — we evaluate soil conditions, check for proper drainage, and coordinate with builders and engineers on specifications.",
            "We excavate to engineered depth, compact the subgrade, install reinforcement per the engineered schedule, and set forms to precise grade. Ready-mix concrete is placed at 4,000 PSI minimum with proper vibration to eliminate voids.",
            "After the pour, we apply curing compound and monitor conditions. Every foundation is inspected before backfill. We serve homeowners and builders across the <a href='/oklahoma-city-concrete'>OKC metro</a> including <a href='/edmond-concrete'>Edmond</a>, <a href='/norman-ok-concrete'>Norman</a>, and surrounding areas.",
          ],
        },
        {
          eyebrow: "Why Choose Redwood",
          title: "Trust & Experience",
          titleAccent: "On Every Pour.",
          content: [
            "Foundation work is the most critical concrete you'll ever pour — it supports everything above it. That's why homeowners and builders across Oklahoma City trust Redwood Construction for their foundation projects.",
            "We coordinate with general contractors, structural engineers, and architects. Our crew understands local building codes, soil reports, and the specific requirements of Oklahoma's challenging ground conditions. With BBB A+ accreditation and 500+ completed projects, we deliver foundations that perform for decades.",
          ],
        },
        {
          eyebrow: "Foundation Pricing",
          title: "What Foundations",
          titleAccent: "Cost in OKC.",
          alt: true,
          content: [
            "<strong>Foundation work in Oklahoma City</strong> runs $9–$14 per square foot for slab-on-grade construction. Stem wall and grade beam foundations cost more due to additional forming and reinforcement. For <a href='/commercial-concrete-slabs'>commercial foundation projects</a>, contact us for custom pricing.",
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
        { question: "How long does foundation work take?", answer: "Most residential foundations are poured in a single day after site prep is complete. Total project time including excavation, forming, and curing is typically 5–7 days." },
      ]}
    />
  );
}
