import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms governing the MyDesignNexus website and MDN PropertyFlow business services.",
  path: "/terms",
});
const nav = [["agreement","Agreement"],["services","Services & scope"],["client","Client responsibilities"],["ai","AI & real-estate limits"],["fees","Fees & costs"],["ip","Intellectual property"],["data","Data & confidentiality"],["liability","Warranties & liability"],["termination","Termination"],["law","Law & contact"]].map(([id,label])=>({id,label}));

export default function Terms() {
  return <LegalPage eyebrow="Clear commercial ground rules" title="Terms & Conditions" description="These terms govern use of this website and establish the default conditions for discussing or purchasing our business technology services." nav={nav} notice={<>A signed proposal, statement of work, service agreement or data-processing agreement may contain project-specific terms. If there is a conflict, the signed project document controls for that engagement.</>}>
    <LegalSection id="agreement" title="1. Agreement and business use">
      <p>By using this website, requesting an audit, accepting a proposal, paying an invoice or instructing us to begin, you agree to these terms. If you act for an organisation, you confirm authority to bind it.</p>
      <p>Our services are intended primarily for business customers and authorised adults. We do not provide real-estate brokerage, investment, legal, tax or financial advice and do not create an agency relationship with a property buyer, seller, tenant, landlord, developer or broker.</p>
    </LegalSection>
    <LegalSection id="services" title="2. Services, proposals and scope">
      <p>Services may include AI automation and calling agents; websites and applications; CRM audit, integration or development; custom software and dashboards; social media services; consulting, training and support.</p>
      <p>Exact deliverables, assumptions, milestones, access, fees, support, acceptance and exclusions appear in the applicable proposal or statement of work (“SOW”). Demonstrations and website descriptions are illustrative, not commitments to unlisted features.</p>
      <p>Changes to requirements, volume, integrations, languages, data, channels, regulation or third-party platforms may require a change order, revised fee or updated timeline.</p>
    </LegalSection>
    <LegalSection id="client" title="3. Client responsibilities">
      <p>The client must provide accurate requirements, timely approvals, authorised access, content and decision-makers; hold rights to supplied data and assets; and review all scripts, claims, property data, translations, campaigns and workflows before launch.</p>
      <p>The client remains responsible for all licences, registrations, real-estate advertising permits and other approvals required in each market; applicable telemarketing rules including registered numbers, permitted hours, consent, Do Not Call screening, recording notices and opt-outs; and licensed professional control over advice, valuation, negotiation, contracts and regulated activity.</p>
      <p>Delays caused by missing client access, approvals, feedback or third-party acceptance reasonably adjust delivery dates.</p>
    </LegalSection>
    <LegalSection id="ai" title="4. AI and real-estate limitations">
      <p>AI may produce incomplete, inaccurate, outdated or unsuitable outputs. Unless expressly agreed otherwise, material outputs require appropriate human review.</p>
      <p>Systems must not impersonate a licensed broker, discriminate, give legal or investment advice, guarantee returns, autonomously negotiate contracts, misrepresent availability or publish unapproved advertising.</p>
      <p>The “20% Conversion Pilot” is a measurement framework and target—not a promise of a 20% increase in revenue, transactions, appointments or closing rate. Results depend on lead quality, inventory, agent response, integrations and market conditions.</p>
      <p>Configurable controls do not themselves guarantee legal compliance. Clients should obtain appropriate legal and regulatory advice for every country or region in which the system will be used.</p>
    </LegalSection>
    <LegalSection id="fees" title="5. Fees, taxes and third-party costs">
      <p>Fees, currency, milestones and billing frequency appear in the proposal or invoice and are exclusive of applicable taxes, bank charges and foreign-exchange costs unless stated otherwise.</p>
      <p>The client is responsible for identified third-party costs such as hosting, domains, phone numbers, call minutes, messaging, AI usage, CRM licences, APIs, media and advertising spend. Those providers have their own terms and may change independently.</p>
      <p>We may pause work for overdue undisputed amounts after reasonable notice. Refunds are governed by the <a href="/refunds">Refund Policy</a>.</p>
    </LegalSection>
    <LegalSection id="ip" title="6. Intellectual property">
      <p>Each party retains pre-existing intellectual property. We retain general know-how, methods, prompts, reusable components, templates, frameworks and non-client-specific improvements (“Background Materials”).</p>
      <p>Subject to full payment, the client receives the project-specific rights stated in the SOW. Background Materials and third-party components remain under their licences. Client content is licensed to us only as needed to perform the services.</p>
      <p>We will not identify a confidential client or publish confidential results without permission. Publicly launched, non-confidential work may be referenced in our portfolio unless the SOW says otherwise or the client reasonably objects.</p>
    </LegalSection>
    <LegalSection id="data" title="7. Data, confidentiality and security">
      <p>Each party will protect the other’s non-public business, technical and commercial information and use it only for the engagement. Standard exceptions apply to public, previously known, independently developed or lawfully received information.</p>
      <p>The client decides what end-customer data its system collects and must provide required notices and lawful instructions. Where appropriate, the parties will sign a data-processing agreement.</p>
      <p>We use reasonable safeguards, but no system is completely secure or uninterrupted. Clients must maintain backups, access controls, offboarding and device security for systems they operate.</p>
    </LegalSection>
    <LegalSection id="liability" title="8. Warranties and liability">
      <p>We will perform contracted services with reasonable skill and care. For a timely reported material failure attributable to us, our first obligation is to investigate and correct or reperform the affected service.</p>
      <p>Except as expressly agreed, services are provided “as available” without guarantees of uninterrupted operation, compatibility with every third-party change or commercial results.</p>
      <p>To the maximum extent permitted by law, neither party is liable for indirect, punitive or consequential loss, lost profit, goodwill, opportunity or data. Our aggregate liability for a SOW will not exceed fees paid or payable under that SOW during the preceding six months. Liability that cannot lawfully be excluded remains unaffected.</p>
    </LegalSection>
    <LegalSection id="termination" title="9. Term, suspension and termination">
      <p>An engagement begins and ends as stated in its SOW. Either party may terminate an uncured material breach after reasonable written notice, or act immediately for unlawful use, serious security risk, insolvency or repeated non-payment where permitted.</p>
      <p>On termination, fees remain due for completed work, work in progress, reserved time and committed costs. Agreed handover follows payment of outstanding undisputed fees. Payment, confidentiality, intellectual property, limitations and dispute provisions survive.</p>
    </LegalSection>
    <LegalSection id="law" title="10. Law, disputes and contact">
      <p>Unless a signed agreement states otherwise, these terms are governed by Indian law and disputes are subject to competent courts in Karnataka, India. Cross-border projects may agree in writing to another governing law, arbitration process or forum.</p>
      <p>Before formal proceedings, the parties should give notice and allow senior representatives at least 15 business days to seek a commercial resolution unless urgent relief is required.</p>
      <div className="legal-contact-card"><p>Legal notices</p><p>MyDesignNexus<br/>1st Floor, Gunde Gowdana Koppalu Circle, Ring Road<br/>Hassan – 573201, Karnataka, India</p><p>Email: <a href="mailto:contact@mydesignnexus.in">contact@mydesignnexus.in</a><br/>Phone: <a href="tel:+918861241984">+91 886 1241 984</a></p></div>
    </LegalSection>
  </LegalPage>;
}
