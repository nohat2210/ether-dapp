import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from 'api/product';
import { getCurrentUser } from 'core/currentUser';
import { JSONParse } from 'shared/utils/tool';

export const getProducts = createAsyncThunk(
  'products',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getAll({ params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProduct = createAsyncThunk(
  'products/:id',
  async (id, { rejectWithValue }) => {
    try {
      const response = await productApi.getProduct({ id });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/:id/edit',
  async ({ name, category, description, price, id }, { rejectWithValue }) => {
    try {
      const profile = JSONParse(getCurrentUser());
      const response = await productApi.editProduct({
        name,
        category,
        description,
        price,
        owner: profile._id,
        id,
      });
      return response.data.success;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/:id/delete',
  async (id, { rejectWithValue }) => {
    try {
      const response = await productApi.deleteProduct({ id });
      return response.data.success;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    list: [],
    pageSize: 10,
    currentPage: 1,
    total: 0,
    nextPage: null,
    previousPage: null,
    filter: {},
    // sort: {},
    item: null,
    success: false,
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: state => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.list = payload.items;
      state.pageSize = payload.meta.itemsPerPage;
      state.currentPage = payload.meta.currentPage;
      state.total = payload.meta.totalItems;
      state.nextPage = payload.meta.next;
      state.previousPage = payload.meta.previous;
    },
    [getProducts.rejected]: state => {
      state.loading = false;
    },
    [getProduct.pending]: state => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.item = payload.product;
    },
    [getProduct.rejected]: state => {
      state.loading = false;
    },
    [updateProduct.pending]: state => {
      state.loading = true;
    },
    [updateProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = payload;
    },
    [updateProduct.rejected]: state => {
      state.loading = false;
    },
  },
});

export default productSlice.reducer;
