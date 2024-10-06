import Ticket from '../models/Ticket.js';
import asyncHandler from 'express-async-handler';

// Create a new ticket
export const createTicket = asyncHandler(async (req, res) => {
    const { eventId, type, price, quantity } = req.body;

    // Validate required fields
    if (!eventId || !type || !price || !quantity) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Create the ticket
    const ticket = new Ticket({
        event: eventId,
        type,
        price,
        quantity,
        availableQuantity: quantity, // Initially, all tickets are available
    });

    const createdTicket = await ticket.save();
    res.status(201).json(createdTicket);
});

// Update an existing ticket
export const updateTicket = asyncHandler(async (req, res) => {
    const { type, price, quantity } = req.body;
    const ticket = await Ticket.findById(req.params.id);

    if (ticket) {
        // Update the fields if provided in the request
        ticket.type = type || ticket.type;
        ticket.price = price || ticket.price;

        // Update quantity and adjust available quantity accordingly
        if (quantity) {
            const quantityDifference = quantity - ticket.quantity;
            ticket.quantity = quantity;
            ticket.availableQuantity += quantityDifference; // Adjust available quantity
        }

        const updatedTicket = await ticket.save();
        res.json(updatedTicket);
    } else {
        res.status(404).json({ message: 'Ticket not found' });
    }
});

// Delete a ticket
export const deleteTicket = asyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);

    if (ticket) {
        await ticket.remove();
        res.json({ message: 'Ticket removed' });
    } else {
        res.status(404).json({ message: 'Ticket not found' });
    }
});



































// const Event = require('../models/Event');
// const asyncHandler = require('express-async-handler');

// // Add ticket availability for an event
// const addTicket = asyncHandler(async (req, res) => {
//     const { eventId, ticketType, price, seatsAvailable } = req.body;

//     const event = await Event.findById(eventId);
//     if (event) {
//         event.tickets.push({ ticketType, price, seatsAvailable });
//         await event.save();
//         res.status(201).json(event.tickets);
//     } else {
//         res.status(404);
//         throw new Error('Event not found');
//     }
// });

// // Update ticket availability
// const updateTicket = asyncHandler(async (req, res) => {
//     const { eventId, ticketId, ticketType, price, seatsAvailable } = req.body;

//     const event = await Event.findById(eventId);
//     if (event) {
//         const ticket = event.tickets.id(ticketId);
//         if (ticket) {
//             ticket.ticketType = ticketType || ticket.ticketType;
//             ticket.price = price || ticket.price;
//             ticket.seatsAvailable = seatsAvailable || ticket.seatsAvailable;

//             await event.save();
//             res.json(ticket);
//         } else {
//             res.status(404);
//             throw new Error('Ticket not found');
//         }
//     } else {
//         res.status(404);
//         throw new Error('Event not found');
//     }
// });

// // Delete ticket
// const deleteTicket = asyncHandler(async (req, res) => {
//     const { eventId, ticketId } = req.params;

//     const event = await Event.findById(eventId);
//     if (event) {
//         event.tickets = event.tickets.filter(ticket => ticket._id.toString() !== ticketId);
//         await event.save();
//         res.json({ message: 'Ticket removed' });
//     } else {
//         res.status(404);
//         throw new Error('Event not found');
//     }
// });

// module.exports = {
//     addTicket,
//     updateTicket,
//     deleteTicket
// };
