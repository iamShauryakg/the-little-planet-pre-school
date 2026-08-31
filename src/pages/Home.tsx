import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { AboutPreview } from '../components/home/AboutPreview';
import { ProgramsPreview } from '../components/home/ProgramsPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ActivitiesPreview } from '../components/home/ActivitiesPreview';
import { FacilitiesPreview } from '../components/home/FacilitiesPreview';
import { LearningPhilosophy } from '../components/home/LearningPhilosophy';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { PrincipalMessage } from '../components/home/PrincipalMessage';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { AdmissionCTA } from '../components/home/AdmissionCTA';
import { schoolConfig } from '../config/schoolConfig';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = `${schoolConfig.schoolName} | Preschool in Hasanpur, Amroha`;
  }, []);

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section + Badges */}
      <Hero />

      {/* 2. Welcome & About Overview */}
      <AboutPreview />

      {/* 3. Classes Overview */}
      <ProgramsPreview />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Activities Preview */}
      <ActivitiesPreview />

      {/* 6. Facilities Preview */}
      <FacilitiesPreview />

      {/* 7. Learning Philosophy */}
      <LearningPhilosophy />

      {/* 8. School Life Gallery Preview */}
      <GalleryPreview />

      {/* 9. Principal / Director Message */}
      <PrincipalMessage />

      {/* 10. Testimonials Preview */}
      <TestimonialsSection />

      {/* 11. FAQ Section */}
      <FAQSection />

      {/* 12. Admission Call to Action */}
      <AdmissionCTA />
    </main>
  );
};
