import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Language } from '../types';
import { ACADEMY_INFO } from '../data/academyData';
import { X, CheckCircle2, QrCode, ShieldCheck, Ticket, Download, ArrowRight } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    playerName: '',
    birthYear: '2012',
    category: 'U13',
    parentName: '',
    parentPhone: '',
    preferredSchedule: 'Weekend'
  });

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getCategoryFromYear = (yearStr: string) => {
    const year = parseInt(yearStr);
    const age = 2026 - year;
    if (age <= 11) return 'U11';
    if (age <= 13) return 'U13';
    if (age <= 15) return 'U15';
    if (age <= 17) return 'U17';
    return 'U20';
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-8 shadow-2xl relative border border-gray-200 my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 1 ? (
            <form onSubmit={handleNext} className="space-y-6">
              <div className="flex items-center gap-3">
                <Logo size="sm" lightText={false} />
                <div>
                  <h3 className="text-xl font-bold text-[#153E75] font-heading">
                    {lang === 'en' ? 'Academy Enrollment & Trial' : 'Inscription & Détection'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {lang === 'en' ? 'Reserve an official trial ticket for your child.' : 'Réservez un billet de détection officiel pour votre enfant.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#153E75] uppercase mb-1">
                    {lang === 'en' ? 'Player Full Name' : 'Nom Complet du Joueur'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ibrahim Sidibé"
                    value={formData.playerName}
                    onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#1E4E92] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#153E75] uppercase mb-1">
                    {lang === 'en' ? 'Birth Year' : 'Année de Naissance'}
                  </label>
                  <input
                    type="number"
                    required
                    min="2005"
                    max="2017"
                    value={formData.birthYear}
                    onChange={(e) => {
                      const yr = e.target.value;
                      setFormData({
                        ...formData,
                        birthYear: yr,
                        category: getCategoryFromYear(yr)
                      });
                    }}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#1E4E92] focus:outline-none font-bold text-[#1E4E92]"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#DCEBFF]/50 border border-[#1E4E92]/20 flex items-center justify-between text-xs">
                <span className="font-bold text-[#153E75]">
                  {lang === 'en' ? 'Assigned Category:' : 'Catégorie Assignée:'}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#1E4E92] text-white font-extrabold">
                  {formData.category} Squad
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#153E75] uppercase mb-1">
                    {lang === 'en' ? 'Parent Name' : 'Nom du Parent'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Parent / Guardian"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#1E4E92] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#153E75] uppercase mb-1">
                    {lang === 'en' ? 'Phone Number' : 'Numéro Téléphone'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+223 76 ..."
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#1E4E92] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#1E4E92] hover:bg-[#153E75] text-white font-bold text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{lang === 'en' ? 'Generate Official Pass' : 'Générer Le Pass Officiel'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* Digital Trial Pass Display */
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'en' ? 'Trial Ticket Reserved' : 'Billet Détection Confirmé'}</span>
                </div>
                <h3 className="text-xl font-bold text-[#153E75] font-heading">
                  {lang === 'en' ? 'Official Player Pass' : 'Pass Joueur Officiel'}
                </h3>
              </div>

              {/* Digital Pass Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#153E75] via-[#1E4E92] to-[#0F2B54] text-white shadow-2xl relative border border-white/20">
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <Logo size="sm" lightText={true} />
                  <span className="px-3 py-1 rounded-full bg-[#DCEBFF] text-[#153E75] text-xs font-extrabold">
                    {formData.category} SQUAD
                  </span>
                </div>

                <div className="py-6 space-y-3">
                  <div>
                    <span className="text-[10px] text-[#DCEBFF]/70 uppercase font-bold tracking-wider">
                      {lang === 'en' ? 'Athlete Name' : 'Nom de L\'Athlète'}
                    </span>
                    <div className="text-xl font-extrabold font-heading text-white">
                      {formData.playerName || 'ATHLETE NAME'}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[#DCEBFF]/70 font-semibold block">{lang === 'en' ? 'Parent Contact' : 'Parent'}</span>
                      <span className="font-bold">{formData.parentPhone}</span>
                    </div>
                    <div>
                      <span className="text-[#DCEBFF]/70 font-semibold block">{lang === 'en' ? 'Trial Venue' : 'Lieu Détection'}</span>
                      <span className="font-bold">N'Tabacoro, Bamako</span>
                    </div>
                  </div>
                </div>

                {/* Barcode / QR Simulation */}
                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-8 h-8 text-[#DCEBFF]" />
                    <div className="text-[10px] font-mono text-[#DCEBFF]">
                      TFC-PASS-2026-88492
                    </div>
                  </div>
                  <Ticket className="w-6 h-6 text-[#3B82F6]" />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => alert(lang === 'en' ? 'Ticket pass downloaded to device!' : 'Pass téléchargé !')}
                  className="flex-1 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#153E75] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Download Ticket' : 'Télécharger Pass'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-[#1E4E92] text-white font-bold text-xs cursor-pointer"
                >
                  {lang === 'en' ? 'Done' : 'Terminer'}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
