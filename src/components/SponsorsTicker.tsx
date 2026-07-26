import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

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
    <section className="py-10 bg-[#153E75] text-[#DCEBFF] border-y border-white/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#60A5FA]">
          {lang === 'en' ? 'OFFICIAL PARTNERS & INSTITUTIONAL SUPPORT' : 'PARTENAIRES OFFICIELS & SOUTIENS INSTITUTIONNELS'}
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-12 sm:gap-16">
          {[...sponsors, ...sponsors, ...sponsors].map((spon, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 text-sm sm:text-base font-extrabold tracking-widest text-white/80 hover:text-white transition-colors cursor-pointer font-heading"
            >
              <Globe className="w-4 h-4 text-[#3B82F6]" />
              <span>{spon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
