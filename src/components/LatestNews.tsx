import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NewsArticle, Language } from '../types';
import { NEWS_DATA } from '../data/academyData';
import { Newspaper, Calendar, Clock, ArrowRight, X } from 'lucide-react';

interface LatestNewsProps {
  lang: Language;
}

export const LatestNews: React.FC<LatestNewsProps> = ({ lang }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <section id="news" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEBFF] text-[#1E4E92] text-xs font-bold uppercase tracking-widest mb-4">
            <Newspaper className="w-4 h-4 text-[#1E4E92]" />
            <span>{lang === 'en' ? 'Academy Press & News' : 'Actualités De L\'Académie'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Latest Stories & Milestones' : 'Dernières Nouvelles Et Événements'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            {lang === 'en'
              ? 'Stay updated on tournament victories, scouting events, and academy developments in Bamako.'
              : 'Suivez nos victoires en tournois, nos journées de détection et nos nouveautés.'}
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl bg-[#F5F7FA] border border-gray-200 overflow-hidden shadow-card-hover group flex flex-col justify-between ${
                art.featured ? 'lg:col-span-2 flex-col sm:flex-row' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${art.featured ? 'sm:w-1/2 h-64 sm:h-auto' : 'h-52'}`}>
                <img
                  src={art.image}
                  alt={art.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1E4E92] text-white text-[10px] font-extrabold uppercase tracking-wider">
                  {art.category[lang]}
                </div>
              </div>

              <div className={`p-6 sm:p-8 flex-1 flex flex-col justify-between ${art.featured ? 'sm:w-1/2' : ''}`}>
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1E4E92]" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#1E4E92]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#153E75] font-heading group-hover:text-[#1E4E92] transition-colors leading-snug">
                    {art.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 mt-3 line-clamp-3 leading-relaxed">
                    {art.summary[lang]}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1E4E92] hover:text-[#153E75] cursor-pointer group/btn"
                  >
                    <span>{lang === 'en' ? 'Read Full Article' : 'Lire L\'Article'}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-200"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title[lang]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153E75] via-[#153E75]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-[#1E4E92] text-white text-[10px] font-bold uppercase">
                    {selectedArticle.category[lang]}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading mt-2">
                    {selectedArticle.title[lang]}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {selectedArticle.content[lang]}
                </p>

                <div className="pt-6 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-2.5 rounded-xl bg-[#153E75] text-white text-xs font-bold cursor-pointer"
                  >
                    {lang === 'en' ? 'Close' : 'Fermer'}
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
