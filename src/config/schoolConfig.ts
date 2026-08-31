import { SchoolConfig } from '../types';

/**
 * ============================================================================
 * CENTRAL SCHOOL CONFIGURATION
 * ============================================================================
 * All essential editable school information is stored here.
 * The school owner can update contact details, timings, principal message,
 * and social links directly from this file without editing UI components.
 */

export const schoolConfig: SchoolConfig = {
  // Official School Name
  schoolName: 'The Little Planet Pre School',

  // Temporary Tagline (can be customized anytime)
  tagline: 'Where Little Minds Grow, Learn & Shine',

  // Geographical Location
  location: 'Hasanpur, Amroha, Uttar Pradesh, India',

  // Full Postal Address
  address: 'Near Shivalya Mandir, Hasanpur, Amroha, Uttar Pradesh',

  // Contact Phone Number
  phone: '9528205752',
  formattedPhone: '+91 95282 05752',

  // Official WhatsApp Number
  whatsapp: '919528205752',
  formattedWhatsapp: '+91 95282 05752',

  // Official Email Address
  email: 'coolshourya02003@gmail.com',

  // School Hours (Editable Placeholder)
  schoolTimings: '8:00 AM – 2:00 PM',

  // Operational Days
  workingDays: 'Monday – Saturday',

  // Key Admission Period
  admissionPeriod: 'March – April',

  // Google Maps Direct Link
  googleMapsUrl: 'https://maps.app.goo.gl/7YCAg8WvAe6FEe5T7',

  // Principal / Director Message Section (Placeholder content)
  principal: {
    name: 'Principal / Director Name',
    designation: 'Principal / Director',
    message:
      'Welcome to The Little Planet Pre School. Early childhood is the most crucial foundation of a human being’s learning journey. We believe in creating a joyful, safe, and stimulating environment where every child feels loved, valued, and encouraged to explore. Through play, creative expression, and caring guidance, we nurture curiosity and help young minds blossom with confidence.',
    photoPlaceholder: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },

  // Social Media Links (Replace '#' with the school's actual profile URLs)
  social: {
    // Replace with the school's actual Instagram URL
    instagram: '#',
    // Replace with the school's actual Facebook URL
    facebook: '#',
    // Replace with the school's actual YouTube URL
    youtube: '#',
  },

  // Logo Configuration (Set imagePath when custom logo file is added in src/assets/logo.png)
  logo: {
    text: 'THE LITTLE PLANET',
    subText: 'PRE SCHOOL',
    // imagePath: '/src/assets/logo.png', // Uncomment when real logo image file is available
  },
};
