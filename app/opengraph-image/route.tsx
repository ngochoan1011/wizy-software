import { ImageResponse } from "next/og";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 82px",
        color: "#f5f0e7",
        background: "linear-gradient(135deg, #080b10 0%, #111823 58%, #18243a 100%)",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 16,
            border: "1px solid #d6ae62",
            color: "#e4c27e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30,
            fontWeight: 800,
          }}
        >
          W
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 30, fontWeight: 800 }}>Wizy</span>
          <span
            style={{
              fontSize: 15,
              color: "#d6ae62",
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            Software
          </span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <span
          style={{
            color: "#d6ae62",
            textTransform: "uppercase",
            letterSpacing: 4,
            fontSize: 18,
            marginBottom: 24,
          }}
        >
          Canadian-led software delivery
        </span>
        <span style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 700, letterSpacing: -2 }}>
          Local accountability. Integrated engineering depth.
        </span>
      </div>
      <div style={{ display: "flex", gap: 24, color: "#aeb8c7", fontSize: 18 }}>
        <span>Canada — product leadership</span>
        <span>•</span>
        <span>Vietnam — engineering delivery</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
