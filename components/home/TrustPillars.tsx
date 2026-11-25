import { Layers, Sparkles, Lock } from 'lucide-react';
import { ACCENT, ACCENT_TINT, BORDER, TEXT_MUTED, TEXT } from '@/lib/theme';

const pillars = [
  { icon: Layers, title: 'Less juggling', body: 'Everything you need to remember, in one place.' },
  { icon: Sparkles, title: 'Simple by design', body: 'No setup headaches — your plan is ready in minutes.' },
  { icon: Lock, title: 'Completely private', body: 'Your plans are never shared with your employer, and DayFlow never monitors your work.' },
];

export default function TrustPillars() {
  return (
    <section style={{ background: '#fff', borderTop: `1px solid ${BORDER}` }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>Why employees love it</h2>
          <p className="text-lg" style={{ color: TEXT_MUTED }}>Built around your time, your people and your privacy</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: ACCENT_TINT }}>
                <Icon className="w-8 h-8" style={{ color: ACCENT }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: TEXT }}>{title}</h3>
              <p className="leading-relaxed" style={{ color: TEXT_MUTED }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
