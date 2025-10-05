# `canvas-cc-starter`

Build and test
[Drupal Canvas Code Components](https://project.pages.drupalcode.org/canvas/code-components)
with this preconfigured development environment.

![Screenshot](./screenshot.jpg)

[Drupal Canvas](https://www.drupal.org/project/canvas) has an in-browser code
editor for authoring components using React/Preact and Tailwind CSS. Compiling
these components happens directly in the browser, and they instantly become
available to content creators.

The components can also be developed outside of Drupal Canvas, and synchronized
using [`@drupal-canvas/cli`](https://www.npmjs.com/package/@drupal-canvas/cli).

This starter project aims to provide a development environment. It loosely
mimics how Drupal Canvas compiles JavaScript and builds the CSS code by using
[SWC](https://swc.rs) and [Tailwind CSS v4](https://tailwindcss.com).

## ⚠️ Before you start

→ [**Important notes**](./docs/important-notes.md) — issues, current
limitations, and considerations when developing Code Components for Drupal
Canvas

## Features

- [Drupal Canvas CLI](https://www.npmjs.com/package/@drupal/xb-cli) installed
  - `.env.example` file with instructions specific to this codebase
- [Storybook](https://storybook.js.org) for developing and presenting the
  components
  - [Viewports](https://storybook.js.org/docs/essentials/viewport) configured to
    match the viewport sizes Drupal Canvas uses
  - Helper function to load example values for stories (args/prop values) from
    `component.yml` files:
    [`src/stories/lib/get-examples.js`](./src/stories/lib/get-examples.js)
- Compiling with [SWC](https://swc.rs) (Drupal Canvas uses
  [`@swc/wasm-web`](https://swc.rs/docs/usage/wasm)) through
  [`@vitejs/plugin-react-swc`](https://www.npmjs.com/package/@vitejs/plugin-react-swc)
- [Tailwind CSS v4](https://tailwindcss.com) for styling
- [Prettier](https://prettier.io/) with plugins configured
  - [`prettier-plugin-tailwindcss`](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
  - [`@ianvs/prettier-plugin-sort-imports`](https://www.npmjs.com/package/@ianvs/prettier-plugin-sort-imports)
- [ESLint](https://eslint.org/) config started from that of
  [`create-vite`](https://www.npmjs.com/package/create-vite) for its
  [`react` template](https://github.com/vitejs/vite/blob/main/packages/create-vite/template-react/eslint.config.js),
  extended specifically for Drupal Canvas:
  - Disallows named exports and requires default exports in components, which is
    a requirement in Drupal Canvas
  - Disallows relative imports as those don't work in Drupal Canvas
  - Disables the error for missing prop validation
- Pre-commit hook with [Husky](https://typicode.github.io/husky) for linting and
  formatting staged files using
  [`lint-staged`](https://www.npmjs.com/package/lint-staged)
- [GitHub Actions](https://github.com/features/actions) workflows:
  - Static code checks
  - Validating PR titles against
    [the Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0)
    (delete `.github/workflows/lint-pr.yml` if you don't want this)
- Sample components

## Commands

| Command                          | Description                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------- |
| `npx canvas [command] [options]` | Runs Drupal Canvas CLI commands <br> (`npx canvas` lists available commands) |
| `npm run dev`                    | Starts Storybook's development server                                        |
| `npm run storybook`              | Alias for `dev` command                                                      |
| `npm run build-storybook`        | Creates a static Storybook build                                             |
| `npm run code:check`             | Runs all code checks                                                         |
| `npm run code:check:prettier`    | Checks code formatting with Prettier                                         |
| `npm run code:check:eslint`      | Checks code with ESLint                                                      |
| `npm run code:fix`               | Runs all code fixes                                                          |
| `npm run code:fix:prettier`      | Fixes code formatting with Prettier                                          |
| `npm run code:fix:eslint`        | Fixes code with ESLint                                                       |
