import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRIMARY, ON_DARK_MUTED, BTN_PRIMARY, BTN_OUTLINE_ON_DARK, OUTLINE_ON_DARK_STYLE } from '@/lib/theme';

export default function ProductCta() {
  return (
    <section style={{ background: PRIMARY }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Ready to try it?</h2>
        <p className="text-lg mb-10" style={{ color: ON_DARK_MUTED }}>
          Employees can create an account with their Company ID. Employers can book a demo to see how it works for your team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup" className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold ${BTN_PRIMARY}`}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/consultation" className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold ${BTN_OUTLINE_ON_DARK}`} style={OUTLINE_ON_DARK_STYLE}>
            Book Employer Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
