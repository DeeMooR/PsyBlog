import { createAsyncThunk } from "@reduxjs/toolkit";
import { IShortPost, IUserForm } from "src/interfaces";
import { getShortPostsTopApi, createUserApi } from "../api";

export const getShortPostsTopAction = createAsyncThunk<IShortPost[], void>(
  'main/getShortPostsTopAction',
  async () => {
    const posts = await getShortPostsTopApi();
    return posts;
  }
)

export const createUserAction = createAsyncThunk<void, IUserForm>(
  'main/createUserAction',
  async (body) => {
    const posts = await createUserApi(body);
    return posts;
  }
)