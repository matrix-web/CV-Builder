import { css } from "styled-components";

export const colorsStyles = css`
  :root {
    /* Black alpha + black */
    --color-black-alpha-50: rgba(18, 18, 18, 0.05);
    --color-black-alpha-100: rgba(18, 18, 18, 0.1);
    --color-black-alpha-200: rgba(18, 18, 18, 0.2);
    --color-black-alpha-300: rgba(18, 18, 18, 0.3);
    --color-black-alpha-400: rgba(18, 18, 18, 0.4);
    --color-black-alpha-500: rgba(18, 18, 18, 0.5);
    --color-black-alpha-600: rgba(18, 18, 18, 0.6);
    --color-black-alpha-700: rgba(18, 18, 18, 0.7);
    --color-black-alpha-800: rgba(19, 19, 19, 0.8);
    --color-black-alpha-900: rgba(18, 18, 18, 0.9);
    --color-black: #131313;


    /*  White Alpha + white */
    --color-white-alpha-50: rgba(255, 255, 255, 0.05);
    --color-white-alpha-100: rgba(255, 255, 255, 0.1);
    --color-white-alpha-200: rgba(255, 255, 255, 0.2);
    --color-white-alpha-300: rgba(255, 255, 255, 0.3);
    --color-white-alpha-400: rgba(255, 255, 255, 0.4);
    --color-white-alpha-500: rgba(255, 255, 255, 0.5);
    --color-white-alpha-600: rgba(255, 255, 255, 0.6);
    --color-white-alpha-700: rgba(255, 255, 255, 0.7);
    --color-white-alpha-800: rgba(255, 255, 255, 0.8);
    --color-white-alpha-900: rgba(255, 255, 255, 0.9);
    --color-white: #FFF;

    /*  Primary */
    --color-primary-50: #EBE9FB;
    --color-primary-100: #D7D3F6;
    --color-primary-200: #AEA6EE;
    --color-primary-300: #867AE5;
    --color-primary-400: #5E4DDC;
    --color-primary-500: #3B28CC;
    --color-primary-600: #2F20A3;
    --color-primary-700: #23187A;
    --color-primary-800: #181052;
    --color-primary-900: #0C0829;

    /* Secondary */
    --color-secondary-50: #E9F0FF;
    --color-secondary-100: #D4E1FF;
    --color-secondary-200: #A8C2FF;
    --color-secondary-300: #7DA4FF;
    --color-secondary-400: #5185FF;
    --color-secondary-500: #2667FF;
    --color-secondary-600: #0046EA;
    --color-secondary-700: #0035B0;
    --color-secondary-800: #002375;
    --color-secondary-900: #00123B;

    /* Tertiary */
    --color-tertiary-50: #E9F4FD;
    --color-tertiary-100: #D3EAFA;
    --color-tertiary-200: #A8D5F5;
    --color-tertiary-300: #7CBFF1;
    --color-tertiary-400: #51AAEC;
    --color-tertiary-500: #2595E7;
    --color-tertiary-600: #1578C1;
    --color-tertiary-700: #105A91;
    --color-tertiary-800: #0B3C61;
    --color-tertiary-900: #051E30;

    /* Success */
    --color-success-50: #F0FDF4;
    --color-success-100: #DCFCE7;
    --color-success-200: #BBF7D0;
    --color-success-300: #86EFAC;
    --color-success-400: #4ADE80;
    --color-success-500: #22C55E;
    --color-success-600: #16A34A;
    --color-success-700: #15803D;
    --color-success-800: #166534;
    --color-success-900: #14532D;

    /* Warning */
    --color-warning-50: #FEFCE8;
    --color-warning-100: #FEF9C3;
    --color-warning-200: #FEF08A;
    --color-warning-300: #FDE047;
    --color-warning-400: #FACC15;
    --color-warning-500: #EAB308;
    --color-warning-600: #CA8A04;
    --color-warning-700: #A16207;
    --color-warning-800: #854D0E;
    --color-warning-900: #713F12;

    /* Error */
    --color-error-50: #FEF2F2;
    --color-error-100: #FEE2E2;
    --color-error-200: #FECACA;
    --color-error-300: #FCA5A5;
    --color-error-400: #F87171;
    --color-error-500: #EF4444;
    --color-error-600: #DC2626;
    --color-error-700: #B91C1C;
    --color-error-800: #991B1B;
    --color-error-900: #7F1D1D;

    /* info */
    --color-info-50: #F3F5FE;
    --color-info-100: #E6EBFD;
    --color-info-200: #C9D6FB;
    --color-info-300: #A8BEFA;
    --color-info-400: #7EA3F8;
    --color-info-500: #3B82F6;
    --color-info-600: #3574DC;
    --color-info-700: #2E65BF;
    --color-info-800: #25529C;
    --color-info-900: #1A3A6E;

    /* Slate */
    --color-slate-50: #F8FAFC;
    --color-slate-100: #F1F5F9;
    --color-slate-200: #E2E8F0;
    --color-slate-300: #CBD5E1;
    --color-slate-400: #94A3B8;
    --color-slate-500: #64748B;
    --color-slate-600: #475569;
    --color-slate-700: #334155;
    --color-slate-800: #1E293B;
    --color-slate-900: #0F172A;

    /* gray */
    --color-gray-50: #F9FAFB;
    --color-gray-100: #F3F4F6;
    --color-gray-200: #E5E7EB;
    --color-gray-300: #D1D5DB;
    --color-gray-400: #9CA3AF;
    --color-gray-500: #6B7280;
    --color-gray-600: #4B5563;
    --color-gray-700: #374151;
    --color-gray-800: #1F2937;
    --color-gray-900: #111827;

    /* zinc */
    --color-zinc-50: #FAFAFA;
    --color-zinc-100: #F4F4F5;
    --color-zinz-200: #E4E4E7;
    --color-zinc-300: #D4D4D8;
    --color-zinc-400: #A1A1AA;
    --color-zinc-500: #71717A;
    --color-zinc-600: #52525B;
    --color-zinc-700: #3F3F46;
    --color-zinc-800: #27272A;
    --color-zinc-900: #18181B;

    /* Neutral */
    --color-neutral-50: #FAFAFA;
    --color-neutral-100: #F5F5F5;
    --color-neutral-200: #E5E5E5;
    --color-neutral-300: #D4D4D4;
    --color-neutral-400: #A3A3A3;
    --color-neutral-500: #737373;
    --color-neutral-600: #525252;
    --color-neutral-700: #404040;
    --color-neutral-800: #262626;
    --color-neutral-900: #171717;

    /* stone */
    --color-stone-50: #FAFAF9;
    --color-stone-100: #F5F5F4;
    --color-stone-200: #E7E5E4;
    --color-stone-300: #D6D3D1;
    --color-stone-400: #A8A29E;
    --color-stone-500: #78716C;
    --color-stone-600: #57534E;
    --color-stone-700: #44403C;
    --color-stone-800: #292524;
    --color-stone-900: #1C1917;

    /* Red */
    --color-red-50: #FEF2F2;
    --color-red-100: #FEE2E2;
    --color-red-200: #FECACA;
    --color-red-300: #FCA5A5;
    --color-red-400: #F87171;
    --color-red-500: #EF4444;
    --color-red-600: #DC2626;
    --color-red-700: #B91C1C;
    --color-red-800: #991B1B;
    --color-red-900: #7F1D1D;

    /* Orange */
    --color-orange-50: #FFF7ED;
    --color-orange-100: #FFEDD5;
    --color-orange-200: #FED7AA;
    --color-orange-300: #FDBA74;
    --color-orange-400: #FB923C;
    --color-orange-500: #F97316;
    --color-orange-600: #EA580C;
    --color-orange-700: #C2410C;
    --color-orange-800: #9A3412;
    --color-orange-900: #7C2D12;

    /* Amber */
    --color-amber-50: #FFFBEB;
    --color-amber-100: #FEF3C7;
    --color-amber-200: #FDE68A;
    --color-amber-300: #FCD34D;
    --color-amber-400: #FBBF24;
    --color-amber-500: #F59E0B;
    --color-amber-600: #D97706;
    --color-amber-700: #B45309;
    --color-amber-800: #92400E;
    --color-amber-900: #78350F;

    /* Yellow */
    --color-yellow-50: #FEFCE8;
    --color-yello-100: #FEF9C3;
    --color-yello-200: #FEF08A;
    --color-yello-300: #FDE047;
    --color-yello-400: #FACC15;
    --color-yello-500: #EAB308;
    --color-yello-600: #CA8A04;
    --color-yello-700: #A16207;
    --color-yello-800: #854D0E;
    --color-yello-900: #713F12;

    /* Lime */
    --color-lime-50: #F7FEE7;
    --color-lime-100: #ECFCCB;
    --color-lime-200: #D9F99D;
    --color-lime-300: #BEF264;
    --color-lime-400: #A3E635;
    --color-lime-500: #84CC16;
    --color-lime-600: #65A30D;
    --color-lime-700: #4D7C0F;
    --color-lime-800: #3F6212;
    --color-lime-900: #365314;

    /* Green */
    --color-green-50: #F0FDF4;
    --color-green-100: #DCFCE7;
    --color-green-200: #BBF7D0;
    --color-green-300: #86EFAC;
    --color-green-400: #4ADE80;
    --color-green-500: #22C55E;
    --color-green-600: #16A34A;
    --color-green-700: #15803D;
    --color-green-800: #166534;
    --color-green-900: #14532D;

    /* Emerald */
    --color-emerald-50: #ECFDF5;
    --color-emerald-100: #D1FAE5;
    --color-emerald-200: #A7F3D0;
    --color-emerald-300: #6EE7B7;
    --color-emerald-400: #34D399;
    --color-emerald-500: #10B981;
    --color-emerald-600: #059669;
    --color-emerald-700: #047857;
    --color-emerald-800: #065F46;
    --color-emerald-900: #064E3B;

    /*  cyan */
    --color-cyan-50: #ECFEFF;
    --color-cyan-100: #CFFAFE;
    --color-cyan-200: #A5F3FC;
    --color-cyan-300: #67E8F9;
    --color-cyan-400: #22D3EE;
    --color-cyan-500: #06B6D4;
    --color-cyan-600: #0891B2;
    --color-cyan-700: #0E7490;
    --color-cyan-800: #155E75;
    --color-cyan-900: #164E63;

    /* Sky */
    --color-sky-50: #EFF6FF;
    --color-sky-100: #DBEAFE;
    --color-sky-200: #BFDBFE;
    --color-sky-300: #93C5FD;
    --color-sky-400: #60A5FA;
    --color-sky-500: #3B82F6;
    --color-sky-600: #2563EB;
    --color-sky-700: #1D4ED8;
    --color-sky-800: #1E40AF;
    --color-sky-900: #1E3A8A;

    /* Blue */
    --color-blue-50: #EFF6FF;
    --color-blue-100: #DBEAFE;
    --color-blue-200: #BFDBFE;
    --color-blue-300: #93C5FD;
    --color-blue-400: #60A5FA;
    --color-blue-500: #3B82F6;
    --color-blue-600: #2563EB;
    --color-blue-700: #1D4ED8;
    --color-blue-800: #1E40AF;
    --color-blue-900: #1E3A8A;

    /* indigo */
    --color-indigo-50: #EEF2FF;
    --color-indigo-100: #E0E7FF;
    --color-indigo-200: #C7D2FE;
    --color-indigo-300: #A5B4FC;
    --color-indigo-400: #818CF8;
    --color-indigo-500: #6366F1;
    --color-indigo-600: #4F46E5;
    --color-indigo-700: #4338CA;
    --color-indigo-800: #3730A3;
    --color-indigo-900: #312E81;

    /* Violet */
    --color-violet-50: #F5F3FF;
    --color-violet-100: #EDE9FE;
    --color-violet-200: #DDD6FE;
    --color-violet-300: #C4B5FD;
    --color-violet-400: #A78BFA;
    --color-violet-500: #8B5CF6;
    --color-violet-600: #7C3AED;
    --color-violet-700: #6D28D9;
    --color-violet-800: #5B21B6;
    --color-violet-900: #4C1D95;

    /* Purple */
    --color-purple-50: #FAF5FF;
    --color-purple-100: #F3E8FF;
    --color-purple-200: #E9D5FF;
    --color-purple-300: #D8B4FE;
    --color-purple-400: #C084FC;
    --color-purple-500: #A855F7;
    --color-purple-600: #9333EA;
    --color-purple-700: #7E22CE;
    --color-purple-800: #6B21A8;
    --color-purple-900: #581C87;

    /* Fuchsia */
    --color-fuchsia-50: #FDF4FF;
    --color-fuchsia-100: #FAE8FF;
    --color-fuchsia-200: #F5D0FE;
    --color-fuchsia-300: #F0ABFC;
    --color-fuchsia-400: #E879F9;
    --color-fuchsia-500: #D946EF;
    --color-fuchsia-600: #C026D3;
    --color-fuchsia-700: #A21CAF;
    --color-fuchsia-800: #86198F;
    --color-fuchsia-900: #701A75;

    /* Pink */
    --color-pink-50: #FDF2F8;
    --color-pink-100: #FCE7F3;
    --color-pink-200: #FBCFE8;
    --color-pink-300: #F9A8D4;
    --color-pink-400: #F472B6;
    --color-pink-500: #EC4899;
    --color-pink-600: #DB2777;
    --color-pink-700: #BE185D;
    --color-pink-800: #9D174D;
    --color-pink-900: #831843;

    /* Rose */
    --color-rose-50: #FFF1F2;
    --color-rose-100: #FFE4E6;
    --color-rose-200: #FECDD3;
    --color-rose-300: #FDA4AF;
    --color-rose-400: #FB7185;
    --color-rose-500: #F43F5E;
    --color-rose-600: #E11D48;
    --color-rose-700: #BE123C;
    --color-rose-800: #9F1239;
    --color-rose-900: #881337;
  }
`;