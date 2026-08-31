import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { activitiesData } from '../data/activities';
import { ActivityCard } from '../components/cards/ActivityCard';
import { AdmissionCTA } from '../components/home/AdmissionCTA';
import { schoolConfig } from '../config/schoolConfig';
import { Sparkles, Palette, Music, BookOpen, Smile } from 'lucide-react';

export const Activities: React.FC = () => {
  useEffect(() => {
    document.title = `Activities & Co-Curricular | ${schoolConfig.schoolName}`;
  }, []);

  return (
    <main className="min-h-screen bg-stone-50/40">
      {/* 1. Page Hero */}
      <PageHero
        badge="Creativity & Expression"
        title="School Activities & Co-Curricular"
        description="From vibrant art and rhythmic music to puppet storytelling and festive celebrations — our days are filled with meaningful play."
        breadcrumbCurrent="Activities"
      />

      {/* 2. Activities Intro Banner */}
      <section className="py-12 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
              <Palette className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <span className="font-display font-bold text-stone-900 text-sm block">Art & Colors</span>
              <span className="text-xs text-stone-500">Fine Motor Control</span>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
              <Music className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <span className="font-display font-bold text-stone-900 text-sm block">Music & Dance</span>
              <span className="text-xs text-stone-500">Rhythm & Movement</span>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100">
              <BookOpen className="w-6 h-6 text-sky-600 mx-auto mb-2" />
              <span className="font-display font-bold text-stone-900 text-sm block">Story Time</span>
              <span className="text-xs text-stone-500">Language & Empathy</span>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
              <Smile className="w-6 h-6 text-rose-600 mx-auto mb-2" />
              <span className="font-display font-bold text-stone-900 text-sm block">Celebrations</span>
              <span className="text-xs text-stone-500">Culture & Values</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. All 8 Activities Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Our Co-Curricular Spectrum"
            title="8 Core Creative & Experiential Activities"
            subtitle="Carefully integrated into our weekly kindergarten schedule to promote holistic early childhood growth."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activitiesData.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} detailed={true} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Admission CTA */}
      <AdmissionCTA />
    </main>
  );
};
