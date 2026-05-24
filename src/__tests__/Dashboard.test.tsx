import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

// Mock localStorage
const mockLocalStorage = {
  getItem: vi.fn(() => 'true'),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Dashboard Page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
  });

  it('renders page title (h1 element)', () => {
    // Look for h1 with class page-title instead of just text
    const pageTitle = document.querySelector('.page-title');
    expect(pageTitle).toBeDefined();
    expect(pageTitle?.textContent).toBe('Users');
  });

  it('renders USERS stat card', () => {
    expect(screen.getByText('USERS')).toBeDefined();
  });

  it('renders ACTIVE USERS stat card', () => {
    expect(screen.getByText('ACTIVE USERS')).toBeDefined();
  });

  it('renders USERS WITH LOANS stat card', () => {
    expect(screen.getByText('USERS WITH LOANS')).toBeDefined();
  });

  it('renders USERS WITH SAVINGS stat card', () => {
    expect(screen.getByText('USERS WITH SAVINGS')).toBeDefined();
  });
});
