/**
 * Curated project stories — the narrative half of every project card.
 * Live numbers (stars, language, last push) come from the GitHub API at
 * render time; see lib/github.ts. To showcase a new project, add an entry
 * here and push — nothing else to wire up.
 */

export type Project = {
  /** Stable id used for anchors and React keys. */
  slug: string;
  name: string;
  /** One confident line under the project name. */
  tagline: string;
  /** GitHub "owner/repo" — drives the repo link and live stats. */
  repo: string;
  /**
   * True while the repo isn't public: the card shows a "code walkthrough
   * on request" note instead of a repo link, and skips the stats fetch.
   * Flip to false once the repo is published.
   */
  repoPrivate?: boolean;
  /** Optional live-demo URL, shown next to the repo link. */
  demoUrl?: string;
  stack: string[];
  /** The OBSERVED → BUILT → HANDLED story. HANDLED is the differentiator: where it broke and what was done about it. */
  observed: string;
  built: string;
  handled: string;
};

export const projects: Project[] = [
  {
    slug: "anveshan-cx",
    name: "anveshan-cx",
    tagline: "LLM review intelligence that founders actually read.",
    repo: "sumeet96/anveshan-cx",
    stack: [
      "Python",
      "OpenAI",
      "pandas",
      "Streamlit",
      "Slack API",
      "GitHub Actions",
    ],
    observed:
      "Amazon reviews pile up faster than any founder can read them — and the signal (a new defect, a spiking complaint) drowns in the noise.",
    built:
      "A Python pipeline that ingests reviews, tags themes and sentiment with GPT-4o-mini, detects month-over-month spikes with pandas, and ships a founder-ready brief to Slack on a GitHub Actions schedule — with a Streamlit dashboard for the deep dive.",
    handled:
      "LLMs confidently invent quotes. Every claim in a brief must carry verbatim-substring evidence from a real review, and every number is validated against precomputed stats before it ships — a claim that fails either check is dropped, not fudged.",
  },
  {
    slug: "pmg-chatbot",
    name: "pmg-chatbot",
    tagline: "The mess-menu assistant students actually use.",
    repo: "sumeet96/pmg-chatbot",
    stack: ["React", "TypeScript", "Supabase", "Gemini", "Vitest"],
    observed:
      "A hostel mess runs on coordination nobody owns: what's on the menu today, who's eating, where complaints go to die.",
    built:
      "A React + Supabase app with a Gemini-powered assistant that answers menu questions in plain language, plus complaint tracking and an admin dashboard for weekly menu entry — live for real students, not a demo account.",
    handled:
      "Multi-user data needs real access control, not just a login screen. Supabase row-level security restricts signups to the campus Gmail domain and gates menu writes to admins — backed by a test suite so future changes can't silently loosen it.",
  },
  {
    slug: "showzzy",
    name: "showzzy",
    tagline: "AR-enabled movie ticketing that never double-books a seat.",
    repo: "sumeet96/showzzy",
    repoPrivate: true,
    stack: ["AR", "Stripe", "QR ticketing", "LLM", "Admin dashboard"],
    observed:
      "Seat booking looks solved — until two people try to hold the same seat at the same moment.",
    built:
      "A booking flow with AR seat preview, Stripe payments, QR ticketing, LLM seat recommendations, and an admin dashboard.",
    handled:
      "The hard part was concurrency: a seat locks the instant checkout starts and releases cleanly on abandon — so two buyers never both walk away thinking they got row F.",
  },
];
