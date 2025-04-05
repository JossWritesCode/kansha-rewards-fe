import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

interface RenderWithRouterOptions {
  route?: string;
}

export function renderWithRouter(
  ui: React.ReactNode,
  { route = '/' }: RenderWithRouterOptions = {},
) {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
}

export function svgParent(container: HTMLElement) {
  const svg = container.querySelector('svg');
  if (!svg || !svg.parentElement) {
    throw new Error('SVG or parent element not found');
  }
  return svg.parentElement;
}
