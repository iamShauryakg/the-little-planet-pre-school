import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { TestimonialCard } from '../cards/TestimonialCard';
import { testimonialsData } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-emerald-50/30 relative overflow-hidden border-t border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Community Love"
          title="What Parents Say"
          subtitle="Warm impressions from families whose children take their initial learning steps with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <span className="text-xs text-stone-400 font-medium italic">
            * Sample parent testimonial placeholders. Real verified reviews will be updated periodically by the school.
          </span>
        </div>

      </div>
    </section>
  );
};
