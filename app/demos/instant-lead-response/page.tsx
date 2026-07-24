import type { Metadata } from "next";
import AutomationDemo from "../../components/AutomationDemo";

export const metadata: Metadata = {
  title: "Instant Lead Response & Qualification Demo",
  description:
    "Interactive MyDesignNexus simulation showing a real-estate lead moving from capture to qualification, agent routing, booking and CRM sync.",
};

export default function InstantLeadResponseDemoPage() {
  return <AutomationDemo kind="instant" />;
}
