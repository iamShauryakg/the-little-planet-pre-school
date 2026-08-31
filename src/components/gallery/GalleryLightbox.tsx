import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';
import { GalleryItem } from '../../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  initialCategory?: string;
  showFilters?: boolean;
}

const categories = [
  'All',
  'Classrooms',
  'Activities',
  'Events',
  'Celebrations',
  'Sports',
  'Art & Craft',
  'School Campus',
];

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  initialCategory = 'All',
  showFilters = true,
}) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  }, [selectedIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  }, [selectedIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs md:text-sm font-display font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-105'
                  : 'bg-white text-stone-700 hover:bg-emerald-50 border border-stone-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            id={`gallery-item-${item.id}`}
            onClick={() => handleOpen(index)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl bg-stone-100 aspect-4/3 shadow-xs hover:shadow-xl transition-all duration-300 border border-stone-200/60"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleOpen(index);
            }}
            aria-label={`View photo: ${item.title}`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
              <div className="flex justify-end">
                <span className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-xs flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-white" />
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-600/90 inline-block mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-display font-bold leading-tight">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-stone-200">
          <p className="text-stone-500 font-display">No photos found in this category.</p>
        </div>
      )}

      {/* Accessible Lightbox Modal */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close image modal"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Content Container */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl bg-stone-900 shadow-2xl">
              <img
                src={filteredItems[selectedIndex].image}
                alt={filteredItems[selectedIndex].title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            {/* Caption bar */}
            <div className="w-full mt-4 text-center text-white px-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/80 text-xs font-semibold mb-1">
                <Tag className="w-3 h-3" />
                <span>{filteredItems[selectedIndex].category}</span>
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold">
                {filteredItems[selectedIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl mx-auto">
                {filteredItems[selectedIndex].description}
              </p>
              <div className="text-[11px] text-stone-400 mt-2">
                {selectedIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
