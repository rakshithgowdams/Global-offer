import type { Metadata } from "next";
import AutomationDemo from "../../components/AutomationDemo";
import { createPageMetadata } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Website & Meta Ads Real Estate Lead Automation Demo",
  description:
    "Interactive MyDesignNexus simulation comparing website and Meta Lead Ads extraction, n8n processing, AI response, CRM synchronization and agent routing.",
  path: "/demos/lead-source-extraction",
  keywords: [
    "Meta Ads lead automation real estate",
    "website lead extraction real estate",
    "n8n real estate lead automation",
  ],
});

export default function LeadSourceExtractionDemoPage() {
  return <AutomationDemo kind="source-extraction" />;
}
