import { ACCENT, BORDER, PRIMARY, TEXT_MUTED, TEXT } from '@/lib/theme';

const steps = [
  { n: '1', title: 'Sign Up', body: 'Create your account with the Company ID from your employer.' },
  { n: '2', title: 'Connect Your Calendar', body: 'Link your personal calendar (read-only) and add your to-dos.' },
  { n: '3', title: 'Plan Your Day', body: 'DayFlow builds a simple daily plan you can adjust in seconds.' },
  { n: '4', title: 'Stay on Track', body: 'Get the reminders you set and an optional morning agenda text.' },
];

export default function HowItWorks() {
  return (
    <section style={{ background: '#fff', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>How it works</h2>
          <p className="text-lg" style={{ color: TEXT_MUTED }}>Four simple steps to a calmer day</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] right-0 h-px" style={{ background: BORDER }} />
              )}
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold" style={{ background: ACCENT, color: PRIMARY }}>
                {s.n}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: TEXT }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
