import { useEffect } from "react";
import { syncFaqJsonLd, type FaqJsonLdItem } from "@/lib/faqJsonLd";

/** Own the single head FAQPage JSON-LD for the current route. */
export function useFaqJsonLd(items: FaqJsonLdItem[] | null | undefined) {
  const serialized = (items ?? []).map((item) => `${item.question}\n${item.answer}`).join("\n\n");
  useEffect(() => {
    syncFaqJsonLd(serialized ? items : null);
    return () => {
      syncFaqJsonLd(null);
    };
    // items is represented by serialized so identity churn does not retrigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serialized]);
}
