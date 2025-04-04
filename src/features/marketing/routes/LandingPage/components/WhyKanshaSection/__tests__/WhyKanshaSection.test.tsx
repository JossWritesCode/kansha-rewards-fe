import { render, screen } from '@testing-library/react';
import WhyKanshaSection from '../WhyKanshaSection';

describe('WhyKanshaSection', () => {
  it('renders the section heading', () => {
    render(<WhyKanshaSection />);
    const heading = screen.getByRole('heading', { name: /why kansha\?/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the section paragraph', () => {
    render(<WhyKanshaSection />);
    const paragraph = screen.getByText(
      /effective recognition builds an organizational culture of praise/i,
    );
    expect(paragraph).toBeInTheDocument();
  });

  it('renders a section tag', () => {
    const { container } = render(<WhyKanshaSection />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });
});
