'use client';

import { useState } from 'react';
import { ACCENT, ACCENT_TINT, BG, BORDER, BTN_PRIMARY, TEXT, TEXT_MUTED } from '@/lib/theme';

const labelClass = 'block text-xs font-semibold uppercase tracking-widest mb-1.5';
const fieldClass = 'w-full px-4 py-3 rounded-xl text-sm outline-none transition-all';
const fieldStyle = { border: `1px solid ${BORDER}`, color: TEXT, background: BG };

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  // Front-end only thank-you; nothing is sent anywhere.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }} role="status">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: ACCENT_TINT }}>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2" style={{ color: TEXT }}>Thanks — we got your request!</h2>
        <p style={{ color: TEXT_MUTED }}>We&apos;ll contact you by email or phone to schedule your demo.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-8" style={{ background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
      <h2 className="text-xl font-bold mb-6" style={{ color: TEXT }}>Schedule Your Free Demo</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="d-first" className={labelClass} style={{ color: TEXT_MUTED }}>First Name *</label>
            <input id="d-first" type="text" placeholder="Jane" required className={fieldClass} style={fieldStyle} />
          </div>
          <div>
            <label htmlFor="d-last" className={labelClass} style={{ color: TEXT_MUTED }}>Last Name *</label>
            <input id="d-last" type="text" placeholder="Smith" required className={fieldClass} style={fieldStyle} />
          </div>
        </div>

        <div>
          <label htmlFor="d-company" className={labelClass} style={{ color: TEXT_MUTED }}>Company Name *</label>
          <input id="d-company" type="text" placeholder="Acme Corporation" required className={fieldClass} style={fieldStyle} />
        </div>

        <div>
          <label htmlFor="d-email" className={labelClass} style={{ color: TEXT_MUTED }}>Work Email *</label>
          <input id="d-email" type="email" placeholder="jane@company.com" required className={fieldClass} style={fieldStyle} />
        </div>

        <div>
          <label htmlFor="d-phone" className={labelClass} style={{ color: TEXT_MUTED }}>Phone Number</label>
          <input id="d-phone" type="tel" placeholder="(555) 000-0000" className={fieldClass} style={fieldStyle} />
        </div>

        <div>
          <label htmlFor="d-time" className={labelClass} style={{ color: TEXT_MUTED }}>Best Time to Connect</label>
          <select id="d-time" className={fieldClass} style={{ ...fieldStyle, appearance: 'none' }}>
            <option value="">Select a time preference</option>
            <option>Morning (9am – 12pm)</option>
            <option>Afternoon (12pm – 3pm)</option>
            <option>Late Afternoon (3pm – 5pm)</option>
            <option>I&apos;m flexible</option>
          </select>
        </div>

        <div>
          <label htmlFor="d-size" className={labelClass} style={{ color: TEXT_MUTED }}>Number of Employees</label>
          <select id="d-size" className={fieldClass} style={{ ...fieldStyle, appearance: 'none' }}>
            <option value="">Select company size</option>
            <option>1 – 50 employees</option>
            <option>51 – 200 employees</option>
            <option>201 – 500 employees</option>
            <option>501 – 1,000 employees</option>
            <option>1,000+ employees</option>
          </select>
        </div>

        <div>
          <label htmlFor="d-notes" className={labelClass} style={{ color: TEXT_MUTED }}>Questions or Comments</label>
          <textarea id="d-notes" rows={3} placeholder="Tell us what you're looking for..." className={`${fieldClass} resize-none`} style={fieldStyle} />
        </div>

        <button type="submit" className={`w-full py-4 rounded-xl text-base font-semibold ${BTN_PRIMARY}`}>
          Schedule My Free Demo
        </button>

        <p className="text-xs text-center leading-relaxed" style={{ color: TEXT_MUTED }}>
          Submitting this form does not sign you up for text messages. We&apos;ll contact you by email or phone to schedule your demo.
        </p>
      </form>
    </div>
  );
}
