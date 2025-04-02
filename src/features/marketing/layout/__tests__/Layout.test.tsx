import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MarketingLayout from '../Layout';
import React from 'react';

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('MarketingLayout', () => {
  it('renders the header and footer', () => {
    renderWithRouter(
      <MarketingLayout>
        <div>Test Content</div>
      </MarketingLayout>,
    );

    expect(screen.getByRole('banner')).toBeInTheDocument(); // header
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // footer
  });

  it('renders child content', () => {
    renderWithRouter(
      <MarketingLayout>
        <h1>Welcome to Kansha</h1>
      </MarketingLayout>,
    );

    expect(screen.getByText(/welcome to kansha/i)).toBeInTheDocument();
  });

  it('has semantic layout structure', () => {
    renderWithRouter(
      <MarketingLayout>
        <p>Page body</p>
      </MarketingLayout>,
    );

    const header = screen.getByRole('banner');
    const footer = screen.getByRole('contentinfo');
    const main = header.parentElement?.querySelector('main');

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(main).toContainElement(screen.getByText(/page body/i));
  });
});
