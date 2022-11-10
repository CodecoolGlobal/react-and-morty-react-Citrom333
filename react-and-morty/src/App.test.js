import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/characters/i);
  expect(linkElement).toBeInTheDocument();
});
