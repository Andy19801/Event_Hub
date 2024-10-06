import React from 'react';

const EventList = ({ events }) => (
    <ul>
        {events.map(event => (
            <li key={event._id}>{event.name}</li>
        ))}
    </ul>
);

export default EventList;
