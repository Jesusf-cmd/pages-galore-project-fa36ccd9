import ServicePage from "@/components/ServicePageTemplate";
import { loadingDockRepairContent } from "@/content/pages/loading-dock-repair";

export default function LoadingDockConcreteRepair() {
  return <ServicePage enriched {...loadingDockRepairContent} />;
}
