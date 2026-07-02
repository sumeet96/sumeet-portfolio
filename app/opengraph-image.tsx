import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

/**
 * Social-share card, rendered at build/request time by next/og — shows up
 * when the site is linked on LinkedIn, X, Slack, etc.
 */
export const alt = `${profile.name} — portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0d0f12",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6c93b4",
          }}
        >
          {profile.kicker}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 600, color: "#e7e4dc" }}>
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 32,
              lineHeight: 1.4,
              color: "#8b9199",
              maxWidth: 920,
            }}
          >
            {profile.pitch}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 24, color: "#5c6268" }}>
            github.com/{profile.githubUser}
          </div>
          <div style={{ width: 160, height: 6, background: "#e3a548" }} />
        </div>
      </div>
    ),
    size,
  );
}
