import React from 'react';
import { PageRoute, Language } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface PageHeaderProps {
  page: PageRoute;
  lang: Language;
  onPageChange: (page: PageRoute) => void;
  onOpenEnrollment: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  page,
  lang,
  onPageChange,
  onOpenEnrollment,
}) => {
  const getPageConfig = () => {
    switch (page) {
      case 'academie':
        return {
          title: lang === 'en' 
            ? 'Unleash Your Inner Champion Today. All In One Place.' 
            : 'Révélez Le Champion En Vous. Tout Au Même Endroit.',
          subtitle: lang === 'en'
            ? 'Join the ultimate football experience in Bamako — where passion meets performance, and every training brings you closer to victory.'
            : 'Rejoignez l\'expérience footballistique ultime à Bamako — où la passion rencontre la performance, et chaque entraînement vous rapproche de la victoire.',
          bgImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&auto=format&fit=crop',
          buttonText: lang === 'en' ? 'Start your own journey' : 'Commencer l\'Aventure',
        };
      case 'scouting':
        return {
          title: lang === 'en' 
            ? 'Discover Mali\'s Next Football Legends. All In One Hub.' 
            : 'Découvrez Les Pépites Du Football Malien. Prêtes Pour L\'Élite.',
          subtitle: lang === 'en'
            ? 'Access biometric player profiles, tactical radars, match highlights, and verified scouting statistics from U11 to U20 categories.'
            : 'Accédez aux fiches biométriques, radars tactiques, résumés de matchs et statistiques certifiées de nos talents U11 à U20.',
          bgImage: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1920&auto=format&fit=crop',
          buttonText: lang === 'en' ? 'Explore Elite Players' : 'Explorer nos Pépites',
        };
      case 'programmes':
        return {
          title: lang === 'en' 
            ? 'Elite Football Training Curriculum. From U11 To U20.' 
            : 'L\'Excellence De La Formation. De U11 À U20.',
          subtitle: lang === 'en'
            ? 'Master technical agility, tactical intelligence, athletic preparation, and goalkeeper specialization under certified UEFA & CAF standards.'
            : 'Maîtrisez la technique, l\'intelligence tactique, la préparation physique et le jeu de gardien selon les standards FIFA & CAF.',
          bgImage: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1920&auto=format&fit=crop',
          buttonText: lang === 'en' ? 'Join a Program' : 'Inscrire un Jeune Joueur',
        };
      case 'media':
        return {
          title: lang === 'en' 
            ? 'Live News, Highlights & HD Photo Gallery. Real-Time.' 
            : 'Actualités En Direct & Galerie Photos HD. En Temps Réel.',
          subtitle: lang === 'en'
            ? 'Follow match action, tournament highlights, press releases, and photo coverage live from our N\'Tabacoro complex in Bamako.'
            : 'Suivez les résumés de matchs, les résultats de tournois, les communiqués officiels et les reportages photo du complexe de N\'Tabacoro.',
          bgImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920&auto=format&fit=crop',
          buttonText: lang === 'en' ? 'Browse Gallery' : 'Consulter la Galerie',
        };
      case 'contact':
        return {
          title: lang === 'en' 
            ? 'Join Mali\'s Premier Football Family. Right Here in Bamako.' 
            : 'Rejoignez La Famille Du Tandem FC. À N\'Tabacoro, Bamako.',
          subtitle: lang === 'en'
            ? 'Get in touch with our technical staff, register for trial passes, or visit our state-of-the-art facilities in N\'Tabacoro.'
            : 'Prenez contact avec notre staff technique, demandez votre pass de détection ou visitez nos installations à N\'Tabacoro.',
          bgImage: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1920&auto=format&fit=crop',
          buttonText: lang === 'en' ? 'Get Trial Pass' : 'Obtenir un Pass Détection',
        };
      default:
        return {
          title: 'Unleash Your Inner Champion Today. All In One Place.',
          subtitle: 'Join the ultimate football experience in Bamako.',
          bgImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&auto=format&fit=crop',
          buttonText: 'Start your own journey',
        };
    }
  };

  const config = getPageConfig();

  return (
    <div className="relative min-h-[75vh] sm:min-h-[82vh] flex flex-col justify-between pt-28 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden bg-slate-950 text-white select-none">
      
      {/* 1. Immersive Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={config.bgImage}
          alt={config.title}
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-90 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial & linear gradient overlays for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-slate-950/70" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
      </div>

      {/* Center Section: Main Hero Title, Subtitle & Floating Dark Pill CTA */}
      <div className="relative z-10 my-auto text-center max-w-4xl mx-auto py-10 sm:py-16 space-y-6 sm:space-y-8">
        
        {/* Large Elegant Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12] drop-shadow-md">
          {config.title}
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-sm sm:text-lg text-slate-200/90 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-sm px-2">
          {config.subtitle}
        </p>

        {/* Centered Pill Call To Action Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenEnrollment}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0B1320] hover:bg-[#15233C] text-white font-bold text-xs sm:text-sm tracking-wide shadow-2xl border border-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{config.buttonText}</span>
            <div className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>

      {/* Bottom Footer Overlay: Social Links */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-end pt-4 border-t border-white/10">
        
        {/* Sleek Social Media Links */}
        <div className="flex items-center gap-5 sm:gap-6 text-xs font-semibold text-white/80 tracking-wide">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 group"
          >
            <span>Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 group"
          >
            <span>Facebook</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
          </a>
          <a
            href="https://wa.me/22376129035"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 group text-[#22C55E]"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#22C55E]/80 group-hover:text-[#22C55E] transition-colors" />
          </a>
        </div>

      </div>

    </div>
  );
};
