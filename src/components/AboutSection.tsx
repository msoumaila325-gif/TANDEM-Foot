import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import { Target, Award, Heart, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { imgWa0073 } from '../image';

interface AboutProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'objectives' | 'values'>('story');

  const coreValues = [
    {
      title: { en: "Discipline", fr: "Discipline" },
      desc: { en: "Rigorous punctuality, effort, and commitment on and off the field.", fr: "Ponctualité rigoureuse, effort et engagement sur et en dehors du terrain." },
      icon: Shield
    },
    {
      title: { en: "Fraternity", fr: "Fraternité" },
      desc: { en: "Unbreakable brotherhood, solidarity, and mutual upliftment.", fr: "Fraternité inébranlable, solidarité et entraide mutuelle." },
      icon: Heart
    },
    {
      title: { en: "Leadership", fr: "Leadership" },
      desc: { en: "Empowering players to speak up, take initiative, and inspire others.", fr: "Donner aux joueurs les moyens de prendre des initiatives et d'inspirer." },
      icon: Award
    },
    {
      title: { en: "Excellence", fr: "Excellence" },
      desc: { en: "Pursuing perfection in every pass, drill, match, and academic class.", fr: "Recherche de la perfection à chaque passe, entraînement et cours." },
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradient Accents */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#153E75] via-[#1E4E92] to-[#3B82F6]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12"
        >
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight leading-[1.1]">
              {lang === 'en' ? 'Building The Future Of Malian Football' : 'Construire L\'Avenir Du Football Malien'}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {lang === 'en'
                ? 'Founded on August 12, 2024, in Bamako, TANDEM FOOT CLUB combines elite coaching methodology with local talent to shape tomorrow\'s football stars.'
                : 'Fondé le 12 Août 2024 à Bamako, le TANDEM FOOT CLUB allie la méthodologie de pointe à la passion locale pour former les futurs champions du football.'}
            </p>
          </div>
        </motion.div>

        {/* Two Column Layout: Left Interactive Tabs & Content, Right Visual Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Area (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Interactive Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-[#F5F7FA] rounded-2xl border border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('story')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'story'
                    ? 'bg-[#1E4E92] text-white shadow-md'
                    : 'text-[#1F2937]/70 hover:text-[#153E75]'
                }`}
              >
                {lang === 'en' ? 'Our Story' : 'Notre Histoire'}
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'mission'
                    ? 'bg-[#1E4E92] text-white shadow-md'
                    : 'text-[#1F2937]/70 hover:text-[#153E75]'
                }`}
              >
                {lang === 'en' ? 'Mission & Vision' : 'Mission & Vision'}
              </button>
              <button
                onClick={() => setActiveTab('objectives')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'objectives'
                    ? 'bg-[#1E4E92] text-white shadow-md'
                    : 'text-[#1F2937]/70 hover:text-[#153E75]'
                }`}
              >
                {lang === 'en' ? 'Objectives' : 'Objectifs'}
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'values'
                    ? 'bg-[#1E4E92] text-white shadow-md'
                    : 'text-[#1F2937]/70 hover:text-[#153E75]'
                }`}
              >
                {lang === 'en' ? 'Core Values' : 'Valeurs Clés'}
              </button>
            </div>

            {/* Tab 1: Story */}
            {activeTab === 'story' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-[#153E75] font-heading">
                  {lang === 'en' ? 'Born In Bamako, Aiming For World Stadiums' : 'Né À Bamako, En Route Vers Les Stades Du Monde'}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {lang === 'en'
                    ? 'TANDEM FOOT CLUB was established on August 12, 2024, in N\'Tabacoro, Bamako, to answer a vital calling: providing young African football talents with structured, elite-level coaching, discipline, and education.'
                    : 'Le TANDEM FOOT CLUB a été créé le 12 août 2024 à N\'Tabacoro, Bamako, pour répondre à une vocation essentielle : offrir aux jeunes talents du football africain un encadrement structuré de haut niveau.'}
                </p>
                <p className="text-gray-600 leading-relaxed text-base">
                  {lang === 'en'
                    ? 'Our philosophy believes that raw talent alone is not enough; true football mastery requires high tactical intellect, physical conditioning, strong patriotism, and unwavering school performance.'
                    : 'Notre philosophie repose sur le fait que le talent brut ne suffit pas : la vraie maîtrise exige une grande intelligence tactique, une condition physique optimale et une réussite scolaire irréprochable.'}
                </p>

                <div className="p-6 rounded-2xl bg-[#DCEBFF]/50 border border-[#1E4E92]/20 flex items-start gap-4">
                  <Award className="w-8 h-8 text-[#1E4E92] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#153E75]">
                      {lang === 'en' ? 'Academy Motto' : 'Devise De L\'Académie'}
                    </h4>
                    <p className="text-[#1E4E92] italic font-semibold text-lg mt-1">
                      "{ACADEMY_INFO.motto[lang]}"
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Mission & Vision */}
            {activeTab === 'mission' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="p-6 rounded-2xl bg-[#F5F7FA] border border-gray-200">
                  <h3 className="text-xl font-bold text-[#153E75] mb-2">
                    {lang === 'en' ? 'Our Mission' : 'Notre Mission'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {ACADEMY_INFO.mission[lang]}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#153E75] text-white">
                  <h3 className="text-xl font-bold text-[#DCEBFF] mb-2">
                    {lang === 'en' ? 'Our Vision' : 'Notre Vision'}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {lang === 'en'
                      ? 'To become West Africa’s premier reference academy, recognized globally for producing disciplined, highly intelligent, and technically flawless professional footballers.'
                      : 'Devenir l’académie de référence en Afrique de l’Ouest, reconnue mondialement pour la formation de footballeurs professionnels disciplinés et éduqués.'}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Objectives */}
            {activeTab === 'objectives' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {ACADEMY_INFO.objectives.map((obj, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1E4E92] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-gray-800">
                      {obj[lang]}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Tab 4: Core Values */}
            {activeTab === 'values' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {coreValues.map((val, idx) => {
                  const IconComp = val.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#1E4E92] hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#DCEBFF] flex items-center justify-center text-[#1E4E92] mb-3">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-[#153E75] text-lg">
                        {val.title[lang]}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {val.desc[lang]}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* Right Column: Visual Frame with Badge (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src={imgWa0073}
                  alt="Tandem Foot Club Player in Action"
                  className="w-full h-[480px] object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153E75]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase text-[#DCEBFF] tracking-widest">
                    {lang === 'en' ? 'Bamako Academy' : 'Académie de Bamako'}
                  </span>
                  <h4 className="text-xl font-bold font-heading">
                    {lang === 'en' ? 'Elite Development Facilities' : 'Infrastructures d\'Élite'}
                  </h4>
                </div>
              </div>

              {/* Floating Highlight Card with spring animation */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-[#153E75] text-white p-5 rounded-2xl shadow-2xl border border-white/20 max-w-xs hidden sm:flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E4E92] flex items-center justify-center font-extrabold text-xl text-white font-heading shadow-md">
                  100%
                </div>
                <div>
                  <div className="text-xs text-[#DCEBFF]">
                    {lang === 'en' ? 'Quality Commitment' : 'Engagement Qualité'}
                  </div>
                  <div className="text-sm font-bold">
                    {lang === 'en' ? 'CAF Certified Standards' : 'Normes Certifiées CAF'}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
