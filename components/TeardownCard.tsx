import type { Teardown } from "@/content/teardowns";

type Props = {
  teardown: Teardown;
};

const STAGES = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "impact", label: "Impact" },
] as const;

export default function TeardownCard({ teardown }: Props) {
  return (
    <article className="overflow-hidden rounded-lg border border-rule bg-panel transition-colors duration-200 hover:border-dimmer/60">
      <div className="p-6 sm:p-7">
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-amber">
              {teardown.company} · {teardown.date}
            </span>
            <h3 className="mt-1 text-xl font-semibold text-ink">
              {teardown.title}
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/40 bg-pink-500/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-pink-400">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse"
            />
            Interactive Teardown
          </span>
        </header>

        <p className="mt-2.5 font-medium text-ink/90">{teardown.tagline}</p>

        {/* Tags */}
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Topics">
          {teardown.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-blue/30 px-2 py-0.5 font-mono text-[11px] text-blue"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Key Metrics Strip */}
        {teardown.metrics && teardown.metrics.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 rounded-md border border-rule-soft bg-bg/60 p-3">
            {teardown.metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <div className="font-mono text-base font-bold text-ink">
                  {m.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-dimmer">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Problem / Approach / Impact */}
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
                {teardown[key]}
              </dd>
            </div>
          ))}
        </dl>

        {/* Actions Footer */}
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-dashed border-rule pt-5">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={teardown.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm bg-amber px-3.5 py-2 text-xs font-semibold text-bg transition-colors hover:bg-amber/85"
            >
              <span>Explore Interactive Dashboard</span>
              <span aria-hidden="true">↗</span>
            </a>
            {teardown.markdownUrl && (
              <a
                href={teardown.markdownUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm border border-rule px-3.5 py-2 text-xs text-ink transition-colors hover:border-amber hover:text-amber"
              >
                <span>Read PRDs & Spec (.md)</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
}
