import { createSlice } from '@reduxjs/toolkit'
import { newPostState } from '../interface';
import { createPostAction, deletePostAction, getFullPostAction, updatePostAction } from '../actions';

const initialState: newPostState = {
  postData: {
    id: null,
    title: '',
    description: '',
    image: '',
    date: '',
    isActive: false,
    blocks: []
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
      .addCase(getFullPostAction.pending, setLoading)
      .addCase(getFullPostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postData = {...payload};
      })
      .addCase(getFullPostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при получении статьи';
      })

      .addCase(createPostAction.pending, setLoading)
      .addCase(createPostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postData = {...payload};
        state.successMessage = 'Статья успешно создана';
      })
      .addCase(createPostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при создании статьи';
      })

      .addCase(updatePostAction.pending, setLoading)
      .addCase(updatePostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postData = {...payload};
        state.successMessage = 'Статья успешно изменена';
      })
      .addCase(updatePostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при изменении статьи';
      })

      .addCase(deletePostAction.pending, setLoading)
      .addCase(deletePostAction.fulfilled, (state) => {
        state.isLoading = false;
        Object.assign(state.postData, initialState.postData);
      })
      .addCase(deletePostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при удалении статьи';
      })
  },
})

export const {
  reducer: newPostReducer,
  actions: {setNewPostNewBlockName, setNewPostErrorMessage, clearNewPostPostData, clearNewPostMessages},
} = newPostSlice;