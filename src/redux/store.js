import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from './slices/ThemeSlice.jsx';
import authSlice from './slices/authSlice.jsx';
import userSlice from './slices/userSlice.jsx';
import mediaSlice from './slices/mediaSlice.jsx';

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    theme: ThemeSlice,
    media: mediaSlice,
  },
});

export default store;
