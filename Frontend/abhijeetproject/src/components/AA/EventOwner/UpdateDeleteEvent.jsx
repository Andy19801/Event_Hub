// src/components/EventOwner/EditEvent.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import './EditEvent.css';

const EditEvent = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState({ name: '', date: '', location: '', description: '' });
  const history = useHistory();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/events/${id}`); // API endpoint to fetch the event
        setEventData(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/events/${id}`, eventData); // API endpoint to update the event
      history.push('/eventowner/dashboard'); // Redirect to the dashboard after editing the event
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div className="edit-event">
      <h1>Edit Event</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Event Name" value={eventData.name} onChange={handleChange} required />
        <input type="date" name="date" value={eventData.date} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Event Location" value={eventData.location} onChange={handleChange} required />
        <textarea name="description" placeholder="Event Description" value={eventData.description} onChange={handleChange} required></textarea>
        <button type="submit" className="btn">Update Event</button>
      </form>
    </div>
  );
};

export default EditEvent;


// // src/components/EventOwner/EditEvent.jsx

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// // import './EditEvent.css';

// const EditEvent = () => {
//   const { eventId } = useParams(); // Retrieve event ID from the URL
//   const navigate = useNavigate();

//   // State to store the event data
//   const [eventData, setEventData] = useState({
//     name: '',
//     date: '',
//     location: '',
//     description: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Fetch existing event data to pre-fill the form
//   useEffect(() => {
//     const fetchEventData = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Assuming you're using JWT tokens

//         const response = await axios.get(`http://localhost:5000/api/event/${eventId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         // Pre-fill the form with existing event data
//         setEventData({
//           name: response.data.name,
//           date: response.data.date,
//           location: response.data.location,
//           description: response.data.description
//         });
//       } catch (err) {
//         console.error('Error fetching event data:', err);
//         setError('Failed to load event data.');
//       }
//     };

//     fetchEventData();
//   }, [eventId]);

//   // Handle change in form fields
//   const handleChange = (e) => {
//     setEventData({
//       ...eventData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const token = localStorage.getItem('token');

//       // Send PUT request to update event
//       const response = await axios.put(`http://localhost:5000/api/event/${eventId}`, eventData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.status === 200) {
//         navigate('/eventowner/dashboard');
//       }
//     } catch (err) {
//       console.error('Error updating event:', err);
//       setError('Failed to update event. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="edit-event">
//       <h1>Edit Event</h1>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Event Name</label>
//           <input
//             type="text"
//             name="name"
//             value={eventData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Date</label>
//           <input
//             type="date"
//             name="date"
//             value={eventData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Location</label>
//           <input
//             type="text"
//             name="location"
//             value={eventData.location}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             name="description"
//             value={eventData.description}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn" disabled={loading}>
//           {loading ? 'Updating Event...' : 'Update Event'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditEvent;
