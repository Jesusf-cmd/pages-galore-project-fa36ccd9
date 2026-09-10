import ServicePage from "@/components/ServicePageTemplate";
import { retailRestaurantContent } from "@/content/pages/retail-restaurant";

export default function RetailRestaurantConcrete() {
  return <ServicePage enriched {...retailRestaurantContent} />;
}
