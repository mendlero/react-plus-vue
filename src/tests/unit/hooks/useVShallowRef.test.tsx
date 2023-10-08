import { act, renderHook } from '@testing-library/react';
import useVShallowRef from '../../../hooks/useVShallowRef';
import { describe, expect, it } from 'vitest';

describe('useVShallowRef test', () => {
  it('should get the initial state after initializing', () => {
    const { result } = renderHook(useVShallowRef, {
      initialProps: '',
    });

    expect(result.current.value).toBe('');
  });

  it('is able to assign value correctly', () => {
    const { result } = renderHook(useVShallowRef, {
      initialProps: 1,
    });

    act(() => {
      result.current.value = 2;
    });

    expect(result.current.value).toBe(2);
  });

  it('updates the value correctly when assigning to a function', () => {
    const { result } = renderHook(useVShallowRef, {
      initialProps: 3,
    });

    act(() => {
      result.current.value = value => value * 2;
    });

    expect(result.current.value).toBe(6);
  });

  it('is not deeply reactive', () => {
    const { result } = renderHook(useVShallowRef, {
      initialProps: { num: 3 },
    });

    act(() => {
      result.current.value.num = 6;
    });

    expect(result.current.value.num).not.toBe('6');
  });
});
