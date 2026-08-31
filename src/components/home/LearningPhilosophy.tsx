import React from 'react';
import { Sparkles, MessageCircle, Heart, Compass, Lightbulb, BookOpen } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { LittlePlanetGraphic } from '../common/DecorativeElements';

export const LearningPhilosophy: React.FC = () => {
  const pillars = [
    {
      title: 'Creativity & Imagination',
      desc: 'Free artistic expression through colors, clay, and drama without fear of mistakes.',
      icon: Sparkles,
      color: 'bg-amber-100 text-amber-700',
    },
    {
      title: 'Communication & Speech',
      desc: 'Expressive vocabulary, phonetic clarity, and active listening built through daily storytelling.',
      icon: MessageCircle,
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      title: 'Confidence & Stage Presence',
      desc: 'Gentle encouragement in morning circles and rhymes to help children speak comfortably.',
      icon: Heart,
      color: 'bg-rose-100 text-rose-700',
    },
    {
      title: 'Social & Emotional Empathy',
      desc: 'Learning to share toys, respect peers, resolve small conflicts, and work together.',
      icon: Compass,
      color: 'bg-teal-100 text-teal-700',
    },
    {
      title: 'Natural Curiosity',
      desc: 'Hands-on sensory stations that inspire questions about nature, seasons, and shapes.',
      icon: Lightbulb,
      color: 'bg-yellow-100 text-yellow-700',
    },
    {
      title: 'Early Learning Foundations',
      desc: 'Pre-reading, pre-writing, and early numeracy through tactile manipulatives and puzzles.',
      icon: BookOpen,
      color: 'bg-sky-100 text-sky-700',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#1B4332] text-white relative overflow-hidden">
      {/* Background Subtle Planet watermark */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
        <LittlePlanetGraphic className="w-80 h-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2D6A4F] text-[#D8F3DC] border border-[#52796F]/40 mb-4 shadow-2xs">
            <span>Our Pedagogical Core</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Learning Through Play
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#D8F3DC]/90 leading-relaxed font-normal">
            Small children do not learn best by rote memorization. They learn by touching, building, laughing, singing, and exploring. We integrate cognitive readiness with holistic emotional and physical development.
          </p>
        </div>

        {/* 6 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-[32px] bg-[#2D6A4F]/40 border border-[#52796F]/40 backdrop-blur-xs hover:bg-[#2D6A4F]/70 hover:border-[#4CAF50]/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${pillar.color} mb-4 shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#D8F3DC]/80 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
