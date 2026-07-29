import React, { useState } from 'react';
import { Logo } from './Logo';
import { Language, PageRoute } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import { MapPin, Phone, Mail, Send, CheckCircle, Instagram, Facebook, Globe, Shield, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onPageChange?: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onPageChange }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handlePageClick = (e: React.MouseEvent, page: PageRoute) => {
    e.preventDefault();
    if (onPageChange) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#153E75] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E4E92] rounded-full blur-3xl pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info & Motto (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" lightText={true} />

            <p className="text-sm text-[#DCEBFF]/80 leading-relaxed max-w-sm">
              {ACADEMY_INFO.mission[lang]}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
              <span className="text-[10px] text-[#60A5FA] font-extrabold uppercase tracking-widest block">
                {lang === 'en' ? 'ACADEMY MOTTO' : 'DEVISE OFFICIELLE'}
              </span>
              <p className="text-sm font-bold text-white italic mt-1">
                "{ACADEMY_INFO.motto[lang]}"
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
              {lang === 'en' ? 'Quick Links' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#DCEBFF]/80">
              <li><a href="#about" onClick={(e) => handlePageClick(e, 'academie')} className="hover:text-white transition-colors">{lang === 'en' ? 'About TFC' : 'L\'Académie'}</a></li>
              <li><a href="#equipes" onClick={(e) => handlePageClick(e, 'equipes')} className="hover:text-white transition-colors">{lang === 'en' ? 'Our Teams' : 'Nos Équipes'}</a></li>
              <li><a href="#programs" onClick={(e) => handlePageClick(e, 'programmes')} className="hover:text-white transition-colors">{lang === 'en' ? 'Programs' : 'Programmes'}</a></li>
              <li><a href="#media" onClick={(e) => handlePageClick(e, 'media')} className="hover:text-white transition-colors">{lang === 'en' ? 'Media & News' : 'Médias & Actus'}</a></li>
              <li><a href="#contact" onClick={(e) => handlePageClick(e, 'contact')} className="hover:text-white transition-colors">{lang === 'en' ? 'Contact & Admissions' : 'Contact & Inscriptions'}</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
              {lang === 'en' ? 'Programs' : 'Programmes'}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#DCEBFF]/80">
              <li><a href="#programs" onClick={(e) => handlePageClick(e, 'programmes')} className="hover:text-white transition-colors">{lang === 'en' ? 'Technical Mastery' : 'Maîtrise Technique'}</a></li>
              <li><a href="#programs" onClick={(e) => handlePageClick(e, 'programmes')} className="hover:text-white transition-colors">{lang === 'en' ? 'Tactical Intelligence' : 'Intelligence Tactique'}</a></li>
              <li><a href="#programs" onClick={(e) => handlePageClick(e, 'programmes')} className="hover:text-white transition-colors">{lang === 'en' ? 'Goalkeeper Unit' : 'Académie Gardiens'}</a></li>
              <li><a href="#programs" onClick={(e) => handlePageClick(e, 'programmes')} className="hover:text-white transition-colors">{lang === 'en' ? 'Athletic Prep' : 'Préparation Physique'}</a></li>
              <li><a href="#programs" onClick={(e) => handlePageClick(e, 'programmes')} className="hover:text-white transition-colors">{lang === 'en' ? 'Video Analysis' : 'Analyse Vidéo'}</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#60A5FA]">
              {lang === 'en' ? 'Academy Newsletter' : 'Inscrivez-vous'}
            </h4>
            <p className="text-xs text-[#DCEBFF]/70">
              {lang === 'en' ? 'Receive trial dates and tournament news.' : 'Recevez les dates de détection et actualités.'}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-900/50 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'en' ? 'Subscribed successfully!' : 'Abonnement confirmé !'}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  placeholder="email@domain.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:border-[#3B82F6]"
                />
                <button
                  type="submit"
                  className="py-2.5 rounded-xl bg-[#1E4E92] hover:bg-[#2563EB] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Subscribe' : 'S\'abonner'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCEBFF]/60">
          <div>
            © {new Date().getFullYear()} TANDEM FOOT CLUB. {lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'} Founded 12 Aug 2024 in Bamako, Mali.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Privacy Policy' : 'Confidentialité'}</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Terms of Admission' : 'Conditions d\'Admission'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
