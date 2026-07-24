"use client";

import type { CSSProperties, FormEvent, ReactNode } from "react";
import { useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "calendar"
  | "call"
  | "chart"
  | "check"
  | "close"
  | "database"
  | "globe"
  | "layers"
  | "menu"
  | "message"
  | "shield"
  | "spark";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    calendar: <><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M8 3v4M16 3v4M3.5 9.5h17" /><path d="m8.5 15 2 2 5-5" /></>,
    call: <path d="M7.1 3.8 9.3 8 7.7 9.7c1.2 2.6 3.2 4.6 5.8 5.8l1.7-1.6 4.1 2.2c.5.3.8.8.6 1.4l-.5 2.3c-.1.6-.7 1-1.3 1C9.9 20.8 3.2 14.1 3.2 5.9c0-.6.4-1.2 1-1.3L6.5 4c.2-.1.4-.1.6-.2Z" />,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.6 2.6L16.5 9" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    database: <><ellipse cx="12" cy="5.5" rx="7.5" ry="3" /><path d="M4.5 5.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6M4.5 11.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3.4 9h17.2M3.4 15h17.2M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    message: <><path d="M20.5 11.5a8 8 0 0 1-8.4 8l-4.6 2 .9-3.7a8.2 8.2 0 1 1 12.1-6.3Z" /><path d="M8.5 11.5h.1M12 11.5h.1M15.5 11.5h.1" /></>,
    shield: <><path d="M12 3 20 6v5.5c0 4.6-3.2 8-8 9.5-4.8-1.5-8-4.9-8-9.5V6l8-3Z" /><path d="m8.8 12 2 2 4.6-4.6" /></>,
    spark: <><path d="m12 2 1.5 5.2L18 10l-4.5 2.8L12 18l-1.5-5.2L6 10l4.5-2.8L12 2Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const nav = [
  ["The problem", "#problem"],
  ["The system", "#system"],
  ["Live demos", "#demos"],
  ["Services", "#services"],
  ["The pilot", "#pilot"],
  ["FAQ", "#faq"],
];

const problems = [
  ["01", "New enquiries wait too long", "Portal, campaign and website leads arrive while agents are in viewings, meetings or outside business hours."],
  ["02", "Follow-up lives in five places", "Calls, WhatsApp, spreadsheets, inboxes and CRM tasks create gaps, duplicates and unclear ownership."],
  ["03", "Agents repeat low-value work", "The same budget, location, timeline and property questions consume time before intent is understood."],
  ["04", "Long-cycle buyers disappear", "Off-plan and investor enquiries need structured nurture, not a few manual messages followed by silence."],
  ["05", "Managers cannot see the leak", "Without clean source, response and stage data, it is difficult to see which campaigns and agents convert."],
  ["06", "More tools create more friction", "Another disconnected bot or dashboard adds cost unless it works inside the team’s real operating process."],
];

const steps = [
  { n: "01", icon: "layers" as IconName, title: "Capture", kicker: "Every approved source", body: "Bring portal enquiries, landing-page forms, WhatsApp, calls and campaign leads into one controlled intake.", tags: ["Portal leads", "Web forms", "WhatsApp", "Calls"] },
  { n: "02", icon: "spark" as IconName, title: "Qualify", kicker: "Context before handoff", body: "Ask broker-approved questions about property type, area, budget, timeline, financing and buying intent.", tags: ["Buyer intent", "Budget", "Timeline", "Language"] },
  { n: "03", icon: "calendar" as IconName, title: "Book", kicker: "Move while interest is high", body: "Offer a consultation or viewing slot, send reminders and route urgent opportunities to the right person.", tags: ["Calendar sync", "Viewings", "Reminders", "Live transfer"] },
  { n: "04", icon: "database" as IconName, title: "Sync", kicker: "One source of truth", body: "Create or update the CRM record with source, consent, summary, assigned owner and the next clear action.", tags: ["CRM update", "Deduplication", "Lead routing", "Audit trail"] },
  { n: "05", icon: "message" as IconName, title: "Nurture", kicker: "Stay useful, not noisy", body: "Run stage-based follow-up for ready-now, long-cycle and reactivation leads, pausing when a person takes over.", tags: ["Follow-up", "Reactivation", "Opt-out", "Human handoff"] },
];

