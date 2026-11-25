import Link from 'next/link';
import { SUPPORT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/siteConfig';
import { ACCENT, ACCENT_TINT, BTN_PRIMARY, TEXT_MUTED, TEXT } from '@/lib/theme';

export default function ThankYou() {
  return (
    <div className="text-center py-4">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: ACCENT_TINT }}>
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-3" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>Request received</h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
        Thanks! Your DayFlow account request has been sent to your employer&apos;s program admin. If you opted in to texts, you&apos;ll get a confirmation text from DayFlow. Reply STOP to opt out, HELP for help.
      </p>
      <p className="text-sm mb-8" style={{ color: TEXT_MUTED }}>
        Questions? Contact us at{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="underline link-blue">{SUPPORT_EMAIL}</a>{' '}
        or <a href={PHONE_TEL} className="underline link-blue">{PHONE_DISPLAY}</a>.
      </p>
      <Link href="/" className={`inline-block px-8 py-4 rounded-xl text-base font-semibold ${BTN_PRIMARY}`}>
        Back to Home
      </Link>
    </div>
  );
}
