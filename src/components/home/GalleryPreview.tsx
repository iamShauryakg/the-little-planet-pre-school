import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { galleryData } from '../../data/gallery';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';

export const GalleryPreview: React.FC = () => {
  // Show 6 preview pictures on the homepage
  const previewItems = galleryData.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Moments of Joy"
          title="Life at The Little Planet"
          subtitle="Glimpses of daily classroom wonders, creative art projects, festive celebrations, and smiling faces."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {previewItems.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-square bg-stone-100 shadow-xs hover:shadow-lg transition-all duration-300 block"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs font-display font-bold">
                <span className="truncate">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            to="/gallery"
            variant="outline"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            View Complete Photo Gallery
          </Button>
        </div>

      </div>
    </section>
  );
};
