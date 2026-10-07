import ServicePage from "@/components/ServicePageTemplate";
import { loadingDockConstructionContent } from "@/content/pages/loading-dock-construction";

export default function LoadingDockConstruction() {
  return (
    <ServicePage
      enriched
      {...loadingDockConstructionContent}
      badge="self-performed"
      modelNote="Self-performed loading dock concrete — our own crew handles forming, reinforcement, and the pour. Request a construction estimate below or call <a href='tel:4054584805'>(405) 458-4805</a>."
      processNearCta
      planningCallout="<strong>GC or occupied facility?</strong> Include drawings, bay count, equipment supplier info if known, and access or schedule limits when you request an estimate. Phased or after-hours pours can be discussed for the specific project."
    />
  );
}
