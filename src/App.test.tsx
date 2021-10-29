import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders untagged section', () => {
  render(<App />);
  const elementTitle = screen.getByText(/Untagged section/i);
  expect(elementTitle).toBeInTheDocument();
});
