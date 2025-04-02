import { render } from '@testing-library/react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';

export function renderWithRouter(ui: React.ReactElement, routerProps?: MemoryRouterProps) {
  return render(<MemoryRouter {...routerProps}>{ui}</MemoryRouter>);
}
