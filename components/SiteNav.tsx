'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { NAV_LINKS } from '@/lib/siteConfig';
import { PRIMARY, BTN_PRIMARY, BTN_OUTLINE_ON_DARK, OUTLINE_ON_DARK_STYLE } from '@/lib/theme';

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: PRIMARY, borderBottom: '1px solid rgba(255,255,255,0.1)' }} className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo variant="light" />

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-white transition-colors hover:opacity-70">{l.label}</Link>
            ))}
            <div className="w-px h-5" style={{ background: 'rgba(255,255,255,0.25)' }} />
            <Link href="/login" className={`px-5 py-2.5 rounded-lg text-sm font-semibold ${BTN_OUTLINE_ON_DARK}`} style={OUTLINE_ON_DARK_STYLE}>Login</Link>
            <Link href="/signup" className={`px-5 py-2.5 rounded-lg text-sm font-semibold ${BTN_PRIMARY}`}>Get Started</Link>
            <Link href="/consultation" className={`px-5 py-2.5 rounded-lg text-sm font-semibold ${BTN_OUTLINE_ON_DARK}`} style={OUTLINE_ON_DARK_STYLE}>Book Demo</Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-5 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-2 py-2 text-sm font-medium text-white">{l.label}</Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="px-5 py-3 rounded-lg text-sm font-semibold text-center text-white" style={OUTLINE_ON_DARK_STYLE}>Login</Link>
            <Link href="/signup" onClick={() => setOpen(false)} className={`px-5 py-3 rounded-lg text-sm font-semibold text-center ${BTN_PRIMARY}`}>Get Started</Link>
            <Link href="/consultation" onClick={() => setOpen(false)} className="px-5 py-3 rounded-lg text-sm font-semibold text-center text-white" style={OUTLINE_ON_DARK_STYLE}>Book Demo</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
