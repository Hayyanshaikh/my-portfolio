import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mediaList: [],
  isLoading: false,
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    uploadMediaStart: (state) => {
      state.isLoading = true;
    },
    uploadMediaSuccess: (state, action) => {
      state.mediaList.push(action.payload);
      state.isLoading = false;
    },
    uploadMediaFailure: (state) => {
      state.isLoading = false;
    },
    deleteMediaStart: (state) => {
      state.isLoading = true;
    },
    deleteMediaSuccess: (state, action) => {
      state.mediaList = state.mediaList.filter(media => media.id !== action.payload);
      state.isLoading = false;
    },
    deleteMediaFailure: (state) => {
      state.isLoading = false;
    },
    getMediaStart: (state) => {
      state.isLoading = true;
    },
    getMediaSuccess: (state, action) => {
      state.mediaList = action.payload;
      state.isLoading = false;
    },
    getMediaFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { 
  uploadMediaStart, 
  uploadMediaSuccess, 
  uploadMediaFailure, 
  deleteMediaStart, 
  deleteMediaSuccess, 
  deleteMediaFailure, 
  getMediaStart, 
  getMediaSuccess, 
  getMediaFailure 
} = mediaSlice.actions;

export const selectMediaList = state => state.media.mediaList;
export const selectLoadingState = state => state.media.isLoading;

export default mediaSlice.reducer;