import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Download,
  Users,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Shield,
  Award,
  Sparkles,
  ChevronRight,
  X,
  Mail,
  Phone,
  Building
} from 'lucide-react';
import { Language } from '../types';
import {
  imgWa0071,
  imgWa0057,
  imgWa0043,
  imgWa0073,
  pexelsChris,
  pexelsArafat
} from '../image';

interface EquipesHubProps {
  lang: Language;
  onOpenEnrollment: () => void;
}

interface TeamCardData {
  id: string;
  code: string;
  title: Record<Language, string>;
  ageRange: string;
  league: Record<Language, string>;
  desc: Record<Language, string>;
  image: string;
  badgeBg: string;
}

export const EquipesHub: React.FC<EquipesHubProps> = ({ lang, onOpenEnrollment }) => {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [partnerForm, setPartnerForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Concise Team Categories
  const teams: TeamCardData[] = [
    {
      id: 'senior',
      code: 'Senior',
      title: { fr: "Équipe Première", en: "First Team" },
      ageRange: "18+ ans",
      league: { fr: "Régionale 1 & Coupe du Mali", en: "Regional 1 & Mali Cup" },
      desc: {
        fr: "Vitrine du club engagée dans le championnat régional de Bamako. Un jeu moderne axé sur la possession et l'intensité.",
        en: "Flagship team competing in Bamako regional league. Modern game focused on possession and high intensity."
      },
      image: imgWa0071,
      badgeBg: "bg-[#2563EB]"
    },
    {
      id: 'u20',
      code: 'U20',
      title: { fr: "Équipe U20 Élite", en: "U20 Elite Team" },
      ageRange: "18 - 20 ans",
      league: { fr: "Ligue Espoirs de Bamako", en: "Bamako Reserve League" },
      desc: {
        fr: "Dernier palier de la formation. Rigueur tactique et préparation directe aux exigences du football professionnel.",
        en: "Final formation stage preparing young talents for senior professional requirements."
      },
      image: pexelsChris,
      badgeBg: "bg-indigo-600"
    },
    {
      id: 'u17',
      code: 'U17',
      title: { fr: "Équipe U17 Cadets", en: "U17 Cadet Team" },
      ageRange: "15 - 17 ans",
      league: { fr: "Championnat Cadets Bamako", en: "Bamako Cadet League" },
      desc: {
        fr: "Apprentissage de la compétition, vitesse d'exécution et perfectionnement des schémas tactiques sur grand terrain.",
        en: "Competitive transition focusing on execution speed and tactical discipline on full pitches."
      },
      image: imgWa0057,
      badgeBg: "bg-[#153E75]"
    },
    {
      id: 'u15',
      code: 'U15',
      title: { fr: "Équipe U15 Minimes", en: "U15 Minims Team" },
      ageRange: "13 - 15 ans",
      league: { fr: "Tournois Préformation", en: "Pre-Formation League" },
      desc: {
        fr: "Maîtrise technique individuelle, perception spatiale et principes fondamentaux du jeu collectif.",
        en: "Technical ball mastery, spatial awareness and core collective principles."
      },
      image: imgWa0043,
      badgeBg: "bg-emerald-600"
    },
    {
      id: 'u13-u11',
      code: 'U13 / U11',
      title: { fr: "École de Football", en: "Youth Football School" },
      ageRange: "9 - 13 ans",
      league: { fr: "Plateaux Inter-Académies", en: "Inter-Academy Festivals" },
      desc: {
        fr: "Plaisir du jeu, développement psychomoteur et apprentissage des gestes techniques de base.",
        en: "Pure joy of play, motor skill development and grassroots technical learning."
      },
      image: imgWa0073,
      badgeBg: "bg-sky-600"
    },
    {
      id: 'feminine',
      code: 'Féminine',
      title: { fr: "Section Féminine", en: "Women's Section" },
      ageRange: "12 - 20+ ans",
      league: { fr: "Ligue Féminine de Bamako", en: "Bamako Women's League" },
      desc: {
        fr: "Cadre structuré et sécurisé pour promouvoir l'excellence et le leadership des jeunes filles dans le sport.",
        en: "Structured and empowering environment fostering excellence and female leadership in football."
      },
      image: pexelsArafat,
      badgeBg: "bg-rose-600"
    }
  ];

  // Downloading official sponsorship document
  const handleDownloadDeck = () => {
    const content = `TANDEM FOOT CLUB - DOSSIER DE SPONSORING 2026
--------------------------------------------------
Complexe Sportif N'Tabacoro, Bamako, Mali
Contact: +223 76 12 90 35 / contact@tandemfootclub.ml

1. NOS ÉQUIPES (U11 à Senior)
- Équipe Première Senior (Régionale 1 & Coupe du Mali)
- Équipe U20 Espoirs (Tremplin Professionnel)
- Équipe U17 Cadets (Championnat Régional)
- Équipe U15 Minimes (Préformation)
- Écoles U13/U11 (Éveil & Psychomotricité)
- Section Féminine (Inclusivité & Performance)

2. OPPORTUNITÉS DE PARTENARIAT 2026
- Sponsor Maillot Principal (Face Avant)
- Partenaire Équipement & Tenues de Séance
- Partenaire Complexe & Panneaux de Terrain
- Mécénat & Bourses d'Études RSE

Téléchargez la version complète sur https://tandemfootclub.ml`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TFC_Dossier_Sponsoring_2026.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setPartnerModalOpen(false);
      setPartnerForm({ companyName: '', contactName: '', email: '', phone: '', message: '' });
    }, 2500);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* 1. HERO SPONSORSHIP CTA CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#153E75] via-[#1E4E92] to-[#0F284D] p-6 sm:p-10 text-white shadow-xl border border-white/10"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                {lang === 'en' ? 'Sponsor Bamako\'s Premier Academy' : 'Associez Votre Image À L\'Excellence'}
              </h1>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                {lang === 'en'
                  ? 'Discover our competitive team categories (U11 to Senior) and partner options for maximum brand impact.'
                  : 'Découvrez nos 6 catégories d\'équipes et nos formules d\'exposition de marque sur les maillots et au Complexe de N\'Tabacoro.'}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleDownloadDeck}
                className="px-5 py-3.5 rounded-2xl bg-[#22C55E] hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Dossier Sponsoring 2026</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setPartnerModalOpen(true)}
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <Award className="w-4 h-4 text-[#60A5FA]" />
                <span>Devenir Partenaire</span>
              </motion.button>
            </div>
          </div>

          {downloadSuccess && (
            <div className="mt-4 pt-3 border-t border-white/10 text-center text-xs font-bold text-[#22C55E]">
              ✓ Le dossier de sponsoring 2026 a été téléchargé !
            </div>
          )}
        </motion.div>


        {/* 2. NOS ÉQUIPES (CLEAN GRID CARDS) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#153E75] font-heading tracking-tight">
                {lang === 'en' ? 'Our Teams' : 'Nos Équipes'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {lang === 'en'
                  ? '6 categories from grassroots U11 to senior regional competition.'
                  : '6 catégories représentatives, de la préformation à l\'équipe senior.'}
              </p>
            </div>

            <button
              onClick={onOpenEnrollment}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-[#2563EB] font-bold text-xs hover:bg-[#2563EB] hover:text-white transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>Rejoindre une Équipe</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={t.image}
                      alt={t.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold text-white ${t.badgeBg}`}>
                        {t.code}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-900/80 text-white text-[11px] font-bold">
                        {t.ageRange}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-bold font-heading text-white">
                        {t.title[lang]}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-bold">
                      <Trophy className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{t.league[lang]}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t.desc[lang]}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-[11px] font-bold text-[#2563EB]">
                  <span>Complexe N'Tabacoro</span>
                  <Shield className="w-4 h-4 text-slate-300 group-hover:text-[#2563EB] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 3. NOS PARTENAIRES (CLEAN LOGO GRID) */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-[#153E75] font-heading">
              {lang === 'en' ? 'Our Trusted Partners' : 'Nos Partenaires & Soutiens'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'en'
                ? 'Institutional bodies and brand partners supporting our academy.'
                : 'Partenaires sportifs, institutionnels et de santé accompagnant le club.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: 'FEMAFOOT Mali', type: 'Fédération Nationale' },
              { name: 'CAF Network', type: 'Confédération Africaine' },
              { name: 'Equipementier Nike', type: 'Fournisseur Officiel' },
              { name: 'Orange Mali', type: 'Partenaire Média' },
              { name: 'Air Burkina', type: 'Transporteur Officiel' },
              { name: 'BDM-SA', type: 'Bourses d\'Études' },
              { name: 'Centre Médical', type: 'Santé & Performance' },
              { name: 'Ligue de Bamako', type: 'Organisation Régionale' }
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-center hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
              >
                <div className="font-extrabold text-xs text-slate-900">{p.name}</div>
                <div className="text-[10px] text-slate-500 font-medium">{p.type}</div>
              </div>
            ))}
          </div>
        </section>


        {/* 4. REJOINDRE L'ÉQUIPE CTA (BANNER WITH BACKGROUND IMAGE) */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 text-white min-h-[380px] sm:min-h-[420px] flex items-center"
        >
          {/* Background Image with Refined Contrast Overlay */}
          <img
            src={imgWa0071}
            alt="Rejoindre l'équipe Tandem Foot Club"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-[#153E75]/70 to-slate-950/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />

          {/* Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 py-10 sm:py-14 text-center space-y-6">

            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-[1.12]">
              {lang === 'en'
                ? 'Ready To Join The Tandem Foot Club Family?'
                : 'Prêt À Rejoindre L\'Aventure Et Révéler Votre Potentiel ?'}
            </h2>

            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl mx-auto font-medium">
              {lang === 'en'
                ? 'Enroll your child or register for our next detection trials in Bamako (U11 to Senior). Train in world-class facilities at N\'Tabacoro under CAF certified coaches.'
                : 'Inscrivez votre enfant ou participez à nos sessions de détection à N\'Tabacoro, Bamako. Des catégories U11 à Senior, profitez d\'un encadrement diplômé CAF et d\'infrastructures modernes.'}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenEnrollment}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#22C55E] hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all flex items-center justify-center gap-3 cursor-pointer shadow-[0_0_30px_rgba(34,197,94,0.4)]"
              >
                <span>{lang === 'en' ? 'Join The Team Now' : 'Rejoindre L\'Équipe Aujourd\'hui'}</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleDownloadDeck}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-[#60A5FA]" />
                <span>{lang === 'en' ? 'Download Membership Brochure' : 'Télécharger la Brochure d\'Adhésion'}</span>
              </motion.button>
            </div>
          </div>
        </motion.section>

      </div>


      {/* MODAL OVERLAY FOR QUICK BECOME PARTNER */}
      <AnimatePresence>
        {partnerModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0F284D] rounded-2xl max-w-md w-full p-6 border border-white/20 shadow-2xl relative text-white"
            >
              <button
                onClick={() => setPartnerModalOpen(false)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2.5 mb-4">
                <Award className="w-5 h-5 text-[#60A5FA]" />
                <h3 className="text-lg font-bold text-white font-heading">
                  Devenir Partenaire
                </h3>
              </div>

              {formSubmitted ? (
                <div className="text-center py-6 space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#22C55E] mx-auto animate-bounce" />
                  <div className="font-bold text-sm text-white">Demande reçue !</div>
                  <p className="text-xs text-blue-200">Nous vous recontacterons très vite.</p>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Nom de l'entreprise *"
                    value={partnerForm.companyName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Votre nom *"
                    value={partnerForm.contactName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-mail *"
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Téléphone *"
                    value={partnerForm.phone}
                    onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#22C55E] hover:bg-emerald-400 text-slate-950 font-black text-xs cursor-pointer"
                  >
                    Envoyer
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
