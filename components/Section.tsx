import type { ReactNode } from "react";

type Props = {
  /** Anchor target for the intro-column nav, e.g. "work". */
  id: string;
  /** Two-digit ordinal shown before the title, e.g. "02". */
  index: string;
  title: string;
  children: ReactNode;
};

/** Shared section shell: anchor, numbered mono heading, consistent rhythm. */
export default function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-20 py-10 lg:py-14">
      <h2 className="mb-8 font-mono text-xs font-medium uppercase tracking-[0.2em] text-dimmer">
        <span className="text-amber">{index}</span>
        <span aria-hidden="true"> · </span>
        {title}
      </h2>
      {children}
    </section>
  );
}
