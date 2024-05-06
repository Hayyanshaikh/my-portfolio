import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from './slices/ThemeSlice.jsx';
import authSlice from './slices/authSlice.jsx';
import userSlice from './slices/userSlice.jsx';

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    theme: ThemeSlice,
  },
});

export default store;
