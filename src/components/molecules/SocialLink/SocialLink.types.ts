import type { SocialLink as SocialLinkData } from "@/types";

export interface SocialLinkProps {
  social: SocialLinkData;
  showLabel?: boolean;
  className?: string;
}
