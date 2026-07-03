/**
 * Curated project stories — the narrative half of every project card.
 * Live numbers (language, last push) come from the GitHub API at render
 * time; see lib/github.ts. To showcase a new project, add an entry here
 * and push — nothing else to wire up.
 *
 * Voice: business first. Each card reads Problem -> Approach -> Impact,
 * framed for product / consulting / business-analyst audiences. The stack
 * stays as a supporting signal ("I can also build"), not the headline.
 */

export type Project = {
  /** Stable id used for anchors and React keys. */
  slug: string;
  name: string;
  /** One confident, outcome-oriented line under the project name. */
  tagline: string;
  /** GitHub "owner/repo" — drives the repo link and live stats. */
  repo: string;
  /**
   * True while the repo isn't public: the card hides the repo link and
   * skips the stats fetch. Flip to false once the repo is published.
   */
  repoPrivate?: boolean;
  /** Optional live-demo URL, shown as the primary call to action. */
  demoUrl?: string;
  /**
   * Optional screenshot shown at the top of the card. Put the file in
   * public/images/ and reference it as "/images/<file>". Cards render
   * cleanly with or without an image.
   */
  image?: string;
  imageAlt?: string;
  /** Tools used — supporting signal, rendered as small tags. */
  stack: string[];
  /** The business problem, in plain terms. */
  problem: string;
  /** What I did about it — scope, ownership, product decisions. */
  approach: string;
  /** The outcome / why it mattered. Where metrics go. */
  impact: string;
};

export const projects: Project[] = [
  {
    slug: "anveshan-cx",
    name: "anveshan-cx",
    tagline: "Turning a flood of customer reviews into decisions founders can act on.",
    repo: "sumeet96/anveshan-cx",
    demoUrl: "https://anveshan-cx.streamlit.app/",
    // Add a screenshot: drop the file at public/images/anveshan-cx.png and
    // uncomment the two lines below.
    // image: "/images/anveshan-cx.png",
    // imageAlt: "anveshan-cx review-intelligence dashboard",
    stack: ["OpenAI", "Python", "pandas", "Streamlit", "Slack", "GitHub Actions"],
    problem:
      "A consumer brand was drowning in Amazon reviews. The signals that actually matter — an emerging defect, a complaint gaining steam — sat buried in the noise, and no one had time to read thousands of reviews by hand.",
    approach:
      "I built a tool that reads every review, tags themes and sentiment, flags month-over-month spikes, and delivers a plain-English brief to the founder's Slack each week — turning raw feedback into a standing decision input rather than a one-off research project.",
    impact:
      "Replaces hours of manual review-reading with a weekly brief a founder actually opens, and surfaces problems while they're still small enough to fix. Built as a real application artifact in roughly a day.",
  },
  {
    slug: "pmg-chatbot",
    name: "pmg-chatbot",
    tagline: "A daily hostel-mess headache, turned into a product students actually use.",
    repo: "sumeet96/pmg-chatbot",
    demoUrl: "https://pmg-chatbot.vercel.app/",
    // Add a screenshot: drop the file at public/images/pmg-chatbot.png and
    // uncomment the two lines below.
    // image: "/images/pmg-chatbot.png",
    // imageAlt: "pmg-chatbot mess-menu assistant",
    stack: ["React", "Supabase", "Gemini", "TypeScript"],
    problem:
      "A campus mess serving hundreds of students ran on WhatsApp and guesswork — no single source for the menu, complaints that went nowhere, and a mess team with no visibility into demand or satisfaction.",
    approach:
      "I scoped and shipped a self-serve product: an AI assistant students simply ask (“what’s for lunch?”), structured complaint capture, and an admin dashboard that turns feedback into a decision tool. Owned it end to end — discovery, product design, build, and rollout to real users.",
    impact:
      "Live for real students today. It replaced ad-hoc coordination with one product and gave the mess team their first real read on what students want, with menu updates and complaints flowing through a single system.",
  },
  {
    slug: "showzzy",
    name: "showzzy",
    tagline: "Market sizing to a clickable MVP: a product bet on India’s underserved single screens.",
    repo: "sumeet96/showzzy",
    demoUrl: "https://showzzy.lovable.app",
    // Add a screenshot: drop the file at public/images/showzzy.png and
    // uncomment the two lines below.
    // image: "/images/showzzy.png",
    // imageAlt: "showzzy movie ticketing platform",
    stack: ["TAM–SAM–SOM", "Kano model", "Value–effort scoring", "Bayesian A/B", "Hi-fi prototype"],
    problem:
      "India’s ~₹18,000 Cr movie business still runs on physical counters once you leave the metros, and the big booking apps all fight over the same high-spend multiplex crowd. That leaves single-screen cinemas and student hubs — a real, sizeable segment — poorly served.",
    approach:
      "Working in a five-person product capstone, I drove the craft that turns a market into a product: sizing the opportunity (₹18,000 Cr TAM down to a focused ₹450 Cr beachhead), then funnelling ~50 candidate features through a Kano survey and value–effort scoring, and cutting crowd-pleasers like price-drop alerts and multi-language UI with evidence when they failed the test. Capacity planning fixed a shippable 18-feature MVP, and ship decisions ran on a Bayesian A/B rule (adopt the variant only when P(B > A) ≥ 95%).",
    impact:
      "A concept-to-commercialization exercise carried end to end — market sizing, prioritization, and a validated, hi-fi clickable prototype (showzzy.lovable.app) rather than a slide deck. It’s a prototype, not a live commercial product, but it shows the full arc of the decisions a PM actually owns.",
  },
];
