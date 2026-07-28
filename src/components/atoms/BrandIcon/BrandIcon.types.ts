export type Brand = "github" | "linkedin" | "x";

export interface BrandIconProps {
  brand: Brand;
  size?: number;
  className?: string;
  label?: string;
}
