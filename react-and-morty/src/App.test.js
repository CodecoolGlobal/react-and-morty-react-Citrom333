import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('renders landing page', () => {
  const { getByRole, getByText } = render(<App />);
 
  const charButtonElement = getByRole('button', {name: /characters/i});
  expect(charButtonElement).toBeInTheDocument();

  const locButtonElement = getByRole('button', {name: /locations/i});
  expect(locButtonElement).toBeInTheDocument();

  const logoElement = getByRole('img', {name: /logo/i});
  expect(logoElement).toBeInTheDocument();

  const greetingElement = getByText(/multiverse/i);
  expect(greetingElement).toBeInTheDocument();

});
