import React from 'react';
import { Link } from 'react-router-dom';
import { schoolConfig } from '../../config/schoolConfig';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md', className = '' }) => {
  // If an actual image logo is supplied in schoolConfig or assets in the future:
  if (schoolConfig.logo.imagePath) {
    return (
      <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`} id="brand-logo-img">
        <img
          src={schoolConfig.logo.imagePath}
          alt={schoolConfig.schoolName}
          className={size === 'sm' ? 'h-9' : size === 'lg' ? 'h-14' : 'h-11'}
        />
        <div className="flex flex-col leading-none">
          <span className={`font-display font-bold tracking-tight ${size === 'lg' ? 'text-xl' : 'text-base'} ${variant === 'footer' ? 'text-white' : 'text-emerald-950'}`}>
            {schoolConfig.logo.text}
          </span>
          <span className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${variant === 'footer' ? 'text-emerald-300' : 'text-emerald-600'}`}>
            {schoolConfig.logo.subText}
          </span>
        </div>
      </Link>
    );
  }

  // Editorial Nature & Planet vector logo
  return (
    <Link
      to="/"
      id="school-brand-logo"
      className={`inline-flex items-center gap-3 group select-none transition-transform hover:scale-[1.02] ${className}`}
    >
      {/* Visual Badge Icon */}
      <div
        className={`relative flex items-center justify-center rounded-2xl transition-all shadow-md ${
          size === 'sm'
            ? 'w-10 h-10'
            : size === 'lg'
            ? 'w-14 h-14'
            : 'w-11 h-11'
        } ${
          variant === 'footer'
            ? 'bg-[#2D6A4F] border border-[#52796F]/50 shadow-emerald-950/20 text-[#D8F3DC]'
            : 'bg-[#4CAF50] text-white shadow-[#4CAF50]/25'
        }`}
      >
        <span className={size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'}>🌳</span>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight ${
            size === 'sm'
              ? 'text-sm'
              : size === 'lg'
              ? 'text-xl md:text-2xl'
              : 'text-base md:text-lg'
          } ${
            variant === 'footer'
              ? 'text-white'
              : 'text-[#1B4332] group-hover:text-[#4CAF50] transition-colors'
          }`}
        >
          {schoolConfig.logo.text}
        </span>
        <span
          className={`font-bold tracking-widest uppercase mt-1 ${
            size === 'sm' ? 'text-[9px]' : 'text-[10px]'
          } ${
            variant === 'footer'
              ? 'text-[#D8F3DC]'
              : 'text-[#52796F]'
          }`}
        >
          {schoolConfig.logo.subText}
        </span>
      </div>
    </Link>
  );
};
