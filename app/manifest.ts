import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "freecreate",
    short_name: "freecreate",
    description:
      "A website for writing, sharing, reading, and discovering fiction.",
    start_url: "/",
    display: "fullscreen",
    background_color: "oklch(0.923 0.003 48.717)",
    theme_color: "oklch(0.923 0.003 48.717)",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
