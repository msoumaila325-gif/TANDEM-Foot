import React from 'react';
import { Trophy, Calendar, MapPin, Play, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { MATCHES_DATA } from '../data/academyData';

interface MatchCenterProps {
  lang: Language;
}

export const MatchCenter: React.FC<MatchCenterProps> = ({ lang }) => {
  return (
    <section className="py-14 bg-white text-slate-900 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#1E4E92]/10 text-[#1E4E92] border border-[#1E4E92]/20 shadow-sm">
              <Trophy className="w-5 h-5 text-[#1E4E92]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[#153E75]">
                {lang === 'en' ? 'MATCH CENTER & RECENT RESULTS' : 'CENTRE DE MATCHS & DERNIERS RÉSULTATS'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {lang === 'en' ? 'Official league fixtures and academy showcase scores' : 'Scores officiels des championnats et matchs d\'exhibition'}
              </p>
            </div>
          </div>

          <span className="px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 text-[#16A34A] border border-[#22C55E]/30 text-xs font-bold uppercase tracking-wider">
            Saison 2025-2026
          </span>
        </div>

        {/* Match Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MATCHES_DATA.map((match) => (
            <div
              key={match.id}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between hover:border-[#2563EB] hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Competition Badge */}
                <div className="flex items-center justify-between text-xs text-[#2563EB] font-bold mb-4 border-b border-slate-200/80 pb-2.5">
                  <span className="truncate">{lang === 'fr' ? match.competition.fr : match.competition.en}</span>
                  <span className="flex items-center gap-1 text-slate-500 font-semibold flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                    {match.date}
                  </span>
                </div>

                {/* Match Score Board */}
                <div className="py-2 space-y-3">
                  {/* Home Team */}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-bold ${match.homeTeam.name.includes('TANDEM') ? 'text-[#153E75]' : 'text-slate-700'}`}>
                      {match.homeTeam.name}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-900 font-bold text-lg text-white">
                      {match.status === 'Finished' ? match.homeTeam.score : '-'}
                    </span>
                  </div>

                  {/* Away Team */}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-bold ${match.awayTeam.name.includes('TANDEM') ? 'text-[#153E75]' : 'text-slate-700'}`}>
                      {match.awayTeam.name}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-900 font-bold text-lg text-white">
                      {match.status === 'Finished' ? match.awayTeam.score : '-'}
                    </span>
                  </div>
                </div>

                {/* Scorers / Details */}
                {match.scorers && match.scorers.length > 0 && (
                  <div className="mt-3 text-[11px] text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="font-bold text-[#1E4E92] block mb-0.5">Buteurs Tandem:</span>
                    <span className="text-slate-700 font-medium">{match.scorers.join(' • ')}</span>
                  </div>
                )}
              </div>

              {/* Match Venue & Status Footer */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1 truncate text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" />
                  <span className="truncate">{match.venue}</span>
                </span>

                {match.status === 'Finished' ? (
                  <span className="flex items-center gap-1 text-[#16A34A] font-bold text-[11px] flex-shrink-0 bg-[#22C55E]/10 px-2 py-0.5 rounded-full border border-[#22C55E]/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Terminé
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20 font-bold text-[11px] flex-shrink-0">
                    À Venir
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
