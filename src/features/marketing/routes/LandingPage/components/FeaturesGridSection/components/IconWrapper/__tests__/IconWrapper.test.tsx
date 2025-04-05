import { render } from '@testing-library/react';
import { Gift } from 'lucide-react';
import IconWrapper from '../IconWrapper';
import { svgParent } from '@/test/utils';

describe('IconWrapper', () => {
  it('renders the provided icon', () => {
    const { container } = render(<IconWrapper Icon={Gift} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
