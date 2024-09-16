import { createAsyncThunk } from "@reduxjs/toolkit";
import { IShortPost } from "src/interfaces";
import { getShortPostsTopApi } from "../api";

export const getShortPostsTopAction = createAsyncThunk<IShortPost[], void>(
  'main/getShortPostsTopAction',
  async () => {
    const posts = await getShortPostsTopApi();
    return posts;
  }
)