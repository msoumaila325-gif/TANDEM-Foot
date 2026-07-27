import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Program, Language } from '../types';
import { PROGRAMS_DATA } from '../data/academyData';
import { Zap, Compass, Activity, ShieldCheck, Brain, Video, HeartPulse, ShieldAlert, ArrowRight, X, Check, Clock, Sparkles } from 'lucide-react';

interface TrainingProgramsProps {
  lang: Language;
  onOpenEnrollment: () => void;
}

export const TrainingPrograms: React.FC<TrainingProgramsProps> = ({
  lang,
  onOpenEnrollment
}) => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return Zap;
      case 'Compass': return Compass;
      case 'Activity': return Activity;
      case 'ShieldCheck': return ShieldCheck;
      case 'Brain': return Brain;
      case 'Video': return Video;
      case 'HeartPulse': return HeartPulse;
      case 'ShieldAlert': return ShieldAlert;
      default: return Sparkles;
    }
  };

  return (
    <section id="programs" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEBFF] text-[#1E4E92] text-xs font-bold uppercase tracking-widest mb-4">
            <Zap className="w-4 h-4 text-[#1E4E92]" />
            <span>{lang === 'en' ? 'Pro Training Curriculum' : 'Programme d\'Entraînement Pro'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Elite Development Pillars' : 'Les Piliers De Formation D\'Élite'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {lang === 'en'
              ? 'Our UEFA-aligned training framework combines technical perfection, tactical IQ, physical power, and mental resilience.'
              : 'Notre programme delite associe perfection technique, QI tactique, puissance physique et mental d’acier.'}
          </p>
        </div>

        {/* 8 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS_DATA.map((prog, idx) => {
            const IconComp = getIcon(prog.icon);
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-3xl bg-[#F5F7FA] border border-gray-200 overflow-hidden hover:border-[#1E4E92] shadow-card-hover group flex flex-col justify-between"
              >
                {/* Top Image Preview */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#153E75] via-[#153E75]/30 to-transparent opacity-80" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#153E75] text-[10px] font-extrabold uppercase tracking-wider">
                    {prog.category[lang]}
                  </div>

                  {/* Intensity Badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#1E4E92] text-white text-[10px] font-bold">
                    {prog.intensity}
                  </div>

                  {/* Program Icon Overlay */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white text-[#1E4E92] flex items-center justify-center shadow-lg">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#153E75] font-heading mb-2 group-hover:text-[#1E4E92] transition-colors">
                      {prog.title[lang]}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {prog.description[lang]}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#1E4E92]" />
                      <span>{prog.duration}</span>
                    </div>

                    <button
                      onClick={() => setSelectedProgram(prog)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1E4E92] hover:text-[#153E75] cursor-pointer group/btn"
                    >
                      <span>{lang === 'en' ? 'Curriculum' : 'Détails'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Program Detailed Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="relative h-64">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title[lang]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153E75] via-[#153E75]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#DCEBFF]">
                    {selectedProgram.category[lang]}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mt-1">
                    {selectedProgram.title[lang]}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#1E4E92] tracking-widest mb-2">
                    {lang === 'en' ? 'Program Overview' : 'Aperçu du Programme'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {selectedProgram.detailedDesc[lang]}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase text-[#1E4E92] tracking-widest mb-3">
                    {lang === 'en' ? 'Key Training Modules' : 'Modules Clés d\'Entraînement'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProgram.keyPoints[lang].map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F5F7FA] border border-gray-200">
                        <Check className="w-4 h-4 text-[#1E4E92] flex-shrink-0" />
                        <span className="text-xs font-semibold text-gray-800">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-500 font-medium">
                    {lang === 'en' ? 'Weekly Volume:' : 'Volume Hebdomadaire:'}{' '}
                    <span className="font-bold text-[#153E75]">{selectedProgram.duration}</span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProgram(null);
                      onOpenEnrollment();
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1E4E92] text-white font-bold text-xs hover:bg-[#153E75] transition-colors cursor-pointer"
                  >
                    {lang === 'en' ? 'Enroll In This Module' : 'S\'inscrire À Ce Module'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
