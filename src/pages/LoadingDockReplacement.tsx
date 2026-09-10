import ServicePage from "@/components/ServicePageTemplate";
import { loadingDockReplacementContent } from "@/content/pages/loading-dock-replacement";

export default function LoadingDockReplacement() {
  return <ServicePage enriched {...loadingDockReplacementContent} />;
}
