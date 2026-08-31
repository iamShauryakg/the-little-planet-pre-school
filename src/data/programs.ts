import { Program } from '../types';

/**
 * ============================================================================
 * SCHOOL PROGRAMS & CLASSES DATA
 * ============================================================================
 * Classes: Pre-Nursery, Nursery, LKG, UKG
 * Note: Exact age eligibility can be updated here when finalized.
 */

export const programsData: Program[] = [
  {
    id: 'pre-nursery',
    name: 'Pre-Nursery',
    tagline: 'First steps into playful discovery and joyful socialization',
    ageEligibility: 'Please contact the school for age eligibility.',
    shortDescription:
      'A warm transition from home to school focused on sensory play, motor skill development, and gentle social interactions in a caring atmosphere.',
    fullOverview:
      'Pre-Nursery offers our youngest learners a gentle, stimulating first step outside the home. Children participate in colorful sensory play, tactile games, and music circles that spark curiosity, foster comfort in group settings, and build early motor coordination.',
    learningGoals: [
      'Gentle transition and separation comfort',
      'Fine & gross motor development through play',
      'Basic sensory exploration (textures, colors, shapes)',
      'Early verbal communication and listening habits',
    ],
    typicalActivities: [
      'Finger painting and clay squishing',
      'Nursery rhymes and rhythmic movement',
      'Sensory sand and water table play',
      'Story time with colorful picture books',
      'Stacking blocks and puzzle exploration',
    ],
    developmentFocus: [
      'Sensory Awareness',
      'Emotional Comfort',
      'Social Interaction',
      'Motor Coordination',
    ],
    icon: 'Baby',
    colorTheme: {
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      cardBg: 'bg-gradient-to-br from-amber-50/60 to-orange-50/40',
      accent: 'text-amber-600',
      border: 'border-amber-200 hover:border-amber-300',
      light: 'bg-amber-500',
    },
  },
  {
    id: 'nursery',
    name: 'Nursery',
    tagline: 'Foundational learning, creative expression, and active vocabulary',
    ageEligibility: 'Please contact the school for age eligibility.',
    shortDescription:
      'Focus on foundational learning, communication, creativity, and social development through interactive activities, storytelling, and music.',
    fullOverview:
      'Our Nursery program expands language and observational skills in a joyful environment. Children learn to express ideas through rhymes, structured group activities, simple science wonders in nature, and collaborative games that build lasting friendships.',
    learningGoals: [
      'Phonics awareness and alphabet familiarity',
      'Number sense and counting games (1 to 10)',
      'Enhanced verbal communication and expressive speech',
      'Independent habits (putting away toys, sharing)',
    ],
    typicalActivities: [
      'Interactive picture talk and puppet stories',
      'Color mixing, paper tearing, and collage craft',
      'Outdoor nature walks and leaf gathering',
      'Action songs and creative drama',
      'Pattern identification and sorting games',
    ],
    developmentFocus: [
      'Language Development',
      'Creative Thinking',
      'Peer Collaboration',
      'Self-Help Habits',
    ],
    icon: 'Sparkles',
    colorTheme: {
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      cardBg: 'bg-gradient-to-br from-emerald-50/60 to-teal-50/40',
      accent: 'text-emerald-600',
      border: 'border-emerald-200 hover:border-emerald-300',
      light: 'bg-emerald-500',
    },
  },
  {
    id: 'lkg',
    name: 'LKG (Lower Kindergarten)',
    tagline: 'Developing early academic foundations through guided discovery',
    ageEligibility: 'Please contact the school for age eligibility.',
    shortDescription:
      'Develop early academic foundations through guided activities, pre-writing skills, numerical logic, and structured creative learning.',
    fullOverview:
      'In LKG, children transition smoothly towards structured learning while keeping curiosity high. They explore pre-writing strokes, early phonics blending, basic mathematical concepts, and thematic discussions about the world around them.',
    learningGoals: [
      'Letter formation and phonetic sound recognition',
      'Number concepts, sequencing, and quantity comparison',
      'Environmental understanding (plants, animals, seasons)',
      'Structured listening and following multi-step tasks',
    ],
    typicalActivities: [
      'Sand-tracing and guided pencil grip exercises',
      'Rhyme recitations and show-and-tell circles',
      'Hands-on counting with beads and blocks',
      'Art & craft projects linked with thematic topics',
      'Cooperative indoor board games and physical exercises',
    ],
    developmentFocus: [
      'Pre-Reading & Phonics',
      'Numerical Reasoning',
      'Fine Motor Precision',
      'Confidence & Expressiveness',
    ],
    icon: 'BookOpen',
    colorTheme: {
      badge: 'bg-sky-100 text-sky-800 border-sky-200',
      cardBg: 'bg-gradient-to-br from-sky-50/60 to-blue-50/40',
      accent: 'text-sky-600',
      border: 'border-sky-200 hover:border-sky-300',
      light: 'bg-sky-500',
    },
  },
  {
    id: 'ukg',
    name: 'UKG (Upper Kindergarten)',
    tagline: 'Preparing confident, curious learners for their next stage of schooling',
    ageEligibility: 'Please contact the school for age eligibility.',
    shortDescription:
      'Prepare children for primary school through balanced academic foundations, reading readiness, math concepts, and creative confidence.',
    fullOverview:
      'UKG is the bridge to formal schooling. Our curriculum focuses on word building, sentence reading, foundational arithmetic, logical thinking, and stage confidence, ensuring children enter primary education with enthusiasm and self-assurance.',
    learningGoals: [
      'Sentence formation, sight words, and fluent reading',
      'Simple addition, subtraction concepts, and time sense',
      'Analytical thinking and problem-solving puzzles',
      'Stage presence, public speaking, and team leadership',
    ],
    typicalActivities: [
      'Story writing with drawing prompts',
      'Interactive smart class math and science modules',
      'Role-play and school assembly presentations',
      'Complex art, origami, and collaborative projects',
      'Organized sports, relay games, and yoga stretching',
    ],
    developmentFocus: [
      'School Readiness',
      'Logical Problem-Solving',
      'Independent Reading',
      'Personality & Stage Confidence',
    ],
    icon: 'GraduationCap',
    colorTheme: {
      badge: 'bg-rose-100 text-rose-800 border-rose-200',
      cardBg: 'bg-gradient-to-br from-rose-50/60 to-pink-50/40',
      accent: 'text-rose-600',
      border: 'border-rose-200 hover:border-rose-300',
      light: 'bg-rose-500',
    },
  },
];
