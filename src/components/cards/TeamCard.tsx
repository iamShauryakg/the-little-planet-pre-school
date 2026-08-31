import React from 'react';
import { Sparkles } from 'lucide-react';
import { Teacher } from '../../types';

interface TeamCardProps {
  teacher: Teacher;
}

export const TeamCard: React.FC<TeamCardProps> = ({ teacher }) => {
  return (
    <div
      id={`team-card-${teacher.id}`}
      className="group flex flex-col justify-between rounded-3xl bg-white p-6 border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden"
    >
      {/* Decorative top pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300" />

      <div>
        {/* Profile Image with organic playful frame */}
        <div className="relative mx-auto w-28 h-28 mb-4 mt-2">
          <div className="absolute inset-0 rounded-full bg-emerald-100 -rotate-6 group-hover:rotate-6 transition-transform" />
          <img
            src={teacher.image}
            alt={teacher.name}
            loading="lazy"
            className="relative w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* Name & Designation */}
        <h3 className="text-lg font-display font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
          {teacher.name}
        </h3>
        <p className="text-xs font-semibold text-emerald-700 mt-0.5">
          {teacher.designation}
        </p>

        {teacher.specialty && (
          <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-medium text-amber-850">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>{teacher.specialty}</span>
          </div>
        )}

        <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
          {teacher.shortBio}
        </p>
      </div>

      {teacher.isPlaceholder && (
        <div className="mt-4 pt-3 border-t border-stone-100">
          <span className="text-[10px] text-stone-400 font-medium italic">
            * Editable staff profile placeholder
          </span>
        </div>
      )}
    </div>
  );
};
