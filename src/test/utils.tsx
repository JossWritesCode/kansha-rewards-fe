import { render } from '@testing-library/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';

export function renderWithRouter(ui: React.ReactElement, routerProps?: MemoryRouterProps) {
  return render(<MemoryRouter {...routerProps}>{ui}</MemoryRouter>);
}

export function svgParent(container: HTMLElement) {
  const svg = container.querySelector('svg');
  if (!svg || !svg.parentElement) {
    throw new Error('SVG or parent element not found');
  }
  return svg.parentElement;
}
