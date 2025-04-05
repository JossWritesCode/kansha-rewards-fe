import { screen, within } from '@testing-library/react';
import Footer from '../Footer';
import { renderWithRouter } from '@/test/utils';

describe('Footer', () => {
  it('renders the logo image with correct alt text', () => {
    renderWithRouter(<Footer />);
    const logo = screen.getByAltText(/kansha logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo.tagName.toLowerCase()).toBe('img');
  });

  it('renders the Kansha brand name linking to home', () => {
    renderWithRouter(<Footer />);
    const brandLink = screen.getByRole('link', { name: /kansha/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('renders the copyright text with the current year', () => {
    renderWithRouter(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(`© Kansha. ${year}. We love our users!`)).toBeInTheDocument();
  });

  it('renders the Footer login link correctly', () => {
    renderWithRouter(<Footer />);

    const footer = screen.getByRole('contentinfo'); // <footer> uses role="contentinfo" by default
    expect(footer).toBeInTheDocument();

    const loginLink = within(footer).getByRole('link', { name: /login/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  it('renders the nav with accessible name "Footer navigation"', () => {
    renderWithRouter(<Footer />);
    const nav = screen.getByRole('navigation', { name: /footer navigation/i });
    expect(nav).toBeInTheDocument();
  });
});
