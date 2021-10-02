import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/auth';
import { setAvatar, setCurrentUser } from 'core/currentUser';
import { setAccessToken, setRefreshToken, setToken } from 'core/token';
import { avatarList } from 'shared/utils/imageLibary';

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
      setToken(response.data.accessToken);
      setCurrentUser(response.data.user);
      const { accessToken, refreshToken } = response.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      const randomAvatar =
        avatarList[Math.floor(Math.random() * avatarList.length)];
      setAvatar(randomAvatar);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    success: false,
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
      state.user = payload;
    },
    [loginAuth.rejected]: state => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
