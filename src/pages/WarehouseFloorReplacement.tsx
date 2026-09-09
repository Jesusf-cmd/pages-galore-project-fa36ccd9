import ServicePage from "@/components/ServicePageTemplate";
import { warehouseSlabContent } from "@/content/pages/warehouse-slab";

export default function WarehouseFloorReplacement() {
  return <ServicePage enriched {...warehouseSlabContent} />;
}
