import React from 'react';
import PropTypes from 'prop-types';
import './ViewFeedbacks.css'; // Add styling if necessary

const ViewFeedbacks = ({ feedbacks }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No feedback available.</p>;
  }

  return (
    <div className="view-feedbacks">
      <h3>Event Feedbacks</h3>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id} className="feedback-item">
            <h4>{feedback.eventName}</h4>
            <p>Feedback by: {feedback.userName}</p>
            <p>Rating: {feedback.rating} / 5</p>
            <p>Comments: {feedback.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define the prop types for validation
ViewFeedbacks.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Changed to string if using MongoDB ObjectId
      eventName: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comments: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ViewFeedbacks;



// import React from 'react';
// import PropTypes from 'prop-types';
// // import './ViewFeedbacks.css'; // Add styling if necessary

// const ViewFeedbacks = ({ feedbacks }) => {
//   if (!feedbacks || feedbacks.length === 0) {
//     return <p>No feedback available.</p>;
//   }

//   return (
//     <div className="view-feedbacks">
//       <h3>Event Feedbacks</h3>
//       <ul>
//         {feedbacks.map((feedback) => (
//           <li key={feedback.id} className="feedback-item">
//             <h4>{feedback.eventName}</h4>
//             <p>Feedback by: {feedback.userName}</p>
//             <p>Rating: {feedback.rating} / 5</p>
//             <p>Comments: {feedback.comments}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Define the prop types for validation
// ViewFeedbacks.propTypes = {
//   feedbacks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       eventName: PropTypes.string.isRequired,
//       userName: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//       comments: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default ViewFeedbacks;


// import React from 'react';
// import { useSelector } from 'react-redux';

// const ViewFeedbacks = () => {
//   const { feedbacks } = useSelector((state) => state.feedbacks); // Assume you have a feedbacks slice

//   return (
//     <div>
//       <h3>User Feedbacks</h3>
//       <ul>
//         {feedbacks.map((feedback) => (
//           <li key={feedback.id}>
//             Event: {feedback.eventName}, Feedback: {feedback.comment}, Rating: {feedback.rating}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ViewFeedbacks;



// // src/components/EventOwner/ViewFeedbackList.jsx

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import './ViewFeedbackList.css';

// const ViewFeedbackList = () => {
//   const [feedbackList, setFeedbackList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchFeedback = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/feedback', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setFeedbackList(response.data);
//       } catch (err) {
//         console.error('Error fetching feedback:', err);
//         setError('Failed to load feedback.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFeedback();
//   }, []);

//   if (loading) {
//     return <div>Loading feedback...</div>;
//   }

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   return (
//     <div className="feedback-list-container">
//       <h1>Feedback List</h1>
//       {feedbackList.length === 0 ? (
//         <p>No feedback available.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Event Name</th>
//               <th>Attendee Name</th>
//               <th>Feedback</th>
//               <th>Rating</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {feedbackList.map((feedback) => (
//               <tr key={feedback._id}>
//                 <td>{feedback.eventName}</td>
//                 <td>{feedback.attendeeName}</td>
//                 <td>{feedback.comment}</td>
//                 <td>{feedback.rating}</td>
//                 <td>{new Date(feedback.date).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ViewFeedbackList;
