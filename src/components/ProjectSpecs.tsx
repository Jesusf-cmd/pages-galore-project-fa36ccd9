import {
  COMPLETED_COST_NOTE,
  COMPLETED_COST_NOTE_ON_KANSAS,
  WICHITA_BUDGET_LABEL,
  WICHITA_BUDGET_NOTE,
  type Project,
} from "@/data/projects";

type ProjectSpecsProps = {
  project: Project;
  /** When true, separate Oklahoma historical cost from optional Wichita planning budgets. */
  kansasPresentation?: boolean;
  /** In-page estimate target when no Wichita budget is published yet. */
  estimateHref?: string;
};

export default function ProjectSpecs({
  project,
  kansasPresentation = false,
  estimateHref = "#estimate",
}: ProjectSpecsProps) {
  const hasSpecs = Boolean(project.specs?.length);
  const hasCompleted = Boolean(project.completedCost);
  const hasWichitaBudget = Boolean(project.wichitaEstimatedBudget);
  const showKansasBudgetBlock = kansasPresentation && (hasWichitaBudget || hasCompleted);

  if (!hasSpecs && !hasCompleted && !showKansasBudgetBlock) return null;

  return (
    <div className="mb-4">
      {hasSpecs && (
        <ul
          className="space-y-1 text-[0.78rem] text-muted-text leading-relaxed mb-4"
          style={{ listStyle: "none", padding: 0 }}
          aria-label="Project specifications"
        >
          {project.specs!.map((spec) => (
            <li key={spec} className="flex gap-2">
              <span className="text-orange" aria-hidden="true">
                —
              </span>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      )}
      {hasCompleted && (
        <div className="pt-3" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-[0.66rem] text-muted-text uppercase tracking-wider font-bold">
              {kansasPresentation ? "Actual Oklahoma Project Cost:" : "Completed Project Cost:"}
            </span>{" "}
            <span className="font-display text-lg font-black text-orange">{project.completedCost}</span>
          </p>
          <p className="text-[0.66rem] text-muted-text leading-relaxed mt-2">
            {kansasPresentation ? COMPLETED_COST_NOTE_ON_KANSAS : COMPLETED_COST_NOTE}
          </p>
        </div>
      )}
      {kansasPresentation && (
        <div
          className={hasCompleted ? "pt-3 mt-3" : "pt-3"}
          style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}
        >
          {hasWichitaBudget ? (
            <>
              <p className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-[0.66rem] text-muted-text uppercase tracking-wider font-bold">
                  {WICHITA_BUDGET_LABEL}:
                </span>{" "}
                <span className="font-display text-lg font-black text-orange">
                  {project.wichitaEstimatedBudget}
                </span>
              </p>
              <p className="text-[0.66rem] text-muted-text leading-relaxed mt-2">{WICHITA_BUDGET_NOTE}</p>
            </>
          ) : (
            <>
              <p className="text-[0.66rem] text-muted-text uppercase tracking-wider font-bold mb-2">
                {WICHITA_BUDGET_LABEL}
              </p>
              <p className="text-[0.78rem] text-muted-text leading-relaxed mb-2">
                Request a written Wichita estimate for similar scope. Planning budgets are published here only after
                owner approval.
              </p>
              <a href={estimateHref} className="text-orange no-underline text-[0.78rem] font-semibold">
                Request a Wichita estimate →
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
