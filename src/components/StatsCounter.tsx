import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Users, Trophy, ShieldCheck, Flame, Medal, Award } from 'lucide-react';

interface StatsProps {
  lang: Language;
}

export const StatsCounter: React.FC<StatsProps> = ({ lang }) => {
  const statsList = [
    { label: { en: "Players Trained", fr: "Joueurs Formés" }, val: "150+", icon: Users },
    { label: { en: "Weekly Sessions", fr: "Séances / Semaine" }, val: "18+", icon: Flame },
    { label: { en: "CAF/UEFA Coaches", fr: "Entraîneurs Certifiés" }, val: "12", icon: ShieldCheck },
    { label: { en: "Matches Played", fr: "Matchs Joués" }, val: "240+", icon: Trophy },
    { label: { en: "Championship Titles", fr: "Titres Régionaux" }, val: "8", icon: Medal },
    { label: { en: "Pro Pathway Athletes", fr: "Parcours Pro" }, val: "15+", icon: Award }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#153E75] via-[#1E4E92] to-[#153E75] text-white relative overflow-hidden">
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {statsList.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#60A5FA] mb-3">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                  {st.val}
                </div>
                <div className="text-xs font-semibold text-[#DCEBFF]/80 mt-1">
                  {st.label[lang]}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
