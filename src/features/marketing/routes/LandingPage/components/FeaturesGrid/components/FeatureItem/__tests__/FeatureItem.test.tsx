import { render, screen } from '@testing-library/react';
import FeatureItem from '../FeatureItem';
import { Gift } from 'lucide-react';

describe('FeatureItem', () => {
  it('renders the icon', () => {
    render(
      <FeatureItem
        icon={<Gift data-testid="test-icon" />}
        title="Rewards"
        description="Send a gift"
      />,
    );

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<FeatureItem icon={<Gift />} title="Rewards" description="Send a gift" />);

    expect(screen.getByRole('heading', { name: /rewards/i })).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<FeatureItem icon={<Gift />} title="Rewards" description="Send a gift" />);

    expect(screen.getByText(/send a gift/i)).toBeInTheDocument();
  });
});
