import { createSlice } from '@reduxjs/toolkit'
import { newPostState } from '../interface';
import { createNewPostRequiredAction } from '../actions';

const initialState: newPostState = {
  postData: {
    id: '',
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
      .addCase(createNewPostRequiredAction.pending, setLoading)
      .addCase(createNewPostRequiredAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        Object.assign(state.postData, payload);
        state.successMessage = 'Пост успешно создан';
      })
      .addCase(createNewPostRequiredAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при создании поста';
      })
  },
})

export const {
  reducer: newPostReducer,
  actions: {setNewPostNewBlockName, setNewPostErrorMessage, clearNewPostMessages},
} = newPostSlice;