import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { Language } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import { ChevronDown, Trophy, ShieldCheck, Users, ArrowRight, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenEnrollment: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenEnrollment,
  onExplorePrograms,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#153E75]">
      {/* Background Media with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic Video or High-Res Stadium Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 scale-105 filter contrast-125 brightness-90"
          poster="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&auto=format&fit=crop"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-football-player-dribbling-the-ball-41315-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Multi-layer Gradient Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#153E75] via-[#153E75]/80 to-[#1E4E92]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent opacity-60" />
      </div>

      {/* Decorative Floating Mesh Patterns */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1E4E92]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DCEBFF] text-xs sm:text-sm font-semibold mb-6 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#60A5FA]" />
          <span>OFFICIAL ACADEMY • BAMAKO, MALI • EST. 12 AUG 2024</span>
        </motion.div>

        {/* Central Official Club Crest Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Logo size="xl" showText={false} />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl font-heading"
        >
          {lang === 'en' ? (
            <>
              Where Your <span className="text-gradient-light font-extrabold underline decoration-[#3B82F6]/50 decoration-4 underline-offset-8">Stadium Dreams</span> Come To Life.
            </>
          ) : (
            <>
              Où Vos <span className="text-gradient-light font-extrabold underline decoration-[#3B82F6]/50 decoration-4 underline-offset-8">Rêves De Stade</span> Prennent Vie.
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-2xl text-[#DCEBFF]/90 max-w-3xl font-normal leading-relaxed"
        >
          {ACADEMY_INFO.mission[lang]}
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onOpenEnrollment}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#1E4E92] via-[#2563EB] to-[#1E4E92] hover:shadow-blue-glow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer border border-white/20"
          >
            <ShieldCheck className="w-5 h-5 text-[#DCEBFF]" />
            <span>{lang === 'en' ? 'Enroll Player Now' : 'Inscrire Un Joueur'}</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={onExplorePrograms}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Play className="w-5 h-5 text-[#60A5FA] fill-[#60A5FA]" />
            <span>{lang === 'en' ? 'Explore Programs' : 'Découvrir Les Programmes'}</span>
          </button>
        </motion.div>

        {/* Floating Stat Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl glass-panel-dark border border-white/20 shadow-2xl"
        >
          <div className="flex flex-col items-center justify-center p-3 text-center border-r border-white/10 last:border-0">
            <div className="flex items-center gap-2 text-3xl sm:text-4xl font-extrabold text-white font-heading">
              <Users className="w-6 h-6 text-[#60A5FA]" />
              <span>150+</span>
            </div>
            <span className="text-xs sm:text-sm text-[#DCEBFF]/80 font-medium mt-1">
              {lang === 'en' ? 'Players Trained' : 'Joueurs Formés'}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 text-center border-r border-white/10 last:border-0 md:border-r">
            <div className="flex items-center gap-2 text-3xl sm:text-4xl font-extrabold text-white font-heading">
              <Trophy className="w-6 h-6 text-[#60A5FA]" />
              <span>18+</span>
            </div>
            <span className="text-xs sm:text-sm text-[#DCEBFF]/80 font-medium mt-1">
              {lang === 'en' ? 'Weekly Sessions' : 'Séances / Semaine'}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 text-center border-r border-white/10 last:border-0">
            <div className="flex items-center gap-2 text-3xl sm:text-4xl font-extrabold text-white font-heading">
              <ShieldCheck className="w-6 h-6 text-[#60A5FA]" />
              <span>100%</span>
            </div>
            <span className="text-xs sm:text-sm text-[#DCEBFF]/80 font-medium mt-1">
              {lang === 'en' ? 'Certified Coaches' : 'Coachs Certifiés CAF'}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 text-center">
            <div className="flex items-center gap-2 text-3xl sm:text-4xl font-extrabold text-white font-heading">
              <Sparkles className="w-6 h-6 text-[#60A5FA]" />
              <span>5</span>
            </div>
            <span className="text-xs sm:text-sm text-[#DCEBFF]/80 font-medium mt-1">
              {lang === 'en' ? 'Age Groups (U11-U20)' : 'Catégories (U11-U20)'}
            </span>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 text-[#DCEBFF]/70 hover:text-white transition-colors flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-xs font-bold uppercase tracking-widest">
            {lang === 'en' ? 'Scroll To Discover' : 'Défiler Pour Découvrir'}
          </span>
          <ChevronDown className="w-6 h-6 text-[#3B82F6]" />
        </motion.a>
      </div>
    </section>
  );
};
