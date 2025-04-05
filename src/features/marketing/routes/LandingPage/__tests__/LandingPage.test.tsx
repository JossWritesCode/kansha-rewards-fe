import { renderWithRouter } from '@/test/utils';
import { screen } from '@testing-library/react';
import LandingPage from '../LandingPage';

describe('LandingPage', () => {
  it('renders the hero section content', () => {
    renderWithRouter(<LandingPage />);

    expect(screen.getByRole('heading', { name: /workplace recognition/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /redefined/i })).toBeInTheDocument();
    expect(
      screen.getByText(
        /making it easy to recognize your teams with rewards and personalized messages/i,
      ),
    ).toBeInTheDocument();
  });

  it('renders the call to action button', () => {
    renderWithRouter(<LandingPage />);
    const button = screen.getByRole('button', { name: /join today/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the hero image', () => {
    renderWithRouter(<LandingPage />);
    const img = screen.getByAltText(/happy team celebrating/i);
    expect(img).toBeInTheDocument();
    expect(img.tagName.toLowerCase()).toBe('img');
    expect(img).toHaveAttribute('src', expect.stringContaining('heroImage'));
  });
});
