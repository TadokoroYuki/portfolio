/**
 * Common type definitions for data layer
 */

// Skills types
export type SkillLevel = 'Advanced' | 'Intermediate' | 'Beginner';

export interface Skill {
  name: string;
  level?: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

// Project types
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

// Timeline types
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work';
}

// Contact types
export interface ContactLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  label: string;
}

// Hero types
export interface HeroData {
  name: string;
  titles: string[];
  description: string[];
  profileImage: string;
}
