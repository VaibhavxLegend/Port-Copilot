'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      e.currentTarget.reset();
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm text-gray-300">Name</label>
          <input name="name" required className="mt-1 w-full rounded border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 px-3 py-2 outline-none focus:border-black/30 dark:focus:border-white/30" />
        </div>
        <div>
          <label className="block text-sm text-gray-300">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 px-3 py-2 outline-none focus:border-black/30 dark:focus:border-white/30" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-300">Message</label>
  <textarea name="message" rows="5" required className="mt-1 w-full rounded border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-400 px-3 py-2 outline-none focus:border-black/30 dark:focus:border-white/30" />
      </div>
      <button disabled={status==='loading'} className="rounded bg-brand-500 hover:bg-brand-600 px-5 py-2.5 text-white disabled:opacity-60">
        {status==='loading' ? 'Sending…' : 'Send'}
      </button>
      {status==='success' && <p className="text-green-400">Thanks! I’ll get back to you soon.</p>}
      {status==='error' && <p className="text-red-400">Something went wrong. Please try again.</p>}
    </form>
  );
}
