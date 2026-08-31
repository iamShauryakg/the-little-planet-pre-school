import React from 'react';
import {
  ShieldCheck,
  Sparkles,
  Blocks,
  Palette,
  Smile,
  HeartHandshake,
  Sun,
  Users,
} from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { whyChooseUsData } from '../../data/whyChooseUs';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Blocks':
        return <Blocks {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Sun':
        return <Sun {...props} />;
      case 'Users':
        return <Users {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return {
          icon: 'bg-[#D8F3DC] text-[#2D6A4F]',
          border: 'hover:border-[#4CAF50]/60',
        };
      case 'amber':
        return {
          icon: 'bg-[#FFF8E1] text-[#9A6700]',
          border: 'hover:border-[#FFB703]/60',
        };
      case 'sky':
        return {
          icon: 'bg-[#E3F2FD] text-[#0284c7]',
          border: 'hover:border-sky-400/60',
        };
      case 'purple':
        return {
          icon: 'bg-[#F3E8FF] text-[#7E22CE]',
          border: 'hover:border-purple-400/60',
        };
      case 'rose':
        return {
          icon: 'bg-[#FCE4EC] text-[#BE185D]',
          border: 'hover:border-rose-400/60',
        };
      case 'teal':
        return {
          icon: 'bg-[#E0F2F1] text-[#00796B]',
          border: 'hover:border-teal-400/60',
        };
      case 'yellow':
        return {
          icon: 'bg-[#FFFDE7] text-[#F57F17]',
          border: 'hover:border-yellow-400/60',
        };
      case 'indigo':
        return {
          icon: 'bg-[#E8EAF6] text-[#3F51B5]',
          border: 'hover:border-indigo-400/60',
        };
      default:
        return {
          icon: 'bg-[#D8F3DC] text-[#2D6A4F]',
          border: 'hover:border-[#4CAF50]/60',
        };
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F9FBF7] relative overflow-hidden border-b border-[#E1E8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Why Little Planet"
          title="Why Parents Choose Little Planet"
          subtitle="We focus on creating a loving, nurturing space where children develop good values, joyful habits, and strong learning foundations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={item.id}
                id={`why-choose-${item.id}`}
                className={`group flex flex-col justify-between p-6 rounded-[32px] bg-white border border-[#E1E8DC] ${colors.border} shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div>
                  <div
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center ${colors.icon} shadow-2xs mb-4 group-hover:scale-105 transition-transform`}
                  >
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#1B4332] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#52796F] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
