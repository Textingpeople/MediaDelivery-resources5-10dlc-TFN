import Link from 'next/link';
import { Waves } from 'lucide-react';
import { BRAND } from '@/lib/siteConfig';
import { ACCENT, BLUE, PRIMARY, TEXT } from '@/lib/theme';

// Text + icon wordmark (no image file needed).
// variant "light" = for midnight blue backgrounds ("Flow" in teal);
// variant "dark" = for white/light backgrounds ("Flow" in royal blue, never teal text).
export default function Logo({
  variant = 'light',
  size = 'md',
}: {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}) {
  const onDark = variant === 'light';
  const fontSize = size === 'lg' ? 26 : size === 'sm' ? 18 : 22;
  const markSize = size === 'lg' ? 40 : size === 'sm' ? 28 : 34;

  return (
    <Link href="/" aria-label={`${BRAND} home`} className="inline-flex items-center gap-2.5 flex-shrink-0">
      <span
        className="inline-flex items-center justify-center rounded-lg"
        style={{ width: markSize, height: markSize, background: onDark ? 'rgba(20,184,166,0.18)' : PRIMARY }}
        aria-hidden="true"
      >
        <Waves style={{ width: markSize * 0.56, height: markSize * 0.56, color: ACCENT }} />
      </span>
      <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize, color: onDark ? '#fff' : TEXT, letterSpacing: '-0.01em', lineHeight: 1 }}>
        Day<span style={{ color: onDark ? ACCENT : BLUE }}>Flow</span>
      </span>
    </Link>
  );
}
