import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Search, ShieldCheck, Building2, Users, FileCheck2 } from 'lucide-react';
import { Link } from '@/components/HashLink';
import { loadData } from '@/data/data';
import type { Organization, Profile } from '@/data/types';
import ProfileCard from '@/components/ProfileCard';
import OrganizationCard from '@/components/OrganizationCard';

export default function RiskDatabase() {
  const [profiles, setProfiles] = useState<Profile[]>([]); const [organizations, setOrganizations] = useState<Organization[]>([]); const [q, setQ] = useState(''); const [filter, setFilter] = useState<'all'|'people'|'organizations'>('all');
  useEffect(() => { loadData().then(data => { setProfiles(data.profiles); setOrganizations(data.organizations); }); }, []);
  const people = useMemo(() => profiles.filter(p => `${p.name} ${p.file} ${p.id} ${p.role}`.toLowerCase().includes(q.toLowerCase())), [profiles, q]);
  const orgs = useMemo(() => organizations.filter(o => `${o.name} ${o.id} ${o.sector} ${o.city}`.toLowerCase().includes(q.toLowerCase())), [organizations, q]);
  return <div className="modern-page database-page"><div className="container">
    <Link className="back-link" href="#/"><ArrowLeft size={15}/> Back to GUARDIAN</Link>
    <div className="modern-page-head database-head"><div><div className="section-kicker">Risk database · 03</div><h1>See what’s behind<br /><span>the profile.</span></h1><p>Search names, IDs, licenses, organizations, or risk signals. Every record is a demonstration record designed for review and challenge.</p></div><div className="database-signal"><ShieldCheck size={18}/><strong>Evidence-backed</strong><span>Demo dataset · {profiles.length + organizations.length || 10} records</span></div></div>
    <div className="verify-panel-modern"><div className="verify-panel-title"><FileCheck2 size={17}/><div><span>VERIFY A RECORD</span><strong>Start with the identifiers you have.</strong></div></div><div className="verify-fields"><input placeholder="Employee ID / file no." value={q} onChange={e => setQ(e.target.value)} /><input placeholder="NRC / license no." /><input placeholder="Previous company / organization" /><button className="primary-button" onClick={() => setQ(q.trim())}>Verify record <Search size={15}/></button></div></div>
    <div className="database-toolbar-modern"><div className="modern-tabs">{[['all','All records'],['people','Employees'],['organizations','Corporate & NGO']].map(([id,label]) => <button key={id} className={filter === id ? 'active' : ''} onClick={() => setFilter(id as typeof filter)}>{label}</button>)}</div><label className="modern-search"><Search size={16}/><input value={q} onChange={e => setQ(e.target.value)} placeholder="Search records" /></label></div>
    {(filter !== 'organizations' && people.length > 0) && <section className="database-group"><div className="group-label"><Users size={15}/> People records <span>{people.length}</span></div><div className="profile-grid page-grid">{people.map(p => <ProfileCard key={p.file} p={p} />)}</div></section>}
    {(filter !== 'people' && orgs.length > 0) && <section className="database-group"><div className="group-label"><Building2 size={15}/> Organization records <span>{orgs.length}</span></div><div className="profile-grid page-grid">{orgs.map(o => <OrganizationCard key={o.id} o={o} />)}</div></section>}
    {!people.length && !orgs.length && <div className="empty-state">No evidence records found. Try a name, ID or organization.</div>}
  </div></div>;
}
