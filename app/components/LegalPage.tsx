import Link from "next/link";
import type { ReactNode } from "react";

export function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section className="legal-section" id={id}><h2>{title}</h2>{children}</section>;
}

export default function LegalPage({
  eyebrow, title, description, nav, notice, children,
}: {
  eyebrow: string; title: string; description: string;
  nav: { id: string; label: string }[]; notice: ReactNode; children: ReactNode;
}) {
  return (
    <div className="legal-page">
      <header className="legal-header"><div className="shell">
        <Link className="brand" href="/" aria-label="MyDesignNexus home"><span>MYDESIGNNEXUS</span><small>MDN PROPERTYFLOW</small></Link>
        <div className="legal-header-actions"><Link href="/">Back to PropertyFlow</Link><a className="button button-gold" href="https://wa.me/918861241984?text=Hello%20MyDesignNexus%2C%20I%20would%20like%20a%20real-estate%20workflow%20audit." target="_blank" rel="noreferrer">Start a conversation</a></div>
      </div></header>
      <main>
        <section className="legal-hero"><div className="shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p><div className="legal-meta"><span>Effective: 24 July 2026</span><span>Last updated: 24 July 2026</span><span>Business-to-business services</span></div></div></section>
        <div className="shell legal-layout">
          <aside className="legal-nav"><p>On this page</p>{nav.map(x=><a key={x.id} href={`#${x.id}`}>{x.label}</a>)}</aside>
          <div className="legal-content"><div className="legal-notice">{notice}</div>{children}</div>
        </div>
      </main>
      <footer className="legal-footer"><div className="shell"><span>© 2026 MyDesignNexus. All rights reserved.</span><nav><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms & conditions</Link><Link href="/refunds">Refund policy</Link><a href="mailto:contact@mydesignnexus.in">Contact</a></nav></div></footer>
    </div>
  );
}
