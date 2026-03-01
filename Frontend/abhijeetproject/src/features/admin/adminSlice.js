import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Helper to attach token
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

/* =========================================================
   FETCH ADMIN DASHBOARD DATA
========================================================= */
export const fetchDashboardData = createAsyncThunk(
  "admin/fetchDashboardData",
  async () => {
    const res = await axios.get(
      "http://localhost:5000/api/admin/dashboard",
      authHeader()
    );
    return res.data;
  }
);

/* =========================================================
   FETCH ALL USERS
========================================================= */
export const fetchUsers = createAsyncThunk("admin/fetchUsers", async () => {
  const res = await axios.get(
    "http://localhost:5000/api/admin/users",
    authHeader()
  );
  return res.data;
});

/* =========================================================
   DELETE USER
========================================================= */
export const deleteUser = createAsyncThunk(
  "admin/deleteUser",
  async (userId) => {
    await axios.delete(
      `http://localhost:5000/api/admin/users/${userId}`,
      authHeader()
    );
    return userId;
  }
);

/* =========================================================
   SLICE
========================================================= */
const adminSlice = createSlice({
  name: "admin",
  initialState: {
    eventCount: 0,
    userCount: 0,
    feedbackCount: 0,
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* Dashboard */
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.eventCount = action.payload.eventCount;
        state.userCount = action.payload.userCount;
        state.feedbackCount = action.payload.feedbackCount;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      /* Users */
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      /* Delete User */
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user._id !== action.payload
        );
      });
  },
});

export default adminSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Fetch dashboard data

// export const fetchDashboardData = createAsyncThunk('admin/fetchDashboardData', async () => {
//   const response = await axios.get('http://localhost:5000/api/dashboard'); // Make sure this endpoint is correct
//   return response.data;
// });

// // Fetch users
// export const fetchUsers = createAsyncThunk('admin/fetchUsers', async () => {
//   const response = await axios.get('http://localhost:5000/api/users'); // Ensure this endpoint is correct
//   return response.data;
// });

// // Delete user
// export const deleteUser = createAsyncThunk('admin/deleteUser', async (userId) => {
//   await axios.delete(`http://localhost:5000/api/users/${userId}`); // Adjust the API endpoint
//   return userId; // Return the userId to remove it from the state
// });

// const adminSlice = createSlice({
//   name: 'admin',
//   initialState: {
//     eventCount: 0,
//     userCount: 0,
//     feedbackCount: 0,
//     users: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchDashboardData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchDashboardData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.eventCount = action.payload.eventCount;
//         state.userCount = action.payload.userCount;
//         state.feedbackCount = action.payload.feedbackCount;
//       })
//       .addCase(fetchDashboardData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(deleteUser.fulfilled, (state, action) => {
//         state.users = state.users.filter(user => user.id !== action.payload);
//       })
//       .addCase(deleteUser.rejected, (state, action) => {
//         state.error = action.error.message;
//       });
//   },
// });

// export default adminSlice.reducer;