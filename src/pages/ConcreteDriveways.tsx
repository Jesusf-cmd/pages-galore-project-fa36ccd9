import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteDriveways() {
  return (
    <ServicePage
      metaTitle="Concrete Driveway Contractor in Oklahoma City | Redwood Construction LLC"
      metaDescription="Concrete driveway contractor in Oklahoma City offering new installation, replacement, and residential concrete services. Call Redwood Construction LLC for a free estimate."
      eyebrow="OKC Metro · Driveway Contractors · Licensed & Insured"
      title="Concrete Driveway Contractor in"
      titleAccent="Oklahoma City."
      description='Redwood Construction LLC provides professional concrete driveway installation in Oklahoma City and surrounding areas. We build durable, clean, long-lasting driveways for homeowners, builders, and property owners who need dependable concrete work done right.'
      sections={[
        {
          eyebrow: "Driveway Services",
          title: "Driveway Installation Services in",
          titleAccent: "Oklahoma City.",
          content: [
            "We install new concrete driveways, replace damaged driveways, and handle driveway extensions for residential properties in Oklahoma City, Edmond, and Norman. Our team focuses on proper grading, base preparation, reinforcement, and clean finishing so your driveway performs well and looks professional for years to come.",
            "Whether you need a new driveway or a full replacement, our team also provides <a href='/concrete-foundation-okc'>concrete foundation services in Oklahoma City</a> and <a href='/concrete-slabs'>concrete slab installation in Oklahoma City</a> with the same attention to quality and durability.",
          ],
        },
        {
          eyebrow: "Our Process",
          title: "Our Concrete",
          titleAccent: "Driveway Process.",
          content: [
            "Our process starts with site evaluation, grading, and preparation of the subgrade. We then install the required forms, reinforcement, and concrete placement based on the needs of the project. After finishing and curing, we leave the site clean and ready for use. Every driveway project is built with long-term durability and appearance in mind.",
            "As a trusted <a href='/'>concrete contractor in Oklahoma City</a>, we bring the same dependable process to every project across the OKC metro area.",
          ],
        },
        {
          eyebrow: "Why Redwood",
          title: "Why Homeowners Choose",
          titleAccent: "Redwood Construction LLC.",
          content: [
            "Homeowners choose Redwood Construction LLC because we provide straightforward communication, dependable workmanship, and clean concrete finishes. We understand that a driveway is one of the most visible parts of a property, so we focus on quality installation, proper drainage, and a finished product that adds value and curb appeal.",
            "From residential driveways to large-scale projects handled by our <a href='/commercial-concrete-slabs'>commercial concrete contractors in Oklahoma City</a>, we deliver consistent quality across every job.",
          ],
        },
        {
          eyebrow: "Driveway Pricing",
          title: "Cost of Concrete Driveway",
          titleAccent: "Installation in OKC.",
          alt: true,
          content: [
            "Concrete driveway cost in Oklahoma City depends on size, thickness, site access, demolition needs, reinforcement, and finish requirements. We provide clear estimates so property owners understand the scope of work before the project starts. Whether you need a standard residential driveway or a larger custom layout, we can provide a competitive quote.",
          ],
        },
      ]}
      faq={[
        { question: "How long does a concrete driveway last?", answer: "A properly installed concrete driveway can last for decades when built on a solid base with proper drainage and routine maintenance." },
        { question: "Do you replace old cracked driveways?", answer: "Yes. We remove and replace damaged driveways and can also expand or reconfigure existing driveway layouts." },
        { question: "Do you serve areas outside Oklahoma City?", answer: "Yes. We also serve surrounding areas including Edmond and Norman depending on the project." },
      ]}
    />
  );
}
