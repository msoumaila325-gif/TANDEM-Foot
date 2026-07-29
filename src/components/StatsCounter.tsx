import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Language } from '../types';

interface StatsProps {
  lang: Language;
}

interface CounterNumberProps {
  value: string;
}

const CounterNumber: React.FC<CounterNumberProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    if (value === "24/7") {
      setDisplayValue("24/7");
      return;
    }

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2] || "";

    const controls = animate(0, targetNum, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(current) {
        setDisplayValue(`${Math.floor(current)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

export const StatsCounter: React.FC<StatsProps> = ({ lang }) => {
  const statsList = [
    { label: { en: "Players Trained", fr: "Joueurs Formés" }, val: "150+" },
    { label: { en: "Weekly Sessions", fr: "Séances par Semaine" }, val: "18+" },
    { label: { en: "CAF & FIFA Coaches", fr: "Entraîneurs Certifiés" }, val: "12" },
    { label: { en: "Matches Played", fr: "Matchs & Tournois" }, val: "240+" },
    { label: { en: "Regional Titles", fr: "Titres & Trophées" }, val: "8" },
    { label: { en: "24/7 Medical & Care", fr: "Encadrement & Suivi" }, val: "24/7" },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 text-center">
          {statsList.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col items-center justify-center space-y-2 p-3 rounded-2xl transition-colors hover:bg-slate-50/80 cursor-default group"
            >
              {/* Big Minimalist Number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-light font-heading text-slate-900 group-hover:text-[#2563EB] tracking-tight leading-none transition-colors">
                <CounterNumber value={st.val} />
              </div>

              {/* Muted Subtitle Label */}
              <div className="text-xs sm:text-sm text-slate-500 font-medium max-w-[140px] leading-snug group-hover:text-slate-800 transition-colors">
                {st.label[lang]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


