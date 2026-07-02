import Image from "next/image";
import type { Project } from "@/content/projects";
import type { RepoStats } from "@/lib/github";
import { relativeTime } from "@/lib/format";

type Props = {
  project: Project;
  /** Live GitHub stats; null when unavailable (private repo, rate limit…). */
  stats: RepoStats | null;
};

/** The Problem -> Approach -> Impact story rows, in display order. */
const STAGES = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "impact", label: "Impact" },
] as const;

export default function ProjectCard({ project, stats }: Props) {
  return (
    <article className="overflow-hidden rounded-lg border border-rule bg-panel transition-colors duration-200 hover:border-dimmer/60">
      {project.image && (
        <a
          href={project.demoUrl ?? `https://github.com/${project.repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[16/9] w-full overflow-hidden border-b border-rule"
          aria-label={`Open ${project.name}`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.name} screenshot`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>
      )}

      <div className="p-6 sm:p-7">
        <header className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
          {project.demoUrl && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/35 bg-amber/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-amber">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-amber"
              />
              Live
            </span>
          )}
        </header>

        <p className="mt-2 font-medium text-ink/90">{project.tagline}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools used">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-sm border border-blue/30 px-2 py-0.5 font-mono text-[11px] text-blue"
            >
              {tech}
            </li>
          ))}
        </ul>

        <dl className="mt-5 space-y-3">
          {STAGES.map(({ key, label }) => (
            <div
              key={key}
              className="grid gap-x-4 gap-y-1 sm:grid-cols-[92px_1fr]"
            >
              <dt
                className={`pt-0.5 text-xs font-semibold uppercase tracking-[0.12em] ${
                  key === "impact" ? "text-amber" : "text-dimmer"
                }`}
              >
                {label}
              </dt>
              <dd className="text-sm leading-relaxed text-dim">
                {project[key]}
              </dd>
            </div>
          ))}
        </dl>

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-dashed border-rule pt-5">
          <div className="flex flex-wrap items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm bg-amber px-3.5 py-2 text-xs font-semibold text-bg transition-colors hover:bg-amber/85"
              >
                <span aria-hidden="true">▸</span>
                Live demo
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {!project.repoPrivate && (
              <a
                href={`https://github.com/${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-rule px-3.5 py-2 text-xs text-ink transition-colors hover:border-amber hover:text-amber"
              >
                Source
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          {stats && (stats.language || stats.pushedAt) && (
            <p className="font-mono text-[11px] text-dimmer">
              {[
                stats.language,
                stats.pushedAt && `updated ${relativeTime(stats.pushedAt)}`,
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}
        </footer>
      </div>
    </article>
  );
}
