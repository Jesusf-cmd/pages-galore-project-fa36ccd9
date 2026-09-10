import ServicePage from "@/components/ServicePageTemplate";
import { truckCourtsContent } from "@/content/pages/truck-courts";

export default function TruckCourts() {
  return <ServicePage enriched {...truckCourtsContent} />;
}
