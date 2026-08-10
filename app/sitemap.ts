import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Single-page marketing site — one canonical URL. Add entries here as routes grow.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
