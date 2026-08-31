import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { AdmissionEnquiryForm } from '../components/forms/AdmissionEnquiryForm';
import { schoolConfig } from '../config/schoolConfig';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Calendar,
  ExternalLink,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = `Contact Us | ${schoolConfig.schoolName}`;
  }, []);

  const contactChannels = [
    {
      title: 'Phone Number',
      value: schoolConfig.formattedPhone,
      sub: 'Direct phone line for quick enquiries',
      action: `tel:+91${schoolConfig.phone}`,
      actionLabel: 'Call Now',
      icon: Phone,
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      title: 'WhatsApp Desk',
      value: schoolConfig.formattedPhone,
      sub: 'Instant chat for admission queries',
      action: `https://wa.me/${schoolConfig.whatsapp}?text=${encodeURIComponent(
        'Hello The Little Planet Pre School, I would like to enquire about admission.'
      )}`,
      actionLabel: 'Chat on WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-100 text-green-700',
    },
    {
      title: 'Email Address',
      value: schoolConfig.email,
      sub: 'Official correspondence & records',
      action: `mailto:${schoolConfig.email}`,
      actionLabel: 'Send Email',
      icon: Mail,
      color: 'bg-sky-100 text-sky-700',
    },
    {
      title: 'Campus Address',
      value: schoolConfig.address,
      sub: 'Hasanpur, Amroha, Uttar Pradesh, India',
      action: schoolConfig.googleMapsUrl,
      actionLabel: 'View on Google Maps',
      icon: MapPin,
      color: 'bg-amber-100 text-amber-700',
    },
  ];

  return (
    <main className="min-h-screen bg-stone-50/40">
      {/* 1. Page Hero */}
      <PageHero
        badge="Reach Out"
        title="Contact The Little Planet Pre School"
        description="We are located near Shivalya Mandir in Hasanpur. Reach out via phone, WhatsApp, email, or visit our campus."
        breadcrumbCurrent="Contact Us"
      />

      {/* 2. Contact Cards Grid */}
      <section className="py-16 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactChannels.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-stone-50 border border-stone-200/80 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} mb-4 shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase font-bold text-stone-400 tracking-wider">
                      {item.title}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-bold text-stone-900 mt-1 break-words">
                      {item.value}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">{item.sub}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200/60">
                    <a
                      href={item.action}
                      target={item.action.startsWith('http') ? '_blank' : undefined}
                      rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5 hover:underline"
                    >
                      <span>{item.actionLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Form & Location Map Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <AdmissionEnquiryForm />
            </div>

            {/* Right: Map & Timings Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Working Hours & Visiting Timings */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-stone-900">
                    Timings & Visiting Hours
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl bg-stone-50 flex items-center justify-between border border-stone-100">
                    <span className="font-semibold text-stone-700">School Timings</span>
                    <span className="font-bold text-emerald-700">{schoolConfig.schoolTimings}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 flex items-center justify-between border border-stone-100">
                    <span className="font-semibold text-stone-700">Office & Visiting</span>
                    <span className="font-bold text-stone-900">8:00 AM – 2:30 PM</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 flex items-center justify-between border border-stone-100">
                    <span className="font-semibold text-stone-700">Working Days</span>
                    <span className="font-bold text-stone-900">{schoolConfig.workingDays}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-between text-amber-900">
                    <span className="font-semibold">Sundays & Holidays</span>
                    <span className="font-bold text-amber-800">Closed</span>
                  </div>
                </div>
              </div>

              {/* Map & Landmark Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-md overflow-hidden">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-stone-900">
                      Campus Location
                    </h3>
                  </div>

                  <a
                    href={schoolConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 mb-4 text-xs text-stone-700 space-y-1">
                  <p className="font-bold text-emerald-900">The Little Planet Pre School</p>
                  <p>{schoolConfig.address}</p>
                  <p className="text-stone-500 font-medium pt-1">
                    Landmark: Near Shivalya Mandir, Hasanpur, Amroha, Uttar Pradesh
                  </p>
                </div>

                {/* Google Map Card Link / Visual Map representation */}
                <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-stone-100 border border-stone-200 shadow-inner group">
                  <iframe
                    title="The Little Planet Pre School Location"
                    src="https://maps.google.com/maps?q=Hasanpur,+Amroha,+Uttar+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-transparent pointer-events-none group-hover:bg-black/5 transition-colors" />
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Hasanpur, Amroha, UP</span>
                  <a
                    href={schoolConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold hover:underline"
                  >
                    Get Driving Directions
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

