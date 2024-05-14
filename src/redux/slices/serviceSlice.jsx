import { createSlice } from '@reduxjs/toolkit';

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchServicesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchServicesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchServicesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addServiceStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addServiceSuccess: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = null;
    },
    addServiceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteServiceStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteServiceSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.filter(service => service.id !== action.payload);
      state.error = null;
    },
    deleteServiceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateServiceStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateServiceSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.map(service =>
        service.id === action.payload.id ? action.payload : service
      );
      state.error = null;
    },
    updateServiceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchServicesStart,
  fetchServicesSuccess,
  fetchServicesFailure,
  addServiceStart,
  addServiceSuccess,
  addServiceFailure,
  deleteServiceStart,
  deleteServiceSuccess,
  deleteServiceFailure,
  updateServiceStart,
  updateServiceSuccess,
  updateServiceFailure,
} = servicesSlice.actions;

// Selectors
export const selectError = (state) => state.services.error;
export const selectServices = (state) => state.services.data;
export const selectLoading = (state) => state.services.loading;

export default servicesSlice.reducer;