# React demo App

This is a Vite React app project.

## Project structure

```
├── package.json            # Project dependencies
├── public                  # Public resources
├── src                     # Source Code
    ├── App.tsx             # Main App component
    ├── assets              # Images, icons, and other static assets
    ├── components          # Components folder
        ├── ui              # UI primitive components
    ├── hooks               # Custom hooks
    ├── index.css           # Main CSS file
    ├── index.tsx           # Root app script file
    ├── pages               # Pages
    ├── services            # Third-party services
        ├── api             # API configuration
    ├── types               # TypeScript types
    └── utils               # Reusable helper methods
├── tailwind.config.js      # Tailwind CSS configuration

```

## Component Structure

```
MyComponent.tsx             # Component file
myComponent.types.ts        # File for types & interfaces
myComponent.services.ts     # File for services
myComponent.test.tsx        # File for tests
index.ts                    # File for default export

```

## Environment Files

The project uses different environment files for development, staging, and production environments.
These files are used to set environment-specific variables.

```
.env.development           # Environment variables for development
.env.staging:              # Environment variables for staging
.env.production:           # Environment variables for production

```

## Development

```
npm run dev                # start server with default mode (development)
npm run dev:staging        # start server in staging mode.
npm run dev:production     # start server in production mode.

```

## Build

```
npm run build:dev          # Build in development mode.
npm run build:staging      # Build in staging mode.
npm run build              # Build with default mode(production)

```

## Linting and Formatting

pre-commit is configured to ensure code quality and consistency before publishing.
(https://typicode.github.io/husky/get-started.html)

Linting configurations: .eslintrc.cjs
(More options: https://eslint.org/docs/latest/rules/)

```
npm run lint              # Run eslint to check issues in code
npm run lint:fix          # Auto fix certian issues in linting (many require manual effort).
```

Prettier configuration: .prettierrc & .prettierignore
(More options: https://prettier.io/docs/en/options)

```
npm run format            # Run eslint to format the repo files
npm run format:check      # Check the formatting suggestings
```
