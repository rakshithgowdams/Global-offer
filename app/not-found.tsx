import type { Metadata } from "next";
import Link from "next/link";

const calendarUrl =
  "https://cal.com/rakshith-rfmgzr/real-estate-growth-automation";
const whatsappUrl =
  "https://wa.me/918861241984?text=Hello%20MyDesignNexus%2C%20I%20would%20like%20to%20discuss%20a%20real-estate%20automation%20system.";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested page could not be found. Return to MDN PropertyFlow or explore our real-estate automation demos.",
  robots: {
    index: false,
    follow: true,
  },
};

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 9.5h17" />
      <path d="m8.5 15 2 2 5-5" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 11.5a8 8 0 0 1-8.4 8l-4.6 2 .9-3.7a8.2 8.2 0 1 1 12.1-6.3Z" />
      <path d="M8.5 11.5h.1M12 11.5h.1M15.5 11.5h.1" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="not-found-page">
      <a className="skip-link" href="#not-found-content">
        Skip to main content
      </a>

      <header className="not-found-header">
        <div className="shell not-found-header-inner">
          <Link className="brand" href="/" aria-label="MDN PropertyFlow home">
            <span>MYDESIGNNEXUS</span>
            <small>MDN PROPERTYFLOW</small>
          </Link>
          <nav aria-label="404 page navigation">
            <Link href="/">Home</Link>
            <Link href="/#demos">Automation demos</Link>
            <a href={calendarUrl} target="_blank" rel="noreferrer">
              Book a call
            </a>
          </nav>
        </div>
      </header>

      <section className="not-found-hero" id="not-found-content">
        <div className="not-found-grid" aria-hidden="true" />
        <div className="not-found-glow" aria-hidden="true" />
        <div className="shell not-found-layout">
          <div className="not-found-copy">
            <p className="eyebrow">
              <i />
              Error 404 · Route not found
            </p>
            <h1>
              This page is
              <em> off market.</em>
            </h1>
            <p>
              The page may have moved, been renamed or is no longer available.
              Your route back to the PropertyFlow system is ready below.
            </p>
            <div className="not-found-actions">
              <Link className="button button-gold button-large" href="/">
                Return to homepage <ArrowIcon />
              </Link>
              <Link
                className="button button-outline button-large"
                href="/#demos"
              >
                Explore automation demos <ArrowIcon />
              </Link>
            </div>
          </div>

          <div
            className="not-found-visual"
            aria-label="Page routing status: requested page unavailable, homepage route ready"
          >
            <div className="not-found-orbit not-found-orbit-outer" />
            <div className="not-found-orbit not-found-orbit-inner" />
            <div className="not-found-code" aria-hidden="true">
              <span>4</span>
              <b>
                <i />
              </b>
              <span>4</span>
            </div>
            <div className="not-found-status">
              <div>
                <span>
                  <i />
                  Route recovery
                </span>
                <small>MDN / 404</small>
              </div>
              <ol>
                <li>
                  <span>01</span>
                  <div>
                    <small>Requested route</small>
                    <strong>Page unavailable</strong>
                  </div>
                  <em>404</em>
                </li>
                <li className="is-ready">
                  <span>02</span>
                  <div>
                    <small>Recovery route</small>
                    <strong>PropertyFlow homepage</strong>
                  </div>
                  <em>Ready</em>
                </li>
              </ol>
              <Link href="/">
                Continue to the live system <ArrowIcon />
              </Link>
            </div>
            <div className="not-found-float not-found-float-one">
              <i />
              Safe route found
            </div>
            <div className="not-found-float not-found-float-two">
              No lead left behind
            </div>
          </div>
        </div>
      </section>

      <section className="not-found-help">
        <div className="shell not-found-help-inner">
          <div>
            <small>Need a direct route?</small>
            <strong>Let&apos;s solve the real-estate workflow you came for.</strong>
          </div>
          <div>
            <a
              className="not-found-help-link"
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
            >
              <CalendarIcon />
              <span>
                <small>60-minute strategy call</small>
                Choose a meeting time
              </span>
              <ArrowIcon />
            </a>
            <a
              className="not-found-help-link"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageIcon />
              <span>
                <small>Quick question</small>
                Continue on WhatsApp
              </span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="not-found-footer">
        <div className="shell">
          <p>© {new Date().getFullYear()} MyDesignNexus</p>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/refunds">Refunds</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
