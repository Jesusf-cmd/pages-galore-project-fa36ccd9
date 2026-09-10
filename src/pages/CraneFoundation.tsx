import ServicePage from "@/components/ServicePageTemplate";
import { craneFoundationContent } from "@/content/pages/crane-foundation";

export default function CraneFoundation() {
  return <ServicePage enriched {...craneFoundationContent} />;
}
