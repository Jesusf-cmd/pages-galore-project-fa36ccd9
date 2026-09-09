import ServicePage from "@/components/ServicePageTemplate";
import { parkingLotRepairContent } from "@/content/pages/parking-lot-repair";

export default function ConcreteParkinglotRepair() {
  return <ServicePage enriched {...parkingLotRepairContent} />;
}
