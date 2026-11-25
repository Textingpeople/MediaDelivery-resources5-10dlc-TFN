import Link from 'next/link';
import { ArrowRight, Sun, CalendarCheck, CheckCircle2 } from 'lucide-react';
import { PRIMARY, BLUE, ACCENT, ACCENT_TINT, ON_DARK_MUTED, BTN_PRIMARY, BTN_OUTLINE_ON_DARK, OUTLINE_ON_DARK_STYLE, TEXT, TEXT_MUTED } from '@/lib/theme';

export default function Hero() {
  return (
    <section style={{ background: PRIMARY }} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(20,184,166,0.15)', color: ACCENT, border: `1px solid ${ACCENT}` }}>
              Exclusive Employee Benefit
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
              Put your day
              <br />
              <span style={{ color: ACCENT }}>in flow.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: ON_DARK_MUTED }}>
              One simple planner for your to-dos, reminders and personal calendar — plus a morning text that tells you what&apos;s ahead. Available exclusively as an employee benefit.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/signup" className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold ${BTN_PRIMARY}`}>
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold ${BTN_OUTLINE_ON_DARK}`} style={OUTLINE_ON_DARK_STYLE}>
                Login
              </Link>
              <Link href="/consultation" className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold ${BTN_OUTLINE_ON_DARK}`} style={OUTLINE_ON_DARK_STYLE}>
                For Employers — Book Demo
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-30" style={{ background: `linear-gradient(135deg, ${ACCENT}, transparent)` }} />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #12315C 100%)', border: '1px solid rgba(20,184,166,0.35)', minHeight: '400px' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pb-40 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <p className="text-white text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>More calm mornings like this.</p>
                <p className="text-sm" style={{ color: ON_DARK_MUTED }}>Less juggling. More knowing what&apos;s next.</p>
              </div>

              {/* App preview card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl p-4 shadow-lg" style={{ background: 'rgba(255,255,255,0.98)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_TINT }}>
                    <CalendarCheck className="w-4 h-4" style={{ color: ACCENT }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: TEXT }}>Today</p>
                    <p className="text-xs leading-relaxed" style={{ color: TEXT_MUTED }}>
                      9:00 Team standup · 12:30 Lunch with Sam · 5:30 Pick up dry cleaning
                    </p>
                    <p className="text-xs font-semibold mt-1" style={{ color: TEXT }}>4 to-dos left</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  <span className="text-xs font-medium" style={{ color: BLUE }}>Your plan, in one place</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
