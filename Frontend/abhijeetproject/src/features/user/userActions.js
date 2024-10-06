import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setLoading,
  setError,
  viewBookings,
} from './userSlice';

// Example async action to fetch events
export const fetchEvents = createAsyncThunk('user/fetchEvents', async (filters, { dispatch }) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`/api/events?${new URLSearchParams(filters)}`); // Adjust API endpoint as needed
    const data = await response.json();
    dispatch(searchEvents(data)); // Assuming searchEvents updates the events in state
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
});

// Example async action to fetch user bookings
export const fetchUserBookings = createAsyncThunk('user/fetchUserBookings', async (userId, { dispatch }) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`/api/bookings/${userId}`); // Adjust API endpoint as needed
    const data = await response.json();
    dispatch(viewBookings(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
});
