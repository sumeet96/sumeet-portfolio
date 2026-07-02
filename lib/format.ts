/** Small formatting helpers shared by the UI. */

const UNITS: Array<[Intl.RelativeTimeFormatUnit, number]> = [
  ["year", 365 * 24 * 60 * 60],
  ["month", 30 * 24 * 60 * 60],
  ["week", 7 * 24 * 60 * 60],
  ["day", 24 * 60 * 60],
  ["hour", 60 * 60],
  ["minute", 60],
];

/**
 * Render an ISO timestamp as "3 days ago" / "2 months ago".
 * Falls back to "today" under a minute to avoid "0 minutes ago".
 */
export function relativeTime(iso: string, now: Date = new Date()): string {
  const seconds = Math.max(
    0,
    Math.round((now.getTime() - new Date(iso).getTime()) / 1000),
  );
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "always" });
  for (const [unit, secondsPerUnit] of UNITS) {
    if (seconds >= secondsPerUnit) {
      return rtf.format(-Math.floor(seconds / secondsPerUnit), unit);
    }
  }
  return "today";
}
