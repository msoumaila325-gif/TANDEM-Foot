import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Language } from '../types';
import {
  X,
  Download,
  CheckCircle2,
  Phone,
  FileText,
  MapPin,
  ShieldCheck,
  UserCheck,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';

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
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [callbackSent, setCallbackSent] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [nameInput, setNameInput] = useState('');

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

  const handleDownloadBrochure = () => {
    const documentContent = `===================================================================
                TANDEM FOOT CLUB - BAMAKO
          BROCHURE D'ADHÉSION & DOSSIER D'INSCRIPTION 2026
===================================================================

Complexe Sportif N'Tabacoro, Bamako, Mali
Infoline / Secrétariat: +223 76 12 90 35 / contact@tandemfootclub.ml
Site Officiel: https://tandemfootclub.ml

-------------------------------------------------------------------
1. PRÉSENTATION DE L'ACADÉMIE
-------------------------------------------------------------------
Le Tandem Foot Club (TFC) est un centre de formation et club sportif de
référence basé à Bamako (N'Tabacoro). Le club accueille les jeunes talents
des catégories U11 jusqu'à Senior (garçons et filles) dans un cadre
structuré, sécurisé et performant.

-------------------------------------------------------------------
2. PIÈCES À FOURNIR POUR L'INSCRIPTION
-------------------------------------------------------------------
Pour valider l'adhésion d'un joueur, veuillez fournir les éléments suivants:

[ ] 1. Copie d'extrait d'acte de naissance ou carte d'identité du joueur
[ ] 2. Deux (2) photos d'identité récentes (fond blanc)
[ ] 3. Un certificat médical d'aptitude à la pratique du football (< 3 mois)
[ ] 4. La présente fiche d'inscription dûment complétée et signée par le tuteur
[ ] 5. Copie de la pièce d'identité du tuteur légal

-------------------------------------------------------------------
3. CATÉGORIES & PROGRAMMES DE FORMATION
-------------------------------------------------------------------
- ÉCOLE DE FOOT (U11 & U13): Éveil psychomoteur, règles du jeu, motricité.
- PRÉFORMATION (U15): Perfectionnement technique individuel & jeu collectif.
- FORMATION ÉLITE (U17 & U20): Rigueur tactique, préparation physique et mentale.
- ÉQUIPE PREMIÈRE (Senior): Compétition régionale & Coupe du Mali.
- SECTION FÉMININE: Programme dédié au développement du football féminin.

-------------------------------------------------------------------
4. INFRASTRUCTURES & ÉQUIPEMENTS INCLUS
-------------------------------------------------------------------
- Terrains synthétiques de dernière génération au Complexe de N'Tabacoro.
- Encadrement technique qualifié par des entraîneurs certifiés CAF.
- Dotation du pack équipements (Tenues de séance & maillot officiel).
- Suivi médical préventif et accompagnement éducatif.

-------------------------------------------------------------------
5. DÉPÔT ET ADMISSION
-------------------------------------------------------------------
Les dossiers complétés sont à déposer directement au Secrétariat du Club:
📍 Complexe Sportif N'Tabacoro, Bamako, Mali
📞 Téléphone / WhatsApp: +223 76 12 90 35
✉️ Email: contact@tandemfootclub.ml

Date de délivrance: Saison 2026 - Tandem Foot Club Bamako
===================================================================`;

    const blob = new Blob([documentContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'TFC_Brochure_Adhesion_2026.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCallbackSent(true);
    setTimeout(() => {
      setCallbackSent(false);
      setShowCallbackForm(false);
      setNameInput('');
      setPhoneInput('');
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl relative border border-slate-200 my-auto max-h-[92vh] overflow-y-auto flex flex-col justify-between"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-5">
            {/* Modal Header */}
            <div className="flex items-start gap-3.5 pr-8">
              <Logo size="sm" lightText={false} />
              <div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-[#153E75] font-heading leading-snug">
                  {lang === 'en'
                    ? 'Academy Membership Brochure'
                    : 'Brochure d\'Adhésion & Inscription 2026'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'en'
                    ? 'Official presentation document and enrollment requirements for Tandem Foot Club.'
                    : 'Document officiel de présentation et dossier d\'inscription au Tandem Foot Club Bamako.'}
                </p>
              </div>
            </div>

            {/* Official Document Viewer Box */}
            <div className="rounded-2xl bg-slate-900 text-slate-100 p-5 sm:p-6 space-y-4 border border-slate-800 shadow-inner">
              {/* Document Banner */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#2563EB]" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-200 font-mono">
                    DOSSIER_ADHESION_TFC_2026.PDF
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#22C55E]/20 text-[#22C55E] text-[10px] font-bold border border-[#22C55E]/30">
                  Document Officiel
                </span>
              </div>

              {/* Document Details Grid */}
              <div className="space-y-3.5 text-xs">
                {/* 1. Requirements */}
                <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50 space-y-2">
                  <div className="font-extrabold text-blue-300 flex items-center gap-2 uppercase tracking-wide text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                    <span>Pièces à Fournir pour l'Inscription :</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-300 text-[11px]">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
                      <span>Extrait d'acte de naissance / CNI</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
                      <span>2 Photos d'identité récentes</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
                      <span>Certificat médical de sport (&lt;3 mois)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
                      <span>Fiche d'adhésion signée tuteur</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Categories & Venue */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                  <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 space-y-1">
                    <span className="text-slate-400 font-bold block">Catégories d'Âges :</span>
                    <span className="font-extrabold text-white">U11, U13, U15, U17, U20, Senior & Féminine</span>
                  </div>

                  <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50 space-y-1">
                    <span className="text-slate-400 font-bold block">Lieu de Dépôt :</span>
                    <span className="font-extrabold text-white flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Complexe N'Tabacoro, Bamako</span>
                    </span>
                  </div>
                </div>

                {/* 3. Infoline */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-blue-950/40 border border-blue-800/50 text-[11px]">
                  <span className="text-slate-300 font-medium">Secrétariat & Renseignements :</span>
                  <a
                    href="tel:+22376129035"
                    className="font-black text-[#60A5FA] hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+223 76 12 90 35</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Callback Option */}
            {showCallbackForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
              >
                <div className="text-xs font-bold text-[#153E75]">
                  Demander à être recontacté par le Secrétariat
                </div>
                {callbackSent ? (
                  <div className="text-xs font-bold text-[#22C55E] flex items-center gap-2 py-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Merci ! Le secrétariat vous appellera rapidement.</span>
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#2563EB]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Téléphone (+223...)"
                      value={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                      className="px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#2563EB]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#153E75] hover:bg-[#1E4E92] text-white font-bold text-xs cursor-pointer"
                    >
                      Être Rappelé
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </div>

          {/* Action Footer Buttons */}
          <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              onClick={handleDownloadBrochure}
              className="px-6 py-3.5 rounded-2xl bg-[#22C55E] hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>
                {lang === 'en'
                  ? 'Download Membership Brochure'
                  : 'Télécharger la Brochure d\'Adhésion'}
              </span>
            </button>

            <button
              onClick={() => setShowCallbackForm(!showCallbackForm)}
              className="px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#153E75] font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#2563EB]" />
              <span>
                {showCallbackForm
                  ? 'Fermer le formulaire'
                  : 'Demander un Rappel'}
              </span>
            </button>
          </div>

          {downloadSuccess && (
            <div className="mt-3 text-center text-xs font-bold text-[#22C55E]">
              ✓ Brochure d'Adhésion téléchargée avec succès !
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

