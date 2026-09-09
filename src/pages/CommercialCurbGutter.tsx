import ServicePage from "@/components/ServicePageTemplate";
import { commercialCurbGutterContent } from "@/content/pages/commercial-curb-gutter";

export default function CommercialCurbGutter() {
  return <ServicePage enriched {...commercialCurbGutterContent} />;
}
