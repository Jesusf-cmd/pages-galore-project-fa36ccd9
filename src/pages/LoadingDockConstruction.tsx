import ServicePage from "@/components/ServicePageTemplate";
import { loadingDockConstructionContent } from "@/content/pages/loading-dock-construction";

export default function LoadingDockConstruction() {
  return <ServicePage enriched {...loadingDockConstructionContent} />;
}
