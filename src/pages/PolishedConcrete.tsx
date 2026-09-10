import ServicePage from "@/components/ServicePageTemplate";
import { polishedConcreteContent } from "@/content/pages/polished-concrete";

export default function PolishedConcrete() {
  return <ServicePage enriched {...polishedConcreteContent} />;
}
