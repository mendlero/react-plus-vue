## useVRef and useVShallowRef

The `useVRef` and `useVShallowRef` hooks are like vue's `ref()` function exept they are not deeply reactive and if you pass the as prop like this:

```jsx
function MyComponent() {
  const name = useVRef('Liam');

  return <OtheComponent>{name}</OtheComponent>;
}
```

And then you change the valur in the component, it will not update in `OtherComponent`
