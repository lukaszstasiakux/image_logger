import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders untagged pictures', () => {
  render(<App />);
  const elementTitle = screen.getByText(/Untagged pictures/i);
  expect(elementTitle).toBeInTheDocument();
});
