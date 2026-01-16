import React from 'react';
import { Card } from '../types';

interface StudyCardProps {
  card: Card;
  isFlipped: boolean;
  onFlip: () => void;
}

export const StudyCard: React.FC<StudyCardProps> = ({ card, isFlipped, onFlip }) => {
  return (
    <div
      className="relative w-full max-w-[320px] aspect-[3/4.5] group cursor-pointer perspective-[1000px] select-none"
      onClick={onFlip}
    >
      {/* Decorative stacked paper effect behind the main card */}
      <div className="absolute top-2 left-1 right-1 h-full bg-paper-dark rounded-sm shadow-sm border border-black/5 -z-10 rotate-1 transition-transform duration-500 group-hover:rotate-2" />
      <div className="absolute top-1 left-2 right-2 h-full bg-paper-dark rounded-sm shadow-sm border border-black/5 -z-20 -rotate-1 transition-transform duration-500 group-hover:-rotate-2" />

      {/* Main Card Container with Flip Logic */}
      <div
        className={`
          relative w-full h-full duration-700 preserve-3d transition-transform ease-out
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
      >
        {/* --- FRONT SIDE --- */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#fed9b7] to-[#f07e6e] rounded-sm shadow-card flex flex-col overflow-hidden border border-black/5 backface-hidden z-20">

          {/* Inner Dashed Border */}
          <div className="absolute inset-3 border border-dashed border-white/20 pointer-events-none rounded-sm" />

          {/* Content */}
          <div className="flex-1 flex flex-col items-center p-6 relative">
            <span className="absolute top-6 right-6 text-[10px] font-bold tracking-widest text-[#2d2a2a] uppercase bg-white/20 px-2 py-1 rounded-sm backdrop-blur-sm">
              {card.type}
            </span>

            {/* Image Circle */}
            <div className="flex-1 w-full flex items-center justify-center opacity-90 mt-6">
              <div className="relative w-44 h-44 rounded-full border border-white/20 flex items-center justify-center bg-white/30 backdrop-blur-sm shadow-inner">
                <img
                  src={card.imageUrl}
                  alt={card.sanskrit}
                  className="w-full h-full object-cover rounded-full opacity-90 grayscale contrast-125 mix-blend-multiply"
                />
                <div className="absolute inset-0 rounded-full bg-white/10 mix-blend-overlay opacity-30" />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full text-center pb-8 z-10">
              <h1 className="text-5xl font-serif text-[#2d2a2a] mb-3 tracking-tight font-medium">
                {card.sanskrit}
              </h1>
              <p className="text-white font-serif text-2xl italic">
                {card.transliteration}
              </p>
              {/* Meaning is hidden on front */}
              <div className="h-6 mt-4 w-24 mx-auto bg-white/10 rounded animate-pulse" />
            </div>
          </div>

          {/* Footer Tap Hint */}
          <div className="h-12 w-full flex items-center justify-center bg-black/5 border-t border-black/5">
            <span className="text-[10px] uppercase tracking-widest text-white/60">
              Tap to reveal
            </span>
          </div>
        </div>

        {/* --- BACK SIDE --- */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#fed9b7] to-[#f07e6e] rounded-sm shadow-card flex flex-col overflow-hidden border border-black/5 backface-hidden rotate-y-180 z-20">
          <div className="absolute inset-3 border border-dashed border-white/20 pointer-events-none rounded-sm" />

          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <span className="text-white material-symbols-outlined text-4xl mb-4 filled">
              local_florist
            </span>
            <h2 className="text-3xl font-serif text-[#2d2a2a] mb-2">
              {card.sanskrit}
            </h2>
            <p className="text-sm uppercase tracking-widest text-white/80 mb-8">
              {card.transliteration}
            </p>

            <div className="w-12 h-px bg-white/30 mb-8" />

            <p className="text-xl font-serif italic text-[#2d2a2a] leading-relaxed">
              {card.meaning}
            </p>
          </div>

          <div className="h-12 w-full flex items-center justify-center bg-black/5 border-t border-black/5">
            <span className="text-[10px] uppercase tracking-widest text-white">
              Card Revealed
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};