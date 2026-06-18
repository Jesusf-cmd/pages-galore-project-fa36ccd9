// Shared pricing configuration used by calculator, quote page, PDF, and emails.
// Single source of truth for all service definitions, pricing, and inclusions.

export const COMPANY = {
  name: "FDZ Construction LLC",
  phone: "(405) 458-4805",
  email: "jesus@fdzconstruction.com",
  siteUrl: "https://fdzconstruction.com",
  badge: "LICENSED & INSURED",
};

export interface ServiceType {
  id: string;
  name: string;
  description: string;
  basePricePerSqFt: { low: number; high: number };
  unit: string;
  includes: string[];
}

export const SERVICE_TYPES: Record<string, ServiceType> = {
  slab: {
    id: "slab",
    name: "Concrete Slab",
    description: "Patios, garage floors, slabs",
    basePricePerSqFt: { low: 6, high: 10 },
    unit: "sq ft",
    includes: [
      "Site preparation & grading",
      "Compacted gravel sub-base",
      "4\" reinforced concrete slab",
      "Wire mesh reinforcement",
      "Expansion & control joints",
      "Standard curing process",
      "Final site cleanup",
    ],
  },
  foundation: {
    id: "foundation",
    name: "Foundation",
    description: "Residential & commercial",
    basePricePerSqFt: { low: 9, high: 14 },
    unit: "sq ft",
    includes: [
      "Site excavation & soil prep",
      "Compacted gravel base layer",
      "Rebar reinforcement layout",
      "Concrete pour & precision leveling",
      "Anchor bolt installation",
      "Curing & moisture barrier application",
      "Final inspection-ready finish",
    ],
  },
  sidewalk: {
    id: "sidewalk",
    name: "Sidewalk",
    description: "Walkways and pathways",
    basePricePerSqFt: { low: 6, high: 10 },
    unit: "sq ft",
    includes: [
      "Layout staking & excavation",
      "Compacted base material",
      "4\" concrete pour to grade",
      "Broom finish for slip resistance",
      "Tooled control joints",
      "ADA-compliant slopes where required",
      "Site cleanup & debris removal",
    ],
  },
  wall: {
    id: "wall",
    name: "Retaining Wall",
    description: "Structural walls for slopes",
    basePricePerSqFt: { low: 25, high: 45 },
    unit: "sq ft",
    includes: [
      "Site evaluation & excavation",
      "Reinforced concrete footing",
      "Structural wall construction",
      "Steel rebar reinforcement",
      "Drainage system installation",
      "Backfill & compaction",
      "Surface finishing & sealing",
    ],
  },
};

export interface FinishType {
  id: string;
  name: string;
  description: string;
  addonPerSqFt: { low: number; high: number };
  includes?: string[];
}

export const FINISH_TYPES: Record<string, FinishType> = {
  broom: {
    id: "broom",
    name: "Broom Finish",
    description: "Standard textured finish",
    addonPerSqFt: { low: 0, high: 0 },
  },
  brushed: {
    id: "brushed",
    name: "Brushed / Smooth",
    description: "Smooth troweled look",
    addonPerSqFt: { low: 0, high: 0 },
  },
  stamped: {
    id: "stamped",
    name: "Stamped / Decorative",
    description: "Custom patterns & colors",
    addonPerSqFt: { low: 9, high: 12 },
    includes: [
      "Custom stamp pattern selection & consultation",
      "Integral color or color hardener application",
      "Antiquing release agent",
      "High-grade acrylic sealant",
      "Pattern layout & detail finishing",
    ],
  },
};

export interface LineItem {
  number: number;
  title: string;
  priceLow: number;
  priceHigh: number;
  includes: string[];
}

export function buildLineItems(
  projectType: string,
  finishType: string,
  sqft: number
): LineItem[] {
  const service = SERVICE_TYPES[projectType];
  if (!service) return [];

  const items: LineItem[] = [];
  const finish = FINISH_TYPES[finishType];

  // For walls, finish doesn't apply
  if (projectType === "wall") {
    items.push({
      number: 1,
      title: service.name,
      priceLow: Math.round(sqft * service.basePricePerSqFt.low),
      priceHigh: Math.round(sqft * service.basePricePerSqFt.high),
      includes: service.includes,
    });
    return items;
  }

  // Base service
  const finishLabel =
    finish && finish.id !== "stamped" ? ` — ${finish.name}` : "";
  items.push({
    number: 1,
    title: `${service.name}${finishLabel}`,
    priceLow: Math.round(sqft * service.basePricePerSqFt.low),
    priceHigh: Math.round(sqft * service.basePricePerSqFt.high),
    includes: service.includes,
  });

  // Stamped upgrade as separate line item
  if (finish && finish.id === "stamped" && finish.includes) {
    items.push({
      number: 2,
      title: "Stamped / Decorative Finish Upgrade",
      priceLow: Math.round(sqft * finish.addonPerSqFt.low),
      priceHigh: Math.round(sqft * finish.addonPerSqFt.high),
      includes: finish.includes,
    });
  }

  return items;
}

export function calculateRange(
  projectType: string,
  finishType: string,
  sqft: number
) {
  const service = SERVICE_TYPES[projectType];
  if (!service) return { low: 0, high: 0, perFtLow: 0, perFtHigh: 0 };

  let low = service.basePricePerSqFt.low;
  let high = service.basePricePerSqFt.high;

  if (projectType !== "wall") {
    const finish = FINISH_TYPES[finishType];
    if (finish) {
      low += finish.addonPerSqFt.low;
      high += finish.addonPerSqFt.high;
    }
  }

  return {
    low: Math.round(sqft * low),
    high: Math.round(sqft * high),
    perFtLow: low,
    perFtHigh: high,
  };
}

export function formatQuoteNumber(num: number): string {
  return `#${String(num).padStart(4, "0")}`;
}

export function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
