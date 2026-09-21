/**
 * Curated Product Teardowns — deep-dive breakdowns on product strategy,
 * market dynamics, pricing psychology, and systems mechanics.
 *
 * Designed to be easily extensible: to showcase a new teardown, add an entry
 * here and push — it will automatically render on the portfolio.
 */

export type TeardownMetric = {
  label: string;
  value: string;
};

export type Teardown = {
  slug: string;
  title: string;
  company: string;
  tagline: string;
  url: string;
  markdownUrl?: string;
  date: string;
  tags: string[];
  problem: string;
  approach: string;
  impact: string;
  metrics?: TeardownMetric[];
};

export const teardowns: Teardown[] = [
  {
    slug: "ownly",
    title: "OWNLY by Rapido: Zero-Commission Food Delivery Teardown",
    company: "OWNLY (Backed by Rapido)",
    tagline:
      "Deconstructing 'Cart Shock', the March 2026 ₹17.58 duopoly fee trap, and Rapido's multi-modal fleet economics.",
    url: "/teardowns/ownly",
    markdownUrl: "/teardowns/ownly/teardown.md",
    date: "September 2026",
    tags: [
      "Rapido",
      "Hyperlocal Food Delivery",
      "Pricing Transparency",
      "Fleet Economics",
      "A/B Testing",
      "PRD Specifications",
    ],
    problem:
      "Swiggy and Zomato locked platform fees at ₹17.58 parity and layered packaging, surge, and 20–25% restaurant markups, inflating a ₹200 meal by +68% over dine-in and triggering 28–35% checkout drop-offs from 'cart shock'.",
    approach:
      "I conducted an end-to-end product teardown analyzing Rapido's structural fleet moat (cross-dispatching bike captains during off-peak 1:30–4:00 PM ride lulls), diagnosed ground operational bottlenecks (the Pillion Seat conflict & Kitchen Prep Time mismatch), and authored 5 production PRDs including Upfront Landed Pricing and Two-Phase Predictive Dispatch.",
    impact:
      "Benchmarked against OWNLY's live Bangalore pilot data (₹34Cr+ saved across 22K onboarded restaurants and 42L+ orders). Demonstrates how transparent pricing and dual-fleet sharing can sustainably challenge incumbent duopolies without discount-burning.",
    metrics: [
      { label: "Duopoly Fee Parity", value: "₹17.58" },
      { label: "Checkout Drop-off", value: "28–35%" },
      { label: "Pilot Customer Savings", value: "₹34Cr+" },
      { label: "Orders Delivered", value: "42L+" },
    ],
  },
];
