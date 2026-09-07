import React, { useState } from 'react';
import { OFFICIAL_SG_GRANTS } from '../data/grantMatchData';
import { BookOpen, Search, ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';

interface GrantDirectoryScreenProps {
  onBackToMatcher: () => void;
}

export const GrantDirectoryScreen: React.FC<GrantDirectoryScreenProps> = ({
  onBackToMatcher,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGrants = OFFICIAL_SG_GRANTS.filter(
    (g) =>
      g.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.shortCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.scopeSummary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Directory Header Banner */}
      <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <h2 className="text-base sm:text-lg font-black tracking-tight">
                Official Singapore Government Grants Reference
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              All 9 approved Singapore government grants supported by GrantMatch. Suggestions in the matcher are strictly drawn from this official registry.
            </p>
          </div>

          <button
            type="button"
            onClick={onBackToMatcher}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Priority Matcher</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="grant-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by grant name or acronym (e.g., PSG, MRA, EEG)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Grants Grid / List */}
      <div className="space-y-3">
        {filteredGrants.map((grant, idx) => (
          <div
            key={grant.shortCode + idx}
            id={`directory-item-${grant.shortCode.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-slate-300 transition-shadow shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-black tracking-wider uppercase">
                {grant.shortCode}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Agency: {grant.agency}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {grant.fullName}
            </h3>

            <p className="text-sm text-slate-700 mt-2 leading-relaxed">
              {grant.scopeSummary}
            </p>

            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50/50 p-2 rounded-lg">
              <span>Typical Support Level: {grant.typicalSupport}</span>
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            </div>
          </div>
        ))}

        {filteredGrants.length === 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-500">
            No grants matched your search "{searchTerm}". Try PSG, MRA, EEG, or ADS.
          </div>
        )}
      </div>
    </div>
  );
};
