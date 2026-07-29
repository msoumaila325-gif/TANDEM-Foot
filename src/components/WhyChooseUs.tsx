import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { ArrowUpRight, Check, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { imgWa1630, imgWa0057 } from '../image';

interface WhyChooseUsProps {
  lang: Language;
  onOpenEnrollment?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang, onOpenEnrollment }) => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight leading-[1.1]">
              {lang === 'fr' 
                ? 'Un Cadre de Formation Structuré à Bamako' 
                : 'A Structured Training Environment in Bamako'}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {lang === 'fr'
                ? 'De U11 à U20, nous accueillons les jeunes joueurs pour développer leurs compétences techniques et tactiques. Entraînements ciblés, suivi individuel et infrastructures adaptées à N\'Tabacoro.'
                : 'From U11 to U20, we train young players in Bamako. Targeted sessions, individual progress tracking, and purpose-built pitch facilities in N\'Tabacoro.'}
            </p>
          </div>
        </div>

        {/* Bento Grid Cards Layout Matching Reference Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT BENTO CARD (Tall Image Card with Bullets & Pill Button) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden min-h-[500px] sm:min-h-[560px] flex flex-col justify-end p-8 sm:p-12 border border-slate-200/90 shadow-xl group"
          >
            {/* Background Image */}
            <img
              src={imgWa1630}
              alt="Tandem Football Training"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/10" />

            {/* Card Bottom Content */}
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                {lang === 'fr' ? 'Le Football pour Tous les Jeunes' : 'Football for Everyone'}
              </h3>

              {/* Bullet Points with Green Circles */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200 font-medium max-w-xl">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center text-white flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="text-white font-bold">{lang === 'fr' ? 'Apprendre des Meilleurs' : 'Learn from the Best'}</strong> – {lang === 'fr' ? 'Accédez aux conseils tactiques et techniques des coachs certifiés CAF.' : 'Access expert insights, tactical drills, and football tips.'}
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center text-white flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="text-white font-bold">{lang === 'fr' ? 'Connecter avec les Recruteurs' : 'Connect with Scouts'}</strong> – {lang === 'fr' ? 'Rejoignez un réseau actif reliant Bamako aux clubs pros d\'Afrique et d\'Europe.' : 'Join a vibrant community of players and international scouts.'}
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center text-white flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong className="text-white font-bold">{lang === 'fr' ? 'Jouer avec Confiance' : 'Play with Confidence'}</strong> – {lang === 'fr' ? 'Profitez de terrains aux normes et d\'un suivi biométrique professionnel.' : 'Find high-quality pitches and dedicated support near you.'}
                  </span>
                </li>
              </ul>

              {/* Action Pill Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenEnrollment}
                  className="bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-md text-white font-bold text-xs sm:text-sm pl-6 pr-2 py-2 rounded-full inline-flex items-center gap-3 transition-all cursor-pointer active:scale-95 group/btn shadow-lg"
                >
                  <span>{lang === 'fr' ? 'Rejoindre L\'Académie' : 'Get Started Now'}</span>
                  <div className="w-9 h-9 rounded-full bg-[#22C55E] text-white flex items-center justify-center group-hover/btn:scale-105 transition-transform shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT BENTO CARD (Top Image with Floating Website Pill + Bottom Content Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Top Image Box with URL Floating Pill */}
            <div className="relative rounded-[2rem] overflow-hidden h-64 sm:h-72 border border-slate-200/90 shadow-md group">
              <img
                src={imgWa0057}
                alt="Aerial Stadium View"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Floating Pill Tag at Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-lg transition-colors">
                <span>www.tandemfootclub.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#22C55E]" />
              </div>
            </div>

            {/* Bottom Content Card */}
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200/90 shadow-md flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#153E75] font-heading tracking-tight leading-tight">
                  {lang === 'fr' 
                    ? 'Rejoignez Une Académie Passionnée' 
                    : 'Join a Passionate Football Community'}
                </h3>

                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {lang === 'fr'
                    ? 'Développez vos compétences aux côtés d\'autres jeunes footballeurs passionnés qui partagent vos ambitions. Élevez votre niveau grâce à un encadrement individualisé, des stages intensifs et des opportunités uniques.'
                    : 'Network with other players who share your passion and improve your game through shared experiences, exclusive showcase matches, and expert advice.'}
                </p>
              </div>

              {/* Link CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenEnrollment}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#153E75] hover:text-[#2563EB] cursor-pointer group/link transition-colors underline decoration-2 underline-offset-4"
                >
                  <span>{lang === 'fr' ? 'Postuler Aux Détections' : 'Join Now'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#22C55E] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

