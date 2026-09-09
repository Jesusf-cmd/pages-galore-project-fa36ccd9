import ServicePage from "@/components/ServicePageTemplate";
import { adaRampsContent } from "@/content/pages/ada-ramps";

export default function ADACompliance() {
  return <ServicePage enriched {...adaRampsContent} />;
}
