export interface SchoolConfig {
  schoolName: string;
  tagline: string;
  location: string;
  address: string;
  phone: string;
  formattedPhone: string;
  phone2: string;
  formattedPhone2: string;
  whatsapp: string;
  formattedWhatsapp: string;
  email: string;
  schoolTimings: string;
  workingDays: string;
  admissionPeriod: string;
  googleMapsUrl: string;
  principal: {
    name: string;
    designation: string;
    message: string;
    photoPlaceholder: string;
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  logo: {
    text: string;
    subText: string;
    imagePath?: string; // Replace with /src/assets/logo.png later
  };
}

export interface Program {
  id: string;
  name: string;
  tagline: string;
  ageEligibility: string;
  shortDescription: string;
  fullOverview: string;
  learningGoals: string[];
  typicalActivities: string[];
  developmentFocus: string[];
  icon: string;
  colorTheme: {
    badge: string;
    cardBg: string;
    accent: string;
    border: string;
    light: string;
  };
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  skillsDeveloped: string[];
  icon: string;
  image: string;
  colorTheme: {
    bg: string;
    text: string;
    badge: string;
  };
}

export interface Facility {
  id: string;
  name: string;
  category: 'Learning Spaces' | 'Play & Development' | 'Safety & Care' | 'Comfort & Convenience';
  shortDescription: string;
  icon: string;
  features?: string[];
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  shortBio: string;
  image: string;
  isPlaceholder: boolean;
  specialty?: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childClass: string;
  quote: string;
  rating: number;
  isPlaceholder: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classrooms' | 'Activities' | 'Events' | 'Celebrations' | 'Sports' | 'Art & Craft' | 'School Campus';
  image: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Admissions' | 'Academics & Activities' | 'Facilities & Safety';
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}
