'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Stepper from '@/components/signup/Stepper';
import CompanyIdStep from '@/components/signup/CompanyIdStep';
import DetailsFields from '@/components/signup/DetailsFields';
import ConsentFields from '@/components/signup/ConsentFields';
import ThankYou from '@/components/signup/ThankYou';
import { BRAND, DEMO_COMPANY_ID } from '@/lib/siteConfig';
import { PRIMARY, ACCENT, BG, BORDER, BTN_PRIMARY, TEXT, TEXT_MUTED } from '@/lib/theme';

type Step = 1 | 2 | 3;

const PHONE_ERROR = 'Enter a valid mobile number to receive texts.';
const COMPANY_ID_ERROR = "We couldn't find that Company ID. Check with your HR team.";

// Accepts 10 digits, or 11 digits with a leading US country code "1"
function isValidMobile(raw: string): boolean {
  const digits = raw.replace(/\D/g, '');
  return digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));
}

export default function SignupPage() {
  const [step, setStep] = useState<Step>(1);
  const [companyIdError, setCompanyIdError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    companyId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    smsTransactional: false,
    smsPromotional: false,
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (phoneError && (name === 'phone' || name.startsWith('sms'))) {
      setPhoneError('');
    }
  };

  const handleCompanyIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setCompanyIdError('');
  };

  const handleCompanyIdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.companyId.trim() !== DEMO_COMPANY_ID) {
      setCompanyIdError(COMPANY_ID_ERROR);
      return;
    }
    setCompanyIdError('');
    setStep(2);
  };

  // Front-end only: nothing is sent anywhere and there is no redirect to /verify.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const wantsTexts = formData.smsTransactional || formData.smsPromotional;

    // Phone is required only when an SMS box is checked
    if (wantsTexts && !isValidMobile(formData.phone)) {
      setPhoneError(PHONE_ERROR);
      return;
    }

    if (!formData.termsAccepted) return;

    setPhoneError('');
    setStep(3);
  };

  return (
    <div className="min-h-screen" style={{ background: BG, color: TEXT }}>
      <SiteNav />

      <section className="py-12" style={{ background: '#fff', borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: TEXT, fontFamily: 'Georgia, serif' }}>
            Create your {BRAND} account
          </h1>
          <p className="text-lg" style={{ color: TEXT_MUTED }}>Your employer provides your Company ID.</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-10 pb-20">
        <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: `1px solid ${BORDER}`, boxShadow: '0 4px 24px rgba(11,31,58,0.08)' }}>
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})` }} />
          <div className="p-6 sm:p-10">
            {step < 3 && <Stepper step={step as 1 | 2} />}

            {step === 1 && (
              <CompanyIdStep
                value={formData.companyId}
                error={companyIdError}
                onChange={handleCompanyIdChange}
                onSubmit={handleCompanyIdSubmit}
              />
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold mb-1" style={{ color: TEXT }}>Your details</h2>
                  <p className="text-sm" style={{ color: TEXT_MUTED }}>Step 2 of 2 — Tell us about yourself and choose your text preferences.</p>
                </div>

                <DetailsFields values={formData} phoneError={phoneError} onChange={handleChange} />
                <ConsentFields
                  smsTransactional={formData.smsTransactional}
                  smsPromotional={formData.smsPromotional}
                  termsAccepted={formData.termsAccepted}
                  onChange={handleChange}
                />

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 rounded-xl text-base font-semibold"
                    style={{ background: '#fff', border: `1px solid ${BORDER}`, color: TEXT_MUTED }}
                  >
                    ← Back
                  </button>
                  <button type="submit" className={`flex-1 py-4 rounded-xl text-base font-semibold ${BTN_PRIMARY}`}>
                    Create Account
                  </button>
                </div>
              </form>
            )}

            {step === 3 && <ThankYou />}

            {step < 3 && (
              <div className="mt-8 pt-6 text-center" style={{ borderTop: `1px solid ${BORDER}` }}>
                <p className="text-sm" style={{ color: TEXT_MUTED }}>
                  Already have an account?{' '}
                  <Link href="/login" className="font-semibold hover:underline link-blue">Sign in →</Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
