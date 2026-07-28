import React from 'react';
import { Language } from '../types';
import { Trophy, Activity, ClipboardList, Award, Flame, ChevronRight } from 'lucide-react';

interface AcademyTrainingBannerProps {
  lang: Language;
}

export const AcademyTrainingBanner: React.FC<AcademyTrainingBannerProps> = ({ lang }) => {
  const newsTickerText = {
    fr: "TANDEM FOOTBALL CLUB U20 S'IMPOSE 3-1 EN FINALE RÉGIONALE • IBRAHIM COULIBALY (U17) NOMMÉ MEILLEUR PROSPECT DU MOIS • INSCRIPTIONS AUX DÉTECTIONS 2026 OUVERTES À BAMAKO N'TABACORO • COMPLEXE SPORTIF NORME FIFA 2026",
    en: "TANDEM FOOTBALL CLUB U20 TRIUMPHS 3-1 IN REGIONAL FINAL • IBRAHIM COULIBALY (U17) NAMED PROSPECT OF THE MONTH • TRYOUTS REGISTRATION OPEN IN BAMAKO N'TABACORO • FIFA STANDARD SYNTHETIC PITCH OPEN"
  };

  return (
    <section className="w-full bg-[#FBFBFB] border-b border-gray-200/80 select-none overflow-hidden">
      {/* 1. TOP TICKER BANNER IN TFC BLUE & RED ACCENT */}
      <div className="w-full bg-[#1E4E92] text-white flex items-center shadow-inner overflow-hidden text-xs sm:text-sm font-sans">
        {/* Left Badge */}
        <div className="bg-[#0A2540] px-4 sm:px-6 py-2.5 font-black uppercase tracking-widest flex items-center gap-2 flex-shrink-0 z-10 shadow-md border-r border-white/20">
          <Flame className="w-4 h-4 text-[#60A5FA] animate-pulse" />
          <span>{lang === 'en' ? 'LATEST NEWS' : 'ACTUALITÉS'}</span>
        </div>

        {/* Marquee Scrolling Ticker */}
        <div className="relative flex-1 overflow-hidden py-2.5 bg-[#1E4E92]">
          <div className="whitespace-nowrap animate-marquee flex items-center gap-8 text-xs font-bold tracking-wide uppercase text-white/95">
            <span>{newsTickerText[lang]}</span>
            <span>•</span>
            <span>{newsTickerText[lang]}</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN WHITE TRAINING PROGRAMS SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        {/* Main Section Heading matching screenshot styling */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading tracking-tight mb-12 sm:mb-16">
          {lang === 'en' ? (
            <>
              Tandem Football Club <span className="text-[#1E4E92] font-heading">Training Programs</span>
            </>
          ) : (
            <>
              Tandem Football Club <span className="text-[#1E4E92] font-heading">Programmes de Formation</span>
            </>
          )}
        </h2>

        {/* 3 Columns Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-left items-start">
          
          {/* Item 1: USSA / Sport-Études */}
          <div className="flex items-start gap-4 sm:gap-5 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-[#1E4E92] flex items-center justify-center text-[#1E4E92] flex-shrink-0 group-hover:bg-[#1E4E92] group-hover:text-white transition-all duration-300 shadow-sm">
              {/* Custom Soccer Player SVG */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
                <circle cx="13.5" cy="4" r="2" />
                <path d="M19 8h-2.5l-2.5 4.5 1.5 6.5h-2l-1.2-5.2-2.3 2.2V21H8v-6.2l3.8-3.8-.8-3.5c-.3.4-.7.8-1.2 1.1L7 10.5 5.6 9.1l2.8-2.8C9.3 5.4 10.6 4.8 12 5h4.5L19 8z" />
                <circle cx="19" cy="19" r="1.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider font-heading mb-2 leading-snug group-hover:text-[#1E4E92] transition-colors">
                {lang === 'en' ? 'USSA (GRADUATE CERTIFICATES)' : 'SPORT-ÉTUDES & DIPLÔMES USSA'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {lang === 'en'
                  ? 'Work in the $400 billion sports industry is among the careers most appealing to today\'s student with academic excellence.'
                  : 'Programme académique complet combinant études scolaires, diplômes certifiés et préparation aux métiers du sport international.'}
              </p>
            </div>
          </div>

          {/* Item 2: WFA Courses / Tactical & Medical */}
          <div className="flex items-start gap-4 sm:gap-5 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-[#1E4E92] flex items-center justify-center text-[#1E4E92] flex-shrink-0 group-hover:bg-[#1E4E92] group-hover:text-white transition-all duration-300 shadow-sm">
              {/* Dual Player Tackle / Physical SVG */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
                <path d="M12 2a2 2 0 100 4 2 2 0 000-4zm-1 6h2v6h-2V8zm-4 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM4 18h16v2H4v-2z" />
                <circle cx="6" cy="6" r="1.5" />
                <circle cx="18" cy="6" r="1.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider font-heading mb-2 leading-snug group-hover:text-[#1E4E92] transition-colors">
                {lang === 'en' ? 'WFA COURS & PRÉPARATION MÉDICALE' : 'COURS TACTIQUES & SÉANCES WFA'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {lang === 'en'
                  ? 'The WFA includes a broad range of introductory medical skills and topics, including patient assessment, shock, and athletic recovery.'
                  : 'Suivi médical spécialisé, analyse vidéo tactique, physiologie athlétique et prévention des blessures selon les standards pro.'}
              </p>
            </div>
          </div>

          {/* Item 3: Professional Training Camps */}
          <div className="flex items-start gap-4 sm:gap-5 group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-[#1E4E92] flex items-center justify-center text-[#1E4E92] flex-shrink-0 group-hover:bg-[#1E4E92] group-hover:text-white transition-all duration-300 shadow-sm">
              {/* Tactical Board / Pitch Icon */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                <path d="M7 7h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wider font-heading mb-2 leading-snug group-hover:text-[#1E4E92] transition-colors">
                {lang === 'en' ? 'PROFESSIONAL TRAINING CAMPS' : 'STAGES PRO & CAMPS D\'ENTRAÎNEMENT'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {lang === 'en'
                  ? 'Professional soccer training programs are available year-round to accommodate demanding off-season and scout showcases.'
                  : 'Stages intensifs d\'immersion professionnelle, confrontations internationales et vitrines de recrutement devant les recruteurs.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
