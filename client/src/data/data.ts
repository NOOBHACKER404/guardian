import type { Organization, Profile } from './types';
const parse = (line:string) => line.split('|').map(s=>s.trim());
export async function loadData(){
  const [p,o] = await Promise.all([fetch('data/profiles.txt').then(r=>r.text()),fetch('data/organizations.txt').then(r=>r.text())]);
  const profiles:Profile[] = p.split(/\r?\n/).filter(Boolean).map(l=>{const [file,name,role,id,status,note,date,department]=parse(l);return {file,name,role,id,status,note,date,department};});
  const organizations:Organization[] = o.split(/\r?\n/).filter(Boolean).map(l=>{const [id,name,type,status,risk,city,date,sector]=parse(l);return {id,name,type,status,risk,city,date,sector};});
  return {profiles,organizations};
}
export const fallbackProfiles:Profile[]=[];
export const fallbackOrganizations:Organization[]=[];
