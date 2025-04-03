import { screen } from '@testing-library/react';
import LandingPage from '../LandingPage';
import { renderWithRouter } from '@/test/utils';
describe('LandingPage', () => {
  it('renders the hero section headline', () => {
    renderWithRouter(<LandingPage />);
    expect(screen.getByText(/workplace recognition/i)).toBeInTheDocument();
    expect(screen.getByText(/redefined/i)).toBeInTheDocument();
  });

  it('renders the call to action button', () => {
    renderWithRouter(<LandingPage />);
    expect(screen.getByRole('button', { name: /join today/i })).toBeInTheDocument();
  });

  it('renders the hero image', () => {
    renderWithRouter(<LandingPage />);
    const img = screen.getByAltText(/happy team celebrating/i);
    expect(img).toBeInTheDocument();
    expect(img.tagName.toLowerCase()).toBe('img');
    expect(img).toHaveAttribute('src', expect.stringContaining('heroImage'));
  });
});
