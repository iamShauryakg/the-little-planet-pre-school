import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { programsData } from '../data/programs';
import { ProgramCard } from '../components/cards/ProgramCard';
import { AdmissionCTA } from '../components/home/AdmissionCTA';
import { schoolConfig } from '../config/schoolConfig';
import { Button } from '../components/common/Button';
import { CheckCircle2, Sparkles, MessageCircle, Phone, ArrowRight } from 'lucide-react';

export const Classes: React.FC = () => {
  useEffect(() => {
    document.title = `Classes & Programs | ${schoolConfig.schoolName}`;
  }, []);

  return (
    <main className="min-h-screen bg-stone-50/40">
      {/* 1. Page Hero */}
      <PageHero
        badge="Early Learning Journey"
        title="Our Preschool Classes"
        description="Thoughtfully structured developmental programs from Pre-Nursery to UKG, guiding young minds step by step toward confident learning."
        breadcrumbCurrent="Classes"
      />

      {/* 2. Programs Grid Overview */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Programs Overview"
            title="Four Progressive Stages of Learning"
            subtitle="Each class is customized for age-appropriate sensory, cognitive, social, and fine-motor milestones."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {programsData.map((program) => (
              <ProgramCard key={program.id} program={program} detailed={false} />
            ))}
          </div>

        </div>
      </section>

      {/* 3. Deep Dive for Each Class */}
      <section className="py-16 md:py-24 bg-emerald-50/40 relative border-t border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {programsData.map((program, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-32 rounded-[36px] bg-white p-8 sm:p-10 md:p-12 border border-emerald-200/80 shadow-md transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  
                  {/* Left Column: Title & Overview (6 cols) */}
                  <div className="lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${program.colorTheme.badge}`}>
                          Stage 0{index + 1}
                        </span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                          {program.ageEligibility}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-stone-900 leading-tight">
                        {program.name}
                      </h2>
                      <p className="text-sm font-semibold text-emerald-700 mt-1 italic">
                        "{program.tagline}"
                      </p>

                      <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                        {program.fullOverview}
                      </p>

                      {/* Development Focus */}
                      <div className="mt-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-2">
                          Core Developmental Focus
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {program.developmentFocus.map((focus, fIdx) => (
                            <span
                              key={fIdx}
                              className="text-xs font-semibold px-3 py-1 rounded-xl bg-stone-100 text-stone-800 border border-stone-200"
                            >
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button
                        to={`/admissions?class=${program.id}`}
                        variant="primary"
                        size="md"
                        icon={<Sparkles className="w-4 h-4 text-amber-300" />}
                      >
                        Enquire for {program.name}
                      </Button>
                      <Button
                        href={`https://wa.me/${schoolConfig.whatsapp}?text=${encodeURIComponent(
                          `Hello, I would like to enquire about ${program.name} admission.`
                        )}`}
                        target="_blank"
                        variant="outline"
                        size="md"
                        icon={<MessageCircle className="w-4 h-4" />}
                      >
                        WhatsApp
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Goals & Daily Activities (6 cols) */}
                  <div className="lg:w-1/2 w-full space-y-6">
                    {/* Key Learning Goals Box */}
                    <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/80">
                      <h4 className="text-sm font-display font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Key Learning Goals</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {program.learningGoals.map((goal, gIdx) => (
                          <li key={gIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Typical Daily Activities Box */}
                    <div className="p-6 rounded-3xl bg-amber-50/50 border border-amber-200/70">
                      <h4 className="text-sm font-display font-bold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>Typical Daily Activities</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {program.typicalActivities.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* 4. Admission CTA */}
      <AdmissionCTA />
    </main>
  );
};
