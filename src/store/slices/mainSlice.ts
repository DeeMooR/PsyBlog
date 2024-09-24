import { createSlice } from '@reduxjs/toolkit'
import { mainState } from '../interface';
import { createUserAction, getShortPostsTopAction } from '../actions';

const initialState: mainState = {
  topPosts: [],
  isLoading: false,
  successMessage: null,
  errorMessage: null,
  loadingRegister: false,
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    clearMainMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShortPostsTopAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getShortPostsTopAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.topPosts = [...payload];
      })
      .addCase(getShortPostsTopAction.rejected, (state) => {
        state.isLoading = false;
        state.successMessage = null;
        state.errorMessage = 'Ошибка при получении статей';
      })

      .addCase(createUserAction.pending, (state) => {
        state.loadingRegister = true;
      })
      .addCase(createUserAction.fulfilled, (state) => {
        state.loadingRegister = false;
        state.errorMessage = null;
        state.successMessage = 'Вы успешно записались на консультацию. Скоро с Вами свяжется Ольга';
      })
      .addCase(createUserAction.rejected, (state) => {
        state.loadingRegister = false;
        state.successMessage = null;
        state.errorMessage = 'Ошибка при записи на консультацию';
      })
  },
})

export const {
  reducer: mainReducer,
  actions: {clearMainMessages},
} = mainSlice;