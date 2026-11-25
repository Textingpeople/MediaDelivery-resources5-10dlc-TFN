import { CalendarSync, EyeOff, Lock, CheckCircle2 } from 'lucide-react';
import { PRIMARY, ACCENT, ACCENT_TINT, BG, BORDER, TEXT_MUTED, TEXT } from '@/lib/theme';

const assurances = [
  { icon: CalendarSync, title: 'Read-only calendar access', desc: 'DayFlow can show the events on your personal calendar, but it can never change them. Disconnect at any time.' },
  { icon: EyeOff, title: 'No work monitoring', desc: 'DayFlow is a personal planning app. It does not monitor your work activity.' },
  { icon: Lock, title: 'Plans never shared with your employer', desc: 'Your to-dos, reminders and plans stay between you and DayFlow.' },
];

export default function PrivateSection() {
  return (
    <section style={{ background: BG }} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>Private by design.</h2>
            <p className="leading-relaxed mb-6" style={{ color: TEXT_MUTED }}>
              Your employer provides DayFlow as a benefit, but your plan is yours. You choose what to connect and which texts to get, and you can change either one whenever you like.
            </p>
            <ul className="space-y-4">
              {assurances.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_TINT }}>
                    <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: TEXT }}>{title}</p>
                    <p className="text-sm" style={{ color: TEXT_MUTED }}>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* App mockup */}
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
            <div className="px-5 py-4 flex items-center justify-between" style={{ background: PRIMARY }}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: ACCENT }} />
              </div>
              <span className="text-xs text-white/60 font-medium">My DayFlow</span>
              <div />
            </div>
            <div className="p-5 space-y-3" style={{ background: BG }}>
              <div className="rounded-xl p-4" style={{ background: ACCENT_TINT, border: `1px solid ${ACCENT}` }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: TEXT }}>Today</span>
                <p className="text-sm font-semibold mt-2 mb-1" style={{ color: TEXT }}>3 events · 4 to-dos</p>
                <p className="text-xs" style={{ color: TEXT_MUTED }}>9:00 Team standup · 12:30 Lunch with Sam · 5:30 Pick up dry cleaning</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: TEXT }}>Focus block</span>
                <p className="text-sm font-semibold mt-2 mb-1" style={{ color: TEXT }}>2:00 – 3:00 Project time</p>
                <p className="text-xs" style={{ color: TEXT_MUTED }}>Protected on your plan.</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
                <div className="flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: TEXT }}>Private</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: TEXT }}>Visible only to you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
