export type TradeModel = "self-performed" | "gc-managed";

const LABELS: Record<TradeModel, string> = {
  "self-performed": "Self-Performed",
  "gc-managed": "GC Managed",
};

export default function TradeBadge({ model, className = "" }: { model: TradeModel; className?: string }) {
  return (
    <span
      className={`inline-block text-[0.6rem] md:text-[0.62rem] tracking-[0.1em] uppercase font-bold py-1 px-2.5 text-orange whitespace-nowrap ${className}`}
      style={{ border: "1px solid hsl(var(--orange) / 0.4)", background: "hsl(var(--orange) / 0.05)" }}
    >
      {LABELS[model]}
    </span>
  );
}
