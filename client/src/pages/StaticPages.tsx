import { CheckCircle2, ChevronRight, Database, FileCheck2, LockKeyhole, Mail, Search, ShieldCheck } from 'lucide-react';
import { Link } from '@/components/HashLink';

type Feature = {
  icon: typeof ShieldCheck;
  title: string;
  copy: string;
};

function InfoPage({
  kicker,
  title,
  accent,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  accent: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section className="data-page">
      <div className="container">
        <div className="info-page">
          <div className="section-kicker">{kicker}</div>
          <h1>
            {title} <span>{accent}</span>
          </h1>
          <p className="info-copy">{intro}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="feature-grid">
      {features.map(({ icon: Icon, title, copy }) => (
        <article className="feature-card" key={title}>
          <Icon aria-hidden="true" />
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </div>
  );
}

export function About() {
  return (
    <InfoPage
      kicker="ABOUT GUARDIAN"
      title="Trust, made"
      accent="inspectable."
      intro="GUARDIAN is an evidence-led verification layer for teams that need to make high-consequence decisions without losing sight of the underlying record."
    >
      <FeatureGrid
        features={[
          { icon: ShieldCheck, title: 'Evidence first', copy: 'Every signal is anchored to a reviewable source record, not an opaque score or a black-box recommendation.' },
          { icon: Database, title: 'One review surface', copy: 'Fragmented organization, profile, and verification records are brought together in a single, legible workspace.' },
          { icon: LockKeyhole, title: 'Built for discretion', copy: 'Clear status language and scoped access help decision-makers act with confidence while respecting sensitive information.' },
        ]}
      />
      <div className="process-grid">
        <div><b>01 / COLLECT</b><h3>Gather the record</h3><span>Bring the relevant identity, organization, and employment evidence into a consistent review flow.</span></div>
        <div><b>02 / CROSS-CHECK</b><h3>Connect the signals</h3><span>Compare sources, dates, and context so gaps and inconsistencies become visible early.</span></div>
        <div><b>03 / DECIDE</b><h3>Move with clarity</h3><span>Turn the verified record into a defensible next step for hiring, investment, or institutional trust.</span></div>
      </div>
      <Link className="arrow-link" href="/verification">See how verification works <ChevronRight size={15} /></Link>
    </InfoPage>
  );
}

export function Verification() {
  return (
    <InfoPage
      kicker="VERIFICATION LAYER"
      title="A signal is only useful"
      accent="when you can trace it."
      intro="GUARDIAN turns a collection of records into a structured verification trail. The result is not just a status, but a clear view of what was checked, when it was checked, and what still needs review."
    >
      <div className="orgguard-demo">
        <div><FileCheck2 size={22} /><strong>Identity and role alignment</strong><span>REVIEWED</span></div>
        <div><Database size={22} /><strong>Organization and governance records</strong><span>CROSS-CHECKED</span></div>
        <div><CheckCircle2 size={22} /><strong>Risk indicators and evidence trail</strong><span>READY FOR DECISION</span></div>
      </div>
      <FeatureGrid
        features={[
          { icon: Search, title: 'Find the relevant record', copy: 'Search across profiles and organizations with consistent identifiers and status language.' },
          { icon: CheckCircle2, title: 'Review the context', copy: 'Read the evidence note, review date, and decision signal together instead of in isolation.' },
          { icon: ShieldCheck, title: 'Act on the signal', copy: 'Use a concise, defensible outcome as the starting point for the next human decision.' },
        ]}
      />
      <Link className="arrow-link" href="/search">Open the risk database <ChevronRight size={15} /></Link>
    </InfoPage>
  );
}

export function Contact() {
  return (
    <InfoPage
      kicker="CONTACT GUARDIAN"
      title="Bring clarity to"
      accent="the next decision."
      intro="Tell us what you need to verify, the decisions your team is making, and where fragmented records are slowing you down. We will help map the right review surface."
    >
      <div className="contact-card">
        <div className="section-kicker">DIRECT CHANNEL</div>
        <h3>Start a conversation with the GUARDIAN team.</h3>
        <a className="contact-email" href="mailto:hello@guardian.example">hello@guardian.example</a>
        <div className="contact-links"><span>For pilots and partnerships</span><span>Response within 2 business days</span><span>Evidence-led by default</span></div>
      </div>
      <FeatureGrid
        features={[
          { icon: Mail, title: 'Describe the use case', copy: 'Hiring, investment review, organization diligence, or another trust-sensitive workflow.' },
          { icon: LockKeyhole, title: 'Share only what is needed', copy: 'Start with the decision context; keep sensitive source material scoped to the right review path.' },
          { icon: ShieldCheck, title: 'Build the right layer', copy: 'We will help shape a verification workflow that keeps people in control of the final call.' },
        ]}
      />
    </InfoPage>
  );
}
