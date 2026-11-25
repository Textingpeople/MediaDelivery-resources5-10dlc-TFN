import type { ReactNode } from 'react';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { LAST_UPDATED } from '@/lib/siteConfig';
import { PRIMARY, ACCENT, BG, BORDER, ON_DARK_MUTED, TEXT, TEXT_MUTED } from '@/lib/theme';

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <SiteNav />
      <section className="py-14" style={{ background: PRIMARY }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>{title}</h1>
          <p className="text-sm" style={{ color: ON_DARK_MUTED }}>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="leading-relaxed" style={{ color: TEXT_MUTED }}>{children}</div>
      </section>
      <SiteFooter />
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-bold mt-10 mb-3 first:mt-0" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: TEXT }}>{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-4">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const className = 'font-medium underline underline-offset-2 hover:opacity-80';
  if (href.startsWith('/')) {
    return <Link href={href} className={`${className} link-blue`}>{children}</Link>;
  }
  return <a href={href} className={`${className} link-blue`}>{children}</a>;
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl p-5 mb-6 text-sm" style={{ background: '#fff', border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}`, color: TEXT }}>
      {children}
    </div>
  );
}
