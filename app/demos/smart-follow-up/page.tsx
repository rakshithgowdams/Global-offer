import type { Metadata } from "next";
import AutomationDemo from "../../components/AutomationDemo";

export const metadata: Metadata = {
  title: "Smart Follow-Up & Lead Reactivation Demo",
  description:
    "Interactive MyDesignNexus simulation showing a quiet real-estate lead moving through stage-based nurture, intent detection, agent alerting and viewing recovery.",
};

export default function SmartFollowUpDemoPage() {
  return <AutomationDemo kind="follow-up" />;
}
