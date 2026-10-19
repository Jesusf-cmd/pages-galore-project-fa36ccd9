/** Helpers for priced quotes only — unpriced inquiries never enter this path. */

export function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export type PricedQuoteAmounts = {
  estimateLow: number;
  estimateHigh: number;
  lengthFt: number;
  widthFt: number;
  sqft: number;
};

/** Validate insert payloads for `quotes` (NOT NULL numeric price/dimension columns). */
export function parsePricedQuoteAmounts(input: {
  estimateLow: unknown;
  estimateHigh: unknown;
  lengthFt: unknown;
  widthFt: unknown;
  sqft: unknown;
}): { ok: true; amounts: PricedQuoteAmounts } | { ok: false; error: string } {
  const { estimateLow, estimateHigh, lengthFt, widthFt, sqft } = input;
  if (
    !isFiniteNumber(estimateLow) ||
    !isFiniteNumber(estimateHigh) ||
    !isFiniteNumber(lengthFt) ||
    !isFiniteNumber(widthFt) ||
    !isFiniteNumber(sqft)
  ) {
    return {
      ok: false,
      error:
        "Priced quotes require numeric dimensions and estimate amounts. Use the inquiry flow for unpriced requests.",
    };
  }
  if (lengthFt <= 0 || widthFt <= 0 || sqft <= 0) {
    return { ok: false, error: "Dimensions must be positive numbers." };
  }
  if (estimateLow < 0 || estimateHigh < 0) {
    return { ok: false, error: "Estimate amounts cannot be negative." };
  }
  if (estimateHigh < estimateLow) {
    return { ok: false, error: "Estimate high must be greater than or equal to estimate low." };
  }
  return {
    ok: true,
    amounts: {
      estimateLow,
      estimateHigh,
      lengthFt,
      widthFt,
      sqft,
    },
  };
}

type QuoteLike = {
  estimate_low?: unknown;
  estimate_high?: unknown;
  total_estimate?: unknown;
  status?: unknown;
};

/** True only when a quote row has finite prices and is eligible for acceptance UI/API. */
export function isAcceptablePricedQuote(quote: QuoteLike | null | undefined): boolean {
  if (!quote) return false;
  if (quote.status !== "pending") return false;
  return (
    isFiniteNumber(quote.estimate_low) &&
    isFiniteNumber(quote.estimate_high) &&
    quote.estimate_low >= 0 &&
    quote.estimate_high >= quote.estimate_low
  );
}

export function hasPricedEstimateAmounts(quote: QuoteLike | null | undefined): boolean {
  if (!quote) return false;
  return isFiniteNumber(quote.estimate_low) && isFiniteNumber(quote.estimate_high);
}
