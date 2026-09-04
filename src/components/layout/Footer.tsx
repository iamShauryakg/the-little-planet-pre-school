import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Calendar, Instagram, Facebook, Youtube, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { Logo } from '../common/Logo';
import { schoolConfig } from '../../config/schoolConfig';
import { WaveDivider, LittlePlanetGraphic } from '../common/DecorativeElements';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1B4332] text-[#D8F3DC] overflow-hidden pt-12 border-t border-[#2D6A4F]">
      {/* Decorative ambient elements */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-10">
        <LittlePlanetGraphic className="w-64 h-64" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2D6A4F]">
          
          {/* Col 1: School Identity & Mission (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Logo variant="footer" size="lg" />
            <p className="text-sm text-[#D8F3DC]/80 leading-relaxed max-w-sm mt-1 font-normal">
              {schoolConfig.tagline}. A joyful, caring kindergarten where early childhood education is nurtured through play, creativity, exploration, and warm guidance in Hasanpur.
            </p>

            {/* Admission Badge */}
            <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#2D6A4F] border border-[#52796F]/50 text-xs text-[#D8F3DC]">
              <Sparkles className="w-4 h-4 text-[#FFB703] shrink-0" />
              <span>Admissions Open: <strong className="text-white font-bold">{schoolConfig.admissionPeriod}</strong></span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-3">
              <a
                href={schoolConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook"
                className="w-9 h-9 rounded-xl bg-[#2D6A4F] hover:bg-[#4CAF50] flex items-center justify-center text-[#D8F3DC] hover:text-white transition-colors border border-[#52796F]/50"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={schoolConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram"
                className="w-9 h-9 rounded-xl bg-[#2D6A4F] hover:bg-[#4CAF50] flex items-center justify-center text-[#D8F3DC] hover:text-white transition-colors border border-[#52796F]/50"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={schoolConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit YouTube"
                className="w-9 h-9 rounded-xl bg-[#2D6A4F] hover:bg-[#4CAF50] flex items-center justify-center text-[#D8F3DC] hover:text-white transition-colors border border-[#52796F]/50"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${schoolConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-xl bg-[#2D6A4F] hover:bg-[#4CAF50] flex items-center justify-center text-[#D8F3DC] hover:text-white transition-colors border border-[#52796F]/50"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-display font-bold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFB703]"></span>
              Explore Our World
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <Link to="/" className="text-[#D8F3DC]/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-[#D8F3DC]/80 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/classes" className="text-[#D8F3DC]/80 hover:text-white transition-colors">Classes</Link>
              </li>
              <li>
                <Link to="/activities" className="text-[#D8F3DC]/80 hover:text-white transition-colors">Activities</Link>
              </li>
              <li>
                <Link to="/facilities" className="text-[#D8F3DC]/80 hover:text-white transition-colors">Facilities</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#D8F3DC]/80 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-[#D8F3DC]/80 hover:text-white transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#D8F3DC]/80 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#2D6A4F]">
              <span className="text-xs font-semibold text-[#D8F3DC] uppercase tracking-wider block mb-2">Our Classes</span>
              <div className="flex flex-wrap gap-1.5">
                <Link to="/classes#pre-nursery" className="px-2.5 py-1 rounded-lg bg-[#2D6A4F] hover:bg-[#4CAF50] text-xs text-[#D8F3DC] hover:text-white transition-colors">Pre-Nursery</Link>
                <Link to="/classes#nursery" className="px-2.5 py-1 rounded-lg bg-[#2D6A4F] hover:bg-[#4CAF50] text-xs text-[#D8F3DC] hover:text-white transition-colors">Nursery</Link>
                <Link to="/classes#lkg" className="px-2.5 py-1 rounded-lg bg-[#2D6A4F] hover:bg-[#4CAF50] text-xs text-[#D8F3DC] hover:text-white transition-colors">LKG</Link>
                <Link to="/classes#ukg" className="px-2.5 py-1 rounded-lg bg-[#2D6A4F] hover:bg-[#4CAF50] text-xs text-[#D8F3DC] hover:text-white transition-colors">UKG</Link>
              </div>
            </div>
          </div>

          {/* Col 3: Contact & Timings (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-base font-display font-bold text-white tracking-wide mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span>
              School Information &amp; Contact
            </h3>
            
            <ul className="space-y-3 text-sm text-[#D8F3DC]/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4CAF50] shrink-0 mt-0.5" />
                <span>
                  <strong>Address:</strong> {schoolConfig.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#4CAF50] shrink-0" />
                <span>
                  <strong>Phone / WhatsApp:</strong>{' '}
                  <a href={`tel:+91${schoolConfig.phone}`} className="hover:text-white font-medium underline-offset-2 hover:underline">
                    {schoolConfig.formattedPhone}
                  </a>, {' '}
                  <a href={`tel:+91${schoolConfig.phone2}`} className="hover:text-white font-medium underline-offset-2 hover:underline">
                    {schoolConfig.formattedPhone2}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#4CAF50] shrink-0" />
                <span>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${schoolConfig.email}`} className="hover:text-white font-medium break-all underline-offset-2 hover:underline">
                    {schoolConfig.email}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#4CAF50] shrink-0" />
                <span>
                  <strong>Timings:</strong> {schoolConfig.schoolTimings}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#4CAF50] shrink-0" />
                <span>
                  <strong>Working Days:</strong> {schoolConfig.workingDays}
                </span>
              </li>
            </ul>

            <div className="mt-2">
              <a
                href={schoolConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FFB703] hover:text-yellow-200 underline underline-offset-4"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View Campus on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8F3DC]/70">
          <p>© 2026 {schoolConfig.schoolName}. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with care</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>for early childhood learning in Hasanpur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
