import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { imgWa0071, pexelsChris, pexelsArafat, imgWa0057 } from '../image';
import {
  ChevronRight,
  ChevronLeft,
  Play,
  Ticket,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Sparkles,
  Trophy,
  X,
  Search,
  Globe
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenEnrollment: () => void;
  onExplorePrograms: () => void;
}

interface HeroSlide {
  id: number;
  category: { en: string; fr: string };
  title: { en: string; fr: string };
  subtitle: { en: string; fr: string };
  ctaText: { en: string; fr: string };
  ctaAction: 'enroll' | 'squad' | 'programs' | 'video';
  image: string;
  badge?: string;
  date?: string;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenEnrollment,
  onExplorePrograms,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const slides: HeroSlide[] = [
    {
      id: 0,
      category: { en: 'GRAND FINAL MATCH REPORT', fr: 'COMPTE-RENDU DE MATCH — FINALE' },
      title: {
        en: 'TANDEM U20 Triumphs 3-1 in Regional Championship Final',
        fr: 'Le TANDEM FOOT CLUB U20 S\'impose 3-1 en Finale Régionale'
      },
      subtitle: {
        en: 'Mamadou Traoré scores double to secure victory at N\'Tabacoro Stadium in front of international scouts.',
        fr: 'Mamadou Traoré inscrit un doublé décisif au Stade de N\'Tabacoro devant les recruteurs internationaux.'
      },
      ctaText: { en: 'Match Report & Highlights', fr: 'Rapport de Match & Résumé' },
      ctaAction: 'video',
      image: imgWa0071,
      badge: 'RÉSULTAT OFFICIEL',
      date: '24 Juillet 2026'
    },
    {
      id: 1,
      category: { en: 'ACADEMY SCOUTING SPOTLIGHT', fr: 'PÉPITE À LA UNE — SCOUTING' },
      title: {
        en: 'Ibrahim Coulibaly (U17) Named West Africa Prospect of the Month',
        fr: 'Ibrahim Coulibaly (U17) Élu Meilleur Prospect d\'Afrique de l\'Ouest'
      },
      subtitle: {
        en: '12 goals and 14 assists in 18 games. High-level technical playmaker attracting European interest.',
        fr: '12 buts et 14 passes décisives en 18 matchs. Meneur de jeu suivi par des clubs européens.'
      },
      ctaText: { en: 'View Player Scout Card', fr: 'Consulter la Fiche Joueur' },
      ctaAction: 'squad',
      image: pexelsChris,
      badge: 'SCOUT REPORT',
      date: 'Saison 2025-2026'
    },
    {
      id: 2,
      category: { en: 'OFFICIAL ACADEMY TRYOUTS 2026', fr: 'JOURNÉES DE DÉTECTION OFFICIELLES 2026' },
      title: {
        en: 'Tryouts & Enrollment Open for Season 2026-2027',
        fr: 'Inscriptions et Détections Ouvertes - Rentrée 2026-2027'
      },
      subtitle: {
        en: 'Categories U11, U13, U15, U17 & U20. Professional athletic & academic sport-study program.',
        fr: 'Catégories U11 à U20. Programme complet sport-études, préparation athlétique et suivi médical.'
      },
      ctaText: { en: 'Book Trial Pass Now', fr: 'Réserver un Pass Détection' },
      ctaAction: 'enroll',
      image: pexelsArafat,
      badge: 'INSCRIPTIONS OUVERTES',
      date: 'Prochaine Session à Bamako'
    },
    {
      id: 3,
      category: { en: 'WORLD-CLASS FACILITIES', fr: 'INFRASTRUCTURES ET ÉQUIPEMENTS' },
      title: {
        en: 'FIFA-Standard Turf Pitch & High-Performance Fitness Hub',
        fr: 'Terrain Synthétique & Centre de Récupération Médicale'
      },
      subtitle: {
        en: 'Empowering athletes with modern video strategy rooms and physical conditioning centers.',
        fr: 'Un cadre d\'entraînement moderne à Bamako conçu pour le développement de la haute performance.'
      },
      ctaText: { en: 'Explore Academy Programs', fr: 'Découvrir nos Programmes' },
      ctaAction: 'programs',
      image: imgWa0057,
      badge: 'COMPLEXE SPORTIF',
      date: 'Complexe N\'Tabacoro'
    }
  ];

  // Auto slider effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlideIndex = (currentSlide + 1) % slides.length;
  const nextSlide = slides[nextSlideIndex];

