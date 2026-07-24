export type ServicePageConfig = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  directAnswer: string;
  primaryKeyword: string;
  keywords: string[];
  audience: string;
  problems: Array<{ title: string; body: string }>;
  workflow: Array<{ title: string; body: string }>;
  deliverables: string[];
  useCases: string[];
  outcomes: Array<{ title: string; body: string }>;
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
};

export const servicePages: Record<string, ServicePageConfig> = {
  "real-estate-lead-automation": {
    slug: "real-estate-lead-automation",
    navLabel: "Lead automation",
    eyebrow: "Capture · qualify · route · follow up",
    title: "Real estate lead automation that protects every enquiry.",
    description:
      "Connect website, Meta Ads, portal, call and referral leads to instant response, qualification, booking, CRM updates and permission-aware follow-up.",
    directAnswer:
      "Real estate lead automation is a connected workflow that receives an enquiry, validates its source and consent, responds through an approved channel, collects buying or selling context, assigns the right agent, books the next step and records everything in the CRM. It reduces manual copying and delayed follow-up while keeping people responsible for advice and negotiation.",
    primaryKeyword: "real estate lead automation",
    keywords: [
      "property lead automation",
      "real estate lead follow-up automation",
      "real estate lead qualification",
      "automated real estate lead routing",
      "Meta Ads lead automation for real estate",
      "website lead automation for real estate",
    ],
    audience:
      "Best for real-estate teams, brokerages and property developers receiving enquiries from several sources and losing visibility between capture and agent contact.",
    problems: [
      {
        title: "Response depends on agent availability",
        body: "Enquiries arrive during viewings, meetings and outside business hours. A manual process makes speed inconsistent and hides which leads were never contacted.",
      },
      {
        title: "Every source sends different data",
        body: "Website forms, Meta Lead Ads, portals, calls and referrals use different fields. Copying them by hand creates missing context, duplicates and attribution errors.",
      },
      {
        title: "Qualification is not consistent",
        body: "One agent records budget and timeline while another records only a phone number. Managers cannot compare opportunities or route them confidently.",
      },
      {
        title: "Long-cycle leads disappear",
        body: "Prospects who are not ready today need useful, permission-aware nurture. Without lifecycle stages and next actions, follow-up becomes memory-based.",
      },
    ],
    workflow: [
      {
        title: "Capture the source payload",
        body: "Receive authorised website, campaign, portal, call or referral data while preserving source, campaign and consent fields.",
      },
      {
        title: "Validate and deduplicate",
        body: "Check required fields, standardise phone and email data, compare existing records and hold incomplete or conflicting entries for review.",
      },
      {
        title: "Start an approved response",
        body: "Send an immediate message or route an inbound call using the channel, hours and disclosure rules approved for the client market.",
      },
      {
        title: "Qualify the opportunity",
        body: "Collect property type, preferred area, budget, timeline, financing position and the next practical action without giving regulated advice.",
      },
      {
        title: "Route and book",
        body: "Assign by location, project, language, availability or round robin, then offer a consultation or viewing slot and alert the owner.",
      },
      {
        title: "Sync and nurture",
        body: "Write the summary, stage, source, owner and next action to the CRM; continue approved follow-up until a person takes over or the contact opts out.",
      },
    ],
    deliverables: [
      "Lead-source and field-mapping audit",
      "Website form and Meta Lead Ads webhook setup",
      "Portal or email-forwarding integration where authorised",
      "Lead validation and duplicate-control logic",
      "Broker-approved qualification questions",
      "Agent assignment and escalation rules",
      "Calendar booking and reminder workflow",
      "CRM creation, update and activity logging",
      "Lifecycle-based follow-up and opt-out handling",
      "Source, response and appointment reporting",
    ],
    useCases: [
      "New project and off-plan enquiries",
      "Buyer consultation requests",
      "Seller valuation requests",
      "Meta Lead Ads follow-up",
      "Property portal enquiries",
      "Viewing reminders and no-show recovery",
      "Quiet-lead reactivation",
      "Referral lead routing",
    ],
    outcomes: [
      {
        title: "Faster first response",
        body: "A controlled intake starts the approved next action without waiting for manual copying or an available coordinator.",
      },
      {
        title: "Better agent context",
        body: "The assigned person receives source, preferences, answers, conversation summary and next step before contacting the lead.",
      },
      {
        title: "Cleaner attribution",
        body: "Campaign and source fields stay attached to the opportunity, making appointment and conversion reporting more useful.",
      },
      {
        title: "Visible follow-up ownership",
        body: "Every active record has a stage, owner, due action and escalation path instead of an open-ended contact list.",
      },
    ],
    faqs: [
      {
        question: "What is real estate lead automation?",
        answer:
          "It is a workflow that connects lead capture, validation, first response, qualification, routing, appointment booking, CRM updates and follow-up. The purpose is to remove repetitive administration and missed handoffs while preserving human responsibility for property advice, negotiation and the relationship.",
      },
      {
        question: "Can website and Meta Ads leads use the same workflow?",
        answer:
          "Yes, but their original fields should remain distinguishable. The workflow can normalise both sources into one CRM structure while preserving campaign, form, page and consent details for attribution and compliance review.",
      },
      {
        question: "Will automation contact every lead automatically?",
        answer:
          "Only the sources, channels and communication types approved for the implementation. Consent, calling hours, registered numbers, messaging templates, opt-outs and local rules must be mapped before activation.",
      },
      {
        question: "Does it replace a real-estate agent?",
        answer:
          "No. It handles intake, repetitive questions, booking, record updates and reminders. Licensed or authorised people remain responsible for representations, valuation, negotiation, contracts, legal questions and sensitive decisions.",
      },
      {
        question: "How is success measured?",
        answer:
          "Useful measures include first-response time, valid-contact rate, qualification completion, appointments booked, appointment show rate, lead-to-agent handoff, duplicate rate and source-to-appointment conversion. Baselines should be documented before launch.",
      },
    ],
    related: [
      "ai-calling-agent-real-estate",
      "real-estate-crm-automation",
      "real-estate-marketing-automation",
    ],
  },
  "ai-calling-agent-real-estate": {
    slug: "ai-calling-agent-real-estate",
    navLabel: "AI calling",
    eyebrow: "Answer · qualify · book · hand off",
    title: "AI calling agents for real estate—built around human handoff.",
    description:
      "Use an AI voice agent for appropriate inbound calls, missed-call recovery, lead qualification, viewing booking, CRM summaries and urgent agent transfer.",
    directAnswer:
      "An AI calling agent for real estate is a voice workflow that can answer appropriate inbound enquiries, ask approved qualification questions, book a consultation or viewing, summarise the conversation and transfer urgent opportunities to a person. It should clearly disclose its automated role where required and must operate within the consent, recording, calling-hour and opt-out rules of each market.",
    primaryKeyword: "AI calling agent for real estate",
    keywords: [
      "real estate AI voice agent",
      "AI receptionist for real estate",
      "real estate automated calling agent",
      "AI appointment setter for real estate",
      "property enquiry voice bot",
      "real estate missed call automation",
    ],
    audience:
      "Best for teams receiving valuable inbound calls, after-hours enquiries or approved follow-up volume that agents cannot answer consistently.",
    problems: [
      {
        title: "Missed calls become unknown opportunities",
        body: "A caller may move to the next listing or company before an agent can return the call. A voicemail alone does not capture intent or urgency.",
      },
      {
        title: "Agents repeat the same first questions",
        body: "Budget, area, property type, timeline and appointment availability consume agent time before the conversation reaches a useful stage.",
      },
      {
        title: "Call context never reaches the CRM",
        body: "Notes remain incomplete or are added later. The next person cannot see what was asked, promised or scheduled.",
      },
      {
        title: "Automation risk is underestimated",
        body: "Outbound voice, recording and personal data rules vary by market. A calling agent without controls can create more risk than value.",
      },
    ],
    workflow: [
      {
        title: "Identify the call context",
        body: "Recognise the approved number, source, business hours, language and whether the interaction is inbound, a callback or permitted follow-up.",
      },
      {
        title: "Disclose and obtain the right signals",
        body: "Introduce the automated assistant where required, provide the approved purpose and respect requests for a person or no further contact.",
      },
      {
        title: "Handle approved questions",
        body: "Answer from controlled property, project or company information and avoid inventing availability, pricing, legal advice or promises.",
      },
      {
        title: "Qualify without overreaching",
        body: "Collect property interest, location, budget range, timeline and appointment preference while escalating regulated or sensitive questions.",
      },
      {
        title: "Book or transfer",
        body: "Offer a valid calendar slot, send confirmation, or transfer an urgent opportunity to the responsible agent with context.",
      },
      {
        title: "Write the audit trail",
        body: "Store the approved recording status, transcript or summary, outcome, consent signals, owner and next action in the connected CRM.",
      },
    ],
    deliverables: [
      "Inbound and permitted-outbound use-case assessment",
      "Call disclosure, consent and opt-out logic",
      "Approved knowledge and response boundaries",
      "Qualification and escalation conversation design",
      "Business-hours and overflow routing",
      "Calendar booking and reminder connection",
      "Live transfer and callback rules",
      "CRM contact, summary and task updates",
      "Transcript, quality-review and exception process",
      "Test calls across accents, noise and edge cases",
    ],
    useCases: [
      "24/7 inbound property enquiry handling",
      "After-hours and overflow receptionist",
      "Missed-call recovery",
      "Viewing or consultation booking",
      "Appointment confirmation and reminders",
      "Client-approved warm-lead follow-up",
      "Property FAQ and project information",
      "Urgent agent transfer",
    ],
    outcomes: [
      {
        title: "More calls receive a useful next step",
        body: "Appropriate callers can receive information, leave structured context or book without waiting for a manual callback.",
      },
      {
        title: "Agent time moves to higher-value work",
        body: "Agents receive qualified context and focus on advice, viewings, negotiation and relationship-building.",
      },
      {
        title: "Consistent conversation records",
        body: "Outcomes, summaries, appointments and follow-up tasks enter the CRM through the same controlled process.",
      },
      {
        title: "Safer escalation",
        body: "The workflow recognises topics and requests that require a person instead of improvising beyond the approved scope.",
      },
    ],
    faqs: [
      {
        question: "What can an AI calling agent do for a real-estate business?",
        answer:
          "For an approved use case, it can answer inbound calls, collect property preferences, qualify timeline and budget, book appointments, send confirmations, summarise calls, update the CRM and transfer urgent opportunities to an agent.",
      },
      {
        question: "Can an AI voice agent make outbound real-estate calls?",
        answer:
          "Only when the client has a lawful basis and the required consent for the specific contact, channel and purpose. Calling hours, registered numbers, disclosures, recording notices, Do Not Call screening and opt-out handling must be reviewed market by market.",
      },
      {
        question: "Can it answer questions about price and availability?",
        answer:
          "It can repeat current, approved information from a controlled source. It should not invent availability, provide a valuation, negotiate terms, interpret contracts or make financial or legal promises.",
      },
      {
        question: "What happens when the caller wants a human?",
        answer:
          "The workflow should transfer the call when an agent is available or create a prioritised callback with the conversation context. Human escalation is a core requirement, not a failure condition.",
      },
      {
        question: "How do you test voice quality?",
        answer:
          "Testing should cover real call paths, accents, background noise, interruptions, silence, incorrect details, requests to opt out, sensitive questions, transfer failure and CRM write-back. Quality review continues after launch.",
      },
    ],
    related: [
      "real-estate-lead-automation",
      "real-estate-crm-automation",
      "real-estate-website-development",
    ],
  },
  "real-estate-crm-automation": {
    slug: "real-estate-crm-automation",
    navLabel: "CRM automation",
    eyebrow: "One record · one owner · one next action",
    title: "Real estate CRM automation that makes follow-up visible.",
    description:
      "Connect lead sources, pipelines, routing, tasks, conversations, appointments and attribution inside the CRM your property team actually uses.",
    directAnswer:
      "Real estate CRM automation uses triggers and rules to create or update contacts, remove duplicates, assign ownership, move lifecycle stages, schedule tasks, record conversations and report outcomes. A strong implementation improves the CRM a team already has before recommending replacement, and adds custom software only when the proven operating process cannot be supported responsibly.",
    primaryKeyword: "real estate CRM automation",
    keywords: [
      "real estate CRM integration",
      "brokerage CRM automation",
      "property sales CRM automation",
      "real estate lead routing CRM",
      "real estate CRM setup service",
      "custom CRM for real estate",
    ],
    audience:
      "Best for property teams already paying for a CRM but still managing ownership, follow-up, source tracking or reporting through spreadsheets and memory.",
    problems: [
      {
        title: "The CRM is a database, not an operating system",
        body: "Contacts are stored, but stages, owners and next actions are unreliable. Managers cannot tell which opportunities need attention.",
      },
      {
        title: "Lead sources do not map cleanly",
        body: "Campaigns, website forms, calls and portals create inconsistent fields or duplicate contacts, breaking attribution and automation.",
      },
      {
        title: "Tasks are created without accountability",
        body: "Reminders exist, but there is no escalation when work is overdue or no clear distinction between active, nurture and closed records.",
      },
      {
        title: "A replacement is suggested too early",
        body: "Moving CRMs can add cost and disruption. Many teams need configuration, integration and adoption—not another platform.",
      },
    ],
    workflow: [
      {
        title: "Audit the current CRM",
        body: "Review sources, fields, stages, duplicate patterns, permissions, tasks, reports, integrations and how agents actually work.",
      },
      {
        title: "Define the lifecycle",
        body: "Agree what new, attempted, contacted, qualified, appointment, nurture, closed and disqualified mean for the specific business.",
      },
      {
        title: "Connect lead sources",
        body: "Map approved website, campaign, portal, call and referral inputs to consistent fields while preserving original attribution.",
      },
      {
        title: "Automate ownership and action",
        body: "Assign by agreed rules, create the right next task, alert responsible people and escalate unattended opportunities.",
      },
      {
        title: "Synchronise conversations",
        body: "Write summaries, outcomes, appointments, consent signals and human handoffs from calling, WhatsApp or email tools.",
      },
      {
        title: "Measure and improve",
        body: "Report response, contact, qualification, appointments, show rate, overdue work and source performance; adjust rules from evidence.",
      },
    ],
    deliverables: [
      "CRM architecture and data-quality audit",
      "Lifecycle stages and exit criteria",
      "Required-field and validation rules",
      "Lead-source field mapping",
      "Duplicate detection and merge process",
      "Agent assignment and escalation logic",
      "Tasks, reminders and service-level rules",
      "Call, message and appointment synchronization",
      "Role-based dashboard and reporting design",
      "Training, adoption and change-control documentation",
    ],
    useCases: [
      "Round-robin or territory-based lead routing",
      "Buyer and seller pipeline separation",
      "New-project inventory enquiry assignment",
      "Viewing task and reminder automation",
      "Quiet-lead nurture segmentation",
      "Conversation summary and call outcome logging",
      "Past-client review and referral workflows",
      "Management conversion dashboards",
    ],
    outcomes: [
      {
        title: "One source of operational truth",
        body: "The team can see who owns the opportunity, what happened and what must happen next.",
      },
      {
        title: "Less manual administration",
        body: "Records, tasks, summaries and stages update from approved workflow events instead of repeated data entry.",
      },
      {
        title: "More useful reporting",
        body: "Source, response, appointment and outcome data use consistent definitions and can be compared over time.",
      },
      {
        title: "Better software decisions",
        body: "The team learns whether its existing CRM can support the process before investing in migration or custom development.",
      },
    ],
    faqs: [
      {
        question: "What should a real estate CRM automate?",
        answer:
          "It should automate reliable administrative actions such as lead capture, source mapping, deduplication, ownership, lifecycle stages, tasks, reminders, conversation summaries, appointment records and escalation. It should not automate judgement that requires a qualified person.",
      },
      {
        question: "Do we need to replace our current CRM?",
        answer:
          "Usually not at the beginning. The first step is to audit configuration, integrations, data quality and team adoption. Replacement is sensible only when the required, proven workflow cannot be supported at a reasonable cost or risk.",
      },
      {
        question: "Can you build a custom real-estate CRM?",
        answer:
          "Yes, where there is a justified requirement such as unusual inventory, multi-team permissions, custom portals or operating processes that established systems cannot support. Discovery should prove the need before custom development begins.",
      },
      {
        question: "How do you prevent duplicate property leads?",
        answer:
          "The workflow standardises identifiers, checks email and phone values, preserves source history and applies agreed matching rules. Ambiguous records should be queued for human review rather than merged automatically.",
      },
      {
        question: "Which CRM metrics matter most?",
        answer:
          "Start with response time, contact rate, qualification completion, appointments, show rate, overdue tasks, handoff completion, duplicate rate and conversion by source. A smaller set of trusted measures is more valuable than a large dashboard built on inconsistent fields.",
      },
    ],
    related: [
      "real-estate-lead-automation",
      "ai-calling-agent-real-estate",
      "real-estate-marketing-automation",
    ],
  },
  "real-estate-website-development": {
    slug: "real-estate-website-development",
    navLabel: "Websites",
    eyebrow: "Search visibility · conversion · CRM connection",
    title: "Real estate website development built for qualified enquiries.",
    description:
      "Create a fast, accessible and search-ready property website that connects listings, campaign pages, valuation requests, viewing bookings and CRM follow-up.",
    directAnswer:
      "Real estate website development should do more than display projects or listings. A conversion-focused site helps buyers, sellers, tenants or investors find the right information, trust the business, submit a relevant enquiry, book the next step and enter a measurable CRM workflow. It also needs crawlable content, semantic structure, mobile performance, accessibility, privacy controls and authorised property data.",
    primaryKeyword: "real estate website development",
    keywords: [
      "real estate website development company",
      "property website development",
      "real estate lead generation website",
      "brokerage website development",
      "real estate landing page development",
      "real estate website CRM integration",
    ],
    audience:
      "Best for agents, brokerages and developers whose website looks presentable but does not create measurable enquiries, appointments or source-attributed CRM opportunities.",
    problems: [
      {
        title: "The website behaves like a brochure",
        body: "Visitors see generic claims but cannot complete a valuation request, viewing enquiry, consultation or useful property search journey.",
      },
      {
        title: "Campaign pages are disconnected",
        body: "A lead form submits an email, but campaign, property, consent and behaviour context are lost before the CRM record is created.",
      },
      {
        title: "Search pages lack distinct intent",
        body: "One homepage tries to rank for every service, location and customer question. Search engines receive no clear topic architecture.",
      },
      {
        title: "Mobile experience is treated as a resize",
        body: "Property visitors browse on phones. Slow media, intrusive animation, tiny controls and long forms reduce trust and completion.",
      },
    ],
    workflow: [
      {
        title: "Map audiences and actions",
        body: "Define the separate journeys for buyers, sellers, investors, tenants, landlords, partners or project enquiries relevant to the business.",
      },
      {
        title: "Plan the information architecture",
        body: "Create crawlable pages around services, projects, locations, processes and questions without duplicating thin keyword pages.",
      },
      {
        title: "Design the conversion path",
        body: "Place clear calls to action, qualification fields, booking and human contact at the points where the visitor has enough context.",
      },
      {
        title: "Connect authorised data",
        body: "Use approved feeds, APIs or client-managed inventory. Do not scrape consumer portals or publish unverified property information.",
      },
      {
        title: "Integrate measurement and CRM",
        body: "Preserve source and campaign data, validate consent, create the CRM record, trigger the approved response and measure the next action.",
      },
      {
        title: "Launch and improve",
        body: "Test mobile layouts, forms, keyboard access, performance, metadata, structured data, sitemap, 404s and conversion events before iteration.",
      },
    ],
    deliverables: [
      "Audience, offer and conversion-journey mapping",
      "Search-led information architecture",
      "Responsive UX and premium visual design",
      "Property, project or service page templates",
      "Viewing, consultation and valuation funnels",
      "CRM, calendar and automation integration",
      "Source attribution and analytics-ready events",
      "Technical SEO and structured data",
      "Accessibility and keyboard-flow testing",
      "Performance, security and launch QA",
    ],
    useCases: [
      "Brokerage and team websites",
      "Property developer corporate websites",
      "New-project and campaign landing pages",
      "Seller valuation request funnels",
      "Buyer consultation and viewing booking",
      "Authorised inventory or listing discovery",
      "Agent profile and service-area pages",
      "Real-estate automation service websites",
    ],
    outcomes: [
      {
        title: "Clearer visitor journeys",
        body: "Each audience sees relevant information and a specific next step instead of a generic contact form.",
      },
      {
        title: "Searchable topic structure",
        body: "Distinct, internally linked pages help search engines understand the services and questions the business can answer.",
      },
      {
        title: "Better lead context",
        body: "Property, campaign, source and qualification fields arrive with the enquiry and follow it into the CRM.",
      },
      {
        title: "A measurable conversion asset",
        body: "The team can evaluate form starts, submissions, booked calls and qualified opportunities rather than traffic alone.",
      },
    ],
    faqs: [
      {
        question: "What should a real-estate website include?",
        answer:
          "The answer depends on the business, but common needs include clear services, useful property or project information, buyer and seller journeys, valuation or viewing forms, CRM connection, contact options, proof, policies, mobile accessibility, analytics and search-ready content.",
      },
      {
        question: "Can a real-estate website connect to our CRM?",
        answer:
          "Yes. Forms, calls, campaign pages and booking events can create or update CRM records while preserving source, property interest, consent, qualification answers and next action.",
      },
      {
        question: "Do you build property listing or IDX-style websites?",
        answer:
          "We can integrate authorised inventory, listing feeds or permitted APIs. Data access must come from the client, MLS, portal or provider under an approved agreement; unauthorised scraping is not a suitable foundation.",
      },
      {
        question: "How does SEO fit into website development?",
        answer:
          "SEO begins with research, crawlable architecture, distinct page intent, useful original content, semantic HTML, metadata, internal links, structured data, sitemap, performance and measurement. Files alone cannot compensate for thin or untrusted content.",
      },
      {
        question: "How long does a real-estate website take to build?",
        answer:
          "A focused campaign site can be faster than a brokerage platform with inventory, portals and integrations. The reliable estimate comes after page count, content readiness, data sources, languages, approval process and integrations are mapped.",
      },
    ],
    related: [
      "real-estate-lead-automation",
      "real-estate-marketing-automation",
      "real-estate-crm-automation",
    ],
  },
  "real-estate-marketing-automation": {
    slug: "real-estate-marketing-automation",
    navLabel: "Marketing automation",
    eyebrow: "Campaign source · response · nurture · attribution",
    title: "Real estate marketing automation connected to revenue operations.",
    description:
      "Connect website and Meta Ads leads, campaign attribution, qualification, CRM segmentation, follow-up, reviews and referrals in one measurable system.",
    directAnswer:
      "Real estate marketing automation connects approved campaigns to the operational steps after a response: lead extraction, source attribution, validation, first contact, segmentation, nurture, booking, CRM updates and reporting. Its value comes from coordinating marketing and sales around the same record—not from sending more generic messages or replacing human review of advertising, property claims and regulated communication.",
    primaryKeyword: "real estate marketing automation",
    keywords: [
      "real estate marketing automation services",
      "Meta Ads automation for real estate",
      "real estate lead nurture automation",
      "real estate campaign attribution",
      "real estate referral automation",
      "real estate review automation",
    ],
    audience:
      "Best for property businesses investing in campaigns or content but unable to trace enquiries, follow-up and appointments back to the original source.",
    problems: [
      {
        title: "Campaign leads wait in disconnected inboxes",
        body: "Meta forms, landing pages and messages arrive separately. The team cannot respond consistently or see whether the contact already exists.",
      },
      {
        title: "Attribution disappears after capture",
        body: "Campaign, ad, form and property interest are replaced by a generic lead source, making cost and appointment reporting unreliable.",
      },
      {
        title: "Every lead receives the same sequence",
        body: "A seller, ready-now buyer, investor and long-cycle prospect need different information, timing and human involvement.",
      },
      {
        title: "Past clients are forgotten",
        body: "Reviews, referrals and anniversary contact depend on agent memory instead of a respectful, consent-aware relationship process.",
      },
    ],
    workflow: [
      {
        title: "Preserve campaign context",
        body: "Capture campaign, ad, form, landing page, property interest, timestamp and consent fields before normalising the record.",
      },
      {
        title: "Validate and match",
        body: "Check required data, standardise contact values, identify duplicates and link repeat enquiries without erasing history.",
      },
      {
        title: "Segment by real intent",
        body: "Use source, request, timeline, property type, lifecycle and engagement to choose the correct approved response and owner.",
      },
      {
        title: "Respond and book",
        body: "Begin the appropriate message or call flow, answer controlled questions, collect missing context and offer the next step.",
      },
      {
        title: "Nurture and re-engage",
        body: "Run useful sequences for long-cycle prospects, no-shows or past clients, pausing on reply, handoff, opt-out or changed status.",
      },
      {
        title: "Report to the source",
        body: "Connect qualified leads and appointments to campaign and source data so marketing decisions use downstream outcomes.",
      },
    ],
    deliverables: [
      "Campaign and lead-source mapping",
      "Website and Meta Lead Ads extraction",
      "UTM and source-attribution design",
      "Consent-field and duplicate handling",
      "Buyer, seller and investor segmentation",
      "Approved message and calling workflows",
      "Long-cycle nurture and reactivation",
      "No-show and appointment recovery",
      "Review, anniversary and referral journeys",
      "Source-to-appointment reporting",
    ],
    useCases: [
      "Meta Lead Ads extraction and response",
      "Campaign landing-page lead routing",
      "Off-plan investor nurture",
      "Buyer and seller sequence separation",
      "Viewing no-show recovery",
      "Dormant database reactivation",
      "Past-client review requests",
      "Referral opportunity routing",
    ],
    outcomes: [
      {
        title: "Less campaign leakage",
        body: "New responses move into a controlled intake and ownership process instead of waiting for manual export.",
      },
      {
        title: "More relevant follow-up",
        body: "Lifecycle and intent determine the approved journey, reducing generic or mistimed communication.",
      },
      {
        title: "Stronger source visibility",
        body: "Campaign context remains attached through qualification, booking and CRM stages.",
      },
      {
        title: "A healthier client database",
        body: "Opt-outs, duplicates, inactive records and relationship stages are managed deliberately rather than ignored.",
      },
    ],
    faqs: [
      {
        question: "What is real estate marketing automation?",
        answer:
          "It is the use of connected workflows to move an approved campaign response through capture, validation, attribution, segmentation, contact, nurture, booking and reporting. It coordinates marketing and sales activity around the same lead record.",
      },
      {
        question: "Can Meta Lead Ads go directly into a real-estate CRM?",
        answer:
          "Yes. The integration can receive the form payload, preserve campaign and consent fields, check duplicates, create or update the CRM contact, assign an owner and begin the approved response workflow.",
      },
      {
        question: "Can automation reactivate old real-estate leads?",
        answer:
          "It can be designed for records that the client is permitted to contact. The database should first be cleaned and segmented, and the workflow must respect consent, purpose, frequency, opt-outs and applicable Do Not Call requirements.",
      },
      {
        question: "Does marketing automation include social media management?",
        answer:
          "It can. Content planning, approval, publishing and lead capture can be added where required. The brokerage or developer remains responsible for property claims, advertising permissions, brand approval and market-specific rules.",
      },
      {
        question: "Which marketing automation metrics matter?",
        answer:
          "Track valid leads, response time, contact rate, qualification, appointments, show rate and progression by campaign. Cost per lead alone can hide poor data, duplicate contacts or leads that never receive a useful response.",
      },
    ],
    related: [
      "real-estate-lead-automation",
      "real-estate-crm-automation",
      "real-estate-website-development",
    ],
  },
};

export const servicePageList = Object.values(servicePages);
