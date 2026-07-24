import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import {
  absoluteUrl,
  brand,
  createPageMetadata,
  organizationId,
  websiteId,
} from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About MyDesignNexus & MDN PropertyFlow",
  description:
    "Learn how MyDesignNexus designs real-estate automation, AI calling, CRM integration, conversion websites and custom workflow systems.",
  path: "/about",
  keywords: [
    "MyDesignNexus",
    "MDN PropertyFlow",
    "real estate automation company",
    "AI automation services for real estate",
  ],
});

const pageUrl = absoluteUrl("/about");

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "About MyDesignNexus and MDN PropertyFlow",
    description:
      "Business identity, approach and delivery principles for MyDesignNexus real-estate automation services.",
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: pageUrl,
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="seo-page about-page">
        <a className="skip-link" href="#about-content">
          Skip to main content
        </a>
        <header className="seo-header">
          <div className="shell seo-header-inner">
            <Link className="brand" href="/" aria-label="MDN PropertyFlow home">
              <span>MYDESIGNNEXUS</span>
              <small>MDN PROPERTYFLOW</small>
            </Link>
            <nav aria-label="Primary">
              <Link href="/real-estate-lead-automation">Lead automation</Link>
              <Link href="/ai-calling-agent-real-estate">AI calling</Link>
              <Link href="/real-estate-crm-automation">CRM automation</Link>
              <Link href="/resources/real-estate-automation-guide">Guide</Link>
            </nav>
            <a
              className="button button-gold seo-header-cta"
              href={brand.calendar}
              target="_blank"
              rel="noreferrer"
            >
              Book a strategy call
            </a>
          </div>
        </header>

        <article id="about-content">
          <header className="about-hero">
            <div className="seo-grid-bg" aria-hidden="true" />
            <div className="shell about-hero-layout">
              <div>
                <nav className="seo-breadcrumb" aria-label="Breadcrumb">
                  <Link href="/">PropertyFlow</Link>
                  <span aria-hidden="true">/</span>
                  <strong>About</strong>
                </nav>
                <p className="eyebrow">Business identity · delivery approach</p>
                <h1>
                  Technology that protects the value of
                  <em> real human conversations.</em>
                </h1>
                <p>
                  MyDesignNexus is an India-based technology services business
                  led by founder Rakshith Gowda. MDN PropertyFlow is our
                  real-estate-focused offer for agents, teams, brokerages and
                  property developers worldwide.
                </p>
              </div>
              <aside>
                <small>Business details</small>
                <dl>
                  <div>
                    <dt>Business</dt>
                    <dd>MyDesignNexus</dd>
                  </div>
                  <div>
                    <dt>Specialist offer</dt>
                    <dd>MDN PropertyFlow</dd>
                  </div>
                  <div>
                    <dt>Founder</dt>
                    <dd>Rakshith Gowda</dd>
                  </div>
                  <div>
                    <dt>Based in</dt>
                    <dd>Hassan, Karnataka, India</dd>
                  </div>
                  <div>
                    <dt>Service area</dt>
                    <dd>Worldwide</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </header>

          <section className="seo-section">
            <div className="shell about-story">
              <div className="seo-section-heading">
                <p className="eyebrow">What we believe</p>
                <h2>Automation should make ownership clearer.</h2>
              </div>
              <div>
                <p>
                  Real-estate businesses rarely need another isolated chatbot or
                  dashboard. They need the lead, conversation, appointment,
                  agent and CRM to agree about what happened and what should
                  happen next.
                </p>
                <p>
                  We begin with the real operating process: where enquiries
                  arrive, which information matters, who is responsible, which
                  communication is permitted, when a person must take over and
                  how improvement will be measured. Technology is selected
                  after those decisions—not before them.
                </p>
              </div>
            </div>
          </section>

          <section className="seo-section seo-workflow-section">
            <div className="shell">
              <div className="seo-section-heading seo-section-heading-light">
                <p className="eyebrow">What we build</p>
                <h2>Connected real-estate revenue and operations systems.</h2>
              </div>
              <div className="about-capabilities">
                <Link href="/real-estate-lead-automation">
                  <span>01</span>
                  <h3>Lead automation</h3>
                  <p>
                    Website, campaign, portal, call and referral intake,
                    qualification, routing, booking and follow-up.
                  </p>
                </Link>
                <Link href="/ai-calling-agent-real-estate">
                  <span>02</span>
                  <h3>AI calling agents</h3>
                  <p>
                    Appropriate inbound response, missed-call recovery,
                    qualification, booking, summaries and human handoff.
                  </p>
                </Link>
                <Link href="/real-estate-crm-automation">
                  <span>03</span>
                  <h3>CRM integration</h3>
                  <p>
                    Data cleanup, fields, stages, ownership, tasks,
                    conversations, attribution and reporting.
                  </p>
                </Link>
                <Link href="/real-estate-website-development">
                  <span>04</span>
                  <h3>Conversion websites</h3>
                  <p>
                    Search-ready property websites and landing pages connected
                    to CRM, analytics and automation.
                  </p>
                </Link>
              </div>
            </div>
          </section>

          <section className="seo-section">
            <div className="shell about-principles">
              <div className="seo-section-heading">
                <p className="eyebrow">Delivery principles</p>
                <h2>How we decide what belongs in the system.</h2>
              </div>
              <ol>
                <li>
                  <strong>Improve the existing workflow first.</strong>
                  <p>
                    We do not recommend a custom CRM or platform before testing
                    whether the client’s current tools can support the proven
                    process.
                  </p>
                </li>
                <li>
                  <strong>Give every automation a human owner.</strong>
                  <p>
                    Exceptions, escalations, sensitive questions and regulated
                    decisions need a named person and a visible next action.
                  </p>
                </li>
                <li>
                  <strong>Measure the bottleneck, not vanity activity.</strong>
                  <p>
                    Response, contact, qualification, appointments, show rate,
                    handoff and CRM completion matter more than message volume.
                  </p>
                </li>
                <li>
                  <strong>Design consent and control into the workflow.</strong>
                  <p>
                    Communication purpose, approved channels, calling hours,
                    recording, opt-outs, data access and local requirements are
                    implementation inputs.
                  </p>
                </li>
              </ol>
            </div>
          </section>

          <section className="about-contact">
            <div className="shell about-contact-layout">
              <div>
                <p className="eyebrow">Contact MyDesignNexus</p>
                <h2>Start with the real lead journey.</h2>
                <p>
                  Share the current lead sources, CRM, follow-up process and
                  biggest operational gap. We will help identify the first
                  workflow worth proving.
                </p>
                <div>
                  <a
                    className="button button-gold button-large"
                    href={brand.calendar}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a 60-minute strategy call
                  </a>
                  <a
                    className="button button-outline button-large"
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Continue on WhatsApp
                  </a>
                </div>
              </div>
              <address>
                <strong>MyDesignNexus</strong>
                <span>
                  1st Floor, Gunde Gowdana Koppalu Circle, Ring Road
                  <br />
                  Hassan – 573201, Karnataka, India
                </span>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
                <a href="tel:+918861241984">{brand.telephone}</a>
                <a
                  href="https://www.mydesignnexus.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.mydesignnexus.in
                </a>
              </address>
            </div>
          </section>
        </article>

        <footer className="seo-footer">
          <div className="shell">
            <div>
              <Link className="brand" href="/">
                <span>MYDESIGNNEXUS</span>
                <small>MDN PROPERTYFLOW</small>
              </Link>
              <p>
                Technology partner—not a real-estate brokerage, legal adviser
                or financial adviser.
              </p>
            </div>
            <nav>
              <p>Explore</p>
              <Link href="/resources/real-estate-automation-guide">
                Automation guide
              </Link>
              <Link href="/#demos">Interactive demos</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </nav>
            <nav>
              <p>Contact</p>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
              <a href="tel:+918861241984">{brand.telephone}</a>
              <a href={brand.calendar} target="_blank" rel="noreferrer">
                Book a strategy call
              </a>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
