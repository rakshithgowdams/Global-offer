import type { Metadata } from "next";
import SeoServicePage from "../components/SeoServicePage";
import { servicePages } from "../lib/service-content";
import { createPageMetadata } from "../lib/seo";

const config = servicePages["ai-calling-agent-real-estate"];

export const metadata: Metadata = createPageMetadata({
  title: "AI Calling Agent for Real Estate",
  description: config.description,
  path: `/${config.slug}`,
  keywords: [config.primaryKeyword, ...config.keywords],
});

export default function AiCallingAgentRealEstatePage() {
  return <SeoServicePage config={config} />;
}
