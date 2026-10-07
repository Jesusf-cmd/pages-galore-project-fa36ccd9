import ServicePage from "@/components/ServicePageTemplate";
import { dockLevelerPitsContent } from "@/content/pages/dock-leveler-pits";

export default function DockLevelerPits() {
  return (
    <ServicePage
      enriched
      {...dockLevelerPitsContent}
      badge="self-performed"
      modelNote="Self-performed pit concrete — FDZ builds and repairs the concrete around dock-leveler equipment. Mechanical leveler install and service stay with the equipment supplier. Call <a href='tel:4054584805'>(405) 458-4805</a>."
      processNearCta
      planningCallout="<strong>Have supplier drawings?</strong> Include the leveler manufacturer’s pit dimensions, curb-angle details, and whether this is a new pit, retrofit, enlargement, or pit repair when you request an estimate."
    />
  );
}
