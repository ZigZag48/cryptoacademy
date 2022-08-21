import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders coming soon page', () => {
  render(<App />);
  const comingSoonText = screen.getByText(/coming soon/i);
  const logo = screen.getByTestId('logo');
  expect(comingSoonText).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
