import { createSlice } from '@reduxjs/toolkit'
import { postState } from '../interface';
import { getFullPostAction } from '../actions';

const initialState: postState = {
  postData: {
    id: null,
    title: '',
    image: null,
    date: null,
    isActive: false,
    topPriority: false,
    blocks: []
  },
  isLoading: false,
  successMessage: null,
  errorMessage: null,
}

const setLoading = (state: postState) => {
  state.isLoading = true;
  state.successMessage = null;
  state.errorMessage = null;
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearPostData: (state) => {
      Object.assign(state.postData, initialState.postData);
    },
    clearPostMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFullPostAction.pending, setLoading)
      .addCase(getFullPostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postData = payload;
      })
      .addCase(getFullPostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при получении статьи';
      })
  },
})

export const {
  reducer: postReducer,
  actions: {clearPostData, clearPostMessages},
} = postSlice;