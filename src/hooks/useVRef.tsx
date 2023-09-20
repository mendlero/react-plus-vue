import { useState, SetStateAction } from 'react';

/**
 *
 * @param initialState the initial state of the ref
 * @description a wrapper around useState to make it like ref() in vue
 */ 
function useVRef<T>(initialState: T) {
  const [refValue, setRefValue] = useState<T>(initialState);

  return {
    __intenalValue: refValue,
    get value(): T {
      return this.__intenalValue;
    },

    set value(v: SetStateAction<T>) {
      setRefValue(v);
    },
  };
}

export default useVRef;
