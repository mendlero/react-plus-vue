import { useState, SetStateAction } from 'react';

function useVRef<T>(initialState: T) {
  const [refValue, setRefValue] = useState<T>(initialState);

  return {
    get value(): T {
      return refValue;
    },

    set value(v: SetStateAction<T>) {
      setRefValue(v);
    },
  };
}

export default useVRef;
