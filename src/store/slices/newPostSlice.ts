import { createSlice } from '@reduxjs/toolkit'
import { newPostState } from '../interface';
import { createNewPostAction, deleteNewPostAction, updateNewPostAction } from '../actions';

const initialState: newPostState = {
  postData: {
    id: null,
    title: '',
    description: '',
    image: '',
    date: '',
    isActive: false,
  },
  newBlockName: null,
  isLoading: false,
  successMessage: null,
  errorMessage: null,
}

const setLoading = (state: newPostState) => {
  state.isLoading = true;
  state.successMessage = null;
  state.errorMessage = null;
}

const newPostSlice = createSlice({
  name: 'newPost',
  initialState,
  reducers: {
    setNewPostNewBlockName: (state, { payload }) => {
      state.newBlockName = payload;
    },
    setNewPostErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    clearNewPostMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewPostAction.pending, setLoading)
      .addCase(createNewPostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        Object.assign(state.postData, payload);
        state.successMessage = 'Пост успешно создан';
      })
      .addCase(createNewPostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при создании поста';
      })

      .addCase(updateNewPostAction.pending, setLoading)
      .addCase(updateNewPostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        Object.assign(state.postData, payload);
        state.successMessage = 'Пост успешно изменён';
      })
      .addCase(updateNewPostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при изменении поста';
      })

      .addCase(deleteNewPostAction.pending, setLoading)
      .addCase(deleteNewPostAction.fulfilled, (state) => {
        state.isLoading = false;
        Object.assign(state.postData, initialState.postData);
        state.successMessage = 'Пост успешно удалён';
      })
      .addCase(deleteNewPostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при удалении поста';
      })
  },
})

export const {
  reducer: newPostReducer,
  actions: {setNewPostNewBlockName, setNewPostErrorMessage, clearNewPostMessages},
} = newPostSlice;