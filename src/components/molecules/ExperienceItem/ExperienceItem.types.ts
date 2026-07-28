import type { ExperienceItem as ExperienceData } from "@/types";

export interface ExperienceItemProps {
  item: ExperienceData;
  isLast?: boolean;
}
