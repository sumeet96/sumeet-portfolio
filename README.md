# sumeet-portfolio

Personal portfolio of **Sumeet Mohanty** - live at
[sumeet-portfolio-eight.vercel.app](https://sumeet-portfolio-eight.vercel.app).

Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.

## How it works

Each project card is half **curated story**, half **live data**:

- The narrative (`OBSERVED → BUILT → HANDLED`) lives in
  [`content/projects.ts`](content/projects.ts) — full editorial control.
- Stars, primary language and last-push time come from the GitHub API at
  render time via [`lib/github.ts`](lib/github.ts), cached with ISR
  (`revalidate: 3600`), so stats refresh hourly with **no rebuilds**.
- Stats are an enhancement, never a dependency: any fetch failure renders
  the card from curated content alone (see [`lib/github.test.ts`](lib/github.test.ts)).

## Editing content

| Change                        | Where                                             |
| ----------------------------- | ------------------------------------------------- |
| Name, pitch, about, links     | [`content/profile.ts`](content/profile.ts)        |
| Add/edit a project            | [`content/projects.ts`](content/projects.ts)      |
| Publish the résumé            | Drop `public/resume.pdf`, set `profile.resumeUrl` |
| Make showzzy's repo link live | Set `repoPrivate: false` on its entry             |

No component changes needed for any of the above — edit, push, Vercel deploys.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # vitest
npm run build   # production build
```

### Optional environment variables

| Variable       | Purpose                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `GITHUB_TOKEN` | Read-only token for GitHub API rate-limit headroom. Not required — anonymous access covers the hourly ISR refresh comfortably. |
