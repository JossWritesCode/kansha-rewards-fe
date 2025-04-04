import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CTAButton from '../CTAButton';
import { renderWithRouter } from '@/test/utils'; // adjust import if needed

describe('CTAButton', () => {
  it('renders the button with provided text', () => {
    renderWithRouter(<CTAButton text="Join today" />);
    const button = screen.getByRole('button', { name: /join today/i });
    expect(button).toBeInTheDocument();
  });

  it('accepts a custom "to" path', async () => {
    const user = userEvent.setup();
    renderWithRouter(<CTAButton text="Get started" to="/signup" />);

    const button = screen.getByRole('button', { name: /get started/i });

    await user.click(button);

    expect(button).toBeEnabled();
  });
});
