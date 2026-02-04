/**
 * Data layer - Central export point for all application data
 */

// Type exports
export type {
  Skill,
  SkillLevel,
  SkillCategory,
  Project,
  TimelineItem,
  ContactLink,
  HeroData,
} from './types';

// Data exports
export { skillCategories } from './skills';
export { projects } from './projects';
export { timelineItems } from './timeline';
export { interests } from './interests';
export { contactLinks } from './contact';
export { heroData } from './hero';
