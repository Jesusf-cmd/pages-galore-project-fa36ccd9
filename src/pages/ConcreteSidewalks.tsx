import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteSidewalks() {
  return (
    <ServicePage
      metaTitle="Concrete Sidewalks in Oklahoma City | Redwood Construction LLC"
      metaDescription="Concrete sidewalk contractors in Oklahoma City. New construction, city right-of-way replacements, and ADA-compliant ramps. $6–$10/sq ft. Free estimate."
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
            "<strong>Concrete sidewalk contractors in Oklahoma City</strong> — Redwood Construction handles new construction, replacement, and city right-of-way sidewalks with proper base prep and ADA-compliant options. Our sidewalk work builds on the same <a href='/concrete-foundations'>foundation expertise</a> we bring to every project.",
            "We handle city-required sidewalk repairs, new construction in subdivisions, and private walkway projects. Every sidewalk is broom-finished for traction and properly jointed. Our sidewalk work complements our <a href='/concrete-driveways'>driveway</a> and <a href='/concrete-patio-okc'>patio</a> services for complete residential concrete projects.",
          ],
        },
        {
          eyebrow: "Our Sidewalk Process",
          title: "Proper Installation",
          titleAccent: "Every Time.",
          content: [
            "Sidewalk installation in Oklahoma City requires attention to grade, drainage, and ADA compliance. Our crew sets forms to precise grade, ensures proper slope for water runoff, and places reinforcement appropriate for the application.",
            "For city right-of-way work, we handle permitting coordination and ensure compliance with Oklahoma City and surrounding municipality specifications. Every sidewalk gets proper control joints, broom finish for traction, and adequate curing time.",
            "We build sidewalks across the <a href='/oklahoma-city-concrete'>OKC metro</a> including <a href='/edmond-concrete'>Edmond</a>, <a href='/moore-oklahoma-concrete'>Moore</a>, and <a href='/midwest-city-oklahoma-concrete'>Midwest City</a>. Same standards, same crew on every job.",
          ],
        },
        {
          eyebrow: "Why Choose Redwood",
          title: "Trusted Sidewalk",
          titleAccent: "Contractors in OKC.",
          content: [
            "Redwood Construction handles sidewalk projects of all sizes — from a single walkway panel to full subdivision installations. We understand Oklahoma City's specific requirements for right-of-way work and ADA accessibility.",
            "Our 4.9-star Google rating and BBB A+ accreditation come from consistently delivering quality work on time and on budget. We also offer <a href='/curb-and-gutter'>curb and gutter</a> installation, <a href='/concrete-slabs'>concrete slab construction</a>, and <a href='/parking-lot-concrete'>commercial concrete</a> for complete site work.",
          ],
        },
        {
          eyebrow: "Sidewalk Pricing OKC",
          title: "What Sidewalks Cost",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Concrete sidewalks in Oklahoma City typically cost $6–$10 per square foot installed. Pricing depends on length, width, site conditions, and whether the project requires city permitting for right-of-way work.",
          ],
          table: {
            headers: ["Service", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Standard sidewalk", "50 LF × 4 ft", "<strong>$1,200–$2,000</strong>", "4\", broom finish"],
              ["ADA-compliant ramp", "Per ramp", "<strong>$800–$1,500</strong>", "Detectable warnings"],
              ["Private walkway", "30 LF × 3 ft", "<strong>$540–$900</strong>", "4\", residential"],
            ],
          },
        },
      ]}
      faq={[
        { question: "How much does a concrete sidewalk cost in OKC?", answer: "Sidewalks typically cost $6–$10 per sq ft. A 50-foot, 4-foot-wide sidewalk runs approximately $1,200–$2,000." },
        { question: "Do you handle city-required sidewalk repairs?", answer: "Yes — we handle permitted city right-of-way sidewalk replacements including ADA curb ramps." },
        { question: "How thick should a concrete sidewalk be?", answer: "4 inches is standard for pedestrian sidewalks. 5 inches is recommended where vehicles may cross, such as driveway approaches." },
        { question: "Do sidewalks need reinforcement?", answer: "Yes — we use wire mesh or rebar depending on the application. On Oklahoma clay, reinforcement helps prevent cracking from soil movement." },
      ]}
    />
  );
}
