import type { Project } from "@/content/projects";
import type { RepoStats } from "@/lib/github";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

type Props = {
  items: Array<{ project: Project; stats: RepoStats | null }>;
};

/** Renders the curated projects, each revealed with a slight stagger. */
export default function ProjectList({ items }: Props) {
  return (
    <div className="space-y-5">
      {items.map(({ project, stats }, index) => (
        <Reveal key={project.slug} delay={index * 0.08}>
          <ProjectCard project={project} stats={stats} index={index} />
        </Reveal>
      ))}
    </div>
  );
}
