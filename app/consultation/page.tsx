import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DemoForm from '@/components/consultation/DemoForm';
import { BRAND } from '@/lib/siteConfig';
import { PRIMARY, ACCENT, BG, ON_DARK_MUTED, TEXT, TEXT_MUTED } from '@/lib/theme';

const covers = [
  { title: 'The Employee Experience', desc: 'See how employees build a daily plan, keep to-do lists, set reminders, connect a personal calendar (read-only), share a household calendar and run a weekly review.' },
  { title: 'Privacy', desc: "Employers never see employees' plans, to-dos or reminders. We'll explain exactly what is and is not shared with your organization." },
  { title: 'Rollout', desc: 'Learn how Company IDs work, how employees sign up and what a simple rollout looks like for your organization.' },
  { title: 'Q&A Session', desc: 'Ask anything. Our team will answer your questions about setup, text messaging options and getting started.' },
];

export default function ConsultationPage() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <SiteNav />

      {/* Hero banner */}
      <div className="py-14 px-4 text-center" style={{ background: PRIMARY }}>
        <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5" style={{ background: 'rgba(20,184,166,0.15)', color: ACCENT, border: `1px solid ${ACCENT}` }}>
          No Commitment Required
        </span>
        <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>Book Your Free Demo</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: ON_DARK_MUTED }}>
          Learn how {BRAND}&apos;s daily planner benefit can help your employees. Employers never see employees&apos; plans. We&apos;ll walk you through everything in 30 minutes or less.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <DemoForm />

          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>What we&apos;ll cover</h2>
            <div className="space-y-5">
              {covers.map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: ACCENT }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: TEXT }}>{title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
