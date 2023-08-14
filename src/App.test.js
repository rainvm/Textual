import { render, screen } from '@testing-library/react';
import Pulse from './App';

test('renders learn react link', () => {
  render(<Pulse />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