const demos = [
  { id: "instant-lead-response", n: "01", title: "Instant Lead Response & Qualification", short: "Website + Meta Ads", pain: "Paid website and campaign leads lose intent when an agent is busy, the response is delayed or the first conversation is not recorded.", outcome: "Respond in seconds, qualify consistently and place an agent-ready appointment directly into the team’s workflow.", metrics: ["Faster response", "More qualified appointments", "Complete CRM context"], flow: ["Lead captured", "Instant reply", "Buyer qualified", "Agent assigned", "Call booked", "CRM updated"], icon: "spark" as IconName },
  { id: "smart-follow-up", n: "02", title: "Smart Follow-Up & Lead Reactivation", short: "Portal + Referral Leads", pain: "Warm enquiries, viewing no-shows and long-cycle prospects disappear after a few manual calls, even though many are not ready to decide immediately.", outcome: "Keep every approved lead in a useful, stage-based follow-up journey and alert the agent when buying or selling intent returns.", metrics: ["Fewer forgotten leads", "No-show recovery", "Intent-based handoff"], flow: ["Lead segmented", "Follow-up starts", "Reply detected", "Intent rescored", "Agent alerted", "Viewing booked"], icon: "message" as IconName },
  { id: "referral-engine", n: "03", title: "Past-Client Referral & Repeat-Business Engine", short: "Closed Clients", pain: "After closing, valuable client relationships sit inactive in the CRM and reviews, referrals, anniversaries and future opportunities depend on memory.", outcome: "Turn a completed deal into a structured relationship journey that earns reviews, referrals and future conversations without impersonal spam.", metrics: ["More review requests", "Referral opportunities", "Repeat-client visibility"], flow: ["Deal closed", "Thank-you sent", "Feedback checked", "Review requested", "Anniversary nurture", "Referral routed"], icon: "chart" as IconName },
  { id: "lead-source-extraction", n: "04", title: "Website & Meta Ads Lead Extraction", short: "Two Source Paths", pain: "Website forms and Meta Lead Ads arrive with different fields. Manual copying slows response, creates duplicates and loses the campaign context needed to understand what produces appointments.", outcome: "Preserve each source payload, validate consent, normalize the data through n8n, start the approved response and write one clean, attributed CRM opportunity.", metrics: ["No manual lead copying", "Source attribution preserved", "Duplicate protection"], flow: ["Website / Meta trigger", "Payload validated", "n8n normalized", "AI response", "CRM + database", "Agent alerted"], icon: "database" as IconName },
];

const services = [
  { n: "01", icon: "call" as IconName, eyebrow: "AI lead desk", title: "AI calling agents & conversational automation", body: "A 24/7 first-response layer for inbound and client-approved outreach. It answers common questions, qualifies intent, books conversations, logs outcomes and knows when to hand the lead to a person.", points: ["Inbound call handling and missed-call recovery", "Consent-based follow-up and reminders", "Multilingual flows for tested use cases", "Transcripts, summaries and quality review"] },
  { n: "02", icon: "globe" as IconName, eyebrow: "Conversion experience", title: "Real-estate websites built to start conversations", body: "A premium, mobile-first website that moves visitors toward a viewing, valuation request or consultation instead of leaving them on a static brochure page.", points: ["Campaign and project landing pages", "Property enquiry and viewing funnels", "CRM, analytics and source attribution", "Performance, accessibility and search foundations"] },
  { n: "03", icon: "database" as IconName, eyebrow: "Revenue operations", title: "CRM rescue, integration & custom CRM", body: "We first make the CRM you already pay for work properly. When your process is genuinely unique, we design a custom system around the way your brokerage operates.", points: ["Pipeline, fields, permissions and routing", "Lead-source integration and deduplication", "Tasks, alerts and management dashboards", "Custom CRM only where justified"] },
  { n: "04", icon: "layers" as IconName, eyebrow: "Custom software", title: "Operational tools your team will actually use", body: "Build the missing layer between your leads, agents, inventory and management team—without forcing a generic product onto a proven workflow.", points: ["Inventory and availability dashboards", "Viewing and handoff coordination", "Broker, manager and client portals", "API integrations and secure reporting"] },
  { n: "05", icon: "chart" as IconName, eyebrow: "Optional growth layer", title: "Social media connected to follow-up", body: "For teams that need it, we plan, create and manage approved social content—then connect enquiries back to the same CRM and lead-response process.", points: ["Campaign planning and content calendar", "Creative production and publishing support", "Lead capture and source tracking", "Permit-ready approval workflow support"] },
];

