import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BLUE, ACCENT, ACCENT_TINT, BG, BTN_PRIMARY, BTN_OUTLINE_ON_LIGHT, TEXT_MUTED, TEXT } from '@/lib/theme';

export default function ProductHero() {
  return (
    <section className="py-20" style={{ background: BG }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_TINT, color: TEXT, border: `1px solid ${ACCENT}` }}>
          The Product
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>
          One simple plan for your whole day.
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: TEXT_MUTED }}>
          DayFlow is an employer-provided daily planner and scheduling app. Build a daily plan, keep to-do lists, set personal reminders, share a household calendar with family, set morning and evening routines, block focus time and do a weekly review. Connect a personal calendar (read-only) so everything is in one place, and choose an optional morning agenda text. Your plans are private and never shared with your employer.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/signup" className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold ${BTN_PRIMARY}`}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/consultation" className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold ${BTN_OUTLINE_ON_LIGHT}`} style={{ border: `2px solid ${BLUE}` }}>
            Book a Demo for Your Team
          </Link>
        </div>
      </div>
    </section>
  );
}
