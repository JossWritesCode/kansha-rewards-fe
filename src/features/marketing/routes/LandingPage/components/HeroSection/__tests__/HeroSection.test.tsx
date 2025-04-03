import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />);
    const heading = screen.getByRole('heading', { name: /workplace recognition/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<HeroSection />);
    const subheading = screen.getByRole('heading', { name: /redefined/i });
    expect(subheading).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<HeroSection />);
    const paragraph = screen.getByText(/making it easy to recognize your teams/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the call-to-action button', () => {
    render(<HeroSection />);
    const button = screen.getByRole('button', { name: /join today/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the hero image with correct alt text', () => {
    render(<HeroSection />);
    const image = screen.getByAltText(/happy team celebrating/i);
    expect(image).toBeInTheDocument();
    expect(image.tagName.toLowerCase()).toBe('img');
  });
});
