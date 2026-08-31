import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div
      id={`testimonial-card-${testimonial.id}`}
      className="relative flex flex-col justify-between rounded-3xl bg-white p-7 border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Decorative Quote mark */}
      <div className="absolute top-6 right-6 text-emerald-100">
        <Quote className="w-10 h-10 fill-current opacity-80" />
      </div>

      <div className="relative z-10">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-sm md:text-base text-stone-700 leading-relaxed italic">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author info */}
      <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-display font-bold text-stone-900">
            {testimonial.parentName}
          </h4>
          <p className="text-xs text-emerald-600 font-medium">{testimonial.childClass}</p>
        </div>

        {testimonial.isPlaceholder && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 font-medium">
            Demo
          </span>
        )}
      </div>
    </div>
  );
};
