import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { COACHES_DATA } from '../data/academyData';
import { Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';

interface CoachingStaffProps {
  lang: Language;
}

export const CoachingStaff: React.FC<CoachingStaffProps> = ({ lang }) => {
  return (
    <section id="staff" className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-200/80 relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Corporate Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#153E75] font-heading tracking-tight">
            {lang === 'en' ? 'Technical Leadership & Coaching Staff' : 'Encadrement & Staff Technique'}
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            {lang === 'en'
              ? 'A dedicated team of CAF certified professionals combining tactical analysis, athletic preparation, and youth football development in Bamako.'
              : 'Une équipe d\'éducateurs diplômés CAF spécialisés en préparation physique, analyse tactique et accompagnement des jeunes.'}
          </p>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COACHES_DATA.map((coach, idx) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* License Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#153E75] text-[10px] font-extrabold border border-slate-200/80 shadow-xs flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{coach.license.split('&')[0]}</span>
                  </div>

                  {/* Name Overlay at bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold font-heading leading-tight drop-shadow-xs">
                      {coach.name}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-3">
                  {/* Role Pill */}
                  <div className="inline-block px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100/80 text-[#2563EB] text-[11px] font-bold">
                    {coach.role[lang]}
                  </div>

                  {/* Specialty */}
                  <div className="flex items-start gap-2 text-xs text-slate-600 pt-1">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span className="font-medium line-clamp-1">
                      {coach.specialty[lang]}
                    </span>
                  </div>

                  {/* Bio excerpt */}
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed pt-1">
                    {coach.bio[lang]}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>{coach.experience[lang]}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


