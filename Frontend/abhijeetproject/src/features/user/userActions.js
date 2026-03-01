// src/features/user/userActions.js

import axios from 'axios';

// Constants for booking actions
export const FETCH_BOOKINGS_REQUEST = 'FETCH_BOOKINGS_REQUEST';
export const FETCH_BOOKINGS_SUCCESS = 'FETCH_BOOKINGS_SUCCESS';
export const FETCH_BOOKINGS_FAILURE = 'FETCH_BOOKINGS_FAILURE';

// Constants for events
export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

// Constants for user bookings
export const FETCH_USER_BOOKINGS_REQUEST = 'FETCH_USER_BOOKINGS_REQUEST';
export const FETCH_USER_BOOKINGS_SUCCESS = 'FETCH_USER_BOOKINGS_SUCCESS';
export const FETCH_USER_BOOKINGS_FAILURE = 'FETCH_USER_BOOKINGS_FAILURE';

// Action to fetch bookings
export const fetchBookings = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKINGS_REQUEST });
  try {
    const response = await axios.get('http://localhost:5000/api/bookings');
    dispatch({ type: FETCH_BOOKINGS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_BOOKINGS_FAILURE, payload: error.message });
  }
};

// Action to fetch events
export const fetchEvents = () => async (dispatch) => {
  dispatch({ type: FETCH_EVENTS_REQUEST });
  try {
    const response = await axios.get('http://localhost:5000/api/events');
    dispatch({ type: FETCH_EVENTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.message });
  }
};

// ✅ FIXED: Action to fetch user bookings using TOKEN
export const fetchUserBookings = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_BOOKINGS_REQUEST });
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(
      'http://localhost:5000/api/bookings/my',
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    dispatch({ type: FETCH_USER_BOOKINGS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_USER_BOOKINGS_FAILURE, payload: error.message });
  }
};

// Action to search events
export const searchEvents = (searchQuery) => async (dispatch) => {
  dispatch({ type: FETCH_EVENTS_REQUEST });
  try {
    const response = await axios.get(
      `http://localhost:5000/api/events/search?q=${searchQuery}`
    );
    dispatch({ type: FETCH_EVENTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.message });
  }
};

export const fetchUserProfile = () => async (dispatch) => {
  dispatch({ type: "USER_PROFILE_REQUEST" });

  try {
    const res = await axios.get("http://localhost:5000/api/user/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    });

    dispatch({ type: "USER_PROFILE_SUCCESS", payload: res.data });

  } catch (err) {
    dispatch({ type: "USER_PROFILE_FAIL", payload: err.message });
  }
};

export const updateUserProfile = (data) => async (dispatch) => {
  dispatch({ type: "UPDATE_USER_REQUEST" });

  try {
    const res = await axios.put(
      "http://localhost:5000/api/user/me",
      data,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );

    dispatch({ type: "UPDATE_USER_SUCCESS", payload: res.data.user });

  } catch (err) {
    dispatch({ type: "UPDATE_USER_FAIL", payload: err.message });
  }
};












// // src/features/user/userActions.js

// import axios from 'axios';

// // Constants for booking actions
// export const FETCH_BOOKINGS_REQUEST = 'FETCH_BOOKINGS_REQUEST';
// export const FETCH_BOOKINGS_SUCCESS = 'FETCH_BOOKINGS_SUCCESS';
// export const FETCH_BOOKINGS_FAILURE = 'FETCH_BOOKINGS_FAILURE';

// // Constants for events
// export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
// export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
// export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

// // Constants for user bookings
// export const FETCH_USER_BOOKINGS_REQUEST = 'FETCH_USER_BOOKINGS_REQUEST';
// export const FETCH_USER_BOOKINGS_SUCCESS = 'FETCH_USER_BOOKINGS_SUCCESS';
// export const FETCH_USER_BOOKINGS_FAILURE = 'FETCH_USER_BOOKINGS_FAILURE';

// // Action to fetch bookings
// export const fetchBookings = () => async (dispatch) => {
//   dispatch({ type: FETCH_BOOKINGS_REQUEST });
//   try {
//     const response = await axios.get('/api/bookings');
//     dispatch({ type: FETCH_BOOKINGS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: FETCH_BOOKINGS_FAILURE, payload: error.message });
//   }
// };

// // Action to fetch events
// export const fetchEvents = () => async (dispatch) => {
//   dispatch({ type: FETCH_EVENTS_REQUEST });
//   try {
//     const response = await axios.get('http://localhost:5000/api/events');
//     dispatch({ type: FETCH_EVENTS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.message });
//   }
// };

// // Action to fetch user bookings
// export const fetchUserBookings = (userId) => async (dispatch) => {
//   dispatch({ type: FETCH_USER_BOOKINGS_REQUEST });
//   try {
//     const response = await axios.get(`http://localhost:5000/api/users/${userId}/bookings`);
//     dispatch({ type: FETCH_USER_BOOKINGS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: FETCH_USER_BOOKINGS_FAILURE, payload: error.message });
//   }
// };

// // Action to search events
// export const searchEvents = (searchQuery) => async (dispatch) => {
//   dispatch({ type: FETCH_EVENTS_REQUEST });
//   try {
//     const response = await axios.get(`http://localhost:5000/api/events/search?q=${searchQuery}`);
//     dispatch({ type: FETCH_EVENTS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.message });
//   }
// };
