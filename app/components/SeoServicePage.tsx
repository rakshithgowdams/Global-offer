import Link from "next/link";
import JsonLd from "./JsonLd";
import {
  absoluteUrl,
  brand,
  organizationId,
  websiteId,
} from "../lib/seo";
import {
  servicePageList,
  servicePages,
  type ServicePageConfig,
} from "../lib/service-content";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function SeoServicePage({
  config,
}: {
  config: ServicePageConfig;
}) {
  const pageUrl = absoluteUrl(`/${config.slug}`);
  const relatedPages = config.related
    .map((slug) => servicePages[slug])
    .filter(Boolean);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: config.title,
      description: config.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": `${pageUrl}#service` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: config.title,
      description: config.directAnswer,
      serviceType: config.primaryKeyword,
      provider: { "@id": organizationId },
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Real-estate agents, property teams, brokerages and developers",
      },
      url: pageUrl,
      termsOfService: absoluteUrl("/terms"),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          name: "Real-estate solutions",
          item: absoluteUrl("/#services"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: config.navLabel,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: config.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <main className="seo-page">
        <a className="skip-link" href="#seo-content">
          Skip to main content
        </a>

        <header className="seo-header">
          <div className="shell seo-header-inner">
            <Link className="brand" href="/" aria-label="MDN PropertyFlow home">
              <span>MYDESIGNNEXUS</span>
              <small>MDN PROPERTYFLOW</small>
            </Link>
            <nav aria-label="Service navigation">
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

        <article id="seo-content">
          <section className="seo-hero">
            <div className="seo-grid-bg" aria-hidden="true" />
            <div className="seo-orbit" aria-hidden="true" />
            <div className="shell">
              <nav className="seo-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">PropertyFlow</Link>
                <span aria-hidden="true">/</span>
                <Link href="/#services">Solutions</Link>
                <span aria-hidden="true">/</span>
                <strong>{config.navLabel}</strong>
              </nav>
              <div className="seo-hero-layout">
                <div>
                  <p className="eyebrow">{config.eyebrow}</p>
                  <h1>{config.title}</h1>
                  <p className="seo-hero-description">{config.description}</p>
                  <div className="seo-hero-actions">
                    <a
                      className="button button-gold button-large"
                      href={brand.calendar}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Discuss this workflow <Arrow />
                    </a>
                    <Link
                      className="button button-outline button-large"
                      href="/#demos"
                    >
                      View interactive demos <Arrow />
                    </Link>
                  </div>
                </div>
                <aside className="seo-answer-card" aria-label="Quick answer">
                  <small>Direct answer</small>
                  <h2>What does {config.primaryKeyword} mean?</h2>
                  <p>{config.directAnswer}</p>
                  <span>Reviewed by MyDesignNexus · 24 July 2026</span>
                </aside>
              </div>
              <p className="seo-audience">{config.audience}</p>
            </div>
          </section>

          <section className="seo-section seo-problem-section">
            <div className="shell">
              <div className="seo-section-heading">
                <p className="eyebrow">The operating problem</p>
                <h2>Where the current lead process usually breaks.</h2>
                <p>
                  Automation should solve a measurable handoff or administration
                  problem. It should not add another disconnected dashboard.
                </p>
              </div>
              <div className="seo-card-grid">
                {config.problems.map((problem, index) => (
                  <section className="seo-content-card" key={problem.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{problem.title}</h3>
                    <p>{problem.body}</p>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section className="seo-section seo-workflow-section">
            <div className="shell">
              <div className="seo-section-heading seo-section-heading-light">
                <p className="eyebrow">How the system works</p>
                <h2>A controlled workflow from signal to human action.</h2>
                <p>
                  Each step has an input, an owner, an approved action, an
                  exception path and a record of what happened.
                </p>
              </div>
              <ol className="seo-workflow-list">
                {config.workflow.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="seo-section">
            <div className="shell seo-two-column">
              <div>
                <div className="seo-section-heading">
                  <p className="eyebrow">Implementation scope</p>
                  <h2>What a practical build can include.</h2>
                  <p>
                    Final scope depends on existing tools, access, data quality,
                    volume, languages and the rules that apply in each market.
                  </p>
                </div>
                <ul className="seo-check-list">
                  {config.deliverables.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="seo-use-case-panel">
                <p className="eyebrow">Real-estate use cases</p>
                <h2>Where this solution fits.</h2>
                <div>
                  {config.useCases.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <Link href="/demos/lead-source-extraction">
                  See a hard-coded workflow simulation <Arrow />
                </Link>
              </aside>
            </div>
          </section>

          <section className="seo-section seo-outcomes-section">
            <div className="shell">
              <div className="seo-section-heading seo-section-heading-light">
                <p className="eyebrow">Commercially useful change</p>
                <h2>Outcomes to measure—not promises to assume.</h2>
              </div>
              <div className="seo-outcome-grid">
                {config.outcomes.map((outcome) => (
                  <section key={outcome.title}>
                    <h3>{outcome.title}</h3>
                    <p>{outcome.body}</p>
                  </section>
                ))}
              </div>
              <p className="seo-disclosure">
                Results depend on lead quality, volume, market, inventory,
                existing process, implementation scope and team adoption.
                Baseline measures are required before improvement can be
                evaluated.
              </p>
            </div>
          </section>

          <section className="seo-section seo-faq-section" id="questions">
            <div className="shell seo-faq-layout">
              <div className="seo-section-heading">
                <p className="eyebrow">Answer engine content</p>
                <h2>Frequently asked questions.</h2>
                <p>
                  Clear, visible answers for decision-makers, search engines and
                  AI-assisted research.
                </p>
              </div>
              <div className="seo-faq-list">
                {config.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="seo-related-section">
            <div className="shell">
              <div className="seo-related-heading">
                <div>
                  <p className="eyebrow">Continue your research</p>
                  <h2>Related real-estate automation solutions.</h2>
                </div>
                <Link href="/resources/real-estate-automation-guide">
                  Read the complete automation guide <Arrow />
                </Link>
              </div>
              <div className="seo-related-grid">
                {relatedPages.map((page) => (
                  <Link href={`/${page.slug}`} key={page.slug}>
                    <small>{page.eyebrow}</small>
                    <strong>{page.title}</strong>
                    <span>
                      Explore solution <Arrow />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </article>

        <section className="seo-final-cta">
          <div className="seo-grid-bg" aria-hidden="true" />
          <div className="shell">
            <div>
              <p className="eyebrow">Map the right first workflow</p>
              <h2>Bring the real process—not a tool shopping list.</h2>
              <p>
                In one structured call, we will review lead sources, ownership,
                CRM stages and the highest-value point to automate first.
              </p>
            </div>
            <div>
              <a
                className="button button-gold button-large"
                href={brand.calendar}
                target="_blank"
                rel="noreferrer"
              >
                Book a 60-minute strategy call <Arrow />
              </a>
              <a href={brand.whatsapp} target="_blank" rel="noreferrer">
                Continue on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <footer className="seo-footer">
          <div className="shell">
            <div>
              <Link className="brand" href="/">
                <span>MYDESIGNNEXUS</span>
                <small>MDN PROPERTYFLOW</small>
              </Link>
              <p>
                Real-estate automation, AI calling, CRM integration and
                conversion websites for property businesses worldwide.
              </p>
            </div>
            <nav aria-label="All real-estate solutions">
              <p>Solutions</p>
              {servicePageList.map((page) => (
                <Link href={`/${page.slug}`} key={page.slug}>
                  {page.navLabel}
                </Link>
              ))}
            </nav>
            <nav aria-label="Resources and policies">
              <p>Resources</p>
              <Link href="/resources/real-estate-automation-guide">
                Automation guide
              </Link>
              <Link href="/#demos">Interactive demos</Link>
              <Link href="/about">About</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
