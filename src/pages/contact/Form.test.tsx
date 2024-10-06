import { expect, test, describe, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import Form from './Form';

/*
 * Vitest locators reference:
 * https://vitest.dev/guide/browser/locators
 */

describe('Form Component', async () => {
  test('renders the form correctly', async () => {
    const screen = render(<Form />);

    // Debug the rendered component
    // screen.debug();

    //Check for labels
    await expect.element(screen.getByLabelText(/Full/i)).toBeInTheDocument();
    await expect.element(screen.getByLabelText(/email/i)).toBeInTheDocument();
    await expect.element(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    await expect.element(screen.getByLabelText(/message/i)).toBeInTheDocument();

    // Check for the submit button
    await expect.element(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('shows validation messages on submitting empty form', async () => {
    const screen = render(<Form />);

    // Trigger form submission
    await screen.getByRole('button', { name: /submit/i }).click();

    // Check for error messages
    await expect.element(screen.getByText(/please enter your full name/i)).toBeInTheDocument();
    await expect.element(screen.getByText(/please enter your email address/i)).toBeInTheDocument();
    await expect.element(screen.getByText(/please enter the subject/i)).toBeInTheDocument();
    await expect.element(screen.getByText(/please enter your message/i)).toBeInTheDocument();
  });

  test('validates email format', async () => {
    const screen = render(<Form />);

    await screen.getByLabelText(/Email/i).fill('foo');

    await screen.getByRole('button', { name: 'Submit' }).click();

    await expect.element(screen.getByText('Please type a valid email')).toBeVisible();
  });

  test('submits form with valid data', async () => {
    // Mock the console.log to test form submission
    const consoleSpy = vi.spyOn(console, 'log');

    const screen = render(<Form />);

    // Fill in the form fields with valid data
    await screen.getByLabelText(/Full/i).fill('Harry Smith');
    await screen.getByLabelText(/Email/i).fill('harry@fake.com');
    await screen.getByLabelText(/subject/i).fill('Fake subject test');
    await screen.getByLabelText(/message/i).fill('Fake message test.');

    // Trigger form submission
    await screen.getByRole('button', { name: 'Submit' }).click();

    // Ensure console.log has been called with the correct data
    await vi.waitFor(() => expect(consoleSpy).toHaveBeenCalledTimes(1));

    expect(consoleSpy).toHaveBeenCalledWith({
      fullName: 'Harry Smith',
      email: 'harry@fake.com',
      subject: 'Fake subject test',
      message: 'Fake message test.',
    });

    // Clean up the console log mock
    consoleSpy.mockRestore();
  });
});
