import React from 'react';
import { render, waitFor, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './App';
import Characters from "./components/Characters";
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


test('loads cards', async () => {
  const { getByText } = render(<App />);
  // Click button
  userEvent.click(screen.getByRole('button', {name: /characters/i}))
  
  // Wait for page to update with query text
 await waitFor(() => {
    const items = screen.getAllByText(/name:/i)
    console.log(items)
    expect(items).toHaveLength(20)

  }, {timeout: 5000})
  
  // const items = await screen.getByRole(img, {name: /cardImg/i})
  

})

