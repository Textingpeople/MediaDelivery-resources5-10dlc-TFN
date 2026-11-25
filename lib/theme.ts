// DayFlow design tokens (midnight blue / royal blue / teal)
export const PRIMARY = '#0B1F3A'; // midnight blue: header, hero, footer, dark bands, Verify header
export const BLUE = '#1A56DB'; // royal blue: buttons (white text) and links
export const BLUE_HOVER = '#1E429F'; // hover for buttons and links
export const ACCENT = '#14B8A6'; // teal: icons, highlights, pills, step numbers. Never body text on light backgrounds, never a white-text button.
export const ACCENT_TINT = '#F0FDFA'; // tint behind icons and highlight boxes
export const BG = '#F8FAFC';
export const CARD = '#FFFFFF';
export const BORDER = '#E2E8F0';
export const FOOTER_BG = PRIMARY;
export const TEXT = '#1E293B';
export const TEXT_MUTED = '#475569';
// Muted text on midnight blue backgrounds
export const ON_DARK_MUTED = '#CBD5E1';

// Button on any background: royal blue, white text, #1E429F on hover
export const BTN_PRIMARY = 'text-white bg-[#1A56DB] hover:bg-[#1E429F] transition-colors';
// Secondary button on midnight blue: white outline, white text
export const BTN_OUTLINE_ON_DARK = 'text-white hover:bg-white/10 transition-colors';
export const OUTLINE_ON_DARK_STYLE = { border: '2px solid #FFFFFF' } as const;
// Secondary button on light backgrounds: royal blue outline and text
export const BTN_OUTLINE_ON_LIGHT = 'text-[#1A56DB] hover:text-[#1E429F] hover:bg-[#F0FDFA] transition-colors';
export const OUTLINE_ON_LIGHT_STYLE = { border: `2px solid ${BLUE}` } as const;

export const inputStyle = {
  background: '#fff',
  border: `1px solid ${BORDER}`,
  color: TEXT,
  width: '100%',
  borderRadius: '12px',
  padding: '12px 16px',
  fontSize: '14px',
  outline: 'none',
} as const;

export const labelStyle = {
  color: TEXT_MUTED,
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
};
