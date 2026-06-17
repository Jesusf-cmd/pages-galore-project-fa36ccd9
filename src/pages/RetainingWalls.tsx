import ServicePage from "@/components/ServicePageTemplate";

export default function RetainingWalls() {
  return (
    <ServicePage
      currentServiceSlug="retaining-walls-oklahoma-city"
      metaTitle="Retaining Walls Oklahoma City | FDZ Construction LLC"
      metaDescription="Retaining wall contractors in Oklahoma City. Poured concrete, CMU block, and interlocking walls engineered for clay soil with French drainage. Free estimate: (405) 458-4805."
      eyebrow="OKC Metro · Retaining Wall Contractors · Licensed & Insured"
      title="Retaining Walls in"
      titleAccent="Oklahoma City."
      description='Poured concrete, CMU block, and interlocking retaining walls for slopes, drainage, and erosion control across the OKC metro — engineered for Oklahoma clay. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="A retaining wall holds back tons of saturated earth, so a failure isn't cosmetic — it's structural. FDZ Construction LLC builds retaining walls engineered for Oklahoma's expansive clay: correct footing depth, French drainage behind every wall, and reinforcement sized for the height of soil being retained."
      serviceLabel="Retaining Wall"
      serviceCards={[
        {
          icon: "🧱",
          title: "Poured Concrete Walls",
          description: "Maximum-strength poured concrete retaining walls for tall walls, heavy lateral loads, and structural applications. French drain and reinforcement included.",
        },
        {
          icon: "🪨",
          title: "CMU Block Walls",
          description: "Cost-effective reinforced block walls for retained heights under 4 feet. Cores filled with rebar and grout for stability and longevity.",
        },
        {
          icon: "🌿",
          title: "Interlocking / Segmental",
          description: "Segmental block walls for landscape terracing, garden beds, and outdoor living areas — clean lines with engineered drainage behind.",
        },
        {
          icon: "💧",
          title: "Drainage & French Drains",
          description: "Every wall includes a gravel backfill zone and French drain or weep holes to relieve hydrostatic pressure from saturated clay.",
        },
        {
          icon: "⛰️",
          title: "Erosion & Slope Control",
          description: "Walls and grading that stabilize slopes, stop erosion, and reclaim usable yard on Oklahoma's shifting clay lots.",
        },
        {
          icon: "🏢",
          title: "Commercial Retaining Walls",
          description: "Engineered retaining structures for commercial sites, parking areas, and developments — coordinated with engineers and inspectors.",
        },
      ]}
      specs={[
        { label: "Footing Depth", value: "Below frost line per Oklahoma code (18–24 inches)" },
        { label: "Drainage", value: "Gravel backfill + French drain behind every wall" },
        { label: "Reinforcement", value: "Rebar sized for retained earth height" },
        { label: "Poured Walls", value: "4,000 PSI concrete for maximum strength" },
        { label: "Block Walls", value: "Grouted, rebar-filled CMU cores" },
        { label: "Engineering", value: "Stamped plans coordinated for walls over 4 ft" },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed & Insured", description: "Fully licensed Oklahoma contractor, BBB A+ accredited, with coverage on every project." },
        { icon: "📍", title: "Oklahoma Clay Experts", description: "We engineer every wall for the lateral pressure of OKC's saturated, swelling clay soil." },
        { icon: "💧", title: "Drainage Done Right", description: "Most wall failures are drainage failures. Every wall we build relieves hydrostatic pressure properly." },
        { icon: "📋", title: "Free Estimates", description: "On-site assessment of wall height, soil, and drainage before we give you a written price." },
      ]}
      sections={[
        {
          eyebrow: "Retaining Walls OKC",
          title: "Engineered for",
          titleAccent: "Oklahoma Soil.",
          content: [
            "<strong>Retaining wall contractors in Oklahoma City</strong> — FDZ Construction builds poured concrete, CMU block, and interlocking block retaining walls for slopes, erosion control, and outdoor living areas across the OKC metro.",
            "Oklahoma's clay soil and heavy rain events put significant lateral pressure on retaining structures. Every wall we build includes proper drainage, adequate footing depth, and reinforcement sized for the retained earth height. Retaining walls pair well with our <a href='/patios-oklahoma-city'>patio</a>, <a href='/sidewalks-oklahoma-city'>sidewalk</a>, and <a href='/foundations-oklahoma-city'>foundation</a> services for complete outdoor projects.",
          ],
          stats: [
            { value: "$25–45", label: "Per linear ft" },
            { value: "French", label: "Drain included" },
            { value: "30+yr", label: "Expected life" },
          ],
        },
        {
          eyebrow: "Wall Types & Pricing",
          title: "Retaining Wall Options &",
          titleAccent: "Cost in OKC.",
          alt: true,
          content: [
            "Retaining walls run $25–$45 per linear foot depending on height, material, and drainage requirements. The right wall type depends on the retained height, the load above it, and the look you want.",
          ],
          table: {
            headers: ["Wall Type", "Best For", "Typical Range"],
            rows: [
              ["Poured concrete", "Tall walls, heavy loads, structural", "<strong>$30–$45 / linear ft</strong>"],
              ["CMU block", "Walls under 4 ft, budget projects", "<strong>$25–$35 / linear ft</strong>"],
              ["Interlocking / segmental", "Landscape terracing, gardens", "<strong>$25–$40 / linear ft</strong>"],
            ],
          },
        },
        {
          eyebrow: "Our Wall Process",
          title: "How We Build",
          titleAccent: "Retaining Walls.",
          alt: true,
          content: [
            "Retaining wall construction in Oklahoma requires understanding soil pressure, drainage, and structural engineering. Our process starts with a site assessment to determine wall height, soil conditions, and drainage requirements.",
            "We excavate below frost line for the footing, install a French drain behind the wall, and build with the appropriate material — poured concrete for maximum strength, CMU block for cost-effective walls under 4 feet, or interlocking block for landscape applications. Every wall includes proper backfill drainage, compacted fill, and reinforcement sized for the retained earth height. We serve the entire <a href='/oklahoma-city-concrete'>Oklahoma City metro</a>, including <a href='/edmond-concrete'>Edmond</a> and <a href='/norman-ok-concrete'>Norman</a>.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a retaining wall cost in OKC?", answer: "Retaining walls run $25–$45 per linear foot depending on height, material, and drainage requirements. Poured concrete is the strongest and most expensive; CMU block is the most cost-effective for shorter walls." },
        { question: "What type of retaining wall is best for Oklahoma?", answer: "Poured concrete is the strongest option for Oklahoma's expansive clay. CMU block is cost-effective for walls under 4 feet. Interlocking block works well for landscape and terracing applications." },
        { question: "Do retaining walls need drainage?", answer: "Yes — every retaining wall in Oklahoma should include a French drain or weep holes. Without drainage, hydrostatic pressure from saturated clay soil can push a wall over. Drainage is the single most important detail." },
        { question: "How tall can a retaining wall be without engineering?", answer: "Walls over 4 feet typically require engineered plans. We coordinate with structural engineers for taller walls and ensure all work meets local code requirements." },
        { question: "How deep should the footing be?", answer: "Footings go below the frost line — typically 18–24 inches in Oklahoma — on a compacted base. Taller walls may require deeper or wider footings based on the retained load." },
        { question: "Do you build commercial retaining walls?", answer: "Yes — we build engineered retaining structures for commercial sites, parking areas, and developments, coordinated with engineers and city inspectors." },
        { question: "What areas do you serve for retaining walls?", answer: "We serve the entire OKC metro including Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City." },
      ]}
    />
  );
}
