import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexHFirstGrow from './FlexHFirstGrow';

describe('<FlexHFirstGrow />', () => {
  test('it should mount', () => {
    render(<FlexHFirstGrow />);

    const flexHFirstGrow = screen.getByTestId('FlexHFirstGrow');

    expect(flexHFirstGrow).toBeInTheDocument();
  });
});