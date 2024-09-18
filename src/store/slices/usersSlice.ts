import { createSlice } from '@reduxjs/toolkit'
import { usersState } from '../interface';
import { createUserAction, deleteUserAction, getShortPostsTopAction, getUsersAction } from '../actions';

const initialState: usersState = {
  users: [],
  isLoading: false,
  successMessage: null,
  errorMessage: null,
}

const setLoading = (state: usersState) => {
  state.isLoading = true;
  state.successMessage = null;
  state.errorMessage = null;
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUsersMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAction.pending, setLoading)
      .addCase(getUsersAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
      })
      .addCase(getUsersAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при получении пользователей';
      })

      .addCase(deleteUserAction.pending, setLoading)
      .addCase(deleteUserAction.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = 'Пользователь успешно удалён';
      })
      .addCase(deleteUserAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при удалении пользователя';
      })
  },
})

export const {
  reducer: usersReducer,
  actions: {clearUsersMessages},
} = usersSlice;