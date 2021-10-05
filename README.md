# Frontend Helpers

This repo contains useful functionality that we often have to duplicate across
different projects.

The goal is to have fewer lines of codes that we have to maintain, so anything
that we do in more than one repo should live here.

## Structure

All functions are organized under the `src/helpers` folder with colocated
Markdown files to explain usage.

## Installation

```
yarn add @stellar/frontend-helpers
```

## Adding helpers

- Create a directory with the name of the helper method.
- Inside the directory:
  - create `index.ts` for the main code of the method,
  - if necessary, add `README.md` file with context and/or instructions.
- Export newly created helper to `src/index.ts`.
