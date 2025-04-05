import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/test/utils'; // or whatever your wrapper utility is
import FeaturesGridSection from '../FeaturesGridSection';

describe('FeaturesGridSection', () => {
  it('renders the main heading', () => {
    renderWithRouter(<FeaturesGridSection />);
    expect(
      screen.getByRole('heading', { name: /recognize, motivate and track accomplishments/i }),
    ).toBeInTheDocument();
  });

  it('renders all feature titles', () => {
    renderWithRouter(<FeaturesGridSection />);

    expect(screen.getByRole('heading', { name: /rewards/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /earn badges/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /workspace/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /leave a/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /admin access/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /activity/i })).toBeInTheDocument();
  });

  it('renders all feature descriptions', () => {
    renderWithRouter(<FeaturesGridSection />);

    expect(screen.getByText(/send your peers a gift card with a message/i)).toBeInTheDocument();
    expect(screen.getByText(/earn and send badges to your peers/i)).toBeInTheDocument();
    expect(screen.getByText(/connecting people in the same workspace/i)).toBeInTheDocument();
    expect(screen.getByText(/react to posts with your favorite emoji/i)).toBeInTheDocument();
    expect(screen.getByText(/only admin users have access/i)).toBeInTheDocument();
    expect(screen.getByText(/keep track of your recognitions/i)).toBeInTheDocument();
  });

  it('renders six feature items', () => {
    renderWithRouter(<FeaturesGridSection />);

    const featureTitles = screen.getAllByRole('heading', { level: 3 });
    expect(featureTitles.length).toBe(6);
  });
});
