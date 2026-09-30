import { filterProjects, type Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

type ProjectGridProps = {
  service?: string;
  ids?: string[];
  featured?: boolean;
  limit?: number;
  projects?: Project[];
  className?: string;
};

export default function ProjectGrid({
  service,
  ids,
  featured,
  limit,
  projects,
  className,
}: ProjectGridProps) {
  const list = projects ?? filterProjects({ service, ids, featured, limit });

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
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
