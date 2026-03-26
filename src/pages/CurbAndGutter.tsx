import ServicePage from "@/components/ServicePageTemplate";

export default function CurbAndGutter() {
  return (
    <ServicePage
      metaTitle="Curb and Gutter Contractors in Oklahoma City | Redwood Construction LLC"
      metaDescription="Curb and gutter installation in Oklahoma City. New construction, replacement, and city-spec curb work for residential and commercial projects. Free estimate."
      eyebrow="OKC Metro · Curb & Gutter Contractors · Licensed & Insured"
      title="Curb & Gutter"
      titleAccent="Oklahoma City."
      description='Concrete curb and gutter contractors in Oklahoma City. New construction, replacement, and commercial curb work. <a href="tel:4052470027">(405) 247-0027</a>.'
      sections={[
        {
          eyebrow: "Curb & Gutter OKC",
          title: "Commercial &",
          titleAccent: "Residential Curb.",
          content: [
            "<strong>Curb and gutter contractors in Oklahoma City</strong> — Redwood Construction handles new construction, replacement, and repair of concrete curb and gutter across the OKC metro.",
            "We pour standard barrier curb, mountable curb, valley gutter, and combination curb and gutter sections to city specifications. Our curb work integrates with <a href='/commercial-concrete-oklahoma-city'>parking lot</a>, <a href='/sidewalks-oklahoma-city'>sidewalk</a>, and <a href='/driveways-oklahoma-city'>driveway</a> projects for complete commercial and residential site work.",
          ],
          stats: [
            { value: "$18–30", label: "Per linear ft" },
            { value: "City", label: "Spec compliant" },
            { value: "24hr", label: "Estimate response" },
          ],
        },
        {
          eyebrow: "Our Curb Process",
          title: "Precision Curb",
          titleAccent: "Installation.",
          content: [
            "Curb and gutter work demands precision — proper grade for drainage, consistent profile, and compliance with city specifications. Our crew uses steel forms and laser-guided grade checks to ensure every section meets specifications.",
            "We handle both slip-form and traditional formed curb work depending on project requirements. Every installation includes proper subgrade compaction, adequate curing, and clean joint work.",
            "We serve residential and commercial clients across the <a href='/oklahoma-city-concrete'>Oklahoma City metro</a> including subdivisions, commercial developments, and municipal projects.",
          ],
        },
        {
          eyebrow: "Why Choose Redwood",
          title: "Experienced Curb",
          titleAccent: "Contractors.",
          content: [
            "Redwood Construction understands the specific curb and gutter specifications for Oklahoma City and surrounding municipalities. We coordinate with city inspectors, engineers, and general contractors to ensure every project passes inspection.",
            "Our 4.9-star Google rating and BBB A+ accreditation reflect our commitment to quality on every project — from residential curb replacements to large commercial installations. See our <a href='/commercial-concrete-oklahoma-city'>commercial concrete services</a> and <a href='/foundations-oklahoma-city'>concrete foundation work</a> for related projects.",
          ],
        },
      ]}
      faq={[
        { question: "How much does curb and gutter cost in OKC?", answer: "Standard curb and gutter runs $18–$30 per linear foot installed, depending on profile type and site conditions." },
        { question: "Do you handle city-spec curb work?", answer: "Yes — we pour to Oklahoma City and surrounding municipality specifications for both residential and commercial projects." },
        { question: "What types of curb profiles do you pour?", answer: "We handle standard barrier curb, mountable (rollover) curb, valley gutter, and combination curb and gutter sections." },
      ]}
    />
  );
}
