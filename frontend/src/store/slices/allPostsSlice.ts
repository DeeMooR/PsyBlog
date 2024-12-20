import { createSlice } from '@reduxjs/toolkit'
import { allPostsState } from '../interface';
import { deletePostAction, getShortPostsAction, getShortPostsAdminAction, updateShortPostsAction } from '../actions';

const initialState: allPostsState = {
  shortPosts: [],
  isLoading: false,
  successMessage: null,
  errorMessage: null,
}

const setLoading = (state: allPostsState) => {
  state.isLoading = true;
}

const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState,
  reducers: {
    setAllPostsErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    clearAllPostsMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    },
    clearAllPosts: (state) => {
      Object.assign(state, initialState);
    },
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
        state.shortPosts = [];
        state.successMessage = null;
        state.errorMessage = 'Ошибка при получении статей';
      })

      .addCase(getShortPostsAdminAction.pending, setLoading)
      .addCase(getShortPostsAdminAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.shortPosts = [...payload];
      })
      .addCase(getShortPostsAdminAction.rejected, (state) => {
        state.isLoading = false;
        state.shortPosts = [];
        state.successMessage = null;
        state.errorMessage = 'Ошибка при получении статей';
      })

      .addCase(updateShortPostsAction.pending, setLoading)
      .addCase(updateShortPostsAction.fulfilled, () => {})
      .addCase(updateShortPostsAction.rejected, (state) => {
        state.isLoading = false;
        state.successMessage = null;
        state.errorMessage = 'Ошибка при обновлении статьи';
      })

      .addCase(deletePostAction.fulfilled, (state) => {
        state.successMessage = null;
        state.successMessage = 'Статья успешно удалена';
      })
  },
})

export const {
  reducer: allPostsReducer,
  actions: {setAllPostsErrorMessage, clearAllPostsMessages, clearAllPosts},
} = allPostsSlice;