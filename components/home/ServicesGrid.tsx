import { SERVICES } from '@/lib/services';
import { ACCENT, ACCENT_TINT, BG, BORDER, TEXT_MUTED, TEXT } from '@/lib/theme';

export default function ServicesGrid() {
  return (
    <section style={{ background: BG }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>Everything in one planner</h2>
          <p className="text-lg" style={{ color: TEXT_MUTED }}>Eight simple tools that work together</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="rounded-2xl p-6 transition-all hover:-translate-y-1" style={{ background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 2px 8px rgba(11,31,58,0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: ACCENT_TINT }}>
                <Icon className="w-6 h-6" style={{ color: ACCENT }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: TEXT }}>{label}</h3>
              <p className="text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
