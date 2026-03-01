import React from "react";
import "./FeedbackList.css";

const FeedbackList = ({ feedbacks }) => {
  return (
    <div className="admin-container">
      <h2 className="admin-title">Feedbacks</h2>

      <div className="list-container">
        {feedbacks?.map((fb) => (
          <div className="list-card" key={fb._id}>
            <div>
              <h4>User: {fb.userName}</h4>
              <p>Event: {fb.eventName}</p>
              <p>Comment: {fb.comment}</p>
            </div>
          </div>
        ))}

        {feedbacks?.length === 0 && <p>No feedback found.</p>}
      </div>
    </div>
  );
};

export default FeedbackList;
