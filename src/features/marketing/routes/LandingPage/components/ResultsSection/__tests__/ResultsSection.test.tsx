// ResultsSection.test.tsx

import { screen } from '@testing-library/react';
import ResultsSection from '../ResultsSection';
import { renderWithRouter } from '@/test/utils'; // ad
describe('ResultsSection', () => {
  it('renders the heading and subtitle', () => {
    renderWithRouter(<ResultsSection />);
    expect(screen.getByRole('heading', { name: /results you can/i })).toBeInTheDocument();

    expect(screen.getByText(/see/i)).toBeInTheDocument();
    expect(screen.getByText(/watch it work for you\./i)).toBeInTheDocument();
  });

  it('renders all three result cards', () => {
    renderWithRouter(<ResultsSection />);
    expect(
      screen.getByAltText(/four smiling employees have an engaging team meeting/i),
    ).toBeInTheDocument();
    expect(screen.getByAltText(/four employees do a group high five/i)).toBeInTheDocument();
    expect(
      screen.getByAltText(/desktop computer with a plant and a cup of coffee/i),
    ).toBeInTheDocument();
  });

  it('renders the correct text under each card', () => {
    renderWithRouter(<ResultsSection />);
    expect(
      screen.getByText(/get employees in touch with your organization's values\./i),
    ).toBeInTheDocument();
    expect(screen.getByText(/reduce voluntary turnover\./i)).toBeInTheDocument();
    expect(
      screen.getByText(/improve productivity, engagement, and innovation\./i),
    ).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    renderWithRouter(<ResultsSection />);
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });
});
