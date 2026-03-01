import axios from 'axios';
import { setToken, removeToken } from './cookies';  // Import cookie functions
import { 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT 
} from './authTypes';

// Action to log in the user
export const login = (credentials) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const { data } = await axios.post('http://localhost:5000/api/auth/login', credentials);

        // Save the JWT token to cookies
        setToken(data.token);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user,  // Assuming the user data is in response
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

// Action to log out the user
export const logout = () => (dispatch) => {
    // Remove the token from cookies
    removeToken();

    dispatch({ type: LOGOUT });
};
