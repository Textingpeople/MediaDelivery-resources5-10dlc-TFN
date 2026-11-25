import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Disclaimer from '@/components/Disclaimer';
import CompanyInfo from '@/components/CompanyInfo';
import { BRAND, LEGAL_NAME } from '@/lib/siteConfig';
import { ACCENT, ACCENT_TINT, BG, BORDER, BTN_PRIMARY, BTN_OUTLINE_ON_LIGHT, BLUE, TEXT, TEXT_MUTED } from '@/lib/theme';

const values = [
  { title: 'Privacy first', body: 'Your plans are never shared with your employer. What you plan stays yours.' },
  { title: 'Simple by design', body: 'One plan, a handful of tools, and no setup headaches. If it takes more than a few minutes to learn, we have more work to do.' },
  { title: "You're in control", body: 'You choose what to connect and which texts to get. Calendar connections are read-only and text messages are always optional.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <SiteNav />

      {/* Hero */}
      <section className="py-20" style={{ background: BG }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_TINT, color: TEXT, border: `1px solid ${ACCENT}` }}>
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>
            We help people start every day knowing what&apos;s next.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: TEXT_MUTED }}>
            {BRAND} is a daily planner and scheduling app offered by employers as a benefit. It brings your to-dos, reminders and personal calendar into one simple plan.
          </p>
          <p className="text-sm mt-4" style={{ color: TEXT_MUTED }}>{BRAND} is operated by {LEGAL_NAME}.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: '#fff', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>Our mission</h2>
              <p className="leading-relaxed mb-4" style={{ color: TEXT_MUTED }}>
                Everyday life is spread across too many lists and calendars. A work calendar here, a notes app there, a reminder on your phone and a family schedule in a group chat.
              </p>
              <p className="leading-relaxed" style={{ color: TEXT_MUTED }}>
                {BRAND} brings it into one simple plan as an employer benefit, so you can start each day knowing what is next.
              </p>
            </div>
            <div className="rounded-2xl p-8 text-center" style={{ background: ACCENT_TINT, border: `1px solid ${ACCENT}` }}>
              <p className="text-lg font-semibold mb-2" style={{ color: TEXT }}>A benefit employees actually use</p>
              <p className="text-sm" style={{ color: TEXT_MUTED }}>Everyone has a day to plan. A simple, private planner gives employees a calmer start to every morning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: BG }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>What we stand for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ title, body }) => (
              <div key={title} className="rounded-2xl p-6" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: TEXT }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-16" style={{ background: '#fff', borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>Company information</h2>
          <div className="text-left">
            <CompanyInfo />
          </div>
          <p className="text-sm mt-4" style={{ color: TEXT_MUTED }}>{BRAND} is operated by {LEGAL_NAME}, a Wyoming limited liability company.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className={`px-6 py-3 rounded-xl text-sm font-semibold ${BTN_OUTLINE_ON_LIGHT}`} style={{ border: `2px solid ${BLUE}` }}>
              Contact Us
            </Link>
            <Link href="/consultation" className={`px-6 py-3 rounded-xl text-sm font-semibold ${BTN_PRIMARY}`}>
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ background: BG }}>
        <Disclaimer />
      </section>

      <SiteFooter />
    </div>
  );
}
