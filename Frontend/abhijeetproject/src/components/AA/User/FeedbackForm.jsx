import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackForm.css'; // Import your CSS for styling

const FeedbackForm = ({ eventId }) => {
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comments) {
      setError('Please provide your feedback.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/feedback',
        {
          eventId,
          rating,
          comments,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccessMessage(response.data.message);
      setComments('');
      setRating(5);
      setError('');
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setError('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} Star{star > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            rows="4"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default FeedbackForm;




// // src/components/FeedbackForm.jsx

// import React, { useState } from 'react';
// import axios from 'axios';
// // import './FeedbackForm.css';

// const FeedbackForm = ({ eventId }) => {
//   const [rating, setRating] = useState(5);
//   const [comments, setComments] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!comments) {
//       setError('Please provide your feedback.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         'http://localhost:5000/api/feedback',
//         {
//           eventId,
//           rating,
//           comments,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setSuccessMessage(response.data.message);
//       setComments('');
//       setRating(5);
//       setError('');
//     } catch (err) {
//       console.error('Error submitting feedback:', err);
//       setError('Failed to submit feedback. Please try again.');
//     }
//   };

//   return (
//     <div className="feedback-form-container">
//       <h2>Submit Your Feedback</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="rating">Rating:</label>
//           <select
//             id="rating"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//           >
//             {[1, 2, 3, 4, 5].map((star) => (
//               <option key={star} value={star}>
//                 {star} Star{star > 1 ? 's' : ''}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="comments">Comments:</label>
//           <textarea
//             id="comments"
//             rows="4"
//             value={comments}
//             onChange={(e) => setComments(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit Feedback</button>
//       </form>

//       {error && <div className="error-message">{error}</div>}
//       {successMessage && <div className="success-message">{successMessage}</div>}
//     </div>
//   );
// };

// export default FeedbackForm;
