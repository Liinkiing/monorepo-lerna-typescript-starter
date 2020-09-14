# Lerna Monorepo Typescript starter

A starter to bootstrap your next monorepo with Lerna, TypeScript, a frontend powered by **Next**, a backend 
powered by Node + TypeScript and a shared package to reuse code across those packages.

## Packages

It includes by default three packages

- `backend` - A TypeScript node backend, with aliases and bundling setup
    - See https://github.com/Liinkiing/node-rollup-typescript-starter
- `frontend` - A fully featured Next TypeScript frontend (e2e testing, jest, styled-components...)
    - See https://github.com/Liinkiing/next-ts-starter
- `shared` - A simple package bundled with Rollup to export code that needs to be reused across packages

## Usage

You must launch the scripts at the root level.

```shell script
# install all workspaces deps, no need to lerna bootstrap
yarn install

# run start across all packages
yarn start 

# run dev across all packages
yarn dev 

# run test across all packages
yarn test 

# run lint across all packages
yarn lint

# run build across all packages
yarn build

# run lint in the frontend package
yarn frontend:lint 

# run start in the frontend package
yarn frontend:start 

# run dev in the frontend package
yarn frontend:dev 

# run build in the frontend package
yarn frontend:build 

# run test in the frontend package
yarn frontend:test 

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

### Shared

The shared folder is made to have a package that can be reused across your different packages.
It is configured to emit an ES module compatible source and CommonJS (for Node based environment or older runtimes).
You can consume it in your `frontend` and `backend` just by importing it like this
```typescript
import { foo } from '@monorepo-lerna-typescript-starter/shared'
```
But the package needs first to be built. If you're using the provided scripts, they ensure that the 
package is first bundled to avoid some errors. 
For exemple, when using the `dev` script, it launches the watch mode for your backend, the shared package and 
the next application. For the frontend app, you even have the auto reloading feature when updating your 
shared package!
See `main` and `modules` in the **package.json**. The TypeScript typings definitions are also exported.
You can also use, as for the other packages, the `~` alias (see `packages/shared/src/index.ts`)
