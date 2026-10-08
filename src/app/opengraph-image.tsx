import { ImageResponse } from "next/og";

export const alt = "BALKAPSO Construction: Structural engineering and retrofitting in Sikkim";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#15171c", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 56, background: "#1d4ed8", display: "flex", alignItems: "flex-end", gap: 6, padding: "0 12px 12px" }}>
            <div style={{ width: 8, height: 36, background: "white" }} />
            <div style={{ width: 8, height: 24, background: "white" }} />
            <div style={{ width: 8, height: 14, background: "white" }} />
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 4 }}>BALKAPSO</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 950 }}>
            Stronger, safer buildings for a seismic state.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "rgba(255,255,255,0.65)" }}>
            Retrofitting · Structural design · NDT · Waterproofing · Construction
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#93b4f8" }}>
          <span>Gangtok, Sikkim</span>
          <span>balkapso.com</span>
        </div>
      </div>
    ),
    size,
  );
}
