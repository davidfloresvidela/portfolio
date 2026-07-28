import type { NavLink } from "@/types";

export interface NavItemProps {
  link: NavLink;
  active?: boolean;
  onNavigate?: (href: string) => void;
}
