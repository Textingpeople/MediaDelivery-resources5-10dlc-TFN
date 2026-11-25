import { DISCLAIMER_LINE } from '@/lib/siteConfig';
import { ACCENT, BORDER, TEXT_MUTED } from '@/lib/theme';

export default function Disclaimer() {
  return (
    <div
      className="max-w-4xl mx-auto rounded-xl p-5 text-sm leading-relaxed"
      style={{ background: '#fff', border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, color: TEXT_MUTED }}
    >
      <p>{DISCLAIMER_LINE}</p>
    </div>
  );
}
