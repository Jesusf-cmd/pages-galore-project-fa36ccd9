import { filterProjects, type Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type ProjectGridProps = {
  service?: string;
  ids?: string[];
  featured?: boolean;
  limit?: number;
  projects?: Project[];
  className?: string;
  /** Optional per-project finish/type labels keyed by project id. */
  badgeById?: Record<string, string>;
};

export default function ProjectGrid({
  service,
  ids,
  featured,
  limit,
  projects,
  className,
  badgeById,
}: ProjectGridProps) {
  let list = projects ?? filterProjects({ service, ids, featured, limit });

  // Prefer explicit id order when provided (e.g. featured project first).
  if (!projects && ids?.length) {
    const byId = new Map(list.map((p) => [p.id, p]));
    list = ids.map((id) => byId.get(id)).filter((p): p is Project => Boolean(p));
  }

  if (!list.length) return null;

  return (
    <div
      className={
        className ??
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]"
      }
      style={className ? undefined : { border: "1px solid hsl(var(--concrete) / 0.08)" }}
    >
      {list.map((project) => (
        <ProjectCard key={project.id} project={project} badge={badgeById?.[project.id]} />
      ))}
    </div>
  );
}
