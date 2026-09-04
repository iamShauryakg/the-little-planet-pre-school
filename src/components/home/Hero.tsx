import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '../common/Button';
import { schoolConfig } from '../../config/schoolConfig';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F9FBF7] text-[#2D3E33] pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#E1E8DC]">
      {/* Ambient editorial soft glow orbs */}
      <div className="absolute top-[-80px] right-[-80px] w-96 h-96 bg-[#E9F5E1] rounded-full opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-40px] left-[-40px] w-80 h-80 bg-[#FFFCE8] rounded-full opacity-70 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#D8F3DC]/40 rounded-full opacity-50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline, Subtitle, CTA buttons, Metric stats (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6 text-center lg:text-left items-center lg:items-start">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D8F3DC] text-[#2D6A4F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#b7e4c7]/70 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
              <span>Where Little Minds Grow &amp; Shine • Hasanpur</span>
            </div>

            {/* Main Editorial Hero Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-display font-extrabold leading-[1.08] tracking-tight text-[#1B4332]">
              A Nurturing <br />
              <span className="text-[#4CAF50] italic font-editorial font-normal">Garden</span> for Your <br />
              Little One.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#52796F] max-w-[540px] leading-relaxed font-normal">
              Building strong foundations through play, creativity, and exploration in a safe, nature-inspired environment Mohalla Holi Wala, Hasanpur (Amroha).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <Button
                to="/classes"
                size="lg"
                variant="amber"
                id="hero-explore-classes-btn"
                className="w-full sm:w-auto text-base"
              >
                Explore Classes
              </Button>
              <Button
                to="/admissions"
                size="lg"
                variant="primary"
                id="hero-admission-open-btn"
                icon={<Sparkles className="w-4 h-4 text-[#FFB703]" />}
                className="w-full sm:w-auto text-base"
              >
                Admission Open
              </Button>
              <Button
                to="/contact"
                size="lg"
                variant="outline"
                id="hero-contact-us-btn"
                className="w-full sm:w-auto text-base"
              >
                Contact Us
              </Button>
            </div>

            {/* Key Metrics / Highlights Row */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-6 pt-6 border-t border-[#E1E8DC] w-full max-w-lg">
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#1B4332]">100%</span>
                <span className="text-[11px] sm:text-xs uppercase font-semibold text-[#52796F] tracking-wider mt-0.5">
                  Safe Campus
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#1B4332]">Play</span>
                <span className="text-[11px] sm:text-xs uppercase font-semibold text-[#52796F] tracking-wider mt-0.5">
                  Based Learning
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#1B4332]">CCTV</span>
                <span className="text-[11px] sm:text-xs uppercase font-semibold text-[#52796F] tracking-wider mt-0.5">
                  Monitored
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Class Cards Bento Grid & Dark Campus Box (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Pre-Nursery Card */}
            <Link
              to="/classes#pre-nursery"
              className="bg-white p-5 sm:p-6 rounded-[32px] sm:rounded-[40px] shadow-xs border border-[#E1E8DC] flex flex-col items-center text-center justify-center hover:translate-y-[-4px] hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-[#F1F8E9] group-hover:bg-[#D8F3DC] rounded-full flex items-center justify-center mb-3 text-2xl sm:text-3xl transition-colors">
                🐣
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#1B4332] group-hover:text-[#4CAF50] transition-colors">
                Pre-Nursery
              </h3>
              <p className="text-[11px] mt-1 text-[#52796F] leading-tight">
                Early learning &amp; sensory exploration
              </p>
            </Link>

            {/* Nursery Card */}
            <Link
              to="/classes#nursery"
              className="bg-white p-5 sm:p-6 rounded-[32px] sm:rounded-[40px] shadow-xs border border-[#E1E8DC] flex flex-col items-center text-center justify-center hover:translate-y-[-4px] hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-[#E3F2FD] group-hover:bg-[#BAE6FD] rounded-full flex items-center justify-center mb-3 text-2xl sm:text-3xl transition-colors">
                🎨
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#1B4332] group-hover:text-[#4CAF50] transition-colors">
                Nursery
              </h3>
              <p className="text-[11px] mt-1 text-[#52796F] leading-tight">
                Social development &amp; creative play
              </p>
            </Link>

            {/* LKG Card */}
            <Link
              to="/classes#lkg"
              className="bg-white p-5 sm:p-6 rounded-[32px] sm:rounded-[40px] shadow-xs border border-[#E1E8DC] flex flex-col items-center text-center justify-center hover:translate-y-[-4px] hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-[#FFF8E1] group-hover:bg-[#FFE082] rounded-full flex items-center justify-center mb-3 text-2xl sm:text-3xl transition-colors">
                🧩
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#1B4332] group-hover:text-[#4CAF50] transition-colors">
                LKG
              </h3>
              <p className="text-[11px] mt-1 text-[#52796F] leading-tight">
                Foundational literacy &amp; numeracy
              </p>
            </Link>

            {/* UKG Card */}
            <Link
              to="/classes#ukg"
              className="bg-white p-5 sm:p-6 rounded-[32px] sm:rounded-[40px] shadow-xs border border-[#E1E8DC] flex flex-col items-center text-center justify-center hover:translate-y-[-4px] hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-[#FCE4EC] group-hover:bg-[#F8BBD0] rounded-full flex items-center justify-center mb-3 text-2xl sm:text-3xl transition-colors">
                🚀
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#1B4332] group-hover:text-[#4CAF50] transition-colors">
                UKG
              </h3>
              <p className="text-[11px] mt-1 text-[#52796F] leading-tight">
                Preparing for primary education
              </p>
            </Link>

            {/* Dark Editorial Campus & Contact Spotlight Card */}
            <div className="col-span-2 bg-[#1B4332] rounded-[32px] sm:rounded-[40px] p-6 sm:p-7 text-white relative overflow-hidden shadow-xl border border-[#2D6A4F]">
              <div className="relative z-10 text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D8F3DC]/80 block mb-1">
                  Visit Us in Hasanpur
                </span>
                <p className="text-base sm:text-lg font-medium leading-snug mb-4 text-white">
                  Mohalla Holi Wala, Hasanpur, Amroha, Uttar Pradesh
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1 border-t border-white/15">
                  <div className="flex flex-col">
                    <span className="text-[10px] opacity-70 uppercase tracking-wider font-semibold">
                      Admission Helpline
                    </span>
                    <a
                      href={`tel:+91${schoolConfig.phone}`}
                      className="text-base sm:text-lg font-display font-bold text-white hover:text-[#FFB703] transition-colors"
                    >
                      +91 {schoolConfig.formattedPhone}
                    </a> 
                    <a
                      href={`tel:+91${schoolConfig.phone2}`}
                      className="text-base sm:text-lg font-display font-bold text-white hover:text-[#FFB703] transition-colors"
                    >
                      +91 {schoolConfig.formattedPhone2}
                    </a>
                  </div>

                  <div className="w-[1px] h-9 bg-white/20 hidden sm:block" />

                  <div className="flex flex-col">
                    <span className="text-[10px] opacity-70 uppercase tracking-wider font-semibold">
                      Open Hours
                    </span>
                    <span className="text-base sm:text-lg font-display font-bold text-[#4CAF50]">
                      {schoolConfig.schoolTimings}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Background Watermark */}
              <div className="absolute right-[-15px] bottom-[-15px] text-8xl sm:text-9xl opacity-10 rotate-12 select-none pointer-events-none">
                🌍
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
