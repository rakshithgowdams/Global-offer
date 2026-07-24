import type { Metadata } from "next";
import AutomationDemo from "../../components/AutomationDemo";

export const metadata: Metadata = {
  title: "Past-Client Referral & Repeat-Business Engine Demo",
  description:
    "Interactive MyDesignNexus simulation showing a closed real-estate client moving through feedback, review, anniversary nurture, referral and repeat-business routing.",
};

export default function ReferralEngineDemoPage() {
  return <AutomationDemo kind="referral" />;
}
