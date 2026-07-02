/**
 * Single source of truth for everything personal on the site.
 * Update this file (not the components) when a detail changes.
 */

export const profile = {
  name: "Sumeet Mohanty",
  role: "I build AI-powered products end to end.",
  pitch:
    "I find the manual step nobody's automated yet — then build the thing that removes it.",

  about: [
    "I take products from observation to production: spot the manual step everyone tolerates, design the system that removes it, ship it, and stay accountable for what breaks. My recent work is live for real users, not demo accounts — an LLM review-intelligence pipeline that sends founders weekly briefs in Slack, a campus mess assistant students use every day, and an AR-enabled ticketing flow with real payments.",
    "I care most about the unglamorous parts that make software trustworthy: row-level access control, anti-hallucination guardrails, seat-lock concurrency — and the tests that keep all three honest.",
  ],

  // Shown as the primary contact everywhere on the site.
  email: "sumeet.ndri1@gmail.com",
  phone: "+91 76600 02442",
  phoneHref: "tel:+917660002442",

  githubUser: "sumeet96",
  github: "https://github.com/sumeet96",
  linkedin: "https://www.linkedin.com/in/sumeet-mohanty-xlri/",

  // Drop a PDF at public/resume.pdf and change this to "/resume.pdf"
  // to surface a Résumé link in the intro column and contact section.
  resumeUrl: null as string | null,

  // Canonical URL — used for metadata, sitemap, robots and JSON-LD.
  siteUrl: "https://sumeet-portfolio-eight.vercel.app",

  skills: [
    { group: "Languages", items: ["TypeScript", "Python", "SQL"] },
    {
      group: "AI / LLM",
      items: [
        "OpenAI API",
        "Gemini",
        "Prompt & guardrail design",
        "Evaluation against ground truth",
      ],
    },
    {
      group: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Streamlit"],
    },
    {
      group: "Backend & data",
      items: ["Supabase (Postgres + RLS)", "pandas", "REST APIs", "Stripe"],
    },
    {
      group: "Ship & run",
      items: ["GitHub Actions", "Vercel", "Vitest", "Slack integrations"],
    },
  ],
} as const;
