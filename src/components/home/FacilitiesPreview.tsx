import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { FacilityCard } from '../cards/FacilityCard';
import { facilitiesData } from '../../data/facilities';
import { Button } from '../common/Button';

export const FacilitiesPreview: React.FC = () => {
  // Select key representative facilities for the homepage preview
  const previewIds = ['classrooms', 'smart-classes', 'indoor-play-area', 'playground', 'cctv', 'ac-classrooms'];
  const previewFacilities = facilitiesData.filter((f) => previewIds.includes(f.id));

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Child-Centered Infrastructure"
          title="Safe & Inspiring School Facilities"
          subtitle="Thoughtfully equipped spaces designed specifically for small children's safety, comfort, learning, and active play."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            to="/facilities"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            id="home-view-all-facilities-btn"
          >
            View All School Facilities & Transport Details
          </Button>
        </div>

      </div>
    </section>
  );
};
