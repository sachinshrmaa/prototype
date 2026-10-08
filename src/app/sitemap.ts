import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/projects", 0.8),
    page("/about", 0.7),
    page("/contact", 0.8),
    page("/process", 0.6),
    page("/service-areas", 0.7),
    page("/faq", 0.6),
    page("/insights", 0.6, "weekly"),
    ...articles.map((a) => ({ ...page(`/insights/${a.slug}`, 0.6), lastModified: new Date(a.published) })),
    page("/careers", 0.4),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
