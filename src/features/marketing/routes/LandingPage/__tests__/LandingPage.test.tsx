import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../LandingPage';
import React from 'react';

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('LandingPage', () => {
  it('renders the heading', () => {
    expect.hasAssertions();
    renderWithRouter(<LandingPage />);
    expect(
      screen.getByRole('heading', {
        name: /workplace recognition.*redefined/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the description paragraph', () => {
    renderWithRouter(<LandingPage />);
    expect.hasAssertions();
    expect(screen.getByText(/Kansha helps teams build a culture of praise/i)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    expect.hasAssertions();
    const { getByRole } = renderWithRouter(<LandingPage />);
    const button = getByRole('button', { name: /join today/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-black');
  });
});
