import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { imgWa0057, pexelsPavan, imgWa1526_30, imgWa0071, imgWa0043 } from '../image';
import { ArrowUpRight, ArrowLeft, ArrowRight, Zap, Trophy, ShieldCheck, Users, CheckCircle2, SlidersHorizontal } from 'lucide-react';

interface AcademyBentoProps {
  lang: Language;
  onOpenEnrollment: () => void;
}

export const AcademyBentoSections: React.FC<AcademyBentoProps> = ({ lang, onOpenEnrollment }) => {
  // Card 1 Toggle State (Game Mode vs Training Mode)
  const [gameMode, setGameMode] = useState(true);

  // Services Carousel Card 2 State
  const [facilityIndex, setFacilityIndex] = useState(0);

  const facilities = [
    {
      title: lang === 'en' ? 'FIFA Standard Pitch Access' : 'Accès Terrains Homologués FIFA',
      tag: lang === 'en' ? 'Pitch Access' : 'Accès aux Terrains',
      image: imgWa0057,
      desc: lang === 'en'
        ? 'Step into a space built for players — to grow, compete, and thrive with night lighting.'
        : 'Entrez dans un espace conçu pour les joueurs — pour grandir, rivaliser et s\'épanouir avec éclairage nocturne.',
    },
    {
      title: lang === 'en' ? 'Athletic Performance Gym' : 'Salle de Préparation Physique',
      tag: lang === 'en' ? 'High Performance' : 'Haute Performance',
      image: pexelsPavan,
      desc: lang === 'en'
        ? 'Modern athletic equipment tailored for young football speed, agility, and injury prevention.'
        : 'Équipements athlétiques modernes adaptés à l\'explosivité, l\'agilité et la prévention des blessures.',
    },
    {
      title: lang === 'en' ? 'Tactical Video Room' : 'Centre d\'Analyse Vidéo',
      tag: lang === 'en' ? 'Tactical Intelligence' : 'Intelligence Tactique',
      image: imgWa1526_30,
      desc: lang === 'en'
        ? 'High-definition match breakdowns to accelerate tactical decision-making and positioning.'
        : 'Séances de débriefing vidéo HD pour accélérer la prise de décision et le placement tactique.',
    },
  ];

  const handleNextFacility = () => {
    setFacilityIndex((prev) => (prev + 1) % facilities.length);
  };

  const handlePrevFacility = () => {
    setFacilityIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <div className="bg-white text-slate-900 py-16 sm:py-24 space-y-24 sm:space-y-32">
      
      {/* ==========================================
          SECTION 1: "ABOUT TFC" BENTO GRID & NUMBERS
         ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row (Corporate Refined) */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-900 font-heading leading-snug tracking-tight max-w-4xl">
            {lang === 'en'
              ? 'At Tandem FC, we don\'t just play football — we live it. Since 2024, our academy has been a home for players of all levels, from eager beginners to seasoned pros.'
              : 'Au Tandem Football Club, nous ne faisons pas que jouer au football — nous le vivons. Depuis 2024, notre académie est le foyer des jeunes talents de Bamako, des débutants passionnés aux futurs professionnels.'}
          </h2>
        </div>

        {/* 3-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-16 sm:mb-20">
          
          {/* Bento Card 1: Dark Navy Card with Icon & Interactive Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0B132B] text-white rounded-[2rem] p-8 sm:p-9 flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800"
          >
            {/* Top Icon */}
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#60A5FA] mb-8">
              <Zap className="w-6 h-6" />
            </div>

            {/* Middle Main Text */}
            <div className="space-y-4 my-auto">
              <p className="text-lg sm:text-xl font-normal leading-relaxed text-slate-200">
                {lang === 'en' ? (
                  <>
                    Professional hard & synthetic pitches with tournament-grade lighting & climate prep — play in{' '}
                    <strong className="text-white font-bold">perfect conditions</strong>, in any season.
                  </>
                ) : (
                  <>
                    Terrains synthétiques aux normes FIFA avec éclairage haute intensité & drainage avancé — jouez dans des{' '}
                    <strong className="text-white font-bold">conditions parfaites</strong>, en toute saison.
                  </>
                )}
              </p>
            </div>

            {/* Bottom Toggle Switch */}
            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => setGameMode(!gameMode)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 flex items-center ${gameMode ? 'bg-[#2563EB]' : 'bg-slate-700'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${gameMode ? 'translate-x-6' : 'translate-x-0'}`} />
                </div>
                <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {gameMode 
                    ? (lang === 'en' ? 'Game Mode Active' : 'Mode Match Activé') 
                    : (lang === 'en' ? 'Training Mode' : 'Mode Entraînement')}
                </span>
              </button>
            </div>
          </motion.div>

          {/* Bento Card 2: Electric Image Card with Floating Glass Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-[2rem] overflow-hidden min-h-[380px] sm:min-h-[420px] flex items-center justify-center p-6 shadow-xl group border border-slate-200"
          >
            <img
              src={imgWa0071}
              alt="Coaching TFC"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />

            {/* Floating Centered Glassmorphism Pill (Matches Reference Image) */}
            <div className="relative z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-2xl transition-all cursor-pointer">
              <span>{lang === 'en' ? 'Private & Group Coaching' : 'Cours Indiv. & Collectifs'}</span>
            </div>
          </motion.div>

          {/* Bento Card 3: Light Gray Card with Pro Coaches & Dot Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#F8FAFC] rounded-[2rem] p-8 sm:p-9 flex flex-col justify-between border border-slate-200/90 shadow-md"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight mb-2">
                12+
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {lang === 'en' ? 'Pro Coaches' : 'Coachs & Staff Certifiés'}
              </h3>
              <p className="text-xs text-slate-500 font-normal leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Certified professionals ready to boost your game from first touch to tournament level.'
                  : 'Des professionnels certifiés CAF & FIFA prêts à propulser votre jeu du premier contrôle jusqu\'au niveau pro.'}
              </p>

              {/* Skill Level Rows with Blue Dot Visualizers (Exact match of image) */}
              <div className="space-y-3.5 pt-2">
                
                {/* Row 1: Débutant (U11-U13) */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="w-24 shrink-0">{lang === 'en' ? 'Beginner' : 'Débutant'}</span>
                  <div className="flex items-center gap-1.5 mx-2">
                    {[...Array(10)].map((_, i) => (
                      <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                    ))}
                  </div>
                  <span className="w-6 text-right font-bold text-slate-900">55</span>
                </div>

                {/* Row 2: Intermediate (U15-U17) */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="w-24 shrink-0">{lang === 'en' ? 'Intermediate' : 'Intermédiaire'}</span>
                  <div className="flex items-center gap-1.5 mx-2">
                    {[...Array(8)].map((_, i) => (
                      <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <span key={i} className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    ))}
                  </div>
                  <span className="w-6 text-right font-bold text-slate-900">40</span>
                </div>

                {/* Row 3: Advanced (U19-U20) */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="w-24 shrink-0">{lang === 'en' ? 'Advanced' : 'Élite & Espoirs'}</span>
                  <div className="flex items-center gap-1.5 mx-2">
                    {[...Array(7)].map((_, i) => (
                      <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    ))}
                  </div>
                  <span className="w-6 text-right font-bold text-slate-900">35</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Sub-Row: Facts in Numbers (Exact match of reference image) */}
        <div className="pt-8 border-t border-slate-200 text-center">
          <p className="text-sm sm:text-base font-semibold text-slate-600 mb-10">
            {lang === 'en' ? 'A few more facts about us in numbers' : 'Quelques chiffres clés sur notre académie'}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
                12 000+
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {lang === 'en' ? 'Hours of training annually' : 'Heures d\'entraînement / an'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
                94%
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {lang === 'en' ? 'Player Progression Rate' : 'Taux de Progression Sportive'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
                150+
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {lang === 'en' ? 'Active Academy Members' : 'Joueurs Actifs au Club'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
                40+
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {lang === 'en' ? 'Annual Tournaments & Matches' : 'Matchs & Tournois Annuels'}
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* ==========================================
          SECTION 2: "SERVICES / CURSUS" CARD LAYOUT
         ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-200">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side: Corporate Description + Dark Pill Button */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h3 className="text-base sm:text-xl font-semibold text-slate-900 font-heading leading-snug tracking-tight">
                {lang === 'en'
                  ? 'Explore our full range of coaching, training, and football experiences. From first pass to match point — we\'ve got the right program for you.'
                  : 'Explorez notre gamme complète de coaching, de préparation physique et d\'expérience footballistique. Du premier contrôle aux contrats professionnels — nous avons le programme idéal pour vous.'}
              </h3>
            </div>

            {/* Dark Action Button (Exact match of image) */}
            <div>
              <button
                onClick={onOpenEnrollment}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0B1320] hover:bg-[#1A263D] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all cursor-pointer group active:scale-95"
              >
                <span>{lang === 'en' ? 'Explore More' : 'Explorer nos Programmes'}</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Two Cards Side-by-Side (Matching Reference Image) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* Card 1: Training Programs (Image + Pill Overlay + Arrow) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-[2rem] overflow-hidden min-h-[420px] flex flex-col justify-between p-8 text-white shadow-xl group border border-slate-200"
            >
              <img
                src={imgWa0043}
                alt="Training Programs"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/10" />

              {/* Top Frosted Pill Tag */}
              <div className="relative z-10 self-start bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs font-semibold text-white">
                {lang === 'en' ? 'Training Programs' : 'Programmes de Formation'}
              </div>

              {/* Bottom Content & Arrow Circle */}
              <div className="relative z-10 flex items-end justify-between gap-4 pt-12">
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug max-w-xs">
                  {lang === 'en' 
                    ? 'Programs designed for all ages and abilities.' 
                    : 'Des programmes conçus pour tous les âges et toutes les capacités.'}
                </p>

                <button
                  onClick={onOpenEnrollment}
                  className="w-12 h-12 rounded-full bg-slate-950/80 hover:bg-slate-950 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 cursor-pointer transition-all hover:scale-110 shadow-lg"
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </motion.div>

            {/* Card 2: Pitch Access / Facility Rental with Next/Prev Carousel Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[2rem] border border-slate-200/90 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Top Image Container */}
              <div className="relative h-60 overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={facilityIndex}
                    src={facilities[facilityIndex].image}
                    alt={facilities[facilityIndex].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Floating Top Pill Tag */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3.5 py-1 rounded-full text-xs font-semibold">
                  {facilities[facilityIndex].tag}
                </div>

                {/* Title over Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg font-heading drop-shadow-md">
                  {facilities[facilityIndex].title}
                </div>
              </div>

              {/* Bottom Text & Navigation Controls (Matching Reference Image) */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {facilities[facilityIndex].desc}
                </p>

                {/* Carousel Controls (Exact match of reference image) */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handlePrevFacility}
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
                    aria-label="Previous Facility"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNextFacility}
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
                    aria-label="Next Facility"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
};
