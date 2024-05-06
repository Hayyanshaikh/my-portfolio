import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    fetchUser: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUserSlice: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    failureUser: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUser, setUserSlice, failureUser } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;
export const selectError = (state) => state.user.error;
export const selectLoading = (state) => state.user.loading;

export default userSlice.reducer;