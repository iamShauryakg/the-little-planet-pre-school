import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { CloudGraphic, SunGraphic, LittlePlanetGraphic, LeafGraphic } from './DecorativeElements';

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbCurrent: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  description,
  breadcrumbCurrent,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100/70 via-teal-50/50 to-emerald-50/20 pt-28 pb-16 md:pt-36 md:pb-20 border-b border-emerald-100/60">
      {/* Decorative Background Elements */}
      <div className="absolute top-6 left-6 md:left-16 pointer-events-none opacity-80 animate-pulse">
        <SunGraphic className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <div className="absolute top-12 right-10 md:right-24 pointer-events-none opacity-60">
        <CloudGraphic className="w-28 h-14 md:w-36 md:h-18" fill="#BAE6FD" />
      </div>
      <div className="absolute -bottom-6 left-1/4 pointer-events-none opacity-40">
        <LittlePlanetGraphic className="w-20 h-20" />
      </div>
      <div className="absolute top-1/2 right-4 pointer-events-none opacity-30">
        <LeafGraphic className="w-10 h-10 rotate-45" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-emerald-200/70 text-xs font-semibold text-stone-600 mb-6 shadow-xs"
        >
          <Link to="/" className="inline-flex items-center gap-1 hover:text-emerald-700 transition-colors">
            <Home className="w-3.5 h-3.5 text-emerald-600" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-emerald-800 font-bold">{breadcrumbCurrent}</span>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="block mb-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-200/70 text-emerald-900 border border-emerald-300/60">
              {badge}
            </span>
          </div>
        )}

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-stone-900 tracking-tight leading-tight">
          {title}
        </h1>

        {/* Supporting description */}
        <p className="mt-4 text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};
