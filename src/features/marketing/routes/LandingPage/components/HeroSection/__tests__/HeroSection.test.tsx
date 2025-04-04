import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';
import { renderWithRouter } from '@/test/utils'; // ad

describe('HeroSection', () => {
  it('renders the main heading', () => {
    renderWithRouter(<HeroSection />);
    const heading = screen.getByRole('heading', { name: /workplace recognition/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    renderWithRouter(<HeroSection />);
    const subheading = screen.getByRole('heading', { name: /redefined/i });
    expect(subheading).toBeInTheDocument();
  });

  it('renders the description text', () => {
    renderWithRouter(<HeroSection />);
    const paragraph = screen.getByText(/making it easy to recognize your teams/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the call-to-action button', () => {
    renderWithRouter(<HeroSection />);
    const button = screen.getByRole('button', { name: /join today/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the hero image with correct alt text', () => {
    renderWithRouter(<HeroSection />);
    const image = screen.getByAltText(/happy team celebrating/i);
    expect(image).toBeInTheDocument();
    expect(image.tagName.toLowerCase()).toBe('img');
  });
});
