import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facility, Language } from '../types';
import { FACILITIES_DATA } from '../data/academyData';
import { ArrowUpRight, CheckCircle2, MapPin, X } from 'lucide-react';
import { imgWa0071, imgWa0057, imgWa1526_30 } from '../image';

interface FacilitiesProps {
  lang: Language;
  onOpenEnrollment?: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ lang, onOpenEnrollment }) => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  // 3 Key Featured Facilities corresponding to Screenshot 2
  const featuredFacilities = [
    {
      id: 'coaching',
      title: { fr: 'Coaching & Encadrement Pro', en: 'Professional Coaching' },
      desc: {
        fr: 'Améliorez votre jeu grâce à des séances tactiques et des entraînements personnalisés dispensés par nos coachs certifiés CAF.',
        en: 'Improve your game with personalized tactical drills and physical training from certified youth pros.'
      },
      image: imgWa0071,
      badge: { fr: 'Staff CAF & FIFA', en: 'CAF & FIFA Staff' },
      features: [
        { fr: 'Entraînements tactiques personnalisés', en: 'Custom tactical sessions' },
        { fr: 'Analyse vidéo individuelle', en: 'Individual video analysis' },
        { fr: 'Préparation physique de pointe', en: 'Peak physical conditioning' }
      ]
    },
    {
      id: 'pitch',
      title: { fr: 'Terrains Synthétiques Norme FIFA', en: 'FIFA Synthetic Pitches' },
      desc: {
        fr: 'Jouez et entraînez-vous sur des surfaces synthétiques homologuées de dernière génération au complexe de N\'Tabacoro.',
        en: 'Train and play on state-of-the-art FIFA-standard synthetic turf at our N\'Tabacoro complex.'
      },
      image: imgWa0057,
      badge: { fr: 'Complexe N\'Tabacoro', en: 'N\'Tabacoro Complex' },
      features: [
        { fr: 'Gazon synthétique haut de gamme', en: 'Top-tier synthetic turf' },
        { fr: 'Éclairage nocturne LED complet', en: 'Full LED night lighting' },
        { fr: 'Vestiaires & douches modernes', en: 'Modern locker rooms & showers' }
      ]
    },
    {
      id: 'medical',
      title: { fr: 'Suivi Médical & Récupération', en: 'Medical & Recovery Center' },
      desc: {
        fr: 'Bénéficiez d\'une prise en charge athlétique complète avec suivi physiothérapeutique, bilans de forme et soins d\'urgence.',
        en: 'Benefit from comprehensive athletic care with dedicated physio support, biometric fitness tracking, and safety.'
      },
      image: imgWa1526_30,
      badge: { fr: 'Pôle Médical TFC', en: 'TFC Medical Hub' },
      features: [
        { fr: 'Physiothérapeute & kiné dédié', en: 'Dedicated physio & kinesitherapy' },
        { fr: 'Bains glacés de récupération', en: 'Ice bath recovery stations' },
        { fr: 'Bilan nutritionnel & hydratation', en: 'Nutritional & hydration profiling' }
      ]
    }
  ];

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight leading-[1.1]">
              {lang === 'fr' 
                ? 'Vivez le Football Comme Jamais Auparavant' 
                : 'Experience Football Like Never Before'}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {lang === 'fr'
                ? 'Au Tandem Foot Club, nous proposons des infrastructures de classe mondiale conçues pour sublimer le talent de chaque jeune joueur. Nos installations garantissent un encadrement d’exception.'
                : 'At Tandem Foot Club, we offer top-tier facilities designed to elevate your footballing journey. Whether you are an emerging talent or a confirmed athlete, our complex ensures world-class development.'}
            </p>
          </div>
        </div>

        {/* 3 Rounded Cards Grid Matching Reference Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {featuredFacilities.map((fac, idx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F8FAFC] rounded-[2rem] border border-slate-200/90 p-4 shadow-sm hover:border-[#2563EB]/40 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Top-Right Badge */}
                <div className="relative rounded-2xl overflow-hidden h-48 sm:h-52 w-full mb-5">
                  <img
                    src={fac.image}
                    alt={fac.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
                    {fac.badge[lang]}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="px-2">
                  <h3 className="text-xl font-extrabold text-[#153E75] font-heading tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors">
                    {fac.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {fac.desc[lang]}
                  </p>
                </div>
              </div>

              {/* Bottom Right Green Circle Arrow Button */}
              <div className="px-2 pt-6 flex items-center justify-between">
                <button
                  onClick={() => setSelectedFacility(fac as any)}
                  className="text-xs font-bold text-[#153E75] hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  {lang === 'fr' ? 'Voir détails' : 'Learn more'}
                </button>
                <button
                  onClick={() => setSelectedFacility(fac as any)}
                  aria-label={fac.title[lang]}
                  className="w-10 h-10 rounded-full bg-[#22C55E] hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-md group-hover:scale-110 active:scale-95"
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Facility Details Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200"
            >
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#16A34A] text-xs font-bold uppercase">
                  <span>{selectedFacility.badge?.[lang]}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#153E75] font-heading">
                  {selectedFacility.title[lang]}
                </h3>

                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {selectedFacility.desc[lang]}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase text-[#153E75] tracking-wider mb-3">
                    {lang === 'fr' ? 'Points Forts & Équipements' : 'Key Highlights'}
                  </h4>
                  <div className="space-y-2">
                    {selectedFacility.features?.map((f: any, i: number) => (
                      <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                        <span>{f[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedFacility(null);
                      if (onOpenEnrollment) onOpenEnrollment();
                    }}
                    className="w-full py-3 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                  >
                    {lang === 'fr' ? 'Réserver Un Essai' : 'Book Trial Pass'}
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

