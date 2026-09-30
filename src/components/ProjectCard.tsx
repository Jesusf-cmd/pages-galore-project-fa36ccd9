import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  /** Optional finish/type label (e.g. "Stamped" vs "Broom finish"). */
  badge?: string;
};

export default function ProjectCard({ project, badge }: ProjectCardProps) {
  const image = project.images[0];

  return (
    <article className="bg-stone p-6 flex flex-col h-full">
      <div className="mb-4 -mx-6 -mt-6 overflow-hidden bg-concrete/[0.06] aspect-[16/10]">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          // TODO(FDZ): photo
          <div
            className="w-full h-full flex items-center justify-center text-[0.7rem] tracking-[0.12em] uppercase text-muted-text font-bold"
            aria-hidden="true"
          >
            Photo coming soon
          </div>
        )}
      </div>
      {badge && (
        <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">{badge}</div>
      )}
      <h3 className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-1">
        {project.title}
      </h3>
      <div className="text-[0.66rem] text-orange tracking-[0.1em] uppercase font-bold mb-3">
        {project.city}
      </div>
      <p className="text-[0.82rem] text-muted-text leading-relaxed mb-4 flex-1">{project.details}</p>
      <Link to={project.ownerPath} className="text-orange no-underline text-[0.78rem] font-semibold">
        View related service →
      </Link>
    </article>
  );
}
