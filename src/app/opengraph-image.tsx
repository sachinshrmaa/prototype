import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "BALKAPSO Construction: Structural engineering and retrofitting in Sikkim";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const mark = await readFile(join(process.cwd(), "public/logo-mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#15171c", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={markSrc} width={54} height={72} alt="" />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 4 }}>BALKAPSO</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 950 }}>
            Built around your dreams. Strengthened by engineering.
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
