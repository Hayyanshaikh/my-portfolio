import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from './slices/ThemeSlice.jsx';
import authSlice from './slices/authSlice.jsx';

const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: ThemeSlice,
  },
});

export default store;
