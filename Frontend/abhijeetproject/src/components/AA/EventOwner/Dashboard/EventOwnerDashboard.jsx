import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchDashboardData,
  createEvent,
  updateEvent,
  deleteEvent,
  fetchUserBookings
} from "../../../../features/eventOwner/eventOwnerSlice";

import CreateEventForm from "../CreateEventForm";
import EventList from "../EventList";
import ViewBookings from "../ViewBookings";

import "./EventOwnerDashboard.css";

const EventOwnerDashboard = () => {
  const dispatch = useDispatch();
  const { events, bookings, feedbacks, loading, error } = useSelector(
    (state) => state.eventOwner
  );

  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    dispatch(fetchDashboardData());
    dispatch(fetchUserBookings());
  }, [dispatch]);

  return (
    <div className="dashboard-container">
      <h2>Event Owner Dashboard</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error-msg">{error}</p>}

      {/* Stats */}
      <div className="stats-cards">
        <div className="card blue">{events.length} Events</div>
        <div className="card red">{bookings.length} Bookings</div>
        <div className="card green">{feedbacks.length} Feedbacks</div>
      </div>

      {/* Create / Update Event Form */}
      <CreateEventForm
        editEvent={editEvent}
        setEditEvent={setEditEvent}
        onCreate={(data) => dispatch(createEvent(data))}
        onUpdate={(data) => dispatch(updateEvent(data))}
      />

      {/* Events List */}
      <EventList
        events={events}
        onEdit={(event) => setEditEvent(event)}
        onDelete={(id) => dispatch(deleteEvent(id))}
      />

      {/* Bookings */}
      <ViewBookings bookings={bookings} />
    </div>
  );
};

export default EventOwnerDashboard;


// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import {
//   fetchDashboardData,
//   createEvent,
//   updateEvent,
//   deleteEvent,
//   fetchUserBookings
// } from "../../../../features/eventOwner/eventOwnerSlice";

// import CreateEventForm from "../CreateEventForm";
// import EventList from "../EventList";
// import ViewBookings from "../ViewBookings";

// import "./EventOwnerDashboard.css";

// const EventOwnerDashboard = () => {
//   const dispatch = useDispatch();
//   const { events, bookings, feedbacks, loading, error } = useSelector(
//     (state) => state.eventOwner
//   );

//   const [editEvent, setEditEvent] = useState(null);

//   useEffect(() => {
//     dispatch(fetchDashboardData());
//     dispatch(fetchUserBookings());
//   }, [dispatch]);

//   return (
//     <div className="dashboard-container">
//       <h2>Event Owner Dashboard</h2>

//       {loading && <p>Loading...</p>}
//       {error && <p className="error-msg">{error}</p>}

//       {/* Stats */}
//       <div className="stats-cards">
//         <div className="card blue">{events.length} Events</div>
//         <div className="card red">{bookings.length} Bookings</div>
//         <div className="card green">{feedbacks.length} Feedbacks</div>
//       </div>

//       {/* Create or Edit */}
//       <CreateEventForm
//         editEvent={editEvent}
//         setEditEvent={setEditEvent}
//         onCreate={(data) => dispatch(createEvent(data))}
//        onUpdate={(data) => dispatch(updateEvent(data))}
//       />

//       {/* Events List */}
//       <EventList
//         events={events}
//         onEdit={(event) => setEditEvent(event)}
//         onDelete={(id) => dispatch(deleteEvent(id))}
//       />

//       {/* Bookings */}
//       <ViewBookings bookings={bookings} />
//     </div>
//   );
// };

// export default EventOwnerDashboard;

