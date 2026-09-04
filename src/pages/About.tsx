import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { TeamCard } from '../components/cards/TeamCard';
import { teachersData } from '../data/teachers';
import { schoolConfig } from '../config/schoolConfig';
import { AdmissionCTA } from '../components/home/AdmissionCTA';
import { PrincipalMessage } from '../components/home/PrincipalMessage';
import {
  Heart,
  Eye,
  Target,
  Sparkles,
  Compass,
  Smile,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';
import { LittlePlanetGraphic } from '../components/common/DecorativeElements';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = `About Us | ${schoolConfig.schoolName}`;
  }, []);

  return (
    <main className="min-h-screen bg-stone-50/40">
      {/* 1. Page Hero */}
      <PageHero
        badge="Get to Know Us"
        title="About The Little Planet Pre School"
        description="A warm, nature-inspired kindergarten in Hasanpur dedicated to joyful discovery, caring relationships, and foundational growth."
        breadcrumbCurrent="About Us"
      />

      {/* 2. School Story & Core Introduction */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[36px] overflow-hidden bg-emerald-50 border-4 border-emerald-100 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                  alt="Classroom experience at The Little Planet"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-400 text-stone-900 px-6 py-4 rounded-3xl shadow-xl border-2 border-white flex items-center gap-3">
                <LittlePlanetGraphic className="w-10 h-10 shrink-0" />
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold block">Rooted in</span>
                  <span className="font-display font-extrabold text-sm sm:text-base">Love, Play & Care</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start">
              <SectionTitle
                align="left"
                badge="Our Foundation"
                title="A Cheerful Sanctuary for Young Explorers"
                subtitle="We believe the earliest years of education should be full of delight, comfort, and meaningful hands-on experiences."
                className="mb-4!"
              />

              <p className="text-stone-600 leading-relaxed text-sm sm:text-base font-normal">
                Located Mohalla Holi Wala in Hasanpur, <strong>The Little Planet Pre School</strong> is designed to feel like a vibrant little garden where children feel safe to step away from home, make their first friendships, and express themselves openly.
              </p>

              <p className="mt-4 text-stone-600 leading-relaxed text-sm sm:text-base font-normal">
                We respect each child's individual pace of growth. Through sensory play, rhythmic action songs, art, and guided exploration, we foster emotional security and lay down strong social and cognitive foundations.
              </p>

              {/* Quick highlights */}
              <div className="mt-6 grid grid-cols-2 gap-3 w-full">
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-xs font-display font-bold text-stone-800">Child-First Safety</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-100 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                  <span className="text-xs font-display font-bold text-stone-800">Activity Learning</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Core Values */}
      <section className="py-16 md:py-24 bg-emerald-50/50 relative border-y border-emerald-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Guiding Principles"
            title="Our Vision, Mission & Values"
            subtitle="The core beliefs that shape our daily routines, teacher interactions, and classroom spaces."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-white border border-emerald-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-stone-900 mb-3">Our Vision</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  To be a joyful second home where every young mind is nurtured with warmth, respect, and boundless curiosity, cultivating lifelong learners who approach the world with empathy and confidence.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-white border border-amber-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-stone-900 mb-3">Our Mission</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  To provide a safe, engaging, and playful environment rich in language, creative arts, and sensory activities, giving every child a balanced foundation across emotional, physical, and cognitive development.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-stone-900 mb-3">Our Values</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Affectionate care, honesty, patience, positive encouragement, peer kindness, and inclusivity in every interaction with children and parents.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Approach: 4 Essential Dimensions */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Holistic Development"
            title="Our Educational Approach"
            subtitle="How we balance freedom of play with structured guidance to support each developmental milestone."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/80">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold text-stone-900 mb-2">Learning Through Play</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Games, blocks, and imaginative role-play turn early literacy and numbers into enjoyable daily routines.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/80">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold text-stone-900 mb-2">Creativity & Exploration</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Ample opportunities for free drawing, finger painting, clay sculpting, and music exploration.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/80">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <Smile className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold text-stone-900 mb-2">Personality Development</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Building stage poise, polite conversation, sharing habits, and confidence in group settings.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200/80">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold text-stone-900 mb-2">A Caring Environment</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Attentive teachers, secure air-conditioned classrooms, clean washrooms, and loving supervision.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Principal Message */}
      <PrincipalMessage />

      {/* 6. Why Early Childhood Education Matters Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            badge="Parent Insights"
            title="Why Early Childhood Education Matters"
            subtitle="The first six years of a child’s life build more than 85% of total brain development."
          />

          <div className="p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 text-left space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
            <p>
              During early childhood, the human brain develops faster than at any other stage in life. High-quality preschool experiences provide children with rich language models, social interaction with diverse peers, and opportunities to build emotional regulation.
            </p>
            <p>
              Rather than rushing children into intense academic pressure, our philosophy focuses on building <strong>confidence, curiosity, self-help skills, and phonetic awareness</strong>. This ensures children transition smoothly into primary school with a positive attitude towards learning.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Meet Our Caring Team (at least 6 teacher placeholder profiles) */}
      <section className="py-16 md:py-24 bg-stone-50/60 relative border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Our Educators"
            title="Meet Our Caring Team"
            subtitle="Passionate teachers dedicated to nurturing your child’s emotional comfort, creativity, and foundational learning."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachersData.map((teacher) => (
              <TeamCard key={teacher.id} teacher={teacher} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs text-stone-400 font-medium italic">
              * Staff profiles above are editable placeholders. Real teacher photos and bios will be updated by the school administration.
            </span>
          </div>

        </div>
      </section>

      {/* 8. Admission CTA */}
      <AdmissionCTA />
    </main>
  );
};
