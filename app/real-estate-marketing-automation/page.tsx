import type { Metadata } from "next";
import SeoServicePage from "../components/SeoServicePage";
import { servicePages } from "../lib/service-content";
import { createPageMetadata } from "../lib/seo";

const config = servicePages["real-estate-marketing-automation"];

export const metadata: Metadata = createPageMetadata({
  title: "Real Estate Marketing Automation Services",
  description: config.description,
  path: `/${config.slug}`,
  keywords: [config.primaryKeyword, ...config.keywords],
});

export default function RealEstateMarketingAutomationPage() {
  return <SeoServicePage config={config} />;
}
