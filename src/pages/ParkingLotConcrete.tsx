import ServicePage from "@/components/ServicePageTemplate";
import { parkingLotConstructionContent } from "@/content/pages/parking-lot-construction";

export default function ParkingLotConcrete() {
  return <ServicePage enriched {...parkingLotConstructionContent} />;
}
