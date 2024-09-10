import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOptionalPostFields, IPostFields, IShortPost } from "src/interfaces";
import { getShortPostsApi, getShortPostsAdminApi, updatePostApi } from "../api";

interface IUpdateShortPostsAction {
  id: number,
  body: IOptionalPostFields
}

export const getShortPostsAction = createAsyncThunk<IShortPost[], void>(
  'allPosts/getShortPostsAction',
  async () => {
    const response = await getShortPostsApi();
    return response;
  }
)

export const getShortPostsAdminAction = createAsyncThunk<IShortPost[], void>(
  'allPosts/getShortPostsAdminAction',
  async () => {
    const response = await getShortPostsAdminApi();
    return response;
  }
)

export const updateShortPostsAction = createAsyncThunk<IShortPost[], IUpdateShortPostsAction>(
  'allPosts/updateShortPostsAction',
  async ({id, body}) => {
    await updatePostApi(id, body);
    const response = await getShortPostsAdminApi();
    return response;
  }
)
