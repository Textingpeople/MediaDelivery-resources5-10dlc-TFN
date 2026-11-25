import { PRIMARY, ACCENT, BORDER, TEXT } from '@/lib/theme';

const STEPS = [
  { n: 1, label: 'Company ID' },
  { n: 2, label: 'Your details' },
];

export default function Stepper({ step }: { step: 1 | 2 }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8" aria-label={`Step ${step} of 2`}>
      {STEPS.map((s, i) => (
        <div key={s.n} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                background: step >= s.n ? PRIMARY : '#F1F5F9',
                color: step >= s.n ? '#fff' : '#475569',
                border: step === s.n ? `2px solid ${ACCENT}` : '2px solid transparent',
              }}
            >
              {s.n}
            </div>
            <span className="text-xs mt-1" style={{ color: step >= s.n ? TEXT : '#475569' }}>{s.label}</span>
          </div>
          {i < STEPS.length - 1 && <div className="w-10 h-px mb-4" style={{ background: step > s.n ? ACCENT : BORDER }} />}
        </div>
      ))}
    </div>
  );
}
