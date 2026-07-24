"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import BackendEngine from "./BackendEngine";

export type DemoKind = "instant" | "follow-up" | "referral" | "source-extraction";

type DemoIcon =
  | "arrow"
  | "bolt"
  | "calendar"
  | "check"
  | "clock"
  | "database"
  | "message"
  | "pause"
  | "play"
  | "refresh"
  | "route"
  | "users";

type DemoField = {
  label: string;
  value: string;
  revealAt: number;
};

type DemoMessage = {
  step: number;
  from: "assistant" | "lead" | "system";
  text: string;
};

type DemoLead = {
  id: string;
  initials: string;
  name: string;
  source: string;
  received: string;
  subject: string;
  contact: string;
  initialScore: number;
  finalScore: number;
  fields: DemoField[];
  messages: DemoMessage[];
};

type DemoStage = {
  short: string;
  title: string;
  detail: string;
  event: string;
  timestamp: string;
  icon: DemoIcon;
};

type DemoConfig = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  trigger: string;
  promise: string;
  activeLabel: string;
  agent: string;
  stages: DemoStage[];
  leads: DemoLead[];
  outcomes: Array<{
    label: string;
    before: string;
    after: string;
    note: string;
  }>;
  useCases: string[];
};

function Icon({ name, size = 18 }: { name: DemoIcon; size?: number }) {
  const paths: Record<DemoIcon, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    calendar: (
      <>
        <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
        <path d="M8 3v4M16 3v4M3.5 9.5h17M8.5 15l2 2 5-5" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.6 2.6L16.5 9" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
        <path d="M4.5 5.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6M4.5 11.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
      </>
    ),
    message: (
      <>
        <path d="M20.5 11.5a8 8 0 0 1-8.4 8l-4.6 2 .9-3.7a8.2 8.2 0 1 1 12.1-6.3Z" />
        <path d="M8.5 11.5h.1M12 11.5h.1M15.5 11.5h.1" />
      </>
    ),
    pause: (
      <>
        <path d="M8 5v14M16 5v14" />
      </>
    ),
    play: <path d="m8 5 11 7-11 7V5Z" />,
    refresh: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M19 12a7 7 0 1 0-2.1 5" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <path d="M8.5 18h2.2a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 3.5 5" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const demoConfigs: Record<DemoKind, DemoConfig> = {
  instant: {
    index: "01",
    eyebrow: "Website + campaign leads",
    title: "Instant Lead Response & Qualification",
    description:
      "Watch a new property enquiry move from capture to an agent-ready appointment while the buyer is still engaged.",
    trigger: "A new lead submits a form or campaign enquiry",
    promise: "Respond, qualify, route and book without waiting for an available agent",
    activeLabel: "Speed-to-lead simulation",
    agent: "Olivia · Buyer specialist",
    stages: [
      {
        short: "Capture",
        title: "Lead captured",
        detail: "Source, campaign, consent and property interest are recorded immediately.",
        event: "New enquiry created with source attribution",
        timestamp: "00:00",
        icon: "bolt",
      },
      {
        short: "Respond",
        title: "Instant reply",
        detail: "The AI concierge opens the approved conversation while intent is high.",
        event: "First response delivered in 8 seconds",
        timestamp: "00:08",
        icon: "message",
      },
      {
        short: "Qualify",
        title: "Buyer qualified",
        detail: "Budget, location, timeline and financing are captured conversationally.",
        event: "Four qualification fields confirmed",
        timestamp: "00:41",
        icon: "check",
      },
      {
        short: "Route",
        title: "Best agent assigned",
        detail: "The opportunity is scored and routed by location, language and availability.",
        event: "High-intent lead assigned to the buyer team",
        timestamp: "00:49",
        icon: "route",
      },
      {
        short: "Book",
        title: "Consultation booked",
        detail: "A suitable slot is offered, confirmed and added to both calendars.",
        event: "Buyer consultation confirmed for tomorrow",
        timestamp: "01:12",
        icon: "calendar",
      },
      {
        short: "Sync",
        title: "CRM fully updated",
        detail: "Conversation, score, owner and next action are saved as one clean record.",
        event: "CRM record and follow-up task created",
        timestamp: "01:16",
        icon: "database",
      },
    ],
    leads: [
      {
        id: "LD-2048",
        initials: "SB",
        name: "Sophia Bennett",
        source: "Meta campaign",
        received: "Just now",
        subject: "Waterfront 2-bedroom enquiry",
        contact: "+1 ••• ••• 1842",
        initialScore: 18,
        finalScore: 92,
        fields: [
          { label: "Lead type", value: "Buyer", revealAt: 0 },
          { label: "Area", value: "Waterfront district", revealAt: 2 },
          { label: "Budget", value: "$750k–$900k", revealAt: 2 },
          { label: "Timeline", value: "Within 60 days", revealAt: 2 },
          { label: "Financing", value: "Pre-approved", revealAt: 2 },
          { label: "Owner", value: "Olivia · Buyer team", revealAt: 3 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi Sophia — I’m the automated property assistant. I can help with the waterfront 2-bedroom you enquired about. Are you buying for yourself or investing?",
          },
          { step: 2, from: "lead", text: "Buying for myself. I’d like to move in the next two months." },
          {
            step: 2,
            from: "assistant",
            text: "Great. What budget range are you considering, and is your financing already arranged?",
          },
          { step: 2, from: "lead", text: "$750k to $900k. I’m already pre-approved." },
          {
            step: 4,
            from: "assistant",
            text: "I can arrange a 15-minute call with a waterfront specialist tomorrow at 10:30 AM. Would that work?",
          },
          { step: 4, from: "lead", text: "Yes, please book it." },
          { step: 5, from: "system", text: "Appointment confirmed · CRM record updated · Agent notified" },
        ],
      },
      {
        id: "LD-2051",
        initials: "MP",
        name: "Maya Patel",
        source: "Project landing page",
        received: "2 min ago",
        subject: "Investor studio request",
        contact: "+44 •••• ••• 506",
        initialScore: 24,
        finalScore: 86,
        fields: [
          { label: "Lead type", value: "Investor", revealAt: 0 },
          { label: "Property", value: "Studio / 1-bedroom", revealAt: 2 },
          { label: "Budget", value: "$450k–$550k", revealAt: 2 },
          { label: "Timeline", value: "This quarter", revealAt: 2 },
          { label: "Priority", value: "Rental yield", revealAt: 2 },
          { label: "Owner", value: "Daniel · Investment desk", revealAt: 3 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi Maya — I’m the automated property assistant. I can help narrow the investment options you requested. Is rental yield or capital growth more important?",
          },
          { step: 2, from: "lead", text: "Rental yield. My budget is around $500k and I can purchase this quarter." },
          {
            step: 2,
            from: "assistant",
            text: "Understood. Would you prefer a studio or one-bedroom, and do you need a managed rental option?",
          },
          { step: 2, from: "lead", text: "Either works. A managed option would be useful." },
          {
            step: 4,
            from: "assistant",
            text: "An investment specialist is available at 3:00 PM today. Shall I reserve that slot?",
          },
          { step: 4, from: "lead", text: "Yes." },
          { step: 5, from: "system", text: "Consultation booked · Investment brief synced · Agent notified" },
        ],
      },
      {
        id: "LD-2054",
        initials: "EC",
        name: "Ethan Cole",
        source: "Website valuation",
        received: "5 min ago",
        subject: "Seller valuation request",
        contact: "+61 ••• ••• 731",
        initialScore: 20,
        finalScore: 81,
        fields: [
          { label: "Lead type", value: "Seller", revealAt: 0 },
          { label: "Property", value: "4-bedroom family home", revealAt: 2 },
          { label: "Reason", value: "Relocating", revealAt: 2 },
          { label: "Timeline", value: "30–60 days", revealAt: 2 },
          { label: "Valuation", value: "Requested", revealAt: 2 },
          { label: "Owner", value: "Amelia · Listing team", revealAt: 3 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi Ethan — I’m the automated property assistant following up on your valuation request. Are you exploring options or planning to sell soon?",
          },
          { step: 2, from: "lead", text: "We’re relocating and would like to list within the next two months." },
          {
            step: 2,
            from: "assistant",
            text: "Thanks. Is the home currently occupied, and have you had a professional valuation in the last six months?",
          },
          { step: 2, from: "lead", text: "It is occupied. We haven’t had a valuation yet." },
          {
            step: 4,
            from: "assistant",
            text: "I can arrange a no-obligation listing consultation on Thursday at 5:30 PM. Should I hold it?",
          },
          { step: 4, from: "lead", text: "Thursday works." },
          { step: 5, from: "system", text: "Listing consultation booked · Seller brief synced · Agent notified" },
        ],
      },
    ],
    outcomes: [
      { label: "First response", before: "47 min", after: "8 sec", note: "Illustrative sample" },
      { label: "Qualification", before: "Agent call", after: "4/4 fields", note: "Before handoff" },
      { label: "CRM admin", before: "Manual", after: "Automatic", note: "Summary + owner" },
      { label: "Next action", before: "Unclear", after: "Booked", note: "Calendar confirmed" },
    ],
    useCases: [
      "Meta and paid-campaign leads",
      "Property landing-page enquiries",
      "Website buyer enquiries",
      "Seller valuation requests",
      "Missed-call recovery",
      "After-hours lead capture",
    ],
  },
  "follow-up": {
    index: "02",
    eyebrow: "Portal + referral leads",
    title: "Smart Follow-Up & Lead Reactivation",
    description:
      "See a quiet lead re-enter the funnel through useful, stage-based follow-up—then move to a human exactly when intent returns.",
    trigger: "An approved lead becomes inactive, misses a viewing or reaches a follow-up date",
    promise: "Nurture consistently, detect intent and recover opportunities without agent guesswork",
    activeLabel: "Reactivation simulation",
    agent: "Marcus · Senior property adviser",
    stages: [
      {
        short: "Segment",
        title: "Lead segmented",
        detail: "Original interest, timing, engagement and last contact determine the right journey.",
        event: "Lead entered the 30-day warm nurture segment",
        timestamp: "Day 00",
        icon: "database",
      },
      {
        short: "Nurture",
        title: "Useful follow-up begins",
        detail: "Approved messages answer the next likely question instead of sending generic reminders.",
        event: "Relevant follow-up delivered through the preferred channel",
        timestamp: "Day 03",
        icon: "message",
      },
      {
        short: "Detect",
        title: "Reply detected",
        detail: "The workflow pauses its sequence as soon as the lead responds.",
        event: "Positive reply detected and automation paused",
        timestamp: "Day 09",
        icon: "bolt",
      },
      {
        short: "Rescore",
        title: "Intent rescored",
        detail: "Timing, action words and property activity move the contact back to high priority.",
        event: "Intent score increased from warm to high",
        timestamp: "Day 09",
        icon: "check",
      },
      {
        short: "Alert",
        title: "Agent alerted",
        detail: "The agent receives the full history and a precise reason to contact the lead now.",
        event: "High-intent alert sent with conversation context",
        timestamp: "+ 6 sec",
        icon: "users",
      },
      {
        short: "Recover",
        title: "Viewing recovered",
        detail: "A new slot is confirmed and the CRM journey resumes from the correct stage.",
        event: "Viewing booked and nurture converted to agent follow-up",
        timestamp: "+ 2 min",
        icon: "calendar",
      },
    ],
    leads: [
      {
        id: "NU-0917",
        initials: "LM",
        name: "Lucas Martin",
        source: "Property portal",
        received: "Inactive 9 days",
        subject: "Missed waterfront viewing",
        contact: "+33 •• •• •• 319",
        initialScore: 41,
        finalScore: 88,
        fields: [
          { label: "Segment", value: "Warm buyer", revealAt: 0 },
          { label: "Last action", value: "Missed viewing", revealAt: 0 },
          { label: "Interest", value: "2-bedroom waterfront", revealAt: 1 },
          { label: "New timing", value: "This weekend", revealAt: 3 },
          { label: "Intent", value: "High · 88/100", revealAt: 3 },
          { label: "Owner", value: "Marcus · Buyer team", revealAt: 4 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi Lucas — I’m the automated property assistant. You missed Saturday’s waterfront viewing. Two similar homes are still available. Would a new time this week be helpful?",
          },
          { step: 2, from: "lead", text: "Yes. I’m back in town and can view this weekend." },
          {
            step: 3,
            from: "assistant",
            text: "Thanks — I’ve paused the follow-up sequence. Are you still focused on two bedrooms within your original budget?",
          },
          { step: 3, from: "lead", text: "Yes, and I’m ready to move quickly for the right place." },
          {
            step: 5,
            from: "assistant",
            text: "Marcus has Saturday at 11:00 AM available. Shall I confirm the viewing?",
          },
          { step: 5, from: "lead", text: "Please confirm it." },
          { step: 5, from: "system", text: "Viewing recovered · Agent brief updated · Reminders scheduled" },
        ],
      },
      {
        id: "NU-0922",
        initials: "PR",
        name: "Priya Rao",
        source: "Client referral",
        received: "Inactive 21 days",
        subject: "Consultation no-show",
        contact: "+91 ••••• ••884",
        initialScore: 36,
        finalScore: 79,
        fields: [
          { label: "Segment", value: "Referred buyer", revealAt: 0 },
          { label: "Last action", value: "Consultation no-show", revealAt: 0 },
          { label: "Interest", value: "New-build 3-bedroom", revealAt: 1 },
          { label: "New timing", value: "Next Tuesday", revealAt: 3 },
          { label: "Intent", value: "High · 79/100", revealAt: 3 },
          { label: "Owner", value: "Nina · New homes", revealAt: 4 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi Priya — I’m the automated property assistant. We held your new-build consultation earlier this month. Would a short reschedule or a project summary be more useful?",
          },
          { step: 2, from: "lead", text: "A reschedule please. Work became hectic." },
          {
            step: 3,
            from: "assistant",
            text: "No problem. Are you still looking for a three-bedroom, and is next week realistic?",
          },
          { step: 3, from: "lead", text: "Yes. Tuesday afternoon would be ideal." },
          {
            step: 5,
            from: "assistant",
            text: "Nina is available Tuesday at 2:30 PM. I can confirm that now.",
          },
          { step: 5, from: "lead", text: "That works." },
          { step: 5, from: "system", text: "Consultation recovered · Referral source preserved · Agent notified" },
        ],
      },
      {
        id: "NU-0930",
        initials: "DK",
        name: "Daniel Kim",
        source: "Open-house form",
        received: "Inactive 34 days",
        subject: "Financing-pending buyer",
        contact: "+82 •• •••• 420",
        initialScore: 28,
        finalScore: 74,
        fields: [
          { label: "Segment", value: "Long-cycle buyer", revealAt: 0 },
          { label: "Last action", value: "Finance pending", revealAt: 0 },
          { label: "Interest", value: "Family townhouse", revealAt: 1 },
          { label: "New timing", value: "Within 90 days", revealAt: 3 },
          { label: "Intent", value: "Qualified · 74/100", revealAt: 3 },
          { label: "Owner", value: "Alex · Family homes", revealAt: 4 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi Daniel — I’m the automated property assistant. You asked us to reconnect once financing progressed. Would an updated townhouse shortlist be useful?",
          },
          { step: 2, from: "lead", text: "Yes. My pre-approval came through this week." },
          {
            step: 3,
            from: "assistant",
            text: "Excellent. Has your budget or preferred move date changed since the open house?",
          },
          { step: 3, from: "lead", text: "Same budget. We hope to move within 90 days." },
          {
            step: 5,
            from: "assistant",
            text: "Alex can review the new shortlist with you tomorrow at 4:00 PM. Should I book it?",
          },
          { step: 5, from: "lead", text: "Yes, thank you." },
          { step: 5, from: "system", text: "Buyer reactivated · Financing status updated · Consultation booked" },
        ],
      },
    ],
    outcomes: [
      { label: "Lead status", before: "Inactive", after: "Engaged", note: "Reply detected" },
      { label: "Agent effort", before: "Manual chasing", after: "High-intent only", note: "Context included" },
      { label: "Nurture", before: "Generic", after: "Stage-based", note: "Pauses on reply" },
      { label: "Next action", before: "Overdue", after: "Viewing booked", note: "CRM resumed" },
    ],
    useCases: [
      "Portal leads not ready today",
      "Viewing and consultation no-shows",
      "Financing-pending buyers",
      "Quiet seller enquiries",
      "Long-cycle investor nurture",
      "Approved database reactivation",
    ],
  },
  referral: {
    index: "03",
    eyebrow: "Closed clients",
    title: "Past-Client Referral & Repeat-Business Engine",
    description:
      "Follow a completed transaction into a thoughtful client-care funnel that earns feedback, reviews, referrals and future conversations.",
    trigger: "A deal closes or reaches a relationship milestone",
    promise: "Keep the relationship active without relying on an agent’s memory",
    activeLabel: "Client-lifecycle simulation",
    agent: "Emma · Client relationship manager",
    stages: [
      {
        short: "Close",
        title: "Deal closed",
        detail: "The client moves from transaction follow-up into a separate relationship journey.",
        event: "Closed client enrolled in the care plan",
        timestamp: "Day 00",
        icon: "check",
      },
      {
        short: "Care",
        title: "Thank-you delivered",
        detail: "A personal, approved message checks the experience before making any request.",
        event: "Closing thank-you and resource pack delivered",
        timestamp: "Day 01",
        icon: "message",
      },
      {
        short: "Listen",
        title: "Feedback captured",
        detail: "Positive and negative feedback follow different paths, with service recovery prioritised.",
        event: "Client reported a 9/10 experience",
        timestamp: "Day 14",
        icon: "users",
      },
      {
        short: "Review",
        title: "Review requested",
        detail: "Only a satisfied client receives a simple, timed review request.",
        event: "Personal review link delivered",
        timestamp: "Day 15",
        icon: "message",
      },
      {
        short: "Nurture",
        title: "Anniversary value touch",
        detail: "The client receives a useful home or market check-in instead of a generic promotion.",
        event: "One-year property review offered",
        timestamp: "Month 12",
        icon: "calendar",
      },
      {
        short: "Refer",
        title: "Referral routed",
        detail: "A referred contact is captured with context, permission and clear ownership.",
        event: "Warm seller referral assigned to the listing team",
        timestamp: "+ 1 min",
        icon: "route",
      },
    ],
    leads: [
      {
        id: "PC-4418",
        initials: "AT",
        name: "Ava Thompson",
        source: "Closed buyer",
        received: "12-month milestone",
        subject: "Riverside home purchase",
        contact: "+1 ••• ••• 7724",
        initialScore: 52,
        finalScore: 94,
        fields: [
          { label: "Relationship", value: "Past buyer", revealAt: 0 },
          { label: "Closed property", value: "Riverside 3-bedroom", revealAt: 0 },
          { label: "Satisfaction", value: "9 / 10", revealAt: 2 },
          { label: "Review", value: "Requested", revealAt: 3 },
          { label: "Milestone", value: "1-year anniversary", revealAt: 4 },
          { label: "Referral", value: "Seller · Warm introduction", revealAt: 5 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi Ava — I’m the automated client-care assistant for Emma’s team. We hope the first year in your riverside home has treated you well.",
          },
          {
            step: 2,
            from: "assistant",
            text: "Before we send your anniversary property update, how would you rate your experience with the team from 1 to 10?",
          },
          { step: 2, from: "lead", text: "9 out of 10. Emma made the whole process feel easy." },
          {
            step: 3,
            from: "assistant",
            text: "Thank you. Would you be comfortable sharing that experience in a short review? I can send a direct link.",
          },
          { step: 4, from: "lead", text: "Yes — and my colleague is thinking of selling nearby." },
          {
            step: 5,
            from: "assistant",
            text: "We’d be glad to help. With their permission, share the best contact details and Emma’s listing team will respond personally.",
          },
          { step: 5, from: "system", text: "Warm referral created · Source credited · Listing specialist notified" },
        ],
      },
      {
        id: "PC-4420",
        initials: "JR",
        name: "James Rivera",
        source: "Closed seller",
        received: "30-day check-in",
        subject: "Family-home sale",
        contact: "+1 ••• ••• 3051",
        initialScore: 48,
        finalScore: 82,
        fields: [
          { label: "Relationship", value: "Past seller", revealAt: 0 },
          { label: "Closed property", value: "4-bedroom family home", revealAt: 0 },
          { label: "Satisfaction", value: "10 / 10", revealAt: 2 },
          { label: "Review", value: "Completed", revealAt: 3 },
          { label: "Milestone", value: "30-day check-in", revealAt: 4 },
          { label: "Referral", value: "Buyer · Permission pending", revealAt: 5 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi James — I’m the automated client-care assistant for Emma’s team. It has been 30 days since closing, so we wanted to make sure the move went smoothly.",
          },
          { step: 2, from: "lead", text: "Everything went very well. I’d rate the service 10 out of 10." },
          {
            step: 3,
            from: "assistant",
            text: "We appreciate that. Here is a quick review link if you would like to share your experience.",
          },
          { step: 4, from: "lead", text: "Done. My sister may be buying later this year." },
          {
            step: 5,
            from: "assistant",
            text: "Thank you. When she is ready—and with her permission—Emma can offer a no-pressure buyer consultation.",
          },
          { step: 5, from: "system", text: "Referral opportunity logged · Follow-up date scheduled · Agent notified" },
        ],
      },
      {
        id: "PC-4427",
        initials: "NS",
        name: "Noah Singh",
        source: "Investor client",
        received: "Quarterly review",
        subject: "Investment portfolio check-in",
        contact: "+65 •••• ••902",
        initialScore: 55,
        finalScore: 89,
        fields: [
          { label: "Relationship", value: "Past investor", revealAt: 0 },
          { label: "Closed property", value: "Managed 1-bedroom", revealAt: 0 },
          { label: "Satisfaction", value: "8 / 10", revealAt: 2 },
          { label: "Review", value: "Not requested yet", revealAt: 3 },
          { label: "Milestone", value: "Quarterly portfolio review", revealAt: 4 },
          { label: "Repeat intent", value: "Exploring second unit", revealAt: 5 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi Noah — I’m the automated client-care assistant for Emma’s team. Your quarterly investment review is ready. Would you like a brief portfolio conversation?",
          },
          { step: 2, from: "lead", text: "Yes. The first unit is performing well." },
          {
            step: 3,
            from: "assistant",
            text: "Good to hear. How would you rate the support you have received so far?",
          },
          { step: 3, from: "lead", text: "8 out of 10. I may consider a second unit." },
          {
            step: 5,
            from: "assistant",
            text: "Emma can prepare a short repeat-investor review and discuss suitable timing. Would Friday morning work?",
          },
          { step: 5, from: "lead", text: "Friday works." },
          { step: 5, from: "system", text: "Repeat-business opportunity created · Portfolio review booked · Agent notified" },
        ],
      },
    ],
    outcomes: [
      { label: "Client status", before: "Closed", after: "Relationship", note: "Lifecycle continues" },
      { label: "Feedback", before: "Untracked", after: "Captured", note: "Service recovery ready" },
      { label: "Review ask", before: "Random", after: "Well timed", note: "After positive feedback" },
      { label: "Opportunity", before: "Memory-based", after: "Routed", note: "Referral or repeat" },
    ],
    useCases: [
      "Closing thank-you journeys",
      "30-day client check-ins",
      "Review collection",
      "Home anniversaries",
      "Property-value conversations",
      "Referral and repeat-business routing",
    ],
  },
  "source-extraction": {
    index: "04",
    eyebrow: "Website leads + Meta Lead Ads",
    title: "Website & Meta Ads Lead Extraction",
    description:
      "Switch between two real lead sources and watch each payload become one standardized, qualified and correctly attributed CRM opportunity.",
    trigger: "A website form or Meta Lead Ad is submitted",
    promise: "Preserve source context, respond quickly and eliminate manual lead copying",
    activeLabel: "Lead-source extraction simulation",
    agent: "Daniel · New enquiries desk",
    stages: [
      {
        short: "Capture",
        title: "Source payload captured",
        detail: "The website webhook or Meta Lead Ads webhook receives the original lead data.",
        event: "Source-specific payload received with attribution",
        timestamp: "00:00",
        icon: "bolt",
      },
      {
        short: "Validate",
        title: "Fields and consent checked",
        detail: "Required contact fields, consent evidence and source identifiers are validated.",
        event: "Required-field and permission checks passed",
        timestamp: "00:02",
        icon: "check",
      },
      {
        short: "Normalize",
        title: "Lead normalized and deduplicated",
        detail: "n8n maps two different payload formats into one clean lead schema and checks for duplicates.",
        event: "n8n mapping complete · no duplicate found",
        timestamp: "00:04",
        icon: "database",
      },
      {
        short: "Respond",
        title: "Approved AI response started",
        detail: "WAPI or Retell AI starts the correct approved conversation for the lead source and intent.",
        event: "First response started through the approved channel",
        timestamp: "00:08",
        icon: "message",
      },
      {
        short: "Route",
        title: "Lead qualified and routed",
        detail: "Budget, timing and property interest determine the correct team and next action.",
        event: "Qualified lead assigned to the right property adviser",
        timestamp: "00:44",
        icon: "route",
      },
      {
        short: "Sync",
        title: "CRM and reporting updated",
        detail: "The lead, conversation, campaign source, owner and appointment are written into one record.",
        event: "CRM, database, attribution and agent alert synced",
        timestamp: "00:52",
        icon: "database",
      },
    ],
    leads: [
      {
        id: "WEB-7314",
        initials: "AL",
        name: "Amelia Lewis",
        source: "Website form",
        received: "Just now",
        subject: "Waterfront property enquiry",
        contact: "+44 •••• ••• 164",
        initialScore: 20,
        finalScore: 88,
        fields: [
          { label: "Source", value: "Property website", revealAt: 0 },
          { label: "Page", value: "/properties/waterfront", revealAt: 1 },
          { label: "Interest", value: "2-bedroom apartment", revealAt: 2 },
          { label: "Budget", value: "$700k–$850k", revealAt: 3 },
          { label: "Timeline", value: "Within 90 days", revealAt: 3 },
          { label: "Owner", value: "Daniel · Buyer team", revealAt: 4 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi Amelia — I’m the automated property assistant. I received your waterfront property enquiry from our website. Are you looking for a home or an investment?",
          },
          { step: 2, from: "lead", text: "A home. I need two bedrooms and hope to move within three months." },
          {
            step: 3,
            from: "assistant",
            text: "Thanks. What budget range are you considering, and would you like a viewing or a short consultation first?",
          },
          { step: 3, from: "lead", text: "Around $700k to $850k. A consultation first would help." },
          {
            step: 4,
            from: "assistant",
            text: "Daniel from the buyer team is available tomorrow at 11:00 AM. Shall I reserve the call?",
          },
          { step: 4, from: "lead", text: "Yes, please." },
          { step: 5, from: "system", text: "Consultation booked · Website page and UTM preserved · CRM updated" },
        ],
      },
      {
        id: "META-8421",
        initials: "JM",
        name: "Jacob Miller",
        source: "Meta Lead Ads",
        received: "1 min ago",
        subject: "Investor campaign enquiry",
        contact: "+1 ••• ••• 5918",
        initialScore: 18,
        finalScore: 91,
        fields: [
          { label: "Source", value: "Meta Lead Ads", revealAt: 0 },
          { label: "Campaign", value: "Investor opportunities", revealAt: 1 },
          { label: "Interest", value: "Managed 1-bedroom", revealAt: 2 },
          { label: "Budget", value: "$450k–$600k", revealAt: 3 },
          { label: "Timeline", value: "This quarter", revealAt: 3 },
          { label: "Owner", value: "Nina · Investment desk", revealAt: 4 },
        ],
        messages: [
          {
            step: 1,
            from: "assistant",
            text: "Hi Jacob — I’m the automated property assistant responding to the investment enquiry you submitted through our Meta campaign. Is rental income or long-term growth your priority?",
          },
          { step: 2, from: "lead", text: "Rental income. I’m interested in a managed one-bedroom." },
          {
            step: 3,
            from: "assistant",
            text: "Understood. What budget range and purchase timing should the investment desk plan around?",
          },
          { step: 3, from: "lead", text: "$450k to $600k, ideally this quarter." },
          {
            step: 4,
            from: "assistant",
            text: "Nina can review matching options with you today at 4:30 PM. Would you like me to confirm that?",
          },
          { step: 4, from: "lead", text: "Yes." },
          { step: 5, from: "system", text: "Call booked · Campaign, ad set and lead ID preserved · CRM updated" },
        ],
      },
    ],
    outcomes: [
      { label: "Lead copying", before: "Manual", after: "Automatic", note: "Two sources normalized" },
      { label: "Attribution", before: "Often lost", after: "Preserved", note: "Source through booking" },
      { label: "Duplicates", before: "Hidden", after: "Checked", note: "Before agent routing" },
      { label: "First action", before: "Inconsistent", after: "Under 1 min", note: "Illustrative workflow" },
    ],
    useCases: [
      "Property and project website forms",
      "Meta Lead Ads campaigns",
      "Seller valuation forms",
      "Open-house registrations",
      "Campaign-to-appointment attribution",
      "Multi-source lead deduplication",
    ],
  },
};