  const handleCtaClick = (action: string) => {
    if (action === 'enroll') {
      onOpenEnrollment();
    } else if (action === 'squad') {
      const el = document.getElementById('squad');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'programs') {
      onExplorePrograms();
    } else if (action === 'video') {
      setIsVideoModalOpen(true);
    }
  };

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] min-h-[600px] sm:min-h-[720px] lg:min-h-[820px] max-h-[1000px] bg-[#050B14] text-white overflow-hidden select-none">
      {/* Background Slides Stack */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          {/* Main Background Image */}
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title.en}
            className="w-full h-full object-cover filter contrast-125 brightness-75"
          />

          {/* Deep Royal Navy & Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/95 via-[#050B14]/50 to-transparent" />
          <div className="absolute inset-0 bg-[#002244]/40 mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Royal Blue / Electric Glow Effects with floating physics */}
      <motion.div 
        animate={{ y: [0, -20, 0], scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#2563EB]/25 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1D4ED8]/35 rounded-full blur-[130px] pointer-events-none" 
      />

      {/* Floating Animated Academy Badge Top Right */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-28 right-6 sm:right-12 z-20 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white shadow-xl"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
        </span>
        <span className="text-xs font-bold tracking-wider uppercase font-mono">BAMAKO • N'TABACORO</span>
      </motion.div>

      {/* MAIN HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* BOTTOM LEFT: Headline & Actions */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Category Eyebrow */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-[#60A5FA] font-sans">
                    {lang === 'fr' ? slides[currentSlide].category.fr : slides[currentSlide].category.en}
                  </span>
                </div>

                {/* Main Display Headline with pro premium typography style */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.12] font-heading max-w-4xl drop-shadow-2xl">
                  {lang === 'fr' ? slides[currentSlide].title.fr : slides[currentSlide].title.en}
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base lg:text-lg text-slate-200/90 max-w-2xl leading-relaxed font-normal drop-shadow-md">
                  {lang === 'fr' ? slides[currentSlide].subtitle.fr : slides[currentSlide].subtitle.en}
                </p>

                {/* Rounded Pill Action Button */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleCtaClick(slides[currentSlide].ctaAction)}
                    className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm pl-6 pr-2 py-2 rounded-full flex items-center gap-3 transition-colors shadow-xl cursor-pointer group"
                  >
                    <span>{lang === 'fr' ? slides[currentSlide].ctaText.fr : slides[currentSlide].ctaText.en}</span>
                    <div className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* BOTTOM RIGHT: Slide Navigation & Next Preview Thumbnail */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-5">
            
            {/* Slide Counter & Progress Bar */}
            <div className="flex items-center gap-4 text-xs font-black tracking-widest text-white">
              <span className="text-[#60A5FA] text-sm font-mono">
                0{currentSlide + 1}
              </span>
              <div className="w-28 sm:w-36 h-1.5 bg-white/20 relative rounded-full overflow-hidden">
                <motion.div
                  key={`progress-${currentSlide}`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                  className="h-full bg-[#2563EB]"
                />
              </div>
              <span className="text-gray-400 text-sm font-mono">
                0{slides.length}
              </span>
            </div>

            {/* Next Story Card */}
            <div
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="flex items-center gap-3"
            >
              <div className="text-right hidden sm:block">
                <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 block">
                  {lang === 'en' ? 'NEXT HIGHLIGHT' : 'À SUIVRE'}
                </span>
                <span className="text-xs font-bold text-white max-w-[170px] truncate block">
                  {lang === 'fr' ? nextSlide.title.fr : nextSlide.title.en}
                </span>
              </div>

              {/* Interactive Thumbnail Card with Rounded Corners */}
              <button
                onClick={() => setCurrentSlide(nextSlideIndex)}
                className="relative w-36 sm:w-44 h-20 sm:h-24 rounded-xl overflow-hidden border-2 border-white/30 hover:border-[#3B82F6] transition-all duration-300 group cursor-pointer shadow-2xl flex-shrink-0"
              >
                <img
                  src={nextSlide.image}
                  alt="Next slide"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[10px] font-black text-white">
                  <span className="bg-[#2563EB] text-white px-2 py-0.5 rounded-md font-mono">
                    0{nextSlideIndex + 1}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#60A5FA] group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Navigation Arrows */}
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#2563EB] hover:text-white transition-colors cursor-pointer text-white"
                  title="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide(nextSlideIndex)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#2563EB] hover:text-white transition-colors cursor-pointer text-white"
                  title="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-[#0A1A33] border border-white/20"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full bg-black relative flex items-center justify-center">
                <video controls autoPlay className="w-full h-full object-cover">
                  <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-football-player-dribbling-the-ball-41315-large.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="p-6 flex items-center justify-between text-white bg-[#0A1A33]">
                <div>
                  <h3 className="text-lg font-bold font-heading">
                    TANDEM FOOTBALL CLUB • Official Teaser & Highlights
                  </h3>
                  <p className="text-xs text-gray-300">
                    Découvrez les coulisses de l'académie, les infrastructures et les jeunes talents de Bamako.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onOpenEnrollment();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Pass Détection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
