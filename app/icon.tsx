import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function IconImage() {
  return new ImageResponse(
    <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, color: "#0a0d12", background: "#d6ae62", fontSize: 20, fontWeight: 900 }}>W</div>,
    size,
  );
}

