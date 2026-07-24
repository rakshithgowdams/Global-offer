import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage";

export const metadata: Metadata = { title: "Refund Policy", description: "Cancellations, refunds, credits and remedies for MyDesignNexus custom technology services." };
const nav = [["principle","Policy principle"],["discovery","Discovery & deposits"],["projects","Custom projects"],["recurring","Recurring services"],["third","Third-party costs"],["issues","Service issues"],["cancel","How to cancel"],["processing","Processing"],["contact","Request review"]].map(([id,label])=>({id,label}));

export default function Refunds() {
  return <LegalPage eyebrow="Fair treatment for custom work" title="Refund Policy" description="Custom technology work commits specialist time and third-party resources. This policy explains when a refund, credit, re-performance or cancellation may be available." nav={nav} notice={<>Project-specific refund, cancellation and acceptance terms in a signed proposal or SOW take priority over this general policy. Nothing here limits a mandatory right that cannot legally be excluded.</>}>
    <LegalSection id="principle" title="1. Policy principle">
      <p>We aim to resolve genuine service problems fairly. The appropriate remedy may be correction, re-performance, replacement, service credit, revised delivery or refund of an undelivered portion—not automatically a full refund.</p>
      <p>Because services are customised, fees generally become non-refundable as discovery, design, development, configuration, content production, integration or reserved capacity is completed.</p>
    </LegalSection>
    <LegalSection id="discovery" title="2. Audits, discovery and deposits">
      <p>The introductory workflow audit on this website is free unless otherwise agreed. Paid discovery, audits, workshops or roadmaps are refundable if cancelled before work begins and before any non-refundable cost is incurred. Once preparation, research, meetings or documentation begins, the earned portion is non-refundable.</p>
      <p>A reservation deposit starts onboarding and reserves capacity. If cancelled before work begins, we refund the unused balance after agreed administration, payment charges and committed costs. Once work begins, the deposit is applied to performed work and ordinarily non-refundable.</p>
    </LegalSection>
    <LegalSection id="projects" title="3. Custom project and milestone fees">
      <p>Websites, AI automation, calling agents, CRM work, integrations and custom software are created for client requirements.</p>
      <ul><li>An accepted, production-used or undisputed milestone is non-refundable.</li><li>Correctly completed scope is non-refundable if the client later changes direction, pauses business or no longer requires it.</li><li>Mid-project cancellation leaves fees due for completed work, work in progress, reserved time and non-cancellable commitments.</li><li>Any remaining unearned prepaid balance after those deductions will be refunded or credited.</li></ul>
      <p>Out-of-scope features, preference changes or compatibility with a newly changed platform are change requests, not defects.</p>
    </LegalSection>
    <LegalSection id="recurring" title="4. Monthly and recurring services">
      <p>Managed automation, support, maintenance, hosting administration and social media services may be cancelled under the notice period in the agreement. Cancellation normally takes effect at the end of the paid billing period.</p>
      <p>Paid periods are not prorated once managed work or capacity begins. Future renewals stop after valid cancellation, while usage charges already incurred remain payable. Minimum terms or different notice periods in signed agreements control.</p>
    </LegalSection>
    <LegalSection id="third" title="5. Third-party costs">
      <p>Amounts paid or committed to third parties are non-refundable unless that provider refunds us. This includes domains, hosting, phone numbers, telecommunications usage, CRM and AI licences, APIs, advertising spend, premium assets, subcontractors, taxes, bank fees and currency conversion.</p>
    </LegalSection>
    <LegalSection id="issues" title="6. Delays, defects and service failures">
      <p>Report a material issue promptly with enough detail to assess it. If a deliverable materially fails the agreed scope, our first remedy is correction or re-performance. If no reasonable remedy is possible, we may offer a credit or refund for the materially affected and undelivered portion.</p>
      <h3>Normally not refundable</h3>
      <ul><li>Delays caused by missing client access, approval, content or feedback.</li><li>Third-party rejection, outage or policy change outside our control.</li><li>Leads, sales, rankings or advertising results below an expectation not expressly guaranteed.</li><li>Errors caused by unauthorised changes, misuse or insecure credentials.</li></ul>
      <p>The 20% pilot target does not create an automatic refund. Any performance remedy must be expressly written in the signed pilot agreement.</p>
    </LegalSection>
    <LegalSection id="cancel" title="7. How to cancel or dispute">
      <p>Email an authorised request to <a href="mailto:contact@mydesignnexus.in">contact@mydesignnexus.in</a> with company and invoice details, the service to cancel, requested date, and evidence of any defect or billing error. We may verify identity and authority.</p>
      <p>Stopping payment, reversing a transaction or deleting access does not by itself cancel a contract or remove properly incurred fees.</p>
    </LegalSection>
    <LegalSection id="processing" title="8. Review and processing">
      <p>We aim to acknowledge a complete request within five business days and provide an initial decision or request more information within ten business days. Complex technical reviews may take longer.</p>
      <p>Approved refunds normally return to the original payment method and currency where practical. Provider processing time, transaction fees and currency differences may apply unless law requires otherwise or the issue was our billing error.</p>
    </LegalSection>
    <LegalSection id="contact" title="9. Request a review">
      <p>Raise concerns early so a small issue does not affect a later milestone. A project lead or senior representative will review unresolved requests in good faith.</p>
      <div className="legal-contact-card"><p>Billing and cancellations</p><p>MyDesignNexus<br/>1st Floor, Gunde Gowdana Koppalu Circle, Ring Road<br/>Hassan – 573201, Karnataka, India</p><p>Email: <a href="mailto:contact@mydesignnexus.in">contact@mydesignnexus.in</a><br/>Phone / WhatsApp: <a href="tel:+918861241984">+91 886 1241 984</a></p></div>
    </LegalSection>
  </LegalPage>;
}
