'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/Logo';
import { BRAND } from '@/lib/siteConfig';
import { PRIMARY, ACCENT, ACCENT_TINT, BG, BORDER, BTN_PRIMARY, TEXT_MUTED, inputStyle, labelStyle, TEXT } from '@/lib/theme';

export default function LoginPage() {
  const [showNotice, setShowNotice] = useState(false);

  // Front-end only: nothing is stored, logged or sent anywhere,
  // and this form does not collect or send a password.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setShowNotice(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: BG }}>
      <div className="w-full max-w-md">

        <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }} />

          <div className="p-8 sm:p-10">
            <div className="flex justify-center mb-8">
              <div className="rounded-xl px-4 py-3" style={{ background: PRIMARY }}>
                <Logo variant="light" />
              </div>
            </div>

            <h1 className="text-2xl font-bold mb-1 text-center" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>Welcome back</h1>
            <p className="text-sm mb-8 text-center" style={{ color: TEXT_MUTED }}>Sign in to open your daily plan.</p>

            <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
              <div>
                <label htmlFor="login-email" className="block mb-1.5" style={labelStyle}>Work Email</label>
                <input id="login-email" type="email" name="email" placeholder="jane@company.com" style={inputStyle} />
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 ${BTN_PRIMARY}`}
              >
                Sign In <ArrowRight className="w-4 h-4" />
              </button>

              {showNotice && (
                <p role="status" className="px-4 py-3 rounded-xl text-sm" style={{ background: ACCENT_TINT, border: `1px solid ${ACCENT}`, color: TEXT }}>
                  Your {BRAND} account opens once your employer&apos;s program is active. New here?{' '}
                  <Link href="/signup" className="font-semibold underline link-blue">Create your account</Link>.
                </p>
              )}
            </form>

            <div className="mt-6 pt-6 text-center" style={{ borderTop: `1px solid ${BORDER}` }}>
              <p className="text-sm" style={{ color: TEXT_MUTED }}>
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="font-semibold hover:underline link-blue">
                  Create one here →
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs" style={{ color: TEXT_MUTED }}>Secured by {BRAND}</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: TEXT_MUTED }}>
          <Link href="/" className="hover:underline">← Back to home</Link>
        </p>
      </div>
    </div>
  );
}
