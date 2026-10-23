import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { manageApi } from '@/lib/manage-api';
import type { Puppy } from '@/lib/catalog-types';
export function InquiryForm({ puppies, selected = '' }: { puppies: Puppy[]; selected?: string }) {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState('');
  const [sent, setSent] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setBusy(true); setResult('');
    try {
      const body = Object.fromEntries(new FormData(form));
      await manageApi('inquiries', { method: 'POST', body: JSON.stringify(body) });
      setSent(true); setResult('Your letter has been received. Our team will be in touch.'); form.reset();
    } catch (error) { setResult(error instanceof Error ? error.message : 'Please try again.'); }
    finally { setBusy(false); }
  }
  return <form onSubmit={submit} className="tp-letterform"><p className="font-scrawl tp-letterform__greeting">Dear TeddyPups,</p><label className="managed-form-label">Your name<input required minLength={2} maxLength={80} autoComplete="name" name="name" className="managed-input" /></label><label className="managed-form-label">Phone or WhatsApp<input required name="phone" type="tel" autoComplete="tel" maxLength={30} pattern="\+?[0-9 ()\-]{7,30}" className="managed-input" /></label><label className="managed-form-label">Email (optional)<input type="email" name="email" autoComplete="email" maxLength={254} className="managed-input" /></label><label className="managed-form-label">Your area (optional)<input name="area" maxLength={80} className="managed-input" /></label><label className="managed-form-label">Puppy<select name="puppyId" defaultValue={selected} className="managed-input"><option value="">Any puppy</option>{puppies.filter(p => p.status !== 'gone-home' && p.status !== 'draft').map(p => <option key={p.id} value={p.id}>{p.name} ({p.sex})</option>)}</select></label><label className="managed-form-label">Your message<textarea name="message" maxLength={2000} rows={4} className="managed-input" /></label><div hidden aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div><div className="tp-letterform__sign"><p className="font-scrawl">with love, a future puppy parent</p><Button type="submit" disabled={busy || sent}>{busy ? 'Sending…' : sent ? 'Letter received' : 'Post my letter'}</Button></div>{result && <p role={sent ? 'status' : 'alert'} className="mt-5 whitespace-normal">{result}</p>}</form>;
}
