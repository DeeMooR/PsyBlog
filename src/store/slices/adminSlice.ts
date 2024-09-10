import { createSlice } from '@reduxjs/toolkit'
import { adminState } from '../interface';

const initialState: adminState = {
  isAdmin: true,
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
  },
})

export const {
  reducer: adminReducer,
  actions: {clearAdminMessages},
} = adminSlice;