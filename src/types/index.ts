export interface About {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: string;
  yearsOfExperience: number;
  available: boolean;
}

export interface SkillGroup {
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
  repoUrl: string;
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
