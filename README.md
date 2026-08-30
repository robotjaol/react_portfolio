# React Engineering Portfolio

A responsive personal portfolio built with React 17, Create React App, Material UI, Sass, and typed-text interactions. The repository includes source code and a generated production build.

> **Project status:** maintained legacy frontend; the dependency stack predates current React and Material UI releases.

## What this repository contains

- Single-page portfolio sections and reusable React components.
- Material UI v4 components and icons.
- Sass styling, responsive layouts, and animated typed text.
- Create React App development, test, and production scripts.
- Tracked build output for static hosting.

## Quick start


~~~bash
npm ci
npm start
npm test -- --watchAll=false
npm run build
~~~

## Engineering notes

- Use Node.js 16 or 18 for the most predictable compatibility with the current dependency graph.
- Do not edit the build directory directly; regenerate it from source.
- The committed yarn-error.log may contain obsolete local diagnostics and should not be treated as documentation.
- A future migration should address React, Material UI, Sass, and Create React App as one planned upgrade.

## Repository map

| Path | Purpose |
| --- | --- |
| src/ | React components, styles, and application entry point. |
| public/ | Static assets and HTML shell. |
| build/ | Generated static production output. |
| package.json | Scripts and dependency versions. |

## Safety and limitations

Review all public profile content before deployment. Remove private contact information, analytics identifiers, unpublished client work, and stale generated assets.

## Contributing

Open an issue before a large change. Keep changes focused, document assumptions, and include a reproducible verification step.

## License

A repository-wide open-source license has not been declared. Obtain permission before redistributing material.
