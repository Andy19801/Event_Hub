import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock the checkAuthStatus function
jest.mock('./utils/auth', () => ({
  checkAuthStatus: jest.fn(() => Promise.resolve(false)) // Default is not logged in
}));

describe('App Component', () => {
  test('renders the Header and Home components by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // Check if Header is rendered
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  test('renders About page when navigating to "/about"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    // Simulate navigation to "/about"
    fireEvent.click(screen.getByText(/About/i));

    // Check if About page is rendered
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  test('redirects to Login page for protected route when not authenticated', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    // Simulate navigating to the protected /order route
    fireEvent.click(screen.getByText(/Order/i));

    // Check if redirected to Login
    expect(await screen.findByText(/Login/i)).toBeInTheDocument();
  });

  test('renders Signin page when navigating to "/signin"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    // Simulate navigation to "/signin"
    fireEvent.click(screen.getByText(/Signin/i));

    // Check if Signin page is rendered
    expect(screen.getByText(/Create an Account/i)).toBeInTheDocument();
  });

  test('renders Search Events page when navigating to "/search-events"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Simulate navigation to "/search-events"
    fireEvent.click(screen.getByText(/Search Events/i));

    // Check if Search Events page is rendered
    expect(screen.getByText(/Search for Events/i)).toBeInTheDocument();
  });

  test('renders My Bookings page when navigating to "/my-bookings"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Simulate navigation to "/my-bookings"
    fireEvent.click(screen.getByText(/My Bookings/i));

    // Check if My Bookings page is rendered
    expect(screen.getByText(/Your Bookings/i)).toBeInTheDocument();
  });

  test('renders My Profile page when navigating to "/my-profile"', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Simulate navigation to "/my-profile"
    fireEvent.click(screen.getByText(/My Profile/i));

    // Check if My Profile page is rendered
    expect(screen.getByText(/Update Profile/i)).toBeInTheDocument();
  });
});
