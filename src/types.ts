export type Language = 'en' | 'fr';

export interface Program {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  description: Record<Language, string>;
  detailedDesc: Record<Language, string>;
  icon: string;
  image: string;
  keyPoints: Record<Language, string[]>;
  duration: string;
  intensity: 'Elite' | 'Pro' | 'Developmental';
}

export interface AgeCategory {
  id: string;
  code: 'U11' | 'U13' | 'U15' | 'U17' | 'U20';
  title: Record<Language, string>;
  ageRange: string;
  objectives: Record<Language, string>;
  schedule: Record<Language, string>;
  sessionsPerWeek: number;
  focusAreas: Record<Language, string[]>;
  image: string;
}

export interface Coach {
  id: string;
  name: string;
  role: Record<Language, string>;
  image: string;
  license: string;
  experience: Record<Language, string>;
  bio: Record<Language, string>;
  specialty: Record<Language, string>;
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface Facility {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  features: Record<Language, string[]>;
  category: 'Pitch' | 'Fitness' | 'Recovery' | 'Tactical';
}

export interface NewsArticle {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  date: string;
  readTime: string;
  summary: Record<Language, string>;
  content: Record<Language, string>;
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: Record<Language, string>;
  avatar: string;
  quote: Record<Language, string>;
  rating: number;
  category: 'parent' | 'player' | 'partner';
}

export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category: 'enrollment' | 'training' | 'education' | 'general';
}

export interface AcademyStats {
  playersTrained: number;
  weeklySessions: number;
  certifiedCoaches: number;
  matchesPlayed: number;
  championships: number;
  proGraduates: number;
}
