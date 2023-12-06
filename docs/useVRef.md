## useVRef and useVShallowRef

The `useVRef` and `useVShallowRef` hooks are like vue's `ref()` function exept they are not deeply reactive and if you pass them as prop like this:

```jsx
function MyComponent() {
  const name = useVRef('Liam');

  return <OtheComponent>{name}</OtheComponent>;
}
```

And then you change the value in `MyComponent`, it will not update in `OtherComponent`, see [the tests](../packages/react-plus-vue/src/tests/integration/hooks/useVRef.test.tsx) for more details
