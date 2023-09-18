import React from 'react';
import { JSXConsts } from '../constants';

export interface AdditionalReactVueComponentProps {
  vIf?: boolean;
}

export type ReactVueComponent<T> = (
  props: T & AdditionalReactVueComponentProps
) => React.ReactNode;

export function ReactVueComponentFactory<T>(
  originalComponent: (props: T) => React.ReactNode
): ReactVueComponent<T> {
  return function Component({
    vIf,
    ...restProps
  }: T & AdditionalReactVueComponentProps) {
    if (vIf === false) return JSXConsts.vIfFallback;

    return originalComponent(restProps as T);
  };
}

export function ReactVueComponentFromName<
  T extends keyof JSX.IntrinsicElements
>(element: T) {
  return ReactVueComponentFactory<React.HTMLProps<JSX.IntrinsicElements[T]>>(
    props => {
      return React.createElement(element, props);
    }
  );
}
