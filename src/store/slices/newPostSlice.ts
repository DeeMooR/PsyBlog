import { createSlice } from '@reduxjs/toolkit'
import { newPostState } from '../interface';

const initialState: newPostState = {
  postData: {
    id: '',
    title: '',
    description: '',
    image: '',
    date: '',
    isActive: true,
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
    // builder
    //   .addCase(setReceiverEmailAction.pending, setLoading)
    //   .addCase(setReceiverEmailAction.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.successMessage = 'Вы успешно подписались на рассылку';
    //   })
    //   .addCase(setReceiverEmailAction.rejected, (state) => {
    //     state.isLoading = false;
    //     state.errorMessage = 'Ошибка при подписке на рассылку';
    //   })
  },
})

export const {
  reducer: newPostReducer,
  actions: {setNewPostNewBlockName, setNewPostErrorMessage, clearNewPostMessages},
} = newPostSlice;