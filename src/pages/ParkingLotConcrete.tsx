import ServicePage from "@/components/ServicePageTemplate";

export default function ParkingLotConcrete() {
  return (
    <ServicePage
      metaTitle="Parking Lot Concrete in Oklahoma City | Redwood Construction LLC"
      metaDescription="Commercial concrete parking lot contractors in Oklahoma City. New construction, resurfacing, and ADA-compliant design. Call Redwood Construction for an estimate."
      eyebrow="OKC Metro · Commercial Concrete · Licensed & Insured"
      title="Parking Lot"
      titleAccent="Concrete OKC."
      description='Commercial concrete parking lot contractors in Oklahoma City. New construction, resurfacing, and repair for OKC businesses.'
      sections={[
        {
          eyebrow: "Commercial Parking Lots",
          title: "Built for Heavy",
          titleAccent: "Commercial Traffic.",
          content: [
            "<strong>Commercial concrete parking lot contractors in Oklahoma City</strong> — Redwood Construction handles new parking lot construction, resurfacing, and major repairs for OKC businesses.",
            "Commercial parking lots require 5–6 inch slabs, proper drainage grading, joint sealing, and reinforcement designed for heavy vehicle loads. We handle projects from small retail lots to large commercial properties. Our parking lot work integrates with <a href='/curb-and-gutter'>curb and gutter</a> and <a href='/commercial-concrete-slabs'>commercial slab</a> services.",
          ],
          stats: [
            { value: "5–6\"", label: "Slab thickness" },
            { value: "4,000", label: "PSI minimum" },
            { value: "ADA", label: "Compliant" },
          ],
        },
        {
          eyebrow: "Our Parking Lot Process",
          title: "From Site Prep to",
          titleAccent: "Finished Surface.",
          content: [
            "Parking lot construction requires careful planning for drainage, traffic flow, ADA compliance, and long-term durability. We coordinate with engineers and property owners to develop a pour plan that accounts for all of these factors.",
            "Our process includes thorough site grading for proper drainage, compacted aggregate base, reinforcement per specifications, and 4,000 PSI concrete placed in coordinated pours. Joint spacing is engineered for the slab dimensions, and ADA-compliant accessible spaces are included per code.",
            "We serve commercial clients across the <a href='/oklahoma-city-concrete'>OKC metro</a> including <a href='/edmond-concrete'>Edmond</a>, <a href='/yukon-oklahoma-concrete'>Yukon</a>, and <a href='/moore-oklahoma-concrete'>Moore</a>.",
          ],
        },
        {
          eyebrow: "Why Choose Redwood",
          title: "Commercial Parking",
          titleAccent: "Lot Experts.",
          content: [
            "Redwood Construction has completed commercial parking lot projects across Oklahoma City — see our <a href='/our-projects'>project gallery</a> for examples including our Kiddie Academy project. We understand the specific requirements of commercial concrete: ADA compliance, drainage engineering, and durability under heavy traffic.",
            "Our BBB A+ rating and 4.9-star Google reviews reflect consistent quality on commercial and <a href='/concrete-driveways'>residential driveway</a> projects alike. We also handle <a href='/concrete-foundations'>concrete foundation work</a> for commercial and residential buildings across Oklahoma City.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete parking lot cost in OKC?", answer: "Commercial parking lots run $7–$12 per sq ft installed, depending on size, base conditions, and drainage requirements." },
        { question: "How long does a concrete parking lot last?", answer: "A properly built concrete parking lot lasts 30–40 years with minimal maintenance — significantly longer than asphalt." },
        { question: "Do you handle ADA compliance for parking lots?", answer: "Yes — all our commercial parking lot projects include ADA-compliant accessible spaces, ramps, and signage per current code requirements." },
      ]}
    />
  );
}
