# Lerna Monorepo Typescript starter

A simple starter to bootstrap your next monorepo with Lerna and TypeScript.

## Usage

```shell script
# at the root

# install all workspaces deps, no need to lerna bootstrap
yarn install

# run lint across all packages
yarn lint

# run build across all packages
yarn build

# run build in the backend package
yarn backend:lint

# run start in the backend package
yarn backend:start

# run dev in the backend package
yarn backend:dev

# run build in the backend package
yarn backend:build

# run build:watch in the backend package
yarn backend:build:watch

# run lint in the shared package
yarn shared:lint

# run build in the shared package
yarn shared:build

# run build:watch in the shared package
yarn shared:build:watch
```

## Packages

It includes by default three packages

- `backend`
- `frontend`
- `shared`

The shared package is made to be reused across your packages. It is bundled by [Rollup](https://rollupjs.org/) and
the configuration is available in the `rollup.config.js`.

### Backend

See https://github.com/Liinkiing/node-rollup-typescript-starter

### Shared

The shared folder is made to have a package that can be reused across your different packages.
It is configured to emit an ES module compatible source and CommonJS (for Node based environment or older runtimes).
See `main` and `modules` in the **package.json**. The TypeScript typings definitions are also exported.
You can also use, as for the other packages, the `~` alias (see `packages/shared/src/index.ts`)
