import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { Link } from '@/components/HashLink';

const openAccount = () => window.dispatchEvent(new Event('guardian:open-account'));

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const price = (monthly: number, annual: number) => billing === 'monthly' ? `$${monthly}` : `$${annual}`;
  return <div className="modern-page pricing-page"><div className="container">
    <Link className="back-link" href="#/"><ArrowLeft size={15}/> Back to GUARDIAN</Link>
    <div className="modern-page-head"><div><div className="section-kicker">Pricing · 06</div><h1>Choose the trust layer<br /><span>your decisions need.</span></h1><p>Start with a repeatable verification workflow and expand when your team is ready for deeper diligence.</p></div><div className="billing-toggle"><button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')}>Monthly</button><button className={billing === 'annual' ? 'active' : ''} onClick={() => setBilling('annual')}>Annual <span>2 months free</span></button></div></div>
    <div className="modern-pricing-grid">
      <PriceCard label="Regional" title="Company" description="For teams building a repeatable diligence workflow." price={price(80, 800)} suffix={billing === 'monthly' ? '/ month' : '/ year'} features={['15 days of verification tools','Credential checks & compliance reports','Verified B2B partner network']} onChoose={openAccount} />
      <PriceCard featured label="Most adopted" title="Corporate" description="For enterprises that need high-confidence decisions at speed." price={price(150, 1500)} suffix={billing === 'monthly' ? '/ month' : '/ year'} features={['Nationwide database connections','Real-time credential verification','Priority dispute support']} onChoose={openAccount} />
      <PriceCard label="Private premium" title="Dual-mode" description="For government, embassies, and high-security environments." price="$3,200" suffix="/ year" features={['Regional + international databases','24/7 unrestricted global access','Investor matchmaking opportunities']} onChoose={openAccount} />
    </div>
    <div className="pricing-trust-note"><ShieldCheck size={19}/><div><strong>Every plan starts with the same evidence standard.</strong><span>Consent-first records · appeal-ready workflows · human review layer</span></div><button className="text-button" onClick={openAccount}>Talk to GUARDIAN <ArrowUpRight size={15}/></button></div>
  </div></div>;
}

function PriceCard({ label, title, description, price, suffix, features, featured, onChoose }: { label: string; title: string; description: string; price: string; suffix: string; features: string[]; featured?: boolean; onChoose?: () => void }) {
  return <article className={`modern-pricing-card${featured ? ' featured' : ''}`}><span className="pricing-label">{label}</span><h2>{title}</h2><p>{description}</p><div className="price"><strong>{price}</strong><span>{suffix}</span></div><ul>{features.map(feature => <li key={feature}><Check size={14}/>{feature}</li>)}</ul><button className={featured ? 'primary-button' : 'outline-button'} onClick={onChoose}>{title === 'Dual-mode' ? 'Talk to GUARDIAN' : `Choose ${title}`} <ArrowUpRight size={15}/></button></article>;
}
