import React from 'react';

interface ControlsProps {
  onNext: () => void;
  onShuffle: () => void;
  onSave: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ onNext, onShuffle, onSave }) => {
  return (
    <div className="w-full max-w-md mx-auto px-8 pb-10 pt-4">
      <div className="flex items-center justify-between gap-6">
        
        {/* Shuffle Button */}
        <button 
          onClick={onShuffle}
          className="group flex flex-col items-center gap-2 outline-none"
        >
          <div className="w-14 h-14 rounded-xl border border-border-subtle bg-surface-card shadow-sm flex items-center justify-center text-subtle group-hover:text-ink group-hover:border-primary/30 group-hover:shadow-md transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined text-[24px]">shuffle</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-subtle font-medium">
            Karıştır
          </span>
        </button>

        {/* Save/Like Button (Prominent) */}
        <button 
          onClick={onSave}
          className="group flex flex-col items-center gap-2 -mt-2 outline-none"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center transition-all active:scale-95 hover:bg-primary-intro-dark hover:scale-105 duration-200">
            <span className="material-symbols-outlined text-[28px]">favorite</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-primary font-semibold">
            Kaydet
          </span>
        </button>

        {/* Next Button */}
        <button 
          onClick={onNext}
          className="group flex flex-col items-center gap-2 outline-none"
        >
          <div className="w-14 h-14 rounded-xl border border-border-subtle bg-surface-card shadow-sm flex items-center justify-center text-subtle group-hover:text-ink group-hover:border-primary/30 group-hover:shadow-md transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined text-[24px]">skip_next</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-subtle font-medium">
            Sonraki
          </span>
        </button>
        
      </div>
    </div>
  );
};