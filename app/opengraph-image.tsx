import { ImageResponse } from "next/og";

// Static, branded 1200×630 social card for the home page. Next injects it as
// og:image and (via the summary_large_image card) twitter:image automatically.
export const alt = "PATZ — 내 취향 네일 탐색, 이젠 파츠로 쉽게";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Pretendard (same family the site ships) so the Korean headline renders. Loaded
// at build time; if the fetch fails we fall back to a Latin-only card rather than
// breaking the build or emitting tofu glyphs.
const FONT_URL =
  "https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/public/static/Pretendard-Bold.otf";

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(FONT_URL);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

const INK = "#15173d";
const PINK = "#e8175d";
const MUTED = "#b9c0d4";

export default async function OpengraphImage() {
  const font = await loadFont();
  const korean = font !== null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(135deg, ${INK} 0%, #1e1547 60%, #2a0f3a 100%)`,
          padding: "88px",
          color: "#ffffff",
          fontFamily: korean ? "Pretendard" : "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "9999px",
              background: PINK,
            }}
          />
          <div style={{ fontSize: "40px", fontWeight: 700, letterSpacing: "2px" }}>
            patz
          </div>
        </div>

        {/* Headline */}
        {korean ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ fontSize: "84px", fontWeight: 700, lineHeight: 1.2 }}>
              내 취향 네일 탐색,
            </div>
            <div style={{ display: "flex", fontSize: "84px", fontWeight: 700, lineHeight: 1.2 }}>
              <span style={{ marginRight: "0.28em" }}>이젠</span>
              <span style={{ color: PINK }}>파츠</span>
              <span>로 쉽게</span>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ fontSize: "96px", fontWeight: 700, lineHeight: 1.1 }}>
              Find your
            </div>
            <div style={{ display: "flex", fontSize: "96px", fontWeight: 700, lineHeight: 1.1 }}>
              <span style={{ marginRight: "0.28em" }}>nail</span>
              <span style={{ color: PINK }}>style</span>
            </div>
          </div>
        )}

        {/* Subtitle */}
        <div style={{ fontSize: "34px", color: MUTED }}>
          {korean
            ? "네일 큐레이션 · 내 주변 네일샵 · iOS 앱"
            : "Nail curation · Salons near you · iOS app"}
        </div>
      </div>
    ),
    // Only pass `fonts` when we actually loaded one — an empty array leaves
    // satori with no font at all and it throws. Omitting the key falls back to
    // next/og's built-in (Latin) font, which matches the Latin fallback copy.
    font
      ? {
          ...size,
          fonts: [
            { name: "Pretendard", data: font, weight: 700 as const, style: "normal" as const },
          ],
        }
      : { ...size },
  );
}
