import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import { MyApp } from './App';

test('renders search bar and button', () => {
  render(<MyApp />);

  const searchBar = screen.getByRole('input');
  const button = screen.getByRole('button');
  expect(searchBar).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
