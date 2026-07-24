import type { Metadata } from "next";
import AutomationDemo from "../../components/AutomationDemo";

export const metadata: Metadata = {
  title: "Website & Meta Ads Lead Extraction Demo",
  description:
    "Interactive MyDesignNexus simulation comparing website and Meta Lead Ads extraction, n8n processing, AI response, CRM synchronization and agent routing.",
};

export default function LeadSourceExtractionDemoPage() {
  return <AutomationDemo kind="source-extraction" />;
}
