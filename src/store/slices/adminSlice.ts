import { createSlice } from '@reduxjs/toolkit'
import { adminState } from '../interface';
import { checkAdminAction } from '../actions';

const initialState: adminState = {
  isAdmin: false,
  isLoading: false,
  successMessage: null,
  errorMessage: null,
}

const setLoading = (state: adminState) => {
  state.isLoading = true;
  state.successMessage = null;
  state.errorMessage = null;
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearAdminMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAdminAction.pending, setLoading)
      .addCase(checkAdminAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAdmin = payload;
      })
      .addCase(checkAdminAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при входе в админ.панель';
      })
  },
})

export const {
  reducer: adminReducer,
  actions: {clearAdminMessages},
} = adminSlice;