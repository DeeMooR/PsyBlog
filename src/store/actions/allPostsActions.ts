import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOptionalPostFields, IPostFields, IShortPost, IShortPostFile } from "src/interfaces";
import { getShortPostsApi, getShortPostsAdminApi, updatePostApi } from "../api";
import { base64StringToBlob } from "blob-util";
import { postsToPostsFile } from "../config";

interface IUpdateShortPostsAction {
  id: number,
  body: IOptionalPostFields
}

export const getShortPostsAction = createAsyncThunk<IShortPostFile[], void>(
  'allPosts/getShortPostsAction',
  async () => {
    const response = await getShortPostsApi();
    const posts = postsToPostsFile(response);
    return posts;
  }
)

export const getShortPostsAdminAction = createAsyncThunk<IShortPostFile[], void>(
  'allPosts/getShortPostsAdminAction',
  async () => {
    const response = await getShortPostsAdminApi();
    const posts = postsToPostsFile(response);
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