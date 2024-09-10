import { createSlice } from '@reduxjs/toolkit'
import { newPostState } from '../interface';
import { createPostAction, deletePostAction, getPostAction, updatePostAction } from '../actions';

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
    clearNewPostPostData: (state) => {
      Object.assign(state.postData, initialState.postData);
    },
    clearNewPostMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostAction.pending, setLoading)
      .addCase(getPostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postData = {...payload};
      })
      .addCase(getPostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при получении поста';
      })

      .addCase(createPostAction.pending, setLoading)
      .addCase(createPostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postData = {...payload};
        state.successMessage = 'Пост успешно создан';
      })
      .addCase(createPostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при создании поста';
      })

      .addCase(updatePostAction.pending, setLoading)
      .addCase(updatePostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postData = {...payload};
        state.successMessage = 'Пост успешно изменён';
      })
      .addCase(updatePostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при изменении поста';
      })

      .addCase(deletePostAction.pending, setLoading)
      .addCase(deletePostAction.fulfilled, (state) => {
        state.isLoading = false;
        Object.assign(state.postData, initialState.postData);
      })
      .addCase(deletePostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при удалении поста';
      })
  },
})

export const {
  reducer: newPostReducer,
  actions: {setNewPostNewBlockName, setNewPostErrorMessage, clearNewPostPostData, clearNewPostMessages},
} = newPostSlice;