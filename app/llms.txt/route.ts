import { absoluteUrl, brand } from "../lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `# MDN PropertyFlow

> MyDesignNexus builds real-estate automation systems that connect lead capture, AI calling, qualification, appointment booking, CRM updates, follow-up and human handoff. The service is designed for real-estate agents, teams, brokerages and property developers worldwide.

## Core solutions

- [Real Estate Lead Automation](${absoluteUrl("/real-estate-lead-automation")}): Capture, qualify, route, book and nurture website, campaign, portal and referral leads.
- [AI Calling Agent for Real Estate](${absoluteUrl("/ai-calling-agent-real-estate")}): Inbound response, missed-call recovery, approved follow-up, qualification, booking and human handoff.
- [Real Estate CRM Automation](${absoluteUrl("/real-estate-crm-automation")}): CRM integration, deduplication, routing, tasks, lifecycle stages, attribution and reporting.
- [Real Estate Website Development](${absoluteUrl("/real-estate-website-development")}): Mobile-first property websites and landing pages connected to CRM, analytics and lead workflows.
- [Real Estate Marketing Automation](${absoluteUrl("/real-estate-marketing-automation")}): Website and Meta lead extraction, campaign attribution, nurture, review and referral workflows.

## Helpful resources

- [Real Estate Automation Guide](${absoluteUrl("/resources/real-estate-automation-guide")}): A practical guide to workflows, AI calling, CRM integration, implementation and ROI measurement.
- [Interactive Automation Demos](${absoluteUrl("/#demos")}): Four hard-coded simulations showing the client journey and backend workflow.
- [About MyDesignNexus](${absoluteUrl("/about")}): Business identity, delivery principles and contact details.

## Important limitations

- MyDesignNexus is a technology partner, not a real-estate brokerage, legal adviser or financial adviser.
- AI calling and messaging must follow the consent, privacy, calling-hour, recording, opt-out and licensing rules that apply in each client market.
- Performance figures are targets or planning estimates, not guaranteed revenue or ranking outcomes.

## Contact

- Email: ${brand.email}
- Phone / WhatsApp: ${brand.telephone}
- Strategy call: ${brand.calendar}
- Website: ${absoluteUrl("/")}

For an expanded machine-readable overview, see [llms-full.txt](${absoluteUrl("/llms-full.txt")}).
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
