"use client";

import type { CSSProperties, ReactNode } from "react";

export type BackendKind = "instant" | "follow-up" | "referral" | "source-extraction";

type SourceMode = "website" | "meta";

type EngineIcon =
  | "ads"
  | "agent"
  | "brain"
  | "calendar"
  | "check"
  | "database"
  | "message"
  | "route"
  | "shield"
  | "webhook"
  | "website"
  | "workflow";

type EngineNode = {
  label: string;
  detail: string;
  icon: EngineIcon;
};

const profileCopy: Record<
  BackendKind,
  {
    eyebrow: string;
    title: string;
    description: string;
    trigger: string;
    log: string[];
  }
> = {
  instant: {
    eyebrow: "Background engine · instant response",
    title: "What happens in the background after a new enquiry arrives.",
    description:
      "The visible conversation is only the front layer. Behind it, the workflow verifies the payload, checks consent, prevents duplicates, starts the approved AI response, updates the CRM and routes the lead to a person.",
    trigger: "New website, campaign or portal lead",
    log: [
      "Webhook accepted · source and consent captured",
      "n8n normalized the incoming lead fields",
      "Duplicate and required-field checks passed",
      "WAPI / Retell AI started the approved response",
      "CRM record, score and next action prepared",
      "Agent and calendar handoff completed",
    ],
  },
  "follow-up": {
    eyebrow: "Background engine · nurture",
    title: "The follow-up continues without losing control of the relationship.",
    description:
      "A scheduled n8n workflow checks the CRM stage, consent, last contact and engagement. It sends only the approved next message, pauses when the lead replies and alerts the agent when intent becomes strong.",
    trigger: "CRM follow-up date or inactivity rule",
    log: [
      "CRM trigger found an approved inactive lead",
      "n8n selected the correct nurture journey",
      "Frequency, consent and opt-out checks passed",
      "WAPI delivered the approved follow-up",
      "Reply detected · sequence paused · intent rescored",
      "Agent received the history and booking action",
    ],
  },
  referral: {
    eyebrow: "Background engine · client lifecycle",
    title: "A closed deal becomes a managed relationship, not a forgotten record.",
    description:
      "The system waits for the right milestone, checks client status, starts a service-first conversation and routes positive feedback, reviews, referrals or repeat intent into the correct human workflow.",
    trigger: "Closing, check-in or anniversary milestone",
    log: [
      "Closed-client milestone entered the workflow",
      "n8n verified relationship stage and preferences",
      "Client-care message approved for delivery",
      "WAPI sent the check-in and captured feedback",
      "Review, referral or repeat intent classified",
      "CRM opportunity created and owner notified",
    ],
  },
  "source-extraction": {
    eyebrow: "Background engine · source extraction",
    title: "Two lead sources. Two payloads. One clean operating workflow.",
    description:
      "Website forms and Meta Lead Ads arrive differently. The automation preserves each source’s useful context, converts both into a standard lead record, starts the right response and keeps campaign attribution visible through the handoff.",
    trigger: "Website form submission or Meta Lead Ads webhook",
    log: [
      "Source-specific payload received securely",
      "Required fields and consent evidence validated",
      "n8n mapped the payload into one lead schema",
      "Duplicate contact and routing rules evaluated",
      "WAPI / Retell AI opened the approved conversation",
      "CRM, database, agent and reporting updated",
    ],
  },
};

