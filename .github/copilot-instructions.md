<!-- Auto-generated: guidance for AI coding agents working on `astromeria` -->
# Copilot instructions — astromeria

Short, actionable guidance for an AI assistant editing this repository.

## Big picture
- Project type: Lightweight React app scaffolded with Vite (ESM, `type: "module"`).
- No backend code present in the repo — this is a static/frontend-only site.
- Main entry: `src/main.jsx` -> `src/App.jsx`. Visual UI pieces live in `src/components` (notably `background.jsx` + `background.css`).

## Build & developer workflow (commands)
- Start dev server with HMR: `npm run dev` (Vite default, port 5173). Use this for iterative UI changes.
- Build static production bundle: `npm run build`.
- Preview built output: `npm run preview`.
- Linting: `npm run lint` (ESLint configured at repository root; see `eslint.config.js`).

## Project-specific conventions and patterns
- File structure:
  - `src/main.jsx` mounts React and imports `index.css`.
  - `src/App.jsx` is the top-level page component (default export function component).
  - `src/components/` contains presentational components; components import their own CSS files (example: `background.jsx` imports `./background.css`).
- Components use default-exported React function components (no class components / hooks-heavy patterns are present here).
- Styling: plain CSS files co-located with components (no CSS modules or Tailwind in this repo). Keep class names simple and match existing patterns (e.g., `page-root`, `hero`, `nav`, `bg-wrapper`).
- Copy & language: the sample UI contains Spanish copy (e.g., `Contáctanos`) — preserve locale/context when editing copy unless asked to change.

## Important files to reference when changing behavior or visuals
- `package.json` — scripts and deps (React 19, Vite, ESLint).
- `vite.config.js` — Vite + React plugin configuration.
- `src/App.jsx` — top-level layout and navigation.
- `src/components/background.jsx` + `src/components/background.css` — complex SVG-based background; changes here affect site-wide visuals and can be expensive in render cost.
- `src/index.css` and `src/App.css` — global and page styles.

## Examples and patterns (copy/paste safe snippets)
- Importing and using the background component (as used in `App.jsx`):
  - `import IridescentWavesBackground from './components/background'`
  - `<IridescentWavesBackground />`

## When editing code, follow these constraints (discoverable rules)
- Maintain default exports for components in `src` to match current imports (changing to named exports requires updating imports).
- Keep visual assets and large SVGs in `src/components` and CSS in `src/components/*.css` to preserve structure.
- Avoid introducing TypeScript files or tsconfig without explicit instruction — the repo is JS/ESM-only and adding TS requires config + dependency changes.
- Do not add runtime server code or assume a backend — integration points are not present in this repository.

## Debugging notes
- Use the Vite dev server (`npm run dev`) for fast HMR and console logs. Open browser devtools to inspect DOM/SVG.
- Linting errors: run `npm run lint`. ESLint config is in `eslint.config.js` (project-level rules).

## Dependencies & constraints
- React 19 and `@vitejs/plugin-react` are present; be mindful of modern React APIs (e.g., `createRoot`, `StrictMode`).
- No test framework configured (no `jest`/`vitest` files detected). Do not assume test commands exist.

## When to ask the user
- If a change affects build tooling (add/remove deps, enable TypeScript, change bundler), ask before editing `package.json` or Vite config.
- If you need to add global state, router, or a backend integration, ask for the intended architecture and where data should be persisted.

---
If anything above is unclear or you want more detail (e.g., component responsibilities, performance constraints on `background.jsx` SVG), tell me which area to expand and I'll update this file.
