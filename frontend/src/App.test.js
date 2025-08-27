import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main title of the application', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /Recomendador de Produtos RD Station/i });
  expect(titleElement).toBeInTheDocument();
});
