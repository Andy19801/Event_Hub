import React, { useState } from 'react';
import './Order.css';

const Order = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    email: '',
    eventType: '',
    numberOfAttendees: '',
    organiserType: '',
    message: '',
    receiveUpdates: false,
  });

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server or show a confirmation message
    console.log('Form data submitted:', formData);
    alert('Order submitted successfully!'); // Placeholder for success feedback
  };

  return (
    <div className="order-page">
      <h1>Book Now</h1>
      <p>Submit your details below to tell us a bit more about yourself and the event you're organising.</p>
      
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="inputBox">
          <label>
            Name (First and Last):<br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {/* Telephone Input */}
        <div className="inputBox">
          <label>
            Telephone:<br />
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {/* Email Input */}
        <div className="inputBox">
          <label>
            Email Address:<br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {/* Event Type Dropdown */}
        <div className="inputBox">
          <label>
            Event Type:<br />
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              {/* <option value="Conference">Conference</option>
              <option value="Exhibition">Exhibition</option>
              <option value="Christmas Party">Christmas Party</option>
              <option value="New Year Celebration">New Year Celebration</option>
              <option value="Annual Grand Meeting">Annual Grand Meeting</option>
              <option value="Award Ceremony">Award Ceremony</option>
              <option value="Live Entertainment">Live Entertainment</option> */}
              <option value="Seminar">Seminar</option>
              <option value="Workshop">Workshop</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Others">Others</option>
            </select>
          </label>
        </div>

        {/* Number of Attendees Dropdown */}
        <div className="inputBox">
          <label>
            Number of Attendees:<br />
            <select
              name="numberOfAttendees"
              value={formData.numberOfAttendees}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="1-50">1-50</option>
              <option value="50-100">50-100</option>
              <option value="100-250+">100-250+</option>
              {/* <option value="250-500">250-500</option>
              <option value="500-1000">500-1000</option>
              <option value="1000+">1000+</option> */}
            </select>
          </label>
        </div>

        {/* Organiser Type Dropdown */}
        <div className="inputBox">
          <label>
            Organiser Type:<br />
            <select
              name="organiserType"
              value={formData.organiserType}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              {/* <option value="Agency">Agency</option>
              <option value="Ambassador">Ambassador</option>
              <option value="Association">Association</option>
              <option value="Charity Not For Profit">Charity Not For Profit</option> */}
              <option value="Corporate">Corporate</option>
              <option value="Government">Government</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        {/* Order Message Text Area */}
        <div className="inputBox">
          <label>
            Your Order:<br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please add your message (optional)"
            />
          </label>
        </div>

        {/* Receive Updates Checkbox */}
        <div className="inputBox">
          <label>
            <input
              type="checkbox"
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleChange}
            />
            I would like to receive updates from Event HUB.
          </label>
        </div>

        {/* Submit Button */}
        <div className="inputBox">
          <button type="submit" className="submit-btn">Send Order</button>
        </div>

        {/* Terms and Conditions */}
        <p>By submitting this form, you agree to the Terms & Conditions and Privacy Policy.</p>
      </form>
    </div>
  );
};

export default Order;
