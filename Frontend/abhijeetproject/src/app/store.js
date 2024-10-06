import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import adminReducer from '../features/admin/adminSlice'; // Admin slice
import eventOwnerReducer from '../features/eventOwner/eventOwnerSlice'; // Event owner slice
import userReducer from '../features/user/userSlice'; // User slice

// Configure the Redux store
export const store = configureStore({
  reducer: {
    auth: authReducer,           // Manages authentication state
    counter: counterReducer,     // Manages counter state
    admin: adminReducer,         // Manages admin-related state
    eventOwner: eventOwnerReducer, // Manages event owner-related state
    user: userReducer,           // Manages user-related state
  },
});

export default store;









// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/auth/authSlice';
// import counterReducer from '../features/counter/counterSlice';


// // Configure the Redux store
// export const store = configureStore({
//   reducer: {
//     auth: authReducer,  // Manages authentication state, including user info, token, and actions for login, logout, and profile management
//     counter: counterReducer,  // Manages counter state and related actions
//   },
// });

// export default store;

