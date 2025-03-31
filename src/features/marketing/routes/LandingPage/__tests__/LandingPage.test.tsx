import { render, screen } from '@testing-library/react';
import LandingPage from '../LandingPage';

describe('LandingPage', () => {
  it('renders the heading', () => {
    expect.hasAssertions();
    render(<LandingPage />);
    expect(
      screen.getByRole('heading', {
        name: /workplace recognition.*redefined/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the description paragraph', () => {
    render(<LandingPage />);
    expect.hasAssertions();
    expect(screen.getByText(/Kansha helps teams build a culture of praise/i)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    expect.hasAssertions();
    const { getByRole } = render(<LandingPage />);
    const button = getByRole('button', { name: /join today/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-black');
  });
});
