'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PHONE_DISPLAY, NO_SHARING_SENTENCE } from '@/lib/siteConfig';
import { ACCENT, ACCENT_TINT, BORDER, BTN_PRIMARY, TEXT_MUTED, inputStyle, TEXT } from '@/lib/theme';

const labelClass = 'block text-xs font-semibold uppercase tracking-widest mb-1.5';
const labelStyle = { color: TEXT_MUTED };

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  // Front-end only thank-you; nothing is sent anywhere.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ background: '#fff', border: `1px solid ${BORDER}` }} role="status">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: ACCENT_TINT }}>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2" style={{ color: TEXT }}>Message received!</h2>
        <p style={{ color: TEXT_MUTED }}>We&apos;ll get back to you within one business day. If it&apos;s urgent, call us at {PHONE_DISPLAY}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl p-8 space-y-5" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
      <h2 className="font-bold text-base mb-2" style={{ color: TEXT }}>Send us a message</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-name" className={labelClass} style={labelStyle}>Name</label>
          <input id="c-name" type="text" required placeholder="Jane Smith"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="c-email" className={labelClass} style={labelStyle}>Email</label>
          <input id="c-email" type="email" required placeholder="jane@company.com"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="c-phone" className={labelClass} style={labelStyle}>Phone (optional)</label>
        <input id="c-phone" type="tel" placeholder="(555) 000-0000"
          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
      </div>

      <div>
        <label htmlFor="c-subject" className={labelClass} style={labelStyle}>Subject</label>
        <select id="c-subject" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
          style={{ ...inputStyle, appearance: 'none' }}>
          <option value="">Select a topic…</option>
          <option>Employee account help</option>
          <option>Employer / HR inquiry</option>
          <option>Billing question</option>
          <option>Technical issue</option>
          <option>SMS opt-out request</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className={labelClass} style={labelStyle}>Message</label>
        <textarea id="c-message" required rows={5} placeholder="Tell us how we can help…"
          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: 'vertical' }} />
      </div>

      <p className="text-xs leading-relaxed" style={{ color: TEXT_MUTED }}>
        By submitting this form, you agree to our{' '}
        <Link href="/privacy" className="underline link-blue">Privacy Policy</Link> and{' '}
        <Link href="/terms" className="underline link-blue">Terms of Service</Link>.
        To opt out of text messages, reply STOP to any text or select &quot;SMS opt-out request&quot; above.
      </p>

      <button type="submit" className={`w-full py-3.5 rounded-xl text-base font-semibold ${BTN_PRIMARY}`}>
        Send Message
      </button>

      <p className="text-xs leading-relaxed" style={{ color: TEXT_MUTED }}>{NO_SHARING_SENTENCE}</p>
    </form>
  );
}
