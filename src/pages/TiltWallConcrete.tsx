import ServicePage from "@/components/ServicePageTemplate";
import { tiltWallConcreteContent } from "@/content/pages/tilt-wall";

export default function TiltWallConcrete() {
  return <ServicePage enriched {...tiltWallConcreteContent} />;
}
