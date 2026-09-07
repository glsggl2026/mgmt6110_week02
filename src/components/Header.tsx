import React from 'react';
import { ActiveScreen } from '../types';
import { Award, BookOpen, Layers } from 'lucide-react';

interface HeaderProps {
  activeScreen: ActiveScreen;
  onScreenChange: (screen: ActiveScreen) => void;
  savedCount: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onScreenChange,
  savedCount,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-3xl mx-auto px-4 py-3.5 sm:py-4">
        {/* Top Brand Bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-xl shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-tight">
                  GrantMatch
                </h1>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200">
                  SG SME
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Find which government grant fits closest & set priority
              </p>
            </div>
          </div>

          {savedCount && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Order Saved
            </div>
          )}
        </div>

        {/* Navigation Tabs - Move between screens without reloading */}
        <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-slate-100">
          <button
            id="tab-priority-matcher"
            type="button"
            onClick={() => onScreenChange('matcher')}
            className={`flex-1 py-2 px-3 rounded-lg text-sm sm:text-base font-semibold flex items-center justify-center gap-2 transition-colors min-h-[44px] ${
              activeScreen === 'matcher'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Priority Matcher</span>
          </button>

          <button
            id="tab-grant-directory"
            type="button"
            onClick={() => onScreenChange('directory')}
            className={`flex-1 py-2 px-3 rounded-lg text-sm sm:text-base font-semibold flex items-center justify-center gap-2 transition-colors min-h-[44px] ${
              activeScreen === 'directory'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Grant Directory (9)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
