# Contribuir

Este es mi portafolio personal, pero el repo es abierto — si encuentras un
bug o tienes una sugerencia, los issues y PRs son bienvenidos.

## Setup local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables de entorno

Copia `.env.example` a `.env.local` y completa `NEXT_PUBLIC_FORM_ENDPOINT`
con tu propio endpoint de [Formspree](https://formspree.io) (u otro
servicio de formularios sin backend) si quieres probar el envío real del
formulario de contacto. Sin esta variable, el formulario sigue validando
pero muestra un error al enviar.

## Flujo de ramas

- `main`: solo releases estables, taggeados (`vX.Y.Z`).
- `dev`: rama de integración, es la base de todo trabajo nuevo.
- Todo lo demás nace de `dev` y vuelve a `dev` vía Pull Request.

Nombre de rama: `tipo/alcance-en-kebab-case`, con `tipo` en
`feature | fix | chore | content | docs | test | perf | refactor`.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(alcance opcional): descripción en imperativo

feat: add hero section with pointer-reactive glow
fix: correct social icon fallback
chore: add Husky and commitlint
```

Se valida automáticamente al commitear (`commit-msg` hook) y de nuevo en CI
sobre cada PR.

## Antes de abrir un PR

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

Todo esto corre también en CI (`.github/workflows/ci.yml`), pero conviene
verificarlo local antes de subir. El `pre-commit` hook ya corre lint +
format automáticamente sobre los archivos que modificaste.

## Convenciones de código

Ver [`.cursor/rules/portfolio-conventions.mdc`](.cursor/rules/portfolio-conventions.mdc):
arquitectura (Atomic Design), naming, design tokens, accesibilidad y
animación.
