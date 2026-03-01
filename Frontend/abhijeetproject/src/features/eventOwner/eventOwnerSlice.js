import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Token helper
const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});

/* LOAD EVENTS & BOOKINGS */
export const fetchDashboardData = createAsyncThunk(
  "eventOwner/fetchDashboardData",
  async () => {
    const events = await axios.get("http://localhost:5000/api/event-owner/events", authHeader());
    const bookings = await axios.get("http://localhost:5000/api/event-owner/bookings", authHeader());

    return {
      events: events.data,
      bookings: bookings.data,
      feedbacks: [] // Future
    };
  }
);

/* CREATE EVENT */
export const createEvent = createAsyncThunk(
  "eventOwner/createEvent",
  async (data) => {
    const res = await axios.post("http://localhost:5000/api/event-owner/events", data, authHeader());
    return res.data;
  }
);

/* UPDATE EVENT */
export const updateEvent = createAsyncThunk(
  "eventOwner/updateEvent",
  async ({ id, ...data }) => {
    const res = await axios.put(`http://localhost:5000/api/event-owner/events/${id}`, data, authHeader());
    return res.data;
  }
);

/* DELETE EVENT */
export const deleteEvent = createAsyncThunk(
  "eventOwner/deleteEvent",
  async (id) => {
    await axios.delete(`http://localhost:5000/api/event-owner/events/${id}`, authHeader());
    return id;
  }
);

/* FETCH BOOKINGS */
export const fetchUserBookings = createAsyncThunk(
  "eventOwner/fetchUserBookings",
  async () => {
    const res = await axios.get("http://localhost:5000/api/event-owner/bookings", authHeader());
    return res.data;
  }
);

const eventOwnerSlice = createSlice({
  name: "eventOwner",
  initialState: {
    events: [],
    bookings: [],
    feedbacks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => { state.loading = true; })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload.events;
        state.bookings = action.payload.bookings;
        state.feedbacks = action.payload.feedbacks;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createEvent.fulfilled, (state, action) => { state.events.push(action.payload); })
      .addCase(updateEvent.fulfilled, (state, action) => {
        const i = state.events.findIndex((e) => e._id === action.payload._id);
        if (i !== -1) state.events[i] = action.payload;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.events = state.events.filter(e => e._id !== action.payload);
      })
      .addCase(fetchUserBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
      });
  }
});

export default eventOwnerSlice.reducer;


// // src/features/eventOwner/eventOwnerSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import {
//   fetchDashboardData,
//   createEvent,
//   updateEvent,
//   deleteEvent,
//   fetchUserBookings
// } from "../../../../features/eventOwner/eventOwnerSlice";

// // Helper: attach token
// const authHeader = () => ({
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });

// /* ----------------------------------------------------------
//    1. FETCH EVENTS + BOOKINGS
// ------------------------------------------------------------ */
// export const fetchDashboardData = createAsyncThunk(
//   "eventOwner/fetchDashboardData",
//   async () => {
//     const eventsRes = await axios.get(
//       "http://localhost:5000/api/event-owner/events",
//       authHeader()
//     );

//     const bookingsRes = await axios.get(
//       "http://localhost:5000/api/event-owner/bookings",
//       authHeader()
//     );

//     return {
//       events: eventsRes.data,
//       bookings: bookingsRes.data,
//       feedbacks: [], // optional
//     };
//   }
// );

// /* ----------------------------------------------------------
//    2. CREATE EVENT
// ------------------------------------------------------------ */
// export const createEvent = createAsyncThunk(
//   "eventOwner/createEvent",
//   async (eventData) => {
//     const res = await axios.post(
//       "http://localhost:5000/api/event-owner/events",
//       eventData,
//       authHeader()
//     );
//     return res.data;
//   }
// );

// /* ----------------------------------------------------------
//    3. UPDATE EVENT
// ------------------------------------------------------------ */
// export const updateEvent = createAsyncThunk(
//   "eventOwner/updateEvent",
//   async ({ id, ...eventData }) => {
//     const res = await axios.put(
//       `http://localhost:5000/api/event-owner/events/${id}`,
//       eventData,
//       authHeader()
//     );
//     return res.data;
//   }
// );

// /* ----------------------------------------------------------
//    4. DELETE EVENT
// ------------------------------------------------------------ */
// export const deleteEvent = createAsyncThunk(
//   "eventOwner/deleteEvent",
//   async (eventId) => {
//     await axios.delete(
//       `http://localhost:5000/api/event-owner/events/${eventId}`,
//       authHeader()
//     );
//     return eventId;
//   }
// );

// /* ----------------------------------------------------------
//    5. FETCH BOOKINGS
// ------------------------------------------------------------ */
// export const fetchUserBookings = createAsyncThunk(
//   "eventOwner/fetchUserBookings",
//   async () => {
//     const res = await axios.get(
//       "http://localhost:5000/api/event-owner/bookings",
//       authHeader()
//     );
//     return res.data;
//   }
// );

// /* ----------------------------------------------------------
//    REDUX SLICE
// ------------------------------------------------------------ */
// const eventOwnerSlice = createSlice({
//   name: "eventOwner",
//   initialState: {
//     events: [],
//     bookings: [],
//     feedbacks: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       /* Dashboard */
//       .addCase(fetchDashboardData.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchDashboardData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.events = action.payload.events;
//         state.bookings = action.payload.bookings;
//         state.feedbacks = action.payload.feedbacks;
//       })
//       .addCase(fetchDashboardData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })

//       /* Create */
//       .addCase(createEvent.fulfilled, (state, action) => {
//         state.events.push(action.payload);
//       })

//       /* Update */
//       .addCase(updateEvent.fulfilled, (state, action) => {
//         const index = state.events.findIndex(
//           (e) => e._id === action.payload._id
//         );
//         if (index !== -1) {
//           state.events[index] = action.payload;
//         }
//       })

//       /* Delete */
//       .addCase(deleteEvent.fulfilled, (state, action) => {
//         state.events = state.events.filter(
//           (event) => event._id !== action.payload
//         );
//       })

//       /* Bookings */
//       .addCase(fetchUserBookings.fulfilled, (state, action) => {
//         state.bookings = action.payload;
//       });
//   },
// });

// export default eventOwnerSlice.reducer;
