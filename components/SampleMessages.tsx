import { SAMPLE_MESSAGES, SAMPLE_MESSAGES_INTRO } from '@/lib/siteConfig';
import { H2, H3, P } from '@/components/legal/LegalUI';
import { BG, BORDER, TEXT } from '@/lib/theme';

export default function SampleMessages({ level, numbering }: { level: 'h2' | 'h3'; numbering?: string }) {
  const Heading = level === 'h2' ? H2 : H3;
  const account = SAMPLE_MESSAGES.filter((m) => m.type === 'account');
  const promotional = SAMPLE_MESSAGES.filter((m) => m.type === 'promotional');

  return (
    <div>
      <Heading>{numbering ? `${numbering} ` : ''}Sample Messages</Heading>
      <P>{SAMPLE_MESSAGES_INTRO}</P>
      <div className="rounded-xl p-6 mb-6 space-y-6" style={{ background: BG, border: `1px solid ${BORDER}` }}>
        <div>
          <h4 className="font-semibold mb-2" style={{ color: TEXT }}>Account notifications</h4>
          <ol start={1} className="list-decimal pl-6 space-y-2">
            {account.map((m) => <li key={m.text}>{m.text}</li>)}
          </ol>
        </div>
        <div>
          <h4 className="font-semibold mb-2" style={{ color: TEXT }}>Promotional</h4>
          <ol start={account.length + 1} className="list-decimal pl-6 space-y-2">
            {promotional.map((m) => <li key={m.text}>{m.text}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
}
