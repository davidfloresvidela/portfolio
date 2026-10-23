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

export type EducationGroupId = "education" | "certifications" | "languages";

export interface EducationEntry {
  title: string;
  detail: string;
  period?: string;
}

export interface EducationGroup {
  // Same split as SkillGroup: `id` drives the icon, `category` is the
  // translated heading.
  id: EducationGroupId;
  category: string;
  entries: EducationEntry[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
}

// One stage of a project that was rebuilt over time (e.g. a V1 and the
// migration that replaces it), shown inside the same card.
export interface ProjectVersion {
  label: string;
  period: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  // Translated status label, e.g. "En desarrollo" — absent once shipped.
  status?: string;
}

export interface Project {
  title: string;
  description: string;
  // Empty when the project lists its stack per version instead.
  stack: string[];
  // Absent while nothing is publicly deployed yet.
  liveUrl?: string;
  // Absent when the source is closed — some personal projects use private
  // repos, so this should never be filled with a fabricated GitHub URL.
  repoUrl?: string;
  featured: boolean;
  status?: string;
  versions?: ProjectVersion[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Contact {
  email: string;
  socials: SocialLink[];
  cvUrl: string;
  // What the browser names the saved file on download — independent of
  // cvUrl's actual path, which stays a stable, generic asset name.
  cvDownloadName: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}
