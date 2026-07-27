import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coach, Language } from '../types';
import { COACHES_DATA } from '../data/academyData';
import { Shield, Award, Linkedin, Instagram, Twitter, X, Sparkles, CheckCircle } from 'lucide-react';

interface CoachingStaffProps {
  lang: Language;
}

export const CoachingStaff: React.FC<CoachingStaffProps> = ({ lang }) => {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  return (
    <section id="staff" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEBFF] text-[#1E4E92] text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-4 h-4 text-[#1E4E92]" />
            <span>{lang === 'en' ? 'Leadership & Technical Staff' : 'Encadrement Technique'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Meet Our Elite Coaches' : 'Nos Entraîneurs Et Experts'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {lang === 'en'
              ? 'Our coaches bring professional playing experience, CAF & UEFA credentials, and a passion for youth mentorship.'
              : 'Nos entraîneurs apportent leur expérience professionnelle, leurs diplômes CAF & UEFA et leur passion.'}
          </p>
        </div>

        {/* Coach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COACHES_DATA.map((coach, idx) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-[#F5F7FA] border border-gray-200 overflow-hidden shadow-card-hover group flex flex-col justify-between"
            >
              {/* Coach Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153E75] via-transparent to-transparent opacity-80" />

                {/* License Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#153E75] text-[10px] font-extrabold shadow-md">
                  {coach.license}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#153E75] font-heading">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-bold text-[#1E4E92] mt-0.5">
                    {coach.role[lang]}
                  </p>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                    {coach.bio[lang]}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-gray-500">
                    {coach.experience[lang]}
                  </span>

                  <button
                    onClick={() => setSelectedCoach(coach)}
                    className="px-4 py-2 rounded-xl bg-[#1E4E92] text-white text-xs font-bold hover:bg-[#153E75] transition-colors cursor-pointer"
                  >
                    {lang === 'en' ? 'View Bio' : 'Voir Bio'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coach Detail Modal */}
      <AnimatePresence>
        {selectedCoach && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-8 shadow-2xl relative border border-gray-200 my-auto max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCoach(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={selectedCoach.image}
                  alt={selectedCoach.name}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover shadow-lg border-2 border-[#1E4E92]"
                  referrerPolicy="no-referrer"
                />

                <div className="text-center sm:text-left space-y-2">
                  <span className="px-3 py-1 rounded-full bg-[#DCEBFF] text-[#1E4E92] text-xs font-bold">
                    {selectedCoach.license}
                  </span>
                  <h3 className="text-2xl font-bold text-[#153E75] font-heading">
                    {selectedCoach.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#1E4E92]">
                    {selectedCoach.role[lang]}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    {selectedCoach.experience[lang]}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#1E4E92] tracking-wider mb-1">
                    {lang === 'en' ? 'Biography & Leadership' : 'Biographie & Parcour'}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedCoach.bio[lang]}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1E4E92] flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-gray-500 block">
                      {lang === 'en' ? 'Coaching Specialty:' : 'Spécialité Technique:'}
                    </span>
                    <span className="text-sm font-bold text-[#153E75]">
                      {selectedCoach.specialty[lang]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedCoach(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#153E75] text-white text-xs font-bold"
                >
                  {lang === 'en' ? 'Close' : 'Fermer'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
