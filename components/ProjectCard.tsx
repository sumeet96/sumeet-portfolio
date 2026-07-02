import type { Project } from "@/content/projects";
import type { RepoStats } from "@/lib/github";
import { relativeTime } from "@/lib/format";

type Props = {
  project: Project;
  /** Live GitHub stats; null when unavailable (private repo, rate limit…). */
  stats: RepoStats | null;
  /** Zero-based position in the list, rendered as "RUN #001". */
  index: number;
};

/** The OBSERVED → BUILT → HANDLED story rows, in display order. */
const STAGES = [
  { key: "observed", label: "OBSERVED" },
  { key: "built", label: "BUILT" },
  { key: "handled", label: "HANDLED" },
] as const;

export default function ProjectCard({ project, stats, index }: Props) {
  const runId = `RUN #${String(index + 1).padStart(3, "0")}`;

  return (
    <article className="rounded-md border border-rule bg-panel p-6 transition-colors duration-200 hover:border-dimmer/60 hover:bg-panel-hover sm:p-7">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] tracking-[0.15em] text-dimmer">
            {runId}
          </p>
          <h3 className="mt-1 font-mono text-lg font-semibold text-ink">
            {project.name}
          </h3>
        </div>
        <span className="rounded-sm border border-amber/35 bg-amber/10 px-2.5 py-1 font-mono text-[11px] tracking-wider text-amber">
          SHIPPED
        </span>
      </header>

      <p className="mt-3 font-medium text-ink/90">{project.tagline}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
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
          <div key={key} className="grid gap-x-4 gap-y-1 sm:grid-cols-[96px_1fr]">
            <dt
              className={`pt-0.5 font-mono text-[11px] tracking-[0.15em] ${
                key === "handled" ? "text-rust" : "text-dimmer"
              }`}
            >
              {label}
            </dt>
            <dd className="text-sm leading-relaxed text-dim">{project[key]}</dd>
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
              className="inline-flex items-center gap-1.5 rounded-sm bg-amber px-3.5 py-2 font-mono text-xs font-semibold text-bg transition-colors hover:bg-amber/85"
            >
              <span aria-hidden="true" className="text-sm leading-none">
                ▸
              </span>
              Live demo
              <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.repoPrivate ? (
            <span className="font-mono text-xs text-dimmer">
              private build — walkthrough on request
            </span>
          ) : (
            <a
              href={`https://github.com/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-rule px-3.5 py-2 font-mono text-xs text-ink transition-colors hover:border-amber hover:text-amber"
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
    </article>
  );
}
