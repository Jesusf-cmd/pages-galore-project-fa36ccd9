import ServicePage from "@/components/ServicePageTemplate";
import { adaRampsContent } from "@/content/pages/ada-ramps";

export default function ADACompliance() {
  return (
    <ServicePage
      enriched
      {...adaRampsContent}
      proof={{
        eyebrow: "Proof",
        title: "Recent sidewalk & ADA projects",
        ids: ["star-spencer-hs", "edmond-row-sidewalk"],
      }}
    />
  );
}
