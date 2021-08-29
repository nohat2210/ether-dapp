import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/auth';
import { setToken } from 'core/token';

export const registerAuth = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
    try {
      const response = await authApi.register({
        firstName,
        lastName,
        email,
        password,
      });
      return response.data.success;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginAuth = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await authApi.login({ email, password });
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    success: false,
    isLoggedIn: false,
    user: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [registerAuth.pending]: state => {
      state.loading = true;
    },
    [registerAuth.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [registerAuth.rejected]: state => {
      state.loading = false;
    },
    [loginAuth.pending]: state => {
      state.loading = true;
    },
    [loginAuth.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = payload.isLoggedIn;
      state.user = payload.user;
    },
    [loginAuth.rejected]: state => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
