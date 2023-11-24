# react-plus-vue-jsx-import-source

A jsxImportSource to bring some of vue's most loved features into react!

## Installation

### npm

`npm install react-plus-vue-jsx-import-source`

### yarn

`yarn add react-plus-vue-jsx-import-source`

## Usage

### esbuild

In order to use this import source in esbuild, configure the `jsxImportSource` and `jsx` properties like this:

```js
import * as esbuild from 'esbuild'

// see https://esbuild.github.io/api/#jsx-import-source
await esbuild.build({
  ...
  jsxImportSource: 'react-plus-vue-jsx-import-source',
  jsx: 'automatic',
  ...
})
```

### typescript

To use it in typescript, configure jsxImportSource in your `tsconfig.json` file like this:

```json
// tsconfig.json
{
    "compilerOptions": {
        ...
        "jsxImportSource": "react-plus-vue-jsx-import-source",
        ...
    }
}

```

## Current Features

none, it only has the initial code required to get everything working

## Future Plans

- `v-if` (as `vIf`)
- `vIfn` (the opposite of `vIf`, meaning that the element will not desplay if `vIfn=true`)
- converting `.vue` files to react components
- directives + intellisense
- and more!
