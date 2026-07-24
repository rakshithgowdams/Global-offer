import type { Metadata } from "next";
import AutomationDemo from "../../components/AutomationDemo";
import { createPageMetadata } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Real Estate Lead Follow-Up Automation Demo",
  description:
    "Interactive MyDesignNexus simulation showing a quiet real-estate lead moving through stage-based nurture, intent detection, agent alerting and viewing recovery.",
  path: "/demos/smart-follow-up",
  keywords: [
    "real estate lead follow-up automation demo",
    "real estate lead reactivation",
    "property lead nurture automation",
  ],
});

export default function SmartFollowUpDemoPage() {
  return <AutomationDemo kind="follow-up" />;
}
