import type { Metadata } from "next";
import SeoServicePage from "../components/SeoServicePage";
import { servicePages } from "../lib/service-content";
import { createPageMetadata } from "../lib/seo";

const config = servicePages["real-estate-website-development"];

export const metadata: Metadata = createPageMetadata({
  title: "Real Estate Website Development Company",
  description: config.description,
  path: `/${config.slug}`,
  keywords: [config.primaryKeyword, ...config.keywords],
});

export default function RealEstateWebsiteDevelopmentPage() {
  return <SeoServicePage config={config} />;
}
