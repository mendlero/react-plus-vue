import { renderHook, render, fireEvent, act } from '@testing-library/react';
import useVRef from '../../../hooks/useVRef';
import { describe, expect, it } from 'vitest';

describe('useShallowVRef integration test', () => {
  it('could be passed as props', () => {
    const { result } = renderHook(useVRef, {
      initialProps: 1,
    });

    const component = ({
      value,
    }: {
      value: ReturnType<typeof useVRef<number>>;
    }) => {
      return <button>{value.value}</button>;
    };

    const { getByRole } = render(component({ value: result.current }));
    const button = getByRole('button');
    expect(button.innerHTML).toBe('1');
  });

  it(`is not reactive when passed as props (outside value change => component's value change)`, () => {
    const { result } = renderHook(useVRef, {
      initialProps: 1,
    });

    const component = ({
      value,
    }: {
      value: ReturnType<typeof useVRef<number>>;
    }) => {
      return <button>{value.value}</button>;
    };

    const { getByRole } = render(component({ value: result.current }));

    act(() => {
      result.current.value = 2;
    });

    const button = getByRole('button');
    expect(button.innerHTML).toBe('1');
  });

  it(`is reactive when passed as props (component's value change => outside value change)`, () => {
    const { result } = renderHook(useVRef<number>, { initialProps: 1 });

    const component = ({
      value,
    }: {
      value: ReturnType<typeof useVRef<number>>;
    }) => {
      return (
        <button
          onClick={() => {
            value.value = val => val + 1;
          }}
        >
          Hi
        </button>
      );
    };

    const { getByRole } = render(component({ value: result.current }));

    const button = getByRole('button');
    fireEvent.click(button);

    expect(result.current.value).toBe(2);
  });
});
