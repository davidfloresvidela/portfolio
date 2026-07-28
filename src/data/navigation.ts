import type { NavLink, Stat } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "Años de experiencia", value: "5+" },
  { label: "Proyectos entregados", value: "30+" },
  { label: "Stack principal", value: "React / Next.js" },
];
