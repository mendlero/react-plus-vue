import { act, renderHook } from '@testing-library/react';
import useVRef from '../../../hooks/useVRef';
import { describe, expect, it } from 'vitest';

describe('useVRef test', () => {
  it('should get the initial state after initializing', () => {
    const { result } = renderHook(useVRef, {
      initialProps: '',
    });
    expect(result.current.value).toBe('');
  });

  it('is able to assign value correctly', () => {
    const { result } = renderHook(useVRef, {
      initialProps: 1,
    });

    act(() => {
      result.current.value = 2;
    });

    expect(result.current.value).toBe(2);
  });

  it('updates the value correctly when assigning to a function', () => {
    const { result } = renderHook(useVRef, {
      initialProps: 3,
    });

    act(() => {
      result.current.value = value => value * 2;
    });

    expect(result.current.value).toBe(6);
  });
});
