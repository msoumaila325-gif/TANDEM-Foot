import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Language } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import { Phone, MapPin, Globe, Menu, X, ChevronRight, Award } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenEnrollment: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenEnrollment,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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

  const navLinks = [
    { id: 'about', label: lang === 'en' ? 'About Us' : 'À Propos' },
    { id: 'why-us', label: lang === 'en' ? 'Why TFC' : 'Pourquoi TFC' },
    { id: 'programs', label: lang === 'en' ? 'Programs' : 'Programmes' },
    { id: 'categories', label: lang === 'en' ? 'Age Groups' : 'Catégories' },
    { id: 'staff', label: lang === 'en' ? 'Coaching Staff' : 'Staff Technique' },
    { id: 'facilities', label: lang === 'en' ? 'Facilities' : 'Infrastructures' },
    { id: 'gallery', label: lang === 'en' ? 'Gallery' : 'Galerie' },
    { id: 'news', label: lang === 'en' ? 'News' : 'Actualités' },
    { id: 'contact', label: lang === 'en' ? 'Contact' : 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar with Info & Language */}
      <div className="bg-[#153E75] text-[#DCEBFF] text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>{ACADEMY_INFO.headquarters.neighborhood}, {ACADEMY_INFO.headquarters.city}</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>{ACADEMY_INFO.contacts.phones[0]}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/80 italic font-medium">
              <Award className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>"{ACADEMY_INFO.motto[lang]}"</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 bg-black/20 p-1 rounded-full border border-white/15">
              <Globe className="w-3.5 h-3.5 text-[#60A5FA] ml-1" />
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'fr'
                    ? 'bg-[#1E4E92] text-white shadow-sm'
                    : 'text-[#DCEBFF]/70 hover:text-white'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-[#1E4E92] text-white shadow-sm'
                    : 'text-[#DCEBFF]/70 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#153E75]/90 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
            : 'bg-gradient-to-b from-[#153E75]/95 via-[#153E75]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo size="md" lightText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-[#1E4E92] shadow-sm'
                      : 'text-[#DCEBFF]/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action & Mobile Controls */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Mobile */}
            <div className="flex lg:hidden items-center gap-1 bg-black/20 p-1 rounded-full border border-white/15 mr-1">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  lang === 'fr' ? 'bg-[#1E4E92] text-white' : 'text-[#DCEBFF]/70'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  lang === 'en' ? 'bg-[#1E4E92] text-white' : 'text-[#DCEBFF]/70'
                }`}
              >
                EN
              </button>
            </div>

            {/* Enroll CTA Button */}
            <button
              onClick={onOpenEnrollment}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-[#1E4E92] to-[#2563EB] hover:from-[#153E75] hover:to-[#1E4E92] shadow-blue-glow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
            >
              <span className="relative z-10">
                {lang === 'en' ? 'Join Academy' : 'S\'inscrire'}
              </span>
              <ChevronRight className="w-4 h-4 text-[#DCEBFF] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] sm:top-[68px] bottom-0 bg-[#153E75]/98 backdrop-blur-2xl z-40 flex flex-col p-6 animate-in slide-in-from-top-4 duration-300 border-t border-white/10 overflow-y-auto">
          <div className="flex flex-col gap-2 my-auto py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-base sm:text-lg font-bold text-white hover:bg-[#1E4E92] active:bg-[#1E4E92] transition-colors cursor-pointer"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-5 h-5 text-[#3B82F6]" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/15 mt-auto flex flex-col gap-4">
            <div className="text-xs text-[#DCEBFF]/80 flex flex-col gap-1">
              <span className="font-bold text-white">{ACADEMY_INFO.name}</span>
              <span>{ACADEMY_INFO.headquarters.fullAddress}</span>
              <span>{ACADEMY_INFO.contacts.phones[0]}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnrollment();
              }}
              className="w-full py-4 rounded-2xl font-extrabold text-center text-white bg-gradient-to-r from-[#1E4E92] to-[#2563EB] shadow-lg text-sm sm:text-base cursor-pointer hover:opacity-95 active:scale-98 transition-all"
            >
              {lang === 'en' ? 'Book Trial Session' : 'Réserver une Détection'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
