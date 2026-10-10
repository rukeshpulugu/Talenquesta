import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { programs } from "@/config/programs";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/internships", "/how-it-works", "/contact", "/privacy", "/terms", ...programs.map((p) => `/internships/${p.slug}`)];
  return pages.map((p) => ({ url: `${siteConfig.url}${p}`, lastModified: new Date() }));
}
