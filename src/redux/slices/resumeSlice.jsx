import { createSlice } from '@reduxjs/toolkit';

const resumesSlice = createSlice({
  name: "resumes",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchResumesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchResumesSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchResumesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addResumeStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addResumeSuccess: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = null;
    },
    addResumeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteResumeStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteResumeSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.filter(resume => resume.id !== action.payload);
      state.error = null;
    },
    deleteResumeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateResumeStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateResumeSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.map(resume =>
        resume.id === action.payload.id ? action.payload : resume
      );
      state.error = null;
    },
    updateResumeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchResumesStart,
  fetchResumesSuccess,
  fetchResumesFailure,
  addResumeStart,
  addResumeSuccess,
  addResumeFailure,
  deleteResumeStart,
  deleteResumeSuccess,
  deleteResumeFailure,
  updateResumeStart,
  updateResumeSuccess,
  updateResumeFailure,
} = resumesSlice.actions;

// Selectors
export const selectError = (state) => state.resumes.error;
export const selectResumes = (state) => state.resumes.data;
export const selectLoading = (state) => state.resumes.loading;

export default resumesSlice.reducer;