import { render, screen } from '@testing-library/react';
import ResultCard from '../ResultCard';

describe('ResultCard', () => {
  const props = {
    src: 'test-image.jpg',
    alt: 'Test Image',
    text: 'This is a test caption.',
  };

  it('renders the image with correct src and alt', () => {
    render(<ResultCard {...props} />);
    const image = screen.getByAltText(/test image/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('renders the text below the image', () => {
    render(<ResultCard {...props} />);
    expect(screen.getByText(/this is a test caption\./i)).toBeInTheDocument();
  });
});
