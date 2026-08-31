import React from 'react';
import { LeafGraphic } from './DecorativeElements';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
  className?: string;
  badgeColor?: 'emerald' | 'amber' | 'sky' | 'rose' | 'purple';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  badgeColor = 'emerald',
}) => {
  const badgeClasses = {
    emerald: 'bg-[#D8F3DC] text-[#2D6A4F] border-[#b7e4c7]',
    amber: 'bg-[#FFF8E1] text-[#9A6700] border-[#FFE082]',
    sky: 'bg-[#E3F2FD] text-[#0284c7] border-[#BAE6FD]',
    rose: 'bg-[#FCE4EC] text-[#BE185D] border-[#FBCFE8]',
    purple: 'bg-[#F3E8FF] text-[#7E22CE] border-[#E9D5FF]',
  };

  const alignClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right ml-auto items-end',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-10 md:mb-14 ${alignClasses[align]} ${className}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border shadow-2xs mb-4 ${badgeClasses[badgeColor]}`}
        >
          <LeafGraphic className="w-3.5 h-3.5 text-[#4CAF50]" />
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-extrabold text-[#1B4332] leading-[1.15] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-[#52796F] leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
