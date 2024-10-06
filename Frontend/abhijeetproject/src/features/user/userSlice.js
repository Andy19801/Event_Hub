import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  bookings: [],
  userProfile: {
    name: '',
    email: '',
    mobile: '',
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    searchEvents: (state, action) => {
      const { area, city, filters } = action.payload;
      // Add logic to filter events based on area, city, and any other fields
      state.events = state.events.filter(event => {
        const matchesArea = area ? event.area === area : true;
        const matchesCity = city ? event.city === city : true;
        const matchesFilters = Object.keys(filters).every(key => event[key] === filters[key]);
        return matchesArea && matchesCity && matchesFilters;
      });
    },
    checkTicketAvailability: (state, action) => {
      const eventId = action.payload;
      const event = state.events.find(event => event.id === eventId);
      return event ? event.tickets : [];
    },
    makeBooking: (state, action) => {
      const bookingDetails = action.payload;
      state.bookings.push(bookingDetails);
    },
    viewBookings: (state, action) => {
      state.bookings = action.payload;
    },
    updateProfile: (state, action) => {
      state.userProfile = { ...state.userProfile, ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  searchEvents,
  checkTicketAvailability,
  makeBooking,
  viewBookings,
  updateProfile,
  setLoading,
  setError,
} = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