function Icon({ name, size = 20 }: { name: EngineIcon; size?: number }) {
  const paths: Record<EngineIcon, ReactNode> = {
    ads: (
      <>
        <path d="M4 14.5v-5l12-5v15l-12-5Z" />
        <path d="M7 15.5 9 21h4l-2-5.8M18 8a5 5 0 0 1 0 8" />
      </>
    ),
    agent: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M17 14a5 5 0 0 1 3.5 5" />
      </>
    ),
    brain: (
      <>
        <path d="M9.5 4a3 3 0 0 0-5 2.2A3 3 0 0 0 3 11.6 3.2 3.2 0 0 0 6 17a3 3 0 0 0 3.5 3" />
        <path d="M14.5 4a3 3 0 0 1 5 2.2 3 3 0 0 1 1.5 5.4 3.2 3.2 0 0 1-3 5.4 3 3 0 0 1-3.5 3M12 3v18M8 8h4M12 13h5M7 16h5" />
      </>
    ),
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
    route: (
      <>
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <path d="M8.5 18h2.2a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v5.5c0 4.6-3.2 8-8 9.5-4.8-1.5-8-4.9-8-9.5V6l8-3Z" />
        <path d="m8.8 12 2 2 4.6-4.6" />
      </>
    ),
    webhook: (
      <>
        <circle cx="7" cy="7" r="2.5" />
        <circle cx="17" cy="17" r="2.5" />
        <path d="M9.5 7H14a3 3 0 0 1 3 3v4.5M14.5 17H10a3 3 0 0 1-3-3v-4.5" />
      </>
    ),
    website: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M3 8.5h18M7 6.2h.1M10 6.2h.1M7 13h5M7 16h9" />
      </>
    ),
    workflow: (
      <>
        <rect x="3" y="3" width="6" height="6" rx="1.5" />
        <rect x="15" y="15" width="6" height="6" rx="1.5" />
        <path d="M9 6h4a4 4 0 0 1 4 4v5M15 18h-4a4 4 0 0 1-4-4V9" />
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
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function getNodes(kind: BackendKind, sourceMode: SourceMode): EngineNode[] {
  const sourceNode =
    kind === "source-extraction"
      ? sourceMode === "meta"
        ? { label: "Meta Lead Ads", detail: "Campaign + form payload", icon: "ads" as EngineIcon }
        : { label: "Property website", detail: "Form + page context", icon: "website" as EngineIcon }
      : kind === "follow-up" || kind === "referral"
        ? { label: "CRM event", detail: "Stage or milestone trigger", icon: "database" as EngineIcon }
        : { label: "Lead source", detail: "Website, campaign or portal", icon: "website" as EngineIcon };

  return [
    sourceNode,
    { label: "Secure webhook", detail: "Payload received", icon: "webhook" },
    { label: "n8n workflow", detail: "Map, check and route", icon: "workflow" },
    { label: "AI conversation", detail: "WAPI / Retell AI", icon: "brain" },
    { label: "CRM + database", detail: "One clean record", icon: "database" },
    { label: "Agent + calendar", detail: "Human next action", icon: "agent" },
  ];
}

export default function BackendEngine({
  kind,
  step,
  source,
  leadId,
  onSelectSource,
}: {
  kind: BackendKind;
  step: number;
  source: string;
  leadId: string;
  onSelectSource?: (mode: SourceMode) => void;
}) {
  const profile = profileCopy[kind];
  const sourceMode: SourceMode = source.toLowerCase().includes("meta") ? "meta" : "website";
  const nodes = getNodes(kind, sourceMode);
  const activeIndex = step < 0 ? -1 : Math.min(step, nodes.length - 1);
  const visibleLogCount = step < 0 ? 0 : Math.min(step + 1, profile.log.length);

  return (
    <section className="backend-engine" aria-labelledby={`backend-title-${kind}`}>
      <header className="backend-heading">
        <div>
          <p>{profile.eyebrow}</p>
          <h2 id={`backend-title-${kind}`}>{profile.title}</h2>
        </div>
        <div>
          <span>
            <i />
            Simulated backend
          </span>
          <p>{profile.description}</p>
        </div>
      </header>

      {kind === "source-extraction" && (
        <div className="source-lane-picker" aria-label="Choose a lead source">
          <button
            type="button"
            className={sourceMode === "website" ? "is-active" : ""}
            onClick={() => onSelectSource?.("website")}
            aria-pressed={sourceMode === "website"}
          >
            <b>
              <Icon name="website" />
            </b>
            <span>
              <small>Path A</small>
              <strong>Website lead extraction</strong>
              <em>Form fields + page + UTM + consent timestamp</em>
            </span>
            <i>{sourceMode === "website" ? "Running" : "View path"}</i>
          </button>
          <button
            type="button"
            className={sourceMode === "meta" ? "is-active" : ""}
            onClick={() => onSelectSource?.("meta")}
            aria-pressed={sourceMode === "meta"}
          >
            <b>
              <Icon name="ads" />
            </b>
            <span>
              <small>Path B</small>
              <strong>Meta Ads lead extraction</strong>
              <em>Campaign + ad set + ad + form answers + lead ID</em>
            </span>
            <i>{sourceMode === "meta" ? "Running" : "View path"}</i>
          </button>
        </div>
      )}

      <div className="engine-canvas">
        <div className="engine-trigger">
          <span>Trigger</span>
          <strong>{profile.trigger}</strong>
          <small>{leadId} · {source}</small>
        </div>

        <div className="engine-flow" aria-label="Animated backend integration flow">
          <div className="engine-rail">
            <i style={{ "--engine-progress": `${Math.max(0, ((activeIndex + 1) / nodes.length) * 100)}%` } as CSSProperties} />
            {activeIndex >= 0 && activeIndex < nodes.length - 1 && <b />}
          </div>
          {nodes.map((node, index) => (
            <article
              key={`${node.label}-${index}`}
              className={
                index < activeIndex
                  ? "is-complete"
                  : index === activeIndex
                    ? "is-active"
                    : ""
              }
            >
              <div>
                {index < activeIndex ? <Icon name="check" /> : <Icon name={node.icon} />}
              </div>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{node.label}</strong>
              <p>{node.detail}</p>
            </article>
          ))}
        </div>

        <div className="engine-detail-grid">
          <section className="payload-card">
            <header>
              <div>
                <small>Source payload</small>
                <strong>{sourceMode === "meta" ? "Meta webhook" : "Website webhook"}</strong>
              </div>
              <span>JSON</span>
            </header>
            <dl>
              {(sourceMode === "meta"
                ? [
                    ["leadgen_id", leadId],
                    ["campaign", "Investor enquiries"],
                    ["ad_set", "High-intent buyers"],
                    ["form", "Property consultation"],
                    ["consent", "Captured in lead form"],
                  ]
                : [
                    ["submission_id", leadId],
                    ["page", "/properties/waterfront"],
                    ["utm_source", "organic / direct"],
                    ["interest", "2-bedroom enquiry"],
                    ["consent", "Timestamp + policy version"],
                  ]
              ).map(([key, value], index) => (
                <div key={key} className={index <= activeIndex ? "is-visible" : ""}>
                  <dt>{key}</dt>
                  <dd>{index <= activeIndex ? value : "waiting…"}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="execution-log">
            <header>
              <div>
                <small>n8n execution log</small>
                <strong>PropertyFlow / {leadId}</strong>
              </div>
              <span className={visibleLogCount === profile.log.length ? "is-done" : ""}>
                <i />
                {visibleLogCount === profile.log.length ? "Completed" : "Running"}
              </span>
            </header>
            <ol aria-live="polite">
              {profile.log.map((item, index) => (
                <li key={item} className={index < visibleLogCount ? "is-visible" : ""}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i>{index < visibleLogCount ? "✓" : "·"}</i>
                  <p>{index < visibleLogCount ? item : "Waiting for previous node…"}</p>
                </li>
              ))}
            </ol>
          </section>

          <aside className="engine-controls-card">
            <header>
              <Icon name="shield" />
              <div>
                <small>Production controls</small>
                <strong>Built into the workflow</strong>
              </div>
            </header>
            <ul>
              <li><Icon name="check" size={15} />Consent and opt-out record</li>
              <li><Icon name="check" size={15} />Duplicate-contact protection</li>
              <li><Icon name="check" size={15} />Role-based CRM access</li>
              <li><Icon name="check" size={15} />Human advice and negotiation handoff</li>
              <li><Icon name="check" size={15} />Source-to-appointment attribution</li>
            </ul>
            <div>
              <Icon name="route" />
              <p><small>Business result</small><strong>Agents receive context and a clear next action—not another raw lead.</strong></p>
            </div>
          </aside>
        </div>
      </div>

      <footer className="backend-stack">
        <p>Example production stack</p>
        <div>
          {[
            ["n8n", "Workflow orchestration"],
            ["WAPI", "WhatsApp messaging"],
            ["Retell AI", "Voice conversations"],
            ["CRM", "Pipeline and ownership"],
            ["Database", "Structured records"],
            ["Calendar", "Bookings and reminders"],
          ].map(([name, role]) => (
            <span key={name}><strong>{name}</strong><small>{role}</small></span>
          ))}
        </div>
        <small>Final tools are selected around the client’s existing systems, approved access and compliance requirements.</small>
      </footer>
    </section>
  );
}
