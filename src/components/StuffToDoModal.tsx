import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { stuffToDoData, CategoryKey, SpotItem } from '../data/stuffToDoData';

interface StuffToDoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StuffToDoModal: React.FC<StuffToDoModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("Food & Drink");

  if (!isOpen) return null;

  const categories: CategoryKey[] = [
    "Food & Drink",
    "Parks & Outdoors",
    "Sights & Culture"
  ];

  const currentSpots: SpotItem[] = stuffToDoData[activeCategory] || [];

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-[#0E0D0C]/75 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="stuff-to-do-title"
    >
      {/* Modal Container: Midcentury warm editorial card */}
      <div 
        className="relative w-full max-w-2xl max-h-[88vh] rounded-2xl bg-[#F7F4EB] border border-[#5B7566]/25 shadow-2xl flex flex-col overflow-hidden text-[#1F2923]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Anchored Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-[#5B7566]/30 bg-[#F7F4EB] text-[#2D2824] flex items-center justify-center hover:bg-[#5B7566] hover:text-[#F7F4EB] hover:border-[#5B7566] transition-all duration-150"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Fixed Header Section */}
        <div className="p-6 sm:p-8 pb-4 sm:pb-5 border-b border-[#5B7566]/15 bg-[#F7F4EB] relative z-10">
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#5B7566]/25 bg-[#5B7566]/10 text-[0.68rem] font-bold tracking-[0.16em] text-[#3D5244] uppercase mb-2 font-mono">
            <span>SIDE A</span>
            <span>•</span>
            <span>TRACK 03</span>
            <span>•</span>
            <span>AUSTIN GUIDE</span>
          </div>

          <h2 id="stuff-to-do-title" className="text-2xl sm:text-3xl font-black tracking-tight text-[#1F2923] font-serif">
            Stuff to Do
          </h2>
          <p className="text-sm text-[#2D2824]/80 mt-1 font-sans leading-relaxed max-w-xl">
            A few of our favorite spots around Austin to explore:
          </p>

          {/* Refined Midcentury Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-5 pt-1 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x overscroll-contain border-b border-[#5B7566]/20">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative pb-2.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#C86446]'
                      : 'text-[#5B7566] hover:text-[#1F2923]'
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C86446] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Single-Column Directory List */}
        <div className="p-6 sm:p-8 pt-2 sm:pt-3 overflow-y-auto flex-1 overscroll-contain divide-y divide-[#5B7566]/15">
          {currentSpots.map((spot) => (
            <div
              key={spot.name}
              className="py-4 sm:py-5 px-3 -mx-3 rounded-xl transition-colors duration-150 hover:bg-[#EFEAD9]/60 group"
            >
              {/* Top Row: Spot Title on left; Neighborhood + Map link on right */}
              <div className="flex items-baseline justify-between gap-3 mb-1.5">
                <div className="flex items-baseline gap-2 min-w-0">
                  <a
                    href={spot.placeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif font-bold text-base sm:text-lg text-[#1F2923] group-hover:text-[#C86446] transition-colors inline-flex items-baseline gap-1 truncate"
                  >
                    <span className="underline-offset-4 group-hover:underline">{spot.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity inline-block shrink-0" />
                  </a>
                </div>

                <div className="flex items-center gap-2 shrink-0 text-xs">
                  <span className="text-[0.72rem] tracking-wider uppercase font-semibold text-[#5B7566] px-2 py-0.5 rounded bg-[#5B7566]/10 border border-[#5B7566]/20">
                    {spot.neighborhood}
                  </span>
                  <a
                    href={spot.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C86446] font-medium hover:underline inline-flex items-center gap-0.5 tracking-tight"
                  >
                    <span>Map ↗</span>
                  </a>
                </div>
              </div>

              {/* Bottom Row: Brief recommendation blurb */}
              <p className="text-xs sm:text-sm text-[#3A352F] leading-relaxed pr-2">
                {spot.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
