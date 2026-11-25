import {
  BRAND, LEGAL_NAME, SUPPORT_EMAIL, PHONE_DISPLAY, PHONE_TEL, ADDRESS_LINE_1, ADDRESS_LINE_2, ADDRESS_COUNTRY, HOURS,
} from '@/lib/siteConfig';
import { BORDER, TEXT_MUTED, TEXT } from '@/lib/theme';

type Email = { label: string; address: string };

export default function CompanyInfo({
  emails = [{ label: 'Support', address: SUPPORT_EMAIL }],
  showHours = true,
}: {
  emails?: Email[];
  showHours?: boolean;
}) {
  return (
    <div className="rounded-2xl p-6 text-sm space-y-2" style={{ background: '#fff', border: `1px solid ${BORDER}`, color: TEXT_MUTED }}>
      <p className="font-semibold" style={{ color: TEXT }}>{LEGAL_NAME} d/b/a {BRAND}</p>
      <p>{ADDRESS_LINE_1}, {ADDRESS_LINE_2}, {ADDRESS_COUNTRY}</p>
      {emails.map((e) => (
        <p key={e.address}>
          <strong style={{ color: TEXT }}>{e.label}:</strong>{' '}
          <a href={`mailto:${e.address}`} className="hover:underline link-blue">{e.address}</a>
        </p>
      ))}
      <p>
        <strong style={{ color: TEXT }}>Phone:</strong>{' '}
        <a href={PHONE_TEL} className="hover:underline link-blue">{PHONE_DISPLAY}</a>
      </p>
      {showHours && (
        <p>
          <strong style={{ color: TEXT }}>Hours:</strong> {HOURS.join('; ')}
        </p>
      )}
    </div>
  );
}
