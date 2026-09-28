import ServicePage from "@/components/ServicePageTemplate";
import type { WichitaPageContent } from "@/content/wichitaPages";
import { estimatePath } from "@/lib/estimatePath";

export default function WichitaServicePage({ page }: { page: WichitaPageContent }) {
  return (
    <ServicePage
      enriched
      showTrustBar={false}
      trustLine={null}
      internalLinks={{ services: false, cities: false, blogs: false }}
      currentServiceSlug={page.path.replace(/^\//, "")}
      metaTitle={page.metaTitle}
      metaDescription={page.metaDescription}
      eyebrow={page.eyebrow}
      badge="self-performed"
      title={page.title}
      titleAccent={page.titleAccent}
      description={page.description}
      modelNote={page.modelNote}
      introText={page.introText}
      ctaLabel={page.ctaLabel}
      estimateHref={estimatePath(page.path.replace(/^\//, ""))}
      serviceSchema={{
        serviceType: page.serviceSchema.serviceType,
        name: page.serviceSchema.name,
        areaServed: { name: "Wichita", addressRegion: "KS" },
        telephone: page.serviceSchema.telephone,
      }}
      serviceCardsTitle={page.serviceCardsTitle}
      serviceCardsTitleAccent={page.serviceCardsTitleAccent}
      serviceCards={page.serviceCards}
      subServices={page.subServices}
      sections={page.sections}
      specs={page.specs}
      processEyebrow={page.processEyebrow}
      processTitle={page.processTitle}
      processTitleAccent={page.processTitleAccent}
      processIntro={page.processIntro}
      processSteps={page.processSteps}
      projectTypesEyebrow={page.projectTypesEyebrow}
      projectTypesTitle={page.projectTypesTitle}
      projectTypesTitleAccent={page.projectTypesTitleAccent}
      projectTypesIntro={page.projectTypesIntro}
      projectTypes={page.projectTypes}
      faqTitle={page.faqTitle}
      faq={page.faq}
      serviceArea={page.serviceArea}
      finalCta={page.finalCta}
    />
  );
}
