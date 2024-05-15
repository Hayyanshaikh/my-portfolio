import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    setting: null,
    error: null,
    loading: false,
  },
  reducers: {
    fetchSettingStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSettingSuccess: (state, action) => {
      state.loading = false;
      state.setting = action.payload;
      state.error = null;
    },
    fetchSettingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateSettingStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSettingSuccess: (state, action) => {
      state.loading = false;
      state.setting = action.payload;
      state.error = null;
    },
    updateSettingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSettingStart,
  fetchSettingSuccess,
  fetchSettingFailure,
  updateSettingStart,
  updateSettingSuccess,
  updateSettingFailure,
} = settingSlice.actions;

// Selectors
export const selectSettings = (state) => state.settings.setting;
export const selectError = (state) => state.settings.error;
export const selectLoading = (state) => state.settings.loading;

export default settingSlice.reducer;