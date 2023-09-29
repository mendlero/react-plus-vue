<h1 align="center">
  React-plus-vue
</h1>

<p align="center">
  <a aria-label="Version" href="https://www.npmjs.com/package/react-plus-vue">
    <img alt="version: 1.0.1" src="https://img.shields.io/badge/version-1.0.1-cyan">
  </a>
  <img alt="full typescript support" src="https://img.shields.io/badge/full_typescript_suppot-blue">
  <a aria-label="License" href="https://github.com/mendlero/react-plus-vue/blob/main/LICENSE">
    <img alt="license: MIT" src="https://img.shields.io/badge/license-MIT-green">
  </a>
</p>

<p align="center">
  React Plus Vue is a lightweight npm package that brings some of the powerful features from Vue.js into your React applications.
</p>

## Installation

to use react-plus-vue in your project, simply install it with npm or yarn.

### npm

`npm install --save react-plus-vue`

### yarn

`yarn add react-plus-vue`

## Usage

### import the elements

All of the elements have a prefix of 'V' (e.g instead of 'p' use 'Vp').

```jsx
  import { Vp } from 'react-plus-vue';

  ...

  export default function MyReactVueComponent(){
    return <Vp>Hello World!</Vp>;
  }
```

now you can use some special features

### special features

There are a few special features like vIf and vIfn:

```jsx
import { Vp } from 'react-plus-vue';
import { useStaet } from 'react';

export default function MyReactVueComponent() {
  const [show, setShow] = useState(true);

  ...

  return <>
    <Vp vIf={show}>
      This will be shown only when show is true
    </Vp>
    <Vp vIfn={show}>
      This will be shown only when show is false
    </Vp>
    ...
  </>;
}
```

### useVRef

The useVRef hooks is like the `ref` function in vue:

```jsx
import { Vp, useVRef } from 'react-plus-vue';
import { useStaet } from 'react';

export default function MyReactVueComponent() {
  const show = useVRef(true);

  /*
  you can set 'show' just like in vue:
  show.value = false

  or, if the value that you are changing it to
  depends on the current value, then it's
  recommended to use the function version:

  show.value = val => !val
  */

  return (
    <>
      <Vp vIf={show.value}>This will be shown only when show.value is true</Vp>
      <Vp vIfn={show.value}>
        This will be shown only when show.value is false
      </Vp>
      ...
    </>
  );
}
```

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the [GitHub repository](https://github.com/mendlero/react-plus-vue). Contributions are welcome!

## License

This package is licensed under the MIT License. See the [LICENSE](https://github.com/mendlero/react-plus-vue/blob/main/LICENSE) file for details.

## Implemented Features of vue

- v-if (as vIf)
- shllowRef() (as useVShallowRef)

## Extra features

- vIfn: like vIf but it renders only when then condition is false

## Future plans

- store (vuex)
- ref() (as useVRef)
