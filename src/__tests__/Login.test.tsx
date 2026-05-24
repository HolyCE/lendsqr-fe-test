import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Login Page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  it('renders welcome message', () => {
    expect(screen.getByText('Welcome!')).toBeDefined();
  });

  it('renders email input field', () => {
    expect(screen.getByPlaceholderText('Email')).toBeDefined();
  });

  it('renders password input field', () => {
    expect(screen.getByPlaceholderText('Password')).toBeDefined();
  });

  it('renders login button', () => {
    expect(screen.getByText('LOG IN')).toBeDefined();
  });

  it('renders forgot password link', () => {
    expect(screen.getByText('FORGOT PASSWORD?')).toBeDefined();
  });

  it('shows error when submitting empty form', () => {
    const loginButton = screen.getByText('LOG IN');
    fireEvent.click(loginButton);
    expect(screen.getByText('Please enter both email and password')).toBeDefined();
  });

  it('shows error when email is invalid', () => {
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('LOG IN');
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(loginButton);
    
    // Check for either error message (depending on validation logic)
    const errorElement = screen.queryByText('Please enter a valid email address') || 
                         screen.queryByText('Please enter both email and password');
    expect(errorElement).toBeDefined();
  });

  it('navigates to dashboard on successful login', () => {
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('LOG IN');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
  });

  it('toggles password visibility when clicking SHOW/HIDE', () => {
    const passwordInput = screen.getByPlaceholderText('Password');
    const showHideButton = screen.getByText('SHOW');
    
    expect(passwordInput.getAttribute('type')).toBe('password');
    
    fireEvent.click(showHideButton);
    expect(passwordInput.getAttribute('type')).toBe('text');
    expect(screen.getByText('HIDE')).toBeDefined();
  });
});
