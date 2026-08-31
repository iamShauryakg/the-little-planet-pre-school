import React from 'react';
import { ArrowRight, CheckCircle2, Heart, Sparkles, BookOpen, Users } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { schoolConfig } from '../../config/schoolConfig';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F9FBF7] relative overflow-hidden border-b border-[#E1E8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Preschool Classroom Photo & Highlights (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-white border border-[#E1E8DC] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=750&q=80"
                alt="Children in playful learning circle at The Little Planet Pre School"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 via-transparent to-transparent" />
              
              {/* Bottom Quote inside image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-xs shadow-md border border-[#E1E8DC]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D8F3DC] text-[#2D6A4F] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 fill-[#2D6A4F] text-[#2D6A4F]" />
                  </div>
                  <div>
                    <p className="text-xs font-display font-bold text-[#1B4332] leading-tight">
                      A Caring Second Home for Young Children
                    </p>
                    <p className="text-[11px] text-[#52796F] mt-0.5">Located in {schoolConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background blur */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#FFFCE8] rounded-full -z-10 blur-2xl opacity-70" />
          </div>

          {/* Right Column: Genuine Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionTitle
              align="left"
              badge="About Our Kindergarten"
              title={`Welcome to ${schoolConfig.schoolName}`}
              subtitle="We provide a warm, encouraging atmosphere where young learners begin their educational journey with joy and confidence."
              className="mb-6!"
            />

            <p className="text-base text-[#52796F] leading-relaxed font-normal">
              At <strong>{schoolConfig.schoolName}</strong>, we believe every child is naturally curious and ready to blossom. Our preschool in Hasanpur offers a nurturing, safe environment where children can <strong>explore, play, create, communicate, and build lasting confidence</strong>.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 w-full">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E1E8DC] shadow-2xs hover:border-[#4CAF50]/50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#D8F3DC] text-[#2D6A4F] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-display font-bold text-[#1B4332]">Explore &amp; Discover</h4>
                  <p className="text-xs text-[#52796F] mt-0.5">Curiosity-driven sensory &amp; tactile activities</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E1E8DC] shadow-2xs hover:border-[#FFB703]/50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#FFF8E1] text-[#9A6700] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-display font-bold text-[#1B4332]">Play &amp; Create</h4>
                  <p className="text-xs text-[#52796F] mt-0.5">Art, music, dance, and imaginative free play</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E1E8DC] shadow-2xs hover:border-sky-400/50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#E3F2FD] text-[#0284c7] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-display font-bold text-[#1B4332]">Communicate &amp; Share</h4>
                  <p className="text-xs text-[#52796F] mt-0.5">Group interaction, empathy, and social manners</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#E1E8DC] shadow-2xs hover:border-purple-400/50 transition-colors">
                <div className="w-8 h-8 rounded-xl bg-[#F3E8FF] text-[#7E22CE] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-display font-bold text-[#1B4332]">Early Foundations</h4>
                  <p className="text-xs text-[#52796F] mt-0.5">Phonics readiness, number sense, &amp; vocabulary</p>
                </div>
              </div>
            </div>

            <Button
              to="/about"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              id="about-preview-know-more-btn"
            >
              Know More About Us
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
