import { createSlice } from '@reduxjs/toolkit'
import { mainState } from '../interface';
import { createUserAction, getShortPostsTopAction } from '../actions';

const initialState: mainState = {
  topPosts: [],
  isLoading: false,
  successMessage: null,
  errorMessage: null,
}

const setLoading = (state: mainState) => {
  state.isLoading = true;
  state.successMessage = null;
  state.errorMessage = null;
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
      .addCase(getShortPostsTopAction.pending, setLoading)
      .addCase(getShortPostsTopAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.topPosts = payload;
      })
      .addCase(getShortPostsTopAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при получении статей';
      })

      .addCase(createUserAction.pending, setLoading)
      .addCase(createUserAction.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = 'Вы успешно записались на консультацию. Скоро с Вами свяжется Ольга';
      })
      .addCase(createUserAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при записи на консультацию';
      })
  },
})

export const {
  reducer: mainReducer,
  actions: {clearMainMessages},
} = mainSlice;