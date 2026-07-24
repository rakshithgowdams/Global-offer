import type { Metadata } from "next";
import AutomationDemo from "../../components/AutomationDemo";
import { createPageMetadata } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Real Estate Lead Qualification Automation Demo",
  description:
    "Interactive MyDesignNexus simulation showing a real-estate lead moving from capture to qualification, agent routing, booking and CRM sync.",
  path: "/demos/instant-lead-response",
  keywords: [
    "real estate lead qualification demo",
    "real estate lead automation demo",
    "instant lead response automation",
  ],
});

export default function InstantLeadResponseDemoPage() {
  return <AutomationDemo kind="instant" />;
}
