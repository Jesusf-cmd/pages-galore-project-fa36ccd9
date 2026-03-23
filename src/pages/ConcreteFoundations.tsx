import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteFoundations() {
  return (
    <ServicePage
      metaTitle="Concrete Foundation Contractor in Oklahoma City | Redwood Construction LLC"
      metaDescription="Concrete foundation contractor in Oklahoma City for residential and commercial projects. Call Redwood Construction LLC for reliable foundation work and free estimates."
      eyebrow="OKC Metro · Foundation Contractors · Licensed & Insured"
      title="Concrete Foundation Contractor in"
      titleAccent="Oklahoma City."
      description='Redwood Construction LLC provides concrete foundation services in Oklahoma City for residential and commercial projects. We install foundations with a focus on proper preparation, dependable workmanship, and long-term structural performance.'
      sections={[
        {
          eyebrow: "Foundation Services",
          title: "Foundation Services in",
          titleAccent: "Oklahoma City.",
          content: [
            "We provide concrete foundation work for homes, additions, shops, commercial buildings, and other structures in Oklahoma City and surrounding areas. Our team handles layout, excavation coordination, forming, reinforcement, and concrete placement with attention to quality and site conditions.",
            "In addition to foundation work, we also offer <a href='/concrete-driveways'>concrete driveway installation in Oklahoma City</a> and <a href='/concrete-slabs'>concrete slab installation in Oklahoma City</a> for residential and commercial properties.",
          ],
        },
        {
          eyebrow: "Our Process",
          title: "Our Foundation",
          titleAccent: "Construction Process.",
          content: [
            "Foundation work starts with proper planning, site prep, and layout. From there, we install forms, reinforcement, and concrete based on the project requirements. We focus on accuracy, elevation control, and a clean finished result so the foundation is ready for the next phase of construction.",
            "As a trusted <a href='/'>concrete contractor in Oklahoma City</a>, we bring the same reliable process to every foundation project we take on.",
          ],
        },
        {
          eyebrow: "Why Redwood",
          title: "Why Choose Redwood Construction LLC",
          titleAccent: "for Foundation Work.",
          content: [
            "Foundation work has to be done right the first time. Redwood Construction LLC focuses on dependable scheduling, clear communication, and solid concrete workmanship. We understand the importance of structural support, proper forming, and a foundation that meets the needs of the project.",
            "From residential foundations to projects managed by our <a href='/commercial-concrete-slabs'>commercial concrete contractors in Oklahoma City</a>, we deliver consistent quality on every job.",
          ],
        },
        {
          eyebrow: "Foundation Pricing",
          title: "Cost of Concrete Foundations in",
          titleAccent: "Oklahoma City.",
          alt: true,
          content: [
            "Foundation pricing depends on project size, depth, reinforcement, site access, excavation conditions, and concrete volume. We provide straightforward estimates so owners and contractors can understand the scope and pricing before work begins. Our goal is to deliver strong foundation work at a competitive price.",
          ],
        },
        {
          eyebrow: "Oklahoma Concrete Challenges",
          title: "Common Concrete Problems",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Oklahoma City sits on some of the most expansive clay soil in the United States. This Permian red clay absorbs moisture and swells during wet seasons, then contracts sharply during Oklahoma's summer droughts — sometimes shifting several inches in a single year. Concrete that isn't designed for this movement will crack, heave, and fail long before its time.",
            "The most common concrete problems we see across OKC are caused by the same three issues: inadequate base preparation, missing or improperly placed reinforcement, and poor drainage grading. A contractor who doesn't understand Oklahoma clay will pour a beautiful-looking slab that starts cracking within two or three years.",
            "Proper base prep means excavating to the correct depth, compacting the native subgrade, and installing a minimum 4-inch aggregate base — 6 inches on known problem clay lots. Rebar placed on chairs at mid-slab depth provides the tensile strength to resist soil movement. Control joints cut within 24 hours guide where the concrete relieves stress rather than cracking randomly.",
            "Drainage is the third factor most contractors skip. Oklahoma City gets significant rainfall, and concrete graded flat or toward a structure keeps the clay soil constantly saturated — accelerating the swell-shrink cycle and accelerating failure. Every slab Redwood Construction pours is graded to move water away from your structure.",
            "If your existing concrete in Oklahoma City is showing cracks, settlement, or surface scaling, the cause is almost always one of these three issues — not the concrete itself. Call Redwood Construction LLC at (405) 247-0027 for an honest assessment. We'll tell you whether it needs repair or full replacement, and why.",
          ],
        },
      ]}
      faq={[
        { question: "What types of foundations do you install?", answer: "We handle concrete foundation work for residential and commercial projects, including building pads, structural slabs, and related concrete support work depending on project scope." },
        { question: "Do you work on both small and large projects?", answer: "Yes. We can handle residential foundation jobs as well as larger commercial concrete foundation projects." },
        { question: "Do you serve areas outside Oklahoma City?", answer: "Yes. We also serve nearby areas including Edmond and Norman depending on the project." },
      ]}
    />
  );
}
