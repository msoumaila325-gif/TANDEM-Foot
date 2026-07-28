import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { TESTIMONIALS_DATA } from '../data/academyData';
import { Star, MessageSquareQuote, Mail, Send, CheckCircle2 } from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  // Exactly 3 testimonials displayed on 1 row
  const testimonials = TESTIMONIALS_DATA.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-[#153E75] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>{lang === 'en' ? 'Testimonials' : 'Témoignages'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'What People Say' : 'Ce Que Disent Nos Familles & Partenaires'}
          </h2>
        </div>

        {/* 3 Cards on 1 Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal">
                  "{item.quote[lang]}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div className="overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-bold text-[#153E75] font-heading truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-500 truncate">
                    {item.role[lang]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA right below Testimonials */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-200/80 max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'RESTEZ INFORMÉ EN AVANT-PREMIÈRE' : 'STAY INFORMED IN REAL-TIME'}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#153E75]">
            {lang === 'fr' 
              ? 'Abonnez-vous à la Newsletter Officielle du TFC' 
              : 'Subscribe to the Official TFC Newsletter'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed font-normal">
            {lang === 'fr'
              ? 'Recevez directement dans votre boîte mail les dates de détection, les résumés de matchs et les actualités exclusives du Tandem Football Club.'
              : 'Get tryout dates, match highlights, and exclusive Tandem Football Club news delivered directly to your inbox.'}
          </p>

          {newsletterSubscribed ? (
            <div className="p-3.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#22C55E] text-xs font-bold flex items-center justify-center gap-2 max-w-md mx-auto mt-4">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              <span>{lang === 'fr' ? 'Abonnement confirmé ! Merci pour votre confiance.' : 'Subscribed successfully! Thank you.'}</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-2.5 max-w-md mx-auto pt-2">
              <div className="relative flex-1 w-full">
                <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder={lang === 'fr' ? 'Votre adresse email...' : 'Your email address...'}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#153E75] hover:bg-[#1E4E92] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shrink-0 shadow-xs"
              >
                <span>{lang === 'fr' ? 'S\'Abonner' : 'Subscribe'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};



