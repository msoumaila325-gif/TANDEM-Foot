import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NewsArticle, Language } from '../types';
import { NEWS_DATA } from '../data/academyData';
import { Newspaper, Calendar, Clock, ArrowUpRight, X, Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface LatestNewsProps {
  lang: Language;
}

export const LatestNews: React.FC<LatestNewsProps> = ({ lang }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  const categories = [
    { id: 'Tous', name: { fr: 'Tous les articles', en: 'All Stories' } },
    { id: 'Détections', name: { fr: 'Détections & Essais', en: 'Tryouts & Scouting' } },
    { id: 'Compétition', name: { fr: 'Compétitions & Tournois', en: 'Tournaments & Matches' } },
    { id: 'Académie', name: { fr: 'Vie de l\'Académie', en: 'Academy Life' } }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <section id="news" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E4E92]/10 text-[#1E4E92] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1E4E92]/20">
            <Newspaper className="w-4 h-4 text-[#1E4E92]" />
            <span>{lang === 'en' ? 'Official Press & News' : 'Actualités & Flash Info'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Latest Academy Milestones & Announcements' : 'Dernières Nouvelles Et Événements'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            {lang === 'en'
              ? 'Stay updated on tournament victories, scouting events, and academy developments in Bamako.'
              : 'Suivez nos victoires en tournois, nos journées de détection et nos événements exclusifs.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#153E75] text-white shadow-md scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.name[lang]}
            </button>
          ))}
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
              className={`rounded-3xl bg-[#F8FAFC] border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between ${
                art.featured ? 'lg:col-span-2 flex-col sm:flex-row' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${art.featured ? 'sm:w-1/2 h-64 sm:h-auto' : 'h-56'}`}>
                <img
                  src={art.image}
                  alt={art.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#22C55E] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                  {art.category[lang]}
                </div>
              </div>

              <div className={`p-6 sm:p-8 flex-1 flex flex-col justify-between ${art.featured ? 'sm:w-1/2' : ''}`}>
                <div>
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

                  <h3 className="text-lg sm:text-xl font-bold text-[#153E75] font-heading group-hover:text-[#2563EB] transition-colors leading-snug">
                    {art.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed font-medium">
                    {art.summary[lang]}
                  </p>
                </div>

                {/* News CTA Pill Button */}
                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="w-full bg-white hover:bg-slate-100 text-[#153E75] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center justify-between border border-slate-200 shadow-sm cursor-pointer transition-all group/btn"
                  >
                    <span>{lang === 'en' ? 'Read Full Article' : 'Lire L\'Article Complet'}</span>
                    <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PREMIUM NEWSLETTER CTA BANNER */}
        <div className="mt-16 bg-gradient-to-r from-[#153E75] via-[#1E4E92] to-[#153E75] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#22C55E] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'fr' ? 'RESTEZ INFORMÉ EN AVANT-PREMIÈRE' : 'STAY INFORMED IN REAL-TIME'}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black font-heading tracking-tight leading-tight">
              {lang === 'fr' 
                ? 'Abonnez-vous à la Newsletter Officielle du TFC' 
                : 'Subscribe to the Official TFC Newsletter'}
            </h3>

            <p className="text-sm sm:text-base text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed">
              {lang === 'fr'
                ? 'Recevez directement dans votre boîte mail les dates de détection, les résumés de matchs et les actualités exclusives du Tandem Football Club.'
                : 'Get tryout dates, match highlights, and exclusive Tandem Football Club news delivered directly to your inbox.'}
            </p>

            {/* Newsletter Input Form */}
            {newsletterSubscribed ? (
              <div className="p-4 rounded-full bg-[#22C55E]/20 border border-[#22C55E] text-white text-sm font-bold flex items-center justify-center gap-2 max-w-md mx-auto">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
                <span>{lang === 'fr' ? 'Abonnement confirmé ! Merci pour votre confiance.' : 'Subscribed successfully! Thank you.'}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto pt-2">
                <div className="relative flex-1 w-full">
                  <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder={lang === 'fr' ? 'Votre adresse email...' : 'Your email address...'}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none shadow-inner"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#22C55E] hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all active:scale-95"
                >
                  <span>{lang === 'fr' ? 'S\'Abonner' : 'Subscribe'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors cursor-pointer"
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
                  <span className="px-3.5 py-1 rounded-full bg-[#22C55E] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {selectedArticle.category[lang]}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading mt-2">
                    {selectedArticle.title[lang]}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
                  {selectedArticle.content[lang]}
                </p>

                <div className="pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-2.5 rounded-full bg-[#153E75] hover:bg-[#1E4E92] text-white text-xs font-bold cursor-pointer transition-colors"
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
