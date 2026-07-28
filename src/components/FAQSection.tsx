import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { FAQ_DATA } from '../data/academyData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface FAQProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string>(FAQ_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E4E92]/10 text-[#1E4E92] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1E4E92]/20">
            <HelpCircle className="w-4 h-4 text-[#1E4E92]" />
            <span>{lang === 'en' ? 'Parent & Player Guidance' : 'Foire Aux Questions'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            {lang === 'en'
              ? 'Everything parents and young players need to know about joining TANDEM FOOT CLUB.'
              : 'Tout ce que les parents et joueurs doivent savoir pour rejoindre le TANDEM FOOT CLUB.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:border-[#2563EB]/40 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-extrabold text-[#153E75] text-base sm:text-lg font-heading">
                    {item.question[lang]}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#2563EB] text-white shadow-sm' : 'bg-slate-100 text-[#153E75]'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4"
                    >
                      {item.answer[lang]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
