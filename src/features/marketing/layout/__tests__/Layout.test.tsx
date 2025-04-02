import { screen } from '@testing-library/react';
import MarketingLayout from '../Layout';
import { renderWithRouter } from '@/test/utils';

describe('MarketingLayout', () => {
  it('renders the header and footer', () => {
    renderWithRouter(
      <MarketingLayout>
        <div>Test Content</div>
      </MarketingLayout>,
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders child content', () => {
    renderWithRouter(
      <MarketingLayout>
        <h1>Welcome to Kansha</h1>
      </MarketingLayout>,
    );

    expect(screen.getByText(/welcome to kansha/i)).toBeInTheDocument();
  });

  it('has semantic layout structure', () => {
    renderWithRouter(
      <MarketingLayout>
        <p>Page body</p>
      </MarketingLayout>,
    );

    const header = screen.getByRole('banner');
    const footer = screen.getByRole('contentinfo');
    const main = header.parentElement?.querySelector('main');

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(main).toContainElement(screen.getByText(/page body/i));
  });
});
