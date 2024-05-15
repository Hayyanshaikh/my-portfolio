import { createSlice } from '@reduxjs/toolkit';

const pricesSlice = createSlice({
  name: "prices",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchPricesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPricesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchPricesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addPriceStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addPriceSuccess: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = null;
    },
    addPriceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deletePriceStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deletePriceSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.filter(price => price.id !== action.payload);
      state.error = null;
    },
    deletePriceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatePriceStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updatePriceSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.map(price =>
        price.id === action.payload.id ? action.payload : price
      );
      state.error = null;
    },
    updatePriceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPricesStart,
  fetchPricesSuccess,
  fetchPricesFailure,
  addPriceStart,
  addPriceSuccess,
  addPriceFailure,
  deletePriceStart,
  deletePriceSuccess,
  deletePriceFailure,
  updatePriceStart,
  updatePriceSuccess,
  updatePriceFailure,
} = pricesSlice.actions;

// Selectors
export const selectError = (state) => state.prices.error;
export const selectPrices = (state) => state.prices.data;
export const selectLoading = (state) => state.prices.loading;

export default pricesSlice.reducer;