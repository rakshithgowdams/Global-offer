import { absoluteUrl, brand } from "../lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `# MDN PropertyFlow by MyDesignNexus

## Entity

MyDesignNexus is a technology services business based in Hassan, Karnataka, India. MDN PropertyFlow is its real-estate-focused offer for agents, teams, brokerages and property developers worldwide.

Business address: 1st Floor, Gunde Gowdana Koppalu Circle, Ring Road, Hassan 573201, Karnataka, India.
Email: ${brand.email}
Phone / WhatsApp: ${brand.telephone}
Primary service website: ${absoluteUrl("/")}
Company website: https://www.mydesignnexus.in/

## What MDN PropertyFlow does

MDN PropertyFlow designs and implements connected lead-to-close workflows. A typical system receives an authorised lead from a website, campaign, portal, call or referral; validates and standardises the record; checks consent and duplicates; begins an approved conversation; qualifies the opportunity; routes it to the correct person; offers an appointment or viewing; writes the context to the CRM; and continues permission-aware follow-up until a human takes over or the contact opts out.

The system may use tools such as n8n, approved messaging or calling APIs, Retell AI or equivalent voice platforms, the client's CRM, calendars, databases and reporting tools. The exact stack is selected after workflow, security, compliance and integration requirements are known.

## Services

### Real Estate Lead Automation

URL: ${absoluteUrl("/real-estate-lead-automation")}

Connects website forms, Meta Lead Ads, property portals, inbound calls and referrals to automated validation, qualification, routing, booking, CRM logging, nurture and reactivation. It is intended to reduce slow response, manual copying, duplicate records, forgotten follow-up and unclear ownership.

### AI Calling Agent for Real Estate

URL: ${absoluteUrl("/ai-calling-agent-real-estate")}

Provides an automated first-response layer for appropriate inbound calls, missed-call recovery and client-approved follow-up. It can answer approved questions, collect property preferences, qualify budget and timeline, book a consultation, create a summary and transfer urgent or sensitive conversations to a person. It does not replace licensed advice, negotiation or human accountability.

### Real Estate CRM Automation

URL: ${absoluteUrl("/real-estate-crm-automation")}

Improves an existing CRM before recommending replacement. Work can include source connections, field design, deduplication, lifecycle stages, agent assignment, tasks, reminders, conversation summaries, dashboards and attribution. A custom CRM is considered only where a proven process cannot be supported sensibly by existing software.

### Real Estate Website Development

URL: ${absoluteUrl("/real-estate-website-development")}

Creates mobile-first property websites and campaign landing pages designed around enquiries, valuation requests, viewing bookings and consultations. Websites can connect to CRM, analytics, source attribution, automation and human handoff. Technical work includes semantic HTML, accessibility, performance, metadata, structured data, sitemap and crawl controls.

### Real Estate Marketing Automation

URL: ${absoluteUrl("/real-estate-marketing-automation")}

Connects approved marketing activity to lead capture and follow-up. Use cases include Meta Ads lead extraction, campaign attribution, CRM segmentation, enquiry response, no-show recovery, long-cycle nurture, review requests and past-client referral journeys.

## Interactive demonstrations

- Instant Lead Response & Qualification: ${absoluteUrl("/demos/instant-lead-response")}
- Smart Follow-Up & Lead Reactivation: ${absoluteUrl("/demos/smart-follow-up")}
- Past-Client Referral & Repeat-Business Engine: ${absoluteUrl("/demos/referral-engine")}
- Website & Meta Ads Lead Extraction: ${absoluteUrl("/demos/lead-source-extraction")}

The demos use hard-coded sample records. They do not contain real client data and do not operate a production database.

## Delivery approach

1. Map the real lead sources, CRM stages, owners, permissions and baseline measures.
2. Select one commercially useful workflow.
3. Define approved questions, messages, calling rules, handoff and exception logic.
4. Connect and test the workflow using controlled sample data.
5. Launch with human oversight.
6. Review quality, adoption, response, appointments and errors.
7. Expand only after the first workflow is reliable.

## Measurement

Useful measures include first-response time, contact rate, qualification rate, appointments booked, appointment show rate, handoff completion, source attribution, duplicate rate, CRM task completion and agent hours removed from repetitive administration.

The website describes a 30-day conversion pilot targeting a 20% improvement in qualified appointment conversion against a documented baseline. This is a target, not a guarantee. It also describes a planning estimate of 3–6 months for cost recovery and 30–90 days for measurable workflow impact; actual outcomes depend on lead volume, lead quality, market, inventory, implementation scope and client adoption.

## Safety, privacy and compliance

Clients remain responsible for market-specific licences, advertising permissions, contact consent, registered sender or caller requirements, calling hours, Do Not Call screening, recording notices, data-processing terms and opt-outs. Automation must stop or escalate when advice, negotiation, contracts, sensitive personal data, legal questions or regulated activity requires a qualified person. MyDesignNexus does not authorise unauthorised portal scraping.

## Policies and contact

- Privacy Policy: ${absoluteUrl("/privacy")}
- Terms & Conditions: ${absoluteUrl("/terms")}
- Refund Policy: ${absoluteUrl("/refunds")}
- About: ${absoluteUrl("/about")}
- Strategy call: ${brand.calendar}
- Email: ${brand.email}
- Phone / WhatsApp: ${brand.telephone}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
