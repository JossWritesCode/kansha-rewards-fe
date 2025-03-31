import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders the copyright text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${currentYear} Kansha. All rights reserved.`, 'i')),
    ).toBeInTheDocument();
  });

  it('renders the Privacy, Terms, and Contact links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /privacy/i })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: /terms/i })).toHaveAttribute('href', '/terms');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact');
  });

  it('uses semantic <footer> tag', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Kansha/i).closest('footer');
    expect(footerElement).not.toBeNull();
  });
});
