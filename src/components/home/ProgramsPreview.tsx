import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { ProgramCard } from '../cards/ProgramCard';
import { programsData } from '../../data/programs';
import { Button } from '../common/Button';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { schoolConfig } from '../../config/schoolConfig';

export const ProgramsPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-emerald-50/50 relative overflow-hidden border-y border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Early Childhood Programs"
          title="Our Little Learners"
          subtitle="Carefully structured early learning stages designed to nurture natural curiosity, cognitive readiness, and cheerful socialization."
        />

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsData.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* Notice on Age Eligibility & Quick Action */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-emerald-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold text-stone-900">
                Need guidance regarding class placement or admission?
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Contact our admissions coordinator directly on {schoolConfig.formattedPhone}.
              </p>
            </div>
          </div>

          <Button
            to="/classes"
            variant="outline"
            size="sm"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Explore Detailed Curriculum
          </Button>
        </div>

      </div>
    </section>
  );
};
