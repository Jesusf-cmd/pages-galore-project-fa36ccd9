import ServicePage from "@/components/ServicePageTemplate";
import { dockLevelerPitsContent } from "@/content/pages/dock-leveler-pits";

export default function DockLevelerPits() {
  return <ServicePage enriched {...dockLevelerPitsContent} />;
}
