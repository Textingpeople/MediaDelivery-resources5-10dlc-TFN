import SampleMessages from '@/components/SampleMessages';
import CompanyInfo from '@/components/CompanyInfo';
import { LegalLayout, H2, P, UL, A } from '@/components/legal/LegalUI';
import {
  BRAND, LEGAL_NAME, SUPPORT_EMAIL, PHONE_DISPLAY, PHONE_TEL, NO_SHARING_SENTENCE, NO_SENSITIVE_TEXTS_SENTENCE,
} from '@/lib/siteConfig';

export default function SmsPolicyPage() {
  return (
    <LegalLayout title="SMS Policy">
      <H2>Program</H2>
      <P>
        Program name: {BRAND}. The {BRAND} text messaging program is operated by {LEGAL_NAME}. This page describes how and when we use SMS (text messaging) to communicate with users of the {BRAND} personal planning app.
      </P>

      <H2>How You Opt In</H2>
      <P>
        You can opt in to texts in step 2 of the <A href="/signup">{BRAND} sign-up form</A>. There are two separate optional checkboxes: one for Transactional Account Notification messages and one for Promotional Marketing messages. Both are unchecked by default. A mobile number is required only if you check one of them. Opting in is optional, and consent is not a condition of purchasing any products or services.
      </P>

      <H2>Message Types</H2>
      <UL>
        <li><strong>Account notifications:</strong> an optional morning agenda, reminders you set and account updates.</li>
        <li><strong>Promotional:</strong> planning tips and new features, sent only if you opt in to promotional texts.</li>
      </UL>
      <P>{NO_SENSITIVE_TEXTS_SENTENCE}</P>

      <SampleMessages level="h2" />

      <H2>Message Frequency</H2>
      <P>Message frequency varies.</P>

      <H2>Message &amp; Data Rates</H2>
      <P>Message and data rates may apply, depending on your mobile carrier and plan.</P>

      <H2>Opt Out (STOP)</H2>
      <P>
        You can opt out at any time by replying <strong>STOP</strong> to any message. You will receive one confirmation message, and then you will no longer receive texts from {BRAND}.
      </P>

      <H2>Help (HELP)</H2>
      <P>
        Reply <strong>HELP</strong> to any message for help, or contact us at{' '}
        <A href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</A> or <A href={PHONE_TEL}>{PHONE_DISPLAY}</A>.
      </P>
      <div className="mb-6"><CompanyInfo /></div>

      <H2>Carriers</H2>
      <P>Carriers are not liable for delayed or undelivered messages.</P>

      <H2>Your Mobile Information</H2>
      <P><strong>{NO_SHARING_SENTENCE}</strong></P>

      <H2>Related Policies</H2>
      <P>
        Please also read our <A href="/terms">Terms of Service</A> and <A href="/privacy">Privacy Policy</A>.
      </P>
    </LegalLayout>
  );
}
