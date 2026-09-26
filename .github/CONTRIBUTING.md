# Contributing to Restro FX

This repository contains the marketing website for **Restro FX**. It is a client project: the code
is owned by Restro FX and is designed, built and maintained by the [Stackified](https://github.com/stackified)
team. The repository is public for portfolio purposes, so day-to-day development is done by
Stackified rather than through outside contributions.

Bug reports are welcome through [issues](https://github.com/stackified/RestroFX/issues). For
security problems, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.

## Getting set up

The site is a Next.js 14 (App Router) app inside an npm workspaces monorepo. You need Node.js 20
(the version CI uses) and npm.

1. Clone the repository and switch to the `dev` branch:
   ```bash
   git clone https://github.com/stackified/RestroFX.git
   cd RestroFX
   git checkout dev
   ```
2. Install dependencies from the repository root (this installs every workspace):
   ```bash
   npm ci
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Then open `http://localhost:3000/`.

Other useful commands:

```bash
npm run build                              # static export to apps/web/out
npm run lint --workspace=apps/web          # ESLint (next/core-web-vitals)
npm run type-check --workspace=apps/web    # tsc --noEmit
npx serve apps/web/out                     # preview the exported build
```

Run `lint` and `type-check` against the `apps/web` workspace. The root versions of those scripts
call every workspace, and not every package defines them. `npm start` (`next start`) does not work
with this project because `next.config.js` uses `output: 'export'`; preview the `out` folder with a
static server instead.

## Project structure

- `apps/web/app/` - App Router pages (home, platforms, account types, markets, partners, legal,
  help, contact, demo, and the `/login` and `/register` redirects to the client portal)
- `apps/web/components/` - navbar, footer, deposit popup, Discord button, page sections
  (`sections/`) and UI and animation components (`ui/`)
- `apps/web/lib/` - `base-path.ts` (base path helper) and `utils.ts`
- `apps/web/public/` - logo, hero videos and images
- `packages/ui` - shared UI components (`Button`, `Card`, `Accordion`, `Badge`, `NeonButton`)
- `packages/types` - shared TypeScript types (account types, platforms, markets, metrics)
- `packages/utils` - the shared `cn()` class name helper
- `packages/config` - shared TypeScript and Tailwind configuration
- `.github/workflows/deploy.yml` - the "Multi-Tier Deployment" workflow

The workspace packages are named `@crimsonfx/*`. That is an internal package scope, not the
product name; keep it as it is.

## Base path rules

The `dev` build is served from GitHub Pages under `/RestroFX`, while the `main` build is served
from the domain root. The workflow passes `BASE_PATH`, `NEXT_PUBLIC_BASE_PATH` and `ASSET_PREFIX`
to `next build`, so:

- Do not hardcode `/RestroFX` in components.
- Wrap raw paths to files in `public/` (images, video, `next/image` sources) with
  `withBasePath()` from `apps/web/lib/base-path.ts`. `next/link` handles the base path itself.
- To test a GitHub Pages style build locally:
  ```bash
  BASE_PATH=/RestroFX NEXT_PUBLIC_BASE_PATH=/RestroFX ASSET_PREFIX=/RestroFX/ npm run build
  ```

## Branch flow

- `main` is the default branch and the production branch.
- `dev` is the integration branch.
- Work happens on short-lived branches cut from `dev`, named like `feat/short-description` or
  `fix/short-description`.

The deploy workflow runs on every push to `dev` and `main`:

1. A merge into `dev` builds the site with the `/RestroFX` base path and deploys it to GitHub Pages
   at https://stackified.github.io/RestroFX/.
2. When `dev` is ready, it is merged into `main` through a pull request. A push to `main` builds the
   site for the domain root and publishes `apps/web/out` to the `deploy-prod` branch, which the
   Hostinger hosting pulls from.

Do not commit to `deploy-prod` by hand; the workflow overwrites it on every production build.

## Making changes

1. Create a branch from `dev`: `git checkout -b fix/short-description`
2. Keep changes focused. One feature or fix per pull request.
3. Match the existing style: TypeScript, Tailwind CSS utility classes, and the existing components
   in `components/` and `packages/ui` before adding new ones.
4. Run the lint, type-check and build commands above, then check the affected pages in the browser
   on desktop and mobile widths.

## Pull requests

1. Push your branch and open a pull request against `dev`.
2. Fill in the pull request template: what changed, why, and how you tested it.
3. Link any related issue (for example, `Closes #12`).
4. Releases to production are a separate pull request from `dev` into `main`.

For security issues, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.
