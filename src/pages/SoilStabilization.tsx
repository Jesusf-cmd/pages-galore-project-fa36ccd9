import ServicePage from "@/components/ServicePageTemplate";
import { soilStabilizationContent } from "@/content/pages/soil-stabilization";

export default function SoilStabilization() {
  return <ServicePage enriched {...soilStabilizationContent} />;
}
