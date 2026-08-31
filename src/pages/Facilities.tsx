import React, { useEffect, useState } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { facilitiesData } from '../data/facilities';
import { FacilityCard } from '../components/cards/FacilityCard';
import { AdmissionCTA } from '../components/home/AdmissionCTA';
import { schoolConfig } from '../config/schoolConfig';
import { School, Blocks, ShieldCheck, Bus, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '../components/common/Button';

export const Facilities: React.FC = () => {
  useEffect(() => {
    document.title = `Facilities & Infrastructure | ${schoolConfig.schoolName}`;
  }, []);

  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = [
    'All',
    'Learning Spaces',
    'Play & Development',
    'Safety & Care',
    'Comfort & Convenience',
  ];

  const filteredFacilities =
    activeTab === 'All'
      ? facilitiesData
      : facilitiesData.filter((f) => f.category === activeTab);

  return (
    <main className="min-h-screen bg-stone-50/40">
      {/* 1. Page Hero */}
      <PageHero
        badge="Safety & Infrastructure"
        title="School Facilities & Campus"
        description="Thoughtfully designed preschool spaces with air conditioning, CCTV surveillance, child-safe play areas, and reliable transport."
        breadcrumbCurrent="Facilities"
      />

      {/* 2. Safety & Comfort Highlights Banner */}
      <section className="py-12 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
              <School className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-display font-bold text-stone-900">Modern Classrooms</h4>
                <p className="text-xs text-stone-600 mt-0.5">AC-equipped with interactive smart screens & child-safe furniture</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-100">
              <Blocks className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-display font-bold text-stone-900">Safe Play Areas</h4>
                <p className="text-xs text-stone-600 mt-0.5">Padded indoor soft-play & gated outdoor playground</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-teal-50 border border-teal-100">
              <ShieldCheck className="w-6 h-6 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-display font-bold text-stone-900">24/7 CCTV & First Aid</h4>
                <p className="text-xs text-stone-600 mt-0.5">Comprehensive surveillance and trained first-aid response</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-sky-50 border border-sky-100">
              <Bus className="w-6 h-6 text-sky-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-display font-bold text-stone-900">School Transport</h4>
                <p className="text-xs text-stone-600 mt-0.5">Dedicated school vans/buses covering major Hasanpur routes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Facilities Grid with Category Filter */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Infrastructure Overview"
            title="Every Facility Built for Small Children"
            subtitle="From filtered RO water to rounded corner desks, every corner of our campus is designed with child safety in mind."
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`facility-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-display font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === cat
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/25 scale-105'
                    : 'bg-white text-stone-700 hover:bg-emerald-50 border border-stone-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>

          {/* Transport Routes Info Box */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-emerald-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Bus className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-stone-900">
                  School Transport & Route Enquiries
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  We offer safe school transport across Hasanpur and adjacent areas. Please contact the school to verify pick-up stops for your location.
                </p>
              </div>
            </div>

            <Button
              href={`tel:+91${schoolConfig.phone}`}
              variant="primary"
              size="md"
              icon={<Phone className="w-4 h-4" />}
            >
              Enquire Transport Routes
            </Button>
          </div>

        </div>
      </section>

      {/* 4. Admission CTA */}
      <AdmissionCTA />
    </main>
  );
};
