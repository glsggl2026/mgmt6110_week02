import React, { useState } from 'react';
import { GrantMatchProject } from '../types';
import { ProjectCard } from './ProjectCard';
import { Check, RotateCcw, ShieldCheck, HelpCircle } from 'lucide-react';

interface PriorityCardsFrameProps {
  projects: GrantMatchProject[];
  onReorder: (newProjects: GrantMatchProject[]) => void;
  onReset: () => void;
}

export const PriorityCardsFrame: React.FC<PriorityCardsFrameProps> = ({
  projects,
  onReorder,
  onReset,
}) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // Drag and Drop Handlers
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const updated = [...projects];
    const [movedItem] = updated.splice(draggedIndex, 1);
    updated.splice(targetIndex, 0, movedItem);

    onReorder(updated);
    setDraggedIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  // Reorder up/down via tap buttons (ideal for phones at arm's length)
  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...projects];
    const temp = updated[index];
    updated[index] = updated[index - 1];
    updated[index - 1] = temp;
    onReorder(updated);
  };

  const handleMoveDown = (index: number) => {
    if (index === projects.length - 1) return;
    const updated = [...projects];
    const temp = updated[index];
    updated[index] = updated[index + 1];
    updated[index + 1] = temp;
    onReorder(updated);
  };

  // Save Priority Order handler
  // "it worked when the final order is saved, each card shows its rank number (1, 2, 3), and the frame around all 3 cards flashes green exactly once for half a second then settles into a solid thin green border"
  const handleSaveOrder = () => {
    setIsSaved(true);
    setIsFlashing(true);

    // Exactly half a second (500ms) green flash
    setTimeout(() => {
      setIsFlashing(false);
    }, 500);
  };

  return (
    <div className="space-y-4">
      {/* Guidance Banner for SME Owners */}
      <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <h2 className="text-base sm:text-lg font-black tracking-tight">
                Grant Application Priority Queue
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Drag cards or use the arrow buttons to prioritize which government grant you should apply for first. Tap <span className="text-emerald-300 font-bold">Save Priority Order</span> to lock your application ranking.
            </p>
          </div>

          {/* Save Action Button */}
          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
            <button
              id="btn-save-priority-order"
              type="button"
              onClick={handleSaveOrder}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm sm:text-base font-extrabold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 min-h-[44px] ${
                isSaved
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black'
              }`}
            >
              <Check className="w-5 h-5 stroke-[3]" />
              <span>{isSaved ? 'Re-Save Priority Order' : 'Save Priority Order'}</span>
            </button>

            {isSaved && (
              <button
                id="btn-reset-order"
                type="button"
                onClick={() => {
                  setIsSaved(false);
                  onReset();
                }}
                title="Reset to initial match order"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 
        The Frame around all 3 cards:
        - Flashes green exactly once for half a second (500ms) on save via .flash-green-active
        - Settles into a solid thin green border (border border-emerald-600)
      */}
      <section
        id="all-cards-frame"
        aria-label="Matched Projects Priority Frame"
        className={`rounded-2xl p-3 sm:p-5 transition-all duration-300 ${
          isFlashing
            ? 'flash-green-active border-2 border-emerald-500'
            : isSaved
            ? 'border border-emerald-600 bg-emerald-50/20 shadow-xs'
            : 'border border-slate-300 bg-white/70 shadow-xs'
        }`}
      >
        {/* Frame Header Status Indicator */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className={`w-5 h-5 ${isSaved ? 'text-emerald-700' : 'text-slate-500'}`} />
            <span className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
              {isSaved ? 'Priority Status: Final Order Saved' : 'Priority Status: Reordering in Progress'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {isSaved ? (
              <span
                id="saved-confirmation-badge"
                className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Ranks 1 to 3 Locked
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                Unsaved Changes
              </span>
            )}
          </div>
        </div>

        {/* 3 Project Cards enclosed in this frame */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
            >
              <ProjectCard
                project={project}
                index={index}
                totalCards={projects.length}
                isSaved={isSaved}
                onMoveUp={handleMoveUp}
                onMoveDown={handleMoveDown}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
                isDragging={draggedIndex === index}
              />
            </div>
          ))}
        </div>

        {/* Post-Save Summary Banner */}
        {isSaved && (
          <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 flex items-start gap-3 text-xs sm:text-sm">
            <Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-extrabold text-emerald-900">
                Application sequence confirmed!
              </p>
              <p className="text-emerald-800 mt-0.5">
                Apply first for <strong className="underline">{projects[0].matchedGrant}</strong> (Rank #1), followed by {projects[1].grantShort} (Rank #2), and lastly {projects[2].grantShort} (Rank #3).
              </p>
            </div>
          </div>
        )}
      </section>

      {/* SME Owner Instructions note */}
      <div className="flex items-center gap-2 px-2 text-xs text-slate-600">
        <HelpCircle className="w-4 h-4 text-slate-500 shrink-0" />
        <span>
          <strong>Tip for SMU Classmates:</strong> On desktop, grab the drag handle or card to drag. On phone touchscreens, tap the Up/Down arrow buttons.
        </span>
      </div>
    </div>
  );
};
