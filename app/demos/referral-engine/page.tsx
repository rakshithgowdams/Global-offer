import type { Metadata } from "next";
import AutomationDemo from "../../components/AutomationDemo";
import { createPageMetadata } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Real Estate Referral Automation Demo",
  description:
    "Interactive MyDesignNexus simulation showing a closed real-estate client moving through feedback, review, anniversary nurture, referral and repeat-business routing.",
  path: "/demos/referral-engine",
  keywords: [
    "real estate referral automation",
    "real estate review automation",
    "past client follow-up real estate",
  ],
});

export default function ReferralEngineDemoPage() {
  return <AutomationDemo kind="referral" />;
}
