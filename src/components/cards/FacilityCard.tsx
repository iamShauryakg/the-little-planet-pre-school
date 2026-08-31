import React from 'react';
import {
  School,
  MonitorPlay,
  Blocks,
  BookOpen,
  Trees,
  Smile,
  Camera,
  HeartPulse,
  Sparkle,
  Droplets,
  Wind,
  Navigation,
  Bus,
  CheckCircle,
} from 'lucide-react';
import { Facility } from '../../types';

interface FacilityCardProps {
  facility: Facility;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'School':
        return <School {...props} />;
      case 'MonitorPlay':
        return <MonitorPlay {...props} />;
      case 'Blocks':
        return <Blocks {...props} />;
      case 'BookOpen':
        return <BookOpen {...props} />;
      case 'Trees':
        return <Trees {...props} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'Camera':
        return <Camera {...props} />;
      case 'HeartPulse':
        return <HeartPulse {...props} />;
      case 'Sparkle':
        return <Sparkle {...props} />;
      case 'Droplets':
        return <Droplets {...props} />;
      case 'Wind':
        return <Wind {...props} />;
      case 'Navigation':
        return <Navigation {...props} />;
      case 'Bus':
        return <Bus {...props} />;
      default:
        return <School {...props} />;
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Learning Spaces':
        return {
          iconBg: 'bg-emerald-100 text-emerald-700',
          badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          border: 'hover:border-emerald-300',
        };
      case 'Play & Development':
        return {
          iconBg: 'bg-amber-100 text-amber-700',
          badge: 'bg-amber-50 text-amber-800 border-amber-200',
          border: 'hover:border-amber-300',
        };
      case 'Safety & Care':
        return {
          iconBg: 'bg-teal-100 text-teal-700',
          badge: 'bg-teal-50 text-teal-800 border-teal-200',
          border: 'hover:border-teal-300',
        };
      case 'Comfort & Convenience':
        return {
          iconBg: 'bg-sky-100 text-sky-700',
          badge: 'bg-sky-50 text-sky-800 border-sky-200',
          border: 'hover:border-sky-300',
        };
      default:
        return {
          iconBg: 'bg-stone-100 text-stone-700',
          badge: 'bg-stone-50 text-stone-800 border-stone-200',
          border: 'hover:border-stone-300',
        };
    }
  };

  const theme = getCategoryTheme(facility.category);

  return (
    <div
      id={`facility-card-${facility.id}`}
      className={`group flex flex-col justify-between rounded-3xl bg-white p-6 border border-stone-200/80 ${theme.border} shadow-xs hover:shadow-lg transition-all duration-300`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme.iconBg} shadow-xs group-hover:scale-105 transition-transform`}>
            {getIcon(facility.icon)}
          </div>
          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${theme.badge}`}>
            {facility.category}
          </span>
        </div>

        <h3 className="text-lg font-display font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
          {facility.name}
        </h3>

        <p className="mt-2 text-xs md:text-sm text-stone-600 leading-relaxed">
          {facility.shortDescription}
        </p>

        {facility.features && facility.features.length > 0 && (
          <ul className="mt-4 pt-3 border-t border-stone-100 space-y-1.5">
            {facility.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-stone-500">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
