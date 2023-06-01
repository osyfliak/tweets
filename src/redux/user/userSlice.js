import { createSlice } from '@reduxjs/toolkit';
import { getUsersThunk, updateUserThunk } from './userOperations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userItems: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    updateSubscription(state, action) {
      const { id } = action.payload;
      state.userItems = state.userItems.map(user => {
        if (user.id === id) {
          const updatedUser = { ...user };
          updatedUser.subscription = !updatedUser.subscription;
          if (updatedUser.subscription) {
            updatedUser.followers += 1;
          } else {
            updatedUser.followers -= 1;
          }
          return updatedUser;
        }
        return user;
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsersThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.userItems = payload;
      })
      .addCase(getUsersThunk.rejected, state => {
        state.isLoading = false;
        state.error = alert('error');
      })
      .addCase(updateUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserThunk.rejected, state => {
        state.isLoading = false;
        state.error = alert('errorUpdate');
      });
  },
});

export const { updateSubscription } = userSlice.actions;
export const userReducer = userSlice.reducer;
