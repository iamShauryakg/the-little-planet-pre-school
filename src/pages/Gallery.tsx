import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import { galleryData } from '../data/gallery';
import { AdmissionCTA } from '../components/home/AdmissionCTA';
import { schoolConfig } from '../config/schoolConfig';

export const Gallery: React.FC = () => {
  useEffect(() => {
    document.title = `Photo Gallery | ${schoolConfig.schoolName}`;
  }, []);

  return (
    <main className="min-h-screen bg-stone-50/40">
      {/* 1. Page Hero */}
      <PageHero
        badge="Moments & Memories"
        title="School Photo Gallery"
        description="Explore vibrant moments from our classrooms, art sessions, festival celebrations, and sports days."
        breadcrumbCurrent="Gallery"
      />

      {/* 2. Full Gallery with Category Filters & Lightbox */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Campus Life"
            title="Snapshots of Joyful Discovery"
            subtitle="Click on any photograph to expand and view in full size."
          />

          <GalleryLightbox items={galleryData} showFilters={true} />

          <div className="mt-12 text-center">
            <span className="text-xs text-stone-400 font-medium italic">
              * Photos displayed are representative preschool activity placeholders. School event pictures are updated seasonally.
            </span>
          </div>

        </div>
      </section>

      {/* 3. Admission CTA */}
      <AdmissionCTA />
    </main>
  );
};
