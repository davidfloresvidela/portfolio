# Portafolio — David Flores

[![CI](https://github.com/davidfloresvidela/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/davidfloresvidela/portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-2ee08a.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000.svg)](https://nextjs.org)

Portafolio personal de **David Flores**, Desarrollador Full Stack.
Sitio de una sola página: hero, sobre mí, habilidades, experiencia,
proyectos y contacto — con modo claro/oscuro completo y una estética
"botanical/tech" (neutros suaves + acento verde).

Código abierto a propósito: además de ser mi portafolio, es una muestra de
cómo estructuro un proyecto de principio a fin — arquitectura, convenciones,
CI/CD y un historial de git organizado por feature.

🔗 **[davidfloresvidela.github.io/portfolio](https://davidfloresvidela.github.io/portfolio)**

## Screenshots

_Pendiente: se agregan capturas reales (modo claro y oscuro) — ver
[Estado del proyecto](#estado-del-proyecto)._

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** estricto
- **Tailwind CSS v4** (tokens de diseño en `globals.css`, sin config JS)
- **Framer Motion** (animaciones) · **lucide-react** (íconos)
- **Vitest** + **Testing Library** (tests unitarios)
- **Husky** + **commitlint** + **lint-staged** (calidad pre-commit)
- **GitHub Actions** (CI: lint, typecheck, test, build, formato, mensajes de commit)

## Arquitectura

Atomic Design en `src/components/`:

```
atoms/       — Button, Badge, Icon, BrandIcon, Text, Reveal
molecules/   — SkillCard, NavItem, ProjectCard, FormField, SocialLink...
organisms/   — Header, HeroSection, ContactForm, Footer...
templates/   — MainTemplate (layout + skip-link + shell)
```

Un componente nunca importa de un nivel superior. Contenido separado de la
UI en `src/data/` (tipado contra `src/types/`). Detalle completo de
convenciones en [`.cursor/rules/portfolio-conventions.mdc`](.cursor/rules/portfolio-conventions.mdc).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables de entorno

Copia `.env.example` a `.env.local` si quieres probar el envío real del
formulario de contacto — ver [CONTRIBUTING.md](CONTRIBUTING.md#variables-de-entorno).

### Scripts

| Script                 | Qué hace                                  |
| ---------------------- | ------------------------------------------ |
| `npm run dev`           | Servidor de desarrollo                     |
| `npm run build`         | Build de producción                        |
| `npm run start`         | Sirve el build de producción                |
| `npm run lint`          | ESLint                                     |
| `npm run typecheck`     | `tsc --noEmit`                             |
| `npm run test`          | Suite de tests (Vitest)                    |
| `npm run test:watch`    | Tests en modo watch                        |
| `npm run format`        | Prettier (escribe)                         |
| `npm run format:check`  | Prettier (solo verifica)                   |
| `npm run build:pages`   | Build de exportación estática para GitHub Pages |

## Calidad y CI/CD

Cada PR corre en GitHub Actions: lint, typecheck, tests, formato, build, y
validación de mensajes de commit (Conventional Commits, enforced también
localmente vía Husky). Ver [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

Cada push a `main` (es decir, cada release) despliega automáticamente a
GitHub Pages vía [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).
El sitio es 100% estático (`output: "export"`) — sin servidor, sin
middleware — así que el idioma por defecto (español) se sirve directamente
en `/`, y `/en` es la versión en inglés. Detalle de las decisiones de
arquitectura (basePath, ausencia de middleware, resolución de idioma sin
`headers()`) documentado en los comentarios de `next.config.ts`,
`src/i18n/request.ts` y `src/app/layout.tsx`.

## Estado del proyecto

El sitio está funcionalmente completo (`v1.0.0`) y desplegado en GitHub
Pages. Pendientes conocidos, marcados explícitamente en el código en vez
de dejados como placeholders silenciosos:

- Captura de screenshots reales (modo claro y oscuro).
- Endpoint real de Formspree (`NEXT_PUBLIC_FORM_ENDPOINT`) — el formulario
  de contacto está oculto por ahora (ver `ContactForm.tsx`).

## Contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md) — flujo de ramas, convención de
commits, y checklist antes de abrir un PR.

## Licencia

[MIT](LICENSE) © 2026 David Flores

## Contacto

david.flores22@inacapmail.cl · [github.com/davidfloresvidela](https://github.com/davidfloresvidela)
