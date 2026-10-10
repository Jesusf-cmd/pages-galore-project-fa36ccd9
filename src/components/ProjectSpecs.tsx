import { EXAMPLE_BUDGET_DISCLAIMER, type Project } from "@/data/projects";

export default function ProjectSpecs({ project }: { project: Project }) {
  const hasSpecs = Boolean(project.specs?.length);
  if (!hasSpecs && !project.exampleBudget) return null;

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
      {project.exampleBudget && (
        <div className="pt-3" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
          <div className="font-display text-lg font-black text-orange">{project.exampleBudget}</div>
          <div className="text-[0.6rem] text-muted-text uppercase tracking-wider">Example project budget</div>
          <p className="text-[0.66rem] text-muted-text leading-relaxed mt-2">{EXAMPLE_BUDGET_DISCLAIMER}</p>
        </div>
      )}
    </div>
  );
}
