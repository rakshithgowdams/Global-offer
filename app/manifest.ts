import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MDN PropertyFlow — Real Estate Automation",
    short_name: "PropertyFlow",
    description:
      "AI lead response, calling, CRM automation and conversion systems for real-estate businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#070706",
    theme_color: "#070706",
    lang: "en",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
