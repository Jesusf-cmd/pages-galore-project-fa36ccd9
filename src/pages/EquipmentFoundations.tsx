import ServicePage from "@/components/ServicePageTemplate";
import { equipmentPadsContent } from "@/content/pages/equipment-pads";

export default function EquipmentFoundations() {
  return <ServicePage enriched {...equipmentPadsContent} />;
}
