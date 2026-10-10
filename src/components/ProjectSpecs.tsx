import { COMPLETED_COST_NOTE, type Project } from "@/data/projects";

export default function ProjectSpecs({ project }: { project: Project }) {
  const hasSpecs = Boolean(project.specs?.length);
  if (!hasSpecs && !project.completedCost) return null;

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
      {project.completedCost && (
        <div className="pt-3" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-[0.66rem] text-muted-text uppercase tracking-wider font-bold">
              Completed Project Cost:
            </span>{" "}
            <span className="font-display text-lg font-black text-orange">{project.completedCost}</span>
          </p>
          <p className="text-[0.66rem] text-muted-text leading-relaxed mt-2">{COMPLETED_COST_NOTE}</p>
        </div>
      )}
    </div>
  );
}
