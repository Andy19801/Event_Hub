import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Attach token
const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});

/* =======================================================
   1) FETCH USER PROFILE
======================================================= */
export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async () => {
    const res = await axios.get(
      "http://localhost:5000/api/user/me",
      authHeader()
    );
    return res.data; // { name, email, role }
  }
);

/* =======================================================
   2) UPDATE USER PROFILE
======================================================= */
export const updateUserProfileApi = createAsyncThunk(
  "user/updateProfile",
  async (data) => {
    const res = await axios.put(
      "http://localhost:5000/api/user/me",
      data,
      authHeader()
    );
    return res.data.user; // updated user
  }
);

/* =======================================================
   3) FETCH USER BOOKINGS
======================================================= */
export const fetchUserBookingsApi = createAsyncThunk(
  "user/fetchBookings",
  async () => {
    const res = await axios.get(
      "http://localhost:5000/api/bookings/user",
      authHeader()
    );
    return res.data; // array of bookings
  }
);


/* =======================================================
   ORIGINAL SLICE (NOT TOUCHED)
======================================================= */
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
      state.bookings.push(action.payload);
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

  /* =======================================================
     🚀 NEW — Add Online API Functionality
  ======================================================= */
  extraReducers: (builder) => {
    builder

      /* Fetch Profile */
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      /* Update Profile */
      .addCase(updateUserProfileApi.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })

      /* Fetch Bookings */
      .addCase(fetchUserBookingsApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserBookingsApi.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchUserBookingsApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  searchEvents,
  checkTicketAvailability,
  makeBooking,
  viewBookings,
  updateProfile,
  setLoading,
  setError,
} = userSlice.actions;

export default userSlice.reducer;
