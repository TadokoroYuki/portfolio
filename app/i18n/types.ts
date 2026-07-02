/**
 * i18n type definitions.
 *
 * All strings displayed in the UI live in a locale dictionary so that
 * every page can be rendered in Japanese or English. The dictionary is
 * fully serializable (no React nodes) so slices of it can be passed to
 * client components as props.
 */

export const locales = ['ja', 'en'] as const;

export type Locale = (typeof locales)[number];

// --- Content types (moved from app/data/types.ts) ---

export type SkillLevel = 'Advanced' | 'Intermediate' | 'Beginner';

export interface Skill {
  name: string;
  level?: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work';
}

/** Contact link without the icon (icons are mapped by `name` in the component). */
export interface ContactLink {
  name: string;
  url: string;
  label: string;
}

// --- Dictionary sections ---

export interface MetaDict {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string[];
}

export interface NavDict {
  ariaLabel: string;
  logo: string;
  items: { id: 'home' | 'about' | 'skills' | 'projects' | 'contact'; label: string }[];
  toggleMenu: string;
  languageLabel: string;
  themeToggle: {
    label: string;
    toLight: string;
    toDark: string;
  };
}

export interface HeroDict {
  name: string;
  titles: string[];
  description: string[];
  profileImageAlt: string;
  viewProjects: string;
  contactMe: string;
  downloadResume: string;
}

export interface AboutDict {
  heading: string;
  subheading: string;
  introHeading: string;
  paragraphs: string[];
  timelineHeading: string;
  timeline: TimelineItem[];
  badgeWork: string;
  badgeEducation: string;
  interestsHeading: string;
  interests: string[];
}

export interface SkillsDict {
  heading: string;
  subheading: string;
  categories: SkillCategory[];
}

export interface ProjectsDict {
  heading: string;
  subheading: string;
  codeLabel: string;
  demoLabel: string;
  /** Aria label templates: `{title}` is replaced with the project title. */
  codeAria: string;
  demoAria: string;
  items: Project[];
}

export interface ContactDict {
  heading: string;
  subheading: string;
  links: ContactLink[];
  message: string[];
}

export interface A11yDict {
  skipLink: string;
  scrollToTop: string;
}

export interface Dictionary {
  meta: MetaDict;
  nav: NavDict;
  hero: HeroDict;
  about: AboutDict;
  skills: SkillsDict;
  projects: ProjectsDict;
  contact: ContactDict;
  a11y: A11yDict;
}
