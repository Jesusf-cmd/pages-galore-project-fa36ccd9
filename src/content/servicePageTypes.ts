/** Shared service-page copy used by React pages and prerender HTML. */

export type ServiceCard = {
  icon: string;
  title: string;
  description: string;
};

export type SubServiceItem = {
  title: string;
  bullets: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type SpecItem = {
  label: string;
  value: string;
};

export type ServiceSection = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  content: string[];
  alt?: boolean;
  stats?: { value: string; label: string }[];
  table?: { headers: string[]; rows: string[][] };
  infoBlock?: string;
  id?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  currentServiceSlug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  introText?: string;
  localExpertiseNote?: string;
  serviceLabel?: string;
  serviceCards?: ServiceCard[];
  subServices?: {
    sectionTitle: string;
    sectionEyebrow?: string;
    items: SubServiceItem[];
  };
  processEyebrow?: string;
  processTitle?: string;
  processTitleAccent?: string;
  processSteps?: ProcessStep[];
  specs?: SpecItem[];
  sections: ServiceSection[];
  faq: FaqItem[];
  ctaLabel?: string;
};
