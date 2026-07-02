"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import Socials from "./Socials";

const NAV = [
  { id: "about", label: "About" },
  { id: "work", label: "Selected Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Track which section is currently in the middle band of the viewport so
 * the nav can highlight it (scroll-spy).
 */
function useActiveSection(): string {
  const [active, setActive] = useState<string>(NAV[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // Only the band between 25% and 55% from the top counts as "active",
      // so exactly one section wins at a time.
      { rootMargin: "-25% 0px -55% 0px" },
    );

    for (const { id } of NAV) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

/**
 * The fixed intro column: identity, pitch, section nav and social links.
 * Sticky beside the content on desktop, stacked above it on mobile.
 */
export default function Intro() {
  const active = useActiveSection();

  return (
    <div className="flex h-full flex-col justify-between gap-10">
      <div>
        {/* Professional kicker (replaces the old "$ whoami" prompt). */}
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-blue">
          {profile.kicker}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg font-medium text-ink/90">{profile.role}</p>
        <p className="mt-4 max-w-sm leading-relaxed text-dim">
          {profile.pitch}
        </p>

        <nav className="mt-14 hidden lg:block" aria-label="Sections">
          <ul className="space-y-4">
            {NAV.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="group flex items-center gap-4 font-mono text-xs font-medium uppercase tracking-[0.2em]"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-14 bg-amber"
                          : "w-7 bg-dimmer group-hover:w-14 group-hover:bg-ink"
                      }`}
                    />
                    <span
                      className={`transition-colors ${
                        isActive ? "text-ink" : "text-dimmer group-hover:text-ink"
                      }`}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <Socials />
    </div>
  );
}