const demoNav: Array<{ kind: DemoKind; label: string; href: string }> = [
  { kind: "instant", label: "Instant response", href: "/demos/instant-lead-response" },
  { kind: "follow-up", label: "Smart follow-up", href: "/demos/smart-follow-up" },
  { kind: "referral", label: "Referral engine", href: "/demos/referral-engine" },
  { kind: "source-extraction", label: "Lead extraction", href: "/demos/lead-source-extraction" },
];

export default function AutomationDemo({ kind }: { kind: DemoKind }) {
  const config = demoConfigs[kind];
  const [leadIndex, setLeadIndex] = useState(0);
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(true);
  const lead = config.leads[leadIndex];
  const visibleMessages = useMemo(
    () => lead.messages.filter((message) => message.step <= step),
    [lead.messages, step],
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) return;
    const timeout = window.setTimeout(() => {
      setStep(config.stages.length - 1);
      setPlaying(false);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [config.stages.length]);

  useEffect(() => {
    if (!playing || step >= config.stages.length - 1) return;
    const nextStep = step + 1;
    const timeout = window.setTimeout(
      () => {
        setStep(nextStep);
        if (nextStep >= config.stages.length - 1) setPlaying(false);
      },
      step < 0 ? 650 : 1550,
    );
    return () => window.clearTimeout(timeout);
  }, [config.stages.length, playing, step]);

  function restart() {
    setStep(-1);
    setPlaying(true);
  }

  function chooseLead(index: number) {
    setLeadIndex(index);
    setStep(-1);
    setPlaying(true);
  }

  function nextLead() {
    chooseLead((leadIndex + 1) % config.leads.length);
  }

  const completed = step >= config.stages.length - 1;
  const score =
    step < 0
      ? lead.initialScore
      : Math.round(
          lead.initialScore +
            ((lead.finalScore - lead.initialScore) * (step + 1)) / config.stages.length,
        );
  const progress = step < 0 ? 0 : ((step + 1) / config.stages.length) * 100;
  const activeStage = config.stages[Math.max(0, step)];
  const whatsappMessage = encodeURIComponent(
    `Hello MyDesignNexus, I viewed the ${config.title} demo and would like this workflow mapped for my real-estate business.`,
  );

  return (
    <main className="automation-demo-page">
      <a className="skip-link" href="#demo-workspace">
        Skip to demo workspace
      </a>

      <header className="demo-site-header">
        <div className="shell demo-header-inner">
          <Link className="brand" href="/" aria-label="Return to MyDesignNexus PropertyFlow">
            <span>MYDESIGNNEXUS</span>
            <small>MDN PROPERTYFLOW</small>
          </Link>
          <div className="demo-header-status">
            <i />
            Interactive simulation
          </div>
          <Link className="demo-back-link" href="/#demos">
            <span>←</span> Back to all demos
          </Link>
        </div>
      </header>

      <section className="demo-intro">
        <div className="demo-grid-bg" />
        <div className="demo-intro-orbit" />
        <div className="shell">
          <nav className="demo-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">PropertyFlow</Link>
            <span>/</span>
            <Link href="/#demos">Automation demos</Link>
            <span>/</span>
            <strong>{config.index}</strong>
          </nav>
          <div className="demo-intro-layout">
            <div>
              <p className="eyebrow">
                {config.index} · {config.eyebrow}
              </p>
              <h1>{config.title}</h1>
              <p>{config.description}</p>
            </div>
            <aside>
              <div>
                <small>Trigger</small>
                <strong>{config.trigger}</strong>
              </div>
              <div>
                <small>Automation objective</small>
                <strong>{config.promise}</strong>
              </div>
            </aside>
          </div>
          <div className="demo-disclosure">
            <Icon name="database" size={15} />
            <span>Interactive simulation using hard-coded sample leads. The n8n, WAPI, Retell AI, CRM and database panels demonstrate production logic; no real client data is transmitted.</span>
          </div>
        </div>
      </section>

      <section className="demo-workspace-section" id="demo-workspace">
        <div className="shell">
          <div className="demo-workspace">
            <header className="workspace-toolbar">
              <div>
                <span className={`workspace-live ${playing ? "is-live" : ""}`}>
                  <i />
                  {playing ? "Automation running" : completed ? "Run complete" : "Paused"}
                </span>
                <strong>{config.activeLabel}</strong>
                <small>
                  Sample {leadIndex + 1} of {config.leads.length} · {lead.id}
                </small>
              </div>
              <div className="workspace-actions">
                <button
                  type="button"
                  className="workspace-control"
                  onClick={() => {
                    if (completed) restart();
                    else setPlaying((value) => !value);
                  }}
                >
                  <Icon name={playing ? "pause" : completed ? "refresh" : "play"} size={16} />
                  {playing ? "Pause" : completed ? "Replay" : "Continue"}
                </button>
                <button type="button" className="workspace-control" onClick={nextLead}>
                  Next sample
                  <Icon name="arrow" size={16} />
                </button>
              </div>
            </header>

            <div className="funnel-heading">
              <div>
                <small>Live workflow funnel</small>
                <strong>{activeStage.title}</strong>
              </div>
              <p aria-live="polite">
                {step < 0 ? "Waiting for the trigger…" : activeStage.detail}
              </p>
              <span>{Math.round(progress)}%</span>
            </div>

            <div
              className="live-funnel"
              style={{ "--funnel-progress": `${progress}%` } as CSSProperties}
              aria-label={`${config.title} workflow progress`}
            >
              <div className="funnel-line">
                <i />
                {playing && step >= 0 && !completed && <b />}
              </div>
              {config.stages.map((stage, index) => {
                const state = index < step ? "is-complete" : index === step ? "is-active" : "";
                return (
                  <button
                    key={stage.short}
                    type="button"
                    className={`funnel-stage ${state}`}
                    onClick={() => {
                      setStep(index);
                      setPlaying(false);
                    }}
                    aria-label={`Inspect step ${index + 1}: ${stage.title}`}
                  >
                    <span>
                      {index < step || (completed && index === step) ? (
                        <Icon name="check" size={18} />
                      ) : (
                        String(index + 1).padStart(2, "0")
                      )}
                    </span>
                    <small>{stage.short}</small>
                    <strong>{stage.title}</strong>
                    <em>{stage.timestamp}</em>
                  </button>
                );
              })}
            </div>

            <div className="workspace-grid">
              <aside className="sample-inbox">
                <header>
                  <div>
                    <small>Sample lead inbox</small>
                    <strong>{config.leads.length} hard-coded leads</strong>
                  </div>
                  <span>{config.leads.length}</span>
                </header>
                <div>
                  {config.leads.map((item, index) => (
                    <button
                      type="button"
                      key={item.id}
                      className={leadIndex === index ? "is-selected" : ""}
                      onClick={() => chooseLead(index)}
                      aria-pressed={leadIndex === index}
                    >
                      <b>{item.initials}</b>
                      <span>
                        <strong>{item.name}</strong>
                        <small>{item.subject}</small>
                        <em>
                          {item.source} · {item.received}
                        </em>
                      </span>
                      <i />
                    </button>
                  ))}
                </div>
                <p>
                  <Icon name="database" size={15} />
                  Sample records reset when this page refreshes.
                </p>
              </aside>

              <section className="conversation-panel">
                <header>
                  <div className="contact-avatar">{lead.initials}</div>
                  <div>
                    <strong>{lead.name}</strong>
                    <small>
                      {lead.contact} · {lead.source}
                    </small>
                  </div>
                  <span className={step >= 2 ? "is-qualified" : ""}>
                    {step >= 2 ? "Qualification active" : "New enquiry"}
                  </span>
                </header>
                <div className="conversation-body" aria-live="polite">
                  {visibleMessages.length === 0 ? (
                    <div className="conversation-empty">
                      <span>
                        <Icon name="message" size={24} />
                      </span>
                      <strong>Waiting for the automation trigger</strong>
                      <p>The approved conversation will appear here as the funnel runs.</p>
                    </div>
                  ) : (
                    visibleMessages.map((message, index) => (
                      <div
                        key={`${message.step}-${index}`}
                        className={`chat-bubble chat-${message.from}`}
                      >
                        {message.from !== "system" && (
                          <small>{message.from === "assistant" ? "AI assistant" : lead.name}</small>
                        )}
                        <p>{message.text}</p>
                      </div>
                    ))
                  )}
                  {playing && step >= 0 && !completed && (
                    <div className="typing-indicator" aria-label="Automation processing">
                      <i />
                      <i />
                      <i />
                    </div>
                  )}
                </div>
                <footer>
                  <span>
                    <Icon name="message" size={15} />
                    Approved automation channel
                  </span>
                  <small>Human takes over for advice or negotiation</small>
                </footer>
              </section>

              <aside className="crm-panel">
                <header>
                  <div>
                    <small>Live CRM record</small>
                    <strong>{lead.id}</strong>
                  </div>
                  <span className="crm-sync">
                    <i />
                    {step >= 5 ? "Synced" : "Updating"}
                  </span>
                </header>
                <div className="score-panel">
                  <div
                    className="score-ring"
                    style={{ "--score": `${score * 3.6}deg` } as CSSProperties}
                  >
                    <span>{score}</span>
                    <small>/100</small>
                  </div>
                  <div>
                    <small>Opportunity score</small>
                    <strong>
                      {score >= 80 ? "High intent" : score >= 55 ? "Qualified" : "Developing"}
                    </strong>
                    <p>Updates as approved intent signals are confirmed.</p>
                  </div>
                </div>
                <dl>
                  {lead.fields.map((field) => {
                    const isRevealed = step >= field.revealAt;
                    return (
                      <div key={field.label} className={isRevealed ? "is-revealed" : ""}>
                        <dt>{field.label}</dt>
                        <dd>{isRevealed ? field.value : "Pending…"}</dd>
                      </div>
                    );
                  })}
                </dl>
                <div className="next-action">
                  <small>Next best action</small>
                  <strong>
                    {completed
                      ? config.stages[config.stages.length - 1].event
                      : step < 0
                        ? "Start workflow"
                        : config.stages[Math.min(step + 1, config.stages.length - 1)].title}
                  </strong>
                  <span>
                    <Icon name="users" size={15} />
                    {step >= 3 ? config.agent : "Owner assigned after qualification"}
                  </span>
                </div>
              </aside>
            </div>

            <div className="workspace-bottom-grid">
              <section className="activity-panel">
                <header>
                  <div>
                    <small>Automation activity</small>
                    <strong>One visible audit trail</strong>
                  </div>
                  <span>
                    <Icon name="clock" size={15} />
                    Simulation time
                  </span>
                </header>
                <ol>
                  {config.stages.map((stage, index) => (
                    <li
                      key={stage.event}
                      className={
                        index < step || (completed && index === step)
                          ? "is-complete"
                          : index === step
                            ? "is-active"
                            : ""
                      }
                    >
                      <span>{stage.timestamp}</span>
                      <i>{index <= step ? <Icon name="check" size={14} /> : index + 1}</i>
                      <div>
                        <strong>{stage.event}</strong>
                        <small>{stage.detail}</small>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="outcome-panel">
                <header>
                  <small>Illustrative workflow impact</small>
                  <strong>What changes for the team</strong>
                </header>
                <div>
                  {config.outcomes.map((outcome) => (
                    <article key={outcome.label}>
                      <small>{outcome.label}</small>
                      <p>
                        <span>{outcome.before}</span>
                        <Icon name="arrow" size={15} />
                        <strong>{outcome.after}</strong>
                      </p>
                      <em>{outcome.note}</em>
                    </article>
                  ))}
                </div>
                <p>
                  This demo illustrates workflow behaviour. Actual results depend on lead quality,
                  volume, tools, team adoption and market conditions.
                </p>
              </section>
            </div>

            <BackendEngine
              kind={kind}
              step={step}
              source={lead.source}
              leadId={lead.id}
              onSelectSource={
                kind === "source-extraction"
                  ? (mode) => chooseLead(mode === "website" ? 0 : 1)
                  : undefined
              }
            />
          </div>
        </div>
      </section>

      <section className="demo-use-case-section">
        <div className="shell">
          <div className="demo-use-case-copy">
            <p className="eyebrow">Real-world fit</p>
            <h2>Built around the moments where property opportunities usually leak.</h2>
            <p>
              The final system is configured around your lead sources, approved conversation logic,
              CRM stages, calendars, routing rules and human escalation points.
            </p>
          </div>
          <div className="demo-use-case-list">
            {config.useCases.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                <Icon name="check" size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-switcher-section">
        <div className="shell">
          <p>Explore another workflow</p>
          <div>
            {demoNav.map((item, index) => (
              <Link
                href={item.href}
                key={item.kind}
                className={item.kind === kind ? "is-current" : ""}
                aria-current={item.kind === kind ? "page" : undefined}
              >
                <span>0{index + 1}</span>
                <strong>{item.label}</strong>
                <Icon name="arrow" size={17} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-cta">
        <div className="demo-grid-bg" />
        <div className="shell">
          <div>
            <p className="eyebrow">From simulation to your workflow</p>
            <h2>Want this system built around your real lead process?</h2>
            <p>
              MyDesignNexus can connect your approved lead sources, AI calling or messaging,
              website, CRM, calendars and custom software into one measurable operating flow.
            </p>
          </div>
          <div className="demo-cta-actions">
            <a
              className="button button-gold button-large"
              href={`https://wa.me/918861241984?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Build this workflow <Icon name="arrow" />
            </a>
            <Link className="button button-outline button-large" href="/#demos">
              View all demos
            </Link>
          </div>
        </div>
      </section>

      <footer className="demo-footer">
        <div className="shell">
          <Link className="brand" href="/">
            <span>MYDESIGNNEXUS</span>
            <small>WHERE DESIGN MEETS INTELLIGENCE</small>
          </Link>
          <p>Technology partner for real-estate agents, teams, brokerages and developers worldwide.</p>
          <span>© 2026 MyDesignNexus</span>
        </div>
      </footer>
    </main>
  );
}
