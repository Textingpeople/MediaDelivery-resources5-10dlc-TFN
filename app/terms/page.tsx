import SampleMessages from '@/components/SampleMessages';
import { LegalLayout, H2, H3, P, UL, A, Callout } from '@/components/legal/LegalUI';
import {
  BRAND, LEGAL_OPENING, DISCLAIMER_LINE, NO_SHARING_SENTENCE, SUPPORT_EMAIL, LEGAL_EMAIL,
  PHONE_DISPLAY, PHONE_TEL, ADDRESS_ONE_LINE, LEGAL_NAME,
} from '@/lib/siteConfig';
import { BORDER } from '@/lib/theme';

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <H2>1. Acceptance of Terms</H2>
      <P>
        These Terms of Service (&quot;Terms&quot;) are between you and {LEGAL_OPENING}. They govern your use of the {BRAND} personal planning app, this website and any related text messaging program (together, the &quot;Service&quot;). By creating an account or using the Service, you agree to these Terms and our <A href="/privacy">Privacy Policy</A>. If you do not agree, do not use the Service.
      </P>

      <H2>2. Description of Service</H2>
      <P>
        {BRAND} is an employer-provided daily planner and scheduling app. Employees build a daily plan, keep to-do lists, set personal reminders and, if they choose, connect a personal calendar (read-only) and opt in to text messages. The Service includes:
      </P>
      <UL>
        <li>A daily plan that combines your events and to-dos in one view</li>
        <li>To-do lists</li>
        <li>Personal reminders delivered in the app or, if you opt in, by text</li>
        <li>Calendar sync with a personal calendar (read-only)</li>
        <li>A shared household calendar for family</li>
        <li>Morning and evening routines</li>
        <li>Focus blocks</li>
        <li>A weekly review</li>
      </UL>

      <H2>3. Eligibility and Accounts</H2>
      <P>
        The Service is available to employees of participating employers. You must be at least 18 years old and have a valid Company ID provided by your employer. You agree to provide accurate information and to keep your account details secure. Your employer&apos;s program administrator may approve or remove access to the Service.
      </P>

      <H2>4. Important Disclaimer</H2>
      <Callout><strong>{DISCLAIMER_LINE}</strong></Callout>

      <H2>5. What We Do Not Do</H2>
      <UL>
        <li>We do not monitor your work activity or report on employees.</li>
        <li>We do not share your plans, to-dos or reminders with your employer.</li>
        <li>Calendar connections are read-only, and you can remove a connection at any time.</li>
        <li>We do not provide medical, financial or legal advice.</li>
        <li>We are not responsible for missed events if a reminder is not delivered. Please do not rely on {BRAND} as your only way to keep track of anything time-sensitive.</li>
      </UL>

      <H2>6. Acceptable Use</H2>
      <P>You agree not to use the Service to:</P>
      <UL>
        <li>Violate any law or the rights of others</li>
        <li>Submit false, abusive or harassing content</li>
        <li>Send unlawful or unsafe content through the Service</li>
        <li>Interfere with or disrupt the Service</li>
        <li>Impersonate any person or entity</li>
      </UL>

      <H2>7. SMS Program</H2>
      <H3>7.1 Message types</H3>
      <P>
        If you opt in, {BRAND} may send two types of text messages: <strong>account notifications</strong> (an optional morning agenda, reminders you set and account updates) and <strong>promotional messages</strong> (planning tips and new features). The two types have separate, optional checkboxes on the sign-up form, and both are unchecked by default. A mobile number is required only if you opt in to texts.
      </P>
      <H3>7.2 Consent</H3>
      <P>
        Opting in to text messages is optional and is not required to submit the sign-up form. Consent is not a condition of purchasing any products or services.
      </P>
      <SampleMessages level="h3" numbering="7.3" />
      <H3>7.4 Frequency, rates and opting out</H3>
      <P>
        Message frequency varies. Message and data rates may apply. Reply <strong>STOP</strong> to any message to opt out at any time; you will receive one confirmation message and then no further texts. Reply <strong>HELP</strong> for help, or contact <A href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</A> or <A href={PHONE_TEL}>{PHONE_DISPLAY}</A>.
      </P>
      <H3>7.5 Carriers</H3>
      <P>Carriers are not liable for delayed or undelivered messages.</P>
      <H3>7.6 Your mobile information</H3>
      <P><strong>{NO_SHARING_SENTENCE}</strong></P>
      <P>See our <A href="/sms-policy">SMS Policy</A> for more detail.</P>

      <H2>8. Service Availability</H2>
      <P>We aim to keep the Service available Monday through Saturday during our support hours, but we do not guarantee uninterrupted or error-free access. We may perform maintenance or make changes to the Service from time to time.</P>

      <H2>9. Intellectual Property</H2>
      <P>The Service and its content, features and branding are owned by {LEGAL_NAME} and protected by intellectual property laws. You may not copy, modify or distribute any part of the Service without our written permission.</P>

      <H2>10. Privacy</H2>
      <P>Your use of the Service is also governed by our <A href="/privacy">Privacy Policy</A>, which explains how we collect and use information.</P>

      <H2>11. Disclaimer of Warranties</H2>
      <P>THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, TO THE FULLEST EXTENT PERMITTED BY LAW.</P>

      <H2>12. Limitation of Liability</H2>
      <P>TO THE MAXIMUM EXTENT PERMITTED BY LAW, {LEGAL_NAME.toUpperCase()} AND ITS OFFICERS, EMPLOYEES AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR DATA, ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SERVICE WILL NOT EXCEED THE AMOUNT YOU PAID US, IF ANY, FOR THE SERVICE IN THE TWELVE MONTHS BEFORE THE CLAIM.</P>

      <H2>13. Termination</H2>
      <P>You may stop using the Service at any time by contacting us. We may suspend or end your access if you violate these Terms or if your employer&apos;s program ends.</P>

      <H2>14. Changes to These Terms</H2>
      <P>We may update these Terms from time to time. We will post the updated Terms on this page with a new &quot;Last updated&quot; date. Continued use of the Service after changes take effect means you accept the updated Terms.</P>

      <H2>15. Governing Law</H2>
      <P>These Terms are governed by the laws of the State of New Jersey, without regard to its conflict-of-laws rules.</P>

      <H2>16. Contact</H2>
      <P>Questions about these Terms? Contact us:</P>
      <div className="rounded-2xl p-6 text-sm space-y-1 mb-6" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
        <p><strong>{LEGAL_NAME}</strong> d/b/a {BRAND}</p>
        <p>{ADDRESS_ONE_LINE}</p>
        <p>Legal: <A href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</A></p>
        <p>Support: <A href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</A></p>
        <p>Phone: <A href={PHONE_TEL}>{PHONE_DISPLAY}</A></p>
      </div>
    </LegalLayout>
  );
}
