// src/components/FeedbackList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './FeedbackList.css';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/feedback', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFeedbacks(response.data);
      } catch (err) {
        console.error('Error fetching feedback:', err);
        setError('Failed to load feedback. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="feedback-list-container">
      <h2>Feedback List</h2>

      {loading && <p>Loading feedback...</p>}
      {error && <p className="error-message">{error}</p>}

      <ul className="feedback-list">
        {feedbacks.map((feedback) => (
          <li key={feedback._id} className="feedback-item">
            <h3>Event: {feedback.eventName}</h3>
            <p>Feedback: {feedback.comments}</p>
            <p>Rating: {feedback.rating}</p>
            <p>Submitted by: {feedback.userName}</p>
            <p>Date: {new Date(feedback.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
