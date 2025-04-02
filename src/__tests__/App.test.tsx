import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Routing', () => {
  it('renders the navigation links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('renders the LoginPage on /login route', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /login page/i })).toBeInTheDocument();
  });

  it('renders the OnboardingIntro on /onboarding route', () => {
    render(
      <MemoryRouter initialEntries={['/onboarding']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /onboarding intro/i })).toBeInTheDocument();
  });

  it('renders the LandingPage on unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/something-else']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/workplace recognition/i)).toBeInTheDocument();
  });
});
