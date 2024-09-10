import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOptionalPostFields, IFullPost, IPostRequiredFields } from "src/interfaces";
import { createPostApi, deletePostApi, getFullPostApi, updatePostApi } from "../api";

interface IUpdatePostAction {
  id: number,
  body: IOptionalPostFields
}

export const getFullPostAction = createAsyncThunk<IFullPost, number>(
  'newPost/getFullPostAction',
  async (id) => {
    const response = await getFullPostApi(id);
    return response;
  }
)

export const createPostAction = createAsyncThunk<IFullPost, IPostRequiredFields>(
  'newPost/createPostAction',
  async (body) => {
    const response = await createPostApi(body);
    return response;
  }
)

export const updatePostAction = createAsyncThunk<IFullPost, IUpdatePostAction>(
  'newPost/updatePostAction',
  async ({id, body}) => {
    const response = await updatePostApi(id, body);
    return response;
  }
)

export const deletePostAction = createAsyncThunk<void, number>(
  'newPost/deletePostAction',
  async (id) => {
    await deletePostApi(id);
  }
)