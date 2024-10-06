// components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import logo2 from '../../asserts/logo1.png'; // Corrected path to assets
import { logout } from '../../features/auth/authSlice';


const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user); // Assuming user data is in the auth state
  const isLoggedIn = !!token;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo2} alt="Event Hub Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/ourservice">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Link to="/order" className="order-btn">
        <button className="order-btn">
          Book Now
          <div className="icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#7b52b9" />
            </svg>
          </div>
        </button>
      </Link>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">
                Login
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </Link>
            <Link to="/signin">
              <button className="signin-btn">
                Sign In
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
