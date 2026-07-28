import React from 'react';
import { Language } from '../types';
import { ShieldCheck } from 'lucide-react';

interface SponsorsProps {
  lang: Language;
}

export const SponsorsTicker: React.FC<SponsorsProps> = ({ lang }) => {
  const sponsors = [
    "FEMAFOOT • MALI",
    "CAF YOUTH DEVELOPMENT",
    "NIKE FOOTBALL ACADEMY",
    "BAMAKO ATHLETIC ASSOCIATION",
    "WEST AFRICA SCOUTING NETWORK",
    "N'TABACORO SPORTS CENTER"
  ];

  return (
    <section className="py-4 bg-slate-50/90 text-slate-800 border-y border-slate-200/80 overflow-hidden select-none relative z-10">
      <div className="max-w-7xl mx-auto px-4 mb-2 text-center">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
          {lang === 'en' ? 'OFFICIAL PARTNERS & INSTITUTIONAL SUPPORT' : 'PARTENAIRES OFFICIELS & SOUTIENS INSTITUTIONNELS'}
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-1">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-10 sm:gap-14">
          {[...sponsors, ...sponsors, ...sponsors].map((spon, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-slate-700 hover:text-[#153E75] transition-colors cursor-pointer font-heading"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{spon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

