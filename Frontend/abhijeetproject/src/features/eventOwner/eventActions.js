import axios from 'axios';
import { 
    FETCH_EVENTS_REQUEST, 
    FETCH_EVENTS_SUCCESS, 
    FETCH_EVENTS_FAILURE,
    CREATE_EVENT_REQUEST,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_FAILURE,
    CREATE_TICKET_REQUEST,
    CREATE_TICKET_SUCCESS,
    CREATE_TICKET_FAILURE,
    FETCH_BOOKINGS_REQUEST,
    FETCH_BOOKINGS_SUCCESS,
    FETCH_BOOKINGS_FAILURE,
    FETCH_FEEDBACKS_REQUEST,
    FETCH_FEEDBACKS_SUCCESS,
    FETCH_FEEDBACKS_FAILURE,
    RESET_ERROR
} from './eventTypes';

// Action to fetch events
export const fetchEvents = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_EVENTS_REQUEST });

        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authorization token not found');

        const { data } = await axios.get('http://localhost:5000/api/events', {
            headers: { Authorization: `Bearer ${token}` },
        });

        dispatch({
            type: FETCH_EVENTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_EVENTS_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

// Action to create an event
export const createEvent = (eventData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_EVENT_REQUEST });

        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authorization token not found');

        const { data } = await axios.post('http://localhost:5000/api/events', eventData, {
            headers: { Authorization: `Bearer ${token}` },
        });

        dispatch({
            type: CREATE_EVENT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_EVENT_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

// Action to create a ticket
export const createTicket = (ticketData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_TICKET_REQUEST });

        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authorization token not found');

        const { data } = await axios.post('http://localhost:5000/api/tickets', ticketData, {
            headers: { Authorization: `Bearer ${token}` },
        });

        dispatch({
            type: CREATE_TICKET_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CREATE_TICKET_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

// Action to fetch bookings
export const fetchBookings = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_BOOKINGS_REQUEST });

        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authorization token not found');

        const { data } = await axios.get('http://localhost:5000/api/bookings', {
            headers: { Authorization: `Bearer ${token}` },
        });

        dispatch({
            type: FETCH_BOOKINGS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_BOOKINGS_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

// Action to fetch feedbacks
export const fetchFeedbacks = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_FEEDBACKS_REQUEST });

        const token = localStorage.getItem('token');
        if (!token) throw new Error('Authorization token not found');

        const { data } = await axios.get('http://localhost:5000/api/feedbacks', {
            headers: { Authorization: `Bearer ${token}` },
        });

        dispatch({
            type: FETCH_FEEDBACKS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_FEEDBACKS_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

// Action to reset error
export const resetError = () => (dispatch) => {
    dispatch({ type: RESET_ERROR });
};

