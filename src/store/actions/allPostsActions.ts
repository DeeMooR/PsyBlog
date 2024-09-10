import { createAsyncThunk } from "@reduxjs/toolkit";
import { IShortPost } from "src/interfaces";
import { getShortPostsApi, getShortPostsAdminApi } from "../api";

export const getShortPostsAction = createAsyncThunk<IShortPost[], void>(
  'admin/getShortPostsAction',
  async () => {
    const response = await getShortPostsApi();
    return response;
  }
)

export const getShortPostsAdminAction = createAsyncThunk<IShortPost[], void>(
  'admin/getShortPostsAdminAction',
  async () => {
    const response = await getShortPostsAdminApi();
    return response;
  }
)
