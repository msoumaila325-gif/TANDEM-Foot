import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Filter,
  Eye,
  Video,
  User,
  Shield,
  Zap,
  Award,
  ChevronRight,
  X,
  Send,
  Mail,
  Phone,
  CheckCircle2,
  Play,
  FileText,
  Activity,
  Globe,
  Sparkles
} from 'lucide-react';
import { Language, Player } from '../types';
import { PLAYERS_DATA } from '../data/academyData';

interface ScoutingHubProps {
  lang: Language;
  onOpenEnrollment: () => void;
}

export const ScoutingHub: React.FC<ScoutingHubProps> = ({ lang, onOpenEnrollment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [selectedPosition, setSelectedPosition] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePlayer, setActivePlayer] = useState<Player | null>(null);
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const [scoutInquiryPlayer, setScoutInquiryPlayer] = useState<Player | null>(null);
  const [scoutFormSubmitted, setScoutFormSubmitted] = useState<boolean>(false);

  const [scoutFormData, setScoutFormData] = useState({
    scoutName: '',
    clubOrAgency: '',
    email: '',
    phone: '',
    message: ''
  });

  const categories = ['Tous', 'U15', 'U17', 'U20', 'Seniors'];
  const positions = ['Tous', 'Gardien', 'Défenseur', 'Milieu', 'Attaquant'];

  const filteredPlayers = PLAYERS_DATA.filter((player) => {
    const matchesCategory = selectedCategory === 'Tous' || player.category === selectedCategory;
    const matchesPosition = selectedPosition === 'Tous' || player.position === selectedPosition;
    const matchesSearch =
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.positionEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPosition && matchesSearch;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setScoutFormSubmitted(true);
    setTimeout(() => {
      setScoutFormSubmitted(false);
      setScoutInquiryPlayer(null);
      setScoutFormData({ scoutName: '', clubOrAgency: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="squad" className="py-20 sm:py-28 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      {/* Decorative Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E4E92_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E4E92]/10 border border-[#1E4E92]/20 text-[#1E4E92] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#1E4E92]" />
            <span>{lang === 'en' ? 'International Scouting Hub' : 'Hub de Recrutement & Scouting'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#153E75] font-heading">
            {lang === 'en' ? (
              <>
                EFFECTIFS & <span className="text-[#2563EB]">TALENTS D'ÉLITE</span>
              </>
            ) : (
              <>
                EFFECTIFS & <span className="text-[#2563EB]">PÉPITES DE L'ACADÉMIE</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            {lang === 'en'
              ? 'Complete technical profiles, biometric stats, and HD match highlights curated for professional scouts, clubs, and international agents.'
              : 'Fiches techniques complètes, données biométriques et vidéos d\'action HD réservées aux recruteurs professionnels, agents et clubs partenaires.'}
          </p>
        </div>

        {/* Scout Filter Bar */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 mb-10 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={lang === 'en' ? 'Search by player name or position...' : 'Rechercher par nom ou poste...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mr-1 hidden sm:inline">
                Catégorie:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#22C55E] text-white shadow-md scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Position Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mr-1 hidden sm:inline">
                Poste:
              </span>
              {positions.map((pos) => (
                <button
                  key={pos}
                  onClick={() => setSelectedPosition(pos)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedPosition === pos
                      ? 'bg-[#2563EB] text-white shadow-md scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Player Cards Grid */}
        {filteredPlayers.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <User className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-700 font-bold">
              {lang === 'en' ? 'No players found matching your criteria.' : 'Aucun joueur ne correspond à vos critères.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Tous');
                setSelectedPosition('Tous');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Reset Filters' : 'Réinitialiser les filtres'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map((player) => (
              <motion.div
                key={player.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-[#2563EB] overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                {/* Header Image & Badges */}
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                  {/* Top Left: Category & Squad Number */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-[#22C55E] font-bold text-xs border border-white/20">
                      #{player.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#2563EB] text-white font-bold text-xs shadow-sm">
                      {player.category}
                    </span>
                  </div>

                  {/* Top Right: Rating */}
                  <div className="absolute top-3 right-3 flex flex-col items-end">
                    <div className="px-2.5 py-1 rounded-lg bg-[#22C55E] text-white font-bold text-xs shadow-md">
                      {player.marketRating} OVR
                    </div>
                    <span className="text-[10px] text-white font-bold mt-1 bg-slate-900/80 px-1.5 py-0.5 rounded backdrop-blur-xs">
                      POT: {player.overallPotential}
                    </span>
                  </div>

                  {/* Bottom Image Overlay: Name & Position */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-slate-200 font-bold mb-0.5">
                      <span>{player.flag}</span>
                      <span>{player.position}</span>
                      {player.secondaryPosition && (
                        <span className="text-[10px] text-slate-300">({lang === 'fr' ? player.secondaryPosition.fr : player.secondaryPosition.en})</span>
                      )}
                    </div>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-[#22C55E] transition-colors leading-tight font-heading">
                      {player.name}
                    </h3>
                  </div>
                </div>

                {/* Biometrics & Season Quick Stats */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-semibold">{lang === 'en' ? 'Age' : 'Âge'}</span>
                      <span className="font-bold text-slate-900">{player.age} ans</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-semibold">{lang === 'en' ? 'Height' : 'Taille'}</span>
                      <span className="font-bold text-slate-900">{player.height}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-semibold">{lang === 'en' ? 'Foot' : 'Pied'}</span>
                      <span className="font-bold text-[#16A34A]">{player.preferredFoot}</span>
                    </div>
                  </div>

                  {/* Key Stats Bar */}
                  <div className="flex items-center justify-between text-xs text-slate-700 bg-slate-100/80 px-3 py-2 rounded-xl font-medium border border-slate-200/50">
                    <div className="flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>{player.stats.matchesPlayed} M</span>
                    </div>
                    {player.position === 'Gardien' ? (
                      <div className="flex items-center gap-1 text-[#16A34A] font-bold">
                        <Shield className="w-3.5 h-3.5" />
                        <span>{player.stats.cleanSheets} Clean Sheets</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-1 text-[#16A34A] font-bold">
                          <Zap className="w-3.5 h-3.5" />
                          <span>{player.stats.goals} Buts</span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-600 font-bold">
                          <Award className="w-3.5 h-3.5" />
                          <span>{player.stats.assists} Passes</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-2 mt-auto">
                    <button
                      onClick={() => setActivePlayer(player)}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#2563EB] hover:text-white font-bold text-xs text-slate-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Scout Profile' : 'Fiche Joueur'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setActivePlayer(player);
                        setShowVideoModal(true);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 font-bold text-xs text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Highlights</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* PLAYER SCOUT PROFILE MODAL */}
      <AnimatePresence>
        {activePlayer && !showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#12141A] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-white/15 my-auto max-h-[90vh] overflow-y-auto text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePlayer(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Player Modal Header */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start border-b border-white/10 pb-6">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#00FF66] shadow-[0_0_20px_rgba(0,255,102,0.3)] flex-shrink-0">
                  <img src={activePlayer.image} alt={activePlayer.name} className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[#00FF66] font-black text-xs">
                    #{activePlayer.number}
                  </span>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-xl">{activePlayer.flag}</span>
                    <span className="px-2.5 py-0.5 rounded bg-[#2563EB] text-white font-extrabold text-xs">
                      {activePlayer.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#00FF66] text-black font-black text-xs">
                      OVR {activePlayer.marketRating}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-gray-300 font-bold text-xs">
                      POT {activePlayer.overallPotential}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">{activePlayer.name}</h3>
                  <p className="text-sm font-bold text-[#00FF66] mt-0.5">
                    {activePlayer.position} {activePlayer.secondaryPosition && `(${lang === 'fr' ? activePlayer.secondaryPosition.fr : activePlayer.secondaryPosition.en})`}
                  </p>
                </div>
              </div>

              {/* Biometrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">{lang === 'en' ? 'Age' : 'Âge'}</span>
                  <span className="text-base font-extrabold text-white">{activePlayer.age} ans</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">{lang === 'en' ? 'Height' : 'Taille'}</span>
                  <span className="text-base font-extrabold text-white">{activePlayer.height}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">{lang === 'en' ? 'Weight' : 'Poids'}</span>
                  <span className="text-base font-extrabold text-white">{activePlayer.weight}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">{lang === 'en' ? 'Strong Foot' : 'Pied Fort'}</span>
                  <span className="text-base font-extrabold text-[#00FF66]">{activePlayer.preferredFoot}</span>
                </div>
              </div>

              {/* Technical Attributes Bars */}
              <div className="space-y-4 mb-6 bg-black/40 p-4 rounded-2xl border border-white/5">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#00FF66] flex items-center gap-1.5">
                  <Activity className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Technical Radar & Skills' : 'Radar d\'Aptitudes & Compétences'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    { label: lang === 'en' ? 'Speed & Pace' : 'Vitesse & Explosivité', val: activePlayer.skills.speed },
                    { label: lang === 'en' ? 'Technique & First Touch' : 'Technique & Toucher de Balle', val: activePlayer.skills.technique },
                    { label: lang === 'en' ? '1v1 Dribbling' : 'Dribble & Élimination 1v1', val: activePlayer.skills.dribbling },
                    { label: lang === 'en' ? 'Passing & Vision' : 'Passe & Vision du Jeu', val: activePlayer.skills.passing },
                    { label: lang === 'en' ? 'Physical & Stamina' : 'Impact Physique & Endurance', val: activePlayer.skills.physicality },
                    { label: lang === 'en' ? 'Tactical IQ' : 'Intelligence Tactique', val: activePlayer.skills.tacticalIQ }
                  ].map((attr, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-bold text-gray-300">
                        <span>{attr.label}</span>
                        <span className="text-[#00FF66]">{attr.val}/100</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#2563EB] to-[#00FF66] rounded-full"
                          style={{ width: `${attr.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scout Report Note */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs font-extrabold text-amber-400">
                  <FileText className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Technical Director Scout Note:' : 'Note du Directeur Technique / Recruteur:'}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed italic">
                  "{lang === 'fr' ? activePlayer.scoutNotes.fr : activePlayer.scoutNotes.en}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#2563EB] hover:bg-blue-600 font-extrabold text-sm text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{lang === 'en' ? 'Watch Match Highlights' : 'Visionner la Vidéo Highlights'}</span>
                </button>
                <button
                  onClick={() => {
                    setScoutInquiryPlayer(activePlayer);
                    setActivePlayer(null);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#00FF66] text-black font-extrabold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,255,102,0.3)]"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Contact Recruitment Pole' : 'Contacter le Pôle Recrutement'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* VIDEO HIGHLIGHTS MODAL */}
      <AnimatePresence>
        {showVideoModal && activePlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#12141A] rounded-3xl max-w-3xl w-full p-4 sm:p-6 border border-white/20 shadow-2xl relative text-white"
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <Video className="w-5 h-5 text-[#00FF66]" />
                <div>
                  <h3 className="text-lg font-black text-white">{activePlayer.name} — Scouting Highlights</h3>
                  <p className="text-xs text-gray-400">
                    {activePlayer.category} | {activePlayer.position} | Season 2025-2026
                  </p>
                </div>
              </div>

              {/* Simulated Video Player */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 flex items-center justify-center group">
                <img
                  src={activePlayer.image}
                  alt={activePlayer.name}
                  className="w-full h-full object-cover opacity-60 filter contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute text-center p-6 space-y-3 z-10">
                  <div className="w-16 h-16 rounded-full bg-[#00FF66] text-black flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,255,102,0.6)] cursor-pointer group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="block text-xs font-black uppercase tracking-widest text-[#00FF66]">
                    HD Match Highlights Stream (R3L / HUDL)
                  </span>
                  <p className="text-xs text-gray-300 max-w-md mx-auto">
                    {lang === 'en'
                      ? 'Compilations of key 1v1 duels, tactical positioning, and goal contributions during official league matches.'
                      : 'Compilations des duels 1v1, déplacements tactiques et actions décisives en matchs officiels.'}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center text-xs text-gray-400 border-t border-white/10 pt-4">
                <span>{lang === 'en' ? 'Access Code for Scouts: TFC-SCOUT-2026' : 'Code d\'Accès Recruteur: TFC-SCOUT-2026'}</span>
                <button
                  onClick={() => {
                    setShowVideoModal(false);
                    setScoutInquiryPlayer(activePlayer);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#00FF66] text-black font-extrabold hover:bg-emerald-400 transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Request Full Match File' : 'Demander le Match Entier'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SCOUT INQUIRY FORM MODAL */}
      <AnimatePresence>
        {scoutInquiryPlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#12141A] rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#00FF66]/30 shadow-2xl relative text-white my-auto"
            >
              <button
                onClick={() => setScoutInquiryPlayer(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {scoutFormSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-[#00FF66] mx-auto animate-bounce" />
                  <h3 className="text-2xl font-black text-white font-heading">
                    {lang === 'en' ? 'Inquiry Transmitted Successfully!' : 'Demande Transmise avec Succès !'}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {lang === 'en'
                      ? `Our Recruitment Pole has received your query for ${scoutInquiryPlayer.name}. We will get back to you within 24 hours.`
                      : `Le Pôle Recrutement a bien reçu votre demande concernant ${scoutInquiryPlayer.name}. Notre direction technique vous recontactera sous 24h.`}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="p-2 rounded-xl bg-[#00FF66]/10 text-[#00FF66]">
                      <Send className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white font-heading">
                        {lang === 'en' ? 'Contact Recruitment Pole' : 'Contacter le Pôle Recrutement'}
                      </h3>
                      <p className="text-xs text-[#00FF66] font-bold">
                        Demande concernant: {scoutInquiryPlayer.name} (#{scoutInquiryPlayer.number} - {scoutInquiryPlayer.category})
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        {lang === 'en' ? 'Full Name / Agent Name' : 'Nom Complet / Nom de l\'Agent *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={scoutFormData.scoutName}
                        onChange={(e) => setScoutFormData({ ...scoutFormData, scoutName: e.target.value })}
                        placeholder="e.g. Jean-Luc Dupont"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00FF66]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        {lang === 'en' ? 'Club / Scouting Agency' : 'Club / Agence de Recrutement Représentée *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={scoutFormData.clubOrAgency}
                        onChange={(e) => setScoutFormData({ ...scoutFormData, clubOrAgency: e.target.value })}
                        placeholder="e.g. European Scout Agency / Premier League Scout"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00FF66]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1">
                          {lang === 'en' ? 'Official Email' : 'E-mail Professionnel *'}
                        </label>
                        <input
                          type="email"
                          required
                          value={scoutFormData.email}
                          onChange={(e) => setScoutFormData({ ...scoutFormData, email: e.target.value })}
                          placeholder="scout@club.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00FF66]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1">
                          {lang === 'en' ? 'Phone / WhatsApp' : 'Téléphone / WhatsApp *'}
                        </label>
                        <input
                          type="tel"
                          required
                          value={scoutFormData.phone}
                          onChange={(e) => setScoutFormData({ ...scoutFormData, phone: e.target.value })}
                          placeholder="+33 6 12 34 56 78"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00FF66]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1">
                        {lang === 'en' ? 'Inquiry Details' : 'Détails de la Demande *'}
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={scoutFormData.message}
                        onChange={(e) => setScoutFormData({ ...scoutFormData, message: e.target.value })}
                        placeholder={
                          lang === 'en'
                            ? 'Specify trial invitation, video request, or transfer discussion...'
                            : 'Précisez votre demande (invitation à un essai, demande de rapports vidéo complets, etc.)...'
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00FF66]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#00FF66] text-black font-extrabold text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,255,102,0.4)] mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Submit Official Inquiry' : 'Envoyer la Demande Officielle'}</span>
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
