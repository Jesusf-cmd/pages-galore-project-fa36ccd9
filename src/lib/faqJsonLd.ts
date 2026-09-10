/** Shared FAQ JSON-LD helpers for prerender HTML and the mounted SPA. */

export const FAQ_JSON_LD_SCRIPT_ID = "fdz-faq-jsonld";

export type FaqJsonLdItem = {
  question: string;
  answer: string;
};

export function isFaqPageJsonLd(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const type = (value as { "@type"?: string | string[] })["@type"];
  return type === "FAQPage" || (Array.isArray(type) && type.includes("FAQPage"));
}

export function toFaqPageJsonLd(items: FaqJsonLdItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/<[^>]+>/g, ""),
      },
    })),
  };
}

export function faqJsonLdScriptTag(json: string): string {
  const safe = String(json).replace(/</g, "\\u003c");
  let isFaq = false;
  try {
    isFaq = isFaqPageJsonLd(JSON.parse(json));
  } catch {
    isFaq = false;
  }
  const idAttr = isFaq ? ` id="${FAQ_JSON_LD_SCRIPT_ID}"` : "";
  return `<script type="application/ld+json"${idAttr}>${safe}</script>`;
}

function faqScriptElements(doc: Document): HTMLScriptElement[] {
  return [...doc.querySelectorAll('script[type="application/ld+json"]')].filter((el) => {
    if (!(el instanceof HTMLScriptElement)) return false;
    if (el.id === FAQ_JSON_LD_SCRIPT_ID) return true;
    try {
      return isFaqPageJsonLd(JSON.parse(el.textContent || ""));
    } catch {
      return false;
    }
  }) as HTMLScriptElement[];
}

/**
 * Keep exactly one FAQPage JSON-LD in document.head, or none.
 * Leaves GeneralContractor / Service and other non-FAQ scripts untouched.
 */
export function syncFaqJsonLd(
  items: FaqJsonLdItem[] | null | undefined,
  doc: Document = document,
): void {
  for (const el of faqScriptElements(doc)) el.remove();
  if (!items?.length) return;
  const script = doc.createElement("script");
  script.type = "application/ld+json";
  script.id = FAQ_JSON_LD_SCRIPT_ID;
  script.text = JSON.stringify(toFaqPageJsonLd(items)).replace(/</g, "\\u003c");
  doc.head.appendChild(script);
}
