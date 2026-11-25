import SampleMessages from '@/components/SampleMessages';
import { LegalLayout, H2, P, UL, A, Callout } from '@/components/legal/LegalUI';
import {
  BRAND, LEGAL_OPENING, NO_SHARING_SENTENCE, NO_SENSITIVE_TEXTS_SENTENCE, MOBILE_NEVER_SHARED_SENTENCE,
  SUPPORT_EMAIL, PRIVACY_EMAIL, PHONE_DISPLAY, PHONE_TEL, LEGAL_NAME, ADDRESS_LINE_1, ADDRESS_LINE_2,
} from '@/lib/siteConfig';
import { BORDER } from '@/lib/theme';

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <P>
        This Privacy Policy explains how {LEGAL_OPENING} collects, uses and protects information when you use the {BRAND} personal planning app, this website and our text messaging program.
      </P>

      <H2>1. Information We Collect</H2>
      <UL>
        <li><strong>Account details:</strong> your name and work email, and the Company ID provided by your employer.</li>
        <li><strong>Mobile number (optional):</strong> collected only if you choose to receive texts.</li>
        <li><strong>Your plans:</strong> the to-dos, reminders and plans you create in {BRAND}.</li>
        <li><strong>Calendar events:</strong> read-only calendar events, if you connect a calendar.</li>
        <li><strong>Technical information:</strong> basic device and browser information needed to operate the website.</li>
      </UL>

      <H2>2. How We Use Information</H2>
      <P>We use your information only to show your plan and send the reminders you set. If you opt in to texts, we also use your mobile number to send the text messages you chose, and we use your contact details to provide support and keep the Service secure.</P>
      <Callout><strong>Your plans are never shared with your employer, and {BRAND} does not monitor your work activity.</strong> Your employer&apos;s program administrator can confirm who has access to the benefit, but cannot see your to-dos, reminders, plans or calendar events.</Callout>

      <H2>3. Text Messaging (SMS)</H2>
      <P>
        If you opt in on the sign-up form, we send text messages from {BRAND}. There are two message types: <strong>account notifications</strong> (an optional morning agenda, reminders you set and account updates) and <strong>promotional messages</strong> (planning tips and new features). Each has its own optional checkbox. Both are unchecked by default, opting in is not required to submit the form, and consent is not a condition of purchasing any products or services. Message frequency varies, and message and data rates may apply.
      </P>
      <P>
        Reply <strong>STOP</strong> to any message to opt out; you will receive one confirmation message. Reply <strong>HELP</strong> for help, or contact <A href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</A> or <A href={PHONE_TEL}>{PHONE_DISPLAY}</A>. Carriers are not liable for delayed or undelivered messages.
      </P>
      <P>{NO_SENSITIVE_TEXTS_SENTENCE}</P>
      <SampleMessages level="h3" numbering="3.1" />
      <P><strong>{NO_SHARING_SENTENCE}</strong></P>

      <H2>4. Sharing of Information</H2>
      <P>We do not sell your information. We share information only with service providers that host the app, and when required by law. We never share your plans with your employer. {MOBILE_NEVER_SHARED_SENTENCE}</P>

      <H2>5. Calendar Connections</H2>
      <P>If you connect a personal calendar, {BRAND} has read-only access, which means it can show your events in your plan but cannot create, change or delete them. You can disconnect a calendar at any time, and we will stop reading from it.</P>

      <H2>6. Security</H2>
      <P>We use reasonable administrative, technical and physical safeguards to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</P>

      <H2>7. Retention</H2>
      <P>We keep your information only as long as needed to provide the Service, meet legal obligations, resolve disputes and enforce our agreements. You can ask us to delete your information at any time, subject to those requirements.</P>

      <H2>8. Your Choices</H2>
      <UL>
        <li><strong>Text messages:</strong> reply STOP to any text to opt out. You can opt in to account notifications and promotional texts separately.</li>
        <li><strong>Calendar:</strong> disconnect a connected calendar at any time.</li>
        <li><strong>Access and deletion:</strong> contact us to access, correct or delete your information.</li>
        <li><strong>Email:</strong> contact us to change how we reach you by email.</li>
      </UL>

      <H2>9. Children</H2>
      <P>{BRAND} is not intended for anyone under 18, and we do not knowingly collect information from children under 18. If you believe a child has given us information, contact us and we will delete it.</P>

      <H2>10. Changes to This Policy</H2>
      <P>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a new &quot;Last updated&quot; date.</P>

      <H2>11. Contact</H2>
      <P>Questions about privacy? Contact us:</P>
      <div className="rounded-2xl p-6 text-sm space-y-1 mb-6" style={{ background: '#fff', border: `1px solid ${BORDER}` }}>
        <p><strong>{LEGAL_NAME}</strong> d/b/a {BRAND}</p>
        <p>{ADDRESS_LINE_1}, {ADDRESS_LINE_2}</p>
        <p>Privacy: <A href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</A></p>
        <p>Phone: <A href={PHONE_TEL}>{PHONE_DISPLAY}</A></p>
      </div>
    </LegalLayout>
  );
}
