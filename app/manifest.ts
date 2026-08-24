import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wizy Software",
    short_name: "Wizy Software",
    description: "Canadian-led custom software delivery backed by engineering depth in Vietnam.",
    start_url: "/en",
    display: "standalone",
    background_color: "#0a0d12",
    theme_color: "#0a0d12",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}

