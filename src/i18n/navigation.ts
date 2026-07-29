import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware wrappers around next/link and next/navigation — always use
// these instead of the raw next/* versions so links keep the current
// locale's prefix automatically.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
