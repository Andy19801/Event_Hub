export const selectIsLoggedIn = (state) => !!state.auth.token; // Check if token exists
export const selectUser = (state) => state.auth.user; // Get user details
export const selectToken = (state) => state.auth.token; // Get auth token
export const selectLoading = (state) => state.auth.loading; // Get loading state
export const selectError = (state) => state.auth.error; // Get error message