const faqs = [
  ["We already have a CRM. Do we need another one?", "Usually, no. We begin by improving your current CRM, connecting sources, defining ownership and automating next actions. A custom CRM is recommended only when a proven workflow cannot be supported sensibly by the existing platform."],
  ["Can the AI contact property leads?", "The system can be configured for inbound enquiries and client-approved, permission-based follow-up. Calling hours, registered numbers, consent, opt-outs and Do Not Call requirements must be approved by the client and reviewed against the rules that apply in each target market before launch."],
  ["Can you connect property portals and WhatsApp?", "Yes, where the client has authorised access through supported APIs, lead forwarding, webhooks or approved business tools. We do not rely on unauthorised scraping or access that breaches a platform’s terms."],
  ["Does the AI replace our agents?", "No. It protects speed-to-lead and handles repetitive first-response work. Licensed professionals remain responsible for advice, negotiation, property representations, contracts and the client relationship."],
  ["What exactly does the 20% target mean?", "The pilot targets a 20% improvement in qualified appointment conversion from agreed lead sources, compared with a documented baseline. It is a performance target—not a guaranteed revenue, transaction or closing result."],
  ["Can the system handle multiple languages?", "Yes. We can design and test approved conversation flows in the languages relevant to your audience. Language coverage, voice quality and escalation rules are confirmed during discovery."],
  ["Can you also build custom software?", "Yes. We build CRM modules, inventory dashboards, portals, scheduling systems and operational workflows when an integration or off-the-shelf tool cannot meet the requirement."],
  ["Do you provide social media management?", "Yes, as an optional growth layer. Content planning, creation, publishing and lead capture can connect to the same CRM workflow. The brokerage remains responsible for final approvals and required advertising permits."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const phone = "918861241984";

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? scrollY / max : 0);
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || auditOpen ? "hidden" : "";
    const close = (e: KeyboardEvent) => e.key === "Escape" && (setMenuOpen(false), setAuditOpen(false));
    addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; removeEventListener("keydown", close); };
  }, [menuOpen, auditOpen]);

  function submitAudit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const message = [
      "Hello MyDesignNexus, I would like a free real-estate workflow audit.", "",
      `Name: ${d.get("name")}`, `Company: ${d.get("company")}`, `Work email: ${d.get("email")}`,
      `Business type: ${d.get("business")}`, `Team size: ${d.get("team")}`,
      `Monthly enquiries: ${d.get("leads")}`, `Biggest lead-flow problem: ${d.get("challenge")}`,
    ].join("\n");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setAuditOpen(false);
  }

  return (
    <main>
      <a className="skip-link" href="#content">Skip to main content</a>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="MyDesignNexus home"><span>MYDESIGNNEXUS</span><small>MDN PROPERTYFLOW</small></a>
          <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
          <button className="button button-gold header-cta" onClick={() => setAuditOpen(true)}>Get a free audit <Icon name="arrow" size={17} /></button>
          <button className="menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} size={24} /></button>
        </div>
      </header>

      <aside className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav>{nav.map(([label, href], i) => <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ "--i": i } as CSSProperties}><span>0{i + 1}</span>{label}</a>)}
          <button className="button button-gold" onClick={() => { setMenuOpen(false); setAuditOpen(true); }}>Get your free workflow audit <Icon name="arrow" /></button>
        </nav>
      </aside>

      <section className="hero" id="top">
        <div className="grid-bg" />
        <div className="hero-glow" />
        <div className="shell hero-layout" id="content">
          <div className="hero-copy">
            <p className="eyebrow"><i />AI revenue systems for real estate</p>
            <h1>Turn every property enquiry into a <em>qualified conversation.</em></h1>
            <p className="hero-description">Connect portal leads, WhatsApp, calls, web forms and your CRM into one AI-powered lead-to-close workflow—built for brokerages, property teams and developers.</p>
            <div className="hero-actions">
              <button className="button button-gold button-large" onClick={() => setAuditOpen(true)}>Get your free workflow audit <Icon name="arrow" /></button>
              <a className="button button-outline button-large" href="#system">See the system <span>↘</span></a>
            </div>
            <div className="trust-row">{["Real-estate focused", "Human handoff", "CRM connected", "Privacy-conscious"].map((x) => <span key={x}><i />{x}</span>)}</div>
          </div>

          <div className="hero-system" aria-label="Animated lead-to-close workflow">
            <div className="g-orbit outer" /><div className="g-orbit inner" /><div className="blueprint" />
            <div className="system-panel">
              <div className="panel-top"><span><i />Live enquiry flow</span><small>MDN / 01</small></div>
              <div className="lead-card"><b><Icon name="message" /></b><div><small>New website enquiry</small><strong>Waterfront area · 2-bedroom</strong></div><em>00:08</em></div>
              <div className="qualify-card">
                <div><span>AI qualification in progress</span><small>3 / 4</small></div><b><i /></b>
                <p><span>Investor</span><span>Budget qualified</span><span>Ready this quarter</span></p>
              </div>
              <div className="mini-flow">{[["01","Capture","Complete"],["02","Qualify","Active"],["03","Book","Next"],["04","Sync CRM","Ready"]].map((x,i) => <div className={i === 1 ? "active" : ""} key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong><span>{x[2]}</span></div>)}</div>
              <div className="handoff"><b>AI</b><div><small>Human handoff</small><strong>Context ready for the assigned agent</strong></div><Icon name="check" /></div>
            </div>
            <div className="float-note note-one"><Icon name="calendar" size={16} />Viewing slot offered</div>
            <div className="float-note note-two"><Icon name="database" size={16} />CRM updated</div>
          </div>
        </div>
        <div className="shell hero-roi-bar" aria-label="Illustrative return on investment planning target">
          <div><small>Target cost-recovery window</small><strong>3–6 months<sup>*</sup></strong></div>
          <div><small>First measurable workflow impact</small><strong>30–90 days</strong></div>
          <div className="roi-formula"><small>How the return is measured</small><p><b>Recovered lead value</b> + <b>agent hours saved</b> + <b>tool waste removed</b> − implementation cost</p></div>
          <p className="roi-note"><sup>*</sup>Planning target, not a guarantee. Your estimate is calculated from lead volume, current response and appointment rates, average net commission, operating cost and team adoption.</p>
        </div>
        <div className="marquee"><div>{[...["PORTAL LEADS","WHATSAPP","INBOUND CALLS","WEB FORMS","CRM","VIEWING BOOKINGS","FOLLOW-UP","HUMAN HANDOFF"],...["PORTAL LEADS","WHATSAPP","INBOUND CALLS","WEB FORMS","CRM","VIEWING BOOKINGS","FOLLOW-UP","HUMAN HANDOFF"]].map((x,i)=><span key={`${x}${i}`}>{x}<i>✦</i></span>)}</div></div>
      </section>

      <section className="section problem-section" id="problem">
        <div className="shell">
          <div className="split-heading reveal"><div><p className="eyebrow">The conversion leak</p><h2>Real estate moves fast.<br />Your follow-up cannot wait.</h2></div><div><p>The issue is rarely a complete lack of leads. It is what happens between the enquiry and the agent conversation: slow response, scattered context, inconsistent qualification and no reliable next action.</p><a className="text-link" href="#system">See where the system intervenes <Icon name="arrow" size={18} /></a></div></div>
          <div className="problem-grid">{problems.map((p,i)=><article className="problem-card reveal" key={p[0]} style={{"--delay":`${i*60}ms`} as CSSProperties}><span>{p[0]}</span><i /><h3>{p[1]}</h3><p>{p[2]}</p></article>)}</div>
          <blockquote className="statement reveal"><span>“</span><p>More leads will not repair a broken follow-up process. <em>First, protect the value of the enquiries you already pay for.</em></p></blockquote>
        </div>
      </section>

      <section className="section system-section" id="system">
        <div className="orbital-bg" />
        <div className="shell">
          <div className="center-heading reveal"><p className="eyebrow">The PropertyFlow system</p><h2>One connected path from enquiry to agent-ready opportunity.</h2><p>Each layer is designed around your existing lead sources, CRM, team structure and approval process.</p></div>
          <div className="system-explorer reveal">
            <div className="system-tabs" role="tablist">{steps.map((s,i)=><button key={s.n} role="tab" aria-selected={active===i} className={active===i?"active":""} onClick={()=>setActive(i)}><span>{s.n}</span>{s.title}</button>)}</div>
            <div className="stage">
              <div className="stage-rings" /><div className="stage-icon"><Icon name={steps[active].icon} size={38} /></div>
              <div className="stage-copy"><small>{steps[active].kicker}</small><h3>{steps[active].title}</h3><p>{steps[active].body}</p></div>
              <div className="stage-tags">{steps[active].tags.map(t=><span key={t}><Icon name="check" size={14}/>{t}</span>)}</div>
              <div className="stage-number">{steps[active].n}<small>/05</small></div>
            </div>
          </div>
          <div className="flow-strip reveal">{steps.map((s,i)=><button key={s.n} onClick={()=>setActive(i)} className={active===i?"active":""}><span>{s.n}</span><strong>{s.title}</strong>{i<4&&<Icon name="arrow" size={17}/>}</button>)}</div>
        </div>
      </section>

      <section className="section demos-section" id="demos">
        <div className="demo-grid-bg" />
        <div className="shell">
          <div className="split-heading reveal">
            <div><p className="eyebrow">Interactive automation demos</p><h2>See four revenue workflows move from lead to outcome.</h2></div>
            <div><p>Practical demonstrations for real-estate owners, team leaders and agents. Each demo now reveals both the visible client journey and the n8n, WAPI, Retell AI, CRM and database logic working behind it.</p></div>
          </div>
          <div className="demo-list">{demos.map((demo, demoIndex) => (
            <article className="demo-card reveal" id={`demo-${demo.id}`} key={demo.id}>
              <header className="demo-card-head">
                <div className="demo-badge"><span>{demo.n}</span><b><Icon name={demo.icon} size={24} /></b></div>
                <div><small>{demo.short}</small><h3>{demo.title}</h3></div>
                <a className="demo-link" href={`/demos/${demo.id}`}>Open interactive demo <Icon name="arrow" size={16} /></a>
              </header>
              <div className="demo-insight"><div><small>Owner’s pain point</small><p>{demo.pain}</p></div><div><small>Automation outcome</small><p>{demo.outcome}</p></div></div>
              <div className="automation-track" aria-label={`${demo.title} animated workflow`}>
                <div className="track-line"><i style={{ "--demo-delay": `${demoIndex * -1.2}s` } as CSSProperties} /></div>
                {demo.flow.map((item, i) => <div className="flow-node" key={item} style={{ "--node": i, "--demo-delay": `${demoIndex * -1.2}s` } as CSSProperties}><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b>{i < demo.flow.length - 1 && <Icon name="arrow" size={15} />}</div>)}
              </div>
              <footer className="demo-card-foot"><div>{demo.metrics.map(metric => <span key={metric}><Icon name="check" size={15} />{metric}</span>)}</div><button className="button button-outline" onClick={() => setAuditOpen(true)}>Build this workflow <Icon name="arrow" size={17} /></button></footer>
            </article>
          ))}</div>
          <div className="demo-use-cases reveal"><div><p className="eyebrow">Where these demos fit</p><h3>Useful across the complete property lead cycle.</h3></div><div>{["New project enquiries","Website lead extraction","Meta Ads lead extraction","Campaign attribution","Buyer consultation booking","Seller valuation requests","Viewing reminders","No-show recovery","Long-cycle investor nurture","Past-client reviews","Referral lead routing"].map(item => <span key={item}><i />{item}</span>)}</div></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="shell">
          <div className="split-heading reveal"><div><p className="eyebrow">What we build</p><h2>Five connected capabilities. One commercial outcome.</h2></div><div><p>Start with the bottleneck costing you opportunities. Add the next layer only when it improves the lead-to-close workflow.</p></div></div>
          <div className="service-list">{services.map((s)=><article className="service-card reveal" key={s.n}>
            <div className="service-index"><span>{s.n}</span><b><Icon name={s.icon} size={28}/></b></div>
            <div className="service-copy"><small>{s.eyebrow}</small><h3>{s.title}</h3><p>{s.body}</p></div>
            <ul>{s.points.map(p=><li key={p}><Icon name="check" size={17}/>{p}</li>)}</ul><em>{s.n}</em>
          </article>)}</div>
        </div>
      </section>

      <section className="human-section">
        <div className="shell human-layout">
          <div className="human-copy reveal"><p className="eyebrow">Designed around trust</p><h2>AI handles the first response.<em>Your agents own the relationship.</em></h2><p>Property decisions involve money, timing and confidence. Automation should create context and consistency—not pretend to be a licensed professional.</p></div>
          <div className="guardrail-grid">{[["Clear disclosure","The assistant identifies its automated role where required."],["Human escalation","Negotiation, advice and sensitive questions move to your team."],["Permission-aware","Consent, calling rules and opt-outs are designed into the workflow."],["Controlled access","Roles, records and handoffs are visible and reviewable."]].map((x,i)=><article className="guardrail reveal" key={x[0]} style={{"--delay":`${i*70}ms`} as CSSProperties}><div><Icon name="shield"/><span>0{i+1}</span></div><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div>
        </div>
      </section>

      <section className="section pilot-section" id="pilot">
        <div className="grid-bg" /><div className="shell">
          <div className="pilot-heading reveal"><div><p className="eyebrow">A measured starting point</p><h2>The <em>20%</em><br/>Conversion Pilot</h2></div><div><p>A 30-day implementation designed to target a 20% improvement in qualified appointment conversion from agreed lead sources, measured against your documented baseline.</p><button className="button button-gold button-large" onClick={()=>setAuditOpen(true)}>Apply for the pilot <Icon name="arrow"/></button></div></div>
          <div className="pilot-timeline">{[
            ["01","Week 1","Map & measure","Audit lead sources, response, qualification, CRM stages, ownership and current appointment conversion."],
            ["02","Week 2","Build & connect","Configure one high-value workflow, approved conversation logic, CRM updates, booking and handoff."],
            ["03","Weeks 3–4","Launch & optimise","Review conversations, remove friction and compare agreed measures with the baseline."],
          ].map((x,i)=><article className="timeline-card reveal" key={x[0]} style={{"--delay":`${i*80}ms`} as CSSProperties}><div><span>{x[0]}</span><small>{x[1]}</small></div><h3>{x[2]}</h3><p>{x[3]}</p></article>)}</div>
          <div className="metrics reveal"><div><h3>What we measure</h3><p>Commercially useful signals—not vanity metrics.</p></div><div>{["First-response time","Contact rate","Qualified-lead rate","Appointments booked","Viewing show rate","Lead-to-agent handoff"].map(x=><span key={x}><Icon name="check" size={15}/>{x}</span>)}</div></div>
          <p className="disclaimer reveal">The 20% figure is a performance target, not a guarantee. Results depend on lead quality, volume, inventory, campaign sources, market conditions and the client team’s follow-up.</p>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="shell"><div className="center-heading reveal"><p className="eyebrow">What changes</p><h2>From scattered activity to a visible operating system.</h2></div>
          <div className="comparison reveal"><div className="comparison-head"><span>Workflow</span><span>Before</span><span>With PropertyFlow</span></div>{[
            ["First response","Depends on agent availability","Automated intake with urgent human routing"],
            ["Lead context","Buried across calls and chats","Structured summary and next action"],
            ["CRM hygiene","Manual and inconsistent","Logged, assigned and stage-controlled"],
            ["Long-cycle follow-up","Memory and ad hoc reminders","Stage-based nurture with opt-out controls"],
            ["Management view","Activity without clear attribution","Source, response and conversion visibility"],
          ].map(r=><div className="comparison-row" key={r[0]}><strong>{r[0]}</strong><span><i/>{r[1]}</span><span><Icon name="check" size={17}/>{r[2]}</span></div>)}</div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="shell faq-layout"><div className="faq-copy reveal"><p className="eyebrow">Questions before a decision</p><h2>Clear answers. No black-box promises.</h2><p>Every implementation begins with the real workflow, approved tools, responsible owners and the result you want to measure.</p><button className="text-link" onClick={()=>setAuditOpen(true)}>Ask a specific question <Icon name="arrow" size={18}/></button></div>
          <div className="faq-list">{faqs.map((f,i)=><details className="faq-item reveal" key={f[0]}><summary><span>0{i+1}</span><strong>{f[0]}</strong><i>+</i></summary><p>{f[1]}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="grid-bg"/><div className="shell final-layout"><div className="final-copy reveal"><p className="eyebrow">Your next practical step</p><h2>Find the leak before<br/>you buy more leads.</h2><p>Share your lead sources, CRM and follow-up process. We will map the highest-value automation opportunity and tell you what should be built first.</p><div><button className="button button-gold button-large" onClick={()=>setAuditOpen(true)}>Get your free workflow audit <Icon name="arrow"/></button><a href={`https://wa.me/${phone}?text=${encodeURIComponent("Hello MyDesignNexus, I would like to discuss a real-estate automation system.")}`} target="_blank" rel="noreferrer"><Icon name="message" size={18}/>Prefer WhatsApp?</a></div></div>
          <article className="audit-preview reveal"><header><h3>Free workflow audit</h3><span>15–20 minutes</span></header><ol>{["Map where enquiries arrive","Identify response and follow-up gaps","Prioritise one measurable workflow","Receive a practical pilot recommendation"].map((x,i)=><li key={x}><span>0{i+1}</span>{x}</li>)}</ol><p><Icon name="spark" size={18}/>Best suited to brokerages, property teams and developers with active lead generation.</p></article>
        </div>
      </section>

      <footer className="site-footer"><div className="shell footer-grid"><div className="footer-brand"><a className="brand" href="#top"><span>MYDESIGNNEXUS</span><small>MDN PROPERTYFLOW</small></a><p>AI automation, calling agents, conversion websites, CRM integration and custom software for modern property teams.</p><small>Built in India. Serving ambitious real-estate teams worldwide.</small></div>
        <nav><p>Explore</p>{nav.slice(0,4).map(x=><a key={x[1]} href={x[1]}>{x[0]}</a>)}</nav><nav><p>Legal</p><a href="/privacy">Privacy policy</a><a href="/terms">Terms & conditions</a><a href="/refunds">Refund policy</a></nav>
        <address><p>Start a conversation</p><a href="mailto:contact@mydesignnexus.in">contact@mydesignnexus.in</a><a href="tel:+918861241984">+91 886 1241 984</a><span>1st Floor, Gunde Gowdana Koppalu Circle,<br/>Ring Road, Hassan – 573201, India</span></address>
      </div><div className="shell footer-bottom"><span>© 2026 MyDesignNexus. All rights reserved.</span><span>Technology partner—not a real-estate brokerage, legal adviser or financial adviser.</span></div></footer>

      <button className="mobile-sticky" onClick={()=>setAuditOpen(true)}>Get your free workflow audit <Icon name="arrow" size={18}/></button>

      <div className={`audit-modal ${auditOpen?"is-open":""}`} role="dialog" aria-modal="true" aria-labelledby="audit-title" aria-hidden={!auditOpen}>
        <button className="modal-backdrop" aria-label="Close audit form" onClick={()=>setAuditOpen(false)}/>
        <div className="modal-card"><header><div><p className="eyebrow">Free real-estate workflow audit</p><h2 id="audit-title">Show us where your leads get stuck.</h2><span>Complete the short brief. Your details open in WhatsApp so you can review them before sending.</span></div><button aria-label="Close audit form" onClick={()=>setAuditOpen(false)}><Icon name="close" size={22}/></button></header>
          <form onSubmit={submitAudit}><div className="form-grid">
            <label>Your name<input name="name" autoComplete="name" required placeholder="Full name"/></label>
            <label>Company<input name="company" autoComplete="organization" required placeholder="Brokerage or company"/></label>
            <label>Work email<input name="email" type="email" autoComplete="email" required placeholder="name@company.com"/></label>
            <label>Business type<select name="business" required defaultValue=""><option value="" disabled>Select one</option><option>Real-estate brokerage</option><option>Property sales team</option><option>Property developer</option><option>Property management</option><option>Other</option></select></label>
            <label>Team size<select name="team" required defaultValue=""><option value="" disabled>Select range</option><option>1–4 people</option><option>5–15 people</option><option>16–40 people</option><option>41+ people</option></select></label>
            <label>Monthly enquiries<select name="leads" required defaultValue=""><option value="" disabled>Select range</option><option>Under 100</option><option>100–300</option><option>301–1,000</option><option>1,000+</option></select></label>
            <label className="wide">Where do leads get stuck?<textarea name="challenge" rows={3} required placeholder="Example: slow portal lead response, missed calls, inconsistent CRM follow-up..."/></label>
          </div><label className="consent"><input type="checkbox" required/><span>I agree to be contacted about this request and accept the <a href="/privacy" target="_blank">privacy policy</a>.</span></label><button className="button button-gold button-large form-submit" type="submit">Continue securely in WhatsApp <Icon name="arrow"/></button></form>
        </div>
      </div>
    </main>
  );
}
