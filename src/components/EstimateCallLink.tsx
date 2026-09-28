import { phoneForEstimateOrigin } from "@/lib/estimatePath";

const SUCCESS_CLASS = "text-orange font-bold no-underline";
const ERROR_CLASS = "font-bold underline";

export function EstimateCallLink({
  from,
  className = SUCCESS_CLASS,
}: {
  from: string | null | undefined;
  className?: string;
}) {
  const phone = phoneForEstimateOrigin(from);
  return (
    <a href={`tel:${phone.tel}`} className={className}>
      {phone.display}
    </a>
  );
}

export function EstimateCallError({
  prefix,
  from,
}: {
  prefix: string;
  from: string | null | undefined;
}) {
  return (
    <>
      {prefix} <EstimateCallLink from={from} className={ERROR_CLASS} />.
    </>
  );
}

export function EstimateCallFollowUp({ from }: { from: string | null | undefined }) {
  return (
    <p className="text-muted-text text-sm">
      Or call us now at <EstimateCallLink from={from} />.
    </p>
  );
}
