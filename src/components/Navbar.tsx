import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Language, PageRoute } from '../types';
import { Globe, Calendar, ArrowUpRight, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenEnrollment: () => void;
  currentPage: PageRoute;
  onPageChange: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenEnrollment,
  currentPage,
  onPageChange
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Clean corporate/academy multi-page links with concise labels
  const navLinks: { id: PageRoute; label: string }[] = [
    { id: 'home', label: lang === 'en' ? 'Home' : 'Accueil' },
    { id: 'academie', label: lang === 'en' ? 'Academy' : 'Académie' },
    { id: 'scouting', label: 'Scouting' },
    { id: 'programmes', label: lang === 'en' ? 'Programs' : 'Programmes' },
    { id: 'media', label: lang === 'en' ? 'Media' : 'Médias' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageRoute) => {
    setMobileMenuOpen(false);
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6 max-w-7xl mx-auto transition-all duration-300 font-sans select-none">
      {/* Floating White Pill Navbar */}
      <div
        className={`w-full bg-white/95 backdrop-blur-xl rounded-full border border-gray-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-all duration-300 py-2 sm:py-2.5 px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4 flex-nowrap ${
          isScrolled ? 'shadow-[0_15px_40px_rgba(0,0,0,0.18)] border-gray-300/80' : ''
        }`}
      >
        {/* Left: TFC Academy Crest & Name */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center group flex-shrink-0 text-left cursor-pointer border-none bg-transparent whitespace-nowrap"
        >
          <Logo size="sm" lightText={false} />
        </button>

        {/* Center: Clean Page Navigation Links (Strictly Single Line) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-4 flex-nowrap flex-shrink">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs xl:text-sm font-semibold tracking-tight transition-all cursor-pointer font-sans py-1.5 px-2.5 xl:px-3.5 rounded-full whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? 'text-[#2563EB] bg-blue-50/80 font-bold shadow-xs'
                    : 'text-slate-700 hover:text-[#2563EB] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Language, Calendar, & "S'inscrire" Button */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-3 flex-shrink-0 flex-nowrap">
          {/* Language Switcher Pill */}
          <div className="flex items-center gap-0.5 bg-slate-100/90 p-1 rounded-full border border-gray-200/60 flex-shrink-0 whitespace-nowrap">
            <Globe className="w-3.5 h-3.5 text-[#2563EB] ml-1 mr-0.5" />
            <button
              onClick={() => onLanguageChange('fr')}
              className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                lang === 'fr'
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                lang === 'en'
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          {/* Calendar Icon Button */}
          <button
            onClick={() => handleNavClick('scouting')}
            title={lang === 'en' ? 'Match Schedule & Scouting' : 'Calendrier & Scouting'}
            className="w-9 h-9 rounded-full bg-slate-100/90 hover:bg-slate-200/90 border border-gray-200/60 flex items-center justify-center text-[#2563EB] transition-colors cursor-pointer flex-shrink-0 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
          </button>

          {/* "S'inscrire" Dark Navy Pill Button with Blue Arrow Circle */}
          <button
            onClick={onOpenEnrollment}
            className="bg-[#0B1320] hover:bg-[#121E33] text-white font-bold text-xs xl:text-sm pl-3.5 xl:pl-5 pr-1.5 py-1.5 rounded-full flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group flex-shrink-0 whitespace-nowrap active:scale-95"
          >
            <span>{lang === 'en' ? 'Register' : "S'inscrire"}</span>
            <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenEnrollment}
            className="bg-[#0B1320] text-white font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer"
          >
            <span>{lang === 'en' ? 'Register' : "S'inscrire"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#2563EB]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-4 top-20 bg-white/98 backdrop-blur-2xl rounded-3xl border border-gray-200 shadow-2xl p-6 z-50 flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-3 px-4 rounded-xl text-sm font-bold transition-colors cursor-pointer flex items-center justify-between ${
                    isActive ? 'bg-blue-50 text-[#2563EB]' : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#2563EB]" />
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  lang === 'fr' ? 'bg-[#2563EB] text-white' : 'text-slate-600'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  lang === 'en' ? 'bg-[#2563EB] text-white' : 'text-slate-600'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="bg-[#0B1320] text-white font-bold text-xs px-5 py-2.5 rounded-full flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>{lang === 'en' ? 'Register' : "S'inscrire"}</span>
              <ArrowUpRight className="w-4 h-4 text-[#2563EB]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

