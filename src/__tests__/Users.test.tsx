import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Users from '../pages/Users/Users';

// Mock the fetchUsers function
vi.mock('../services/api', () => ({
  fetchUsers: vi.fn(() => Promise.resolve([
    { id: '1', userName: 'testuser', email: 'test@test.com', phoneNumber: '08012345678', organization: 'Lendsqr', status: 'Active', dateJoined: '01/01/2024', balance: 1000, tier: 1, fullName: 'Test User', gender: 'Male', bvn: '1234567890', address: 'Test Address', currency: 'NGN' }
  ]))
}));

// Mock localStorage
const mockLocalStorage = {
  getItem: vi.fn(() => 'true'),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

describe('Users Page', () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    );
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText('Loading users...')).toBeNull();
    });
  });

  it('renders page title (h1 element)', () => {
    const pageTitle = document.querySelector('.page-title');
    expect(pageTitle).toBeDefined();
    expect(pageTitle?.textContent).toBe('Users');
  });

  it('renders search input', () => {
    expect(screen.getByPlaceholderText('Search by name, email, phone...')).toBeDefined();
  });

  it('renders organization filter', () => {
    expect(screen.getByText('All Organizations')).toBeDefined();
  });

  it('renders status filter', () => {
    expect(screen.getByText('All Status')).toBeDefined();
  });
});
