import React from 'react';
import { Pencil, Palette, Scissors, Music2, Radio, BookOpenCheck, Gamepad2, Sparkles } from 'lucide-react';
import { Activity } from '../../types';

interface ActivityCardProps {
  activity: Activity;
  detailed?: boolean;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, detailed = false }) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'Pencil':
        return <Pencil {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Scissors':
        return <Scissors {...props} />;
      case 'Music2':
        return <Music2 {...props} />;
      case 'Radio':
        return <Radio {...props} />;
      case 'BookOpenCheck':
        return <BookOpenCheck {...props} />;
      case 'Gamepad2':
        return <Gamepad2 {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div
      id={`activity-card-${activity.id}`}
      className="group flex flex-col justify-between rounded-3xl bg-white border border-stone-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div>
        {/* Photo Container */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
          <img
            src={activity.image}
            alt={activity.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Floating Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/95 text-stone-800 shadow-sm">
              {activity.category}
            </span>
          </div>

          {/* Floating Icon */}
          <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-emerald-700 shadow-sm">
            {getIcon(activity.icon)}
          </div>
        </div>

        {/* Text Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
            {activity.title}
          </h3>

          <p className="mt-2 text-sm text-stone-600 leading-relaxed">
            {detailed ? activity.fullDescription : activity.shortDescription}
          </p>

          {/* Skills developed */}
          <div className="mt-4 pt-4 border-t border-stone-100">
            <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
              Skills Nurtured
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activity.skillsDeveloped.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 font-medium border border-emerald-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
