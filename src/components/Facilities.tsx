import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Facility, Language } from '../types';
import { FACILITIES_DATA } from '../data/academyData';
import { Building2, CheckCircle, Sparkles, MapPin } from 'lucide-react';

interface FacilitiesProps {
  lang: Language;
}

export const Facilities: React.FC<FacilitiesProps> = ({ lang }) => {
  const [activeFacility, setActiveFacility] = useState<Facility>(FACILITIES_DATA[0]);

  return (
    <section id="facilities" className="py-24 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E4E92] text-white text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-4 h-4 text-[#DCEBFF]" />
            <span>{lang === 'en' ? 'World Class Infrastructure' : 'Infrastructures De Pointe'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Our Bamako Training Complex' : 'Notre Complexe Sportif À Bamako'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {lang === 'en'
              ? 'Located in N\'Tabacoro, our academy facilities rival professional European training centers.'
              : 'Situé à N\'Tabacoro, notre complexe offre des conditions de travail dignes des grands clubs européens.'}
          </p>
        </div>

        {/* Facility Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {FACILITIES_DATA.map((fac) => (
            <button
              key={fac.id}
              onClick={() => setActiveFacility(fac)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                activeFacility.id === fac.id
                  ? 'bg-[#153E75] text-white border-[#3B82F6] shadow-xl scale-[1.02]'
                  : 'bg-white text-[#153E75] border-gray-200 hover:border-[#1E4E92]'
              }`}
            >
              <span className="text-[10px] font-extrabold uppercase tracking-widest block opacity-75">
                {fac.category}
              </span>
              <h3 className="font-bold text-sm sm:text-base font-heading mt-1 line-clamp-1">
                {fac.name[lang]}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Facility Showcase */}
        <motion.div
          key={activeFacility.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white border border-gray-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
        >
          {/* Visual Column */}
          <div className="lg:col-span-7 relative h-80 lg:h-auto min-h-[400px]">
            <img
              src={activeFacility.image}
              alt={activeFacility.name[lang]}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#153E75] via-transparent to-transparent opacity-80" />

            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#153E75] text-xs font-extrabold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#1E4E92]" />
              <span>N'Tabacoro Complex • Bamako</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#DCEBFF] text-[#1E4E92] text-xs font-bold uppercase tracking-wider">
                {activeFacility.category} {lang === 'en' ? 'Facility' : 'Équipement'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#153E75] font-heading mt-3">
                {activeFacility.name[lang]}
              </h3>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                {activeFacility.description[lang]}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-[#1E4E92] tracking-widest mb-4">
                {lang === 'en' ? 'Facility Features & Equipment' : 'Équipements & Caractéristiques'}
              </h4>
              <div className="space-y-3">
                {activeFacility.features[lang].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F7FA] border border-gray-200">
                    <CheckCircle className="w-5 h-5 text-[#1E4E92] flex-shrink-0" />
                    <span className="text-xs font-bold text-gray-800">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
