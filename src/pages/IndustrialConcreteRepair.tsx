import ServicePage from "@/components/ServicePageTemplate";
import { industrialRepairContent } from "@/content/pages/industrial-repair";

export default function IndustrialConcreteRepair() {
  return (
    <ServicePage
      enriched
      {...industrialRepairContent}
      badge="self-performed"
      modelNote="Self-performed industrial repair work — our own crew handles assessment, prep, and the repair pour. Request an industrial concrete repair estimate below or call <a href='tel:4054584805'>(405) 458-4805</a>."
      processNearCta
      planningCallout="<strong>Occupied facility?</strong> Include aisle or dock access limits, areas that must stay open, shift constraints, and desired timing when you request an estimate. After-hours or weekend work can be discussed when operations require it — sequencing is planned per project, not promised as a fixed response window."
    />
  );
}
