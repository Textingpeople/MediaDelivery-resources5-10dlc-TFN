import Link from 'next/link';
import {
  BRAND, SUPPORT_EMAIL, PHONE_DISPLAY, PHONE_TEL, LEGAL_NAME, ADDRESS_LINE_1, ADDRESS_LINE_2, HOURS,
} from '@/lib/siteConfig';
import { ACCENT, ACCENT_TINT, BORDER, BTN_PRIMARY, TEXT_MUTED, TEXT } from '@/lib/theme';

// Small labels use dark text (teal is never used as text on light backgrounds)
const topicLabel = { color: TEXT } as const;

export default function ContactInfo() {
  return (
    <div className="md:col-span-2 space-y-6">
      <div className="rounded-2xl p-6" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
        <h2 className="font-bold text-base mb-4" style={{ color: TEXT }}>Contact information</h2>
        <div className="space-y-3 text-sm" style={{ color: TEXT_MUTED }}>
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={topicLabel}>Email</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:underline link-blue">{SUPPORT_EMAIL}</a>
          </div>
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={topicLabel}>Phone</p>
            <a href={PHONE_TEL} className="hover:underline link-blue">{PHONE_DISPLAY}</a>
          </div>
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={topicLabel}>Mailing address</p>
            <p>{LEGAL_NAME}</p>
            <p>{ADDRESS_LINE_1}</p>
            <p>{ADDRESS_LINE_2}</p>
          </div>
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={topicLabel}>Hours</p>
            {HOURS.map((h) => <p key={h}>{h}</p>)}
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-6" style={{ background: ACCENT_TINT, border: `1px solid ${ACCENT}` }}>
        <p className="text-sm font-semibold mb-2" style={{ color: TEXT }}>For employers</p>
        <p className="text-sm mb-4" style={{ color: TEXT_MUTED }}>Interested in offering {BRAND} as an employee benefit? Book a free demo with our team.</p>
        <Link href="/consultation" className={`inline-block px-4 py-2.5 rounded-lg text-sm font-semibold ${BTN_PRIMARY}`}>
          Book a Demo →
        </Link>
      </div>
    </div>
  );
}
