import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { Logo } from '../common/Logo';
import { schoolConfig } from '../../config/schoolConfig';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Classes', path: '/classes' },
  { name: 'Activities', path: '/activities' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 md:py-3.5 border-b border-[#E1E8DC]'
          : 'bg-[#F9FBF7]/90 backdrop-blur-md py-4 md:py-5 border-b border-[#E1E8DC]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <div className="shrink-0">
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#1B4332] bg-[#D8F3DC] font-bold shadow-2xs'
                      : 'text-[#52796F] hover:text-[#4CAF50] hover:bg-[#F1F8E9]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right side CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/admissions"
              id="desktop-nav-admission-cta"
              className="bg-[#4CAF50] hover:bg-[#3d9140] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FFB703]" />
              <span>Admission Open</span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#4CAF50] text-white font-display font-bold text-xs shadow-xs"
            >
              <span>Admissions</span>
            </Link>

            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#2D3E33] hover:text-[#4CAF50] hover:bg-[#F1F8E9] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] bg-[#1B4332]/40 backdrop-blur-xs z-40 lg:hidden flex flex-col justify-between">
          <div className="bg-white px-5 pt-4 pb-8 shadow-2xl rounded-b-[32px] border-b border-[#E1E8DC] min-h-[calc(90vh-100px)] overflow-y-auto">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-base font-display font-semibold transition-all ${
                      isActive
                        ? 'text-[#1B4332] bg-[#D8F3DC] font-bold'
                        : 'text-[#2D3E33] hover:bg-[#F1F8E9]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#E1E8DC] flex flex-col gap-3">
              <Link
                to="/admissions"
                className="w-full text-center py-3.5 px-4 rounded-full bg-[#4CAF50] hover:bg-[#3d9140] text-white font-display font-bold text-base shadow-md"
              >
                🎓 Admission Open ({schoolConfig.admissionPeriod})
              </Link>
              <a
                href={`tel:+91${schoolConfig.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#F1F8E9] hover:bg-[#E9F5E1] text-[#1B4332] font-display font-bold text-sm border border-[#E1E8DC]"
              >
                <Phone className="w-4 h-4 text-[#4CAF50]" />
                <span>Call: {schoolConfig.formattedPhone}</span>
              </a>
            </div>
          </div>

          <div
            className="grow"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </header>
  );
};
