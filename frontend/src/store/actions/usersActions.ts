import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "src/interfaces";
import { getUsersApi, deleteUserApi } from "../api";

export const getUsersAction = createAsyncThunk<IUser[], void>(
  'users/getUsersAction',
  async () => {
    const users = await getUsersApi();
    return users;
  }
)

export const deleteUserAction = createAsyncThunk<void, number>(
  'users/deleteUserAction',
  async (id, { dispatch }) => {
    await deleteUserApi(id);
    dispatch(getUsersAction());
  }
)