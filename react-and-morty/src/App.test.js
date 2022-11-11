import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
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
  fireEvent.click(screen.getByRole('button', {name: /characters/i}))
  
  // Wait for page to update with query text
  render(<Characters/>)
  const items = await screen.findAllByText(/name:/i)
  // const items = await screen.getByRole(img, {name: /cardImg/i})
  
  await expect(items).toHaveLength(20)
  

})

