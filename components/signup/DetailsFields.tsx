import { inputStyle, labelStyle } from '@/lib/theme';

type Props = {
  values: { firstName: string; lastName: string; email: string; phone: string };
  phoneError: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// No password field: the account request never collects credentials.
export default function DetailsFields({ values, phoneError, onChange }: Props) {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block mb-1.5" style={labelStyle}>First Name</label>
          <input id="firstName" name="firstName" type="text" required autoComplete="given-name"
            value={values.firstName} onChange={onChange} placeholder="Jane" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1.5" style={labelStyle}>Last Name</label>
          <input id="lastName" name="lastName" type="text" required autoComplete="family-name"
            value={values.lastName} onChange={onChange} placeholder="Smith" style={inputStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block mb-1.5" style={labelStyle}>Work Email</label>
        <input id="email" name="email" type="email" required autoComplete="email"
          value={values.email} onChange={onChange} placeholder="jane@company.com" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="phone" className="block mb-1.5" style={labelStyle}>Mobile Number (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel"
          value={values.phone} onChange={onChange} placeholder="(555) 000-0000"
          aria-invalid={phoneError ? true : undefined}
          aria-describedby={phoneError ? 'phoneError' : undefined}
          style={{ ...inputStyle, ...(phoneError ? { borderColor: '#b91c1c' } : {}) }} />
        {phoneError && (
          <p id="phoneError" role="alert" className="mt-2 text-sm text-red-700">{phoneError}</p>
        )}
      </div>
    </>
  );
}
