import { useState, SetStateAction } from 'react';

function useVShallowRef<T>(initialState: T) {
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

export default useVShallowRef;
