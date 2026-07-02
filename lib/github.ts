/**
 * Live GitHub stats for project cards, fetched server-side with ISR.
 *
 * Freshness model: `revalidate: 3600` caches each repo response for an hour,
 * so stats stay current with zero manual rebuilds while staying far under
 * GitHub's unauthenticated rate limit (60 req/h). Set a read-only
 * GITHUB_TOKEN env var on Vercel only if more headroom is ever needed.
 */

export type RepoStats = {
  stars: number;
  /** Primary language as reported by GitHub, e.g. "TypeScript". */
  language: string | null;
  /** ISO timestamp of the last push, or null if GitHub omits it. */
  pushedAt: string | null;
  homepage: string | null;
  description: string | null;
};

/**
 * Fetch public stats for a "owner/repo" slug.
 *
 * Returns null on any failure (missing repo, rate limit, network) — the
 * card must always render from curated content alone; live stats are an
 * enhancement, never a dependency.
 */
export async function getRepoStats(repo: string): Promise<RepoStats | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;

    const data = await res.json();
    return {
      stars: data.stargazers_count ?? 0,
      language: data.language ?? null,
      pushedAt: data.pushed_at ?? null,
      // GitHub returns "" (not null) when the homepage field is unset.
      homepage: data.homepage || null,
      description: data.description ?? null,
    };
  } catch {
    return null;
  }
}
