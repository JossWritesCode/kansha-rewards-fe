import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '@/test/utils';

describe('App Routing', () => {
  it('renders the LoginPage when visiting /login', () => {
    renderWithRouter(<App />, { route: '/login' });
    expect(screen.getByRole('heading', { name: /login page/i })).toBeInTheDocument();
  });

  it('renders the OnboardingIntro when visiting /onboarding', () => {
    renderWithRouter(<App />, { route: '/onboarding' });
    expect(screen.getByRole('heading', { name: /onboarding intro/i })).toBeInTheDocument();
  });

  it('renders the DashboardLayout when visiting /dashboard', () => {
    renderWithRouter(<App />, { route: '/dashboard' });
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument(); // adjust based on DashboardLayout content
  });

  it('renders the LandingPage for unknown routes', () => {
    renderWithRouter(<App />, { route: '/something-random' });
    expect(screen.getByText(/workplace recognition/i)).toBeInTheDocument();
  });
});
