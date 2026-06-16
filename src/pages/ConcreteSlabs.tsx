import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteSlabs() {
  return (
    <ServicePage
      metaTitle="Concrete Slabs in Oklahoma City | FDZ Construction LLC"
      metaDescription="Professional concrete slab contractors in Oklahoma City. Patio slabs, garage floors, and shop pads built for OKC clay soil. $6–$10/sq ft. Free estimate."
      eyebrow="OKC Metro · Slab Contractors · Licensed & Insured"
      title="Concrete Slabs"
      titleAccent="Oklahoma City."
      description='Patio slabs, garage floors, and shop slabs for <strong>Oklahoma City homeowners</strong> — properly graded, reinforced for OKC clay soil. Free estimate. <a href="tel:4054584805">(405) 458-4805</a>.'
      sections={[
        {
          eyebrow: "Concrete Slabs OKC",
          title: "Built for Oklahoma",
          titleAccent: "Clay & Weather.",
          content: [
            "<strong>Concrete slab contractors near Oklahoma City</strong> should know that Oklahoma's expansive clay soil requires more than a standard pour. FDZ Construction builds every slab with proper subgrade compaction, aggregate base, and reinforcement sized for your specific conditions.",
            "We pour patio slabs, garage floors, shop floors, equipment pads, and custom slabs across the OKC metro. Same process, same standards on every job. Need a <a href='/driveways-oklahoma-city'>new driveway</a> or <a href='/patios-oklahoma-city'>stamped patio</a> instead? We handle those with the same crew and standards.",
          ],
          stats: [
            { value: "4,000", label: "PSI min mix" },
            { value: "4–6\"", label: "Slab thickness" },
            { value: "500+", label: "Projects completed" },
          ],
        },
        {
          eyebrow: "Our Slab Process",
          title: "How We Build",
          titleAccent: "Slabs That Last.",
          content: [
            "Every concrete slab project in Oklahoma City follows the same proven process. We start with a thorough site assessment, checking soil conditions, drainage patterns, and access. Problem clay is identified before the pour — not after.",
            "Our crew excavates to the correct depth, installs a minimum 4-inch compacted aggregate base (6 inches on problem clay), sets steel forms to grade, and places rebar on chairs at mid-slab depth. Ready-mix concrete is poured from a local OKC batch plant at 4,000 PSI minimum.",
            "Control joints are tooled or saw-cut within 24 hours. Curing compound is applied immediately after finishing. We do a final walkthrough before leaving any job site. For structural projects, see our <a href='/foundations-oklahoma-city'>foundation services</a> and <a href='/oklahoma-city-concrete'>full OKC concrete services</a>.",
          ],
        },
        {
          eyebrow: "Slab Pricing OKC",
          title: "What Slabs Cost",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "The <strong>cost of a concrete slab in Oklahoma City</strong> runs $6–$10 per square foot for standard broom finish. Stamped finishes add $8–$12/sq ft. Pricing depends on size, thickness, soil conditions, and site access.",
          ],
          table: {
            headers: ["Service", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Patio slab (broom)", "20×20 ft (400 sq ft)", "<strong>$2,400–$4,000</strong>", "4\", rebar"],
              ["Garage floor", "24×24 ft (576 sq ft)", "<strong>$3,456–$5,760</strong>", "4\", smooth finish"],
              ["Stamped patio", "400 sq ft", "<strong>$6,000–$8,800</strong>", "Pattern + sealer"],
              ["Shop/barn slab", "30×40 ft (1,200 sq ft)", "<strong>$7,200–$12,000</strong>", "5\", 4,000 PSI"],
            ],
          },
        },
        {
          eyebrow: "Why Choose Redwood",
          title: "Local Expertise",
          titleAccent: "You Can Trust.",
          content: [
            "FDZ Construction LLC is a locally owned concrete company serving the OKC metro. We're not a franchise or a call center — our crew lives and works in Oklahoma City, and we understand the specific soil and weather challenges that affect every pour.",
            "With a 4.9-star Google rating, BBB A+ accreditation, and over 500 completed projects, we've earned the trust of homeowners across <a href='/edmond-concrete'>Edmond</a>, <a href='/norman-ok-concrete'>Norman</a>, <a href='/moore-oklahoma-concrete'>Moore</a>, and the greater OKC metro. We also pour <a href='/commercial-concrete-oklahoma-city'>commercial parking lots</a> and <a href='/foundations-oklahoma-city'>concrete foundations</a> with the same crew and standards.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete slab cost in Oklahoma City?", answer: "A standard concrete slab runs $6–$10 per sq ft installed. A 20×20 patio slab costs $2,400–$4,000." },
        { question: "How thick should a concrete slab be?", answer: "4 inches for patios and light use, 5–6 inches for garage floors and heavy equipment. Base depth matters as much as slab thickness." },
        { question: "Can I pour a slab on clay soil in Oklahoma?", answer: "Yes — with proper base prep. Oklahoma's clay requires deeper aggregate base and adequate reinforcement to prevent soil movement from cracking the slab." },
        { question: "How long does a concrete slab last?", answer: "A properly built concrete slab in Oklahoma should last 25–40 years with minimal maintenance. The key is proper base compaction and adequate reinforcement." },
      ]}
    />
  );
}
