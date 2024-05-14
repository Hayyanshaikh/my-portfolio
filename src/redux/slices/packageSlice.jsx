import { createSlice } from '@reduxjs/toolkit';

const packagesSlice = createSlice({
  name: "packages",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchPackagesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPackagesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchPackagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addPackageStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addPackageSuccess: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = null;
    },
    addPackageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deletePackageStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deletePackageSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.filter(pkg => pkg.id !== action.payload);
      state.error = null;
    },
    deletePackageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatePackageStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updatePackageSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.map(pkg =>
        pkg.id === action.payload.id ? action.payload : pkg
      );
      state.error = null;
    },
    updatePackageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPackagesStart,
  fetchPackagesSuccess,
  fetchPackagesFailure,
  addPackageStart,
  addPackageSuccess,
  addPackageFailure,
  deletePackageStart,
  deletePackageSuccess,
  deletePackageFailure,
  updatePackageStart,
  updatePackageSuccess,
  updatePackageFailure,
} = packagesSlice.actions;

// Selectors
export const selectError = (state) => state.packages.error;
export const selectPackages = (state) => state.packages.data;
export const selectLoading = (state) => state.packages.loading;

export default packagesSlice.reducer;