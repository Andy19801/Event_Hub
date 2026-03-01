import React from "react";

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <div className="event-list">
      <h3>Your Events</h3>

      {events.length === 0 && <p>No events created yet.</p>}

      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h4>{event.name}</h4>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>

            <button onClick={() => onEdit(event)}>Edit</button>
            <button onClick={() => onDelete(event._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;


// import React from "react";

// const EventList = ({ events, onEdit, onDelete }) => {
//   return (
//     <div className="section">
//       <h3>Your Events</h3>

//       {events.length === 0 && <p>No events yet.</p>}

//       <ul>
//         {events.map((event) => (
//           <li key={event._id}>
//             <h4>{event.name}</h4>
//             <p>Date: {new Date(event.date).toLocaleDateString()}</p>
//             <p>Location: {event.location}</p>

//             <button onClick={() => onEdit(event)}>Edit</button>
//             <button onClick={() => onDelete(event._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EventList;
