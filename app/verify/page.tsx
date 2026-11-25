'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { CheckCircle } from 'lucide-react';
import { BRAND, SUPPORT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/siteConfig';
import { PRIMARY, BLUE, ACCENT, BG, BORDER, TEXT_MUTED, TEXT } from '@/lib/theme';

function getLinkError(destination: string | null): string {
  if (!destination) return 'Invalid verification link. Destination is missing.';
  if (!/^https?:\/\//i.test(destination)) {
    return 'Invalid verification link. Destination must be an http or https URL.';
  }
  return '';
}

function VerifyPageContent() {
  const searchParams = useSearchParams();
  // Phone value is initialised from the `phone` query parameter (if present)
  const [phone, setPhone] = useState<string>(() => searchParams.get('phone') ?? '');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const destination = searchParams.get('destination');
  const error = getLinkError(destination);

  const handleConfirm = () => {
    if (error || !destination) return;

    setIsRedirecting(true);

    // Build redirect URL with all parameters except 'phone'
    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      if (key !== 'phone') {
        params.append(key, value);
      }
    });

    window.location.href = `${destination}?${params.toString()}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ background: BG }}>
      <div className="max-w-xl w-full rounded-2xl overflow-hidden" style={{ background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
        {/* Brand header (midnight blue) */}
        <div className="px-6 py-5 text-center" style={{ background: PRIMARY, borderBottom: `4px solid ${ACCENT}` }}>
          <p className="text-lg font-extrabold tracking-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>{BRAND}</p>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: PRIMARY }}>
              <CheckCircle className="w-12 h-12" style={{ color: ACCENT }} />
            </div>

            <h1 className="text-xl sm:text-2xl font-bold mb-6 px-2" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>
              Validate your number.
            </h1>

            {error && (
              <p role="alert" className="mb-6 text-sm font-medium text-red-700 bg-red-50 border border-red-300 rounded-lg p-3">
                {error}
              </p>
            )}

            {/* Phone input */}
            <div className="mb-6">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                aria-label="Phone number"
                className="w-full rounded-lg p-3 sm:p-4 text-lg sm:text-xl font-bold placeholder:text-gray-500 tracking-wider text-center outline-none transition-colors"
                style={{ background: BG, color: TEXT, border: `2px solid ${BORDER}` }}
              />
            </div>

            {/* Confirm button */}
            <button
              onClick={handleConfirm}
              disabled={isRedirecting}
              className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#1E429F]"
              style={{ background: isRedirecting ? '#64748B' : BLUE, cursor: isRedirecting ? 'not-allowed' : 'pointer' }}
            >
              {isRedirecting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Redirecting...
                </span>
              ) : (
                <span className="block sm:inline">Verify Number</span>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="text-center pt-6 space-y-1" style={{ borderTop: `1px solid ${BORDER}` }}>
            <p className="text-xs" style={{ color: TEXT_MUTED }}>Secured by {BRAND}</p>
            <p className="text-xs" style={{ color: TEXT_MUTED }}>
              Need help?{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline link-blue">{SUPPORT_EMAIL}</a>
              {' · '}
              <a href={PHONE_TEL} className="underline link-blue">{PHONE_DISPLAY}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: BG }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto" style={{ borderColor: ACCENT }}></div>
          <p className="mt-4" style={{ color: TEXT_MUTED }}>Loading...</p>
        </div>
      </div>
    }>
      <VerifyPageContent />
    </Suspense>
  );
}
