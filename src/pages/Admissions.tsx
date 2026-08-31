import React, { useEffect } from 'react';
import { PageHero } from '../components/common/PageHero';
import { SectionTitle } from '../components/common/SectionTitle';
import { AdmissionEnquiryForm } from '../components/forms/AdmissionEnquiryForm';
import { schoolConfig } from '../config/schoolConfig';
import {
  Calendar,
  Sparkles,
  Phone,
  MessageCircle,
  FileText,
  CheckCircle,
  Clock,
  MapPin,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export const Admissions: React.FC = () => {
  useEffect(() => {
    document.title = `Admissions Open | ${schoolConfig.schoolName}`;
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Submit Enquiry',
      desc: 'Fill out our online form or send a message on WhatsApp / Email with basic child details.',
      icon: MessageCircle,
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      step: '02',
      title: 'School Consultation',
      desc: 'Our admissions desk connects with you to discuss class availability and answer your questions.',
      icon: Phone,
      color: 'bg-amber-100 text-amber-700',
    },
    {
      step: '03',
      title: 'Campus Visit & Interaction',
      desc: 'Visit our school with your child to experience classrooms, meet teachers, and explore facilities.',
      icon: MapPin,
      color: 'bg-sky-100 text-sky-700',
    },
    {
      step: '04',
      title: 'Admission Confirmation',
      desc: 'Complete the basic registration form, submit standard documents, and receive your welcome kit.',
      icon: CheckCircle,
      color: 'bg-purple-100 text-purple-700',
    },
  ];

  const documents = [
    'Child’s Birth Certificate (Photocopy)',
    '4 Recent Passport-Size Photographs of the Child',
    '2 Passport-Size Photographs of Parents/Guardians',
    'Proof of Residence / Address Proof (Aadhaar / Voter ID / Utility Bill)',
    'Child’s Immunization / Vaccination Record Copy',
    'Previous School Transfer Certificate (if applicable for LKG/UKG)',
  ];

  return (
    <main className="min-h-screen bg-stone-50/40">
      {/* 1. Page Hero */}
      <PageHero
        badge={`Admissions ${schoolConfig.admissionPeriod}`}
        title="Admissions Open for New Session"
        description="Join The Little Planet family. We welcome applications for Pre-Nursery, Nursery, LKG, and UKG."
        breadcrumbCurrent="Admissions"
      />

      {/* 2. Key Admission Highlights Banner */}
      <section className="py-12 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider">Admission Window</span>
                <h4 className="text-lg font-display font-bold text-stone-900 mt-0.5">{schoolConfig.admissionPeriod}</h4>
                <p className="text-xs text-stone-600 mt-0.5">Enquiries open year-round</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-amber-900 tracking-wider">Eligible Classes</span>
                <h4 className="text-lg font-display font-bold text-stone-900 mt-0.5">Pre-Nursery to UKG</h4>
                <p className="text-xs text-stone-600 mt-0.5">Contact school for age guidance</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-sky-50 border border-sky-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-sky-900 tracking-wider">Visiting Hours</span>
                <h4 className="text-lg font-display font-bold text-stone-900 mt-0.5">{schoolConfig.schoolTimings}</h4>
                <p className="text-xs text-stone-600 mt-0.5">{schoolConfig.workingDays}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Four-Step Admission Workflow */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="Simple 4-Step Journey"
            title="How to Enroll Your Child"
            subtitle="A transparent, hassle-free admission procedure designed to put both parents and children at ease."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative p-6 rounded-3xl bg-stone-50 border border-stone-200/80 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color} shadow-xs`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-display font-extrabold text-stone-300">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-stone-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Form & Required Documents Section */}
      <section className="py-16 md:py-24 bg-emerald-50/30 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <AdmissionEnquiryForm />
            </div>

            {/* Right: Documents & Important Guidance (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Documents Checklist Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-stone-900">
                    Documents Checklist
                  </h3>
                </div>
                <p className="text-xs text-stone-500 mb-4">
                  Keep these standard documents handy during the admission confirmation visit:
                </p>

                <ul className="space-y-3">
                  {documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Age Eligibility Guidance Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-amber-50 border border-amber-200/80">
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle className="w-6 h-6 text-amber-700 shrink-0" />
                  <h4 className="text-base font-display font-bold text-amber-950">
                    Age Eligibility Notice
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Every child develops at their own rate. We evaluate readiness with care. <strong>Please contact the school directly for specific age eligibility and class recommendations.</strong>
                </p>
                <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center gap-2">
                  <Button
                    href={`tel:+91${schoolConfig.phone}`}
                    size="sm"
                    variant="primary"
                    icon={<Phone className="w-3.5 h-3.5" />}
                  >
                    Call: {schoolConfig.formattedPhone}
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
