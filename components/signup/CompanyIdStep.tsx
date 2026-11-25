import { ArrowRight } from 'lucide-react';
import { BTN_PRIMARY, TEXT_MUTED, inputStyle, labelStyle, TEXT } from '@/lib/theme';

type Props = {
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function CompanyIdStep({ value, error, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <h2 className="text-xl font-bold mb-1" style={{ color: TEXT }}>Enter your Company ID</h2>
        <p className="text-sm" style={{ color: TEXT_MUTED }}>Step 1 of 2 — Your Company ID is provided by your employer.</p>
      </div>

      <div>
        <label htmlFor="companyId" className="block mb-1.5" style={labelStyle}>Company ID</label>
        <input
          id="companyId"
          name="companyId"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Company ID"
          autoComplete="off"
          aria-describedby={error ? 'companyIdError' : undefined}
          style={inputStyle}
        />
        {error && (
          <p id="companyIdError" role="alert" className="mt-2 text-sm text-red-700">{error}</p>
        )}
      </div>

      <button type="submit" className={`w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 ${BTN_PRIMARY}`}>
        Continue <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
