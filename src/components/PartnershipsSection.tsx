import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Award, Shield, CheckCircle2, Building, Send, X, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { SPONSORSHIP_DATA } from '../data/academyData';

interface PartnershipsProps {
  lang: Language;
}

export const PartnershipsSection: React.FC<PartnershipsProps> = ({ lang }) => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [partnerForm, setPartnerForm] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    packageInterest: 'Sponsor Principal (Title Partner)'
  });

  const partnerLogos = [
    { name: 'FEMAFOOT Mali', category: 'Fédération Nationale', logo: '⚽' },
    { name: 'CAF Youth Development', category: 'Confédération Africaine', logo: '🏆' },
    { name: 'Nike Football Academy', category: 'Équipementier', logo: '✔️' },
    { name: 'Orange Mali', category: 'Télécoms & Tech', logo: '🟧' },
    { name: 'Air Burkina', category: 'Transport Officiel', logo: '✈️' },
    { name: 'Banque de Développement du Mali', category: 'Partenaire Financier', logo: '🏦' },
    { name: 'Centre Médical N\'Tabacoro', category: 'Pôle Santé & Récupération', logo: '🏥' },
    { name: 'West Africa Scout Network', category: 'Réseau de Recrutement', logo: '🌍' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setDownloadModalOpen(false);
      setPartnerForm({ companyName: '', contactPerson: '', email: '', phone: '', packageInterest: 'Sponsor Principal (Title Partner)' });
    }, 3000);
  };

  return (
    <section id="partners" className="py-20 sm:py-28 bg-[#0F284D] text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#153E75]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
            {lang === 'en' ? (
              <>
                BECOME A PARTNER OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-white to-[#3B82F6]">TANDEM FOOT CLUB</span>
              </>
            ) : (
              <>
                DEVENIR PARTENAIRE DU <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-white to-[#3B82F6]">TANDEM FOOT CLUB</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#DCEBFF]/85 leading-relaxed">
            {lang === 'en'
              ? 'Support youth football development in Bamako and associate your company with a structured athletic and educational initiative.'
              : 'Soutenez la formation des jeunes footballeurs à Bamako et associez votre entreprise à un projet sportif et éducatif structuré.'}
          </p>
        </div>

        {/* Official Partners Grid */}
        <div className="mb-16">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#60A5FA] text-center mb-8">
            {lang === 'en' ? 'OFFICIAL ACADEMY PARTNERS' : 'NOS PARTENAIRES OFFICIELS'}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partnerLogos.map((partner, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all hover:scale-105 flex flex-col items-center justify-center text-center group"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{partner.logo}</span>
                <span className="font-extrabold text-sm text-white">{partner.name}</span>
                <span className="text-[11px] text-[#60A5FA] font-medium mt-0.5">{partner.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SPONSORSHIP_DATA.map((pack) => (
            <div
              key={pack.id}
              className="rounded-3xl bg-[#153E75]/80 border border-white/15 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden hover:border-[#60A5FA] transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${pack.badgeColor}`}>
                    {pack.tier} Partner
                  </span>
                  <span className="text-xs text-gray-300 font-bold">{pack.investment}</span>
                </div>

                <h4 className="text-xl font-black text-white font-heading mb-4 leading-snug">
                  {lang === 'fr' ? pack.title.fr : pack.title.en}
                </h4>

                <ul className="space-y-3 mb-8">
                  {(lang === 'fr' ? pack.benefits.fr : pack.benefits.en).map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-[#DCEBFF]/90 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#00FF66] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setPartnerForm({ ...partnerForm, packageInterest: lang === 'fr' ? pack.title.fr : pack.title.en });
                  setDownloadModalOpen(true);
                }}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#1E4E92] to-[#2563EB] hover:from-[#2563EB] hover:to-[#3B82F6] font-extrabold text-xs text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>{lang === 'en' ? 'Become a Partner' : 'Devenir Partenaire'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Download Brochure Banner */}
        <div className="bg-gradient-to-r from-[#153E75] via-[#1E4E92] to-[#153E75] rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-[#00FF66]/20 text-[#00FF66] text-xs font-black uppercase tracking-wider">
              Dossier de Sponsoring 2026
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
              {lang === 'en' ? 'Download Official Academy Sponsorship Deck' : 'Téléchargez le Dossier de Sponsoring Officiel'}
            </h3>
            <p className="text-sm text-[#DCEBFF]/85">
              {lang === 'en'
                ? 'Discover our economic model, media reach, academy milestones, and brand integration opportunities in Mali and West Africa.'
                : 'Découvrez notre modèle économique, notre audience média, les jalons de l\'académie et les opportunités d\'intégration de marque.'}
            </p>
          </div>

          <button
            onClick={() => setDownloadModalOpen(true)}
            className="py-4 px-8 rounded-2xl bg-[#00FF66] hover:bg-emerald-400 text-black font-black text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_0_25px_rgba(0,255,102,0.4)] whitespace-nowrap"
          >
            <Download className="w-5 h-5" />
            <span>{lang === 'en' ? 'Request Sponsorship PDF' : 'Recevoir le Dossier PDF (2026)'}</span>
          </button>
        </div>
      </div>

      {/* PARTNERSHIP / BROCHURE MODAL */}
      <AnimatePresence>
        {downloadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#12141A] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white/20 shadow-2xl relative text-white my-auto"
            >
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#00FF66] mx-auto animate-bounce" />
                  <h3 className="text-2xl font-black text-white font-heading">
                    {lang === 'en' ? 'Sponsorship Deck Sent!' : 'Dossier Envoyé avec Succès !'}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {lang === 'en'
                      ? 'Thank you for your interest in TANDEM FOOT CLUB. The official 2026 Sponsorship Deck has been sent to your email.'
                      : 'Merci pour votre intérêt pour le TANDEM FOOT CLUB. Le dossier de sponsoring officiel 2026 vous a été transmis par courriel.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="p-2.5 rounded-2xl bg-[#2563EB]/20 text-[#60A5FA]">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white font-heading">
                        {lang === 'en' ? 'Request Sponsorship Brochure' : 'Demande de Dossier de Sponsoring'}
                      </h3>
                      <p className="text-xs text-gray-400">TANDEM FOOT CLUB — Saison 2026</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        {lang === 'en' ? 'Company / Institution Name *' : 'Nom de l\'Entreprise / Institution *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerForm.companyName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })}
                        placeholder="e.g. TotalEnergies Mali / Orange"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#60A5FA]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        {lang === 'en' ? 'Contact Person Name *' : 'Nom du Responsable / Contact *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerForm.contactPerson}
                        onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                        placeholder="e.g. Mamadou Traoré (Directeur Marketing)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#60A5FA]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1">
                          {lang === 'en' ? 'Corporate Email *' : 'E-mail Professionnel *'}
                        </label>
                        <input
                          type="email"
                          required
                          value={partnerForm.email}
                          onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                          placeholder="direction@entreprise.ml"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#60A5FA]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1">
                          {lang === 'en' ? 'Phone Number *' : 'Téléphone *'}
                        </label>
                        <input
                          type="tel"
                          required
                          value={partnerForm.phone}
                          onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                          placeholder="+223 76 00 00 00"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#60A5FA]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        {lang === 'en' ? 'Form of Partnership' : 'Formule de Partenariat Souhaitée'}
                      </label>
                      <select
                        value={partnerForm.packageInterest}
                        onChange={(e) => setPartnerForm({ ...partnerForm, packageInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#60A5FA]"
                      >
                        <option value="Sponsor Principal (Title Partner)">Sponsor Principal (Title Partner)</option>
                        <option value="Partenaire Équipement & Entraînement">Partenaire Équipement & Entraînement (Gold)</option>
                        <option value="Partenaire Médical & Performance">Partenaire Médical & Performance</option>
                        <option value="Partenaire Institutionnel / Mécénat">Partenaire Institutionnel / Mécénat</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1E4E92] to-[#2563EB] text-white font-extrabold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-4"
                  >
                    <Download className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Download PDF & Request Contact' : 'Télécharger le PDF & Être Contacté'}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
