import Link from 'next/link';
import Logo from '@/components/Logo';
import {
  FOOTER_LINKS, FOOTER_TAGLINE, COPYRIGHT_LINE, DISCLAIMER_LINE,
  SUPPORT_EMAIL, PHONE_DISPLAY, PHONE_TEL, LEGAL_NAME, ADDRESS_LINE_1, ADDRESS_LINE_2,
} from '@/lib/siteConfig';
import { FOOTER_BG, ON_DARK_MUTED } from '@/lib/theme';

const linkClass = 'hover:text-white transition-colors';

export default function SiteFooter() {
  return (
    <footer style={{ background: FOOTER_BG, color: ON_DARK_MUTED }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-3"><Logo variant="light" size="sm" /></div>
            <p className="text-sm leading-relaxed">{FOOTER_TAGLINE}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Employee Access</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.employee.map((l) => <li key={l.label}><Link href={l.href} className={linkClass}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.company.map((l) => <li key={l.label}><Link href={l.href} className={linkClass}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Legal &amp; Contact</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.legal.map((l) => <li key={l.label}><Link href={l.href} className={linkClass}>{l.label}</Link></li>)}
              <li className="pt-1"><a href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</a></li>
              <li><a href={PHONE_TEL} className={linkClass}>{PHONE_DISPLAY}</a></li>
              <li className="pt-1">{LEGAL_NAME}</li>
              <li>{ADDRESS_LINE_1}, {ADDRESS_LINE_2}</li>
            </ul>
          </div>
        </div>

        <p className="border-t border-white/10 pt-6 text-xs leading-relaxed">{DISCLAIMER_LINE}</p>
        <p className="mt-3 text-xs">{COPYRIGHT_LINE}</p>
      </div>
    </footer>
  );
}
