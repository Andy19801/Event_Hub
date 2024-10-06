import React from 'react';

const FeedbackList = ({ feedbacks }) => (
    <ul>
        {feedbacks.map(feedback => (
            <li key={feedback._id}>
                {feedback.user.name}: {feedback.comment} ({feedback.rating} stars)
            </li>
        ))}
    </ul>
);

export default FeedbackList;
