import { render, screen } from '@testing-library/react';
import Layout from '../Layout';
import { renderWithRouter } from '@/test/utils';
describe('Layout', () => {
  it('renders the Header component', () => {
    renderWithRouter(
      <Layout>
        <p>Test content</p>
      </Layout>,
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    renderWithRouter(
      <Layout>
        <p>Test content</p>
      </Layout>,
    );
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders children inside the main content area', () => {
    renderWithRouter(
      <Layout>
        <p>Test content</p>
      </Layout>,
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
