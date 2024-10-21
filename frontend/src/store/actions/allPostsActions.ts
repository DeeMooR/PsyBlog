import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOptionalPostFields, IShortPost } from "src/interfaces";
import { getShortPostsApi, getShortPostsAdminApi, updatePostApi } from "../api";

interface IUpdateShortPostsAction {
  id: number,
  body: IOptionalPostFields
}

export const getShortPostsAction = createAsyncThunk<IShortPost[], void>(
  'allPosts/getShortPostsAction',
  async () => {
    const posts = await getShortPostsApi();
    return posts;
  }
)

export const getShortPostsAdminAction = createAsyncThunk<IShortPost[], void>(
  'allPosts/getShortPostsAdminAction',
  async () => {
    const posts = await getShortPostsAdminApi();
    return posts;
  }
)

export const updateShortPostsAction = createAsyncThunk<void, IUpdateShortPostsAction>(
  'allPosts/updateShortPostsAction',
  async ({id, body}, {dispatch}) => {
    await updatePostApi(id, body);
    dispatch(getShortPostsAdminAction());
  }
)