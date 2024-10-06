// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunks for event owner actions
// export const fetchEvents = createAsyncThunk('eventOwner/fetchEvents', async (_, { rejectWithValue }) => {
//     try {
//         const { data } = await axios.get('/api/eventOwner/my-events');
//         return data;
//     } catch (error) {
//         return rejectWithValue(error.response.data.message);
//     }
// });

// export const fetchBookings = createAsyncThunk('eventOwner/fetchBookings', async (eventId, { rejectWithValue }) => {
//     try {
//         const { data } = await axios.get(`/api/eventOwner/bookings/${eventId}`);
//         return data;
//     } catch (error) {
//         return rejectWithValue(error.response.data.message);
//     }
// });

// export const fetchFeedbacks = createAsyncThunk('eventOwner/fetchFeedbacks', async (eventId, { rejectWithValue }) => {
//     try {
//         const { data } = await axios.get(`/api/eventOwner/feedbacks/${eventId}`);
//         return data;
//     } catch (error) {
//         return rejectWithValue(error.response.data.message);
//     }
// });

// // Slice for managing the state of the event owner
// const eventOwnerSlice = createSlice({
//     name: 'eventOwner',
//     initialState: {
//         events: [],
//         bookings: [],
//         feedbacks: [],
//         tickets: [],
//         loading: false,
//         error: null
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchEvents.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchEvents.fulfilled, (state, { payload }) => {
//                 state.loading = false;
//                 state.events = payload;
//             })
//             .addCase(fetchEvents.rejected, (state, { payload }) => {
//                 state.loading = false;
//                 state.error = payload;
//             })
//             .addCase(fetchBookings.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchBookings.fulfilled, (state, { payload }) => {
//                 state.loading = false;
//                 state.bookings = payload;
//             })
//             .addCase(fetchBookings.rejected, (state, { payload }) => {
//                 state.loading = false;
//                 state.error = payload;
//             })
//             .addCase(fetchFeedbacks.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchFeedbacks.fulfilled, (state, { payload }) => {
//                 state.loading = false;
//                 state.feedbacks = payload;
//             })
//             .addCase(fetchFeedbacks.rejected, (state, { payload }) => {
//                 state.loading = false;
//                 state.error = payload;
//             });
//     }
// });

// export default eventOwnerSlice.reducer;



