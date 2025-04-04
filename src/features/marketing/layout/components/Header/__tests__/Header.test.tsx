import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/test/utils';
import Header from '../Header';

describe('Header', () => {
  it('renders the logo image with alt text', () => {
    renderWithRouter(<Header />);
    const logo = screen.getByAltText(/kansha logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo.tagName.toLowerCase()).toBe('img');
  });

  it('renders the Kansha brand name as a link to the homepage', () => {
    renderWithRouter(<Header />);
    const brandLink = screen.getByRole('link', { name: /kansha/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('renders the login link', () => {
    renderWithRouter(<Header />);
    const loginLink = screen.getByRole('link', { name: /login/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  it('has semantic role of banner', () => {
    renderWithRouter(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
