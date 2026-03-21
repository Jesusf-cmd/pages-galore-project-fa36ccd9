import ServicePage from "@/components/ServicePageTemplate";

export default function ParkingLotConcrete() {
  return (
    <ServicePage
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
            "Commercial parking lots require 5–6 inch slabs, proper drainage grading, joint sealing, and reinforcement designed for heavy vehicle loads. We handle projects from small retail lots to large commercial properties.",
          ],
          stats: [
            { value: "5–6\"", label: "Slab thickness" },
            { value: "4,000", label: "PSI minimum" },
            { value: "ADA", label: "Compliant" },
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete parking lot cost in OKC?", answer: "Commercial parking lots run $7–$12 per sq ft installed, depending on size, base conditions, and drainage requirements." },
        { question: "How long does a concrete parking lot last?", answer: "A properly built concrete parking lot lasts 30–40 years with minimal maintenance — significantly longer than asphalt." },
      ]}
    />
  );
}
