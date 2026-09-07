import { useState } from 'react';
import { ActiveScreen, GrantMatchProject } from './types';
import { INVENTED_PROJECTS } from './data/grantMatchData';
import { Header } from './components/Header';
import { PriorityCardsFrame } from './components/PriorityCardsFrame';
import { GrantDirectoryScreen } from './components/GrantDirectoryScreen';
import { Info, Sparkles, Building } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('matcher');
  const [projects, setProjects] = useState<GrantMatchProject[]>(INVENTED_PROJECTS);

  const handleReorder = (newProjects: GrantMatchProject[]) => {
    setProjects(newProjects);
  };

  const handleReset = () => {
    setProjects(INVENTED_PROJECTS);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col selection:bg-emerald-200">
      {/* Top Header & Screen Navigation */}
      <Header
        activeScreen={activeScreen}
        onScreenChange={setActiveScreen}
        savedCount={false}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-3.5 sm:px-4 py-4 sm:py-6">
        {/* Intro Context Banner */}
        <div className="mb-4 bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 shadow-xs">
          <div className="flex items-start gap-2.5">
            <Building className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900">SG SME Decision Aid:</strong> Review your 3 evaluated project proposals below. Match scores indicate alignment with official Singapore government grant criteria. Reorder the cards into your preferred application sequence and save your final priority order.
            </div>
          </div>
        </div>

        {/* Dynamic Screen View (no page reloads) */}
        {activeScreen === 'matcher' ? (
          <PriorityCardsFrame
            projects={projects}
            onReorder={handleReorder}
            onReset={handleReset}
          />
        ) : (
          <GrantDirectoryScreen
            onBackToMatcher={() => setActiveScreen('matcher')}
          />
        )}

        {/* Academic Context / SMU Footnote */}
        <div className="mt-8 pt-4 border-t border-slate-200 text-center text-xs text-slate-500 space-y-1">
          <p className="font-semibold text-slate-600">
            GrantMatch • Singapore SME Government Grant Prioritization Tool
          </p>
          <p>
            Individual Problem Set 1 for MGMT 6110 Human-AI Collaboration at SMU (Week 3).
          </p>
          <p className="text-[11px] text-slate-400">
            Invented scenarios for illustrative SME evaluation. Official grant names sourced from Singapore statutory board listings.
          </p>
        </div>
      </main>
    </div>
  );
}
