import React from 'react';
import { render } from '@testing-library/react';
import { Vbutton } from '../../jsx';
import { expect, describe, it, test } from 'vitest';

describe('jsx test', () => {
  it('renders the correct tag', () => {
    const { getByRole } = render(<Vbutton />);
    const button = getByRole('button');
    expect(button).not.toBeNull();
  });

  test('vIfn prop', () => {
    const { queryByRole, rerender } = render(<Vbutton vIf />);
    const button = queryByRole('button');
    expect(button).not.toBeNull();

    rerender(<Vbutton vIf={false} />);
    const button2 = queryByRole('button');
    expect(button2).toBeNull();
  });

  test('vIfn prop', () => {
    const { queryByRole, rerender } = render(<Vbutton vIfn />);
    const button = queryByRole('button');
    expect(button).toBeNull();

    rerender(<Vbutton vIfn={false} />);
    const button2 = queryByRole('button');
    expect(button2).not.toBeNull();
  });

  test('combine vIfn and vIfn', () => {
    const { queryByRole, rerender } = render(<Vbutton vIf vIfn />);
    const button = queryByRole('button');
    expect(button).toBeNull();

    rerender(<Vbutton vIf vIfn={false} />);
    const button2 = queryByRole('button');
    expect(button2).not.toBeNull();

    rerender(<Vbutton vIf={false} vIfn />);
    const button3 = queryByRole('button');
    expect(button3).toBeNull();

    rerender(<Vbutton vIf={false} vIfn={false} />);
    const button4 = queryByRole('button');
    expect(button4).toBeNull();
  });
});
