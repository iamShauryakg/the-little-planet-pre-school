import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { schoolConfig } from '../../config/schoolConfig';

export const FloatingActions: React.FC = () => {
  const whatsappUrl = `https://wa.me/${schoolConfig.whatsapp}?text=${encodeURIComponent(
    'Hello The Little Planet Pre School, I would like to know more about admissions.'
  )}`;

  const callUrl = `tel:+91${schoolConfig.phone}`;

  return (
    <div className="fixed bottom-5 right-4 md:bottom-7 md:right-7 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Mobile-only Call Quick Action */}
      <a
        href={callUrl}
        id="floating-call-btn"
        className="pointer-events-auto sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 active:scale-90 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label={`Call ${schoolConfig.schoolName}`}
        title={`Call ${schoolConfig.formattedPhone}`}
      >
        <Phone className="w-5 h-5 animate-pulse" />
      </a>

      {/* Floating WhatsApp Action with tooltip on desktop */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 md:px-5 md:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-2xl transition-all duration-200 active:scale-95 border-2 border-white focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current shrink-0" />
        <span className="hidden md:inline font-display font-bold text-sm tracking-wide text-white">
          Enquire on WhatsApp
        </span>
        {/* Mobile pulse indicator badge */}
        <span className="md:hidden absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
        </span>
      </a>
    </div>
  );
};
