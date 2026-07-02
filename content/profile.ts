/**
 * Single source of truth for everything personal on the site.
 * Update this file (not the components) when a detail changes.
 */

export const profile = {
  name: "Sumeet Mohanty",
  // Shown as the bold identity line under the name.
  role: "Product manager & builder · MBA, XLRI Jamshedpur",
  // The value proposition + what I'm looking for.
  pitch:
    "I turn messy business problems into products people actually use — owning the arc from customer insight to a live, working solution. Exploring product management, consulting, and business-analyst roles.",

  // A short mono kicker above the name (replaces the old "$ whoami").
  kicker: "Product · Strategy · Build",

  about: [
    "I'm a recent MBA from XLRI Jamshedpur who builds the products I propose. I start where the business actually hurts — a manual step, a broken hand-off, an unmet customer need — frame the problem, design the solution, and carry it all the way to live users. Recent work spans an LLM tool that turns customer reviews into weekly founder briefs, a campus assistant students use every day, and an AR-enabled ticketing flow with real payments.",
    "What sets me apart is range: I can sit in a strategy conversation and a build sprint in the same afternoon. I care about the things that decide whether a product works in the real world — sharp problem definition, the right scope, trustworthy data, and adoption — not just the deck that describes them.",
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

  // Product/business competencies lead; hands-on building is the differentiator.
  skills: [
    {
      group: "Product & Strategy",
      items: [
        "Problem discovery",
        "Product scoping & roadmapping",
        "User & customer insight",
        "Stakeholder management",
      ],
    },
    {
      group: "Analysis & Data",
      items: [
        "Requirement analysis",
        "Metrics & experimentation",
        "SQL",
        "Data storytelling",
      ],
    },
    {
      group: "Building (hands-on)",
      items: [
        "React / Next.js",
        "Supabase / Postgres",
        "Python",
        "LLM / AI product design",
      ],
    },
    {
      group: "Ways of working",
      items: [
        "End-to-end ownership",
        "Rapid prototyping",
        "Agile delivery",
        "Vercel · GitHub Actions",
      ],
    },
  ],
} as const;
