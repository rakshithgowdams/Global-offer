import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy", description: "How MyDesignNexus collects, uses and protects information for MDN PropertyFlow enquiries and services." };
const nav = [
  ["scope","Scope & identity"],["collect","Information we collect"],["use","How we use it"],["ai","AI communications"],
  ["sharing","Sharing & processors"],["transfers","International transfers"],["security","Retention & security"],
  ["rights","Your rights"],["marketing","Marketing & cookies"],["contact","Contact us"],
].map(([id,label])=>({id,label}));

export default function Privacy() {
  return <LegalPage eyebrow="Your data, explained clearly" title="Privacy Policy" description="This policy explains what information we collect through this website and our business-development process, why we use it, and the choices available to you." nav={nav} notice={<>This website is operated by <strong>MyDesignNexus</strong>, a business based in Karnataka, India, serving business clients internationally. Client-deployed systems are governed by the applicable service and data-processing terms.</>}>
    <LegalSection id="scope" title="1. Scope and business identity">
      <p>This policy applies when you visit this website, request a workflow audit, contact us by email, phone or WhatsApp, attend a discovery call, or purchase our technology and marketing services.</p>
      <p>“MyDesignNexus”, “MDN PropertyFlow”, “we”, “us” and “our” refer to the MyDesignNexus business. When we operate a system on a client’s instructions, that client may control end-customer data and we may act as its processor under a separate agreement.</p>
    </LegalSection>
    <LegalSection id="collect" title="2. Information we collect">
      <h3>Information you provide</h3>
      <ul><li>Name, role, company and business contact details.</li><li>Audit-form information such as business type, team size, enquiry volume and workflow challenges.</li><li>Messages, files, call notes and requirements shared during sales, onboarding or support.</li><li>Billing, tax and transaction information required for a commercial engagement.</li></ul>
      <h3>Technical and third-party information</h3>
      <p>Our hosting, security and analytics providers may process IP address, browser and device type, referring page, timestamps, page activity, approximate region, error logs and security events. We may receive business details from a referral, a professional public source or a client-approved integration.</p>
    </LegalSection>
    <LegalSection id="use" title="3. How and why we use information">
      <p>We use information to respond to enquiries, arrange audits, understand requirements, prepare proposals, deliver and support services, communicate project or billing updates, protect systems, maintain records and meet legal obligations.</p>
      <p>Depending on context, processing may rely on consent, requested pre-contract steps, performance of a contract, legal duties or legitimate business interests that do not override your rights.</p>
    </LegalSection>
    <LegalSection id="ai" title="4. AI, calling and conversational systems">
      <p>We may use AI-assisted tools to organise enquiry information, prepare summaries, draft responses or support approved conversations. Automated communications are designed with appropriate disclosure, client-approved scripts, consent and opt-out controls, and human escalation.</p>
      <p>We do not intentionally use website enquiry data to train a public foundation model. Do not submit government identity documents, payment details, access credentials, contract secrets or other highly sensitive information through the public form or ordinary WhatsApp.</p>
    </LegalSection>
    <LegalSection id="sharing" title="5. Sharing and service providers">
      <p>We do not sell personal information. We may share the minimum necessary information with authorised team members and providers of hosting, analytics, communications, scheduling, CRM, payment and security services; with professional advisers; or with authorities where legally required.</p>
      <p>WhatsApp, email and other platforms you choose process information under their own privacy terms.</p>
    </LegalSection>
    <LegalSection id="transfers" title="6. International transfers">
      <p>We operate from India and may use providers in multiple jurisdictions. Information submitted from another country may therefore be transferred to or accessed from another country. Where applicable, we use contractual, organisational and technical safeguards for lawful transfers.</p>
      <p>International client projects may require a data-processing agreement, approved hosting region, sub-processor list or additional transfer controls under applicable law.</p>
    </LegalSection>
    <LegalSection id="security" title="7. Retention and security">
      <p>We retain information only as long as reasonably needed for the purpose collected, the business relationship, support, legal claims, security, tax and record-keeping. Periods vary by record and contract.</p>
      <p>We use proportionate access controls, authentication, limited permissions, encryption where supported, secure hosting, backups and activity records. No internet system is completely secure, so absolute security cannot be promised.</p>
    </LegalSection>
    <LegalSection id="rights" title="8. Your privacy rights">
      <p>Subject to applicable law and exceptions, you may request access, correction, deletion, restriction, portability, withdrawal of consent, an explanation of certain processing or an end to direct marketing.</p>
      <p>Verified privacy requests will be handled in line with applicable data-protection requirements. We may request reasonable identity or authority verification before completing a request.</p>
    </LegalSection>
    <LegalSection id="marketing" title="9. Marketing, cookies and external links">
      <p>You may opt out of marketing at any time. We may still send messages about an active request, contract, invoice, security issue or service. This site may use necessary storage and limited analytics or security technology. Non-essential profiling cookies, if introduced, will receive additional notice and choice where required.</p>
      <p>External links are provided for convenience; their operators are responsible for their own privacy practices.</p>
    </LegalSection>
    <LegalSection id="contact" title="10. Children, updates and contact">
      <p>Our services are intended for business users aged 18 or older. We may update this policy when our services, providers or legal requirements change.</p>
      <div className="legal-contact-card"><p>Privacy contact</p><p>MyDesignNexus<br/>1st Floor, Gunde Gowdana Koppalu Circle, Ring Road<br/>Hassan – 573201, Karnataka, India</p><p>Email: <a href="mailto:contact@mydesignnexus.in">contact@mydesignnexus.in</a><br/>Phone / WhatsApp: <a href="tel:+918861241984">+91 886 1241 984</a></p></div>
    </LegalSection>
  </LegalPage>;
}
