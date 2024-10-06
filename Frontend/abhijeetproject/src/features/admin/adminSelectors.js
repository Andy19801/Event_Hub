// src/features/admin/adminSelectors.js

export const selectUsers = (state) => state.admin.users;
export const selectLoading = (state) => state.admin.loading;
export const selectError = (state) => state.admin.error;