import ServicePage from "@/components/ServicePageTemplate";

export default function RetainingWalls() {
  return (
    <ServicePage
      metaTitle="Retaining Walls in Oklahoma City | FDZ Construction LLC"
      metaDescription="Retaining wall contractors in Oklahoma City. Poured concrete, CMU block, and interlocking walls engineered for Oklahoma clay soil. Free estimate available."
      eyebrow="OKC Metro · Retaining Wall Contractors · Licensed & Insured"
      title="Retaining Walls"
      titleAccent="Oklahoma City."
      description='Poured concrete, block, and interlocking retaining walls for slopes, drainage, and erosion control. OKC metro. <a href="tel:4054584805">(405) 458-4805</a>.'
      sections={[
        {
          eyebrow: "Retaining Walls OKC",
          title: "Engineered for",
          titleAccent: "Oklahoma Soil.",
          content: [
            "<strong>Retaining wall contractors in Oklahoma City</strong> — FDZ Construction builds poured concrete, CMU block, and interlocking block retaining walls for slopes, erosion control, and outdoor living areas.",
            "Oklahoma's clay soil and heavy rain events put significant lateral pressure on retaining structures. Every wall we build includes proper drainage, adequate footing depth, and reinforcement sized for the retained earth height. Retaining walls pair well with our <a href='/patios-oklahoma-city'>patio</a> and <a href='/sidewalks-oklahoma-city'>sidewalk</a> services for complete outdoor projects.",
          ],
          stats: [
            { value: "$25–45", label: "Per linear ft" },
            { value: "French", label: "Drain included" },
            { value: "30+yr", label: "Expected life" },
          ],
        },
        {
          eyebrow: "Our Wall Process",
          title: "How We Build",
          titleAccent: "Retaining Walls.",
          content: [
            "Retaining wall construction in Oklahoma requires understanding soil pressure, drainage, and structural engineering. Our process starts with a site assessment to determine wall height, soil conditions, and drainage requirements.",
            "We excavate below frost line for the footing, install a French drain behind the wall, and build with the appropriate material — poured concrete for maximum strength, CMU block for cost-effective walls under 4 feet, or interlocking block for landscape applications.",
            "Every wall includes proper backfill drainage, compacted fill, and reinforcement sized for the retained earth height. We serve the entire <a href='/oklahoma-city-concrete'>Oklahoma City metro</a> with expert retaining wall installation.",
          ],
        },
        {
          eyebrow: "Why Choose Redwood",
          title: "Expert Wall",
          titleAccent: "Builders in OKC.",
          content: [
            "Retaining walls that fail can cause serious property damage — that's why choosing an experienced contractor matters. FDZ Construction has built retaining walls across Oklahoma City, <a href='/edmond-concrete'>Edmond</a>, <a href='/norman-ok-concrete'>Norman</a>, and surrounding cities.",
            "We're licensed, bonded, and insured with a BBB A+ rating. Our crew understands the unique drainage challenges of Oklahoma clay and builds every wall to handle the lateral pressure from saturated soil. For related services, see our <a href='/foundations-oklahoma-city'>foundation work</a> and <a href='/driveways-oklahoma-city'>driveway installation</a>.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a retaining wall cost in OKC?", answer: "Retaining walls run $25–$45 per linear foot depending on height, material, and drainage requirements." },
        { question: "What type of retaining wall is best for Oklahoma?", answer: "Poured concrete is the strongest option. CMU block is cost-effective for walls under 4 feet. Interlocking block works well for landscape walls." },
        { question: "Do retaining walls need drainage?", answer: "Yes — every retaining wall in Oklahoma should include a French drain or weep holes. Without drainage, hydrostatic pressure from saturated clay soil can push walls over." },
        { question: "How tall can a retaining wall be without engineering?", answer: "Walls over 4 feet typically require engineered plans. We coordinate with structural engineers for taller walls and ensure all work meets local code requirements." },
      ]}
    />
  );
}
