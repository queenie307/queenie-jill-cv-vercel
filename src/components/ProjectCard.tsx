import type { Project } from "../data/content";
import ImageSlot from "./ImageSlot";


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
