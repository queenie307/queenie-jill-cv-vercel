import type { Project } from "../data/content";
import ImageSlot from "./ImageSlot";

/**
 * No project links were supplied, so none are shown.
 * When you have a real repository or demo URL, add a `link` field in content.ts
 * and render it here as an <a> element.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card--lift project-card">
      <ImageSlot image={project.image} className="project-image" />
      <div className="project-body">
        <p className="badge">{project.status}</p>
        <h3>{project.title}</h3>
        <p className="muted">{project.description}</p>
        <p className="soon">Project link coming soon</p>
      </div>
    </article>
  );
}
