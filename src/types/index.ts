export interface About {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: string;
  yearsOfExperience: number;
  available: boolean;
}

export type SkillGroupId = "frontend" | "backend" | "database" | "cloud";

export interface SkillGroup {
  // Stable, locale-independent key for things like icon lookup — `category`
  // is the translated display label and shouldn't be used for matching.
  id: SkillGroupId;
  category: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  // Absent when the source is closed — some personal projects use private
  // repos, so this should never be filled with a fabricated GitHub URL.
  repoUrl?: string;
  featured: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Contact {
  email: string;
  phone: string;
  socials: SocialLink[];
  cvUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}
