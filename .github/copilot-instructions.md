<!-- .github/copilot-instructions.md for chery-rubben -->
# Chery‑Rubben — instructions for AI coding agents

This repository is a small React + TypeScript + Vite app (single‑page) that uses a simple route table and a lightweight component/layout structure. Use these notes to be immediately productive when editing, refactoring, or adding features.

Key facts
- Project type: React + TypeScript + Vite (see `package.json` and `vite.config.ts`).
- Path alias: `@` -> `./src` (configured in `tsconfig.json` and used across imports).
- Routing: Routes are declared in `src/helper/route-data.ts` as an array of objects; `src/App.tsx` maps that array to React Router `Route`s, wrapping each route with the app `Layout`.
- Layout: `src/components/layouts/layout.tsx` composes `Header` and `Footer` and accepts `isHeader` and `noFooter` flags.

Developer workflows (what to run)
- Local dev with HMR: npm run dev (runs `vite`).
- Build: npm run build (runs `tsc -b && vite build`). Note: the build runs TypeScript composite build first.
- Lint: npm run lint (runs `eslint .`).
- Preview production build: npm run preview (runs `vite preview`).

Project conventions and patterns
- Route registration: Add pages by exporting a component under `src/pages/*` and adding an entry to `src/helper/route-data.ts`:
  - shape: { path: string, isHeader: boolean, component: () => JSX.Element }
  - `App.tsx` expects `component()` to return an element and wraps it in `Layout`.
- Layout and header/footer:
  - `Layout` props: `{ isHeader: boolean, children, noFooter?: boolean }`.
  - Header is conditionally rendered when `isHeader` is true.
- Path alias: Prefer `@/` imports for files under `src` (e.g. `@/helper/route-data` or `@/components/...`).
- Styling: Tailwind is configured. You will see utility classes in components (no CSS-in-JS). Preserve class usage when refactoring.

Files to check when changing behavior
- Routing changes: `src/helper/route-data.ts`, `src/App.tsx`, `src/components/layouts/layout.tsx`.
- Global styles and entry: `src/index.css`, `src/main.tsx`.
- Shared data/constants: `src/helper/constants.ts`.
- Reusable UI: `src/components/reusable/*`.

Examples from the codebase
- Route entry (example):
  - See `src/helper/route-data.ts` — routes are plain objects used by `App.tsx`.
- Layout usage (example):
  - `App.tsx` maps each route like: <Route path={d.path} element={<Layout isHeader={d.isHeader}>{d.component()}</Layout>} />

What to avoid / project‑specific gotchas
- Do not assume each page is a default exportless function; `RouteData` expects the `component` field to be a function that returns JSX (not a component type). Follow the existing pattern when adding entries.
- The build script runs `tsc -b` before `vite build`. If you add new TS project references, ensure `tsconfig.app.json`/`tsconfig.node.json` stay valid.
- Imports use ESM top-level `import` and rely on `type: "module"` in `package.json`.

When creating new features, check these quick places for integration:
- Add route -> update `src/helper/route-data.ts` and create `src/pages/<Name>/index.tsx`.
- Add shared utilities -> `src/libs` or `src/helper` depending if it's UI-focused or app logic.
- Add reusable UI -> `src/components/reusable`.

If you need to run tests or other CI steps
- This repo currently has no test runner configured. If tests are added, update `package.json` scripts and document the commands here.

If anything in this file looks wrong or incomplete, point me to the missing examples and I will update the instructions.
