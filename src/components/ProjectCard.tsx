import React from 'react';
import { GrantMatchProject } from '../types';
import { GripVertical, ArrowUp, ArrowDown, CheckCircle2, Building2, FileText, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: GrantMatchProject;
  index: number;
  totalCards: number;
  isSaved: boolean;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  isSaved,
  onMoveUp,
  onMoveDown,
  onDragStart,
  onDragOver,
  onDragEnd,
  isDragging,
}) => {
  const rankNumber = index + 1;

  // Color shading per prompt: green = high, amber = medium, red = low
  const getThemeClasses = () => {
    switch (project.matchLevel) {
      case 'high':
        return {
          cardBg: 'bg-emerald-50/70 border-emerald-300',
          badgeBg: 'bg-emerald-600 text-white',
          grantLabel: 'text-emerald-950 font-bold',
          pillBorder: 'border-emerald-200 bg-emerald-100/60 text-emerald-900',
          subtleText: 'text-emerald-900',
          indicator: 'bg-emerald-500',
          tierLabel: 'High Fit'
        };
      case 'medium':
        return {
          cardBg: 'bg-amber-50/70 border-amber-300',
          badgeBg: 'bg-amber-600 text-white',
          grantLabel: 'text-amber-950 font-bold',
          pillBorder: 'border-amber-200 bg-amber-100/60 text-amber-900',
          subtleText: 'text-amber-900',
          indicator: 'bg-amber-500',
          tierLabel: 'Medium Fit'
        };
      case 'low':
        return {
          cardBg: 'bg-rose-50/70 border-rose-300',
          badgeBg: 'bg-rose-600 text-white',
          grantLabel: 'text-rose-950 font-bold',
          pillBorder: 'border-rose-200 bg-rose-100/60 text-rose-900',
          subtleText: 'text-rose-900',
          indicator: 'bg-rose-500',
          tierLabel: 'Low Fit'
        };
      default:
        return {
          cardBg: 'bg-slate-50 border-slate-300',
          badgeBg: 'bg-slate-600 text-white',
          grantLabel: 'text-slate-900 font-bold',
          pillBorder: 'border-slate-200 bg-slate-100 text-slate-900',
          subtleText: 'text-slate-800',
          indicator: 'bg-slate-500',
          tierLabel: 'Evaluated'
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <div
      id={`project-card-${project.id}`}
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDragEnd={onDragEnd}
      className={`relative rounded-xl border-2 p-4 sm:p-5 transition-all duration-200 shadow-sm ${
        theme.cardBg
      } ${
        isDragging
          ? 'opacity-40 scale-[0.98] border-dashed border-slate-500'
          : 'opacity-100 hover:shadow-md'
      }`}
    >
      {/* Top Header Row: Rank Badge + Drag/Move Controls */}
      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/60">
        {/* Rank Display: When saved, explicitly shows its rank number (1, 2, 3) */}
        <div className="flex items-center gap-2">
          {isSaved ? (
            <div
              id={`rank-badge-${project.id}`}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 text-white text-sm sm:text-base font-extrabold shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Rank #{rankNumber}</span>
              <span className="text-[11px] font-medium text-slate-300 uppercase tracking-wider ml-0.5">
                {rankNumber === 1 ? '• Top Priority' : rankNumber === 2 ? '• 2nd Priority' : '• 3rd Priority'}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold">
              <span className="text-slate-400">Draft Pos:</span>
              <span className="font-extrabold text-slate-900">#{rankNumber}</span>
            </div>
          )}

          {/* SME Profile Tag */}
          <div className="hidden xs:flex items-center gap-1 text-xs font-semibold text-slate-600 bg-white/80 px-2 py-1 rounded-md border border-slate-200">
            <Building2 className="w-3.5 h-3.5 text-slate-500" />
            <span className="truncate max-w-[140px] sm:max-w-none">{project.smeProfile}</span>
          </div>
        </div>

        {/* Priority Reordering Controls: Drag handle + Phone Tap Arrows */}
        <div className="flex items-center gap-1">
          {/* Quick Phone Arrow Controls: Ensures reliable reordering on phones at arm's length */}
          <div className="flex items-center bg-white rounded-lg border border-slate-300 p-0.5 shadow-xs">
            <button
              id={`btn-move-up-${project.id}`}
              type="button"
              disabled={index === 0}
              onClick={() => onMoveUp(index)}
              aria-label="Move card up"
              title="Move Up"
              className={`p-1.5 rounded-md min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors ${
                index === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
              }`}
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              id={`btn-move-down-${project.id}`}
              type="button"
              disabled={index === totalCards - 1}
              onClick={() => onMoveDown(index)}
              aria-label="Move card down"
              title="Move Down"
              className={`p-1.5 rounded-md min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors ${
                index === totalCards - 1
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
              }`}
            >
              <ArrowDown className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Drag Handle (Visual Affordance for desktop and tablet drag) */}
          <div
            title="Drag to reorder"
            className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-500 hover:text-slate-800 cursor-grab active:cursor-grabbing flex items-center justify-center min-w-[36px] min-h-[36px]"
          >
            <GripVertical className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Matched Grant Banner & Match % Badge */}
      <div className="bg-white/95 rounded-lg p-3 sm:p-3.5 border border-slate-200/80 mb-3 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Matched SG Government Grant
            </span>
          </div>

          {/* Match % Badge */}
          <div
            id={`match-badge-${project.id}`}
            className={`px-2.5 py-1 rounded-full text-xs sm:text-sm font-extrabold tracking-wide flex items-center gap-1 shadow-xs ${theme.badgeBg}`}
          >
            <span>{project.matchPercentage}% Match</span>
            <span className="text-[10px] font-normal opacity-90">({theme.tierLabel})</span>
          </div>
        </div>

        {/* Grant Full Name (Strictly from the official list!) */}
        <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
          {project.matchedGrant}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
          {project.grantCoverage}
        </p>
      </div>

      {/* Invented Project Title & Description */}
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <FileText className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              {project.title}
            </h4>
            <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed mt-1">
              {project.description}
            </p>
          </div>
        </div>

        {/* Key Deliverable / What to apply for */}
        <div className="pt-2 mt-2 border-t border-slate-200/60 flex items-start gap-1.5 text-xs sm:text-sm text-slate-600">
          <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <span>
            <strong className="text-slate-800">Target Application Scope:</strong> {project.keyDeliverable}
          </span>
        </div>
      </div>
    </div>
  );
};
