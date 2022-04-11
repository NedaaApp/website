import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Prayer Times Reminder App!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Prayer Times Reminder App!/i);
  expect(linkElement).toBeInTheDocument();
});
