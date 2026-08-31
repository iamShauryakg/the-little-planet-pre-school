import { Facility } from '../types';

/**
 * ============================================================================
 * SCHOOL FACILITIES DATA
 * ============================================================================
 * Exact school facilities provided:
 * - Learning Spaces: Classrooms, Smart Classes, Activity Room, Library
 * - Play & Development: Playground, Indoor Play Area
 * - Safety & Care: CCTV, First-Aid Facility, Child-Friendly Toilets, RO Drinking Water
 * - Comfort & Convenience: Air-Conditioned Classrooms, School Transport, School Bus
 */

export const facilitiesData: Facility[] = [
  // 1. Learning Spaces
  {
    id: 'classrooms',
    name: 'Classrooms',
    category: 'Learning Spaces',
    shortDescription:
      'Bright, colorful, and ventilated spaces designed with child-sized furniture to create a cheerful daily learning environment.',
    icon: 'School',
    features: ['Child-sized modular tables & chairs', 'Natural daylight & fresh air', 'Theme-based wall artwork'],
  },
  {
    id: 'smart-classes',
    name: 'Smart Classes',
    category: 'Learning Spaces',
    shortDescription:
      'Interactive digital learning setups with child-friendly audiovisual rhymes, animated stories, and concept visuals.',
    icon: 'MonitorPlay',
    features: ['Interactive audiovisual displays', 'Age-appropriate learning modules', 'Engaging visual rhymes'],
  },
  {
    id: 'activity-room',
    name: 'Activity Room',
    category: 'Learning Spaces',
    shortDescription:
      'A dedicated space equipped with art supplies, educational toys, puzzles, and sensory play stations.',
    icon: 'Blocks',
    features: ['Art & craft corners', 'Tactile sensory games', 'Open carpet area for group circles'],
  },
  {
    id: 'library',
    name: 'Library & Reading Corner',
    category: 'Learning Spaces',
    shortDescription:
      'A cozy corner with illustrated storybooks, picture dictionaries, and moral tales to foster an early love for books.',
    icon: 'BookOpen',
    features: ['Large illustrated picture books', 'Cozy floor seating cushions', 'Early phonics & alphabet readers'],
  },

  // 2. Play & Development
  {
    id: 'playground',
    name: 'Playground',
    category: 'Play & Development',
    shortDescription:
      'An outdoor play zone with age-appropriate slides, swings, and open space for running, games, and active play.',
    icon: 'Trees',
    features: ['Child-safe outdoor play equipment', 'Open grass play area', 'Supervised outdoor game periods'],
  },
  {
    id: 'indoor-play-area',
    name: 'Indoor Play Area',
    category: 'Play & Development',
    shortDescription:
      'Safe, weather-protected indoor play zone with ball pools, soft mats, rocker toys, and balance beams.',
    icon: 'Smile',
    features: ['Soft foam floor mats', 'Safe mini slides & ride-ons', 'Protected all-weather play'],
  },

  // 3. Safety & Care
  {
    id: 'cctv',
    name: 'CCTV Surveillance',
    category: 'Safety & Care',
    shortDescription:
      'Campus premises equipped with camera surveillance for monitoring and campus oversight.',
    icon: 'Camera',
    features: ['Surveillance across key areas', 'Monitored premises', 'Supportive safety oversight'],
  },
  {
    id: 'first-aid',
    name: 'First-Aid Facility',
    category: 'Safety & Care',
    shortDescription:
      'Equipped first-aid kit and emergency response protocols to promptly address minor cuts, scrapes, or illness.',
    icon: 'HeartPulse',
    features: ['Well-stocked first-aid kit', 'Staff trained in basic care', 'Immediate parent contact procedure'],
  },
  {
    id: 'child-toilets',
    name: 'Child-Friendly Toilets',
    category: 'Safety & Care',
    shortDescription:
      'Clean, sanitized washrooms with low-height sanitary fixtures, non-slip flooring, and hygiene assistance.',
    icon: 'Sparkle',
    features: ['Low-height basins & commodes', 'Non-slip dry flooring', 'Attendant assistance for little ones'],
  },
  {
    id: 'ro-water',
    name: 'RO Drinking Water',
    category: 'Safety & Care',
    shortDescription:
      'Clean, purified RO drinking water dispensers accessible to staff and children throughout the day.',
    icon: 'Droplets',
    features: ['Multi-stage RO purification', 'Regularly serviced filters', 'Clean drinking stations'],
  },

  // 4. Comfort & Convenience
  {
    id: 'ac-classrooms',
    name: 'Air-Conditioned Classrooms',
    category: 'Comfort & Convenience',
    shortDescription:
      'Climate-controlled learning environments providing comfortable indoor temperatures during warm summer days.',
    icon: 'Wind',
    features: ['Temperature controlled rooms', 'Clean and dust-free air', 'Pleasant study environment'],
  },
  {
    id: 'school-transport',
    name: 'School Transport',
    category: 'Comfort & Convenience',
    shortDescription:
      'Safe and organized student pick-up and drop-off facility covering local designated areas in and around Hasanpur.',
    icon: 'Navigation',
    features: ['Designated pickup & drop points', 'Attendant on board', 'Disciplined transit schedule'],
  },
  {
    id: 'school-bus',
    name: 'School Bus',
    category: 'Comfort & Convenience',
    shortDescription:
      'Dedicated child-friendly school bus with safety seating and experienced drivers for daily commuting.',
    icon: 'Bus',
    features: ['Well-maintained vehicle', 'Experienced licensed driver', 'Supportive transit assistance'],
  },
];
