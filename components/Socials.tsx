import { profile } from "@/content/profile";

/**
 * Icon links to GitHub, LinkedIn and email, plus an optional Résumé link
 * that appears once profile.resumeUrl is set.
 */
export default function Socials() {
  return (
    <ul className="flex items-center gap-5" aria-label="Profiles and contact">
      <li>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub (${profile.githubUser})`}
          className="block text-dim transition-colors hover:text-amber"
        >
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="block text-dim transition-colors hover:text-amber"
        >
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <a
          href={`mailto:${profile.email}`}
          aria-label={`Email ${profile.email}`}
          className="block text-dim transition-colors hover:text-amber"
        >
          <MailIcon />
        </a>
      </li>
      {profile.resumeUrl && (
        <li>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-dim underline decoration-dimmer underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
          >
            Résumé
          </a>
        </li>
      )}
    </ul>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.38.82 1.11.82 2.24v3.32c0 .32.21.7.83.58A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </svg>
  );
}
