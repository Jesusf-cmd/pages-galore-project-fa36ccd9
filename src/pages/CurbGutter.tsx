import ServicePage from "@/components/ServicePageTemplate";

export default function CurbGutter() {
  return (
    <ServicePage
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
            "We pour standard barrier curb, mountable curb, valley gutter, and combination curb and gutter sections to city specifications.",
          ],
        },
      ]}
      faq={[
        { question: "How much does curb and gutter cost in OKC?", answer: "Standard curb and gutter runs $18–$30 per linear foot installed, depending on profile type and site conditions." },
        { question: "Do you handle city-spec curb work?", answer: "Yes — we pour to Oklahoma City and surrounding municipality specifications for both residential and commercial projects." },
      ]}
    />
  );
}
