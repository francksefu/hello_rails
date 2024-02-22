import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GREETING_URL = 'http://localhost:3000/greeting';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  const response = await axios.get(GREETING_URL);
  return response.data;
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
