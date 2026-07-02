import Intro from "@/components/Intro";
import ProjectList from "@/components/ProjectList";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { getRepoStats } from "@/lib/github";

/**
 * ISR: the page is served statically and re-rendered at most hourly, which
 * is when the GitHub stats in lib/github.ts refresh — no manual rebuilds.
 */
export const revalidate = 3600;

export default async function Home() {
  // Enrich curated stories with live GitHub stats. Private repos are
  // skipped; failed fetches resolve to null and the card renders without
  // the stats row.
  const work = await Promise.all(
    projects.map(async (project) => ({
      project,
      stats: project.repoPrivate ? null : await getRepoStats(project.repo),
    })),
  );

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:flex lg:gap-10 xl:gap-20">
      <header className="pt-14 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:py-20">
        <Intro />
      </header>

      <main className="pb-16 pt-6 lg:w-[58%] lg:pt-12">
        <Section id="about" index="01" title="About">
          <Reveal>
            <div className="max-w-xl space-y-4 leading-relaxed text-dim">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="work" index="02" title="Selected Work">
          <Reveal>
            <p className="mb-8 max-w-xl leading-relaxed text-dim">
              Everything here was built end-to-end —{" "}
              <strong className="font-medium text-ink">
                not specced and handed off
              </strong>
              . Each one broke somewhere; <em>HANDLED</em> is where, and what I
              did about it.{" "}
              <strong className="font-medium text-ink">
                All three are live — open a demo and try it.
              </strong>
            </p>
          </Reveal>
          <ProjectList items={work} />
        </Section>

        <Section id="skills" index="03" title="Skills">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {profile.skills.map(({ group, items }, index) => (
              <Reveal key={group} delay={index * 0.05}>
                <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-dimmer">
                  {group}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-rule px-2 py-0.5 font-mono text-xs text-dim"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contact" index="04" title="Contact">
          <Reveal>
            <p className="max-w-xl leading-relaxed text-dim">
              Building something with a manual step nobody&apos;s automated
              yet? Tell me about it — happy to walk through any of the code,
              the breaks, or the fixes live.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block border-b border-dimmer pb-0.5 font-mono text-lg text-ink transition-colors hover:border-amber hover:text-amber sm:text-xl"
            >
              {profile.email}
            </a>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-dim">
              <li>
                <a
                  href={profile.phoneHref}
                  className="transition-colors hover:text-amber"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber"
                >
                  linkedin
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber"
                >
                  github/{profile.githubUser}
                </a>
              </li>
              {profile.resumeUrl && (
                <li>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-amber"
                  >
                    résumé
                  </a>
                </li>
              )}
            </ul>
          </Reveal>
        </Section>

        <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-rule-soft pt-8 font-mono text-xs text-dimmer">
          <span aria-hidden="true">exit 0</span>
          <p>
            Built with Next.js + Tailwind —{" "}
            <a
              href={`${profile.github}/sumeet-portfolio`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-dimmer pb-px transition-colors hover:border-amber hover:text-amber"
            >
              source
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
