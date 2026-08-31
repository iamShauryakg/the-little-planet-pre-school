import React from 'react';
import { MessageCircle, Phone, ArrowRight, Sparkles, Calendar, MapPin } from 'lucide-react';
import { Button } from '../common/Button';
import { schoolConfig } from '../../config/schoolConfig';
import { LittlePlanetGraphic } from '../common/DecorativeElements';

export const AdmissionCTA: React.FC = () => {
  const whatsappUrl = `https://wa.me/${schoolConfig.whatsapp}?text=${encodeURIComponent(
    'Hello The Little Planet Pre School, I would like to enquire about admission.'
  )}`;

  return (
    <section className="py-20 md:py-24 bg-[#1B4332] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-10 pointer-events-none">
        <LittlePlanetGraphic className="w-80 h-80" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D6A4F] border border-[#52796F]/50 text-xs sm:text-sm font-display font-bold text-[#FFB703] mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#FFB703]" />
          <span>New Academic Session Admissions</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Admissions Open — {schoolConfig.admissionPeriod}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#D8F3DC]/90 max-w-2xl mx-auto leading-relaxed font-normal">
          Give your little one the best start with loving guidance, creative activities, and foundational early learning in <strong>Pre-Nursery, Nursery, LKG, and UKG</strong>.
        </p>

        {/* Quick Highlights info row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#D8F3DC]/90">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#FFB703]" />
            <span>Admissions: <strong>{schoolConfig.admissionPeriod}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#FFB703]" />
            <span>Campus: <strong>Near Shivalya Mandir, Hasanpur</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#FFB703]" />
            <span>Call: <strong>{schoolConfig.formattedPhone}</strong></span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={whatsappUrl}
            target="_blank"
            variant="amber"
            size="lg"
            icon={<MessageCircle className="w-5 h-5 fill-current" />}
            id="admission-cta-whatsapp"
            className="shadow-xl"
          >
            Enquire on WhatsApp
          </Button>

          <Button
            to="/admissions"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-4 h-4 text-[#1B4332]" />}
            iconPosition="right"
            id="admission-cta-contact-form"
            className="bg-white text-[#1B4332] border-white hover:bg-[#F1F8E9]"
          >
            Admission Enquiry Page
          </Button>
        </div>
      </div>
    </section>
  );
};
