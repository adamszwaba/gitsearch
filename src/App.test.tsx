import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import { MyApp } from './App';

test('renders learn react link', () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/learn chakra/i);
  expect(linkElement).toBeInTheDocument();
});
