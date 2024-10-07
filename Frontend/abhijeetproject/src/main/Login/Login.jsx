import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // SweetAlert for notifications
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice'; // Import the setCredentials action
import './Login.css';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user', // default role is user
  });

  const [isChecked, setIsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      Swal.fire({
        icon: 'error',
        title: 'Agreement Error',
        text: 'Please agree to the terms of use & privacy policy.',
      });
      return;
    }

    if (!formData.email || !formData.password) {
      Swal.fire({
        icon: 'error',
        title: 'Empty Fields',
        text: 'Please fill in both email and password fields.',
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Email Error',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`http://localhost:5000/api/auth/${formData.role}-login`, formData);

      if (response.data.token) {
        // Dispatch setCredentials action with user data
        dispatch(setCredentials({
          token: response.data.token,
          user: { name: response.data.name, email: response.data.email, role: formData.role },
        }));

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: `Logged in as ${formData.role}!`,
        });

        // Navigate based on the role
        if (formData.role === 'admin') {
          navigate('/admin/dashboard');
        } 
        else if (formData.role === 'event-owner') {
          navigate('/eventowner/dashboard');
        } else {
          navigate('/user/dashboard'); // Redirect to home for users
        }
      } else {
        Swal.fire({
          icon: 'error', 
          title: 'Login Failed',
          text: 'Invalid email or password.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: 'An error occurred while trying to log in. Please try again later.',
      });
      console.error('Error logging in:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Email Address"
          />
          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="eye-button"
              onClick={togglePasswordVisibility}
              aria-label={passwordVisible ? 'Hide Password' : 'Show Password'}
            >
              {passwordVisible ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>

          {/* Role selection dropdown */}
          <div className="loginsignup-role">
            <label htmlFor="role">Select Role:</label>
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="event-owner">Event Owner</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="loginsignup-agree">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="agree">
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>

          <button type="submit" disabled={!isChecked || loading}>
            {loading ? 'Loading...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
