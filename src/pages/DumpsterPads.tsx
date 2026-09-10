import ServicePage from "@/components/ServicePageTemplate";
import { dumpsterPadsContent } from "@/content/pages/dumpster-pads";

export default function DumpsterPads() {
  return <ServicePage enriched {...dumpsterPadsContent} />;
}
