import ServicePage from "@/components/ServicePageTemplate";
import { concreteMaintenanceContent } from "@/content/pages/concrete-maintenance";

export default function ConcreteMaintenance() {
  return <ServicePage enriched {...concreteMaintenanceContent} />;
}
