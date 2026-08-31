import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Sparkles, BookOpen, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Program } from '../../types';
import { Button } from '../common/Button';

interface ProgramCardProps {
  program: Program;
  detailed?: boolean;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, detailed = false }) => {
  // Select icon dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return <Baby className="w-7 h-7" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7" />;
      case 'BookOpen':
        return <BookOpen className="w-7 h-7" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7" />;
      default:
        return <Sparkles className="w-7 h-7" />;
    }
  };

  return (
    <div
      id={`program-card-${program.id}`}
      className="group relative flex flex-col justify-between rounded-[32px] bg-white p-6 md:p-7 border border-[#E1E8DC] hover:border-[#4CAF50]/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Top background accent tint */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${program.colorTheme.cardBg} -z-0 opacity-70 group-hover:scale-110 transition-transform`} />

      <div className="relative z-10">
        {/* Header: Icon & Name */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center ${program.colorTheme.badge} shadow-2xs`}
          >
            {getIcon(program.icon)}
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F1F8E9] text-[#2D6A4F] border border-[#E1E8DC]">
            {program.ageEligibility}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-display font-bold text-[#1B4332] group-hover:text-[#4CAF50] transition-colors">
          {program.name}
        </h3>
        <p className="text-xs font-medium text-[#52796F] mt-1 italic">
          "{program.tagline}"
        </p>

        <p className="mt-3 text-sm text-[#52796F] leading-relaxed font-normal">
          {detailed ? program.fullOverview : program.shortDescription}
        </p>

        {/* Development Focus Pills */}
        <div className="mt-4 pt-4 border-t border-[#E1E8DC]">
          <span className="text-[11px] font-bold text-[#52796F] uppercase tracking-wider block mb-2">
            Learning Focus
          </span>
          <div className="flex flex-wrap gap-1.5">
            {program.developmentFocus.map((focus, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-full bg-[#F9FBF7] text-[#2D3E33] font-medium border border-[#E1E8DC]"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Goals (If detailed mode) */}
        {detailed && (
          <div className="mt-4 pt-4 border-t border-[#E1E8DC]">
            <span className="text-[11px] font-bold text-[#52796F] uppercase tracking-wider block mb-2">
              Key Learning Goals
            </span>
            <ul className="space-y-1.5">
              {program.learningGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#52796F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF50] shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="relative z-10 mt-6 pt-4 border-t border-[#E1E8DC] flex items-center justify-between gap-3">
        <Link
          to={`/classes#${program.id}`}
          className="text-xs font-bold text-[#2D6A4F] hover:text-[#4CAF50] inline-flex items-center gap-1 group-hover:underline"
        >
          <span>View Curriculum</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Button
          to={`/admissions?class=${program.id}`}
          size="sm"
          variant="primary"
          className="text-xs font-bold"
        >
          Enquire
        </Button>
      </div>
    </div>
  );
};
