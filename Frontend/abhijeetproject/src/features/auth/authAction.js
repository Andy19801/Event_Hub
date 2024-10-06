import { loginUser, logoutUser, setCredentials } from './authSlice';

// Action to log in the user
export const login = (credentials) => async (dispatch) => {
  try {
    const response = await dispatch(loginUser(credentials)).unwrap();
    // Dispatching setCredentials to update the state
    dispatch(setCredentials({ token: response.token, user: response.user }));
  } catch (error) {
    console.error('Failed to log in:', error);
  }
};

// Action to log out the user
export const logout = () => async (dispatch) => {
  try {
    await dispatch(logoutUser()).unwrap();
    dispatch(logout()); // Resetting the state
  } catch (error) {
    console.error('Failed to log out:', error);
  }
};
