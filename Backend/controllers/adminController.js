import User from '../models/User.js';
import Event from '../models/Event.js';

// Get all users (admin-only)
export const viewUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password'); // Exclude passwords for security
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a user by ID (admin-only)
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.remove();
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Approve an event
export const approveEvent = async (req, res) => {
  const eventId = req.params.id; // Get the event ID from request parameters

  try {
    // Find the event by ID
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Update the event's status to approved
    event.status = 'approved'; // Assuming you have a status field
    const updatedEvent = await event.save();

    res.json(updatedEvent); // Return the updated event
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
