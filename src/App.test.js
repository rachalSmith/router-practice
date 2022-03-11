import { render, screen } from '@testing-library/react';
import { rest, setupServer } from 'msw/node';

import App from './App';


const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon?limit=20', (req, res, ctx) => {
    return res(
      ctx.json({ name: 'bulbasaur'})
    );
  })
)

beforeAll(() => server.listen());

afterAll(() => server.close());

test('fetches pokemon name', async () => {
  render(<App />);

  const name = await screen.getByText(/bulbasaur/i);
  expect(name).toBeInTheDocument();
});
