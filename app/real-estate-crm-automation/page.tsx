import type { Metadata } from "next";
import SeoServicePage from "../components/SeoServicePage";
import { servicePages } from "../lib/service-content";
import { createPageMetadata } from "../lib/seo";

const config = servicePages["real-estate-crm-automation"];

export const metadata: Metadata = createPageMetadata({
  title: "Real Estate CRM Automation & Integration",
  description: config.description,
  path: `/${config.slug}`,
  keywords: [config.primaryKeyword, ...config.keywords],
});

export default function RealEstateCrmAutomationPage() {
  return <SeoServicePage config={config} />;
}
