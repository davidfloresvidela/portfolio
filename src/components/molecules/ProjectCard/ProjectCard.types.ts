import type { Locale } from "@/i18n/routing";
import type { Project } from "@/types";

export interface ProjectCardProps {
  project: Project;
  locale: Locale;
}
