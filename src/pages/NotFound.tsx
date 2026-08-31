import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';
import { LittlePlanetGraphic, SunGraphic, CloudGraphic } from '../components/common/DecorativeElements';
import { schoolConfig } from '../config/schoolConfig';

export const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = `Page Not Found | ${schoolConfig.schoolName}`;
  }, []);

  return (
    <main className="min-h-[75vh] flex items-center justify-center py-20 px-4 bg-gradient-to-b from-emerald-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-12 left-12 pointer-events-none opacity-40">
        <SunGraphic className="w-16 h-16" />
      </div>
      <div className="absolute top-20 right-16 pointer-events-none opacity-40">
        <CloudGraphic className="w-24 h-12" fill="#BAE6FD" />
      </div>

      <div className="max-w-md w-full text-center relative z-10 p-8 sm:p-10 rounded-[36px] bg-white border border-emerald-100 shadow-xl">
        <div className="mx-auto w-24 h-24 mb-6 flex items-center justify-center">
          <LittlePlanetGraphic className="w-24 h-24" />
        </div>

        <span className="text-4xl font-display font-extrabold text-emerald-600 block mb-1">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 leading-tight">
          Oops! Little Explorer Got Lost
        </h1>

        <p className="mt-3 text-sm text-stone-600 leading-relaxed font-normal">
          The page you are looking for doesn't exist or has moved to a different classroom. Let's guide you back home!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            to="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Back to Home
          </Button>

          <Button
            to="/classes"
            variant="outline"
            size="md"
            icon={<Compass className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Explore Classes
          </Button>
        </div>
      </div>
    </main>
  );
};
