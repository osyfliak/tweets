import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, updateUsers } from '../../services/users-API';

export const getUsersThunk = createAsyncThunk('users/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const data = await getUsers();
    console.log(data);
    return data;
  } catch (error) {
    console.log('error', error.message);
    return rejectWithValue();
  }
});

export const updateUserThunk = createAsyncThunk('users/update', async (id, { rejectWithValue }) => {
  try {
    const data = await updateUsers(id);
    return data;
  } catch (error) {
    console.log('error', error.message);
    return rejectWithValue();
  }
});
