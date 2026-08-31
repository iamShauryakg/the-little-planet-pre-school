import { Activity } from '../types';

/**
 * ============================================================================
 * SCHOOL ACTIVITIES DATA
 * ============================================================================
 * Provided activities: Drawing, Painting, Art & Craft, Dance, Music,
 * Storytelling, Indoor Games, Festival Celebrations.
 */

export const activitiesData: Activity[] = [
  {
    id: 'drawing',
    title: 'Drawing & Sketching',
    category: 'Visual Arts',
    shortDescription:
      'Encouraging self-expression, pencil grip control, and imaginative world-building through free and guided drawing sessions.',
    fullDescription:
      'Drawing allows little children to translate their thoughts and feelings into visual shapes. From free scribbling in Pre-Nursery to guided outlines and scenery in UKG, our drawing sessions nurture spatial awareness, hand-eye coordination, and personal creativity.',
    skillsDeveloped: ['Hand-Eye Coordination', 'Spatial Imagination', 'Fine Motor Control', 'Color Concept'],
    icon: 'Pencil',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=700&q=80',
    colorTheme: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      badge: 'bg-emerald-100 text-emerald-800',
    },
  },
  {
    id: 'painting',
    title: 'Painting & Color Exploration',
    category: 'Creative Arts',
    shortDescription:
      'Exploring vibrant water colors, finger paints, sponges, and brushes to spark joy and sensory discovery.',
    fullDescription:
      'Painting gives children the freedom to experiment with vibrant hues, blending textures, and organic patterns. Children delight in finger painting, brush strokes, and nature stamping using leaves and vegetables.',
    skillsDeveloped: ['Sensory Exploration', 'Color Recognition', 'Emotional Expression', 'Fine Motor Strength'],
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=700&q=80',
    colorTheme: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      badge: 'bg-amber-100 text-amber-800',
    },
  },
  {
    id: 'art-and-craft',
    title: 'Art & Craft',
    category: 'Creative Construction',
    shortDescription:
      'Hands-on paper craft, clay modeling, origami, and collage work to build tactile dexterity and imagination.',
    fullDescription:
      'Art and craft projects teach children how to build 3D objects with paper, clay, natural seeds, buttons, and safe recycled materials. It nurtures patience, precision, and the pride of creating handmade keepsakes.',
    skillsDeveloped: ['Bilateral Coordination', 'Tactile Processing', 'Spatial Reasoning', 'Patience & Focus'],
    icon: 'Scissors',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80',
    colorTheme: {
      bg: 'bg-sky-50',
      text: 'text-sky-700',
      badge: 'bg-sky-100 text-sky-800',
    },
  },
  {
    id: 'dance',
    title: 'Dance & Movement',
    category: 'Performing Arts',
    shortDescription:
      'Rhythmic movements, joyful action songs, and guided choreography to encourage body coordination and confidence.',
    fullDescription:
      'Dance is a natural medium of joy for young children. Through folk rhythms, playful beats, and freestyle movement sessions, children release energy, learn body rhythm, and develop grace in physical movement.',
    skillsDeveloped: ['Gross Motor Skills', 'Rhythm & Balance', 'Physical Fitness', 'Self-Confidence'],
    icon: 'Music2',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=700&q=80',
    colorTheme: {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      badge: 'bg-purple-100 text-purple-800',
    },
  },
  {
    id: 'music',
    title: 'Music & Rhymes',
    category: 'Auditory Learning',
    shortDescription:
      'Singing nursery melodies, exploring percussion instruments, and discovering pitch and melody together.',
    fullDescription:
      'Music enriches brain connectivity in early childhood. Our music time introduces rhythm sticks, tambourines, bell chimes, and traditional and modern nursery rhymes that expand vocabulary and auditory memory.',
    skillsDeveloped: ['Auditory Discrimination', 'Memory Retention', 'Language Phonetics', 'Group Harmony'],
    icon: 'Radio',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=700&q=80',
    colorTheme: {
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      badge: 'bg-rose-100 text-rose-800',
    },
  },
  {
    id: 'storytelling',
    title: 'Storytelling & Puppet Theater',
    category: 'Language & Literature',
    shortDescription:
      'Captivating moral stories, expressive puppets, and picture talk to build listening habits and rich vocabulary.',
    fullDescription:
      'Storytelling takes little learners into worlds of wonder, empathy, and moral values. With expressive puppet characters, big picture books, and interactive questions, children develop active listening and deep comprehension.',
    skillsDeveloped: ['Active Listening', 'Vocabulary Growth', 'Empathy & Values', 'Curiosity & Focus'],
    icon: 'BookOpenCheck',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80',
    colorTheme: {
      bg: 'bg-teal-50',
      text: 'text-teal-700',
      badge: 'bg-teal-100 text-teal-800',
    },
  },
  {
    id: 'indoor-games',
    title: 'Indoor Games & Puzzles',
    category: 'Cognitive & Social Play',
    shortDescription:
      'Building blocks, jigsaw puzzles, shape sorters, and cooperative games for logical thinking and sharing.',
    fullDescription:
      'Our indoor play sessions are filled with educational toys, memory tiles, sorting games, and building mazes. Children learn turn-taking, problem-solving, and healthy cooperation with classmates.',
    skillsDeveloped: ['Problem Solving', 'Social Cooperation', 'Turn-Taking', 'Logical Sequencing'],
    icon: 'Gamepad2',
    image: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?auto=format&fit=crop&w=700&q=80',
    colorTheme: {
      bg: 'bg-orange-50',
      text: 'text-orange-700',
      badge: 'bg-orange-100 text-orange-800',
    },
  },
  {
    id: 'festival-celebrations',
    title: 'Festival Celebrations & Cultural Days',
    category: 'Cultural Awareness',
    shortDescription:
      'Celebrating Indian traditions, seasonal festivals, and special dress-up days with warmth and community spirit.',
    fullDescription:
      'We celebrate cultural festivals, national days, and environment days with colorful decorations, traditional attire, sweets, and playful skits, instilling a sense of unity, respect, and joyful celebration.',
    skillsDeveloped: ['Cultural Awareness', 'Social Inclusivity', 'Public Participation', 'Joyful Bonding'],
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80',
    colorTheme: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-700',
      badge: 'bg-yellow-100 text-yellow-800',
    },
  },
];
