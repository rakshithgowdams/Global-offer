import type { MetadataRoute } from "next";
import { absoluteUrl } from "./lib/seo";

const lastModified = new Date("2026-07-24T00:00:00.000Z");

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  {
    path: "/real-estate-lead-automation",
    changeFrequency: "monthly",
    priority: 0.95,
  },
  {
    path: "/ai-calling-agent-real-estate",
    changeFrequency: "monthly",
    priority: 0.95,
  },
  {
    path: "/real-estate-crm-automation",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/real-estate-website-development",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/real-estate-marketing-automation",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/resources/real-estate-automation-guide",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/demos/instant-lead-response",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/demos/smart-follow-up",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/demos/referral-engine",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/demos/lead-source-extraction",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
  { path: "/refunds", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
