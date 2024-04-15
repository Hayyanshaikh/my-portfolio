import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: true,
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    mode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { mode } = ThemeSlice.actions;

export default ThemeSlice.reducer;
