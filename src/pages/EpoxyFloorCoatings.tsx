import ServicePage from "@/components/ServicePageTemplate";
import { epoxyFloorCoatingsContent } from "@/content/pages/epoxy-floor-coatings";

export default function EpoxyFloorCoatings() {
  return <ServicePage enriched {...epoxyFloorCoatingsContent} />;
}
