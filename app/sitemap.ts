import type { MetadataRoute } from "next";
import { caseStudies, insights } from "@/lib/content";

const BASE = "https://deepaitech.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/solutions", "/work", "/about", "/insights", "/contact"].map(
    (path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const work = caseStudies.map((s) => ({
    url: `${BASE}/work/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const posts = insights.map((p) => ({
    url: `${BASE}/insights/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...work, ...posts];
}
