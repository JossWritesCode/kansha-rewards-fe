import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';
import React from 'react';

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

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

  it('renders the login button', () => {
    renderWithRouter(<Header />);
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  it('has semantic role of banner', () => {
    renderWithRouter(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
