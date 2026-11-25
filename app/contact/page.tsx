import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import { ACCENT, ACCENT_TINT, BG, TEXT, TEXT_MUTED } from '@/lib/theme';

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <SiteNav />

      {/* Header */}
      <section className="py-16" style={{ background: BG }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_TINT, color: TEXT, border: `1px solid ${ACCENT}` }}>
            Contact Us
          </span>
          <h1 className="text-4xl font-bold mb-4" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>
            We&apos;re here to help.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: TEXT_MUTED }}>
            Have a question about the app, your account, or how to get your company enrolled? Reach out and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10">
            <ContactInfo />
            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
