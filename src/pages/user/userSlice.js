import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/user';
import { setCurrentUser } from 'core/currentUser';

export const updateUser = createAsyncThunk(
  'users/:id',
  async ({ id, firstName, lastName, email, birthday }, { rejectWithValue }) => {
    try {
      const response = await userApi.updateUser({
        id,
        firstName,
        lastName,
        email,
        birthday,
      });
      setCurrentUser(response.data.newUser);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserProduct = createAsyncThunk(
  'users/:id/products',
  async ({ params, id }, { rejectWithValue }) => {
    try {
      const response = await userApi.getProduct({ params, id });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postProduct = createAsyncThunk(
  'users/:id',
  async ({ id, name, description, category, price }, { rejectWithValue }) => {
    try {
      const response = await userApi.postProduct({
        id,
        name,
        description,
        category,
        price,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    profile: {},
    list: [],
    pageSize: 5,
    currentPage: 1,
    total: 0,
    nextPage: null,
    previousPage: null,
  },
  reducers: {},
  extraReducers: {
    [updateUser.pending]: state => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.loading = true;
      state.profile = payload.newUser;
    },
    [updateUser.rejected]: state => {
      state.loading = false;
    },
    [postProduct.pending]: state => {
      state.loading = true;
    },
    [postProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    [postProduct.rejected]: state => {
      state.loading = false;
    },
    [getUserProduct.pending]: state => {
      state.loading = true;
    },
    [getUserProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.list = payload.products;
      state.currentPage = payload.meta.currentPage;
      state.nextPage = payload.meta.next;
      state.previousPage = payload.meta.previous;
      state.total = payload.meta.totalItems;
    },
    [getUserProduct.rejected]: state => {
      state.loading = true;
    },
  },
});

export default userSlice.reducer;
