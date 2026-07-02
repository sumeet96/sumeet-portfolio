import { afterEach, describe, expect, it, vi } from "vitest";
import { getRepoStats } from "./github";
import { relativeTime } from "./format";

/**
 * getRepoStats must uphold one contract above all: any failure returns
 * null, because project cards render from curated content and treat live
 * stats as a pure enhancement.
 */
describe("getRepoStats", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("maps a successful GitHub response to RepoStats", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          stargazers_count: 12,
          language: "TypeScript",
          pushed_at: "2026-07-01T10:00:00Z",
          homepage: "", // GitHub sends "" (not null) when unset
          description: "A repo",
        }),
      }),
    );

    await expect(getRepoStats("sumeet96/pmg-chatbot")).resolves.toEqual({
      stars: 12,
      language: "TypeScript",
      pushedAt: "2026-07-01T10:00:00Z",
      homepage: null,
      description: "A repo",
    });
  });

  it("returns null on a non-OK response (404, rate limit…)", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 404 }),
    );
    await expect(getRepoStats("sumeet96/missing")).resolves.toBeNull();
  });

  it("returns null when the network fails entirely", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("network down")),
    );
    await expect(getRepoStats("sumeet96/anveshan-cx")).resolves.toBeNull();
  });
});

describe("relativeTime", () => {
  const now = new Date("2026-07-02T12:00:00Z");

  it("formats past timestamps in the largest sensible unit", () => {
    expect(relativeTime("2026-06-29T12:00:00Z", now)).toBe("3 days ago");
    expect(relativeTime("2026-04-30T12:00:00Z", now)).toBe("2 months ago");
  });

  it("never says '0 minutes ago'", () => {
    expect(relativeTime("2026-07-02T11:59:59Z", now)).toBe("today");
  });
});
