import { createSlice } from '@reduxjs/toolkit'
import { adminState } from '../interface';
import { checkTokenAction, loginAction, logoutAction } from '../actions';

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
    setAdminIsAdmin: (state, { payload }) => {
      state.isAdmin = payload;
    },
    clearAdminMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, setLoading)
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAdmin = true;
        localStorage.setItem('adminToken', payload);
        state.successMessage = 'Вы успешно авторизованы как АДМИН'
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при входе в админ.панель';
      })

      .addCase(checkTokenAction.pending, setLoading)
      .addCase(checkTokenAction.fulfilled, (state) => {
        state.isLoading = false;
        state.isAdmin = true;
      })
      .addCase(checkTokenAction.rejected, (state) => {
        state.isLoading = false;
        state.isAdmin = false;
        localStorage.removeItem('adminToken');
        state.errorMessage = 'Токен недействителен. Выход из аккаунта';
      })

      .addCase(logoutAction.pending, setLoading)
      .addCase(logoutAction.fulfilled, (state) => {
        state.isLoading = false;
        state.isAdmin = false;
        localStorage.removeItem('adminToken');
      })
      .addCase(logoutAction.rejected, (state) => {
        state.isLoading = false;
        state.isAdmin = false;
        localStorage.removeItem('adminToken');
      })
  },
})

export const {
  reducer: adminReducer,
  actions: {setAdminIsAdmin, clearAdminMessages},
} = adminSlice;