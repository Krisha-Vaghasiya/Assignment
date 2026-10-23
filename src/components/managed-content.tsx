import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import type { Puppy, Faq, Story } from '@/lib/catalog-types';
export function ManagedPuppies({ puppies }: { puppies: Puppy[] }) {
  return <div className="managed-content"><ul className="tp-sketches mt-8">{puppies.filter(p => p.status !== 'gone-home' && p.status !== 'draft').map(p => <li key={p.id} className="tp-sketches__item"><Link to="/puppies/$slug" params={{ slug: p.slug }} className="tp-sketch"><span className="tp-sketch__photo"><img src={p.photos[0]} alt={p.name} loading="lazy" width="600" height="700" /></span><span className="tp-sketch__sticker font-scrawl">{p.status === 'available' ? 'Available' : 'Reserved'}</span><span className="tp-sketch__name font-plush">{p.name}</span><span className="tp-sketch__meta">{p.breed} · {p.sex}{p.age ? ` · ${p.age}` : ''}</span></Link></li>)}</ul>{!puppies.some(p => p.status === 'available' || p.status === 'reserved') && <p className="py-12 text-center">No puppies are currently available.</p>}</div>;
}
export function ManagedFaqs({ faqs }: { faqs: Faq[] }) {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState<string | null>(null);
  const filtered = faqs.filter(f => `${f.question} ${f.answer}`.toLowerCase().includes(search.toLowerCase()));
  return <div className="managed-content"><label className="block font-scrawl mb-3">Sniff out a question<input type="search" value={search} onChange={e => setSearch(e.target.value)} className="managed-input block mt-2" placeholder="Search questions…" /></label><ul className="managed-faqs">{filtered.map(f => <li key={f.id} className="managed-note"><Button variant="ghost" aria-expanded={open === f.id} aria-controls={`answer-${f.id}`} onClick={() => setOpen(open === f.id ? null : f.id)} className="w-full h-auto justify-between whitespace-normal text-left py-4">{f.question}<span aria-hidden="true">{open === f.id ? '−' : '+'}</span></Button>{open === f.id && <p id={`answer-${f.id}`} className="p-4 whitespace-pre-line">{f.answer}</p>}</li>)}</ul>{!filtered.length && <p className="py-8">No matching questions.</p>}</div>;
}
export function ManagedStories({ stories }: { stories: Story[] }) {
  return <div className="managed-content"><ul className="tp-wall mt-12">{stories.map(s => <li key={s.id} className="tp-wall__item"><figure className="tp-polaroid"><span className="tp-polaroid__photo"><img src={s.photo} alt={s.name} loading="lazy" width="600" height="800" /></span><figcaption className="tp-polaroid__caption font-scrawl">{s.caption || s.name}</figcaption></figure></li>)}</ul>{!stories.length && <p className="py-8">New family moments are coming soon.</p>}</div>;
}
