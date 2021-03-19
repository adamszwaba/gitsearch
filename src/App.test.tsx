import React from 'react';
import { findByText, fireEvent, screen } from '@testing-library/react';
import { render } from './test-utils';
import { MyApp } from './App';

describe('properly tested app', () => {
  render(<MyApp />);

  const searchBar = screen.getByRole('input');
  const button = screen.getByRole('button');
  it('renders search bar and button', () => {
    expect(searchBar).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it('would have tested form behaviour', async () => {
    fireEvent.change(searchBar, { target: { value: 'adamszwaba' } });
    expect(searchBar.value).toBe('adamszwaba');
    fireEvent.click(button);
    await screen.findByText('Adam Szwaba');
    const results = screen.findAllByTestId('result');
    expect(results).toHaveLength(3);
  });
});
