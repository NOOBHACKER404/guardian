import { useState } from 'react';
import { ArrowUpRight, Building2, Facebook, Globe2, Landmark, Linkedin, LockKeyhole, Users, X, ShieldCheck } from 'lucide-react';

type Props = { open: boolean; onClose: () => void; };

export default function AccountModal({ open, onClose }: Props) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signup');
  if (!open) return null;
  return <div className="account-modal-backdrop" onClick={onClose}>
    <div className="account-modal" onClick={event => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="GUARDIAN account access">
      <button className="close-button account-close" onClick={onClose} aria-label="Close account modal"><X size={20} /></button>
      <div className="account-visual">
        <span className="account-visual-mark"><ShieldCheck size={26} /></span>
        <span className="section-kicker light">GUARDIAN PBVS</span>
        <h2>Keep your next decision defensible.</h2>
        <p>Join the verification layer used to move faster without losing the evidence trail.</p>
        <div className="account-visual-line"><LockKeyhole size={15} /> Secure · consent-first · appeal-ready</div>
      </div>
      <div className="account-form">
        <div className="account-tabs"><button className={mode === 'signin' ? 'active' : ''} onClick={() => setMode('signin')}>Sign in</button><button className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>Create account</button></div>
        <span className="section-kicker">{mode === 'signin' ? 'Welcome back' : 'Choose your account type'}</span>
        <h3>{mode === 'signin' ? 'Access your trust workspace.' : 'Start with the right lens.'}</h3>
        {mode === 'signup' && <div className="account-type-grid"><button><Building2 size={17} /><span>Corporate<small>Company verification</small></span></button><button><Landmark size={17} /><span>HR team<small>Workforce checks</small></span></button><button><Users size={17} /><span>Employee<small>Profile & appeals</small></span></button></div>}
        <label className="account-input"><span>Work email</span><input type="email" placeholder="name@company.com" /></label>
        <button className="primary-button account-submit" onClick={onClose}>{mode === 'signin' ? 'Continue with work email' : 'Create secure account'} <ArrowUpRight size={15} /></button>
        <div className="social-divider"><span>or continue with</span></div>
        <div className="social-buttons"><button><Globe2 size={15} /> Google</button><button><Facebook size={15} /> Facebook</button><button><Linkedin size={15} /> LinkedIn</button></div>
        <p className="account-legal">By continuing, you agree to the GUARDIAN privacy, cookie, and appeals protocols.</p>
      </div>
    </div>
  </div>;
}
