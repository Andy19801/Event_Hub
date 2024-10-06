import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, fetchBookings, fetchFeedbacks } from '../../../../features/eventOwner/eventOwnerActions';
import { selectEvents, selectBookings, selectFeedbacks, selectLoading, selectError } from '../../../../features/eventOwner/eventOwnerSelectors';
import EventList from '../EventList';
import BookingList from '../BookingList';
import FeedbackList from '../FeedbackList';

const EventOwnerDashboard = () => {
    const dispatch = useDispatch();
    const events = useSelector(selectEvents);
    const bookings = useSelector(selectBookings);
    const feedbacks = useSelector(selectFeedbacks);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError); 

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    return (
        <div>
            <h1>Event Owner Dashboard</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            
            <section>
                <h2>My Events</h2>
                <EventList events={events} />
            </section>

            <section>
                <h2>Bookings</h2>
                <BookingList bookings={bookings} />
            </section>

            <section>
                <h2>Feedbacks</h2>
                <FeedbackList feedbacks={feedbacks} />
            </section>
        </div>
    );
};

export default EventOwnerDashboard;













// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchBookings,
//   fetchFeedbacks,
//   createEvent,
//   updateEvent,
//   deleteEvent,
// } from '../../../../features/eventOwner/eventOwnerActions';
// import {
//   selectBookings,
//   selectFeedbacks,
//   selectEvents,
//   selectLoading,
//   selectError,
// } from '../../../../features/eventOwner/eventOwnerSelectors'; // Adjust the import path as necessary
// import './EventOwnerDashboard.css';

// const EventOwnerDashboard = () => {
//   const dispatch = useDispatch();
//   const bookings = useSelector(selectBookings);
//   const feedbacks = useSelector(selectFeedbacks);
//   const events = useSelector(selectEvents);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     const eventId = 'your-event-id'; // Replace with actual event ID
//     dispatch(fetchBookings(eventId));
//     dispatch(fetchFeedbacks(eventId));
//   }, [dispatch]);

//   const handleCreateEvent = (eventDetails) => {
//     dispatch(createEvent(eventDetails));
//   };

//   const handleUpdateEvent = (eventId, updatedDetails) => {
//     dispatch(updateEvent({ eventId, updatedDetails }));
//   };

//   const handleDeleteEvent = (eventId) => {
//     dispatch(deleteEvent(eventId));
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="dashboard">
//       <h1>Event Owner Dashboard</h1>

//       <h2>Bookings</h2>
//       <ul>
//         {bookings.map((booking) => (
//           <li key={booking.id}>{booking.details}</li>
//         ))}
//       </ul>

//       <h2>Feedbacks</h2>
//       <ul>
//         {feedbacks.map((feedback) => (
//           <li key={feedback.id}>{feedback.message}</li>
//         ))}
//       </ul>

//       <h2>Manage Events</h2>
//       {events.map((event) => (
//         <div key={event.id}>
//           <h3>{event.title}</h3>
//           <button className="button" onClick={() => handleUpdateEvent(event.id, { title: 'Updated Title' })}>
//             Update Event
//           </button>
//           <button className="button" onClick={() => handleDeleteEvent(event.id)}>Delete Event</button>
//         </div>
//       ))}
      
//       <button className="button" onClick={() => handleCreateEvent({ title: 'New Event', details: 'Event details here' })}>
//         Create New Event
//       </button>
//     </div>
//   );
// };

// export default EventOwnerDashboard;
