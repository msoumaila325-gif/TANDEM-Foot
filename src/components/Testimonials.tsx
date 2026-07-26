import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial, Language } from '../types';
import { TESTIMONIALS_DATA } from '../data/academyData';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E4E92] text-white text-xs font-bold uppercase tracking-widest mb-4">
            <MessageSquareQuote className="w-4 h-4 text-[#DCEBFF]" />
            <span>{lang === 'en' ? 'Community Voices' : 'Témoignages'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'What Parents & Partners Say' : 'Ce Que Disent Parents Et Partenaires'}
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="relative rounded-3xl bg-white p-8 sm:p-12 border border-gray-200 shadow-xl overflow-hidden">
          <Quote className="absolute top-6 right-6 w-24 h-24 text-[#DCEBFF]/50 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-8 relative z-10"
            >
              {/* Avatar */}
              <img
                src={current.avatar}
                alt={current.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl object-cover border-4 border-[#1E4E92] shadow-lg flex-shrink-0"
                referrerPolicy="no-referrer"
              />

              {/* Content */}
              <div className="space-y-4 text-center md:text-left flex-1">
                {/* Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#3B82F6] text-[#3B82F6]" />
                  ))}
                </div>

                <p className="text-base sm:text-xl text-gray-700 italic font-medium leading-relaxed">
                  "{current.quote[lang]}"
                </p>

                <div>
                  <h4 className="text-lg font-bold text-[#153E75] font-heading">
                    {current.name}
                  </h4>
                  <span className="text-xs font-bold text-[#1E4E92] uppercase tracking-wider">
                    {current.role[lang]}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#1E4E92]' : 'w-2.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-[#F5F7FA] text-[#153E75] hover:bg-[#1E4E92] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[#F5F7FA] text-[#153E75] hover:bg-[#1E4E92] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
