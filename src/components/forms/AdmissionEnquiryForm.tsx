import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageCircle, Mail, AlertCircle, CheckCircle, Send, Sparkles } from 'lucide-react';
import { schoolConfig } from '../../config/schoolConfig';
import { Button } from '../common/Button';

interface FormData {
  parentName: string;
  childName: string;
  childAgeOrDob: string;
  targetClass: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  parentName?: string;
  childName?: string;
  childAgeOrDob?: string;
  phone?: string;
  email?: string;
}

export const AdmissionEnquiryForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialClass = searchParams.get('class') || 'Pre-Nursery';

  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    childName: '',
    childAgeOrDob: '',
    targetClass: initialClass.toLowerCase().includes('nursery')
      ? initialClass.toLowerCase().includes('pre')
        ? 'Pre-Nursery'
        : 'Nursery'
      : initialClass.toUpperCase() === 'LKG'
      ? 'LKG'
      : initialClass.toUpperCase() === 'UKG'
      ? 'UKG'
      : 'Pre-Nursery',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [lastAction, setLastAction] = useState<'whatsapp' | 'email' | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Please enter parent/guardian name';
    }

    if (!formData.childName.trim()) {
      newErrors.childName = 'Please enter child’s name';
    }

    if (!formData.childAgeOrDob.trim()) {
      newErrors.childAgeOrDob = 'Please enter child’s age or date of birth';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter contact phone number';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructMessageText = (): string => {
    return (
      `*Admission Enquiry - The Little Planet Pre School*\n\n` +
      `*Parent/Guardian Name:* ${formData.parentName}\n` +
      `*Child Name:* ${formData.childName}\n` +
      `*Child Age/DOB:* ${formData.childAgeOrDob}\n` +
      `*Class Interested In:* ${formData.targetClass}\n` +
      `*Contact Phone:* ${formData.phone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      (formData.message ? `*Message:* ${formData.message}\n` : '') +
      `\nSent via school website admission form.`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = constructMessageText();
    const url = `https://wa.me/${schoolConfig.whatsapp}?text=${encodeURIComponent(message)}`;
    setLastAction('whatsapp');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Admission Enquiry for ${formData.childName} (${formData.targetClass}) - Little Planet`;
    const body = constructMessageText().replace(/\*/g, '');
    const mailtoUrl = `mailto:${schoolConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setLastAction('email');
    window.location.href = mailtoUrl;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-emerald-100 shadow-xl shadow-emerald-950/5">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-3.5 py-1 rounded-full w-fit mb-4">
        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        <span>Direct Enquiry — No Hidden Fees</span>
      </div>

      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-stone-900 leading-tight">
        Send Admission Enquiry
      </h3>
      <p className="mt-2 text-sm text-stone-600 leading-relaxed">
        Fill in the details below to instantly connect with our admissions desk via <strong>WhatsApp</strong> or <strong>Email</strong>.
      </p>

      {lastAction && (
        <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-sm text-emerald-900 animate-fadeIn">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong>Ready to send!</strong> We opened {lastAction === 'whatsapp' ? 'WhatsApp' : 'your email app'} with your pre-filled details. If it didn't open automatically, you can also call us directly at <strong>{schoolConfig.formattedPhone}</strong>.
          </div>
        </div>
      )}

      <form className="mt-6 space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Parent Name */}
          <div>
            <label htmlFor="parentName" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Parent / Guardian Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-4 py-3 rounded-2xl border text-sm text-stone-800 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.parentName
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                  : 'border-stone-200 focus:border-emerald-500 focus:ring-emerald-200'
              }`}
            />
            {errors.parentName && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.parentName}
              </p>
            )}
          </div>

          {/* Child Name */}
          <div>
            <label htmlFor="childName" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Child's Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              placeholder="e.g. Aarav Sharma"
              className={`w-full px-4 py-3 rounded-2xl border text-sm text-stone-800 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.childName
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                  : 'border-stone-200 focus:border-emerald-500 focus:ring-emerald-200'
              }`}
            />
            {errors.childName && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.childName}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Child Age or DOB */}
          <div>
            <label htmlFor="childAgeOrDob" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Child's Age / Date of Birth <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="childAgeOrDob"
              name="childAgeOrDob"
              value={formData.childAgeOrDob}
              onChange={handleChange}
              placeholder="e.g. 3 Years or 15/08/2023"
              className={`w-full px-4 py-3 rounded-2xl border text-sm text-stone-800 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.childAgeOrDob
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                  : 'border-stone-200 focus:border-emerald-500 focus:ring-emerald-200'
              }`}
            />
            {errors.childAgeOrDob && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.childAgeOrDob}
              </p>
            )}
          </div>

          {/* Class Interested In */}
          <div>
            <label htmlFor="targetClass" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Class Interested In <span className="text-rose-500">*</span>
            </label>
            <select
              id="targetClass"
              name="targetClass"
              value={formData.targetClass}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-stone-200 text-sm text-stone-800 bg-stone-50/50 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all font-medium"
            >
              <option value="Pre-Nursery">Pre-Nursery</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG (Lower Kindergarten)</option>
              <option value="UKG">UKG (Upper Kindergarten)</option>
              <option value="General Enquiry">General Admission Query</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Phone Number (WhatsApp preferred) <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9528205752"
              className={`w-full px-4 py-3 rounded-2xl border text-sm text-stone-800 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.phone
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                  : 'border-stone-200 focus:border-emerald-500 focus:ring-emerald-200'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          {/* Email (Optional) */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. parent@gmail.com"
              className={`w-full px-4 py-3 rounded-2xl border text-sm text-stone-800 bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/30'
                  : 'border-stone-200 focus:border-emerald-500 focus:ring-emerald-200'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
            Any Specific Questions or Notes? (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your child or any specific questions you have regarding transport, timings, etc."
            className="w-full px-4 py-3 rounded-2xl border border-stone-200 text-sm text-stone-800 bg-stone-50/50 focus:bg-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all resize-none"
          />
        </div>

        {/* Submit Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            id="submit-enquiry-whatsapp"
            className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-display font-bold text-sm shadow-md shadow-green-500/20 hover:shadow-lg transition-all active:scale-98 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Send on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleEmailSubmit}
            id="submit-enquiry-email"
            className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-display font-bold text-sm shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all active:scale-98 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            <span>Send via Email</span>
          </button>
        </div>

        <p className="text-[11px] text-stone-500 text-center mt-3">
          🔒 We respect your privacy. Submitting this form opens your WhatsApp or Email client directly. No information is stored on external servers.
        </p>
      </form>
    </div>
  );
};
