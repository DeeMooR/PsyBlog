import { createSlice } from '@reduxjs/toolkit'
import { newPostState } from '../interface';

const initialState: newPostState = {
  postData: {
    id: '',
    title: '',
    description: '',
    image: '',
    date: '',
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
  actions: {setNewPostNewBlockName},
} = newPostSlice;