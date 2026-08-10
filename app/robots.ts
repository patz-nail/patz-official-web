import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …) are
// intentionally allowed via the `*` rule — the site opts in to being read and
// cited by generative answer engines (GEO). Tighten here if that changes.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
