import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language, PageRoute } from '../types';
import { GALLERY_IMAGES, NEWS_DATA } from '../data/academyData';
import { Camera, Newspaper, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface MediaSectionProps {
  lang: Language;
  onOpenEnrollment?: () => void;
  onPageChange?: (page: PageRoute) => void;
  showGallery?: boolean;
}

export const MediaSection: React.FC<MediaSectionProps> = ({ 
  lang, 
  onOpenEnrollment, 
  onPageChange,
  showGallery = true 
}) => {
  // News states
  const [activeNewsCat, setActiveNewsCat] = useState<string>('Tous');

  // Gallery states
  const [activeGalleryCat, setActiveGalleryCat] = useState<string>('All');

  const newsCategories = [
    { id: 'Tous', name: { fr: 'Tous les articles', en: 'All Stories' } },
    { id: 'Détections', name: { fr: 'Détections & Essais', en: 'Tryouts & Scouting' } },
    { id: 'Compétition', name: { fr: 'Compétitions & Matchs', en: 'Matches & Tournaments' } },
    { id: 'Académie', name: { fr: 'Vie de l\'Académie', en: 'Academy Life' } }
  ];

  const galleryCategories = [
    { id: 'All', label: { fr: 'Toutes les Photos', en: 'All Photos' } },
    { id: 'Training', label: { fr: 'Entraînements', en: 'Trainings' } },
    { id: 'Matches', label: { fr: 'Matchs Pro', en: 'Matches' } },
    { id: 'Facilities', label: { fr: 'Infrastructures', en: 'Facilities' } },
    { id: 'Pitch', label: { fr: 'Terrains FIFA', en: 'Pithes' } }
  ];

  const filteredNews = activeNewsCat === 'Tous'
    ? NEWS_DATA
    : NEWS_DATA.filter(n => n.category.fr.toLowerCase().includes(activeNewsCat.toLowerCase()) || n.category.en.toLowerCase().includes(activeNewsCat.toLowerCase()));

  const filteredGallery = activeGalleryCat === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeGalleryCat);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="media" className="bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Top Header & Quick Jump Controls */}
      <section className="pt-16 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#153E75] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span>{lang === 'en' ? 'TFC Media & Press Hub' : 'Espace Média & Presse TFC'}</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#153E75] font-heading tracking-tight leading-tight">
            {showGallery
              ? (lang === 'en' ? 'Media Gallery & Club News' : 'Galerie Média & Actualités du Club')
              : (lang === 'en' ? 'Latest Club News & Press Releases' : 'Dernières Actualités & Communiqués du Club')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            {showGallery
              ? (lang === 'en'
                  ? 'Explore our photo gallery, match highlights, official announcements, and academy stories in Bamako.'
                  : 'Découvrez la galerie photos & vidéos de l\'académie, les temps forts et les dernières actualités.')
              : (lang === 'en'
                  ? 'Stay updated with official announcements, tournament results, and academy milestones in Bamako.'
                  : 'Suivez les communiqués officiels, les résultats de tournois et la vie de l\'académie à Bamako.')}
          </p>

          {/* Quick Jump Buttons */}
          {showGallery && (
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() => scrollToSection('gallery-section')}
                className="px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 bg-[#153E75] text-white hover:bg-[#1E4E92] shadow-sm"
              >
                <Camera className="w-4 h-4 text-[#22C55E]" />
                <span>{lang === 'en' ? 'Photo Gallery' : 'Galerie Photos & Vidéos'}</span>
              </button>

              <button
                onClick={() => scrollToSection('news-section')}
                className="px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
              >
                <Newspaper className="w-4 h-4 text-[#2563EB]" />
                <span>{lang === 'en' ? 'Latest News' : 'Actualités & Communiqués'}</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 1: DEDICATED HD PHOTO & VIDEO GALLERY (FIRST) */}
      {showGallery && (
        <section id="gallery-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#22C55E] text-xs font-bold">
                  <Camera className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'HD Photo & Video Hub' : 'Galerie Officielle TFC'}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#153E75] font-heading tracking-tight">
                  {lang === 'en' ? 'Photo & Video Gallery' : 'L\'Académie En Images & Vidéos'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  {lang === 'en' 
                    ? 'Immerse yourself in our daily training routines, match celebrations, and high-performance complex in N\'Tabacoro.'
                    : 'Plongez au cœur des séances d\'entraînement, des célébrations de matchs et de nos infrastructures à N\'Tabacoro.'}
                </p>
              </div>

              {/* Gallery Category Filter Pills */}
              <div className="flex items-center gap-2 flex-wrap">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveGalleryCat(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                      activeGalleryCat === cat.id
                        ? 'bg-[#153E75] text-white border-[#153E75] shadow-xs'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat.label[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredGallery.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-3xl overflow-hidden h-80 sm:h-88 shadow-sm hover:shadow-xl border border-slate-200 bg-slate-100"
                >
                  <img
                    src={img.url}
                    alt={img.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/90 via-[#0B1320]/20 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#22C55E] bg-black/50 px-3 py-1 rounded-full backdrop-blur-xs">
                      {img.category}
                    </span>
                    <h4 className="text-base font-bold font-heading line-clamp-1 mt-2">
                      {img.title[lang]}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 2: LATEST NEWS & ARTICLES (SECOND) */}
      <section id="news-section" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] text-xs font-bold mb-2">
              <Newspaper className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Press Releases' : 'Communiqués Officiels'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#153E75] font-heading">
              {lang === 'en' ? 'Latest News & Articles' : 'Dernières Actualités du Club'}
            </h3>
          </div>

          {/* Category Sub-Filters */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {newsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveNewsCat(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeNewsCat === cat.id
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.name[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#22C55E] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                    {art.category[lang]}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#153E75] font-heading group-hover:text-[#2563EB] transition-colors leading-snug line-clamp-2">
                    {art.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-4 leading-relaxed font-normal">
                    {art.summary[lang]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
