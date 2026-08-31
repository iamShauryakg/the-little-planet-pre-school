import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { faqsData } from '../../data/faqs';
import { schoolConfig } from '../../config/schoolConfig';
import { Button } from '../common/Button';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Clear answers to common questions about admissions, daily routines, activities, and campus care."
        />

        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-emerald-50/40 border-emerald-300 shadow-sm'
                    : 'bg-white border-stone-200/80 hover:border-emerald-200 hover:bg-stone-50/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl"
                >
                  <span className="font-display font-bold text-stone-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-emerald-600 text-white rotate-180'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-emerald-100/60 font-normal">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <HelpCircle className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <h4 className="text-sm font-display font-bold text-stone-900">
                Have a specific question not answered here?
              </h4>
              <p className="text-xs text-stone-500">
                Our team is always happy to guide parents directly.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              href={`https://wa.me/${schoolConfig.whatsapp}`}
              target="_blank"
              variant="primary"
              size="sm"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Ask on WhatsApp
            </Button>
            <Button
              href={`tel:+91${schoolConfig.phone}`}
              variant="outline"
              size="sm"
              icon={<Phone className="w-4 h-4" />}
            >
              Call Us
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
