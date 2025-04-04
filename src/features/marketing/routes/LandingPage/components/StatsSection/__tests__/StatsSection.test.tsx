import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/test/utils';
import StatsSection from '../StatsSection';

describe('StatsSection', () => {
  it('renders the section heading', () => {
    renderWithRouter(<StatsSection />);
    const heading = screen.getByRole('heading', { name: /did you know/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the description text', () => {
    renderWithRouter(<StatsSection />);
    const description = screen.getByText(
      /companies with robust employee recognition programs are known to have 31% lower voluntary turnover/i,
    );
    expect(description).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    renderWithRouter(<StatsSection />);
    const button = screen.getByRole('button', { name: /get started/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the admin dashboard image', () => {
    renderWithRouter(<StatsSection />);
    const image = screen.getByAltText(/admin dashboard showing analytics/i);
    expect(image).toBeInTheDocument();
  });
});
