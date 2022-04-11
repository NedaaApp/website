import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nedaa', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nedaa/i);
  expect(linkElement).toBeInTheDocument();
});
