import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Shield, GraduationCap, Award, Globe, Users, Trophy, HeartHandshake, Compass, Cpu } from 'lucide-react';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const features = [
    {
      title: { en: "CAF Certified Coaches", fr: "Entraîneurs Certifiés CAF " },
      desc: {
        en: "Our technical staff holds top international coaching licenses with decades of professional youth experience.",
        fr: "Notre staff technique possède des licences internationales et des dizaines d'années d'expérience."
      },
      icon: Award
    },
    {
      title: { en: "Modern Football Training", fr: "Entraînement Moderne" },
      desc: {
        en: "High-intensity drills focused on spatial scanning, 1v1 dominance, quick decision making, and ball speed.",
        fr: "Exercices haute intensité axés sur la prise d'information, le 1v1, les choix rapides et la vitesse de balle."
      },
      icon: Cpu
    },
    {
      title: { en: "FIFA-Level Methodology", fr: "Méthodologie Norme FIFA" },
      desc: {
        en: "Structured periodization ensuring youth players reach peak athletic form without risk of burnout.",
        fr: "Périodisation structurée garantissant le pic de forme sans risque de surmenage."
      },
      icon: Compass
    },
    {
      title: { en: "Education & Academic Support", fr: "Suivi Scolaire & Éducation" },
      desc: {
        en: "Mandatory school monitoring. Sporting excellence goes hand in hand with top classroom performance.",
        fr: "Suivi scolaire obligatoire. L'excellence sportive va de pair avec les résultats à l'école."
      },
      icon: GraduationCap
    },
    {
      title: { en: "Rigorous Discipline & Values", fr: "Discipline & Valeurs" },
      desc: {
        en: "Punctuality, respect, fraternity, and patriotism form the unshakeable foundation of every TFC athlete.",
        fr: "Ponctualité, respect, fraternité et patriotisme constituent le socle de nos athlètes."
      },
      icon: Shield
    },
    {
      title: { en: "Leadership & Mentorship", fr: "Leadership & Mentorat" },
      desc: {
        en: "Building strong personalities capable of leading teams, handling match pressure, and inspiring society.",
        fr: "Former des personnalités fortes capables de guider l'équipe et de résister à la pression."
      },
      icon: Users
    },
    {
      title: { en: "Player Development Pathway", fr: "Parcours de Progression" },
      desc: {
        en: "Individual player tracking with quarterly performance benchmarks, video breakdown, and heatmaps.",
        fr: "Suivi individuel avec évaluations trimestrielles, analyses vidéo et cartes thermiques."
      },
      icon: Trophy
    },
    {
      title: { en: "International Opportunities", fr: "Opportunités Internationales" },
      desc: {
        en: "Direct showcase events with scouts from African, European, and Middle Eastern professional clubs.",
        fr: "Journées de détection en présence de recruteurs africains et européens."
      },
      icon: Globe
    },
    {
      title: { en: "Safe & Inspiring Environment", fr: "Environnement Sûr & Inspirant" },
      desc: {
        en: "Fully enclosed complex in Bamako with medical staff, hydration stations, and dedicated player safety.",
        fr: "Complexe sécurisé à Bamako avec présence médicale, hydratation et sécurité optimale."
      },
      icon: HeartHandshake
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E4E92] text-white text-xs font-bold uppercase tracking-widest mb-4">
            <Trophy className="w-4 h-4 text-[#DCEBFF]" />
            <span>{lang === 'en' ? 'The Tandem Advantage' : 'L\'Avantage Tandem'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Why Choose TANDEM FOOT CLUB?' : 'Pourquoi Choisir Le TANDEM FOOT CLUB ?'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {lang === 'en'
              ? 'We don’t just train football players; we shape tomorrow’s leaders, champions, and role models.'
              : 'Nous ne formons pas seulement des footballeurs ; nous façonnons les leaders et champions de demain.'}
          </p>
        </div>

        {/* 9 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:border-[#1E4E92] shadow-card-hover group relative overflow-hidden"
              >
                {/* Top Accent Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#153E75] to-[#1E4E92] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-[#DCEBFF] text-[#1E4E92] flex items-center justify-center mb-6 group-hover:bg-[#1E4E92] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#153E75] font-heading mb-3 group-hover:text-[#1E4E92] transition-colors">
                  {feat.title[lang]}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feat.desc[lang]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
