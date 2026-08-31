import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { ActivityCard } from '../cards/ActivityCard';
import { activitiesData } from '../../data/activities';
import { Button } from '../common/Button';

export const ActivitiesPreview: React.FC = () => {
  // Show first 4 activities as preview on homepage
  const previewActivities = activitiesData.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-stone-50/60 relative overflow-hidden border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Fun & Creative Growth"
          title="Joyful Daily Activities"
          subtitle="Every day is filled with colorful exploration — from drawing and clay art to rhythmic dance and moral storytelling."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            to="/activities"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            id="home-view-all-activities-btn"
          >
            Explore All 8 Creative Activities
          </Button>
        </div>

      </div>
    </section>
  );
};
