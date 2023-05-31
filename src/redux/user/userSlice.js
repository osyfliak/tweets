import { createSlice } from '@reduxjs/toolkit';
import { getUsersThunk, updateUserThunk } from './userOperations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getUsersThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userItems = payload;
      })
      .addCase(getUsersThunk.rejected, state => {
        state.isLoading = false;
        state.error = alert('error');
      })
      .addCase(updateUserThunk, state => {
        state.isLoading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userItems = payload;
      })
      .addCase(updateUserThunk.rejected, state => {
        state.isLoading = false;
        state.error = alert('error');
      });
  },
});
export const userReducer = userSlice.reducer;
