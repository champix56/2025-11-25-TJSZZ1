import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexW3rdGrow from './FlexW3rdGrow';

describe('<FlexW3rdGrow />', () => {
  test('it should mount', () => {
    render(<FlexW3rdGrow />);

    const flexW3rdGrow = screen.getByTestId('FlexW3rdGrow');

    expect(flexW3rdGrow).toBeInTheDocument();
  });
});