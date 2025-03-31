import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the header text', () => {
    render(<Header />);
    expect(screen.getByText(/Kansha Rewards/i)).toBeInTheDocument();
  });

  it('uses semantic <header> tag', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Kansha Rewards/i).closest('header');
    expect(headerElement).not.toBeNull();
  });
});
