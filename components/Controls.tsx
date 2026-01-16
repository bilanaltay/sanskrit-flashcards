import React from 'react';

interface ControlsProps {
  onNext: () => void;
  onShuffle: () => void;
  onSave: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ onNext, onShuffle, onSave }) => {
  return (
    <div className="w-full max-w-md mx-auto px-10 pb-12 pt-4">
      <div className="flex items-center justify-between gap-8">
        
        {/* Shuffle Button */}
        <button 
          onClick={onShuffle}
          className="group flex flex-col items-center gap-2 outline-none"
        >
          <div className="size-14 rounded-full border border-subtle/20 bg-white shadow-sm flex items-center justify-center text-subtle group-hover:text-ink group-hover:border-ink/20 group-hover:shadow-md transition-all active:scale-95 duration-300">
            <span className="material-symbols-outlined !text-[24px]">shuffle</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-subtle font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
            Mix
          </span>
        </button>

        {/* Save/Like Button (Prominent) */}
        <button 
          onClick={onSave}
          className="group flex flex-col items-center gap-2 -mt-4 outline-none"
        >
          <div className="size-16 rounded-full bg-accent text-white shadow-lg shadow-accent/30 flex items-center justify-center transition-all active:scale-95 hover:bg-accent/90 hover:scale-105 duration-300">
            <span className="material-symbols-outlined !text-[28px]">favorite</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-subtle font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
            Save
          </span>
        </button>

        {/* Next Button */}
        <button 
          onClick={onNext}
          className="group flex flex-col items-center gap-2 outline-none"
        >
          <div className="size-14 rounded-full border border-subtle/20 bg-white shadow-sm flex items-center justify-center text-subtle group-hover:text-ink group-hover:border-ink/20 group-hover:shadow-md transition-all active:scale-95 duration-300">
            <span className="material-symbols-outlined !text-[24px]">skip_next</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-subtle font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
            Next
          </span>
        </button>
        
      </div>
    </div>
  );
};