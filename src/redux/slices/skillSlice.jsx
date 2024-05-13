import { createSlice } from '@reduxjs/toolkit';

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchSkillsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSkillsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchSkillsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addSkillStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addSkillSuccess: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = null;
    },
    addSkillFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSkillStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteSkillSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.filter(skill => skill.id !== action.payload);
      state.error = null;
    },
    deleteSkillFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateSkillStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSkillSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.map(skill =>
        skill.id === action.payload.id ? action.payload : skill
      );
      state.error = null;
    },
    updateSkillFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSkillsStart,
  fetchSkillsSuccess,
  fetchSkillsFailure,
  addSkillStart,
  addSkillSuccess,
  addSkillFailure,
  deleteSkillStart,
  deleteSkillSuccess,
  deleteSkillFailure,
  updateSkillStart,
  updateSkillSuccess,
  updateSkillFailure,
} = skillsSlice.actions;

// Selectors
export const selectError = (state) => state.skills.error;
export const selectSkills = (state) => state.skills.data;
export const selectLoading = (state) => state.skills.loading;

export default skillsSlice.reducer;