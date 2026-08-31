import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { schoolConfig } from '../../config/schoolConfig';
import { SectionTitle } from '../common/SectionTitle';

export const PrincipalMessage: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-emerald-50/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Leadership & Care"
          title="A Message from Our School"
          subtitle="A welcoming note on our commitment to every child's safety, happiness, and foundational learning."
        />

        <div className="relative rounded-[36px] bg-white p-8 sm:p-10 md:p-14 border border-emerald-200/80 shadow-lg overflow-hidden">
          {/* Decorative quote icon */}
          <div className="absolute top-6 right-8 text-emerald-100/80 pointer-events-none">
            <Quote className="w-20 h-20 fill-current opacity-60" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Principal Photo / Placeholder Frame (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden bg-emerald-100 border-4 border-emerald-50 shadow-md">
                <img
                  src={schoolConfig.principal.photoPlaceholder}
                  alt={schoolConfig.principal.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-display font-bold text-stone-900 mt-4">
                {schoolConfig.principal.name}
              </h3>
              <p className="text-xs font-semibold text-emerald-700">
                {schoolConfig.principal.designation}
              </p>
              <span className="text-[10px] text-stone-400 mt-1 italic">
                * Editable in src/config/schoolConfig.ts
              </span>
            </div>

            {/* Principal Message Text (8 cols) */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold w-fit mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Nurturing Every Unique Potential</span>
              </div>

              <blockquote className="text-base sm:text-lg text-stone-700 leading-relaxed italic font-normal">
                "{schoolConfig.principal.message}"
              </blockquote>

              <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                <span>The Little Planet Pre School • Hasanpur, Amroha</span>
                <span className="font-semibold text-emerald-700">Admissions: {schoolConfig.admissionPeriod}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
