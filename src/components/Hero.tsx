import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Language } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import {
  ChevronDown,
  Trophy,
  ShieldCheck,
  Users,
  ArrowRight,
  Play,
  Sparkles,
  MapPin,
  Calendar,
  Ticket,
  CheckCircle2,
  X,
  Volume2,
  VolumeX,
  Activity
} from 'lucide-react';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('U13');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const categories = [
    { id: 'U11', label: 'U11 (8-11 ans)', focus: 'Éveil & Technique de base' },
    { id: 'U13', label: 'U13 (12-13 ans)', focus: 'Maîtrise Tactique & Dribble' },
    { id: 'U15', label: 'U15 (14-15 ans)', focus: 'Vitesse & Intelligence de Jeu' },
    { id: 'U17', label: 'U17 (16-17 ans)', focus: 'Préparation Haute Performance' },
    { id: 'U20', label: 'U20 (18-20 ans)', focus: 'Passerelle Professionnelle' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 overflow-hidden bg-[#0A1A33] text-white selection:bg-[#2563EB] selection:text-white">
      {/* Background Cinematic Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-30 scale-105 filter contrast-125 brightness-75"
          poster="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&auto=format&fit=crop"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-football-player-dribbling-the-ball-41315-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Layered Gradient Blends */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33] via-[#0A1A33]/85 to-[#0F3875]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E4E92]/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      </div>

      {/* Decorative Floating Mesh & Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#1E4E92]/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#2563EB]/25 rounded-full blur-[100px] pointer-events-none" />

      

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Hero Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action Controls (7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12] sm:leading-[1.08] font-heading"
            >
              {lang === 'en' ? (
                <>
                  Forge Your Legacy At <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-white to-[#3B82F6] font-black">TANDEM FOOTBALL CLUB</span>
                </>
              ) : (
                <>
                  Forger L'Avenir Du <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-white to-[#3B82F6] font-black">Football Malien</span> Avec Élégance
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-lg md:text-xl text-[#DCEBFF]/85 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {lang === 'en'
                ? 'Developing technical excellence, tactical intelligence, and professional discipline for young athletes in Bamako.'
                : 'Centre de formation d’excellence à Bamako. Nous révélons le potentiel technique, physique et mental des jeunes talents.'}
            </motion.p>

            {/* Interactive Age Category Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-3.5 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-3"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
                <span>{lang === 'en' ? 'Select Squad Category:' : 'Catégories D\'Âge Requis:'}</span>
                <span className="text-emerald-400 flex items-center gap-1 text-[11px] sm:text-xs">
                  <Activity className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{categories.find(c => c.id === selectedCategory)?.focus}</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-[#1E4E92] to-[#2563EB] text-white shadow-blue-glow scale-105 border border-white/30'
                        : 'bg-white/10 hover:bg-white/20 text-[#DCEBFF] border border-white/10'
                    }`}
                  >
                    {cat.id}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenEnrollment}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-extrabold text-white bg-gradient-to-r from-[#1E4E92] via-[#2563EB] to-[#1E4E92] hover:shadow-blue-glow-lg hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer border border-white/20 shadow-2xl"
              >
                <Ticket className="w-5 h-5 text-[#DCEBFF]" />
                <span>{lang === 'en' ? 'Get Trial Pass' : 'Obtenir Un Pass Détection'}</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm font-extrabold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#60A5FA] fill-[#60A5FA]" />
                <span>{lang === 'en' ? 'Watch Academy Teaser' : 'Vidéo De Présentation'}</span>
              </button>
            </motion.div>

            {/* Social Proof / Avatars */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-[#DCEBFF]/80">
              <div className="flex -space-x-3">
                <img className="w-9 h-9 rounded-full border-2 border-[#0A1A33] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Player" />
                <img className="w-9 h-9 rounded-full border-2 border-[#0A1A33] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Player" />
                <img className="w-9 h-9 rounded-full border-2 border-[#0A1A33] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" alt="Player" />
              </div>
              <div>
                <span className="font-extrabold text-white">150+ Joueurs</span> inscrits au TFC Bamako
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Card Spotlight (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Interactive Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-md rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 p-6 shadow-2xl space-y-6 relative group hover:border-[#3B82F6]/50 transition-all duration-500"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <Logo size="sm" showText={true} lightText={true} />
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-extrabold uppercase">
                  CENTRE AGRÉÉ
                </span>
              </div>

              {/* Central Shield Crest Highlight */}
              <div className="relative py-6 flex items-center justify-center">
                <div className="absolute w-40 h-40 bg-[#2563EB]/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
                <Logo size="xl" showText={false} />
              </div>

              {/* Match / Session Countdown Box */}
              <div className="p-4 rounded-2xl bg-[#0A1A33]/80 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#60A5FA] font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Prochaine Session Détection
                  </span>
                  <span className="text-white font-mono font-bold">Bamako</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="text-sm font-bold text-white font-heading">Terrain de N'Tabacoro</div>
                    <div className="text-xs text-gray-400">Samedi Prochain • 08h00 - 11h30</div>
                  </div>
                  <button
                    onClick={onOpenEnrollment}
                    className="px-3.5 py-1.5 rounded-xl bg-[#1E4E92] hover:bg-[#2563EB] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Réserver
                  </button>
                </div>
              </div>

              {/* Key Highlights Pill Row */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#60A5FA]" />
                  <div>
                    <div className="font-bold text-white">Terrain Synthétique</div>
                    <div className="text-[10px] text-gray-400">Aux Normes FIFA</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
                  <div>
                    <div className="font-bold text-white">Suivi Scolaire</div>
                    <div className="text-[10px] text-gray-400">Équilibre & Études</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stat Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-2xl"
        >
          <div className="flex flex-col items-center justify-center p-3 text-center border-r border-white/10 last:border-0">
            <div className="flex items-center gap-2 text-3xl sm:text-4xl font-black text-white font-heading">
              <Users className="w-6 h-6 text-[#60A5FA]" />
              <span>150+</span>
            </div>
            <span className="text-xs text-[#DCEBFF]/80 font-semibold mt-1">
              {lang === 'en' ? 'Young Athletes Formed' : 'Joueurs Formés'}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 text-center border-r border-white/10 last:border-0 md:border-r">
            <div className="flex items-center gap-2 text-3xl sm:text-4xl font-black text-white font-heading">
              <Trophy className="w-6 h-6 text-[#60A5FA]" />
              <span>18+</span>
            </div>
            <span className="text-xs text-[#DCEBFF]/80 font-semibold mt-1">
              {lang === 'en' ? 'Weekly Training Hours' : 'Séances Hebdomadaires'}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 text-center border-r border-white/10 last:border-0">
            <div className="flex items-center gap-2 text-3xl sm:text-4xl font-black text-white font-heading">
              <ShieldCheck className="w-6 h-6 text-[#60A5FA]" />
              <span>100%</span>
            </div>
            <span className="text-xs text-[#DCEBFF]/80 font-semibold mt-1">
              {lang === 'en' ? 'CAF Certified Staff' : 'Coachs Diplômés CAF'}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 text-center">
            <div className="flex items-center gap-2 text-3xl sm:text-4xl font-black text-white font-heading">
              <Sparkles className="w-6 h-6 text-[#60A5FA]" />
              <span>5</span>
            </div>
            <span className="text-xs text-[#DCEBFF]/80 font-semibold mt-1">
              {lang === 'en' ? 'Squad Categories (U11-U20)' : 'Catégories D\'Âge (U11-U20)'}
            </span>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 text-[#DCEBFF]/70 hover:text-white transition-colors flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">
            {lang === 'en' ? 'Scroll To Discover TFC' : 'Découvrir L\'Académie'}
          </span>
          <ChevronDown className="w-5 h-5 text-[#3B82F6]" />
        </motion.a>
      </div>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0A1A33] border border-white/20"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full bg-black relative flex items-center justify-center">
                <video
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-football-player-dribbling-the-ball-41315-large.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-6 flex items-center justify-between text-white">
                <div>
                  <h3 className="text-lg font-bold font-heading">
                    TANDEM FOOTBALL CLUB • Film de Présentation
                  </h3>
                  <p className="text-xs text-gray-400">
                    Découvrez le quotidien, la discipline et les infrastructures de nos jeunes à Bamako.
                  </p>
                </div>
                <button
                  onClick={onOpenEnrollment}
                  className="px-5 py-2.5 rounded-xl bg-[#1E4E92] hover:bg-[#2563EB] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Inscrire Mon Enfant
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
