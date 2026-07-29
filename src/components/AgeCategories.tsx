import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AgeCategory, Language } from '../types';
import { AGE_CATEGORIES_DATA } from '../data/academyData';
import { Calendar, Users, Target, CheckCircle2, ArrowRight, Search, ShieldCheck } from 'lucide-react';

interface AgeCategoriesProps {
  lang: Language;
  onOpenEnrollment: () => void;
}

export const AgeCategories: React.FC<AgeCategoriesProps> = ({
  lang,
  onOpenEnrollment
}) => {
  const [selectedCategory, setSelectedCategory] = useState<AgeCategory>(AGE_CATEGORIES_DATA[2]); // U15 default
  const [birthYearInput, setBirthYearInput] = useState<string>('');
  const [calculatorResult, setCalculatorResult] = useState<AgeCategory | null>(null);

  const calculateCategory = (yearStr: string) => {
    const year = parseInt(yearStr);
    if (isNaN(year) || year < 2005 || year > 2017) {
      setCalculatorResult(null);
      return;
    }
    const currentYear = 2026; // relative system time
    const age = currentYear - year;

    if (age <= 11) setCalculatorResult(AGE_CATEGORIES_DATA[0]);
    else if (age <= 13) setCalculatorResult(AGE_CATEGORIES_DATA[1]);
    else if (age <= 15) setCalculatorResult(AGE_CATEGORIES_DATA[2]);
    else if (age <= 17) setCalculatorResult(AGE_CATEGORIES_DATA[3]);
    else setCalculatorResult(AGE_CATEGORIES_DATA[4]);
  };

  return (
    <section id="categories" className="py-24 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Age Group Division (U11 to U20)' : 'Répartition par Catégories d\'Âge (U11 à U20)'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {lang === 'en'
              ? 'Every squad receives tailored technical, physical, and tactical objectives suited to their development stage.'
              : 'Chaque catégorie bénéficie d’un programme technique, physique et tactique adapté à sa maturité.'}
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {AGE_CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3.5 rounded-2xl font-extrabold text-sm sm:text-base font-heading transition-all duration-300 flex items-center gap-2 cursor-pointer flex-shrink-0 ${
                selectedCategory.id === cat.id
                  ? 'bg-[#153E75] text-white shadow-xl scale-105 border-2 border-[#3B82F6]'
                  : 'bg-white text-[#153E75] hover:bg-[#DCEBFF]/50 border border-gray-200'
              }`}
            >
              <span>{cat.code}</span>
              <span className="text-xs font-medium opacity-80">({cat.ageRange})</span>
            </button>
          ))}
        </div>

        {/* Active Category Display Showcase */}
        <motion.div
          key={selectedCategory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
        >
          {/* Left Column: Squad Image (5 Cols) */}
          <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[320px]">
            <img
              src={selectedCategory.image}
              alt={selectedCategory.title[lang]}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#153E75] via-[#153E75]/40 to-transparent lg:bg-gradient-to-r" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded-full bg-[#1E4E92] text-[#DCEBFF] text-xs font-bold uppercase tracking-wider">
                {selectedCategory.code} {lang === 'en' ? 'Squad' : 'Effectif'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mt-2">
                {selectedCategory.title[lang]}
              </h3>
            </div>
          </div>

          {/* Right Column: Squad Details & Schedule (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#1E4E92]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {lang === 'en' ? 'Primary Focus' : 'Objectif Principal'}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-xl bg-[#DCEBFF] text-[#1E4E92] text-xs font-bold">
                  {selectedCategory.sessionsPerWeek} {lang === 'en' ? 'Sessions / Week' : 'Séances / Semaine'}
                </div>
              </div>

              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {selectedCategory.objectives[lang]}
              </p>

              {/* Schedule Box */}
              <div className="mt-6 p-4 rounded-2xl bg-[#F5F7FA] border border-gray-200 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#1E4E92] flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    {lang === 'en' ? 'Weekly Schedule:' : 'Planning Hebdomadaire:'}
                  </span>
                  <span className="text-sm font-bold text-[#153E75]">
                    {selectedCategory.schedule[lang]}
                  </span>
                </div>
              </div>

              {/* Focus Points Grid */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase text-[#1E4E92] tracking-wider mb-3">
                  {lang === 'en' ? 'Core Curriculum Focus:' : 'Domaines d\'Apprentissage:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCategory.focusAreas[lang].map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-[#1E4E92]" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-500">
                {lang === 'en' ? 'Age Eligibility:' : 'Tranche d\'Âge:'}{' '}
                <strong className="text-[#153E75]">{selectedCategory.ageRange}</strong>
              </span>

              <button
                onClick={onOpenEnrollment}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#1E4E92] to-[#2563EB] text-white font-bold text-xs hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{lang === 'en' ? `Register for ${selectedCategory.code}` : `S'inscrire en ${selectedCategory.code}`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Age Category Calculator Widget */}
        <div className="mt-16 p-8 rounded-3xl bg-[#153E75] text-white border border-white/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1E4E92] rounded-full blur-3xl pointer-events-none opacity-40" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DCEBFF] text-xs font-bold uppercase mb-3">
                <Search className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Squad Category Checker' : 'Vérificateur De Catégorie'}</span>
              </div>
              <h3 className="text-2xl font-bold font-heading">
                {lang === 'en' ? 'Which Squad Does Your Child Belong To?' : 'Dans Quelle Catégorie Joue Votre Enfant ?'}
              </h3>
              <p className="text-sm text-[#DCEBFF]/80 mt-2">
                {lang === 'en'
                  ? 'Enter player year of birth (e.g., 2012) to immediately determine their official squad group.'
                  : 'Saisissez l’année de naissance (ex. 2012) pour connaître immédiatement la catégorie officielle.'}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-3">
              <input
                type="number"
                placeholder={lang === 'en' ? 'e.g. 2011' : 'ex. 2011'}
                value={birthYearInput}
                onChange={(e) => {
                  setBirthYearInput(e.target.value);
                  calculateCategory(e.target.value);
                }}
                className="w-full sm:w-40 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 font-bold focus:outline-none focus:border-[#3B82F6]"
              />

              {calculatorResult && (
                <div className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#1E4E92] border border-[#3B82F6] flex items-center justify-center gap-2 text-white font-extrabold text-sm animate-in fade-in duration-300">
                  <ShieldCheck className="w-5 h-5 text-[#60A5FA]" />
                  <span>{calculatorResult.code} Squad</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
