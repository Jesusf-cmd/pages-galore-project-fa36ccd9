import ServicePage from "@/components/ServicePageTemplate";
import { loadingDockRepairContent } from "@/content/pages/loading-dock-repair";

export default function LoadingDockConcreteRepair() {
  return (
    <ServicePage
      enriched
      {...loadingDockRepairContent}
      badge="self-performed"
      modelNote="Self-performed dock concrete repair — our own crew handles assessment, prep, and the repair pour. Request a loading dock repair estimate below or call <a href='tel:4054584805'>(405) 458-4805</a>."
      processNearCta
      planningCallout="<strong>Occupied receiving dock?</strong> Include which doors must stay open, shift constraints, and desired timing when you request an estimate. After-hours or weekend work can be discussed when operations require it — sequencing is planned per project."
    />
  );
}
