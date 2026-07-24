import type { Metadata } from "next";
import HomePage from "./components/HomePage";
import JsonLd from "./components/JsonLd";
import { homeFaqs } from "./lib/home-content";
import { absoluteUrl, createPageMetadata, organizationId, websiteId } from "./lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Real Estate Automation & AI Lead Systems",
  description:
    "Real estate automation, AI calling agents, CRM integration, lead follow-up and conversion websites for property agents, teams, brokerages and developers.",
  path: "/",
  keywords: [
    "real estate automation",
    "real estate lead automation",
    "AI calling agent for real estate",
    "real estate CRM automation",
    "real estate website development",
    "property lead follow-up automation",
  ],
});

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/#webpage"),
    url: absoluteUrl("/"),
    name: "Real Estate Automation & AI Lead Systems",
    description:
      "AI-powered lead capture, qualification, calling, CRM automation and conversion websites for real-estate businesses.",
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl("/og-propertyflow.png"),
      width: 1200,
      height: 630,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absoluteUrl("/#solutions"),
    name: "Real-estate automation solutions",
    itemListElement: [
      ["/real-estate-lead-automation", "Real Estate Lead Automation"],
      ["/ai-calling-agent-real-estate", "AI Calling Agent for Real Estate"],
      ["/real-estate-crm-automation", "Real Estate CRM Automation"],
      ["/real-estate-website-development", "Real Estate Website Development"],
      ["/real-estate-marketing-automation", "Real Estate Marketing Automation"],
    ].map(([url, name], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      url: absoluteUrl(url),
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/#faq-schema"),
    mainEntity: homeFaqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <HomePage />
    </>
  );
}
