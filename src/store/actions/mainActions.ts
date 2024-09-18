import { createAsyncThunk } from "@reduxjs/toolkit";
import { IShortPost, IUserForm } from "src/interfaces";
import { getShortPostsTopApi, createUserApi } from "../api";
import { formatDateToDateTime } from "../config";

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
    const date = formatDateToDateTime(new Date());
    const newBody = {...body, date};
    const posts = await createUserApi(newBody);
    return posts;
  }
)