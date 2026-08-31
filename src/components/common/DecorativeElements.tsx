import React from 'react';

/**
 * ============================================================================
 * PLAYFUL DECORATIVE SVG GRAPHICS
 * ============================================================================
 * Pure SVG illustrations of Sun, Clouds, Trees, Little Planet, Leaves, Stars,
 * Flowers, and Butterflies to keep the design cheerful, lightweight, and fast.
 */

export const LittlePlanetGraphic: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    {/* Planet circle */}
    <circle cx="50" cy="50" r="38" fill="#10B981" />
    <circle cx="42" cy="42" r="34" fill="#34D399" fillOpacity="0.4" />
    {/* Orbit ring */}
    <ellipse cx="50" cy="50" rx="46" ry="14" stroke="#FBBF24" strokeWidth="4" strokeDasharray="6 4" transform="rotate(-22 50 50)" />
    {/* Mini Tree on Planet */}
    <rect x="47" y="24" width="6" height="14" rx="2" fill="#92400E" />
    <circle cx="50" cy="20" r="12" fill="#047857" />
    <circle cx="43" cy="22" r="8" fill="#10B981" />
    <circle cx="57" cy="22" r="8" fill="#34D399" />
    {/* Cute Star */}
    <polygon points="76,28 78,33 83,34 79,38 80,43 76,40 72,43 73,38 69,34 74,33" fill="#F59E0B" />
  </svg>
);

export const TreeGraphic: React.FC<{ className?: string }> = ({ className = 'w-16 h-20' }) => (
  <svg viewBox="0 0 100 120" fill="none" className={className}>
    {/* Trunk */}
    <path d="M44 70 L42 110 Q50 114 58 110 L56 70 Z" fill="#854D0E" />
    {/* Foliage Layers */}
    <circle cx="50" cy="45" r="32" fill="#10B981" />
    <circle cx="34" cy="52" r="22" fill="#059669" />
    <circle cx="66" cy="52" r="22" fill="#34D399" />
    <circle cx="50" cy="30" r="20" fill="#6EE7B7" fillOpacity="0.6" />
    {/* Little apples/fruits */}
    <circle cx="42" cy="42" r="3.5" fill="#EF4444" />
    <circle cx="58" cy="38" r="3.5" fill="#EF4444" />
    <circle cx="48" cy="58" r="3.5" fill="#EF4444" />
  </svg>
);

export const SunGraphic: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <circle cx="50" cy="50" r="24" fill="#FBBF24" />
    <circle cx="50" cy="50" r="20" fill="#F59E0B" />
    {/* Rays */}
    <g stroke="#F59E0B" strokeWidth="4" strokeLinecap="round">
      <line x1="50" y1="12" x2="50" y2="20" />
      <line x1="50" y1="80" x2="50" y2="88" />
      <line x1="12" y1="50" x2="20" y2="50" />
      <line x1="80" y1="50" x2="88" y2="50" />
      <line x1="23" y1="23" x2="29" y2="29" />
      <line x1="71" y1="71" x2="77" y2="77" />
      <line x1="23" y1="77" x2="29" y2="71" />
      <line x1="71" y1="29" x2="77" y2="23" />
    </g>
    {/* Cute smiling face */}
    <circle cx="43" cy="46" r="2.5" fill="#78350F" />
    <circle cx="57" cy="46" r="2.5" fill="#78350F" />
    <path d="M44 56 Q50 62 56 56" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

export const CloudGraphic: React.FC<{ className?: string; fill?: string }> = ({
  className = 'w-20 h-10',
  fill = '#E0F2FE',
}) => (
  <svg viewBox="0 0 120 60" fill="none" className={className}>
    <path
      d="M25 50 Q10 50 10 38 Q10 26 24 24 Q28 10 46 10 Q60 10 68 20 Q76 14 90 18 Q104 22 104 36 Q112 38 112 48 Q112 50 100 50 Z"
      fill={fill}
    />
  </svg>
);

export const ButterflyGraphic: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    {/* Left wings */}
    <path d="M30 30 Q10 10 10 26 Q10 40 30 34" fill="#F43F5E" fillOpacity="0.8" />
    <path d="M30 34 Q14 40 18 52 Q28 54 30 38" fill="#FB7185" fillOpacity="0.8" />
    {/* Right wings */}
    <path d="M30 30 Q50 10 50 26 Q50 40 30 34" fill="#F43F5E" fillOpacity="0.8" />
    <path d="M30 34 Q46 40 42 52 Q32 54 30 38" fill="#FB7185" fillOpacity="0.8" />
    {/* Body */}
    <ellipse cx="30" cy="32" rx="2" ry="12" fill="#881337" />
    <circle cx="30" cy="18" r="2.5" fill="#881337" />
  </svg>
);

export const FlowerGraphic: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className}>
    {/* Petals */}
    <circle cx="30" cy="18" r="9" fill="#FB7185" />
    <circle cx="42" cy="30" r="9" fill="#FB7185" />
    <circle cx="30" cy="42" r="9" fill="#FB7185" />
    <circle cx="18" cy="30" r="9" fill="#FB7185" />
    {/* Center */}
    <circle cx="30" cy="30" r="8" fill="#FBBF24" />
  </svg>
);

export const LeafGraphic: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 50 50" fill="none" className={className}>
    <path d="M10 40 Q10 15 40 10 Q35 35 10 40 Z" fill="#10B981" />
    <path d="M10 40 Q25 25 40 10" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const WaveDivider: React.FC<{ flip?: boolean; fill?: string; className?: string }> = ({
  flip = false,
  fill = '#F0FDF4',
  className = 'w-full h-12 md:h-20',
}) => (
  <div className={`overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full">
      <path
        d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z"
        fill={fill}
      ></path>
    </svg>
  </div>
);
