import { createSlice } from '@reduxjs/toolkit'
import { allPostsState } from '../interface';
import { getShortPostsAction, getShortPostsAdminAction, updateShortPostsAction } from '../actions';

const initialState: allPostsState = {
  shortPosts: [],
  isLoading: false,
  successMessage: null,
  errorMessage: null,
}

const setLoading = (state: allPostsState) => {
  state.isLoading = true;
  state.successMessage = null;
  state.errorMessage = null;
}

const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState,
  reducers: {
    clearAllPostsMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShortPostsAction.pending, setLoading)
      .addCase(getShortPostsAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.shortPosts = [...payload];
      })
      .addCase(getShortPostsAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при получении постов';
      })

      .addCase(getShortPostsAdminAction.pending, setLoading)
      .addCase(getShortPostsAdminAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.shortPosts = [...payload];
      })
      .addCase(getShortPostsAdminAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при получении постов';
      })

      .addCase(updateShortPostsAction.pending, setLoading)
      .addCase(updateShortPostsAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.shortPosts = [...payload];
      })
      .addCase(updateShortPostsAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при обновлении постов';
      })
  },
})

export const {
  reducer: allPostsReducer,
  actions: {clearAllPostsMessages},
} = allPostsSlice;