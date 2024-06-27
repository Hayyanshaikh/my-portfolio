import { createSlice } from '@reduxjs/toolkit';

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchTestimonialStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTestimonialSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchTestimonialFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTestimonialStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addTestimonialSuccess: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = null;
    },
    addTestimonialFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteTestimonialStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteTestimonialSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.filter(testimonial => testimonial.id !== action.payload);
      state.error = null;
    },
    deleteTestimonialFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateTestimonialStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateTestimonialSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.map(testimonial =>
        testimonial.id === action.payload.id ? action.payload : testimonial
      );
      state.error = null;
    },
    updateTestimonialFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTestimonialStart,
  fetchTestimonialSuccess,
  fetchTestimonialFailure,
  addTestimonialStart,
  addTestimonialSuccess,
  addTestimonialFailure,
  deleteTestimonialStart,
  deleteTestimonialSuccess,
  deleteTestimonialFailure,
  updateTestimonialStart,
  updateTestimonialSuccess,
  updateTestimonialFailure,
} = testimonialsSlice.actions;

// Selectors
export const selectError = (state) => state.testimonial.error;
export const selectTestimonials = (state) => state.testimonial.data;
export const selectLoading = (state) => state.testimonial.loading;

export default testimonialsSlice.reducer;