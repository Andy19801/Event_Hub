import axios from 'axios';
import { 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    RESET_ERROR
} from './adminTypes';

// Action to fetch users
export const fetchUsers = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_USERS_REQUEST });

        const { data } = await axios.get('http://localhost:5000/api/admin/users', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

        dispatch({
            type: FETCH_USERS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_USERS_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

// Action to delete a user
export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_USER_REQUEST });

        await axios.delete(`http://localhost:5000/api/admin/users/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: id,  // Send back the deleted user ID to update the state
        });
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAILURE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

// Action to reset error
export const resetError = () => (dispatch) => {
    dispatch({ type: RESET_ERROR });
};

