import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchProjectsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProjectsSuccess: (state, action) => {
      state.loading = false;
      state.projects = action.payload;
      state.error = null;
    },
    fetchProjectsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addProjectStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addProjectSuccess: (state, action) => {
      state.loading = false;
      state.projects.push(action.payload);
      state.error = null;
    },
    addProjectFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProjectStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteProjectSuccess: (state, action) => {
      state.loading = false;
      state.projects = state.projects.filter(project => project.id !== action.payload);
      state.error = null;
    },
    deleteProjectFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProjectStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateProjectSuccess: (state, action) => {
      state.loading = false;
      state.projects = state.projects.map(project =>
        project.id === action.payload.id ? action.payload : project
      );
      state.error = null;
    },
    updateProjectFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  addProjectStart,
  addProjectSuccess,
  addProjectFailure,
  deleteProjectStart,
  deleteProjectSuccess,
  deleteProjectFailure,
  updateProjectStart,
  updateProjectSuccess,
  updateProjectFailure,
} = projectSlice.actions;

// Selectors
export const selectProjects = (state) => state.projects.projects;
export const selectError = (state) => state.projects.error;
export const selectLoading = (state) => state.projects.loading;

export default projectSlice.reducer;