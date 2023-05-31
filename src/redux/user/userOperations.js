import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, updateUsers } from '../../services/users-API';

export const getUsersThunk = createAsyncThunk('user/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const {data} = await getUsers();

    return data;
  } catch (error) {
    console.log('error', error.message);
    return rejectWithValue();
  }
});

export const updateUserThunk = createAsyncThunk('user/update', async (id, { rejectWithValue }) => {
  try {
    const data = await updateUsers(id);
    return data;
  } catch (error) {
    console.log('error', error.message);
    return rejectWithValue();
  }
});
